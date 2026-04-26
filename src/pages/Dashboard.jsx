import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { problems, dsaRoadmap } from '../data/problems';
import { ChevronDown, Check, Flame, Code2, Trophy, Calendar, TrendingUp, Crown, Medal, Award, Layout, Users } from 'lucide-react';

const CircularProgress = ({ solved, total }) => {
  const pct = total > 0 ? Math.round((solved / total) * 100) : 0;
  const r = 42; const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return (
    <div className="circular-progress">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle className="track" cx="50" cy="50" r={r} />
        <circle className="fill" cx="50" cy="50" r={r} strokeDasharray={c} strokeDashoffset={offset} />
      </svg>
      <div className="circular-label"><span className="pct">{pct}%</span><span className="sub">Solved</span></div>
    </div>
  );
};

// ============================================================
// DYNAMIC LEADERBOARD — Real user data
// ============================================================
const Leaderboard = () => {
  const { getAllUsersLeaderboard, user } = useAuth();

  const leaderboard = useMemo(() => {
    return getAllUsersLeaderboard(problems);
  }, [user]);

  const currentUserEntry = leaderboard.find(e => e.isCurrentUser);

  const getRankIcon = (rank) => {
    if (rank === 1) return <Crown size={18} color="#FFD700" />;
    if (rank === 2) return <Medal size={18} color="#C0C0C0" />;
    if (rank === 3) return <Medal size={18} color="#CD7F32" />;
    return <span style={{ fontWeight: 'bold', color: 'var(--text-secondary)' }}>#{rank}</span>;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Current user rank card */}
      {currentUserEntry && (
        <div className="card" style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(88,166,255,0.08), rgba(210,168,255,0.08))',
          border: '1px solid rgba(88,166,255,0.3)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Your Rank</div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-blue)' }}>
                #{currentUserEntry.rank}
                <span style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>
                  of {leaderboard.length} coders
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-heading)' }}>{currentUserEntry.score}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Score</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--success)' }}>{currentUserEntry.solved}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Solved</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--warning)' }}>{currentUserEntry.activeDays}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Active Days</div>
              </div>
              <div style={{
                padding: '0.4rem 0.8rem',
                borderRadius: '8px',
                background: `${currentUserEntry.tierColor}22`,
                color: currentUserEntry.tierColor,
                fontWeight: 700,
                fontSize: '0.85rem',
                border: `1px solid ${currentUserEntry.tierColor}44`,
              }}>
                {currentUserEntry.tier}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Leaderboard table */}
      <div className="card" style={{ padding: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--text-heading)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Trophy size={20} color="var(--warning)" /> Leaderboard
        </h3>

        {leaderboard.length === 0 ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            No users yet. Be the first to solve problems!
          </div>
        ) : (
          <>
            <div className="table-header-row" style={{ marginTop: '0.5rem' }}>
              <span style={{ width: '60px' }}>Rank</span>
              <span style={{ flex: 1 }}>Student</span>
              <span style={{ width: '80px', textAlign: 'center' }}>Solved</span>
              <span style={{ width: '90px', textAlign: 'center' }}>Active Days</span>
              <span style={{ width: '70px', textAlign: 'center' }}>Streak</span>
              <span style={{ width: '90px', textAlign: 'center' }}>Tier</span>
              <span style={{ width: '80px', textAlign: 'right' }}>Score</span>
            </div>
            {leaderboard.map(entry => (
              <div
                className="table-row"
                key={entry.id}
                style={{
                  background: entry.isCurrentUser ? 'rgba(88, 166, 255, 0.08)' : 'transparent',
                  border: entry.isCurrentUser ? '1px solid rgba(88,166,255,0.2)' : '1px solid transparent',
                  borderRadius: entry.isCurrentUser ? '8px' : '0',
                  transition: 'all 0.2s ease',
                }}
              >
                <span style={{ width: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {getRankIcon(entry.rank)}
                </span>
                <span style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: `linear-gradient(135deg, ${entry.tierColor}44, ${entry.tierColor}22)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.8rem', fontWeight: 700, color: entry.tierColor,
                    border: `2px solid ${entry.tierColor}66`,
                  }}>
                    {entry.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div style={{ fontWeight: entry.isCurrentUser ? 700 : 500, color: 'var(--text-heading)' }}>
                      {entry.name} {entry.isCurrentUser && <span style={{ color: 'var(--accent-blue)', fontSize: '0.75rem' }}>(You)</span>}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                      Joined {new Date(entry.joined).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                </span>
                <span style={{ width: '80px', textAlign: 'center', fontWeight: 600, color: 'var(--success)' }}>
                  {entry.solved}
                </span>
                <span style={{ width: '90px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
                  <Calendar size={12} color="var(--text-secondary)" />
                  <span style={{ fontWeight: 500 }}>{entry.activeDays}</span>
                </span>
                <span style={{ width: '70px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
                  {entry.streak > 0 && <Flame size={12} color="var(--warning)" />}
                  <span style={{ fontWeight: 500, color: entry.streak > 0 ? 'var(--warning)' : 'var(--text-secondary)' }}>
                    {entry.streak}
                  </span>
                </span>
                <span style={{ width: '90px', textAlign: 'center' }}>
                  <span style={{
                    padding: '0.2rem 0.5rem',
                    borderRadius: '6px',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    background: `${entry.tierColor}18`,
                    color: entry.tierColor,
                    border: `1px solid ${entry.tierColor}33`,
                  }}>
                    {entry.tier}
                  </span>
                </span>
                <span style={{ width: '80px', textAlign: 'right', fontWeight: 'bold', color: 'var(--accent-blue)' }}>
                  {entry.score}
                </span>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Scoring info */}
      <div className="card" style={{ padding: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
        <strong style={{ color: 'var(--text-heading)' }}>How scores work:</strong>
        <span style={{ marginLeft: '0.5rem' }}>
          Easy = 10pts · Medium = 20pts · Hard = 30pts · Streak bonus = streak days × 5pts
        </span>
      </div>
    </div>
  );
};

// ============================================================
// STUDY ROOMS
// ============================================================
const StudyRooms = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([
    { id: 1, topic: "Dynamic Programming Sprint", users: 4, max: 10, activeProblem: "Pointers in C++" },
    { id: 2, topic: "Amazon SDE-1 Prep", users: 2, max: 5, activeProblem: "Basic Problems Practice" },
  ]);

  const handleJoin = (room) => {
    const target = problems.find(p => p.title.toLowerCase() === room.activeProblem.toLowerCase());
    if (target) {
      navigate(`/problem/${target.id}`);
    } else {
      navigate('/problems');
    }
  };

  const handleCreate = () => {
    const topic = window.prompt("Enter your new Study Room topic (e.g. 'FAANG Prep'):");
    if (!topic || !topic.trim()) return;
    
    setRooms(prev => [...prev, {
      id: Date.now(),
      topic: topic.trim(),
      users: 1,
      max: 10,
      activeProblem: "Puzzles"
    }]);
  };

  return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {rooms.map(r => (
            <div className="card" key={r.id} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h4 style={{ color: 'var(--text-heading)', margin: 0 }}>{r.topic}</h4>
                <span className="tag" style={{ background: 'rgba(46, 160, 67, 0.15)', color: 'var(--success)' }}>{r.users}/{r.max} Joined</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Current Problem: <strong style={{ color: 'var(--text-primary)' }}>{r.activeProblem}</strong></div>
              <button 
                className="btn-primary" 
                style={{ marginTop: 'auto', padding: '0.6rem', justifyContent: 'center' }} 
                onClick={() => handleJoin(r)}
              >
                Join Room
              </button>
            </div>
          ))}
          <div 
            className="card" 
            style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderStyle: 'dashed', cursor: 'pointer' }}
            onClick={handleCreate}
          >
             <button className="btn-secondary" style={{ pointerEvents: 'none' }}>+ Create Private Room</button>
          </div>
        </div>
  );
};

// ============================================================
// MAIN DASHBOARD
// ============================================================
const Dashboard = () => {
  const navigate = useNavigate();
  const { user, getSolved, getActiveDays, getStreak, computeScore } = useAuth();
  const [solvedIds, setSolvedIds] = useState(getSolved());
  const [openSections, setOpenSections] = useState({});

  const handleToggleSolved = (e, problemId) => {
    e.stopPropagation(); // prevent opening the problem Workspace
    const key = `ai_mentor_solved_${user?.id}`;
    let newSolved;
    if (solvedIds.includes(problemId)) {
       newSolved = solvedIds.filter(id => id !== problemId);
    } else {
       newSolved = [...solvedIds, problemId];
    }
    setSolvedIds(newSolved);
    localStorage.setItem(key, JSON.stringify(newSolved));
  };
  const [activeTab, setActiveTab] = useState('overview');

  const toggle = (name) => setOpenSections(prev => ({ ...prev, [name]: !prev[name] }));

  const streak = useMemo(() => getStreak(), [solvedIds]);
  const activeDays = useMemo(() => getActiveDays(), [solvedIds]);
  const score = useMemo(() => computeScore(user?.id, problems), [solvedIds, user]);

  const totalEasy = problems.filter(p => p.difficulty === 'Easy').length;
  const totalMedium = problems.filter(p => p.difficulty === 'Medium').length;
  const totalHard = problems.filter(p => p.difficulty === 'Hard').length;
  const solvedEasy = problems.filter(p => p.difficulty === 'Easy' && solvedIds.includes(p.id)).length;
  const solvedMedium = problems.filter(p => p.difficulty === 'Medium' && solvedIds.includes(p.id)).length;
  const solvedHard = problems.filter(p => p.difficulty === 'Hard' && solvedIds.includes(p.id)).length;

  return (
    <div className="dashboard-page">
      {/* Hero */}
      <div className="dashboard-hero">
        <div className="hero-left">
          <h1>Welcome, {user?.fullName || user?.name || 'Coder'}</h1>
          <p>Track your DSA progress and become interview-ready.</p>
        </div>
        <CircularProgress solved={solvedIds.length} total={problems.length} />
      </div>

      <div className="dashboard-tabs">
        <button className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
          <Layout size={18} /> Overview
        </button>
        <button className={`tab-btn ${activeTab === 'leaderboard' ? 'active' : ''}`} onClick={() => setActiveTab('leaderboard')}>
          <Trophy size={18} /> Leaderboard
        </button>
        <button className={`tab-btn ${activeTab === 'rooms' ? 'active' : ''}`} onClick={() => setActiveTab('rooms')}>
          <Users size={18} /> Study Rooms
        </button>
      </div>

      {activeTab === 'overview' && (
      <>
        {/* Alerts & Badges Panel */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem', marginBottom: '1.5rem' }}>
          {/* Predictive Alert */}
          <div className="card" style={{ padding: '1rem', borderLeft: '4px solid var(--error)', background: 'rgba(248, 81, 73, 0.05)' }}>
            <h4 style={{ color: 'var(--error)', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Flame size={16} /> Needs Attention
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0 0 0.8rem 0' }}>
              Metrics show you're struggling with <strong>Graphs</strong>. The AI Mentor recommends targeted practice.
            </p>
            <button className="btn-secondary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }} onClick={() => navigate('/problems')}>View Graph Problems</button>
          </div>

          {/* Badges & Achievements */}
          <div className="card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column' }}>
             <h4 style={{ color: 'var(--text-heading)', margin: '0 0 0.8rem 0' }}>Achievements</h4>
             
             {/* Core Stats */}
             <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-default)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(210, 168, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', border: '2px solid #d2a8ff' }}>
                    <Flame size={24} color="#d2a8ff" />
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>{streak}-Day Streak</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(240,136,62, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', border: '2px solid var(--warning)' }}>
                    <TrendingUp size={24} color="var(--warning)" />
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>{score} Points</div>
                </div>
             </div>

             {/* Milestone Grid (Dynamic Targets) */}
             <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                {[
                  { title: "First 50 Solved", icon: <Award size={24} color="var(--success)" />, color: "var(--success)", unlocked: solvedIds.length >= 50 },
                  { title: "Century Solver", icon: <Crown size={24} color="#FFD700" />, color: "#FFD700", unlocked: solvedIds.length >= 100 },
                  { title: "500 Master", icon: <Flame size={24} color="var(--error)" />, color: "var(--error)", unlocked: solvedIds.length >= 500 },
                  { title: "50 Active Days", icon: <Calendar size={24} color="var(--accent-blue)" />, color: "var(--accent-blue)", unlocked: activeDays >= 50 },
                  { title: "100 Active Days", icon: <Trophy size={24} color="#C0C0C0" />, color: "#C0C0C0", unlocked: activeDays >= 100 },
                  { title: "Array Master", icon: <Code2 size={24} color="var(--success)" />, color: "var(--success)", unlocked: solvedIds.length >= 5 }
                ].map((badge, idx) => (
                  <div key={idx} style={{ textAlign: 'center', opacity: badge.unlocked ? 1 : 0.4, filter: badge.unlocked ? 'none' : 'grayscale(100%)', transition: 'all 0.3s' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: badge.unlocked ? `color-mix(in srgb, ${badge.color} 15%, transparent)` : 'var(--bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', border: `2px solid ${badge.unlocked ? badge.color : 'var(--border-default)'}` }}>
                      {badge.unlocked ? badge.icon : React.cloneElement(badge.icon, { color: 'var(--text-secondary)' })}
                    </div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 'bold', maxWidth: '60px', margin: '0 auto', lineHeight: '1.2' }}>{badge.title}</div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-row">
          <div className="stat-pill">
            <Flame size={20} color="var(--warning)" />
            <div><div className="stat-num">{streak}</div><div className="stat-label">Day Streak</div></div>
          </div>
          <div className="stat-pill">
            <Calendar size={20} color="var(--accent-blue)" />
            <div><div className="stat-num">{activeDays}</div><div className="stat-label">Active Days</div></div>
          </div>
          <div className="stat-pill">
            <div className="stat-dot" style={{ background: 'var(--success)' }}></div>
            <div><div className="stat-num">{solvedEasy}/{totalEasy}</div><div className="stat-label">Easy</div></div>
          </div>
          <div className="stat-pill">
            <div className="stat-dot" style={{ background: 'var(--warning)' }}></div>
            <div><div className="stat-num">{solvedMedium}/{totalMedium}</div><div className="stat-label">Medium</div></div>
          </div>
          <div className="stat-pill">
            <div className="stat-dot" style={{ background: 'var(--error)' }}></div>
            <div><div className="stat-num">{solvedHard}/{totalHard}</div><div className="stat-label">Hard</div></div>
          </div>
        </div>

        {/* DSA Sheet Accordion */}
        <h2 style={{ fontSize: '1.2rem', color: 'var(--text-heading)', marginBottom: '0.8rem' }}>DSA Sheet</h2>
        {dsaRoadmap.map(section => {
          const sectionProblems = section.problemIds.map(id => problems.find(p => p.id === id)).filter(Boolean);
          const solvedInSection = section.problemIds.filter(id => solvedIds.includes(id)).length;
          const pct = Math.round((solvedInSection / section.total) * 100);
          const isOpen = openSections[section.name];
          const previewProblems = sectionProblems.slice(0, 10);

          return (
            <div key={section.name} className="card accordion-section">
              <div className="accordion-header" onClick={() => toggle(section.name)}>
                <div className="accordion-left">
                  <span className="accordion-title">{section.name}</span>
                  <span className="accordion-count">{solvedInSection}/{section.total}</span>
                  <div className="accordion-progress-bar"><div className="accordion-progress-fill" style={{ width: `${pct}%` }}></div></div>
                </div>
                <ChevronDown size={18} className={`accordion-chevron ${isOpen ? 'open' : ''}`} />
              </div>
              {isOpen && (
                <div className="accordion-body">
                  {previewProblems.map(p => (
                    <div key={p.id} className="accordion-problem" onClick={() => navigate(`/problem/${p.id}`)}>
                      <div 
                        className={`custom-check ${solvedIds.includes(p.id) ? 'checked' : ''}`}
                        onClick={(e) => handleToggleSolved(e, p.id)}
                      >
                        {solvedIds.includes(p.id) && <Check size={12} />}
                      </div>
                      <span className="prob-title">{p.title}</span>
                      <span className={`tag diff-${p.difficulty.toLowerCase()}`}>{p.difficulty}</span>
                      {p.subTopic && <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginLeft: 'auto' }}>{p.subTopic}</span>}
                    </div>
                  ))}
                  {sectionProblems.length > 10 && (
                    <div
                      style={{ padding: '0.8rem', textAlign: 'center', cursor: 'pointer', color: 'var(--accent-blue)', fontSize: '0.85rem', fontWeight: 600 }}
                      onClick={() => navigate('/problems')}
                    >
                      View all {section.total} {section.name} problems →
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </>
      )}

      {activeTab === 'leaderboard' && <Leaderboard />}
      {activeTab === 'rooms' && <StudyRooms />}
    </div>
  );
};
export default Dashboard;
