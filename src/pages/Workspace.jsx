import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sun, Moon, Timer, MonitorOff, User } from 'lucide-react';
import logo from '../assets/logo.png';
import { problems } from '../data/problems';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import EditorWorkspace from '../components/EditorWorkspace';
import AIFeedbackPanel from '../components/AIFeedbackPanel';
import LoadingOverlay from '../components/LoadingOverlay';
import { analyzeCode } from '../services/aiService';
import { runStaticAnalysis } from '../services/staticAnalyzer';
import { executeCode } from '../services/codeExecutor';

const Workspace = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const problemIndex = problems.findIndex(p => p.id === parseInt(id));
  const problem = problems[problemIndex];
  const prevProblem = problemIndex > 0 ? problems[problemIndex - 1] : null;
  const nextProblem = problemIndex >= 0 && problemIndex < problems.length - 1 ? problems[problemIndex + 1] : null;
  const { user, saveSubmission, getSolved } = useAuth();
  const solvedCount = getSolved().length;
  const [showProfileDrop, setShowProfileDrop] = useState(false);
  const userInitials = (user?.fullName || user?.name || 'U').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  const { theme, toggleTheme } = useTheme();

  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [consoleOutput, setConsoleOutput] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [submitProgress, setSubmitProgress] = useState(0);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [errorLines, setErrorLines] = useState([]);
  const [isWorkspaceLoading, setIsWorkspaceLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [lastSavedAt, setLastSavedAt] = useState(null);

  // Mock Interview Mode States
  const [isInterviewMode, setIsInterviewMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45 * 60);

  useEffect(() => {
    let timer;
    if (isInterviewMode && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isInterviewMode, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (problem) {
      setIsWorkspaceLoading(true);
      setTimeout(() => setIsWorkspaceLoading(false), 600); // Simulate fetch

      const savedCode = localStorage.getItem(`apexcode_backup_${problem.id}_${language}`);
      if (savedCode) {
        setCode(savedCode);
      } else {
        setCode(problem.boilerplates[language]);
      }
      setFeedback(null);
      setConsoleOutput(null);
      setSubmitProgress(0);
      setAnalysisResult(null);
      setErrorLines([]);
    }
  }, [problem, language]);

  // Auto-Save code with Debounce
  useEffect(() => {
    if (!problem || !code) return;
    
    const timer = setTimeout(() => {
      localStorage.setItem(`apexcode_backup_${problem.id}_${language}`, code);
      const now = new Date();
      setLastSavedAt(now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [code, language, problem]);

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset your code? This will clear your changes and restore the boilerplate.")) {
      localStorage.removeItem(`apexcode_backup_${problem.id}_${language}`);
      setCode(problem.boilerplates[language]);
      setLastSavedAt(null);
    }
  };

  // Clear error highlights when user types
  useEffect(() => {
    if (errorLines.length > 0) {
      const timeout = setTimeout(() => setErrorLines([]), 3000);
      return () => clearTimeout(timeout);
    }
  }, [code]);

  if (!problem) return <div style={{ color: 'var(--text-primary)', padding: '2rem' }}>Problem not found</div>;
  if (isWorkspaceLoading) return <LoadingOverlay text="Initializing Environment..." />;

  // ===== SAFE-RUN MIDDLEWARE =====
  const safeRunMiddleware = (callback) => {
    const result = runStaticAnalysis(code, language, problem);
    setAnalysisResult(result);
    setErrorLines(result.errorLines);

    if (!result.passed) {
      setConsoleOutput({
        status: 'Blocked',
        statusClass: 'error',
        message: `${result.syntaxErrors.length} issue(s) found. Fix them before running.`,
      });
      setFeedback(null);
      return false;
    }

    if (result.logicWarnings.length > 0) {
      setErrorLines(result.logicWarnings.filter(w => w.line > 0).map(w => w.line));
    }

    callback();
    return true;
  };

  // ===== RUN CODE (tests against test cases) =====
  const handleRunCode = () => {
    safeRunMiddleware(async () => {
      setIsRunning(true);
      setConsoleOutput({ status: 'Running...', statusClass: 'neutral', message: 'Executing test cases...' });

      try {
        const result = await executeCode(code, language, problem);
        setConsoleOutput(result);
        if (result.errorLine) {
          setErrorLines([result.errorLine]);
        }
      } catch (e) {
        setConsoleOutput({ status: 'Error', statusClass: 'error', message: 'An unexpected error occurred.' });
      } finally {
        setIsRunning(false);
      }
    });
  };

  // ===== SUBMIT CODE (tests + AI analysis) =====
  const handleSubmit = () => {
    safeRunMiddleware(async () => {
      setIsSubmitting(true);
      setFeedback(null);
      setSubmitProgress(0);
      setConsoleOutput({ status: 'Judging...', statusClass: 'neutral', message: 'Running all test cases...' });

      const interval = setInterval(() => {
        setSubmitProgress(prev => {
          if (prev >= 90) { clearInterval(interval); return 90; }
          return prev + Math.random() * 12;
        });
      }, 200);

      try {
        // Run code executor first
        const execResult = await executeCode(code, language, problem);
        setConsoleOutput(execResult);
        if (execResult.errorLine) {
          setErrorLines([execResult.errorLine]);
        }

        if (isInterviewMode) {
          clearInterval(interval);
          setSubmitProgress(100);
          if (execResult.status === 'Accepted') {
            saveSubmission(problem.id, 'Accepted', execResult.runtime || '0ms', code);
            setConsoleOutput(prev => ({...prev, mentorNote: "Submission accepted in mock interview mode! No further AI feedback provided."}));
            setToast({ type: 'success', message: 'Solution Accepted & Saved!' });
          } else {
            setToast({ type: 'error', message: 'Test Cases Failed. Try again.' });
          }
          setTimeout(() => setToast(null), 4000);
          return; // Skip AI analysis in interview mode
        }

        // Then run AI analysis
        const aiResult = await analyzeCode(code, language, problem);
        clearInterval(interval);
        setSubmitProgress(100);

        // Merge: use exec result for pass/fail, AI for hints/complexity
        setFeedback({
          ...aiResult,
          isSubmit: true,
          efficiencyWarning: execResult.efficiencyWarning,
          errors: execResult.status === 'Accepted' ? [] : (execResult.errorType ? [{ message: execResult.message, line: execResult.errorLine }] : aiResult.errors),
        });

        if (execResult.status === 'Accepted') {
          saveSubmission(problem.id, 'Accepted', execResult.runtime || '0ms', code);
          setToast({ type: 'success', message: 'Solution Accepted & Saved!' });
        } else {
          setToast({ type: 'error', message: 'Test Cases Failed. Try again.' });
        }
        setTimeout(() => setToast(null), 4000);
      } catch (e) {
        clearInterval(interval);
        console.error(e);
      } finally {
        setTimeout(() => { setIsSubmitting(false); setSubmitProgress(0); }, 500);
      }
    });
  };

  // ===== GET HELP (nudge) =====
  const handleNudge = async () => {
    setIsAnalyzing(true);
    try {
      const result = await analyzeCode(code, language, problem, true, feedback?.hints?.length || 0);
      setFeedback(prev => ({ ...prev, hints: [...(prev?.hints || []), ...result.hints] }));
    } catch (e) {} finally { setIsAnalyzing(false); }
  };

  return (
    <div className="app-container">
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      )}
      {isSubmitting && <div className="submit-progress-bar"><div className="submit-progress-fill" style={{ width: `${submitProgress}%` }}></div></div>}

      <header className="ws-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button className="btn-icon" onClick={() => navigate('/')}><ChevronLeft size={18} /> Back</button>
          
          <span style={{ color: 'var(--border-default)' }}>|</span>
          <div style={{ display: 'flex', gap: '0.2rem' }}>
            <button 
              className="btn-icon" 
              onClick={() => prevProblem && navigate(`/problem/${prevProblem.id}`)}
              disabled={!prevProblem}
              style={{ opacity: prevProblem ? 1 : 0.3, padding: '0.2rem' }}
              title="Previous Problem"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              className="btn-icon" 
              onClick={() => nextProblem && navigate(`/problem/${nextProblem.id}`)}
              disabled={!nextProblem}
              style={{ opacity: nextProblem ? 1 : 0.3, padding: '0.2rem' }}
              title="Next Problem"
            >
              <ChevronRight size={16} />
            </button>
          </div>
          <span style={{ color: 'var(--border-default)' }}>|</span>

          <span style={{ fontWeight: 600, color: 'var(--text-heading)', fontSize: '0.95rem' }}>{problem.title}</span>
          <span className={`tag diff-${problem.difficulty.toLowerCase()}`}>{problem.difficulty}</span>

          {problem.companies?.slice(0, 2).map(c => <span key={c} className="tag tag-company">{c}</span>)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button 
            className={`btn-secondary btn-sm ${isInterviewMode ? 'active-interview' : ''}`}
            onClick={() => setIsInterviewMode(!isInterviewMode)}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', border: isInterviewMode ? '1px solid var(--error)' : '1px solid var(--border-default)', color: isInterviewMode ? 'var(--error)' : 'inherit' }}
          >
            {isInterviewMode ? <MonitorOff size={14} /> : <Timer size={14} />} 
            {isInterviewMode ? 'Exit Interview' : 'Mock Interview'}
          </button>
          <span style={{ color: 'var(--border-default)' }}>|</span>
          <button className="theme-toggle" onClick={toggleTheme}>{theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}</button>
          <div className="logo-container"><img src={logo} alt="ApexCode" className="ws-logo" /><span className="logo-text">ApexCode</span></div>
          <span style={{ color: 'var(--border-default)' }}>|</span>
          {/* User Profile Badge */}
          <div style={{ position: 'relative' }}>
            <div 
              onClick={() => setShowProfileDrop(!showProfileDrop)}
              style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-blue), #d2a8ff)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', fontSize: '0.72rem', fontWeight: 700, color: '#fff',
                border: '2px solid var(--border-default)', transition: 'box-shadow 0.2s',
                boxShadow: showProfileDrop ? '0 0 0 3px var(--accent-glow)' : 'none'
              }}
              title={user?.fullName || user?.name || 'Profile'}
            >
              {userInitials}
            </div>
            {showProfileDrop && (
              <div style={{
                position: 'absolute', top: '40px', right: 0, width: '220px',
                background: 'var(--bg-card)', border: '1px solid var(--border-default)',
                borderRadius: '10px', padding: '1rem', zIndex: 999,
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                animation: 'fadeIn 0.15s ease'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent-blue), #d2a8ff)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.85rem', fontWeight: 700, color: '#fff'
                  }}>{userInitials}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-heading)' }}>{user?.fullName || user?.name || 'Coder'}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>{user?.email || ''}</div>
                  </div>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid var(--border-muted)', margin: '0.5rem 0' }} />
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  <strong style={{ color: 'var(--success)' }}>{solvedCount}</strong> problems solved
                </div>
                <button 
                  className="btn-secondary" 
                  style={{ width: '100%', fontSize: '0.78rem', padding: '0.4rem', justifyContent: 'center' }}
                  onClick={() => { setShowProfileDrop(false); navigate('/profile'); }}
                >
                  <User size={13} /> View Full Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="workspace-3pane" style={{ gridTemplateColumns: isInterviewMode ? '1fr 2fr' : '1fr 2fr 1fr' }}>
        <div className="pane pane-desc" style={{ background: 'var(--bg-main)' }}>
          <div className="pane-header">Description</div>
          <div className="pane-content">
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className={`tag diff-${problem.difficulty.toLowerCase()}`}>{problem.difficulty}</span>
              <span className="tag tag-cat">{problem.category}</span>
              {problem.subTopic && <span className="tag" style={{ background: 'rgba(210,168,255,0.1)', color: '#d2a8ff', fontSize: '0.7rem' }}>{problem.subTopic}</span>}
            </div>

            <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{problem.description}</div>
            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.6rem', color: 'var(--text-heading)' }}>Examples</h4>
            {problem.examples?.map((ex, i) => (
              <div key={i} className="example-block">
                <strong>Input:</strong> {ex.input}<br /><strong>Output:</strong> {ex.output}
                {ex.explanation && <><br /><br /><strong>Explanation:</strong> {ex.explanation}</>}
              </div>
            ))}
            {problem.constraints?.length > 0 && (
              <>
                <h4 style={{ marginTop: '1.5rem', marginBottom: '0.6rem', color: 'var(--text-heading)' }}>Constraints</h4>
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  {problem.constraints.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="pane pane-editor">
          <EditorWorkspace
            code={code} setCode={setCode}
            language={language} setLanguage={setLanguage}
            onRun={handleRunCode} onSubmit={handleSubmit}
            isSubmitting={isSubmitting || isRunning}
            consoleOutput={consoleOutput}
            errorLines={errorLines}
            lastSavedAt={lastSavedAt}
            onReset={handleReset}
          />
        </div>
        {!isInterviewMode ? (
          <div className="pane pane-mentor">
            <AIFeedbackPanel
              code={code}
              language={language}
              feedback={feedback}
              isAnalyzing={isAnalyzing || isSubmitting}
              onNudge={handleNudge}
              isNudging={isAnalyzing && !isSubmitting}
              problem={problem}
              analysisResult={analysisResult}
            />
          </div>
        ) : (
          <div style={{ position: 'absolute', top: '70px', right: '20px', zIndex: 100, background: 'rgba(248, 81, 73, 0.1)', border: '2px solid var(--error)', borderRadius: '12px', padding: '1rem', color: 'var(--error)', display: 'flex', alignItems: 'center', gap: '0.8rem', backdropFilter: 'blur(10px)' }}>
             <Timer size={24} />
             <div style={{ fontSize: '1.8rem', fontWeight: 'bold', fontFamily: 'monospace' }}>{formatTime(timeLeft)}</div>
          </div>
        )}
      </main>
    </div>
  );
};
export default Workspace;
