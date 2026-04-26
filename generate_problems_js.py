#!/usr/bin/env python3
"""
Generate problems.js from extracted_dsa_data.json
WITH intelligent, concept-based descriptions for every problem.
"""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from problem_descriptions import generate_smart_description, KNOWN_PROBLEMS, SUBTOPIC_GENERATORS

INPUT  = r"c:\Users\UseR\Desktop\coding_practice\extracted_dsa_data.json"
OUTPUT = r"c:\Users\UseR\Desktop\coding_practice\src\data\problems.js"

# ============================================================
# 1. KNOWN PROBLEM DESCRIPTIONS (Popular LeetCode / GFG problems)
# ============================================================
# Maps problem title (lowercased) to { description, examples, constraints }

KNOWN_PROBLEMS = {
    "two sum": {
        "desc": "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "examples": [{"input": "nums = [2,7,11,15], target = 9", "output": "[0,1]", "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."}],
        "constraints": ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "Only one valid answer exists."],
    },
    "reverse array": {
        "desc": "Given an array, reverse its elements in-place.\n\nYou need to modify the original array without using extra space (O(1) auxiliary space).",
        "examples": [{"input": "arr = [1, 2, 3, 4, 5]", "output": "[5, 4, 3, 2, 1]"}],
        "constraints": ["1 <= arr.length <= 10^5"],
    },
    "reverse string": {
        "desc": "Write a function that reverses a string. The input string is given as an array of characters `s`.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.",
        "examples": [{"input": 's = ["h","e","l","l","o"]', "output": '["o","l","l","e","h"]'}],
        "constraints": ["1 <= s.length <= 10^5", "s[i] is a printable ASCII character."],
    },
    "palindromic string": {
        "desc": "Given a string `s`, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.\n\nA string is a palindrome if it reads the same forward and backward after removing non-alphanumeric characters.",
        "examples": [{"input": 's = "A man, a plan, a canal: Panama"', "output": "true"}],
        "constraints": ["1 <= s.length <= 2 * 10^5"],
    },
    "valid parentheses": {
        "desc": "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.",
        "examples": [{"input": 's = "()"', "output": "true"}, {"input": 's = "(]"', "output": "false"}],
        "constraints": ["1 <= s.length <= 10^4", "s consists of parentheses only '()[]{}'."],
    },
    "climbing stairs": {
        "desc": "You are climbing a staircase. It takes `n` steps to reach the top.\n\nEach time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?\n\nThis is a classic Dynamic Programming problem that follows the Fibonacci pattern.",
        "examples": [{"input": "n = 2", "output": "2", "explanation": "1+1, 2"}, {"input": "n = 3", "output": "3", "explanation": "1+1+1, 1+2, 2+1"}],
        "constraints": ["1 <= n <= 45"],
    },
    "fibonacci number": {
        "desc": "The Fibonacci numbers form a sequence such that each number is the sum of the two preceding ones, starting from 0 and 1.\n\nGiven `n`, calculate F(n) where F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2) for n > 1.",
        "examples": [{"input": "n = 4", "output": "3", "explanation": "F(4) = F(3) + F(2) = 2 + 1 = 3"}],
        "constraints": ["0 <= n <= 30"],
    },
    "maximum subarray": {
        "desc": "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.\n\nA subarray is a contiguous non-empty sequence of elements within an array. This problem is solved optimally using Kadane's Algorithm.",
        "examples": [{"input": "nums = [-2,1,-3,4,-1,2,1,-5,4]", "output": "6", "explanation": "The subarray [4,-1,2,1] has the largest sum 6."}],
        "constraints": ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    },
    "best time to buy and sell stock": {
        "desc": "You are given an array `prices` where `prices[i]` is the price of a given stock on the i-th day.\n\nYou want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\n\nReturn the maximum profit you can achieve. If you cannot achieve any profit, return 0.",
        "examples": [{"input": "prices = [7,1,5,3,6,4]", "output": "5", "explanation": "Buy on day 2 (price=1) and sell on day 5 (price=6), profit = 6-1 = 5."}],
        "constraints": ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
    },
    "merge sorted array": {
        "desc": "You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.\n\nMerge `nums2` into `nums1` as one sorted array in-place.",
        "examples": [{"input": "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", "output": "[1,2,2,3,5,6]"}],
        "constraints": ["nums1.length == m + n", "nums2.length == n", "0 <= m, n <= 200"],
    },
    "binary search": {
        "desc": "Given a sorted array of integers `nums` and an integer `target`, write a function to search `target` in `nums`. If `target` exists, return its index. Otherwise, return -1.\n\nYou must write an algorithm with O(log n) runtime complexity.",
        "examples": [{"input": "nums = [-1,0,3,5,9,12], target = 9", "output": "4"}],
        "constraints": ["1 <= nums.length <= 10^4", "All elements are unique.", "nums is sorted in ascending order."],
    },
    "sort colors": {
        "desc": "Given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red (0), white (1), and blue (2).\n\nYou must solve this problem without using the library's sort function. This is known as the Dutch National Flag problem.",
        "examples": [{"input": "nums = [2,0,2,1,1,0]", "output": "[0,0,1,1,2,2]"}],
        "constraints": ["n == nums.length", "1 <= n <= 300", "nums[i] is 0, 1, or 2."],
    },
    "majority element - i": {
        "desc": "Given an array `nums` of size `n`, return the majority element. The majority element is the element that appears more than n/2 times.\n\nYou may assume that the majority element always exists in the array. The optimal solution uses Boyer-Moore Voting Algorithm.",
        "examples": [{"input": "nums = [3,2,3]", "output": "3"}],
        "constraints": ["n == nums.length", "1 <= n <= 5 * 10^4"],
    },
    "missing number - i": {
        "desc": "Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.\n\nCan you solve it in O(1) extra space complexity?",
        "examples": [{"input": "nums = [3,0,1]", "output": "2"}],
        "constraints": ["n == nums.length", "0 <= nums[i] <= n", "All the numbers are unique."],
    },
    "move zeroes": {
        "desc": "Given an integer array `nums`, move all 0's to the end of it while maintaining the relative order of the non-zero elements.\n\nNote that you must do this in-place without making a copy of the array.",
        "examples": [{"input": "nums = [0,1,0,3,12]", "output": "[1,3,12,0,0]"}],
        "constraints": ["1 <= nums.length <= 10^4", "-2^31 <= nums[i] <= 2^31 - 1"],
    },
    "subsets": {
        "desc": "Given an integer array `nums` of unique elements, return all possible subsets (the power set).\n\nThe solution set must not contain duplicate subsets. Return the solution in any order.",
        "examples": [{"input": "nums = [1,2,3]", "output": "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"}],
        "constraints": ["1 <= nums.length <= 10", "-10 <= nums[i] <= 10", "All elements are unique."],
    },
    "permutations": {
        "desc": "Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.\n\nA permutation is an arrangement of all elements of a set in a specific order.",
        "examples": [{"input": "nums = [1,2,3]", "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"}],
        "constraints": ["1 <= nums.length <= 6", "-10 <= nums[i] <= 10", "All integers are unique."],
    },
    "n queens - i": {
        "desc": "The N-Queens puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other.\n\nGiven an integer `n`, return all distinct solutions to the N-Queens puzzle. Each solution contains a distinct board configuration.\n\nQueens can attack horizontally, vertically, and diagonally.",
        "examples": [{"input": "n = 4", "output": '[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]'}],
        "constraints": ["1 <= n <= 9"],
    },
    "merge sort": {
        "desc": "Implement Merge Sort — a divide-and-conquer algorithm that splits the array into halves, recursively sorts each half, and merges them back together.\n\nMerge Sort runs in O(n log n) time and is a stable sorting algorithm. It uses O(n) extra space.",
        "examples": [{"input": "arr = [38, 27, 43, 3, 9, 82, 10]", "output": "[3, 9, 10, 27, 38, 43, 82]"}],
        "constraints": ["1 <= arr.length <= 10^5"],
    },
    "quick sort": {
        "desc": "Implement Quick Sort — a divide-and-conquer algorithm that picks a pivot element and partitions the array around the pivot.\n\nElements smaller than the pivot go to the left, and elements greater go to the right. Recursively sort the sub-arrays.\n\nAverage time complexity is O(n log n), worst case is O(n^2).",
        "examples": [{"input": "arr = [10, 80, 30, 90, 40, 50, 70]", "output": "[10, 30, 40, 50, 70, 80, 90]"}],
        "constraints": ["1 <= arr.length <= 10^5"],
    },
    "number of islands": {
        "desc": "Given an `m x n` 2D binary grid `grid` which represents a map of '1's (land) and '0's (water), return the number of islands.\n\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are surrounded by water.\n\nUse BFS or DFS to solve this.",
        "examples": [{"input": 'grid = [["1","1","0"],["1","1","0"],["0","0","1"]]', "output": "2"}],
        "constraints": ["m == grid.length", "n == grid[i].length", "1 <= m, n <= 300"],
    },
    "reverse linked list": {
        "desc": "Given the `head` of a singly linked list, reverse the list, and return the reversed list.\n\nYou can solve this iteratively (using three pointers) or recursively. The iterative approach uses O(1) space.",
        "examples": [{"input": "head = [1,2,3,4,5]", "output": "[5,4,3,2,1]"}],
        "constraints": ["The number of nodes is in the range [0, 5000].", "-5000 <= Node.val <= 5000"],
    },
    "linked list cycle": {
        "desc": "Given `head`, the head of a linked list, determine if the linked list has a cycle in it.\n\nA cycle exists if some node in the list can be reached again by continuously following the `next` pointer. Use Floyd's Cycle Detection (slow and fast pointer) algorithm.",
        "examples": [{"input": "head = [3,2,0,-4], pos = 1", "output": "true", "explanation": "There is a cycle, tail connects to the 1st node (0-indexed)."}],
        "constraints": ["The number of nodes is in [0, 10^4].", "-10^5 <= Node.val <= 10^5"],
    },
    "tower of hanoi": {
        "desc": "The Tower of Hanoi is a classic recursion problem. You have 3 rods and `n` disks of different sizes which can slide onto any rod.\n\nThe puzzle starts with the disks stacked in ascending order of size on one rod. The objective is to move the entire stack to another rod, following these rules:\n1. Only one disk can be moved at a time.\n2. A larger disk cannot be placed on top of a smaller disk.",
        "examples": [{"input": "n = 2", "output": "Move disk 1 from A to B, Move disk 2 from A to C, Move disk 1 from B to C"}],
        "constraints": ["1 <= n <= 16"],
    },
    "trapping rain water": {
        "desc": "Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.\n\nFor each bar, the water trapped is determined by the minimum of the maximum heights on its left and right sides, minus its own height.",
        "examples": [{"input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]", "output": "6"}],
        "constraints": ["n == height.length", "1 <= n <= 2 * 10^4", "0 <= height[i] <= 10^5"],
    },
    "spiral matrix": {
        "desc": "Given an `m x n` matrix, return all elements of the matrix in spiral order.\n\nStart from the top-left corner, move right, then down, then left, then up, and repeat — spiraling inward until all elements are visited.",
        "examples": [{"input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]", "output": "[1,2,3,6,9,8,7,4,5]"}],
        "constraints": ["m == matrix.length", "n == matrix[i].length", "1 <= m, n <= 10"],
    },
    "set matrix zeroes": {
        "desc": "Given an `m x n` integer matrix, if an element is 0, set its entire row and column to 0's.\n\nYou must do it in place. The optimal solution uses O(1) extra space by using the first row and first column as markers.",
        "examples": [{"input": "matrix = [[1,1,1],[1,0,1],[1,1,1]]", "output": "[[1,0,1],[0,0,0],[1,0,1]]"}],
        "constraints": ["m == matrix.length", "n == matrix[0].length", "1 <= m, n <= 200"],
    },
    "product of array except self": {
        "desc": "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.\n\nYou must solve it in O(n) time without using the division operation.",
        "examples": [{"input": "nums = [1,2,3,4]", "output": "[24,12,8,6]"}],
        "constraints": ["2 <= nums.length <= 10^5", "The product of any prefix or suffix of nums fits in a 32-bit integer."],
    },
    "rotate image": {
        "desc": "You are given an `n x n` 2D `matrix` representing an image. Rotate the image by 90 degrees clockwise.\n\nYou have to rotate the image in-place. The trick is to first transpose the matrix, then reverse each row.",
        "examples": [{"input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]", "output": "[[7,4,1],[8,5,2],[9,6,3]]"}],
        "constraints": ["n == matrix.length == matrix[i].length", "1 <= n <= 20"],
    },
    "search in rotated sorted array - i": {
        "desc": "There is an integer array `nums` sorted in ascending order (with distinct values). Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index.\n\nGiven `target`, return its index if it is in `nums`, or -1 if not. You must write an algorithm with O(log n) runtime using modified binary search.",
        "examples": [{"input": "nums = [4,5,6,7,0,1,2], target = 0", "output": "4"}],
        "constraints": ["1 <= nums.length <= 5000", "All values are unique."],
    },
    "valid sudoku": {
        "desc": "Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:\n\n1. Each row must contain the digits 1-9 without repetition.\n2. Each column must contain the digits 1-9 without repetition.\n3. Each of the nine 3x3 sub-boxes must contain the digits 1-9 without repetition.",
        "examples": [{"input": "board = (9x9 grid)", "output": "true/false"}],
        "constraints": ["board.length == 9", "board[i].length == 9", "board[i][j] is a digit 1-9 or '.'."],
    },
    "sudoku solver": {
        "desc": "Write a program to solve a Sudoku puzzle by filling the empty cells. A sudoku solution must satisfy all the rules of Sudoku.\n\nUse backtracking: try placing digits 1-9 in each empty cell, validate, and backtrack if no valid digit can be placed.",
        "examples": [{"input": "Partially filled 9x9 board", "output": "Completed valid Sudoku board"}],
        "constraints": ["The given board has exactly one solution.", "board.length == 9"],
    },
    "generate parentheses": {
        "desc": "Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.\n\nUse backtracking with two counters (open and close) to build valid combinations. At any point, the number of close parentheses used must not exceed open ones.",
        "examples": [{"input": "n = 3", "output": '["((()))","(()())","(())()","()(())","()()()"]'}],
        "constraints": ["1 <= n <= 8"],
    },
    "word search": {
        "desc": "Given an `m x n` grid of characters `board` and a string `word`, return true if word exists in the grid.\n\nThe word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
        "examples": [{"input": 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', "output": "true"}],
        "constraints": ["m == board.length", "n == board[i].length", "1 <= word.length <= 15"],
    },
    "count primes": {
        "desc": "Given an integer `n`, return the number of prime numbers that are strictly less than `n`.\n\nUse the Sieve of Eratosthenes algorithm for an efficient O(n log log n) solution. Mark multiples of each prime as non-prime starting from 2.",
        "examples": [{"input": "n = 10", "output": "4", "explanation": "Primes less than 10: 2, 3, 5, 7"}],
        "constraints": ["0 <= n <= 5 * 10^6"],
    },
    "fizz buzz": {
        "desc": "Given an integer `n`, return a string array where:\n- answer[i] == 'FizzBuzz' if i is divisible by 3 and 5\n- answer[i] == 'Fizz' if i is divisible by 3\n- answer[i] == 'Buzz' if i is divisible by 5\n- answer[i] == i (as a string) if none of the above conditions are true",
        "examples": [{"input": "n = 5", "output": '["1","2","Fizz","4","Buzz"]'}],
        "constraints": ["1 <= n <= 10^4"],
    },
    "reverse integer": {
        "desc": "Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.\n\nAssume the environment does not allow you to store 64-bit integers.",
        "examples": [{"input": "x = 123", "output": "321"}, {"input": "x = -123", "output": "-321"}],
        "constraints": ["-2^31 <= x <= 2^31 - 1"],
    },
    "string to integer": {
        "desc": "Implement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer.\n\nThe algorithm:\n1. Read and ignore leading whitespace\n2. Check the next character for '+' or '-' sign\n3. Read digits until a non-digit character or end of string\n4. Clamp the integer to the 32-bit signed integer range",
        "examples": [{"input": 's = "42"', "output": "42"}, {"input": 's = "   -042"', "output": "-42"}],
        "constraints": ["0 <= s.length <= 200"],
    },
    "is subsequence": {
        "desc": "Given two strings `s` and `t`, return true if `s` is a subsequence of `t`, or false otherwise.\n\nA subsequence is a new string formed from the original string by deleting some (can be none) characters without disturbing the relative positions of the remaining characters.",
        "examples": [{"input": 's = \"ace\", t = \"abcde\"', "output": "true"}, {"input": 's = \"aec\", t = \"abcde\"', "output": "false"}],
        "constraints": ["0 <= s.length <= 100", "0 <= t.length <= 10^4"],
    },
    "valid anagram": {
        "desc": "Given two strings `s` and `t`, return true if `t` is an anagram of `s`, and false otherwise.\n\nAn anagram is a word formed by rearranging the letters of a different word, typically using all the original letters exactly once. Use a frequency counter approach.",
        "examples": [{"input": 's = \"anagram\", t = \"nagaram\"', "output": "true"}],
        "constraints": ["1 <= s.length, t.length <= 5 * 10^4", "s and t consist of lowercase English letters."],
    },
    "group anagrams": {
        "desc": "Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.\n\nAn anagram is a word formed by rearranging the letters. Use sorting or character frequency as keys in a hash map.",
        "examples": [{"input": 'strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]', "output": '[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]'}],
        "constraints": ["1 <= strs.length <= 10^4", "0 <= strs[i].length <= 100"],
    },
    "book allocation": {
        "desc": "Given `n` books with `arr[i]` pages and `m` students, allocate books such that:\n1. Each student gets at least one book.\n2. Books are allocated contiguously.\n3. The maximum number of pages assigned to a student is minimized.\n\nUse Binary Search on Answer to find the optimal allocation.",
        "examples": [{"input": "arr = [12, 34, 67, 90], m = 2", "output": "113"}],
        "constraints": ["1 <= n <= 10^5", "1 <= arr[i] <= 10^6"],
    },
    "rat in maze": {
        "desc": "Consider a rat placed at position (0, 0) in an N x N matrix. The rat has to reach the destination at (N-1, N-1).\n\nFind all possible paths the rat can take to reach from source to destination. The rat can move in all four directions (up, down, left, right). A value of 0 means the cell is blocked.",
        "examples": [{"input": "matrix = [[1,0,0,0],[1,1,0,1],[1,1,0,0],[0,1,1,1]]", "output": "DDRDRR DRDDRR"}],
        "constraints": ["2 <= N <= 5", "0 <= matrix[i][j] <= 1"],
    },
}


# ============================================================
# 2. TOPIC-BASED DESCRIPTION TEMPLATES
# ============================================================
# When a problem isn't in KNOWN_PROBLEMS, generate from topic context

TOPIC_DESCRIPTIONS = {
    "Fundamentals": "This is a foundational programming concept. Master the basics of {sub_topic} to build a strong base for advanced DSA topics.\n\nUnderstanding fundamentals is crucial — every complex algorithm builds upon these core concepts.",
    "Mathematics": "This is a mathematical problem involving {sub_topic}. Apply mathematical reasoning and number theory concepts to arrive at an efficient solution.\n\nMathematical thinking helps optimize brute-force approaches into elegant algorithms.",
    "Arrays": "This is an array-based problem from the {sub_topic} category. Work with array manipulation, traversal patterns, and in-place operations.\n\nArrays are the most fundamental data structure — mastering array techniques is essential for coding interviews.",
    "Strings": "This is a string manipulation problem from the {sub_topic} category. Apply string processing techniques, pattern matching, or character frequency analysis.\n\nString problems test your ability to work with text data efficiently.",
    "Sorting": "This problem involves sorting concepts from {sub_topic}. Understand different sorting algorithms, their time/space complexities, and when to use each.\n\nSorting is a building block for many advanced algorithms like binary search and merge operations.",
    "Searching": "This is a searching problem from {sub_topic}. Apply efficient search techniques like binary search and its variations to find elements or answer range queries.\n\nSearching algorithms are critical for optimizing from O(n) to O(log n) solutions.",
    "Hashing": "This problem uses hash-based techniques from {sub_topic}. Use hash maps/sets for O(1) lookups to optimize brute-force solutions.\n\nHashing is the go-to technique for reducing time complexity in problems involving lookups, counting, and pairing.",
    "Recursion": "This is a recursion problem from {sub_topic}. Break the problem into smaller subproblems that follow the same pattern.\n\nThink about: base case, recursive case, and how subproblem solutions combine to form the final answer.",
    "Backtracking": "This is a backtracking problem from {sub_topic}. Explore all possible solutions by making choices, and undo (backtrack) when a choice leads to an invalid state.\n\nBacktracking is essential for constraint satisfaction problems like N-Queens, Sudoku, and path finding.",
    "Linked List": "This is a linked list problem from {sub_topic}. Work with node-based data structures where elements are connected via pointers.\n\nKey techniques: two pointers (slow/fast), dummy heads, in-place reversal, and cycle detection.",
    "Stack & Queue": "This problem involves stack or queue data structures from {sub_topic}. Use LIFO (stack) or FIFO (queue) properties to solve ordering and matching problems.\n\nMonotonic stacks and deques are powerful tools for problems involving next greater/smaller elements.",
    "Heap": "This is a heap/priority queue problem from {sub_topic}. Use min-heap or max-heap to efficiently track minimum/maximum elements.\n\nHeaps are ideal for problems involving top-K elements, scheduling, and stream processing.",
    "Trees": "This is a tree problem from {sub_topic}. Work with hierarchical data structures using traversal techniques (inorder, preorder, postorder, level-order).\n\nTree problems test recursive thinking and understanding of parent-child relationships.",
    "BST": "This is a Binary Search Tree problem from {sub_topic}. Leverage the BST property (left < root < right) for efficient searching, insertion, and deletion.\n\nBST operations run in O(h) time where h is the height of the tree.",
    "Dynamic Programming": "This is a Dynamic Programming problem from {sub_topic}. Identify overlapping subproblems and optimal substructure to avoid redundant computation.\n\nApproach: Define state, write recurrence relation, and optimize with memoization or tabulation.",
    "Bit Manipulation": "This is a bit manipulation problem from {sub_topic}. Use bitwise operators (AND, OR, XOR, shifts) to solve problems efficiently at the bit level.\n\nBit manipulation can reduce space complexity to O(1) and provide elegant constant-time solutions.",
    "Graphs": "This is a graph problem from {sub_topic}. Model relationships between entities and apply graph traversal algorithms.\n\nKey techniques: BFS, DFS, Union-Find, Dijkstra, Bellman-Ford, Topological Sort, and Minimum Spanning Trees.",
    "Trie": "This is a Trie (prefix tree) problem from {sub_topic}. Use trie data structures for efficient prefix-based operations on strings.\n\nTries excel at autocomplete, spell checking, and problems involving common prefixes among strings.",
    "Greedy": "This is a greedy algorithm problem from {sub_topic}. Make the locally optimal choice at each step, hoping to find the global optimum.\n\nGreedy works when the problem has the greedy-choice property and optimal substructure.",
    "Advanced": "This is an advanced topic from {sub_topic}. These problems require knowledge of specialized data structures and algorithms used in competitive programming.\n\nMastering advanced topics separates good programmers from great ones.",
    "System Design": "This covers system design concepts from {sub_topic}. Understand how to design scalable, maintainable, and efficient systems.\n\nSystem design knowledge is crucial for senior engineering roles and building production-ready applications.",
    "General": "This problem covers a general programming concept from {sub_topic}. Apply fundamental problem-solving skills and algorithmic thinking.\n\nThink about the most appropriate data structure and algorithm for the given constraints.",
}

# ============================================================
# 3. TITLE-BASED KEYWORD DESCRIPTIONS
# ============================================================
# Generate descriptions from keywords found in the problem title

TITLE_KEYWORDS = {
    "reverse": "Reverse the given data structure. Think about two-pointer approach (swap from ends toward center) for in-place reversal, or use a stack for non-in-place reversal.",
    "sort": "Sort the given elements using an appropriate sorting technique. Consider the constraints to choose between comparison-based (O(n log n)) and non-comparison-based (O(n)) sorting.",
    "search": "Search for a target element or condition. For sorted data, use binary search (O(log n)). For unsorted data, consider hashing (O(1) average) or linear scan (O(n)).",
    "palindrome": "Check if the given string/number reads the same forwards and backwards. Use two pointers from both ends, or compare with the reversed version.",
    "anagram": "Determine if strings are anagrams (contain the same characters with the same frequencies). Use a frequency counter (hash map or array of size 26).",
    "fibonacci": "Compute Fibonacci numbers. Naive recursion is O(2^n), memoization is O(n), and matrix exponentiation is O(log n).",
    "factorial": "Compute factorial of a number. Watch for integer overflow with large numbers. Consider modular arithmetic for competitive programming.",
    "prime": "Work with prime numbers. Use Sieve of Eratosthenes for generating primes up to N. For primality testing, check divisibility up to sqrt(n).",
    "matrix": "Work with 2D arrays (matrices). Common operations include traversal (spiral, diagonal, wave), rotation, transposition, and searching.",
    "traversal": "Traverse a data structure visiting each element in a specific order. For trees: inorder, preorder, postorder, level-order. For graphs: BFS, DFS.",
    "sum": "Find elements that add up to a target sum. Consider sorting + two pointers, or hash maps for O(n) solutions.",
    "maximum": "Find the maximum value satisfying certain conditions. Consider sliding window, dynamic programming, or greedy approaches based on constraints.",
    "minimum": "Find the minimum value satisfying certain conditions. Consider binary search on answer, BFS for shortest path, or greedy approaches.",
    "subarray": "Work with contiguous subarrays. Key techniques: sliding window, prefix sums, Kadane's algorithm, and hash map for sum-based problems.",
    "substring": "Work with contiguous substrings. Apply sliding window technique for fixed/variable length windows, or dynamic programming for optimization.",
    "subsequence": "Work with subsequences (non-contiguous elements maintaining relative order). Use DP for LIS, LCS, or recursion for generating all subsequences.",
    "tree": "Work with tree data structures. Apply recursive traversal, level-order BFS, or iterative approaches using stacks.",
    "graph": "Model and solve problems using graph theory. Choose BFS for shortest unweighted path, DFS for connectivity, or specialized algorithms for weighted graphs.",
    "linked list": "Manipulate linked list nodes. Use dummy heads to simplify edge cases, two pointers for cycle detection, and careful pointer management for in-place operations.",
    "stack": "Use stack (LIFO) for problems involving matching, nesting, or maintaining a monotonic sequence. Stacks are ideal for expression evaluation and bracket matching.",
    "queue": "Use queue (FIFO) for BFS traversal, task scheduling, or problems requiring first-come-first-served processing.",
    "heap": "Use heap (priority queue) for efficiently tracking min/max elements. Ideal for top-K problems, merge K sorted lists, and scheduling.",
    "dp": "Dynamic Programming problem. Identify states, write the recurrence relation, and optimize with memoization (top-down) or tabulation (bottom-up).",
    "knapsack": "Classic DP problem: given items with weights and values, maximize value within a weight capacity. Variants include 0/1, unbounded, and fractional knapsack.",
    "backtrack": "Use backtracking to explore all possibilities. Make a choice, recurse, and undo the choice if it doesn't lead to a valid solution.",
    "binary search": "Apply binary search on a sorted/monotonic search space. Classic binary search runs in O(log n). Binary search on answer is a powerful technique for optimization problems.",
    "sliding window": "Use the sliding window technique to efficiently process subarrays/substrings of a given size or satisfying certain conditions.",
    "two pointer": "Use two pointers (from both ends or same direction) to reduce O(n^2) brute force to O(n) for sorted arrays or specific patterns.",
    "prefix": "Use prefix sums/products for efficient range queries. Precompute cumulative values to answer subarray sum queries in O(1).",
    "bfs": "Use Breadth-First Search for shortest path in unweighted graphs, level-order traversal, or exploring states level by level.",
    "dfs": "Use Depth-First Search for exploring all paths, detecting cycles, topological sorting, or finding connected components.",
    "cycle": "Detect cycles in graphs or linked lists. Use Floyd's algorithm (slow/fast pointers) for linked lists, or color-based DFS for graphs.",
    "trie": "Use Trie (prefix tree) for efficient string operations. Insert and search operations run in O(L) where L is the string length.",
    "segment tree": "Use Segment Tree for range queries and point updates in O(log n) time. Useful for range sum, range min/max queries with updates.",
    "bit": "Use bitwise operations for efficient computation. XOR for finding unique elements, bit masks for subset representation, and bit shifts for multiplication/division by 2.",
    "greedy": "Apply greedy strategy — make the locally optimal choice at each step. Prove the greedy choice property before applying.",
    "disjoint": "Use Disjoint Set Union (Union-Find) for grouping elements and checking connectivity. Apply path compression and union by rank for near O(1) operations.",
    "topological": "Use Topological Sort for directed acyclic graphs (DAGs). Apply Kahn's algorithm (BFS) or DFS-based approach for ordering tasks with dependencies.",
    "dijkstra": "Apply Dijkstra's algorithm for finding shortest paths in weighted graphs with non-negative edges. Uses a priority queue for O((V+E) log V) complexity.",
    "rotate": "Rotate an array or matrix by a given amount. For arrays, use the reversal trick. For matrices, combine transpose with row/column reversal.",
    "partition": "Partition elements around a pivot or into groups. The Dutch National Flag algorithm partitions into 3 groups in O(n) time.",
    "merge": "Merge sorted sequences efficiently. The merge operation is the key step in merge sort and is used in many divide-and-conquer algorithms.",
    "pattern": "Print or detect patterns. Pattern printing builds loop logic skills. Pattern matching algorithms include KMP, Rabin-Karp, and Z-algorithm.",
    "design": "Design a data structure or system with specific operations. Focus on choosing the right underlying data structures for optimal time complexity.",
    "coin change": "Classic DP problem: find the minimum coins needed to make a target amount, or count the number of ways to make change. Variants include bounded and unbounded.",
    "expression": "Parse or evaluate mathematical expressions. Use stacks for infix-to-postfix conversion and expression evaluation.",
    "interval": "Work with intervals (start, end pairs). Common operations: merge overlapping intervals, find non-overlapping intervals, and interval scheduling.",
    "path": "Find paths in grids, trees, or graphs. Use BFS for shortest path, DFS for all paths, and DP for counting paths.",
    "decode": "Decode encoded strings or messages. Use recursion or DP to explore all possible decodings.",
    "combination": "Generate all combinations of elements. Use recursion with inclusion/exclusion choices. nCr combinations from n elements taken r at a time.",
    "permutation": "Generate all permutations of elements. Use recursion with swapping or backtracking. n! permutations exist for n distinct elements.",
}


# ============================================================
# 4. THEORY/TUTORIAL DESCRIPTION LOGIC
# ============================================================

THEORY_PLATFORMS = set()  # Disabled — all content is self-contained in ApexCode


def is_theory_link(platform, title_lower):
    """Check if this is a theory/tutorial link rather than a practice problem."""
    if platform in THEORY_PLATFORMS:
        return True
    theory_kw = ["theory", "article", "tutorial", "playlist", "basics", "introduction",
                 "explanation", "concept", "practice problems", "programming basics"]
    return any(kw in title_lower for kw in theory_kw)


def generate_theory_desc(title, topic, sub_topic, platform):
    """Generate a learning-oriented description for theory/tutorial links."""
    return (
        f"📚 Learning Resource: {title}\n\n"
        f"This is a learning resource covering {sub_topic} under the {topic} category. "
        f"Study this material on {platform} to understand the underlying concepts and theory.\n\n"
        f"Key Topics Covered:\n"
        f"• Core concepts of {sub_topic}\n"
        f"• Implementation techniques and patterns\n"
        f"• Time and space complexity analysis\n"
        f"• Common interview questions and approaches\n\n"
        f"Tip: Understand the theory first, then practice the related coding problems to solidify your knowledge."
    )


# ============================================================
# 5. SMART DESCRIPTION GENERATOR
# ============================================================

def generate_description(title, topic, sub_topic, platform, difficulty):
    """
    Generate a meaningful problem description using multiple strategies:
    1. Check KNOWN_PROBLEMS for exact or fuzzy match
    2. Check if it's a theory/tutorial link
    3. Use title keywords to build a relevant description
    4. Fall back to topic-based template
    """
    title_lower = title.lower().strip()

    # Strategy 1: Exact match in KNOWN_PROBLEMS
    if title_lower in KNOWN_PROBLEMS:
        kp = KNOWN_PROBLEMS[title_lower]
        return kp["desc"], kp.get("examples", []), kp.get("constraints", [])

    # Strategy 1b: Fuzzy match — strip trailing numbers like "- I", "- II"
    clean_title = re.sub(r'\s*[-–]\s*(i+|[ivx]+|[0-9]+)\s*$', '', title_lower, flags=re.IGNORECASE).strip()
    if clean_title in KNOWN_PROBLEMS:
        kp = KNOWN_PROBLEMS[clean_title]
        return kp["desc"], kp.get("examples", []), kp.get("constraints", [])

    # Strategy 2: Theory/tutorial links
    if is_theory_link(platform, title_lower):
        desc = generate_theory_desc(title, topic, sub_topic, "ApexCode")
        return desc, [], [f"Study this resource on ApexCode to build your understanding."]

    # Strategy 3: Build description from title keywords
    keyword_descs = []
    for kw, kw_desc in TITLE_KEYWORDS.items():
        if kw in title_lower or kw in sub_topic.lower():
            keyword_descs.append(kw_desc)

    # Strategy 4: Topic-based template
    topic_template = TOPIC_DESCRIPTIONS.get(topic, TOPIC_DESCRIPTIONS["General"])
    base_desc = topic_template.format(sub_topic=sub_topic)

    # Combine
    if keyword_descs:
        # Use the most relevant keyword description + topic context
        problem_hint = keyword_descs[0]
        desc = (
            f"{title}\n\n"
            f"💡 Concept: {problem_hint}\n\n"
            f"{base_desc}\n\n"
            f"Difficulty: {difficulty} | Topic: {topic} > {sub_topic}"
        )
    else:
        desc = (
            f"{title}\n\n"
            f"{base_desc}\n\n"
            f"Difficulty: {difficulty} | Topic: {topic} > {sub_topic}"
        )

    examples = [{"input": "Refer to the problem description above", "output": "Solve and verify your solution"}]
    constraints = [f"Check the problem description for exact constraints", f"Difficulty Level: {difficulty}"]

    return desc, examples, constraints


# ============================================================
# 6. PLATFORM DETECTION
# ============================================================

def detect_platform(url):
    url_lower = url.lower()
    platforms = [
        ("leetcode.com", "LeetCode"),
        ("geeksforgeeks.org", "GeeksforGeeks"),
        ("practice.geeksforgeeks", "GeeksforGeeks"),
        ("codingninjas.com", "Coding Ninjas"),
        ("interviewbit.com", "InterviewBit"),
        ("hackerrank.com", "HackerRank"),
        ("codeforces.com", "Codeforces"),
        ("spoj.com", "SPOJ"),
        ("pepcoding.com", "Pepcoding"),
        ("codechef.com", "CodeChef"),
        ("youtube.com", "YouTube"),
        ("github.com", "GitHub"),
        ("scaler.com", "Scaler"),
        ("programiz.com", "Programiz"),
        ("cses.fi", "CSES"),
        ("cp-algorithms", "CP-Algorithms"),
        ("takeuforward.org", "TakeUForward"),
        ("javatpoint.com", "JavaTPoint"),
        ("techiedelight.com", "TechieDelight"),
    ]
    for domain, name in platforms:
        if domain in url_lower:
            return name
    return "Practice"


# ============================================================
# 7. JS STRING ESCAPING
# ============================================================

def esc(s: str) -> str:
    """Escape for JS double-quoted string."""
    return (s
        .replace("\\", "\\\\")
        .replace('"', '\\"')
        .replace("\n", "\\n")
        .replace("\r", "")
        .replace("`", "\\`")
        .replace("${", "\\${"))


# ============================================================
# 8. MAIN GENERATOR
# ============================================================

def main():
    with open(INPUT, "r", encoding="utf-8") as f:
        data = json.load(f)

    print(f"Loaded {len(data)} problems from JSON")

    all_categories = sorted(set(p["topic"] for p in data))

    lines = []
    lines.append("// Auto-generated from DSA SHEET.html — DO NOT EDIT MANUALLY")
    lines.append(f"// Total Problems: {len(data)}")
    lines.append(f"// Generated by generate_problems_js.py (with smart descriptions)")
    lines.append("")
    lines.append("export const problems = [")

    known_hit = 0
    theory_hit = 0
    keyword_hit = 0

    for i, p in enumerate(data):
        pid = i + 1
        title = p["title"]
        difficulty = p["difficulty"]
        category = p["topic"]
        sub_topic = p["sub_topic"]
        link = ""  # External links removed — self-contained platform
        platform = "ApexCode"

        desc, examples, constraints = generate_smart_description(title, category, sub_topic, difficulty)

        # Track stats
        title_lc = title.lower().strip()
        clean = re.sub(r'\s*[-–]\s*(i+|[ivx]+|[0-9]+)\s*$', '', title_lc, flags=re.IGNORECASE).strip()
        if title_lc in KNOWN_PROBLEMS or clean in KNOWN_PROBLEMS:
            known_hit += 1
        elif sub_topic in SUBTOPIC_GENERATORS:
            theory_hit += 1  # subtopic-template hit
        else:
            keyword_hit += 1

        # Format examples
        examples_str_parts = []
        for ex in examples:
            parts = [f'input:"{esc(ex.get("input",""))}"', f'output:"{esc(ex.get("output",""))}"']
            if "explanation" in ex and ex["explanation"]:
                parts.append(f'explanation:"{esc(ex["explanation"])}"')
            examples_str_parts.append("{" + ",".join(parts) + "}")
        examples_str = "[" + ",".join(examples_str_parts) + "]" if examples_str_parts else '[{input:"See platform",output:"See platform"}]'

        # Format constraints
        constraints_parts = [f'"{esc(c)}"' for c in constraints] if constraints else [f'"Check original problem"']
        constraints_str = "[" + ",".join(constraints_parts) + "]"

        # Boilerplates
        bp_title = esc(title)
        bp_platform = esc(platform)

        lines.append(f'  {{ id:{pid}, title:"{esc(title)}", difficulty:"{difficulty}", category:"{category}", subTopic:"{esc(sub_topic)}",')
        lines.append(f'    description:"{esc(desc)}",')
        lines.append(f'    examples:{examples_str},')
        lines.append(f'    constraints:{constraints_str},')
        lines.append(f'    boilerplates:{{python:"# {bp_title}\\n# ApexCode DSA Platform\\n\\ndef solution():\\n    # Write your solution here\\n    pass\\n",')
        lines.append(f'      cpp:"// {bp_title}\\n// ApexCode DSA Platform\\n\\nclass Solution {{\\npublic:\\n    void solve() {{\\n        \\n    }}\\n}};",')
        lines.append(f'      java:"// {bp_title}\\n// ApexCode DSA Platform\\n\\nclass Solution {{\\n    public void solve() {{\\n        \\n    }}\\n}}",')
        lines.append(f'      javascript:"// {bp_title}\\n// ApexCode DSA Platform\\n\\nvar solution = function() {{\\n    \\n}};"}}}},')

    lines.append("];")
    lines.append("")

    # DSA Roadmap
    lines.append("// DSA Roadmap — Auto-generated from topic hierarchy")
    lines.append("export const dsaRoadmap = [")
    topic_groups = {}
    for i, p in enumerate(data):
        topic = p["topic"]
        pid = i + 1
        if topic not in topic_groups:
            topic_groups[topic] = []
        topic_groups[topic].append(pid)

    for topic in all_categories:
        if topic in topic_groups:
            ids = topic_groups[topic]
            ids_str = ", ".join(str(x) for x in ids)
            lines.append(f'  {{ name: "{topic}", total: {len(ids)}, problemIds: [{ids_str}] }},')

    lines.append("];")
    lines.append("")

    cats_str = ', '.join(f'"{c}"' for c in all_categories)
    lines.append(f'export const categories = ["All", {cats_str}];')
    lines.append("")
    lines.append('export const difficulties = ["All", "Easy", "Medium", "Hard"];')
    lines.append("")

    content = "\n".join(lines)
    with open(OUTPUT, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Generated {OUTPUT}")
    print(f"  Total: {len(data)} problems")
    print(f"  Known descriptions (hand-written): {known_hit}")
    print(f"  Subtopic-template descriptions: {theory_hit}")
    print(f"  Keyword-generated descriptions: {keyword_hit}")
    print(f"  Categories: {len(all_categories)}")

if __name__ == "__main__":
    main()
