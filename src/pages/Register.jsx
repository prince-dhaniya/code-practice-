import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, UserPlus } from 'lucide-react';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); setError('');
    if (password.length < 6) { setError('Password must be at least 6 characters'); return; }
    setLoading(true);
    try { await register(name, email, password); navigate('/login'); }
    catch (err) { setError(err.message); }
    finally { setLoading(false); }
  };

  return (
    <div className="auth-page">
      <div className="auth-card card">
        <div className="auth-logo">
          <img src={logo} alt="ApexCode" className="auth-logo-img" />
          <h1>Join ApexCode</h1>
          <p>Create an account to start solving problems</p>
        </div>
        {error && <div className="auth-error">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group"><label htmlFor="reg-name">Full Name</label><input id="reg-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required /></div>
          <div className="form-group"><label htmlFor="reg-email">Email</label><input id="reg-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required /></div>
          <div className="form-group">
            <label htmlFor="reg-password">Password</label>
            <div className="input-icon-wrap">
              <input id="reg-password" type={showPass ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min. 6 characters" required />
              <button type="button" className="input-icon-btn" onClick={() => setShowPass(!showPass)}>{showPass ? <EyeOff size={15} /> : <Eye size={15} />}</button>
            </div>
          </div>
          <button type="submit" className="btn-primary auth-btn" disabled={loading}>{loading ? 'Creating...' : <>Create Account <UserPlus size={15} /></>}</button>
        </form>
        <p className="auth-footer">Already have an account? <Link to="/login">Sign in</Link></p>
      </div>
    </div>
  );
};
export default Register;
