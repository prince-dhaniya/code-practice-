import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, ChevronRight, CheckCircle2, ChevronLeft } from 'lucide-react';
import { problems, categories, difficulties } from '../data/problems';
import { useAuth } from '../context/AuthContext';

const ITEMS_PER_PAGE = 50;

const ProblemArchive = () => {
  const navigate = useNavigate();
  const { getSolved } = useAuth();
  const solvedIds = getSolved();

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    setPage(1); // Reset page on filter change
    return problems.filter(p => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                          (p.subTopic && p.subTopic.toLowerCase().includes(search.toLowerCase()));
      const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchDiff = selectedDifficulty === 'All' || p.difficulty === selectedDifficulty;
      return matchSearch && matchCat && matchDiff;
    });
  }, [search, selectedCategory, selectedDifficulty]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const counts = useMemo(() => ({
    easy: problems.filter(p => p.difficulty === 'Easy').length,
    medium: problems.filter(p => p.difficulty === 'Medium').length,
    hard: problems.filter(p => p.difficulty === 'Hard').length,
  }), []);

  return (
    <div className="archive-page">
      <div className="archive-header">
        <h1>Problem Archive</h1>
        <p>{problems.length} problems across {categories.length - 1} categories</p>
      </div>

      {/* Difficulty Stats Bar */}
      <div className="diff-stats">
        <div className="diff-stat">
          <span className="diff-dot easy"></span>
          <span>Easy</span>
          <strong>{counts.easy}</strong>
        </div>
        <div className="diff-stat">
          <span className="diff-dot medium"></span>
          <span>Medium</span>
          <strong>{counts.medium}</strong>
        </div>
        <div className="diff-stat">
          <span className="diff-dot hard"></span>
          <span>Hard</span>
          <strong>{counts.hard}</strong>
        </div>
      </div>

      {/* Filters */}
      <div className="archive-filters glass-panel">
        <div className="search-box">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search problems or topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <Filter size={14} />
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
            {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
      </div>

      {/* Results count */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', padding: '0 0.25rem' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Showing {((page - 1) * ITEMS_PER_PAGE) + 1}–{Math.min(page * ITEMS_PER_PAGE, filtered.length)} of {filtered.length} results
        </span>
      </div>

      {/* Problem Table */}
      <div className="glass-panel problem-table">
        <div className="table-header-row">
          <span className="col-status">Status</span>
          <span className="col-title">Title</span>
          <span className="col-cat">Topic</span>
          <span className="col-diff">Difficulty</span>

          <span className="col-action"></span>
        </div>
        {paginated.length === 0 && (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            No problems match your filters.
          </div>
        )}
        {paginated.map(p => (
          <div className="table-row" key={p.id} onClick={() => navigate(`/problem/${p.id}`)}>
            <span className="col-status">
              {solvedIds.includes(p.id) ? <CheckCircle2 size={18} color="var(--success)" /> : <span className="unsolved-dot"></span>}
            </span>
            <span className="col-title">
              <span>{p.title}</span>
              {p.subTopic && <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', display: 'block', marginTop: '2px' }}>{p.subTopic}</span>}
            </span>
            <span className="col-cat"><span className="tag cat">{p.category}</span></span>
            <span className="col-diff">
              <span className={`tag diff-${p.difficulty.toLowerCase()}`}>{p.difficulty}</span>
            </span>

            <span className="col-action" style={{ display: 'flex', gap: '0.3rem' }}>
              <ChevronRight size={16} />
            </span>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem', padding: '1rem' }}>
          <button
            className="btn-secondary btn-sm"
            disabled={page <= 1}
            onClick={() => setPage(p => Math.max(1, p - 1))}
            style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
          >
            <ChevronLeft size={14} /> Prev
          </button>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Page {page} of {totalPages}
          </span>
          <button
            className="btn-secondary btn-sm"
            disabled={page >= totalPages}
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
          >
            Next <ChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProblemArchive;
