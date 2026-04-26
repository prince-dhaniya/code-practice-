import React, { useRef, useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import { Play, Send, ChevronDown, Settings, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const EditorWorkspace = ({ code, setCode, language, setLanguage, onRun, onSubmit, isSubmitting, consoleOutput, errorLines = [], lastSavedAt, onReset }) => {
  const { theme } = useTheme();
  const editorRef = useRef(null);
  const decorationsRef = useRef([]);
  const [expandedCase, setExpandedCase] = useState(null);

  const handleEditorDidMount = (editor) => { editorRef.current = editor; };

  // Red pulse decorations
  useEffect(() => {
    if (!editorRef.current) return;
    const editor = editorRef.current;
    decorationsRef.current = editor.deltaDecorations(decorationsRef.current, []);
    if (errorLines.length > 0) {
      const newDecs = errorLines.map(lineNum => ({
        range: { startLineNumber: lineNum, startColumn: 1, endLineNumber: lineNum, endColumn: 1 },
        options: { isWholeLine: true, className: 'error-line-highlight', glyphMarginClassName: 'error-glyph', overviewRuler: { color: '#F85149', position: 1 } }
      }));
      decorationsRef.current = editor.deltaDecorations([], newDecs);
    }
  }, [errorLines]);

  // Reset expanded case when new output arrives
  useEffect(() => { setExpandedCase(null); }, [consoleOutput]);

  const statusColor = consoleOutput?.statusClass === 'success' ? '#4BB543' : consoleOutput?.statusClass === 'error' ? '#FF0000' : consoleOutput?.statusClass === 'warning' ? '#FFBF00' : 'var(--text-primary)';

  return (
    <div className="editor-panel" style={{ height: '100%' }}>
      <div className="pane-header" style={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="select-wrapper">
            <select className="language-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="javascript">JavaScript</option>
            </select>
            <ChevronDown className="select-icon" size={12} />
          </div>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Settings size={12} /> Vim: Off
          </span>
        </div>
      </div>

      <div style={{ flex: 1, borderBottom: '1px solid var(--border-default)' }}>
        <Editor
          height="100%"
          language={language}
          theme={theme === 'dark' ? 'vs-dark' : 'light'}
          value={code}
          onChange={(v) => setCode(v)}
          onMount={handleEditorDidMount}
          options={{ minimap: { enabled: false }, fontSize: 13, fontFamily: "'Fira Code', monospace", lineHeight: 22, padding: { top: 12, bottom: 12 }, scrollBeyondLastLine: false, glyphMargin: true }}
        />
      </div>

      {/* ===== CONSOLE WITH DETAILED TEST CASE RESULTS ===== */}
      <div className="console-area" style={{ height: '160px', background: '#0D1117', color: '#c9d1d9', overflowY: 'auto', borderBottom: '1px solid var(--border-default)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '0.4rem 0.8rem', fontSize: '0.72rem', fontWeight: 600, color: '#8b949e', borderBottom: '1px solid #30363d', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#010409' }}>
          <span>Terminal</span>
          {consoleOutput?.runtime && <span style={{ color: '#8b949e', fontSize: '0.68rem' }}>{consoleOutput.runtime} | {consoleOutput.memory}</span>}
        </div>
        <div style={{ padding: '0.6rem 0.8rem', fontFamily: "'Fira Code', monospace", fontSize: '0.75rem', flex: 1 }}>
          {consoleOutput ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {/* Status Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: statusColor, fontWeight: consoleOutput.statusClass === 'error' ? 800 : 700, fontSize: '0.85rem' }}>[{consoleOutput.status}]</span>
                {consoleOutput.message && <span style={{ color: '#c9d1d9', fontSize: '0.75rem' }}>— {consoleOutput.message}</span>}
              </div>

              {/* Mentor Note & Traceback for Errors */}
              {consoleOutput.mentorNote && (
                <div style={{ padding: '0.5rem', background: 'rgba(255, 0, 0, 0.08)', borderLeft: '3px solid #ff0000', borderRadius: '4px', fontSize: '0.7rem' }}>
                  <strong style={{ color: '#ff7b72' }}>🤖 Mentor Note: </strong>
                  <span style={{ color: '#e6edf3' }}>{consoleOutput.mentorNote}</span>
                  
                  {consoleOutput.traceback && (
                    <details style={{ marginTop: '0.5rem', cursor: 'pointer' }}>
                      <summary style={{ color: '#58a6ff', opacity: 0.9 }}>View Traceback</summary>
                      <div style={{ padding: '0.4rem', marginTop: '0.3rem', background: '#161b22', borderRadius: '4px', border: '1px solid #30363d' }}>
                        {consoleOutput.traceback.map((line, idx) => (
                           <div key={idx} style={{ opacity: 0.8 }}>{line}</div>
                        ))}
                      </div>
                    </details>
                  )}
                </div>
              )}

              {/* Efficiency Warning */}
              {consoleOutput.efficiencyWarning && (
                <div style={{ padding: '0.5rem', background: 'rgba(255, 191, 0, 0.1)', borderLeft: '3px solid #ffbf00', borderRadius: '4px', fontSize: '0.7rem' }}>
                  <strong style={{ color: '#ffbf00' }}>⚡ Efficiency Tip: </strong>
                  <span style={{ color: '#e6edf3' }}>{consoleOutput.efficiencyWarning}</span>
                </div>
              )}

              {/* Test Cases Table */}
              {consoleOutput.cases && (
                <div style={{ marginTop: '0.5rem', border: '1px solid #30363d', borderRadius: '6px', overflow: 'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.72rem' }}>
                    <thead style={{ background: '#161b22', borderBottom: '1px solid #30363d' }}>
                      <tr>
                        <th style={{ padding: '0.4rem 0.6rem', color: '#8b949e', fontWeight: 600 }}>Case</th>
                        <th style={{ padding: '0.4rem 0.6rem', color: '#8b949e', fontWeight: 600 }}>Input</th>
                        <th style={{ padding: '0.4rem 0.6rem', color: '#8b949e', fontWeight: 600 }}>Your Output</th>
                        <th style={{ padding: '0.4rem 0.6rem', color: '#8b949e', fontWeight: 600 }}>Expected</th>
                        <th style={{ padding: '0.4rem 0.6rem', color: '#8b949e', fontWeight: 600 }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {consoleOutput.cases.map(c => (
                        <tr key={c.id} style={{ borderBottom: '1px solid #30363d' }}>
                          <td style={{ padding: '0.4rem 0.6rem', color: '#c9d1d9' }}>{c.id}</td>
                          <td style={{ padding: '0.4rem 0.6rem', color: '#e6edf3', maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={c.input}>{c.input}</td>
                          <td style={{ padding: '0.4rem 0.6rem', color: c.passed ? '#3fb950' : '#ff7b72', maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={c.actual}>{c.actual}</td>
                          <td style={{ padding: '0.4rem 0.6rem', color: '#3fb950' }}>{c.expected}</td>
                          <td style={{ padding: '0.4rem 0.6rem', fontWeight: 600 }}>
                            {c.passed ? <span style={{ color: '#3fb950' }}>✅ Passed</span> : <span style={{ color: '#ff7b72' }}>❌ Failed</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ) : (
            <span style={{ color: '#8b949e', opacity: 0.7 }}>$ Waiting for code execution...</span>
          )}
        </div>
      </div>

      <div className="editor-footer" style={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
          {lastSavedAt && <span>Last saved at {lastSavedAt}</span>}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-secondary" onClick={onReset} disabled={isSubmitting} style={{ border: '1px solid var(--border-default)', color: 'var(--text-secondary)' }}>Reset</button>
          <button className="btn-secondary" onClick={onRun} disabled={isSubmitting}><Play size={13} /> Run</button>
          <button 
            className="btn-primary" 
            onClick={onSubmit} 
            disabled={isSubmitting || !code?.trim() || consoleOutput?.status !== 'Accepted'}
            title={consoleOutput?.status === 'Accepted' ? 'Submit Solution' : 'Run your code and pass all test cases first!'}
            style={{ opacity: (isSubmitting || !code?.trim() || consoleOutput?.status !== 'Accepted') ? 0.6 : 1, cursor: (isSubmitting || !code?.trim() || consoleOutput?.status !== 'Accepted') ? 'not-allowed' : 'pointer' }}
          >
            {isSubmitting ? 'Processing...' : <><Send size={13} /> Submit</>}
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditorWorkspace;
