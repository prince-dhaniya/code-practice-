import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip,
  ResponsiveContainer
} from 'recharts';
import { useAuth } from '../context/AuthContext';
import { problems, dsaRoadmap } from '../data/problems';
import {
  Trophy, Flame, Code2, Target, CheckCircle2, Circle, Calendar,
  Settings, GraduationCap, ExternalLink
} from 'lucide-react';

const LinkedinIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
);

const radarData = [
  { subject: 'Syntax', A: 120, fullMark: 150 },
  { subject: 'Optimization', A: 98, fullMark: 150 },
  { subject: 'Logic', A: 86, fullMark: 150 },
  { subject: 'Debugging', A: 99, fullMark: 150 },
  { subject: 'Speed', A: 85, fullMark: 150 },
  { subject: 'Algorithms', A: 65, fullMark: 150 },
];

const lineData = [
  { name: 'Week 1', hints: 15 },
  { name: 'Week 2', hints: 12 },
  { name: 'Week 3', hints: 8 },
  { name: 'Week 4', hints: 3 },
];

const Heatmap = ({ activity, totalSubmissions, activeDaysCount, maxStreak }) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const CELL = 14;
  const GAP = 3;

  // Build full-year grid: columns = weeks, rows = 7 days (Mon-Sun)
  const { weeks, monthPositions, yearSubmissions } = useMemo(() => {
    const result = [];
    const positions = [];
    let yearTotal = 0;

    // Jan 1 of selected year
    const yearStart = new Date(selectedYear, 0, 1);
    const yearEnd = new Date(selectedYear, 11, 31);
    const today = new Date();

    // Find first Monday on or before Jan 1
    const startDay = new Date(yearStart);
    startDay.setDate(startDay.getDate() - ((startDay.getDay() + 6) % 7));

    let currentDate = new Date(startDay);
    let currentMonth = -1;

    while (currentDate <= yearEnd || result.length % 1 !== 0) {
      const week = [];
      for (let d = 0; d < 7; d++) {
        const dateStr = currentDate.toISOString().split('T')[0];
        const isInYear = currentDate.getFullYear() === selectedYear;
        const isFuture = currentDate > today;
        const count = isInYear && !isFuture ? (activity[dateStr] || 0) : 0;
        
        if (isInYear && count > 0) yearTotal += count;

        // Track month label positions
        if (isInYear && currentDate.getMonth() !== currentMonth && d === 0) {
          currentMonth = currentDate.getMonth();
          positions.push({ month: currentMonth, weekIdx: result.length });
        }

        week.push({
          date: dateStr,
          count,
          isInYear,
          isFuture,
        });
        currentDate.setDate(currentDate.getDate() + 1);
      }
      result.push(week);
      if (currentDate > yearEnd && result.length >= 52) break;
    }

    return { weeks: result, monthPositions: positions, yearSubmissions: yearTotal };
  }, [activity, selectedYear]);

  const getColor = (val, isInYear, isFuture) => {
    if (!isInYear || isFuture) return 'transparent';
    if (val === 0) return 'var(--heatmap-0)';
    if (val <= 1) return 'var(--heatmap-1)';
    if (val <= 3) return 'var(--heatmap-2)';
    if (val <= 5) return 'var(--heatmap-3)';
    return 'var(--heatmap-4)';
  };

  const gridWidth = weeks.length * (CELL + GAP);

  return (
    <div style={{ width: '100%' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
          <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--error)' }}>Submission</span>
          <span style={{ fontSize: '0.82rem', color: 'var(--success)' }}>{yearSubmissions || totalSubmissions} submissions in {selectedYear}</span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
          <span>Total active days: <strong style={{ color: 'var(--text-heading)' }}>{activeDaysCount}</strong></span>
          <span>Max streak: <strong style={{ color: 'var(--text-heading)' }}>{maxStreak}</strong></span>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div style={{ overflowX: 'auto', paddingBottom: '6px' }}>
        <div style={{ position: 'relative', width: `${gridWidth}px`, minWidth: '100%' }}>
          {/* Cells */}
          <div style={{ display: 'flex', gap: `${GAP}px` }}>
            {weeks.map((week, wIdx) => (
              <div key={wIdx} style={{ display: 'flex', flexDirection: 'column', gap: `${GAP}px` }}>
                {week.map((day, dIdx) => (
                  <div
                    key={dIdx}
                    title={day.isInYear && !day.isFuture ? `${day.date}: ${day.count} submissions` : ''}
                    style={{
                      width: CELL, height: CELL,
                      backgroundColor: getColor(day.count, day.isInYear, day.isFuture),
                      borderRadius: '3px',
                      transition: 'transform 0.15s',
                      cursor: day.isInYear && !day.isFuture ? 'pointer' : 'default',
                    }}
                    onMouseEnter={(e) => { if (day.isInYear) e.target.style.transform = 'scale(1.3)'; }}
                    onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Month Labels */}
          <div style={{ display: 'flex', position: 'relative', height: '22px', marginTop: '6px' }}>
            {monthPositions.map((mp, i) => (
              <span
                key={i}
                style={{
                  position: 'absolute',
                  left: `${mp.weekIdx * (CELL + GAP)}px`,
                  fontSize: '0.72rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 500
                }}
              >
                {MONTHS[mp.month]}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Year Selector */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
        <button
          onClick={() => setSelectedYear(y => y - 1)}
          style={{
            background: 'none', border: 'none', color: 'var(--text-secondary)',
            cursor: 'pointer', fontSize: '1rem', padding: '0.2rem 0.5rem',
            borderRadius: '4px', transition: 'color 0.2s'
          }}
        >‹</button>
        <span style={{
          background: 'rgba(248, 81, 73, 0.15)', color: 'var(--error)',
          padding: '0.3rem 1rem', borderRadius: '20px',
          fontSize: '0.85rem', fontWeight: 700,
          border: '1px solid rgba(248, 81, 73, 0.3)'
        }}>{selectedYear}</span>
        <button
          onClick={() => setSelectedYear(y => Math.min(y + 1, new Date().getFullYear()))}
          disabled={selectedYear >= new Date().getFullYear()}
          style={{
            background: 'none', border: 'none',
            color: selectedYear >= new Date().getFullYear() ? 'var(--border-muted)' : 'var(--text-secondary)',
            cursor: selectedYear >= new Date().getFullYear() ? 'default' : 'pointer',
            fontSize: '1rem', padding: '0.2rem 0.5rem',
            borderRadius: '4px', transition: 'color 0.2s'
          }}
        >›</button>
      </div>
    </div>
  );
};

const Profile = ({ isPublic }) => {
  const { user, getSolved, getActivity, getActiveDays, computeScore, getAllUsersLeaderboard, getSubmissions, getSubmissionsByDay } = useAuth();
  const solvedIds = getSolved();
  const activity = getActivity();
  const submissions = getSubmissions();
  const submissionsByDay = getSubmissionsByDay();
  const totalSubmissions = submissions.length;
  const acceptedSubmissions = submissions.filter(s => s.status === 'Accepted').length;

  // Merge activity + submissions into a unified heatmap data source
  const heatmapData = useMemo(() => {
    const merged = { ...activity };
    Object.entries(submissionsByDay).forEach(([day, count]) => {
      merged[day] = Math.max(merged[day] || 0, count);
    });
    return merged;
  }, [activity, submissionsByDay]);

  const activeDaysCount = useMemo(() => getActiveDays(), [solvedIds]);
  const score = useMemo(() => computeScore(user?.id, problems), [solvedIds, user]);
  
  const rank = useMemo(() => {
    const leaderboard = getAllUsersLeaderboard(problems);
    const me = leaderboard.find(e => e.id === user?.id);
    return me ? me.rank : '-';
  }, [solvedIds, user]);

  const solvedEasy = problems.filter(p => p.difficulty === 'Easy' && solvedIds.includes(p.id)).length;
  const solvedMedium = problems.filter(p => p.difficulty === 'Medium' && solvedIds.includes(p.id)).length;
  const solvedHard = problems.filter(p => p.difficulty === 'Hard' && solvedIds.includes(p.id)).length;

  // Calculate streak
  const streak = useMemo(() => {
    let count = 0;
    const today = new Date();
    for (let i = 0; i < 365; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const key = d.toISOString().split('T')[0];
      if (activity[key]) count++;
      else break;
    }
    return count;
  }, [activity]);

  // Calculate max streak ever
  const maxStreakVal = useMemo(() => {
    const days = Object.keys(activity).sort();
    if (days.length === 0) return 0;
    let max = 1, current = 1;
    for (let i = 1; i < days.length; i++) {
      const prev = new Date(days[i - 1]);
      const curr = new Date(days[i]);
      const diff = (curr - prev) / (1000 * 60 * 60 * 24);
      if (diff === 1) { current++; max = Math.max(max, current); }
      else { current = 1; }
    }
    return Math.max(max, current);
  }, [activity]);

  return (
    <div className="profile-page">
      {/* Profile Header */}
      <div className="glass-panel profile-header-card">
        {isPublic && (
          <div style={{ position: 'absolute', top: '15px', right: '15px' }}>
            <span className="tag" style={{ background: 'rgba(88, 166, 255, 0.1)', color: 'var(--accent-blue)', border: '1px solid var(--accent-blue)' }}>Public View</span>
          </div>
        )}
        <div className="profile-avatar-wrapper">
          {user?.profilePic ? (
            <img src={user.profilePic} alt={user.name} className="profile-avatar-img" />
          ) : (
            <div className="profile-avatar">
              {user?.name?.charAt(0)?.toUpperCase() || 'C'}
            </div>
          )}
        </div>
        <div className="profile-info">
          <div className="profile-name-row">
            <h1>{user?.fullName || user?.name || 'Coder'}</h1>
            {!isPublic && (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn-secondary btn-sm" onClick={() => {
                  navigator.clipboard.writeText(`${window.location.origin}/p/${user?.name?.toLowerCase() || 'coder'}`);
                  alert('Public Resume URL Copied!');
                }}>
                  <ExternalLink size={13} /> Copy Share Link
                </button>
                <Link to="/edit-profile" className="btn-secondary btn-sm">
                  <Settings size={13} /> Edit Profile
                </Link>
              </div>
            )}
          </div>
          <p>{user?.email || 'guest@aiMentor.dev'}</p>
          {user?.bio && <p className="profile-bio">{user.bio}</p>}
          <div className="profile-meta-row">
            <span>
              <Calendar size={12} /> Joined {user?.joined ? new Date(user.joined).toLocaleDateString() : 'Today'}
            </span>
            {user?.college && (
              <span><GraduationCap size={12} /> {user.college}</span>
            )}
          </div>
          {/* Social Links */}
          <div className="profile-social-links">
            {user?.linkedinUrl && (
              <a href={user.linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <LinkedinIcon size={14} /> LinkedIn
              </a>
            )}
            {user?.githubUrl && (
              <a href={user.githubUrl} target="_blank" rel="noopener noreferrer" className="social-link github">
                <GithubIcon size={14} /> GitHub
              </a>
            )}
          </div>
          {/* Skills */}
          {user?.skills?.length > 0 && (
            <div className="profile-skills">
              {user.skills.map(s => (
                <span key={s} className="profile-skill-tag">{s}</span>
              ))}
            </div>
          )}
        </div>
        <div className="profile-stats-row">
          <div className="stat-card">
            <Flame size={22} color="var(--warning)" />
            <div className="stat-info">
              <div className="stat-val">{streak}</div>
              <div className="stat-label">Day Streak</div>
            </div>
          </div>
          <div className="stat-card">
            <Code2 size={22} color="var(--success)" />
            <div className="stat-info">
              <div className="stat-val">{solvedIds.length}</div>
              <div className="stat-label">Solved</div>
            </div>
          </div>
          <div className="stat-card">
            <Trophy size={22} color="var(--accent-primary)" />
            <div className="stat-info">
              <div className="stat-val">{totalSubmissions}</div>
              <div className="stat-label">Submissions</div>
            </div>
          </div>
        </div>
        <div className="profile-stats-row" style={{ marginTop: '1rem' }}>
          <div className="stat-card">
            <CheckCircle2 size={22} color="var(--success)" />
            <div className="stat-info">
              <div className="stat-val">{acceptedSubmissions}</div>
              <div className="stat-label">Accepted</div>
            </div>
          </div>
          <div className="stat-card">
            <Target size={22} color="var(--accent-blue)" />
            <div className="stat-info">
              <div className="stat-val">{activeDaysCount}</div>
              <div className="stat-label">Active Days</div>
            </div>
          </div>
          <div className="stat-card">
            <Trophy size={22} color="var(--accent-primary)" />
            <div className="stat-info">
              <div className="stat-val">#{rank}</div>
              <div className="stat-label">Global Rank</div>
            </div>
          </div>
          <div className="stat-card">
            <Flame size={22} color="#f0883e" />
            <div className="stat-info">
              <div className="stat-val">{score}</div>
              <div className="stat-label">Total Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* Difficulty Breakdown */}
      <div className="glass-panel" style={{ padding: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Problem Classification</h3>
        <div className="diff-breakdown">
          <div className="diff-bar-group">
            <div className="diff-bar-label"><span className="diff-dot easy"></span> Easy <span>{solvedEasy}/{problems.filter(p => p.difficulty === 'Easy').length}</span></div>
            <div className="diff-bar-track"><div className="diff-bar-fill easy" style={{ width: `${(solvedEasy / Math.max(problems.filter(p => p.difficulty === 'Easy').length, 1)) * 100}%` }}></div></div>
          </div>
          <div className="diff-bar-group">
            <div className="diff-bar-label"><span className="diff-dot medium"></span> Medium <span>{solvedMedium}/{problems.filter(p => p.difficulty === 'Medium').length}</span></div>
            <div className="diff-bar-track"><div className="diff-bar-fill medium" style={{ width: `${(solvedMedium / Math.max(problems.filter(p => p.difficulty === 'Medium').length, 1)) * 100}%` }}></div></div>
          </div>
          <div className="diff-bar-group">
            <div className="diff-bar-label"><span className="diff-dot hard"></span> Hard <span>{solvedHard}/{problems.filter(p => p.difficulty === 'Hard').length}</span></div>
            <div className="diff-bar-track"><div className="diff-bar-fill hard" style={{ width: `${(solvedHard / Math.max(problems.filter(p => p.difficulty === 'Hard').length, 1)) * 100}%` }}></div></div>
          </div>
        </div>
      </div>

      <div className="profile-grid">
        {/* Heatmap */}
        <div className="glass-panel" style={{ gridColumn: '1 / -1', padding: '1.5rem' }}>
          <h3 style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Target size={18} color="var(--accent-primary)" /> Activity Heatmap
          </h3>
          <Heatmap 
            activity={heatmapData} 
            totalSubmissions={totalSubmissions}
            activeDaysCount={activeDaysCount}
            maxStreak={maxStreakVal}
          />
        </div>

        {/* Radar Chart */}
        <div className="glass-panel" style={{ padding: '1.5rem', height: '340px' }}>
          <h3 style={{ marginBottom: '0.5rem' }}><Trophy size={16} color="var(--warning)" /> Skill Radar</h3>
          <ResponsiveContainer width="100%" height="90%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
              <PolarGrid stroke="var(--border-subtle)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-secondary)', fontSize: 11 }} />
              <Radar name="Skill" dataKey="A" stroke="var(--accent-primary)" fill="var(--accent-glow)" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Progress Line Chart */}
        <div className="glass-panel" style={{ padding: '1.5rem', height: '340px' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Hints Requested (Trend)</h3>
          <ResponsiveContainer width="100%" height="90%">
            <LineChart data={lineData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
              <XAxis dataKey="name" stroke="var(--text-secondary)" />
              <YAxis stroke="var(--text-secondary)" />
              <RechartsTooltip contentStyle={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-subtle)', borderRadius: '8px', color: 'var(--text-primary)' }} />
              <Line type="monotone" dataKey="hints" stroke="var(--accent-secondary)" strokeWidth={3} dot={{ r: 5, fill: 'var(--bg-main)', strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* DSA Roadmap */}
      <div className="glass-panel" style={{ padding: '1.5rem', marginTop: '1.5rem' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>DSA Roadmap</h3>
        <div className="roadmap-grid">
          {dsaRoadmap.map(section => {
            const solvedInSection = section.problemIds.filter(id => solvedIds.includes(id)).length;
            const pct = Math.round((solvedInSection / section.total) * 100);
            return (
              <div key={section.name} className="roadmap-card glass-panel">
                <div className="roadmap-card-header">
                  <h4>{section.name}</h4>
                  <span className="roadmap-pct">{pct}%</span>
                </div>
                <div className="roadmap-progress-track">
                  <div className="roadmap-progress-fill" style={{ width: `${pct}%` }}></div>
                </div>
                <div className="roadmap-detail">{solvedInSection} / {section.total} completed</div>
                <div className="roadmap-problems">
                  {section.problemIds.map(pid => {
                    const prob = problems.find(p => p.id === pid);
                    return (
                      <div key={pid} className="roadmap-problem-item">
                        {solvedIds.includes(pid) ? <CheckCircle2 size={14} color="var(--success)" /> : <Circle size={14} color="var(--text-secondary)" />}
                        <span>{prob?.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
