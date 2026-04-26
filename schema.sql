-- ============================================================
-- ApexCode DSA Platform — PostgreSQL Schema v2.0
-- Generated automatically from DSA SHEET.html extraction
-- ============================================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- 1. PROBLEMS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS problems (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title       TEXT NOT NULL,
    topic       TEXT NOT NULL,           -- Parent category (e.g., "Arrays", "Dynamic Programming")
    sub_topic   TEXT,                    -- Sub-category (e.g., "Sliding Window", "Knapsack Problem")
    difficulty  TEXT NOT NULL DEFAULT 'Medium'
                CHECK (difficulty IN ('Easy', 'Medium', 'Hard')),
    link        TEXT NOT NULL,
    is_completed BOOLEAN DEFAULT false,
    created_at  TIMESTAMPTZ DEFAULT NOW(),
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for fast filtering
CREATE INDEX IF NOT EXISTS idx_problems_topic ON problems(topic);
CREATE INDEX IF NOT EXISTS idx_problems_sub_topic ON problems(sub_topic);
CREATE INDEX IF NOT EXISTS idx_problems_difficulty ON problems(difficulty);
CREATE INDEX IF NOT EXISTS idx_problems_completed ON problems(is_completed);

-- ============================================================
-- 2. USER PROGRESS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS user_progress (
    id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id      UUID NOT NULL,
    problem_id   UUID NOT NULL REFERENCES problems(id) ON DELETE CASCADE,
    is_completed BOOLEAN DEFAULT false,
    notes        TEXT,                   -- User's personal notes
    attempts     INTEGER DEFAULT 0,      -- Number of attempts
    time_spent   INTEGER DEFAULT 0,      -- Time spent in seconds
    completed_at TIMESTAMPTZ,
    created_at   TIMESTAMPTZ DEFAULT NOW(),
    updated_at   TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, problem_id)
);

-- Indexes for user queries
CREATE INDEX IF NOT EXISTS idx_user_progress_user ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_problem ON user_progress(problem_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_completed ON user_progress(is_completed);

-- ============================================================
-- 3. USEFUL VIEWS
-- ============================================================

-- View: Problem count per topic
CREATE OR REPLACE VIEW topic_summary AS
SELECT 
    topic,
    COUNT(*) as total_problems,
    COUNT(*) FILTER (WHERE difficulty = 'Easy') as easy_count,
    COUNT(*) FILTER (WHERE difficulty = 'Medium') as medium_count,
    COUNT(*) FILTER (WHERE difficulty = 'Hard') as hard_count
FROM problems
GROUP BY topic
ORDER BY total_problems DESC;

-- View: User progress summary
CREATE OR REPLACE VIEW user_progress_summary AS
SELECT 
    up.user_id,
    p.topic,
    COUNT(*) as total_attempted,
    COUNT(*) FILTER (WHERE up.is_completed = true) as completed,
    ROUND(100.0 * COUNT(*) FILTER (WHERE up.is_completed = true) / NULLIF(COUNT(*), 0), 1) as completion_pct
FROM user_progress up
JOIN problems p ON up.problem_id = p.id
GROUP BY up.user_id, p.topic;
