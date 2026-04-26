"""
DSA Sheet HTML Extractor v2.0
=============================
Enhanced extraction from Apna College DSA SHEET.html (Netscape Bookmark format).

Improvements over v1:
- Smart difficulty inference based on topic & problem naming patterns
- Proper parent/child topic hierarchy (e.g., "Dynamic Programming > Knapsack Problem")
- HTML entity decoding (e.g., &amp; → &, &#39; → ')
- Sub-topic tracking for granular categorization
- Generates: JSON, PostgreSQL seed, MongoDB seed, and summary statistics
"""

import json
import re
import uuid
import html
from pathlib import Path
from collections import Counter

# ============================================================
# CONFIGURATION
# ============================================================
INPUT_FILE = r"c:\Users\UseR\Downloads\DSA SHEET.html"
OUTPUT_DIR = Path(r"c:\Users\UseR\Desktop\coding_practice")

# ============================================================
# DIFFICULTY INFERENCE ENGINE
# ============================================================

# Major topic categories → default difficulty
TOPIC_DIFFICULTY_MAP = {
    # Beginner
    "Core Subjects": "Easy",
    "Getting Started": "Easy",
    "C++ Programming Basics": "Easy",
    "STL C++": "Easy",
    "Basic Java Problems": "Easy",
    "Loops Basics": "Easy",
    "Digit Traversals": "Easy",
    "Basic Math Problems": "Easy",
    "Pattern Printing": "Easy",
    "Time & Space Complexity": "Easy",
    
    # Easy-Medium
    "1D Arrays": "Easy",
    "2D Arrays": "Medium",
    "Array Sorting": "Medium",
    "Strings Basics": "Easy",
    "Basic Hashing": "Easy",
    "Basic Recursion": "Easy",
    "Recursion": "Easy",
    "Searching Basics": "Easy",
    
    # Medium
    "Linear Search": "Easy",
    "Binary Search": "Medium",
    "Binary Search Advanced": "Medium",
    "Binary Search on Answer": "Medium",
    "Selection Sort": "Easy",
    "Bubble Sort": "Easy",
    "Insertion Sort": "Easy",
    "Cyclic Sort": "Medium",
    "Merge Sort": "Medium",
    "Quick Sort": "Medium",
    "Counting Sort": "Medium",
    "Radix Sort": "Medium",
    "Bucket Sort": "Medium",
    "Dutch National Flag": "Medium",
    "Matrix": "Medium",
    "Sliding Window": "Medium",
    "Two Pointers": "Medium",
    "Prefix Sum": "Medium",
    "Kadane's Algorithm": "Medium",
    
    # Medium-Hard (Linked Lists, Stacks, Queues)
    "Linked List": "Medium",
    "Singly Linked List": "Medium",
    "Doubly Linked List": "Medium",
    "Circular Linked List": "Medium",
    "Linked List Sorting": "Medium",
    "Linked List Cycle": "Medium",
    "Linked List Reversals": "Medium",
    "Linked List Clone": "Hard",
    "Stack": "Medium",
    "Queue": "Medium",
    "Monotonic Stack": "Medium",
    "Monotonic Queue": "Medium",
    "Priority Queue": "Medium",
    
    # Medium-Hard (Trees)
    "Binary Tree": "Medium",
    "Tree Traversals": "Medium",
    "Level Order": "Medium",
    "Tree Views": "Medium",
    "Special Trees": "Medium",
    "Binary Search Tree": "Medium",
    "BST": "Medium",
    "Construct BST": "Medium",
    "Check for BST": "Medium",
    "BST Iterator": "Medium",
    "Heap": "Medium",
    "Hashing": "Medium",
    
    # Hard
    "Dynamic Programming": "Medium",
    "Fibonacci Sequence": "Easy",
    "Climbing Stairs": "Easy",
    "House Robber": "Medium",
    "Knapsack Problem": "Medium",
    "Coin Change Problem": "Medium",
    "Buy & Sell Stock": "Medium",
    "Target Sum Subset": "Medium",
    "DP on Grid": "Medium",
    "Pascal Triangle": "Easy",
    "LIS Problems": "Medium",
    "LCS Problems": "Medium",
    "Longest Common Subset": "Medium",
    "Longest Duplicate Subset": "Hard",
    "Palindromic Subsets": "Hard",
    "Palindromic Substrings": "Medium",
    "Expression Matching": "Hard",
    "Shortest Common Superset": "Hard",
    "Catalan Numbers": "Hard",
    "Optimal Game Strategy": "Hard",
    "MCM Problems": "Hard",
    "Palindromic Partitioning": "Hard",
    "Matrix Chain Multiplication": "Hard",
    "Word Break": "Medium",
    
    # Hard (Graphs)
    "Graphs": "Medium",
    "Basic BFS/DFS": "Medium",
    "Euler Path & Circuit": "Hard",
    "Connected Components": "Medium",
    "Cycle Detection": "Medium",
    "Topological Sort": "Medium",
    "Graph Coloring": "Hard",
    "Shortest Path": "Medium",
    "Unweighted Graph": "Medium",
    "Dijkstra's Algorithm": "Medium",
    "Bellman Ford Algo": "Hard",
    "Floyd Warshall Algo": "Hard",
    "Directed Acyclic Graph": "Medium",
    "Disjoint Set Union (DSU)": "Hard",
    "Minimum Spanning Tree": "Hard",
    "Articulation Pt & Bridges": "Hard",
    
    # Hard (Bit Manipulation)
    "Bit Manipulation": "Medium",
    "Number System": "Easy",
    "Bitmasking Basics": "Medium",
    "Hamming Weight": "Easy",
    "Bitset Problems": "Medium",
    "Gray Codes": "Medium",
    "Single Number": "Easy",
    "XOR Problems": "Medium",
    "More Bits Problems": "Medium",
    
    # Hard (Trie)
    "Trie or Prefix Tree": "Medium",
    "Prefix Tree Problems": "Medium",
    "Binary Trie Problems": "Hard",
    
    # Expert (Competitive Programming)
    "Competitive Programming": "Hard",
    "Template": "Medium",
    "String Pattern Matching": "Hard",
    "Advanced Mathematics": "Hard",
    "Advanced Number Theory": "Hard",
    "Large Exponentiation": "Hard",
    "Fibonacci Numbers": "Medium",
    "Probability Problems": "Hard",
    "Game Theory": "Hard",
    "Advanced Searching": "Hard",
    "Advanced Linked Lists": "Hard",
    "XOR List": "Hard",
    "Skip List": "Hard",
    "Self Organizing List": "Hard",
    "Unrolled Linked List": "Hard",
    "Advanced Trees": "Hard",
    "AVL Tree": "Hard",
    "B & B+ Tree": "Hard",
    "M Way Tree": "Hard",
    "Red Black Trees": "Hard",
    "Splay Trees": "Hard",
    "Range Query": "Hard",
    "Range Query Theory": "Hard",
    "Range Sum Query": "Medium",
    "Range Minimum Query": "Hard",
    "Subarray Sum Queries": "Medium",
    "Range Query Problems": "Hard",
    "Advanced Geometry": "Hard",
    "Digit Dynamic Programming": "Hard",
    "DP With Bitmasking": "Hard",
    "Meet in the Middle": "Hard",
    "Network Flow Algorithm": "Hard",
    
    # System Design
    "System Design": "Medium",
    "Java Advanced": "Medium",
    "Multithreading": "Medium",
    "Design Principles": "Medium",
    "Design Patterns": "Medium",
    "Design Problems": "Hard",
    "Leetcode Problems": "Medium",
    "Design Parser": "Hard",
    "Leetcode Locked": "Hard",
    "Machine Coding Round": "Hard",
    "High Level Design": "Hard",
    "Databases": "Medium",
    "InterviewBit HLD": "Hard",
    
    # Recursion & Backtracking
    "Subsequences": "Medium",
    "Subset Sum": "Medium",
    "Permutations": "Medium",
    "Backtracking": "Medium",
    "N-Queens": "Hard",
    "Sudoku Solver": "Hard",
    "Greedy": "Medium",
    "Activity Selection": "Medium",
    "Interval Scheduling": "Medium",
    "Job Sequencing": "Medium",
}

# LeetCode problem slug → known difficulty (common ones)
LEETCODE_DIFFICULTY = {
    "two-sum": "Easy",
    "reverse-integer": "Medium",
    "powx-n": "Medium",
    "fibonacci-number": "Easy",
    "n-th-tribonacci-number": "Easy",
    "fizzbuzz": "Easy",
    "subtract-the-product-and-sum-of-digits-of-an-integer": "Easy",
    "self-dividing-numbers": "Easy",
    "nim-game": "Easy",
    "divisor-game": "Easy",
    "add-digits": "Easy",
    "bulb-switcher": "Medium",
    "count-of-matches-in-tournament": "Easy",
    "count-odd-numbers-in-an-interval-range": "Easy",
    "water-bottles": "Easy",
    "count-square-sum-triples": "Easy",
    "factorial-trailing-zeroes": "Medium",
    "ugly-number": "Easy",
    "number-of-days-between-two-dates": "Easy",
    "day-of-the-year": "Easy",
    "day-of-the-week": "Easy",
    "a-number-after-a-double-reversal": "Easy",
    "best-time-to-buy-and-sell-stock": "Easy",
    "best-time-to-buy-and-sell-stock-ii": "Medium",
    "best-time-to-buy-and-sell-stock-iii": "Hard",
    "trapping-rain-water": "Hard",
    "container-with-most-water": "Medium",
    "3sum": "Medium",
    "4sum": "Medium",
    "longest-substring-without-repeating-characters": "Medium",
    "median-of-two-sorted-arrays": "Hard",
    "merge-k-sorted-lists": "Hard",
    "valid-parentheses": "Easy",
    "merge-two-sorted-lists": "Easy",
    "binary-search": "Easy",
    "find-minimum-in-rotated-sorted-array": "Medium",
    "search-in-rotated-sorted-array": "Medium",
    "kth-largest-element-in-an-array": "Medium",
    "top-k-frequent-elements": "Medium",
    "lru-cache": "Medium",
    "word-search": "Medium",
    "word-search-ii": "Hard",
    "course-schedule": "Medium",
    "course-schedule-ii": "Medium",
    "number-of-islands": "Medium",
    "word-ladder": "Hard",
    "word-break": "Medium",
    "coin-change": "Medium",
    "longest-increasing-subsequence": "Medium",
    "longest-common-subsequence": "Medium",
    "edit-distance": "Medium",
    "regular-expression-matching": "Hard",
    "wildcard-matching": "Hard",
    "unique-paths": "Medium",
    "minimum-path-sum": "Medium",
    "climbing-stairs": "Easy",
    "house-robber": "Medium",
    "house-robber-ii": "Medium",
    "decode-ways": "Medium",
    "palindrome-partitioning": "Medium",
    "palindrome-partitioning-ii": "Hard",
    "maximum-subarray": "Medium",
    "product-of-array-except-self": "Medium",
    "rotate-array": "Medium",
    "move-zeroes": "Easy",
    "sort-colors": "Medium",
    "next-permutation": "Medium",
    "spiral-matrix": "Medium",
    "set-matrix-zeroes": "Medium",
    "rotate-image": "Medium",
    "reverse-linked-list": "Easy",
    "linked-list-cycle": "Easy",
    "linked-list-cycle-ii": "Medium",
    "merge-intervals": "Medium",
    "insert-interval": "Medium",
    "implement-trie-prefix-tree": "Medium",
    "design-add-and-search-words-data-structure": "Medium",
    "kth-smallest-element-in-a-bst": "Medium",
    "lowest-common-ancestor-of-a-binary-tree": "Medium",
    "binary-tree-level-order-traversal": "Medium",
    "binary-tree-zigzag-level-order-traversal": "Medium",
    "serialize-and-deserialize-binary-tree": "Hard",
    "construct-binary-tree-from-preorder-and-inorder-traversal": "Medium",
    "validate-binary-search-tree": "Medium",
    "minimum-window-substring": "Hard",
    "sliding-window-maximum": "Hard",
    "permutations": "Medium",
    "subsets": "Medium",
    "combination-sum": "Medium",
    "letter-combinations-of-a-phone-number": "Medium",
    "generate-parentheses": "Medium",
    "n-queens": "Hard",
    "sudoku-solver": "Hard",
    "jump-game": "Medium",
    "jump-game-ii": "Medium",
    "task-scheduler": "Medium",
    "partition-labels": "Medium",
}


def infer_difficulty(problem_name: str, topic: str, link: str) -> str:
    """
    Infer difficulty using a multi-signal approach:
    1. Check if it's a known LeetCode problem
    2. Check topic-based mapping
    3. Fall back to heuristics based on problem name
    """
    # 1. Try LeetCode slug lookup
    lc_match = re.search(r'leetcode\.com/problems?/([^/]+)', link)
    if lc_match:
        slug = lc_match.group(1).rstrip('/')
        if slug in LEETCODE_DIFFICULTY:
            return LEETCODE_DIFFICULTY[slug]
    
    # 2. Topic-based mapping
    decoded_topic = html.unescape(topic)
    if decoded_topic in TOPIC_DIFFICULTY_MAP:
        return TOPIC_DIFFICULTY_MAP[decoded_topic]
    
    # 3. Name-based heuristics
    name_lower = problem_name.lower()
    if any(kw in name_lower for kw in ['basic', 'hello world', 'intro', 'beginner', 'simple']):
        return "Easy"
    if any(kw in name_lower for kw in ['advanced', 'optimize', 'hard', 'complex']):
        return "Hard"
    
    return "Medium"  # Safe default


# ============================================================
# PARENT TOPIC HIERARCHY (Apna College style)
# ============================================================

# Maps sub-topics to their parent DSA category
PARENT_TOPIC_MAP = {
    # Basics
    "Core Subjects": "Fundamentals",
    "Getting Started": "Fundamentals",
    "C++ Programming Basics": "Fundamentals",
    "STL C++": "Fundamentals",
    "Basic Java Problems": "Fundamentals",
    "Loops Basics": "Fundamentals",
    "Digit Traversals": "Fundamentals",
    "Basic Math Problems": "Mathematics",
    "Pattern Printing": "Fundamentals",
    "Time & Space Complexity": "Fundamentals",
    
    # Arrays & Strings
    "1D Arrays": "Arrays",
    "2D Arrays": "Arrays",
    "Array Sorting": "Sorting",
    "Strings Basics": "Strings",
    "Basic Hashing": "Hashing",
    
    # Sorting algorithms
    "Selection Sort": "Sorting",
    "Bubble Sort": "Sorting",
    "Insertion Sort": "Sorting",
    "Cyclic Sort": "Sorting",
    "Merge Sort": "Sorting",
    "Quick Sort": "Sorting",
    "Counting Sort": "Sorting",
    "Radix Sort": "Sorting",
    "Bucket Sort": "Sorting",
    "Dutch National Flag": "Sorting",
    
    # Searching
    "Linear Search": "Searching",
    "Binary Search": "Searching",
    "Binary Search Advanced": "Searching",
    "Binary Search on Answer": "Searching",
    "Searching Basics": "Searching",
    
    # Matrix
    "Matrix": "Arrays",
    
    # Techniques
    "Sliding Window": "Arrays",
    "Two Pointers": "Arrays",
    "Prefix Sum": "Arrays",
    
    # Recursion
    "Basic Recursion": "Recursion",
    "Recursion": "Recursion",
    "Subsequences": "Recursion",
    "Subset Sum": "Recursion",
    "Permutations": "Recursion",
    "Backtracking": "Backtracking",
    "N-Queens": "Backtracking",
    "Sudoku Solver": "Backtracking",
    
    # Linked Lists
    "Linked List": "Linked List",
    "Singly Linked List": "Linked List",
    "Doubly Linked List": "Linked List",
    "Circular Linked List": "Linked List",
    "Linked List Sorting": "Linked List",
    "Linked List Cycle": "Linked List",
    "Linked List Reversals": "Linked List",
    "Linked List Clone": "Linked List",
    
    # Stacks & Queues
    "Stack": "Stack & Queue",
    "Queue": "Stack & Queue",
    "Monotonic Stack": "Stack & Queue",
    "Monotonic Queue": "Stack & Queue",
    "Priority Queue": "Heap",
    
    # Trees
    "Binary Tree": "Trees",
    "Tree Traversals": "Trees",
    "Level Order": "Trees",
    "Tree Views": "Trees",
    "Special Trees": "Trees",
    "Binary Search Tree": "BST",
    "BST": "BST",
    "Construct BST": "BST",
    "Check for BST": "BST",
    "BST Iterator": "BST",
    "Heap": "Heap",
    "Hashing": "Hashing",
    
    # DP
    "Dynamic Programming": "Dynamic Programming",
    "Fibonacci Sequence": "Dynamic Programming",
    "Climbing Stairs": "Dynamic Programming",
    "House Robber": "Dynamic Programming",
    "Knapsack Problem": "Dynamic Programming",
    "Coin Change Problem": "Dynamic Programming",
    "Buy & Sell Stock": "Dynamic Programming",
    "Target Sum Subset": "Dynamic Programming",
    "DP on Grid": "Dynamic Programming",
    "Pascal Triangle": "Dynamic Programming",
    "LIS Problems": "Dynamic Programming",
    "LCS Problems": "Dynamic Programming",
    "Longest Common Subset": "Dynamic Programming",
    "Longest Duplicate Subset": "Dynamic Programming",
    "Palindromic Subsets": "Dynamic Programming",
    "Palindromic Substrings": "Dynamic Programming",
    "Expression Matching": "Dynamic Programming",
    "Shortest Common Superset": "Dynamic Programming",
    "Catalan Numbers": "Dynamic Programming",
    "Kadane's Algorithm": "Dynamic Programming",
    "Optimal Game Strategy": "Dynamic Programming",
    "MCM Problems": "Dynamic Programming",
    "Palindromic Partitioning": "Dynamic Programming",
    "Matrix Chain Multiplication": "Dynamic Programming",
    "Word Break": "Dynamic Programming",
    
    # Bit Manipulation
    "Bit Manipulation": "Bit Manipulation",
    "Number System": "Bit Manipulation",
    "Bitmasking Basics": "Bit Manipulation",
    "Hamming Weight": "Bit Manipulation",
    "Bitset Problems": "Bit Manipulation",
    "Gray Codes": "Bit Manipulation",
    "Single Number": "Bit Manipulation",
    "XOR Problems": "Bit Manipulation",
    "More Bits Problems": "Bit Manipulation",
    
    # Graphs
    "Graphs": "Graphs",
    "Basic BFS/DFS": "Graphs",
    "Euler Path & Circuit": "Graphs",
    "Connected Components": "Graphs",
    "Cycle Detection": "Graphs",
    "Topological Sort": "Graphs",
    "Graph Coloring": "Graphs",
    "Shortest Path": "Graphs",
    "Unweighted Graph": "Graphs",
    "Dijkstra's Algorithm": "Graphs",
    "Bellman Ford Algo": "Graphs",
    "Floyd Warshall Algo": "Graphs",
    "Directed Acyclic Graph": "Graphs",
    "Disjoint Set Union (DSU)": "Graphs",
    "Minimum Spanning Tree": "Graphs",
    "Articulation Pt & Bridges": "Graphs",
    
    # Trie
    "Trie or Prefix Tree": "Trie",
    "Prefix Tree Problems": "Trie",
    "Binary Trie Problems": "Trie",
    
    # Greedy
    "Greedy": "Greedy",
    "Activity Selection": "Greedy",
    "Interval Scheduling": "Greedy",
    "Job Sequencing": "Greedy",
    
    # Advanced / CP
    "Competitive Programming": "Advanced",
    "Template": "Advanced",
    "String Pattern Matching": "Advanced",
    "Advanced Mathematics": "Advanced",
    "Advanced Number Theory": "Advanced",
    "Large Exponentiation": "Advanced",
    "Fibonacci Numbers": "Advanced",
    "Probability Problems": "Advanced",
    "Game Theory": "Advanced",
    "Advanced Searching": "Advanced",
    "Advanced Linked Lists": "Advanced",
    "XOR List": "Advanced",
    "Skip List": "Advanced",
    "Self Organizing List": "Advanced",
    "Unrolled Linked List": "Advanced",
    "Advanced Trees": "Advanced",
    "AVL Tree": "Advanced",
    "B & B+ Tree": "Advanced",
    "M Way Tree": "Advanced",
    "Red Black Trees": "Advanced",
    "Splay Trees": "Advanced",
    "Range Query": "Advanced",
    "Range Query Theory": "Advanced",
    "Range Sum Query": "Advanced",
    "Range Minimum Query": "Advanced",
    "Subarray Sum Queries": "Advanced",
    "Range Query Problems": "Advanced",
    "Advanced Geometry": "Advanced",
    "Digit Dynamic Programming": "Advanced",
    "DP With Bitmasking": "Advanced",
    "Meet in the Middle": "Advanced",
    "Network Flow Algorithm": "Advanced",
    
    # System Design
    "System Design": "System Design",
    "Java Advanced": "System Design",
    "Multithreading": "System Design",
    "Design Principles": "System Design",
    "Design Patterns": "System Design",
    "Design Problems": "System Design",
    "Leetcode Problems": "System Design",
    "Design Parser": "System Design",
    "Leetcode Locked": "System Design",
    "Machine Coding Round": "System Design",
    "High Level Design": "System Design",
    "Databases": "System Design",
    "InterviewBit HLD": "System Design",
}


# ============================================================
# KEYWORD-BASED PARENT TOPIC INFERENCE (FALLBACK)
# ============================================================

# When a sub-topic is not explicitly in PARENT_TOPIC_MAP, use keywords to infer
KEYWORD_PARENT_MAP = {
    "Arrays": ["array", "matrix", "traversal", "spiral", "rotate", "diagonal",
               "rows", "columns", "rearrange", "partition", "permutation",
               "reverse array", "missing", "duplicate", "2d", "big integers",
               "linear traversal", "max or min", "intersection", "union",
               "merge sorted", "inversion", "majority", "mountain"],
    "Strings": ["string", "anagram", "palindrom", "substring", "subsequence",
                "pattern matching", "string matching"],
    "Mathematics": ["math", "prime", "euclid", "modular", "geometry",
                    "root", "square", "fibonacci", "number theory",
                    "exponent", "probability", "inclusion exclusion",
                    "catalan", "combination", "puzzles"],
    "Sorting": ["sort", "dutch", "custom sorting", "partitioning algorithm",
                "merge sorted"],
    "Searching": ["search", "binary search", "lower", "upper bound",
                  "rotated sorted", "median"],
    "Hashing": ["hash", "target sum", "subarray sum", "divisible",
                "binary subarray"],
    "Recursion": ["recursion", "subset", "keypad", "maze path",
                  "permutation", "combination"],
    "Backtracking": ["queen", "sudoku", "backtrack"],
    "Linked List": ["linked list", "list node", "cycle detection",
                    "reverse linked", "reorder linked", "remove list",
                    "design linked", "merge sort list", "quick sort list",
                    "two pointers in list", "big integers as lists",
                    "floyd's cycle"],
    "Stack & Queue": ["stack", "queue", "parenthesis", "infix", "postfix",
                      "prefix expression", "monotonic", "design stack",
                      "doubly ended", "rearrange stack"],
    "Heap": ["heap", "priority queue", "huffman", "order statistics"],
    "Trees": ["tree", "traversal", "level order", "depth", "width",
              "path sum", "subtree", "view of tree", "construct binary",
              "compare tree", "modify binary", "morris", "lca",
              "diagonal order", "vertical order", "n ary", "generic tree",
              "binary lifting", "rerooting", "k distance", "complete binary",
              "expression tree"],
    "BST": ["bst"],
    "Dynamic Programming": ["dp", "dynamic programming", "knapsack",
                            "coin change", "lis ", "lcs ", "kadane",
                            "climbing", "house robber", "buy & sell",
                            "target sum subset", "pascal", "palindromic",
                            "word break", "expression matching",
                            "catalan", "game strategy", "mcm",
                            "matrix chain"],
    "Bit Manipulation": ["bit", "xor", "gray code", "hamming",
                         "single number", "bitset", "bitmasking",
                         "number system"],
    "Graphs": ["graph", "bfs", "dfs", "euler", "connected component",
               "cycle detection", "topological", "coloring", "shortest path",
               "dijkstra", "bellman", "floyd warshall", "spanning tree",
               "articulation", "disjoint", "network flow",
               "unweighted", "directed acyclic"],
    "Trie": ["trie", "prefix tree"],
    "Greedy": ["greedy", "activity selection", "interval", "job sequencing",
               "meeting rooms", "huffman"],
    "Advanced": ["advanced", "competitive", "template", "avl", "red black",
                 "splay", "b tree", "b+ tree", "m way", "range query",
                 "sparse table", "segment tree", "fenwick",
                 "skip list", "xor list", "self organizing",
                 "unrolled", "digit dp", "dp with bitmasking",
                 "meet in the middle"],
    "System Design": ["system design", "design", "multithreading",
                      "design pattern", "design principle", "machine coding",
                      "hld", "high level", "database", "leetcode locked",
                      "leetcode problems", "design parser", "interviewbit",
                      "design cache"],
}


def infer_parent_from_keywords(sub_topic: str) -> str:
    """Use keyword matching to infer the parent topic for unmapped sub-topics."""
    st_lower = sub_topic.lower()
    
    # Score each parent topic by number of keyword matches
    best_parent = "General"
    best_score = 0
    
    for parent, keywords in KEYWORD_PARENT_MAP.items():
        score = sum(1 for kw in keywords if kw in st_lower)
        if score > best_score:
            best_score = score
            best_parent = parent
    
    return best_parent


def resolve_parent_topic(sub_topic: str, topic_stack: list[str]) -> str:
    """
    Resolve the parent topic using multiple strategies:
    1. Direct PARENT_TOPIC_MAP lookup
    2. Walk up the topic stack looking for a known parent
    3. Keyword-based inference
    """
    # 1. Direct lookup
    if sub_topic in PARENT_TOPIC_MAP:
        return PARENT_TOPIC_MAP[sub_topic]
    
    # 2. Walk up the stack — find the nearest ancestor with a known mapping
    for ancestor in reversed(topic_stack[:-1]):  # Skip current (last) item
        if ancestor in PARENT_TOPIC_MAP:
            return PARENT_TOPIC_MAP[ancestor]
    
    # 3. Keyword-based fallback
    return infer_parent_from_keywords(sub_topic)


# ============================================================
# HTML PARSER
# ============================================================

def parse_dsa_sheet(file_path: str) -> list[dict]:
    """Parse the Netscape Bookmark HTML file and extract all DSA problems."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    problems = []
    topic_stack = []
    
    h3_pattern = re.compile(r'<H3[^>]*>(.*?)</H3>', re.IGNORECASE)
    a_pattern = re.compile(r'<A[^>]*HREF="([^"]*)"[^>]*>(.*?)</A>', re.IGNORECASE)
    
    for line in lines:
        stripped = line.strip()
        
        # Track topic hierarchy via H3 headings
        h3_match = h3_pattern.search(stripped)
        if h3_match:
            raw_topic = h3_match.group(1).strip()
            decoded_topic = html.unescape(raw_topic)
            topic_stack.append(decoded_topic)
            continue
        
        # Pop topic on </DL> closing tags
        if '</DL>' in stripped.upper():
            if topic_stack:
                topic_stack.pop()
            continue
        
        # Extract links
        a_match = a_pattern.search(stripped)
        if a_match:
            raw_link = a_match.group(1).strip()
            raw_name = a_match.group(2).strip()
            
            link = html.unescape(raw_link)
            name = html.unescape(raw_name)

            # Filter out non-practice questions (articles, YouTube, tutorials)
            link_lower = link.lower()
            name_lower = name.lower()
            theory_domains = ["youtube.com", "scaler.com", "programiz.com", "cp-algorithms", "github.com", "javatpoint.com", "techiedelight.com", "takeuforward.org/data-structure", "takeuforward.org/graph"]
            
            # takeuforward has some article paths, but let's just stick to the main ones:
            # Actually, takeuforward.org often links to problems, so let's stick to strict theory domains
            strict_theory_domains = ["youtube.com", "scaler.com", "programiz.com", "cp-algorithms.com", "github.com"]
            theory_kw = ["theory", "article", "tutorial", "playlist", "basics", "introduction", "explanation", "concept", "practice problems", "programming basics"]
            
            if any(domain in link_lower for domain in strict_theory_domains) or any(kw in name_lower for kw in theory_kw):
                continue
            
            sub_topic = topic_stack[-1] if topic_stack else "General"
            parent_topic = resolve_parent_topic(sub_topic, topic_stack)
            difficulty = infer_difficulty(name, sub_topic, link)
            
            problems.append({
                "id": str(uuid.uuid4()),
                "title": name,
                "topic": parent_topic,
                "sub_topic": sub_topic,
                "difficulty": difficulty,
                "link": link,
                "is_completed": False,
            })
    
    return problems


# ============================================================
# OUTPUT GENERATORS
# ============================================================

def generate_json(problems: list[dict], output_path: Path):
    """Write clean JSON output."""
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(problems, f, indent=2, ensure_ascii=False)
    print(f"  ✅ JSON: {output_path} ({len(problems)} problems)")


def generate_postgres_schema(output_path: Path):
    """Generate PostgreSQL schema with proper constraints and indexes."""
    schema = """-- ============================================================
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
"""
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(schema)
    print(f"  ✅ Schema: {output_path}")


def generate_seed_sql(problems: list[dict], output_path: Path):
    """Generate PostgreSQL INSERT statements for all problems."""
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("-- ============================================================\n")
        f.write("-- ApexCode DSA Seed Data — Auto-generated\n")
        f.write(f"-- Total Problems: {len(problems)}\n")
        f.write("-- ============================================================\n\n")
        f.write("BEGIN;\n\n")
        
        for p in problems:
            title = p['title'].replace("'", "''")
            topic = p['topic'].replace("'", "''")
            sub_topic = p['sub_topic'].replace("'", "''")
            difficulty = p['difficulty']
            link = p['link'].replace("'", "''")
            pid = p['id']
            
            f.write(
                f"INSERT INTO problems (id, title, topic, sub_topic, difficulty, link) "
                f"VALUES ('{pid}', '{title}', '{topic}', '{sub_topic}', '{difficulty}', '{link}');\n"
            )
        
        f.write("\nCOMMIT;\n")
    print(f"  ✅ Seed SQL: {output_path}")


def generate_mongoose_schema(output_path: Path):
    """Generate enhanced Mongoose schema for MERN stack (MongoDB)."""
    schema = """/**
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
""";
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(schema)
    print(f"  ✅ Mongoose: {output_path}")


def generate_mongo_seed(problems: list[dict], output_path: Path):
    """Generate MongoDB seed script (JS) for use with `node seed_mongo.js`."""
    seed = """/**
 * ApexCode DSA Platform — MongoDB Seed Script
 * Run: node seed_mongo.js
 * 
 * Requires: mongoose, dotenv
 * Set MONGODB_URI in your .env file
 */

require('dotenv').config();
const mongoose = require('mongoose');
const { Problem } = require('./src/models/DSAProblem');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/apexcode';

const problems = %s;

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');
    
    // Clear existing problems
    await Problem.deleteMany({});
    console.log('🗑️  Cleared existing problems');
    
    // Insert all problems
    const result = await Problem.insertMany(
      problems.map(p => ({
        title: p.title,
        topic: p.topic,
        subTopic: p.sub_topic,
        difficulty: p.difficulty,
        link: p.link,
        isCompleted: false,
      }))
    );
    
    console.log(`🎯 Seeded ${result.length} problems successfully!`);
    
    // Print summary
    const topicCounts = {};
    const difficultyCounts = { Easy: 0, Medium: 0, Hard: 0 };
    for (const p of problems) {
      topicCounts[p.topic] = (topicCounts[p.topic] || 0) + 1;
      difficultyCounts[p.difficulty] = (difficultyCounts[p.difficulty] || 0) + 1;
    }
    
    console.log('\\n📊 Summary:');
    console.log('  Difficulty Distribution:');
    Object.entries(difficultyCounts).forEach(([k, v]) => console.log(`    ${k}: ${v}`));
    console.log('  \\n  Topics:');
    Object.entries(topicCounts)
      .sort((a, b) => b[1] - a[1])
      .forEach(([k, v]) => console.log(`    ${k}: ${v}`));
    
  } catch (error) {
    console.error('❌ Seed failed:', error.message);
  } finally {
    await mongoose.disconnect();
    console.log('\\n🔌 Disconnected from MongoDB');
  }
}

seed();
""" % json.dumps([{
        "title": p["title"],
        "topic": p["topic"],
        "sub_topic": p["sub_topic"],
        "difficulty": p["difficulty"],
        "link": p["link"],
    } for p in problems], indent=2, ensure_ascii=False)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(seed)
    print(f"  ✅ Mongo Seed: {output_path}")


def print_summary(problems: list[dict]):
    """Print extraction statistics."""
    topics = Counter(p['topic'] for p in problems)
    difficulties = Counter(p['difficulty'] for p in problems)
    sub_topics = Counter(p['sub_topic'] for p in problems)
    
    print("\n" + "=" * 60)
    print("📊 EXTRACTION SUMMARY")
    print("=" * 60)
    print(f"\n  Total Problems: {len(problems)}")
    
    print(f"\n  📈 Difficulty Distribution:")
    for d in ['Easy', 'Medium', 'Hard']:
        count = difficulties.get(d, 0)
        pct = (count / len(problems)) * 100
        bar = "█" * int(pct / 2)
        print(f"    {d:8s}: {count:4d} ({pct:5.1f}%) {bar}")
    
    print(f"\n  📚 Topics ({len(topics)} categories):")
    for topic, count in topics.most_common():
        print(f"    {topic:25s}: {count:4d} problems")
    
    print(f"\n  🏷️  Sub-Topics ({len(sub_topics)} categories):")
    for st, count in sub_topics.most_common(20):
        print(f"    {st:30s}: {count:4d} problems")
    if len(sub_topics) > 20:
        print(f"    ... and {len(sub_topics) - 20} more sub-topics")
    
    print("\n" + "=" * 60)


# ============================================================
# MAIN
# ============================================================
if __name__ == "__main__":
    print("\n🚀 ApexCode DSA Sheet Extractor v2.0")
    print("=" * 60)
    print(f"  Input: {INPUT_FILE}")
    print(f"  Output: {OUTPUT_DIR}")
    print("=" * 60)
    
    # Extract
    print("\n⏳ Parsing HTML...")
    problems = parse_dsa_sheet(INPUT_FILE)
    
    # Generate outputs
    print("\n📦 Generating output files...")
    generate_json(problems, OUTPUT_DIR / "extracted_dsa_data.json")
    generate_postgres_schema(OUTPUT_DIR / "schema.sql")
    generate_seed_sql(problems, OUTPUT_DIR / "seed.sql")
    generate_mongoose_schema(OUTPUT_DIR / "src" / "models" / "DSAProblem.js")
    generate_mongo_seed(problems, OUTPUT_DIR / "seed_mongo.js")
    
    # Summary
    print_summary(problems)
    
    print("\n✅ All done! Files generated successfully.")
    print("   Next steps:")
    print("   1. Review extracted_dsa_data.json for accuracy")
    print("   2. Run: psql -f schema.sql && psql -f seed.sql  (PostgreSQL)")
    print("   3. Run: node seed_mongo.js  (MongoDB/MERN)")
