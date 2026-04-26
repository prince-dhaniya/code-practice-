import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Sun, Moon, LogOut, LayoutGrid, BookOpen } from 'lucide-react';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (p) => location.pathname === p;

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <img src={logo} alt="ApexCode" className="nav-logo" /> ApexCode
      </Link>
      {user && (
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}><LayoutGrid size={15} /> Dashboard</Link>
          <Link to="/problems" className={`nav-link ${isActive('/problems') ? 'active' : ''}`}><BookOpen size={15} /> Problems</Link>
        </div>
      )}
      <div className="nav-right">
        <button className="theme-toggle" onClick={toggleTheme}>{theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}</button>
        {user ? (
          <div className="nav-user-menu">
            <Link to="/profile" className="nav-avatar">
              {user.profilePic ? (
                <img src={user.profilePic} alt={user.name} className="nav-avatar-img" />
              ) : (
                <span className="nav-avatar-letter">{user.name?.charAt(0)?.toUpperCase() || 'U'}</span>
              )}
              <span className="nav-username">{user.name}</span>
            </Link>
            <button className="nav-logout" onClick={() => { logout(); navigate('/login'); }}><LogOut size={15} /></button>
          </div>
        ) : (
          <Link to="/login" className="btn-primary" style={{ padding: '0.35rem 0.8rem', fontSize: '0.82rem' }}>Sign In</Link>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
