import React, { useEffect, useRef, useState } from 'react';
import { Code2, Lightbulb, Bug, Zap, Activity, AlertTriangle, ShieldAlert, ShieldCheck, Send } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { analyzeCode } from '../services/aiService';
import ComplexityGauge from './ComplexityGauge';

const AIFeedbackPanel = ({ code, language, feedback, isAnalyzing, onNudge, isNudging, problem, analysisResult }) => {
  const panelRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);

  // Initialize welcome message when problem changes
  useEffect(() => {
    setMessages([
      { role: 'assistant', text: `Hey! I'm your AI Mentor for "${problem?.title}". Instead of giving you the answers, I'll help guide your logic. What's your initial approach for this?`, type: 'text' }
    ]);
    setHintIndex(0);
  }, [problem]);

  // Autoscroll
  useEffect(() => { 
    if (panelRef.current) panelRef.current.scrollTop = panelRef.current.scrollHeight; 
  }, [messages, feedback, analysisResult, isTyping]);

  // Handle incoming submission feedback and analysis results by adding them to the chat
  useEffect(() => {
    if (analysisResult && !analysisResult.passed && analysisResult.syntaxErrors?.length > 0) {
      setMessages(p => [...p, { role: 'system', type: 'error_summary', data: analysisResult.syntaxErrors }]);
    } else if (analysisResult && analysisResult.logicWarnings?.length > 0) {
      setMessages(p => [...p, { role: 'system', type: 'warning_summary', data: analysisResult.logicWarnings }]);
    }
  }, [analysisResult]);

  useEffect(() => {
    if (feedback?.isSubmit) {
      if (feedback.mentorMessage) {
         setMessages(p => [...p, { role: 'assistant', text: feedback.mentorMessage }]);
      } else if (feedback.errors?.length > 0) {
        // MODULE 2: The 'Smart Debugger' Module
        const error = feedback.errors[0];
        setMessages(p => [...p, { role: 'assistant', text: `Prince, I spotted a ${error.type || 'bug'} around line ${error.line || '?'}. ${error.message || 'Check your loop limits or type bindings'}. \n\nYou are close! Try reviewing the logic at that specific condition rather than rewriting the whole block.` }]);
      } else {
        setMessages(p => [...p, { role: 'assistant', text: `Awesome job getting all test cases to pass, Prince! Let's check your algorithm's efficiency:` }]);
        if(feedback.complexity) {
          setMessages(p => [...p, { role: 'system', type: 'complexity', data: feedback.complexity }]);
        }
        
        // MODULE 3: The 'Optimization' Module
        if (feedback.inefficiencies && feedback.inefficiencies.length > 0) {
          setMessages(p => [...p, { role: 'assistant', text: `You nailed the syntax, but there's room to optimize. Your code exhibits $O(n^2)$ complexity due to nested iteration. Try suggesting an optimal approach (e.g., $O(n)$ using a Hash Map). What do you think, Prince?` }]);
        }
      }
    }
  }, [feedback]);

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = inputText.trim();
    // Save current messages to a local constant before state update to pass to analyzeCode synchronously
    const currentHistory = [...messages];
    
    setMessages(p => [...p, { role: 'user', text: userMsg }]);
    setInputText('');
    setIsTyping(true);

    try {
      // Pass the complete editor memory, history, and current dialogue intent
      const res = await analyzeCode(code, language, problem, true, hintIndex, currentHistory, userMsg);
      setMessages(p => [...p, { role: 'assistant', text: res.hints[0] }]);
      setHintIndex(idx => idx + 1);
    } catch (err) {
      console.error(err);
    } finally {
      setIsTyping(false);
    }
  };

  const handleManualNudge = () => {
    // Treat the Get Help button as the user asking for approach
    setInputText("How to Approach?");
    handleSend({ preventDefault: () => {} });
  };

  return (
    <div className="feedback-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="pane-header" style={{ justifyContent: 'space-between', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center' }}>
          <Code2 size={15} color="var(--accent-primary)" />
          <span style={{ color: 'var(--text-heading)', fontWeight: 600 }}>AI Mentor</span>
        </div>
        <button className="btn-secondary" style={{ padding: '0.2rem 0.5rem', fontSize: '0.72rem' }} onClick={handleManualNudge} disabled={isTyping || isAnalyzing}>
          <Lightbulb size={11} color="var(--warning)" /> {isTyping || isAnalyzing ? 'Thinking...' : 'How to Approach?'}
        </button>
      </div>

      <div className="feedback-content" ref={panelRef} style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        
        {messages.map((msg, i) => {
          if (msg.role === 'system') {
            return (
              <div key={i} style={{ fontSize: '0.8rem' }}>
                {msg.type === 'error_summary' && (
                  <div className="mentor-alert-card">
                    <div className="mentor-alert-header">
                      <ShieldAlert size={16} color="var(--error)" />
                      <div><strong>Execution Blocked</strong> - Syntax issues found prior to run.</div>
                    </div>
                  </div>
                )}
                {msg.type === 'warning_summary' && msg.data.map((w, idx) => (
                  <div key={idx} className="mentor-bubble bubble-hint">
                    <AlertTriangle size={12} color="var(--warning)" style={{float:'left', marginRight:'0.3rem'}} />
                    <strong>Logic Warning:</strong> {w.title} - {w.message}
                  </div>
                ))}
                {msg.type === 'complexity' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <ComplexityGauge title="Time Complexity" value={msg.data.time || 'O(n)'} color="var(--accent-blue)" description="Health Score based on algorithm time efficiency." />
                    <ComplexityGauge title="Space Complexity" value={msg.data.space || 'O(n)'} color="var(--accent-primary)" description="Health Score based on memory usage footprint." />
                  </div>
                )}
              </div>
            );
          }

          const isUser = msg.role === 'user';
          return (
            <div key={i} style={{ alignSelf: isUser ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
              <div style={{
                background: isUser ? 'var(--accent-blue)' : 'var(--bg-card)',
                color: isUser ? '#fff' : 'var(--text-primary)',
                padding: '0.6rem 0.8rem',
                borderRadius: isUser ? '12px 12px 0 12px' : '12px 12px 12px 0',
                border: isUser ? 'none' : '1px solid var(--border-default)',
                fontSize: '0.85rem', lineHeight: '1.5'
              }}>
                {isUser ? msg.text : (
                  <ReactMarkdown
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        return inline ? (
                          <code style={{ background: 'rgba(110,118,129,0.25)', padding: '0.15rem 0.35rem', borderRadius: '4px', fontSize: '0.82rem', fontFamily: 'monospace' }} {...props}>{children}</code>
                        ) : (
                          <pre style={{ background: 'var(--bg-elevated)', padding: '0.8rem', borderRadius: '6px', overflowX: 'auto', margin: '0.5rem 0', border: '1px solid var(--border-default)' }}>
                            <code style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--text-primary)' }} {...props}>{children}</code>
                          </pre>
                        );
                      },
                      p({ children }) { return <p style={{ margin: '0.4rem 0' }}>{children}</p>; },
                      strong({ children }) { return <strong style={{ color: 'var(--text-heading)' }}>{children}</strong>; },
                      ul({ children }) { return <ul style={{ paddingLeft: '1.2rem', margin: '0.3rem 0' }}>{children}</ul>; },
                      ol({ children }) { return <ol style={{ paddingLeft: '1.2rem', margin: '0.3rem 0' }}>{children}</ol>; },
                      li({ children }) { return <li style={{ marginBottom: '0.2rem' }}>{children}</li>; },
                    }}
                  >{msg.text}</ReactMarkdown>
                )}
              </div>
            </div>
          );
        })}

        {(isTyping || isAnalyzing) && (
          <div style={{ alignSelf: 'flex-start', background: 'var(--bg-card)', padding: '0.6rem 0.8rem', borderRadius: '12px 12px 12px 0', border: '1px solid var(--border-default)' }}>
            <div className="spinner" style={{ width: '12px', height: '12px', border: '2px solid var(--accent-blue)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          </div>
        )}
      </div>

      <div style={{ padding: '0.8rem', borderTop: '1px solid var(--border-default)', background: 'var(--bg-main)' }}>
        <form onSubmit={handleSend} style={{ display: 'flex', gap: '0.5rem' }}>
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask me anything..." 
            disabled={isTyping || isAnalyzing}
            style={{ flex: 1, padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-default)', background: 'var(--bg-input)', color: 'var(--text-primary)', fontSize: '0.85rem', fontFamily: 'inherit' }}
          />
          <button type="submit" disabled={isTyping || isAnalyzing || !inputText.trim()} style={{ background: 'var(--accent-blue)', color: '#fff', border: 'none', borderRadius: '6px', width: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Send size={14} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIFeedbackPanel;
