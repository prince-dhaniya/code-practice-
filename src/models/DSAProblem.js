/**
 * ApexCode DSA Platform — Mongoose Schemas v2.0
 * Auto-generated from DSA SHEET.html extraction
 * 
 * Features:
 * - Full-text search indexes on title and topic
 * - Compound indexes for efficient filtering
 * - Virtual fields for computed properties
 * - Timestamps for audit trail
 */

const mongoose = require('mongoose');

// ============================================================
// 1. PROBLEM SCHEMA
// ============================================================
const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Problem title is required'],
    trim: true,
    index: true,
  },
  topic: {
    type: String,
    required: [true, 'Topic is required'],
    enum: [
      'Fundamentals', 'Mathematics', 'Arrays', 'Strings', 'Sorting',
      'Searching', 'Hashing', 'Recursion', 'Backtracking', 'Linked List',
      'Stack & Queue', 'Heap', 'Trees', 'BST', 'Dynamic Programming',
      'Bit Manipulation', 'Graphs', 'Trie', 'Greedy', 'Advanced',
      'System Design', 'General'
    ],
    index: true,
  },
  subTopic: {
    type: String,
    trim: true,
    index: true,
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Medium',
    index: true,
  },
  link: {
    type: String,
    required: [true, 'Practice link is required'],
  },
  isCompleted: {
    type: Boolean,
    default: false,
    index: true,
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// Compound index for efficient topic + difficulty queries
problemSchema.index({ topic: 1, difficulty: 1 });
problemSchema.index({ topic: 1, subTopic: 1 });

// Text index for search
problemSchema.index({ title: 'text', topic: 'text', subTopic: 'text' });

// ============================================================
// 2. USER PROGRESS SCHEMA
// ============================================================
const userProgressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
    index: true,
  },
  problem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Problem',
    required: [true, 'Problem ID is required'],
    index: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  notes: {
    type: String,
    trim: true,
    maxlength: 2000,
  },
  attempts: {
    type: Number,
    default: 0,
    min: 0,
  },
  timeSpent: {
    type: Number, // in seconds
    default: 0,
    min: 0,
  },
  completedAt: {
    type: Date,
  },
}, {
  timestamps: true,
});

// Unique constraint: one progress record per user per problem
userProgressSchema.index({ user: 1, problem: 1 }, { unique: true });

// ============================================================
// 3. EXPORT MODELS
// ============================================================
const Problem = mongoose.model('Problem', problemSchema);
const UserProgress = mongoose.model('UserProgress', userProgressSchema);

module.exports = { Problem, UserProgress };
