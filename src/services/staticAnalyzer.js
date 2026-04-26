/**
 * Static Analyzer - "Safe-Run" Middleware
 * Performs syntax checks and logic pre-checks BEFORE code execution.
 * Returns structured mentor-friendly errors instead of raw compiler output.
 */

// ===== FRIENDLY ERROR MAP =====
const ERROR_MAP = {
  IndexError: {
    icon: "🔍",
    title: "Array Out of Bounds",
    message: "It looks like you're reaching for a box that doesn't exist in your array. Check your loop boundaries!",
    hint: "Make sure your loop runs from 0 to length-1, not length."
  },
  TypeError: {
    icon: "🔀",
    title: "Type Mismatch",
    message: "You're trying to mix different types of data. Ensure you're not adding a number to a word.",
    hint: "Use int(), str(), or appropriate type conversion functions."
  },
  Timeout: {
    icon: "⏱️",
    title: "Time Limit Warning",
    message: "Your code is working hard, but there might be a faster way! Can we reduce the number of loops?",
    hint: "Look for nested loops and consider using a hash map for O(1) lookups."
  },
  SyntaxMissing: {
    icon: "✏️",
    title: "Syntax Incomplete",
    message: "Something is missing in your code structure.",
    hint: "Check for missing colons, brackets, or parentheses."
  },
  InfiniteLoop: {
    icon: "♾️",
    title: "Potential Infinite Loop",
    message: "This loop might never stop running! Make sure your loop condition will eventually become false.",
    hint: "Check that your loop variable is being updated inside the loop body."
  },
  EmptyBody: {
    icon: "📝",
    title: "Empty Function Body",
    message: "Your function doesn't have any implementation yet.",
    hint: "Replace 'pass' or empty blocks with your solution logic."
  }
};

// ===== PYTHON STATIC ANALYZER =====
function analyzePython(code, lines) {
  const errors = [];
  const warnings = [];

  // 1. Check for missing colons on control flow statements
  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (trimmed.length === 0 || trimmed.startsWith('#')) return;

    const controlKeywords = ['for ', 'if ', 'elif ', 'else', 'while ', 'def ', 'class ', 'try', 'except', 'finally', 'with '];
    const isControl = controlKeywords.some(kw => trimmed.startsWith(kw) || trimmed === kw.trim());

    if (isControl && !trimmed.endsWith(':') && !trimmed.endsWith('\\') && !trimmed.endsWith(',')) {
      errors.push({
        line: i + 1,
        type: 'SyntaxMissing',
        raw: `Missing colon ':' at end of statement`,
        ...ERROR_MAP.SyntaxMissing,
        message: `You're missing a colon ':' at the end of line ${i + 1}. In Python, every for/if/while/def statement must end with a colon.`,
        codeSnippet: line
      });
    }
  });

  // 2. Check bracket balance
  const bracketPairs = { '(': ')', '[': ']', '{': '}' };
  const stack = [];
  const bracketPositions = [];

  lines.forEach((line, i) => {
    for (let ch of line) {
      if ('([{'.includes(ch)) {
        stack.push({ char: ch, line: i + 1 });
        bracketPositions.push({ char: ch, line: i + 1, type: 'open' });
      }
      if (')]}'.includes(ch)) {
        const last = stack.pop();
        if (last && bracketPairs[last.char] !== ch) {
          errors.push({
            line: i + 1,
            type: 'SyntaxMissing',
            ...ERROR_MAP.SyntaxMissing,
            title: "Mismatched Bracket",
            message: `You opened '${last.char}' on line ${last.line} but closed with '${ch}' on line ${i + 1}. These brackets don't match!`,
            hint: `Make sure every '${last.char}' is closed with '${bracketPairs[last.char]}'.`,
            codeSnippet: line
          });
        }
      }
    }
  });

  if (stack.length > 0) {
    stack.forEach(unclosed => {
      errors.push({
        line: unclosed.line,
        type: 'SyntaxMissing',
        ...ERROR_MAP.SyntaxMissing,
        title: "Unclosed Bracket",
        message: `You opened a '${unclosed.char}' on line ${unclosed.line} but never closed it.`,
        hint: `Add a matching '${bracketPairs[unclosed.char]}' to close this bracket.`,
        codeSnippet: lines[unclosed.line - 1]
      });
    });
  }

  // 3. Check for print without parentheses (Python 3)
  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (trimmed.match(/^print\s+[^(]/) && !trimmed.startsWith('#')) {
      errors.push({
        line: i + 1,
        type: 'SyntaxMissing',
        ...ERROR_MAP.SyntaxMissing,
        title: "Python 3 Print Syntax",
        message: `'print' is a function in Python 3. Use parentheses: print(...) instead of print ... on line ${i + 1}.`,
        hint: "Wrap your print arguments in parentheses: print('hello')",
        codeSnippet: line
      });
    }
  });

  // 4. Check for undefined variable patterns (very basic)
  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (trimmed.match(/\[\s*len\s*\(/)) {
      // They might be doing arr[len(arr)] which is an IndexError
      if (!trimmed.includes('len(') || !trimmed.includes('- 1')) {
        warnings.push({
          line: i + 1,
          type: 'IndexError',
          ...ERROR_MAP.IndexError,
          message: `Line ${i + 1}: Using len() as an index can cause an IndexError. Remember, the last valid index is len(arr) - 1.`,
          codeSnippet: line
        });
      }
    }
  });

  return { errors, warnings };
}

// ===== GENERIC STATIC ANALYZER (C++/Java/JS) =====
function analyzeGeneric(code, lines, language) {
  const errors = [];
  const warnings = [];

  // Bracket balance
  const stack = [];
  const pairs = { '(': ')', '[': ']', '{': '}' };

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) return;

    for (let ch of line) {
      if ('([{'.includes(ch)) stack.push({ char: ch, line: i + 1 });
      if (')]}'.includes(ch)) {
        const last = stack.pop();
        if (last && pairs[last.char] !== ch) {
          errors.push({
            line: i + 1, type: 'SyntaxMissing',
            ...ERROR_MAP.SyntaxMissing,
            title: "Mismatched Bracket",
            message: `Bracket mismatch: opened '${last.char}' on line ${last.line}, closed with '${ch}' on line ${i + 1}.`,
            hint: "Ensure all opening brackets have matching closing brackets.",
            codeSnippet: line
          });
        }
      }
    }
  });

  if (stack.length > 0) {
    stack.forEach(u => {
      errors.push({
        line: u.line, type: 'SyntaxMissing', ...ERROR_MAP.SyntaxMissing,
        title: "Unclosed Bracket",
        message: `Unclosed '${u.char}' on line ${u.line}.`,
        hint: `Add a '${pairs[u.char]}' to close it.`,
        codeSnippet: lines[u.line - 1]
      });
    });
  }

  // Missing semicolons (C++/Java)
  if (language === 'cpp' || language === 'java') {
    lines.forEach((line, i) => {
      const trimmed = line.trim();
      if (trimmed.length === 0 || trimmed.startsWith('//') || trimmed.startsWith('#') || trimmed.startsWith('/*') || trimmed.startsWith('*')) return;
      if (trimmed.endsWith('{') || trimmed.endsWith('}') || trimmed.endsWith(':') || trimmed.endsWith(',')) return;
      if (trimmed.startsWith('for') || trimmed.startsWith('if') || trimmed.startsWith('while') || trimmed.startsWith('else') || trimmed.startsWith('class') || trimmed.startsWith('public') || trimmed.startsWith('private') || trimmed.startsWith('using') || trimmed.startsWith('namespace')) return;

      if (trimmed.includes('=') && !trimmed.endsWith(';') && !trimmed.endsWith(')') && !trimmed.endsWith('{')) {
        warnings.push({
          line: i + 1, type: 'SyntaxMissing', ...ERROR_MAP.SyntaxMissing,
          title: "Possible Missing Semicolon",
          message: `Line ${i + 1} might be missing a semicolon ';' at the end.`,
          hint: "Most statements in C++/Java need to end with a semicolon.",
          codeSnippet: line
        });
      }
    });
  }

  return { errors, warnings };
}

// ===== LOGIC PRE-CHECKS =====
function analyzeLogic(code, lines, problem) {
  const warnings = [];
  const lowerCode = code.toLowerCase();

  // 1. Nested loop detection -> O(n²) warning
  let loopDepth = 0;
  let maxLoopDepth = 0;
  const nestedLoopLines = [];

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (trimmed.match(/\b(for|while)\b/) && !trimmed.startsWith('//') && !trimmed.startsWith('#')) {
      loopDepth++;
      if (loopDepth > 1) nestedLoopLines.push(i + 1);
      maxLoopDepth = Math.max(maxLoopDepth, loopDepth);
    }
    if (trimmed === '}' || (trimmed === '' && loopDepth > 0)) {
      // Simple heuristic to track loop closing
    }
  });

  // Reset with a better heuristic: count total loop keywords
  const loopCount = (code.match(/\b(for|while)\b/g) || []).length;

  if (loopCount > 1) {
    // Check problem constraints for large N
    const hasLargeConstraint = problem?.constraints?.some(c => c.includes('10^4') || c.includes('10^5'));
    warnings.push({
      line: nestedLoopLines[0] || 0,
      type: 'Timeout',
      ...ERROR_MAP.Timeout,
      message: hasLargeConstraint
        ? "⚠️ Your solution has nested loops (O(n²)) but the constraint allows up to 10^4 or 10^5 elements. This might cause a Time Limit Exceeded error!"
        : "Your logic might be too slow for large test cases. Want a hint on optimization?",
      hint: "Consider using a Hash Map for O(1) lookups instead of a nested loop for O(n) searches.",
      severity: 'warning'
    });
  }

  // 2. Infinite loop detection
  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (trimmed === 'while True:' || trimmed === 'while(true)' || trimmed === 'while (true)' || trimmed === 'while(true){') {
      // Check if there's a break in the next few lines
      const nextLines = lines.slice(i + 1, i + 10).join(' ');
      if (!nextLines.includes('break') && !nextLines.includes('return')) {
        warnings.push({
          line: i + 1, type: 'InfiniteLoop', ...ERROR_MAP.InfiniteLoop,
          message: `Potential infinite loop on line ${i + 1}. Make sure there's a 'break' or 'return' inside.`,
          codeSnippet: line, severity: 'warning'
        });
      }
    }
  });

  // 3. Empty body detection
  const hasLogic = lines.some(l => {
    const t = l.trim();
    return t.length > 0 && !t.startsWith('#') && !t.startsWith('//') && t !== 'pass'
      && !t.startsWith('def ') && !t.startsWith('class ') && !t.startsWith('public')
      && !t.startsWith('int ') && !t.startsWith('var ') && !t.startsWith('function')
      && t !== '{' && t !== '}' && t !== '};' && !t.startsWith('import') && !t.startsWith('#include') && !t.startsWith('using ');
  });

  if (!hasLogic) {
    warnings.push({
      line: 0, type: 'EmptyBody', ...ERROR_MAP.EmptyBody,
      message: "Your function body is empty. Add your solution logic before running!",
      severity: 'error'
    });
  }

  return warnings;
}

// ===== MAIN EXPORT =====
export function runStaticAnalysis(code, language, problem) {
  if (!code || code.trim() === '') {
    return {
      passed: false,
      syntaxErrors: [{
        line: 1, type: 'EmptyBody', ...ERROR_MAP.EmptyBody,
        message: "No code to analyze. Write your solution first!"
      }],
      logicWarnings: [],
      errorLines: [1]
    };
  }

  const lines = code.split('\n');

  // Phase 1: Syntax Analysis
  const syntaxResult = language === 'python'
    ? analyzePython(code, lines)
    : analyzeGeneric(code, lines, language);

  // Phase 2: Logic Pre-check (only if syntax passes)
  const logicWarnings = syntaxResult.errors.length === 0
    ? analyzeLogic(code, lines, problem)
    : [];

  // Collect all error line numbers for monaco highlighting
  const errorLines = [
    ...syntaxResult.errors.map(e => e.line),
    ...syntaxResult.warnings.map(w => w.line),
    ...logicWarnings.filter(w => w.severity === 'error').map(w => w.line)
  ].filter(l => l > 0);

  return {
    passed: syntaxResult.errors.length === 0,
    syntaxErrors: [...syntaxResult.errors, ...syntaxResult.warnings],
    logicWarnings,
    errorLines: [...new Set(errorLines)]
  };
}
