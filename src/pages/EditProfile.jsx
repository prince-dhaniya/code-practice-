import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Camera, Save, ArrowLeft, User, GraduationCap, FileText,
  X, Plus, CheckCircle2, AlertCircle, Shield, ExternalLink
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LinkedinIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

const GithubIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
);

const LINKEDIN_REGEX = /^https?:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/i;
const GITHUB_REGEX = /^https?:\/\/(www\.)?github\.com\/[\w-]+\/?$/i;

const EditProfile = () => {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [fullName, setFullName] = useState(user?.fullName || user?.name || '');
  const [college, setCollege] = useState(user?.college || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [profilePic, setProfilePic] = useState(user?.profilePic || '');
  const [skills, setSkills] = useState(user?.skills || []);
  const [skillInput, setSkillInput] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState(user?.linkedinUrl || '');
  const [githubUrl, setGithubUrl] = useState(user?.githubUrl || '');
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setFullName(user.fullName || user.name || '');
      setCollege(user.college || '');
      setBio(user.bio || '');
      setProfilePic(user.profilePic || '');
      setSkills(user.skills || []);
      setLinkedinUrl(user.linkedinUrl || '');
      setGithubUrl(user.githubUrl || '');
    }
  }, [user]);

  // Profile completeness calculation
  const completeness = useMemo(() => {
    let score = 0;
    const total = 7;
    if (fullName.trim()) score++;
    if (profilePic) score++;
    if (college.trim()) score++;
    if (bio.trim()) score++;
    if (skills.length > 0) score++;
    if (linkedinUrl.trim() && LINKEDIN_REGEX.test(linkedinUrl)) score++;
    if (githubUrl.trim() && GITHUB_REGEX.test(githubUrl)) score++;
    return Math.round((score / total) * 100);
  }, [fullName, profilePic, college, bio, skills, linkedinUrl, githubUrl]);

  const getCompletenessMessage = () => {
    if (completeness <= 25) return { text: 'Add your college to be discovered by recruiters.', icon: <AlertCircle size={14} /> };
    if (completeness <= 50) return { text: 'Link your GitHub to showcase your work.', icon: <AlertCircle size={14} /> };
    if (completeness < 100) return { text: 'Almost there! Complete your profile for placements.', icon: <Shield size={14} /> };
    return { text: 'Profile Complete! You\'re ready for placements. 🎉', icon: <CheckCircle2 size={14} /> };
  };

  const getCompletenessColor = () => {
    if (completeness <= 25) return 'var(--error)';
    if (completeness <= 50) return 'var(--warning)';
    if (completeness < 100) return 'var(--accent-blue)';
    return 'var(--success)';
  };

  // Handle profile photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      setToast({ type: 'error', text: 'Image must be under 2MB' });
      setTimeout(() => setToast(null), 3000);
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => setProfilePic(ev.target.result);
    reader.readAsDataURL(file);
  };

  // Skills tag management
  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !skills.includes(trimmed) && skills.length < 15) {
      setSkills([...skills, trimmed]);
      setSkillInput('');
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const handleSkillKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
    // Remove last skill with backspace if input is empty
    if (e.key === 'Backspace' && !skillInput && skills.length > 0) {
      setSkills(skills.slice(0, -1));
    }
  };

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = 'Name is required';
    if (linkedinUrl.trim() && !LINKEDIN_REGEX.test(linkedinUrl)) {
      newErrors.linkedinUrl = 'Enter a valid LinkedIn URL (https://linkedin.com/in/username)';
    }
    if (githubUrl.trim() && !GITHUB_REGEX.test(githubUrl)) {
      newErrors.githubUrl = 'Enter a valid GitHub URL (https://github.com/username)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Save handler
  const handleSave = async () => {
    if (!validate()) return;
    setSaving(true);
    try {
      await updateProfile({
        fullName,
        college,
        bio,
        profilePic,
        skills,
        linkedinUrl,
        githubUrl,
      });
      setToast({ type: 'success', text: 'Profile updated successfully!' });
      setTimeout(() => {
        setToast(null);
        navigate('/profile');
      }, 1500);
    } catch (err) {
      setToast({ type: 'error', text: 'Failed to save. Try again.' });
      setTimeout(() => setToast(null), 3000);
    } finally {
      setSaving(false);
    }
  };

  const msg = getCompletenessMessage();

  return (
    <div className="edit-profile-page">
      {/* Toast Notification */}
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          {toast.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
          {toast.text}
        </div>
      )}

      {/* Header */}
      <div className="edit-header">
        <button className="btn-icon" onClick={() => navigate('/profile')}>
          <ArrowLeft size={18} /> Back to Profile
        </button>
        <h1>Edit Profile</h1>
        <p>Customize your Developer Brand</p>
      </div>

      {/* Profile Strength Bar */}
      <div className="glass-panel strength-card">
        <div className="strength-header">
          <h3>Profile Strength</h3>
          <span className="strength-pct" style={{ color: getCompletenessColor() }}>{completeness}%</span>
        </div>
        <div className="strength-track">
          <div
            className="strength-fill"
            style={{ width: `${completeness}%`, background: getCompletenessColor() }}
          />
        </div>
        <div className="strength-msg" style={{ color: getCompletenessColor() }}>
          {msg.icon} {msg.text}
        </div>
      </div>

      {/* Edit Grid */}
      <div className="edit-grid">
        {/* Profile Photo Section */}
        <div className="glass-panel edit-photo-section">
          <h3>Profile Photo</h3>
          <div className="photo-upload-area">
            <div className="photo-preview" onClick={() => fileInputRef.current?.click()}>
              {profilePic ? (
                <img src={profilePic} alt="Profile" />
              ) : (
                <div className="photo-placeholder">
                  {fullName?.charAt(0)?.toUpperCase() || 'U'}
                </div>
              )}
              <div className="photo-overlay">
                <Camera size={20} />
              </div>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              style={{ display: 'none' }}
            />
            <p className="photo-hint">Click to upload • Max 2MB</p>
            {profilePic && (
              <button className="btn-secondary btn-sm" onClick={() => setProfilePic('')}>
                <X size={12} /> Remove Photo
              </button>
            )}
          </div>
        </div>

        {/* Personal Info Section */}
        <div className="glass-panel edit-info-section">
          <h3><User size={16} /> Personal Info</h3>
          <div className="edit-form-grid">
            <div className="form-group">
              <label htmlFor="edit-fullname">Full Name</label>
              <input
                id="edit-fullname"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
              />
              {errors.fullName && <span className="field-error">{errors.fullName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="edit-email">Email</label>
              <input
                id="edit-email"
                type="email"
                value={user?.email || ''}
                disabled
                className="input-disabled"
              />
              <span className="field-hint">Email cannot be changed</span>
            </div>
            <div className="form-group">
              <label htmlFor="edit-college"><GraduationCap size={13} /> College</label>
              <input
                id="edit-college"
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                placeholder="MIT, Stanford, IIT..."
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="edit-bio"><FileText size={13} /> Bio</label>
              <textarea
                id="edit-bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell the world about yourself..."
                rows={3}
                maxLength={200}
              />
              <span className="field-hint">{bio.length}/200 characters</span>
            </div>
          </div>
        </div>

        {/* Professional Links */}
        <div className="glass-panel edit-links-section">
          <h3>Professional Links</h3>
          <div className="edit-form-grid">
            <div className="form-group">
              <label htmlFor="edit-linkedin"><LinkedinIcon size={13} /> LinkedIn URL</label>
              <input
                id="edit-linkedin"
                type="url"
                value={linkedinUrl}
                onChange={(e) => { setLinkedinUrl(e.target.value); setErrors(p => ({ ...p, linkedinUrl: '' })); }}
                placeholder="https://linkedin.com/in/username"
                className={errors.linkedinUrl ? 'input-error' : ''}
              />
              {errors.linkedinUrl && <span className="field-error">{errors.linkedinUrl}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="edit-github"><GithubIcon size={13} /> GitHub URL</label>
              <input
                id="edit-github"
                type="url"
                value={githubUrl}
                onChange={(e) => { setGithubUrl(e.target.value); setErrors(p => ({ ...p, githubUrl: '' })); }}
                placeholder="https://github.com/username"
                className={errors.githubUrl ? 'input-error' : ''}
              />
              {errors.githubUrl && <span className="field-error">{errors.githubUrl}</span>}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="glass-panel edit-skills-section">
          <h3>Skills & Technologies</h3>
          <div className="skills-input-area">
            <div className="skills-tags-container">
              {skills.map(skill => (
                <span key={skill} className="skill-tag">
                  {skill}
                  <button className="skill-remove" onClick={() => removeSkill(skill)}>
                    <X size={11} />
                  </button>
                </span>
              ))}
              <input
                type="text"
                className="skill-input"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={handleSkillKeyDown}
                placeholder={skills.length === 0 ? 'Type a skill and press Enter...' : 'Add more...'}
              />
            </div>
            {skillInput && (
              <button className="btn-secondary btn-sm" onClick={addSkill} style={{ marginTop: '0.5rem' }}>
                <Plus size={12} /> Add "{skillInput}"
              </button>
            )}
          </div>
          <p className="field-hint" style={{ marginTop: '0.5rem' }}>{skills.length}/15 skills added</p>
        </div>
      </div>

      {/* Save Button */}
      <div className="edit-actions">
        <button className="btn-secondary" onClick={() => navigate('/profile')}>Cancel</button>
        <button className="btn-primary save-btn" onClick={handleSave} disabled={saving}>
          {saving ? (
            <><span className="btn-spinner" /> Saving...</>
          ) : (
            <><Save size={15} /> Save Changes</>
          )}
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
