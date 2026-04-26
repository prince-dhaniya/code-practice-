import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

// ============================================================
// SCORING & TIER SYSTEM
// ============================================================

const DIFFICULTY_POINTS = { Easy: 10, Medium: 20, Hard: 30 };

const TIERS = [
  { name: 'Grandmaster', minScore: 2000, color: '#e74c3c' },
  { name: 'Master',      minScore: 1000, color: '#d2a8ff' },
  { name: 'Knight',      minScore: 500,  color: '#58a6ff' },
  { name: 'Specialist',  minScore: 200,  color: '#2ea043' },
  { name: 'Pupil',       minScore: 50,   color: '#f0883e' },
  { name: 'Newbie',      minScore: 0,    color: '#8b949e' },
];

export const getTier = (score) => {
  for (const tier of TIERS) {
    if (score >= tier.minScore) return tier;
  }
  return TIERS[TIERS.length - 1];
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user session + full profile on mount
  useEffect(() => {
    const stored = localStorage.getItem('ai_mentor_user');
    if (stored) {
      const session = JSON.parse(stored);
      const profile = getProfileData(session.id);
      setUser({ ...session, ...profile });
      // One-time migration of global data to user-scoped
      migrateGlobalData(session.id);
    }
    setLoading(false);
  }, []);

  // ============================================================
  // DATA MIGRATION (global → per-user)
  // ============================================================
  const migrateGlobalData = (userId) => {
    const migrationKey = `ai_mentor_migrated_${userId}`;
    if (localStorage.getItem(migrationKey)) return; // Already migrated

    // Migrate solved
    const globalSolved = JSON.parse(localStorage.getItem('ai_mentor_solved') || '[]');
    if (globalSolved.length > 0) {
      const userKey = `ai_mentor_solved_${userId}`;
      const existing = JSON.parse(localStorage.getItem(userKey) || '[]');
      const merged = [...new Set([...existing, ...globalSolved])];
      localStorage.setItem(userKey, JSON.stringify(merged));
    }

    // Migrate activity
    const globalActivity = JSON.parse(localStorage.getItem('ai_mentor_activity') || '{}');
    if (Object.keys(globalActivity).length > 0) {
      const userKey = `ai_mentor_activity_${userId}`;
      const existing = JSON.parse(localStorage.getItem(userKey) || '{}');
      const merged = { ...existing, ...globalActivity };
      localStorage.setItem(userKey, JSON.stringify(merged));
    }

    localStorage.setItem(migrationKey, 'true');
  };

  // ============================================================
  // PROFILE MANAGEMENT
  // ============================================================
  const getProfileData = (userId) => {
    const profiles = JSON.parse(localStorage.getItem('ai_mentor_profiles') || '{}');
    return profiles[userId] || {};
  };

  const saveProfileData = (userId, data) => {
    const profiles = JSON.parse(localStorage.getItem('ai_mentor_profiles') || '{}');
    profiles[userId] = { ...profiles[userId], ...data };
    localStorage.setItem('ai_mentor_profiles', JSON.stringify(profiles));
  };

  // ============================================================
  // AUTH: LOGIN / REGISTER / LOGOUT
  // ============================================================
  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem('ai_mentor_users') || '[]');
        const found = users.find(u => u.email === email && u.password === password);
        if (found) {
          const profile = getProfileData(found.id);
          const session = {
            id: found.id,
            name: found.name,
            email: found.email,
            joined: found.joined,
            ...profile,
          };
          localStorage.setItem('ai_mentor_user', JSON.stringify(session));
          setUser(session);
          migrateGlobalData(found.id);
          resolve(session);
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 800);
    });
  };

  const register = (name, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem('ai_mentor_users') || '[]');
        if (users.find(u => u.email === email)) {
          reject(new Error('Email already registered'));
          return;
        }
        const newUser = {
          id: Date.now().toString(),
          name,
          email,
          password,
          joined: new Date().toISOString(),
        };
        users.push(newUser);
        localStorage.setItem('ai_mentor_users', JSON.stringify(users));

        // Initialize profile with default data from registration
        const defaultProfile = {
          fullName: name,
          college: '',
          bio: '',
          profilePic: '',
          skills: [],
          linkedinUrl: '',
          githubUrl: '',
        };
        saveProfileData(newUser.id, defaultProfile);

        // Initialize empty per-user data
        localStorage.setItem(`ai_mentor_solved_${newUser.id}`, '[]');
        localStorage.setItem(`ai_mentor_activity_${newUser.id}`, '{}');

        const session = {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          joined: newUser.joined,
          ...defaultProfile,
        };
        localStorage.setItem('ai_mentor_user', JSON.stringify(session));
        setUser(session);
        resolve(session);
      }, 800);
    });
  };

  // Update profile — saves to profiles store AND updates session
  const updateProfile = (profileData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!user) return;

        // If name changed, also update it in the users array
        if (profileData.fullName) {
          const users = JSON.parse(localStorage.getItem('ai_mentor_users') || '[]');
          const idx = users.findIndex(u => u.id === user.id);
          if (idx !== -1) {
            users[idx].name = profileData.fullName;
            localStorage.setItem('ai_mentor_users', JSON.stringify(users));
          }
        }

        saveProfileData(user.id, profileData);

        const updatedUser = {
          ...user,
          ...profileData,
          name: profileData.fullName || user.name,
        };
        localStorage.setItem('ai_mentor_user', JSON.stringify(updatedUser));
        setUser(updatedUser);
        resolve(updatedUser);
      }, 600);
    });
  };

  const logout = () => {
    localStorage.removeItem('ai_mentor_user');
    setUser(null);
  };

  // ============================================================
  // RESET PASSWORD
  // ============================================================
  const resetPassword = (email, newPassword) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem('ai_mentor_users') || '[]');
        const idx = users.findIndex(u => u.email === email);
        if (idx === -1) {
          reject(new Error('No account found with this email address.'));
          return;
        }
        users[idx].password = newPassword;
        localStorage.setItem('ai_mentor_users', JSON.stringify(users));
        resolve({ success: true });
      }, 600);
    });
  };

  // ============================================================
  // PER-USER SOLVED PROBLEMS
  // ============================================================
  const markSolved = (problemId) => {
    if (!user) return;
    const key = `ai_mentor_solved_${user.id}`;
    const solved = JSON.parse(localStorage.getItem(key) || '[]');
    if (!solved.includes(problemId)) {
      solved.push(problemId);
      localStorage.setItem(key, JSON.stringify(solved));
    }
  };

  const getSolved = () => {
    if (!user) return [];
    return JSON.parse(localStorage.getItem(`ai_mentor_solved_${user.id}`) || '[]');
  };

  // Get solved for any user
  const getSolvedForUser = (userId) => {
    return JSON.parse(localStorage.getItem(`ai_mentor_solved_${userId}`) || '[]');
  };

  // ============================================================
  // PER-USER ACTIVITY TRACKING
  // ============================================================
  const recordActivity = () => {
    if (!user) return;
    const key = `ai_mentor_activity_${user.id}`;
    const today = new Date().toISOString().split('T')[0];
    const activity = JSON.parse(localStorage.getItem(key) || '{}');
    activity[today] = (activity[today] || 0) + 1;
    localStorage.setItem(key, JSON.stringify(activity));
  };

  const getActivity = () => {
    if (!user) return {};
    return JSON.parse(localStorage.getItem(`ai_mentor_activity_${user.id}`) || '{}');
  };

  const getActivityForUser = (userId) => {
    return JSON.parse(localStorage.getItem(`ai_mentor_activity_${userId}`) || '{}');
  };

  // Count unique active days for a user
  const getActiveDays = (userId) => {
    const uid = userId || user?.id;
    if (!uid) return 0;
    const activity = JSON.parse(localStorage.getItem(`ai_mentor_activity_${uid}`) || '{}');
    return Object.keys(activity).length;
  };

  // Calculate streak for a user
  const getStreak = (userId) => {
    const uid = userId || user?.id;
    if (!uid) return 0;
    const activity = JSON.parse(localStorage.getItem(`ai_mentor_activity_${uid}`) || '{}');
    let count = 0;
    const today = new Date();
    for (let i = 0; i < 365; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      if (activity[d.toISOString().split('T')[0]]) count++;
      else break;
    }
    return count;
  };

  // ============================================================
  // SCORING
  // ============================================================
  const computeScore = (userId, problemsList) => {
    const solved = JSON.parse(localStorage.getItem(`ai_mentor_solved_${userId}`) || '[]');
    let score = 0;
    solved.forEach(pid => {
      const prob = problemsList?.find(p => p.id === pid);
      if (prob) {
        score += DIFFICULTY_POINTS[prob.difficulty] || 10;
      } else {
        score += 10; // default
      }
    });
    // Add streak bonus
    const streak = getStreak(userId);
    score += streak * 5;
    return score;
  };

  // ============================================================
  // LEADERBOARD — Pull all registered users
  // ============================================================
  const getAllUsersLeaderboard = (problemsList) => {
    const users = JSON.parse(localStorage.getItem('ai_mentor_users') || '[]');
    const profiles = JSON.parse(localStorage.getItem('ai_mentor_profiles') || '{}');

    const leaderboard = users.map(u => {
      const solved = JSON.parse(localStorage.getItem(`ai_mentor_solved_${u.id}`) || '[]');
      const score = computeScore(u.id, problemsList);
      const activeDays = getActiveDays(u.id);
      const streak = getStreak(u.id);
      const tier = getTier(score);
      const profile = profiles[u.id] || {};

      return {
        id: u.id,
        name: profile.fullName || u.name,
        email: u.email,
        solved: solved.length,
        score,
        activeDays,
        streak,
        tier: tier.name,
        tierColor: tier.color,
        joined: u.joined,
        isCurrentUser: user?.id === u.id,
      };
    });

    // Sort by score descending, then by solved count, then by active days
    leaderboard.sort((a, b) => b.score - a.score || b.solved - a.solved || b.activeDays - a.activeDays);

    // Assign ranks
    leaderboard.forEach((entry, idx) => {
      entry.rank = idx + 1;
    });

    return leaderboard;
  };

  // ============================================================
  // SUBMISSIONS (also triggers markSolved + recordActivity)
  // ============================================================
  const saveSubmission = (problemId, status, runtime, code) => {
    if (!user) return;
    const submissions = JSON.parse(localStorage.getItem('ai_mentor_submissions') || '[]');
    const newDoc = {
      id: Date.now().toString(),
      userId: user.id,
      problemId,
      status,
      runtime,
      code,
      timestamp: new Date().toISOString()
    };
    submissions.push(newDoc);
    localStorage.setItem('ai_mentor_submissions', JSON.stringify(submissions));

    // Auto-track on accepted
    if (status === 'Accepted') {
      markSolved(problemId);
    }
    // Always record activity on any submission (not just accepted)
    recordActivity();
  };

  // ============================================================
  // SUBMISSION QUERIES
  // ============================================================
  const getSubmissions = () => {
    if (!user) return [];
    const all = JSON.parse(localStorage.getItem('ai_mentor_submissions') || '[]');
    return all.filter(s => s.userId === user.id);
  };

  const getSubmissionsByDay = () => {
    if (!user) return {};
    const subs = getSubmissions();
    const dayMap = {};
    subs.forEach(s => {
      const day = s.timestamp?.split('T')[0];
      if (day) dayMap[day] = (dayMap[day] || 0) + 1;
    });
    return dayMap;
  };

  const value = {
    user, loading, login, register, logout, resetPassword,
    updateProfile, markSolved, getSolved, getSolvedForUser,
    recordActivity, getActivity, getActivityForUser,
    getActiveDays, getStreak, computeScore,
    getAllUsersLeaderboard, getTier: (score) => getTier(score),
    saveSubmission, getSubmissions, getSubmissionsByDay
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
