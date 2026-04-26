import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight, ArrowLeft, KeyRound, Mail, CheckCircle2 } from 'lucide-react';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext';
import LoadingOverlay from '../components/LoadingOverlay';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const { login, resetPassword } = useAuth();
  const navigate = useNavigate();

  // Reset password flow states
  const [resetMode, setResetMode] = useState(false);      // show reset form
  const [resetStep, setResetStep] = useState(1);           // 1=email, 2=new password, 3=success
  const [resetEmail, setResetEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPass, setShowNewPass] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [resetError, setResetError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      // Login succeeded — show the cinematic loading overlay
      setLoading(false);
      setShowOverlay(true);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleLoadingComplete = useCallback(() => {
    navigate('/');
  }, [navigate]);

  // Reset flow: Step 1 — Verify email
  const handleResetEmailSubmit = async (e) => {
    e.preventDefault();
    setResetError('');
    if (!resetEmail.trim()) {
      setResetError('Please enter your email address.');
      return;
    }
    setResetLoading(true);
    // Just advance to step 2 — the actual email check happens when they submit the new password
    setTimeout(() => {
      setResetLoading(false);
      setResetStep(2);
    }, 500);
  };

  // Reset flow: Step 2 — Set new password
  const handleNewPasswordSubmit = async (e) => {
    e.preventDefault();
    setResetError('');
    if (newPassword.length < 4) {
      setResetError('Password must be at least 4 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setResetError('Passwords do not match.');
      return;
    }
    setResetLoading(true);
    try {
      await resetPassword(resetEmail.trim(), newPassword);
      setResetLoading(false);
      setResetStep(3);
    } catch (err) {
      setResetError(err.message);
      setResetLoading(false);
    }
  };

  // Go back to login from reset
  const backToLogin = () => {
    setResetMode(false);
    setResetStep(1);
    setResetEmail('');
    setNewPassword('');
    setConfirmPassword('');
    setResetError('');
  };

  return (
    <>
      {/* Cinematic Loading Overlay */}
      <LoadingOverlay isVisible={showOverlay} onComplete={handleLoadingComplete} />

      <div className={`auth-page ${showOverlay ? 'auth-hiding' : ''}`}>
        <div className="auth-card card">
          <div className="auth-logo">
            <img src={logo} alt="ApexCode" className="auth-logo-img" />
            <h1>ApexCode</h1>
            <p>{resetMode ? 'Reset your password' : 'Sign in to continue your coding journey'}</p>
          </div>

          {/* ========== LOGIN FORM ========== */}
          {!resetMode && (
            <>
              {error && <div className="auth-error">{error}</div>}
              <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                  <label htmlFor="login-email">Email</label>
                  <input id="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="login-password">Password</label>
                  <div className="input-icon-wrap">
                    <input id="login-password" type={showPass ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
                    <button type="button" className="input-icon-btn" onClick={() => setShowPass(!showPass)}>{showPass ? <EyeOff size={15} /> : <Eye size={15} />}</button>
                  </div>
                </div>
                <div style={{ textAlign: 'right', marginTop: '-0.3rem', marginBottom: '0.5rem' }}>
                  <button 
                    type="button"
                    onClick={() => setResetMode(true)}
                    style={{
                      background: 'none', border: 'none', color: 'var(--accent-blue)',
                      fontSize: '0.82rem', cursor: 'pointer', fontFamily: 'inherit',
                      padding: 0, textDecoration: 'underline',
                      transition: 'color 0.2s'
                    }}
                  >
                    Forgot Password?
                  </button>
                </div>
                <button type="submit" className="btn-primary auth-btn" disabled={loading}>
                  {loading ? (
                    <><span className="btn-spinner" /> Authenticating...</>
                  ) : (
                    <>Sign In <ArrowRight size={15} /></>
                  )}
                </button>
              </form>
              <p className="auth-footer">Don't have an account? <Link to="/register">Create one</Link></p>
            </>
          )}

          {/* ========== RESET PASSWORD FLOW ========== */}
          {resetMode && (
            <div style={{ width: '100%' }}>
              {resetError && <div className="auth-error">{resetError}</div>}

              {/* Step 1: Enter Email */}
              {resetStep === 1 && (
                <form onSubmit={handleResetEmailSubmit} className="auth-form">
                  <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <div style={{
                      width: '56px', height: '56px', borderRadius: '50%',
                      background: 'rgba(88, 166, 255, 0.1)', border: '2px solid var(--accent-blue)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 0.8rem'
                    }}>
                      <Mail size={24} color="var(--accent-blue)" />
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                      Enter the email address associated with your account.
                    </p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="reset-email">Email Address</label>
                    <input 
                      id="reset-email" type="email" 
                      value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} 
                      placeholder="you@example.com" required 
                    />
                  </div>
                  <button type="submit" className="btn-primary auth-btn" disabled={resetLoading}>
                    {resetLoading ? (
                      <><span className="btn-spinner" /> Verifying...</>
                    ) : (
                      <>Continue <ArrowRight size={15} /></>
                    )}
                  </button>
                  <button type="button" onClick={backToLogin} className="btn-secondary" style={{ width: '100%', marginTop: '0.75rem', justifyContent: 'center' }}>
                    <ArrowLeft size={14} /> Back to Sign In
                  </button>
                </form>
              )}

              {/* Step 2: Set New Password */}
              {resetStep === 2 && (
                <form onSubmit={handleNewPasswordSubmit} className="auth-form">
                  <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <div style={{
                      width: '56px', height: '56px', borderRadius: '50%',
                      background: 'rgba(210, 168, 255, 0.1)', border: '2px solid #d2a8ff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 0.8rem'
                    }}>
                      <KeyRound size={24} color="#d2a8ff" />
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                      Create a new password for <strong style={{ color: 'var(--text-heading)' }}>{resetEmail}</strong>
                    </p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="new-password">New Password</label>
                    <div className="input-icon-wrap">
                      <input 
                        id="new-password" type={showNewPass ? 'text' : 'password'}
                        value={newPassword} onChange={(e) => setNewPassword(e.target.value)} 
                        placeholder="Enter new password" required minLength={4}
                      />
                      <button type="button" className="input-icon-btn" onClick={() => setShowNewPass(!showNewPass)}>
                        {showNewPass ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input 
                      id="confirm-password" type="password"
                      value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} 
                      placeholder="Re-enter new password" required minLength={4}
                    />
                  </div>
                  <button type="submit" className="btn-primary auth-btn" disabled={resetLoading}>
                    {resetLoading ? (
                      <><span className="btn-spinner" /> Resetting...</>
                    ) : (
                      <>Reset Password <KeyRound size={15} /></>
                    )}
                  </button>
                  <button type="button" onClick={() => { setResetStep(1); setResetError(''); }} className="btn-secondary" style={{ width: '100%', marginTop: '0.75rem', justifyContent: 'center' }}>
                    <ArrowLeft size={14} /> Go Back
                  </button>
                </form>
              )}

              {/* Step 3: Success Confirmation */}
              {resetStep === 3 && (
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '50%',
                    background: 'rgba(46, 160, 67, 0.12)', border: '2px solid var(--success)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1rem',
                    animation: 'fadeIn 0.4s ease'
                  }}>
                    <CheckCircle2 size={30} color="var(--success)" />
                  </div>
                  <h3 style={{ color: 'var(--text-heading)', marginBottom: '0.5rem' }}>Password Reset Successful!</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    Your password has been updated. You can now sign in with your new credentials.
                  </p>
                  <button 
                    onClick={backToLogin} 
                    className="btn-primary auth-btn"
                  >
                    Sign In Now <ArrowRight size={15} />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Login;
