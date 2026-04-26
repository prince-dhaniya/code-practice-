#!/usr/bin/env python3
"""
Comprehensive problem description database for ApexCode.
Provides rich, problem-specific descriptions and real examples for 1854+ DSA problems.
"""
import re

# ============================================================
# 1. KNOWN PROBLEM DESCRIPTIONS (Popular DSA problems)
# ============================================================

KNOWN_PROBLEMS = {
    # ---- FUNDAMENTALS ----
    "hello world - i": {
        "desc": "Write a program that prints 'Hello World' to the console.\n\nThis is the classic first program every developer writes. It teaches you the basic syntax of output statements in your chosen programming language.",
        "examples": [{"input": "No input required", "output": "Hello World"}],
        "constraints": ["Output must be exactly 'Hello World'"],
    },
    "hello world - ii": {
        "desc": "Write a program that prints 'Hello World' on two separate lines.\n\nLearn how to use newline characters or multiple print statements to format output across multiple lines.",
        "examples": [{"input": "No input required", "output": "Hello\\nWorld"}],
        "constraints": ["Each word should be on a separate line"],
    },
    "check vowel": {
        "desc": "Given a character, determine whether it is a vowel or a consonant.\n\nVowels are: a, e, i, o, u (both uppercase and lowercase). All other alphabetic characters are consonants.",
        "examples": [{"input": "ch = 'a'", "output": "Vowel"}, {"input": "ch = 'b'", "output": "Consonant"}],
        "constraints": ["Input is a single alphabetic character"],
    },
    "check even odd": {
        "desc": "Given an integer n, determine whether it is even or odd.\n\nAn even number is divisible by 2 (n % 2 == 0). An odd number has a remainder of 1 when divided by 2.",
        "examples": [{"input": "n = 4", "output": "Even"}, {"input": "n = 7", "output": "Odd"}],
        "constraints": ["-10^9 <= n <= 10^9"],
    },
    "concatenate strings": {
        "desc": "Given two strings s1 and s2, concatenate them and return the resulting string.\n\nString concatenation joins two strings end-to-end to create a new string.",
        "examples": [{"input": "s1 = 'Hello', s2 = ' World'", "output": "'Hello World'"}],
        "constraints": ["1 <= s1.length, s2.length <= 1000"],
    },
    "change case of string": {
        "desc": "Given a string, convert all uppercase letters to lowercase and all lowercase letters to uppercase.\n\nSwap the case of each character in the string.",
        "examples": [{"input": "s = 'Hello World'", "output": "'hELLO wORLD'"}],
        "constraints": ["1 <= s.length <= 1000"],
    },
    "print increasing": {
        "desc": "Given a number n, print all numbers from 1 to n in increasing order.\n\nUse a loop or recursion to generate the sequence.",
        "examples": [{"input": "n = 5", "output": "1 2 3 4 5"}],
        "constraints": ["1 <= n <= 10^5"],
    },
    "print decreasing": {
        "desc": "Given a number n, print all numbers from n down to 1 in decreasing order.\n\nUse a loop or recursion to generate the reverse sequence.",
        "examples": [{"input": "n = 5", "output": "5 4 3 2 1"}],
        "constraints": ["1 <= n <= 10^5"],
    },
    "sum of series": {
        "desc": "Given a number n, find the sum of the series 1 + 2 + 3 + ... + n.\n\nYou can use a loop or the mathematical formula: sum = n * (n + 1) / 2.",
        "examples": [{"input": "n = 5", "output": "15", "explanation": "1+2+3+4+5 = 15"}, {"input": "n = 10", "output": "55"}],
        "constraints": ["1 <= n <= 10^6"],
    },
    "sum of ap series": {
        "desc": "Given the first term a, common difference d, and number of terms n of an Arithmetic Progression, find the sum of the AP series.\n\nFormula: Sum = n/2 * (2a + (n-1)*d)",
        "examples": [{"input": "a = 1, d = 2, n = 5", "output": "25", "explanation": "Series: 1,3,5,7,9. Sum = 25"}],
        "constraints": ["1 <= n <= 10^6"],
    },
    "sum of gp series": {
        "desc": "Given the first term a, common ratio r, and number of terms n of a Geometric Progression, find the sum of the GP series.\n\nFormula: Sum = a * (r^n - 1) / (r - 1) when r != 1",
        "examples": [{"input": "a = 1, r = 2, n = 5", "output": "31", "explanation": "Series: 1,2,4,8,16. Sum = 31"}],
        "constraints": ["1 <= n <= 30"],
    },
    "factorial problem": {
        "desc": "Given a non-negative integer n, compute n! (n factorial).\n\nn! = n × (n-1) × (n-2) × ... × 2 × 1, with 0! = 1.\n\nWatch for integer overflow with large values of n. Consider using modular arithmetic (mod 10^9+7) for competitive programming.",
        "examples": [{"input": "n = 5", "output": "120", "explanation": "5! = 5×4×3×2×1 = 120"}, {"input": "n = 0", "output": "1"}],
        "constraints": ["0 <= n <= 20 (without mod)", "0 <= n <= 10^5 (with mod 10^9+7)"],
    },
    "power function": {
        "desc": "Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).\n\nUse the fast exponentiation (binary exponentiation) technique to achieve O(log n) time complexity instead of O(n).\n\nHandle negative exponents by computing 1/x^(-n). Be careful with edge cases like n = Integer.MIN_VALUE.",
        "examples": [{"input": "x = 2.0, n = 10", "output": "1024.0"}, {"input": "x = 2.0, n = -2", "output": "0.25"}],
        "constraints": ["-100.0 < x < 100.0", "-2^31 <= n <= 2^31 - 1"],
    },
    "check power of 2": {
        "desc": "Given an integer n, determine if it is a power of two.\n\nA number is a power of two if there exists an integer x such that n == 2^x.\n\nOptimal approach: Use the bit trick n & (n-1) == 0 for positive n. A power of 2 has exactly one bit set in binary.",
        "examples": [{"input": "n = 16", "output": "true", "explanation": "16 = 2^4"}, {"input": "n = 6", "output": "false"}],
        "constraints": ["-2^31 <= n <= 2^31 - 1"],
    },
    "nth fibonacci": {
        "desc": "The Fibonacci numbers form a sequence such that each number is the sum of the two preceding ones, starting from 0 and 1.\n\nGiven n, calculate F(n) where F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2) for n > 1.\n\nNaive recursion is O(2^n). Use dynamic programming (tabulation or memoization) for O(n) time.",
        "examples": [{"input": "n = 4", "output": "3", "explanation": "F(4) = F(3) + F(2) = 2 + 1 = 3"}, {"input": "n = 6", "output": "8"}],
        "constraints": ["0 <= n <= 30"],
    },
    "nth tribonacci": {
        "desc": "The Tribonacci sequence is defined as: T(0) = 0, T(1) = 1, T(2) = 1, and T(n) = T(n-1) + T(n-2) + T(n-3) for n >= 3.\n\nGiven n, return the value of T(n). Use three variables to track the last three values for O(1) space.",
        "examples": [{"input": "n = 4", "output": "4", "explanation": "T(4) = T(3)+T(2)+T(1) = 2+1+1 = 4"}, {"input": "n = 25", "output": "1389537"}],
        "constraints": ["0 <= n <= 37"],
    },
    "print a to z": {
        "desc": "Print all 26 letters of the English alphabet from 'A' to 'Z' using a loop.\n\nIterate through ASCII values or character ranges to print each letter.",
        "examples": [{"input": "No input", "output": "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"}],
        "constraints": ["Print all 26 uppercase letters"],
    },
    "fizz buzz": {
        "desc": "Given an integer n, return a string array where:\n- answer[i] == 'FizzBuzz' if i is divisible by both 3 and 5\n- answer[i] == 'Fizz' if i is divisible by 3\n- answer[i] == 'Buzz' if i is divisible by 5\n- answer[i] == i (as a string) if none of the above conditions are true\n\nIterate from 1 to n and apply the divisibility rules in order.",
        "examples": [{"input": "n = 5", "output": '[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\"]'}, {"input": "n = 15", "output": '[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\",\"Fizz\",\"7\",\"8\",\"Fizz\",\"Buzz\",\"11\",\"Fizz\",\"13\",\"14\",\"FizzBuzz\"]'}],
        "constraints": ["1 <= n <= 10^4"],
    },
    "count digits of number": {
        "desc": "Given a positive integer n, count the number of digits in n.\n\nApproach 1: Repeatedly divide by 10 and count iterations.\nApproach 2: Use floor(log10(n)) + 1.\nApproach 3: Convert to string and find length.",
        "examples": [{"input": "n = 12345", "output": "5"}, {"input": "n = 7", "output": "1"}],
        "constraints": ["1 <= n <= 10^9"],
    },
    "reverse integer": {
        "desc": "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.\n\nExtract digits using modulo (%) and division (/). Build the reversed number digit by digit while checking for overflow.",
        "examples": [{"input": "x = 123", "output": "321"}, {"input": "x = -123", "output": "-321"}],
        "constraints": ["-2^31 <= x <= 2^31 - 1"],
    },
    "double reversal": {
        "desc": "Reversing an integer means to reverse all its digits. Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num.\n\nA number equals its double reversal if and only if it doesn't end with a trailing zero (except 0 itself).",
        "examples": [{"input": "num = 526", "output": "true", "explanation": "526 -> 625 -> 526"}, {"input": "num = 1800", "output": "false", "explanation": "1800 -> 0081 -> 81 != 1800"}],
        "constraints": ["0 <= num <= 10^6"],
    },
    "sum & product of digits": {
        "desc": "Given an integer n, return the difference between the product of its digits and the sum of its digits.\n\nExtract each digit, compute both the running product and running sum, then return product - sum.",
        "examples": [{"input": "n = 234", "output": "15", "explanation": "Product = 2*3*4=24, Sum = 2+3+4=9, Diff = 24-9=15"}, {"input": "n = 4421", "output": "21"}],
        "constraints": ["1 <= n <= 10^5"],
    },
    "self dividing numbers": {
        "desc": "A self-dividing number is a number that is divisible by every digit it contains. It must also not contain the digit zero.\n\nGiven two integers left and right, return a list of all self-dividing numbers in the range [left, right].",
        "examples": [{"input": "left = 1, right = 22", "output": "[1,2,3,4,5,6,7,8,9,11,12,15,22]"}],
        "constraints": ["1 <= left <= right <= 10^4"],
    },
    "amstrong number": {
        "desc": "An Armstrong number (narcissistic number) of n digits is a number where the sum of each digit raised to the power n equals the number itself.\n\nFor example, 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.\n\nGiven a number, determine if it is an Armstrong number.",
        "examples": [{"input": "n = 153", "output": "true", "explanation": "1^3 + 5^3 + 3^3 = 1+125+27 = 153"}, {"input": "n = 123", "output": "false"}],
        "constraints": ["1 <= n <= 10^8"],
    },
    "rotate digits of number": {
        "desc": "Given an integer n and a rotation count k, rotate the digits of n by k positions.\n\nA right rotation moves the last k digits to the front. A left rotation moves the first k digits to the end.",
        "examples": [{"input": "n = 12345, k = 2 (right)", "output": "45123"}, {"input": "n = 12345, k = 2 (left)", "output": "34512"}],
        "constraints": ["1 <= n <= 10^9", "1 <= k <= number of digits"],
    },
    "inverse of number": {
        "desc": "Given a number where digits are a permutation of 1 to n, find its inverse. The inverse is formed by placing the position of each digit at the index equal to the digit.\n\nFor example, in 2314: digit 2 is at position 1, digit 3 is at position 2, digit 1 is at position 3, digit 4 is at position 4. So inverse is 3124.",
        "examples": [{"input": "n = 2314", "output": "3124"}, {"input": "n = 12345", "output": "12345"}],
        "constraints": ["1 <= number of digits <= 9", "Digits are a permutation of 1 to n"],
    },
    # ---- MATHEMATICS ----
    "stones remove game": {
        "desc": "You are playing a game with your friend. In the game, there are n stones in a pile. You take turns removing 1, 2, or 3 stones. The one who removes the last stone wins. You go first.\n\nDetermine if you can win the game given optimal play from both sides.\n\nKey insight: If n is divisible by 4, you lose; otherwise, you win.",
        "examples": [{"input": "n = 4", "output": "false", "explanation": "No matter 1-3 you remove, opponent can always take the last"}, {"input": "n = 5", "output": "true"}],
        "constraints": ["1 <= n <= 2^31 - 1"],
    },
    "divisor game": {
        "desc": "Alice and Bob take turns playing a game. Alice goes first. On each turn, the player chooses x such that 0 < x < n and n % x == 0, then replaces n with n - x. The player who cannot make a move loses.\n\nReturn true if Alice wins the game given optimal play.\n\nKey insight: Alice wins if and only if n is even.",
        "examples": [{"input": "n = 2", "output": "true", "explanation": "Alice picks 1, n becomes 1, Bob can't move"}, {"input": "n = 3", "output": "false"}],
        "constraints": ["1 <= n <= 1000"],
    },
    "digital root": {
        "desc": "Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.\n\nThis is called the digital root. The mathematical formula is: digitalRoot = 1 + (num - 1) % 9 for num > 0.",
        "examples": [{"input": "num = 38", "output": "2", "explanation": "3+8=11, 1+1=2"}, {"input": "num = 0", "output": "0"}],
        "constraints": ["0 <= num <= 2^31 - 1"],
    },
    "bulb switcher": {
        "desc": "There are n bulbs that are initially off. You first turn on all the bulbs, then toggle every 2nd bulb, then toggle every 3rd bulb, and so on until the nth bulb.\n\nReturn the number of bulbs that are on after n rounds.\n\nKey insight: A bulb is on if it has an odd number of divisors. Only perfect squares have odd divisors. Answer = floor(sqrt(n)).",
        "examples": [{"input": "n = 3", "output": "1", "explanation": "Bulb 1 stays on (toggled in round 1 only)"}, {"input": "n = 10", "output": "3"}],
        "constraints": ["0 <= n <= 10^9"],
    },
    "factorial trailing 0s": {
        "desc": "Given an integer n, return the number of trailing zeroes in n! (n factorial).\n\nTrailing zeros are produced by pairs of factors 2 and 5. Since there are always more 2s than 5s, count the number of times 5 appears as a factor.\n\nFormula: Count = n/5 + n/25 + n/125 + ...",
        "examples": [{"input": "n = 5", "output": "1", "explanation": "5! = 120, one trailing zero"}, {"input": "n = 25", "output": "6"}],
        "constraints": ["0 <= n <= 10^4"],
    },
    "check ugly number": {
        "desc": "An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.\n\nGiven an integer n, return true if n is an ugly number. Keep dividing n by 2, 3, 5 while divisible. If the result is 1, it's ugly.",
        "examples": [{"input": "n = 6", "output": "true", "explanation": "6 = 2 × 3"}, {"input": "n = 14", "output": "false", "explanation": "14 = 2 × 7, and 7 is not 2, 3, or 5"}],
        "constraints": ["-2^31 <= n <= 2^31 - 1"],
    },
    "count primes": {
        "desc": "Given an integer n, return the number of prime numbers that are strictly less than n.\n\nUse the Sieve of Eratosthenes: create a boolean array of size n, initially all true. For each prime p starting from 2, mark all multiples of p as non-prime. Count remaining true values.\n\nTime complexity: O(n log log n). Space: O(n).",
        "examples": [{"input": "n = 10", "output": "4", "explanation": "Primes less than 10: 2, 3, 5, 7"}, {"input": "n = 2", "output": "0"}],
        "constraints": ["0 <= n <= 5 * 10^6"],
    },
    # ---- ARRAYS ----
    "two sum": {
        "desc": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nOptimal approach: Use a hash map to store complement values. For each number, check if target - num exists in the map. Time: O(n), Space: O(n).",
        "examples": [{"input": "nums = [2,7,11,15], target = 9", "output": "[0,1]", "explanation": "nums[0] + nums[1] = 2 + 7 = 9"}, {"input": "nums = [3,2,4], target = 6", "output": "[1,2]"}],
        "constraints": ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "Only one valid answer exists"],
    },
    "reverse array": {
        "desc": "Given an array of integers, reverse the elements of the array in-place.\n\nUse the two-pointer technique: swap elements from both ends moving toward the center. This achieves O(n) time with O(1) extra space.",
        "examples": [{"input": "arr = [1, 2, 3, 4, 5]", "output": "[5, 4, 3, 2, 1]"}, {"input": "arr = [3, 7]", "output": "[7, 3]"}],
        "constraints": ["1 <= arr.length <= 10^5"],
    },
    "left rotate array": {
        "desc": "Given an array arr and an integer d, left rotate the array by d positions.\n\nIn left rotation, each element moves d positions to the left. Elements that fall off the left end appear at the right end.\n\nOptimal approach: Reverse first d elements, reverse remaining elements, then reverse the entire array. Time: O(n), Space: O(1).",
        "examples": [{"input": "arr = [1,2,3,4,5], d = 2", "output": "[3,4,5,1,2]"}, {"input": "arr = [1,2,3], d = 1", "output": "[2,3,1]"}],
        "constraints": ["1 <= arr.length <= 10^5", "0 <= d <= arr.length"],
    },
    "right rotate array": {
        "desc": "Given an integer array nums, rotate the array to the right by k steps.\n\nOptimal approach (Reversal Algorithm):\n1. Reverse the entire array\n2. Reverse the first k elements\n3. Reverse the remaining n-k elements\n\nTime: O(n), Space: O(1). Handle k > n by using k = k % n.",
        "examples": [{"input": "nums = [1,2,3,4,5,6,7], k = 3", "output": "[5,6,7,1,2,3,4]"}, {"input": "nums = [-1,-100,3,99], k = 2", "output": "[3,99,-1,-100]"}],
        "constraints": ["1 <= nums.length <= 10^5", "-2^31 <= nums[i] <= 2^31 - 1", "0 <= k <= 10^5"],
    },
    "reverse string": {
        "desc": "Write a function that reverses a string. The input string is given as an array of characters s.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.\n\nUse two pointers: one at the start, one at the end. Swap characters and move pointers toward the center.",
        "examples": [{"input": 's = [\"h\",\"e\",\"l\",\"l\",\"o\"]', "output": '[\"o\",\"l\",\"l\",\"e\",\"h\"]'}, {"input": 's = [\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"]', "output": '[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]'}],
        "constraints": ["1 <= s.length <= 10^5", "s[i] is a printable ASCII character"],
    },
    "reverse words - i": {
        "desc": "Given an input string s, reverse the order of the words.\n\nA word is defined as a sequence of non-space characters. The words in s will be separated by at least one space. Return a string with words in reverse order concatenated by a single space.",
        "examples": [{"input": "s = 'the sky is blue'", "output": "'blue is sky the'"}, {"input": "s = '  hello world  '", "output": "'world hello'"}],
        "constraints": ["1 <= s.length <= 10^4", "s may contain leading/trailing spaces"],
    },
    "palindromic string": {
        "desc": "Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.\n\nA string is a palindrome if it reads the same forward and backward after filtering non-alphanumeric characters.\n\nUse two pointers from both ends, skipping non-alphanumeric characters.",
        "examples": [{"input": "s = 'A man, a plan, a canal: Panama'", "output": "true"}, {"input": "s = 'race a car'", "output": "false"}],
        "constraints": ["1 <= s.length <= 2 * 10^5"],
    },
    "palindromic integer": {
        "desc": "Given an integer x, return true if x is a palindrome.\n\nAn integer is a palindrome when it reads the same forward and backward. Negative numbers are not palindromes.\n\nOptimal: Reverse only half of the number and compare with the other half.",
        "examples": [{"input": "x = 121", "output": "true"}, {"input": "x = -121", "output": "false", "explanation": "Reads as 121- from right to left"}],
        "constraints": ["-2^31 <= x <= 2^31 - 1"],
    },
    "sort colors": {
        "desc": "Given an array nums with n objects colored red (0), white (1), or blue (2), sort them in-place so that objects of the same color are adjacent, in the order red, white, blue.\n\nUse the Dutch National Flag algorithm with three pointers (low, mid, high) to partition in a single pass. Time: O(n), Space: O(1).",
        "examples": [{"input": "nums = [2,0,2,1,1,0]", "output": "[0,0,1,1,2,2]"}, {"input": "nums = [2,0,1]", "output": "[0,1,2]"}],
        "constraints": ["n == nums.length", "1 <= n <= 300", "nums[i] is 0, 1, or 2"],
    },
    "majority element - i": {
        "desc": "Given an array nums of size n, return the majority element. The majority element appears more than n/2 times.\n\nOptimal: Use Boyer-Moore Voting Algorithm. Maintain a candidate and a count. When count reaches 0, switch candidate. The majority element will always survive.\n\nTime: O(n), Space: O(1).",
        "examples": [{"input": "nums = [3,2,3]", "output": "3"}, {"input": "nums = [2,2,1,1,1,2,2]", "output": "2"}],
        "constraints": ["n == nums.length", "1 <= n <= 5 * 10^4", "The majority element always exists"],
    },
    "missing number - i": {
        "desc": "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.\n\nApproach 1: Sum formula — expected sum n*(n+1)/2 minus actual sum.\nApproach 2: XOR all numbers 0 to n with all array elements. The result is the missing number.\n\nBoth approaches: O(n) time, O(1) space.",
        "examples": [{"input": "nums = [3,0,1]", "output": "2"}, {"input": "nums = [9,6,4,2,3,5,7,0,1]", "output": "8"}],
        "constraints": ["n == nums.length", "0 <= nums[i] <= n", "All numbers are unique"],
    },
    "move zeroes": {
        "desc": "Given an integer array nums, move all 0's to the end while maintaining the relative order of the non-zero elements.\n\nDo this in-place without making a copy. Use a write pointer to track where the next non-zero should go.\n\nTime: O(n), Space: O(1).",
        "examples": [{"input": "nums = [0,1,0,3,12]", "output": "[1,3,12,0,0]"}, {"input": "nums = [0]", "output": "[0]"}],
        "constraints": ["1 <= nums.length <= 10^4", "-2^31 <= nums[i] <= 2^31 - 1"],
    },
    "maximum subarray": {
        "desc": "Given an integer array nums, find the subarray with the largest sum, and return its sum.\n\nUse Kadane's Algorithm: maintain current_sum and max_sum. At each element, either extend the current subarray or start a new one.\n\ncurrent_sum = max(nums[i], current_sum + nums[i])\nmax_sum = max(max_sum, current_sum)\n\nTime: O(n), Space: O(1).",
        "examples": [{"input": "nums = [-2,1,-3,4,-1,2,1,-5,4]", "output": "6", "explanation": "Subarray [4,-1,2,1] has the largest sum = 6"}, {"input": "nums = [5,4,-1,7,8]", "output": "23"}],
        "constraints": ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    },
    "best time to buy and sell stock": {
        "desc": "You are given an array prices where prices[i] is the price of a stock on the i-th day.\n\nChoose a single day to buy and a different day in the future to sell to maximize profit. Return the maximum profit, or 0 if no profit is possible.\n\nTrack the minimum price seen so far and compute the potential profit at each day.\n\nTime: O(n), Space: O(1).",
        "examples": [{"input": "prices = [7,1,5,3,6,4]", "output": "5", "explanation": "Buy on day 2 (price=1), sell on day 5 (price=6)"}, {"input": "prices = [7,6,4,3,1]", "output": "0"}],
        "constraints": ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
    },
    "merge sorted array": {
        "desc": "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n representing the number of elements in each.\n\nMerge nums2 into nums1 as one sorted array in-place. nums1 has enough space (size m+n).\n\nOptimal: Use three pointers starting from the end of both arrays, filling nums1 from back to front. Time: O(m+n), Space: O(1).",
        "examples": [{"input": "nums1 = [1,2,3,0,0,0], m=3, nums2 = [2,5,6], n=3", "output": "[1,2,2,3,5,6]"}],
        "constraints": ["nums1.length == m + n", "0 <= m, n <= 200"],
    },
    "product of array except self": {
        "desc": "Given an integer array nums, return an array answer such that answer[i] equals the product of all elements except nums[i].\n\nSolve in O(n) time without using division.\n\nApproach: Build prefix products from left, then multiply with suffix products from right.\n\nTime: O(n), Space: O(1) extra (output array doesn't count).",
        "examples": [{"input": "nums = [1,2,3,4]", "output": "[24,12,8,6]"}, {"input": "nums = [-1,1,0,-3,3]", "output": "[0,0,9,0,0]"}],
        "constraints": ["2 <= nums.length <= 10^5", "The product of any prefix or suffix fits in a 32-bit integer"],
    },
    "trapping rain water": {
        "desc": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water can be trapped after raining.\n\nFor each bar, water trapped = min(max_left, max_right) - height[i].\n\nOptimal: Two-pointer approach processes from both ends simultaneously.\n\nTime: O(n), Space: O(1).",
        "examples": [{"input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]", "output": "6"}, {"input": "height = [4,2,0,3,2,5]", "output": "9"}],
        "constraints": ["n == height.length", "1 <= n <= 2 * 10^4", "0 <= height[i] <= 10^5"],
    },
    "spiral matrix": {
        "desc": "Given an m x n matrix, return all elements of the matrix in spiral order.\n\nTraverse: right along top row, down along right column, left along bottom row, up along left column. Shrink boundaries after each direction.\n\nMaintain four boundaries: top, bottom, left, right.",
        "examples": [{"input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]", "output": "[1,2,3,6,9,8,7,4,5]"}, {"input": "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]", "output": "[1,2,3,4,8,12,11,10,9,5,6,7]"}],
        "constraints": ["m == matrix.length", "1 <= m, n <= 10"],
    },
    "set matrix zeroes": {
        "desc": "Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's. Do it in-place.\n\nOptimal O(1) space: Use the first row and first column as markers. Scan matrix, mark rows/columns that should be zeroed using the first row/col, then fill zeros based on markers.",
        "examples": [{"input": "matrix = [[1,1,1],[1,0,1],[1,1,1]]", "output": "[[1,0,1],[0,0,0],[1,0,1]]"}, {"input": "matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]", "output": "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]"}],
        "constraints": ["m == matrix.length", "1 <= m, n <= 200"],
    },
    "rotate image": {
        "desc": "Given an n x n 2D matrix representing an image, rotate the image by 90 degrees clockwise in-place.\n\nTwo-step approach:\n1. Transpose the matrix (swap matrix[i][j] with matrix[j][i])\n2. Reverse each row\n\nTime: O(n^2), Space: O(1).",
        "examples": [{"input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]", "output": "[[7,4,1],[8,5,2],[9,6,3]]"}],
        "constraints": ["n == matrix.length == matrix[i].length", "1 <= n <= 20"],
    },
    # ---- SEARCHING ----
    "binary search": {
        "desc": "Given a sorted array of distinct integers nums and a target value, return the index of target if found, otherwise return -1.\n\nAlgorithm:\n1. Set left = 0, right = n-1\n2. While left <= right:\n   - mid = left + (right-left)/2\n   - If nums[mid] == target, return mid\n   - If nums[mid] < target, left = mid + 1\n   - Else right = mid - 1\n\nTime: O(log n), Space: O(1).",
        "examples": [{"input": "nums = [-1,0,3,5,9,12], target = 9", "output": "4"}, {"input": "nums = [-1,0,3,5,9,12], target = 2", "output": "-1"}],
        "constraints": ["1 <= nums.length <= 10^4", "All elements are unique", "nums is sorted in ascending order"],
    },
    "search in rotated sorted array - i": {
        "desc": "A sorted array has been rotated at an unknown pivot index. Given such an array nums and a target, return its index or -1.\n\nUse modified binary search: at each step, determine which half is sorted. If the target lies in the sorted half, search there; otherwise search the other half.\n\nTime: O(log n), Space: O(1).",
        "examples": [{"input": "nums = [4,5,6,7,0,1,2], target = 0", "output": "4"}, {"input": "nums = [4,5,6,7,0,1,2], target = 3", "output": "-1"}],
        "constraints": ["1 <= nums.length <= 5000", "All values are unique"],
    },
    # ---- SORTING ----
    "merge sort": {
        "desc": "Implement Merge Sort — a stable, divide-and-conquer sorting algorithm.\n\nAlgorithm:\n1. Divide the array into two halves\n2. Recursively sort each half\n3. Merge the two sorted halves using a two-pointer technique\n\nTime: O(n log n) in all cases. Space: O(n) for the merge buffer. Merge sort is the preferred choice when stability is required.",
        "examples": [{"input": "arr = [38, 27, 43, 3, 9, 82, 10]", "output": "[3, 9, 10, 27, 38, 43, 82]"}, {"input": "arr = [5, 1, 4, 2, 8]", "output": "[1, 2, 4, 5, 8]"}],
        "constraints": ["1 <= arr.length <= 10^5"],
    },
    "quick sort": {
        "desc": "Implement Quick Sort — an efficient, in-place, divide-and-conquer sorting algorithm.\n\nAlgorithm:\n1. Pick a pivot element\n2. Partition: place elements smaller than pivot to the left, larger to the right\n3. Recursively sort the left and right partitions\n\nAverage Time: O(n log n). Worst case: O(n^2) with poor pivot choice. Space: O(log n) for recursion stack.",
        "examples": [{"input": "arr = [10, 80, 30, 90, 40, 50, 70]", "output": "[10, 30, 40, 50, 70, 80, 90]"}, {"input": "arr = [3, 6, 8, 10, 1, 2, 1]", "output": "[1, 1, 2, 3, 6, 8, 10]"}],
        "constraints": ["1 <= arr.length <= 10^5"],
    },
    # ---- LINKED LIST ----
    "reverse linked list": {
        "desc": "Given the head of a singly linked list, reverse the list and return the reversed list.\n\nIterative approach: Use three pointers (prev, curr, next). At each step, point curr.next to prev, then advance all pointers.\n\nTime: O(n), Space: O(1) iterative / O(n) recursive.",
        "examples": [{"input": "head = [1,2,3,4,5]", "output": "[5,4,3,2,1]"}, {"input": "head = [1,2]", "output": "[2,1]"}],
        "constraints": ["0 <= number of nodes <= 5000", "-5000 <= Node.val <= 5000"],
    },
    "linked list cycle": {
        "desc": "Given head of a linked list, determine if the linked list has a cycle.\n\nUse Floyd's Tortoise and Hare algorithm: two pointers, one slow (1 step) and one fast (2 steps). If they meet, there's a cycle. If fast reaches null, no cycle.\n\nTime: O(n), Space: O(1).",
        "examples": [{"input": "head = [3,2,0,-4], pos = 1", "output": "true", "explanation": "Tail connects to node at index 1"}, {"input": "head = [1], pos = -1", "output": "false"}],
        "constraints": ["0 <= number of nodes <= 10^4", "-10^5 <= Node.val <= 10^5"],
    },
    # ---- RECURSION & BACKTRACKING ----
    "tower of hanoi": {
        "desc": "The Tower of Hanoi has 3 rods and n disks of different sizes stacked in ascending order on one rod.\n\nMove all disks to another rod following these rules:\n1. Only one disk can be moved at a time\n2. Only the top disk of a stack can be moved\n3. A larger disk cannot be placed on a smaller disk\n\nMinimum moves required: 2^n - 1. Use recursion: move n-1 disks to auxiliary, move largest disk to target, move n-1 disks from auxiliary to target.",
        "examples": [{"input": "n = 2", "output": "Move disk 1: A -> B, Move disk 2: A -> C, Move disk 1: B -> C"}, {"input": "n = 3", "output": "7 moves required"}],
        "constraints": ["1 <= n <= 16"],
    },
    "valid parentheses": {
        "desc": "Given a string s containing just '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nA string is valid if:\n1. Open brackets are closed by the same type\n2. Open brackets are closed in the correct order\n3. Every close bracket has a corresponding open bracket\n\nUse a stack: push open brackets, pop and match for close brackets.",
        "examples": [{"input": "s = '()'", "output": "true"}, {"input": "s = '(]'", "output": "false"}, {"input": "s = '([{}])'", "output": "true"}],
        "constraints": ["1 <= s.length <= 10^4"],
    },
    "climbing stairs": {
        "desc": "You are climbing a staircase of n steps. Each time you can climb 1 or 2 steps. How many distinct ways can you climb to the top?\n\nThis follows the Fibonacci pattern: ways(n) = ways(n-1) + ways(n-2).\nBase cases: ways(1) = 1, ways(2) = 2.\n\nUse DP to avoid exponential recursion. Time: O(n), Space: O(1).",
        "examples": [{"input": "n = 2", "output": "2", "explanation": "1+1 or 2"}, {"input": "n = 3", "output": "3", "explanation": "1+1+1, 1+2, 2+1"}],
        "constraints": ["1 <= n <= 45"],
    },
    "subsets": {
        "desc": "Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets.\n\nApproach 1: Backtracking — for each element, choose to include or exclude it.\nApproach 2: Iterative — start with empty set, for each number add it to all existing subsets.\nApproach 3: Bit manipulation — use integers 0 to 2^n-1 as bitmasks.\n\nTotal subsets: 2^n.",
        "examples": [{"input": "nums = [1,2,3]", "output": "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"}],
        "constraints": ["1 <= nums.length <= 10", "-10 <= nums[i] <= 10", "All elements are unique"],
    },
    "permutations": {
        "desc": "Given an array nums of distinct integers, return all possible permutations.\n\nUse backtracking: fix one element at each position, recursively permute the rest. Swap elements to generate each permutation, then swap back (backtrack).\n\nTotal permutations: n!. Time: O(n * n!), Space: O(n) for recursion.",
        "examples": [{"input": "nums = [1,2,3]", "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"}],
        "constraints": ["1 <= nums.length <= 6", "-10 <= nums[i] <= 10", "All integers are unique"],
    },
    "n queens - i": {
        "desc": "Place n queens on an n x n chessboard such that no two queens attack each other (same row, column, or diagonal).\n\nReturn all distinct solutions. Each solution is a board configuration.\n\nUse backtracking: try placing a queen in each column of the current row. Check if placement is safe (no conflicts with previously placed queens). If safe, recurse to the next row.",
        "examples": [{"input": "n = 4", "output": '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]'}, {"input": "n = 1", "output": '[["Q"]]'}],
        "constraints": ["1 <= n <= 9"],
    },
    "generate parentheses": {
        "desc": "Given n pairs of parentheses, generate all combinations of well-formed parentheses.\n\nUse backtracking with two counters: open_count and close_count.\nRules:\n- Add '(' if open_count < n\n- Add ')' if close_count < open_count\n- Base case: string length == 2*n",
        "examples": [{"input": "n = 3", "output": '["((()))","(()())","(())()","()(())","()()()"]'}, {"input": "n = 1", "output": '["()"]'}],
        "constraints": ["1 <= n <= 8"],
    },
    "word search": {
        "desc": "Given an m x n grid of characters and a string word, return true if word exists in the grid.\n\nThe word can be formed by sequentially adjacent cells (horizontal or vertical neighbors). Each cell may be used only once.\n\nUse DFS/backtracking from each cell. Mark visited cells, explore 4 directions, unmark on backtrack.",
        "examples": [{"input": 'board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"', "output": "true"}, {"input": "word = \"SEE\"", "output": "true"}],
        "constraints": ["m == board.length", "n == board[i].length", "1 <= word.length <= 15"],
    },
    "rat in maze": {
        "desc": "A rat is placed at position (0, 0) in an N x N matrix and must reach (N-1, N-1). Find all possible paths.\n\nCells with value 1 are open, cells with value 0 are blocked. The rat can move in 4 directions: Up, Down, Left, Right.\n\nUse backtracking: at each cell, try all 4 directions. Mark visited cells to avoid cycles.",
        "examples": [{"input": "matrix = [[1,0,0,0],[1,1,0,1],[1,1,0,0],[0,1,1,1]]", "output": "DDRDRR, DRDDRR"}],
        "constraints": ["2 <= N <= 5", "matrix[i][j] is 0 or 1"],
    },
    # ---- DYNAMIC PROGRAMMING ----
    "coin change": {
        "desc": "Given an array of coin denominations and a target amount, find the minimum number of coins needed to make up that amount. If it's not possible, return -1.\n\nUse DP: dp[i] = minimum coins needed for amount i.\nRecurrence: dp[i] = min(dp[i], dp[i - coin] + 1) for each coin.\n\nTime: O(amount * coins), Space: O(amount).",
        "examples": [{"input": "coins = [1,5,10,25], amount = 30", "output": "2", "explanation": "25 + 5 = 30"}, {"input": "coins = [2], amount = 3", "output": "-1"}],
        "constraints": ["1 <= coins.length <= 12", "1 <= amount <= 10^4"],
    },
    "book allocation": {
        "desc": "Given n books with arr[i] pages and m students, allocate books such that:\n1. Each student gets at least one book\n2. Books are allocated in contiguous order\n3. The maximum pages assigned to any student is minimized\n\nUse Binary Search on Answer: search space is [max(arr), sum(arr)]. For each mid value, check if allocation is feasible with m students.",
        "examples": [{"input": "arr = [12, 34, 67, 90], m = 2", "output": "113", "explanation": "[12,34,67] and [90] → max = 113"}],
        "constraints": ["1 <= n <= 10^5", "1 <= arr[i] <= 10^6"],
    },
    "number of islands": {
        "desc": "Given an m x n 2D grid of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and formed by connecting adjacent lands horizontally or vertically.\n\nUse BFS or DFS: for each unvisited '1', start a traversal to mark the entire connected island, then increment count.\n\nTime: O(m*n), Space: O(m*n).",
        "examples": [{"input": "grid = [[\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]", "output": "2"}, {"input": "grid = [[\"1\",\"0\",\"1\"],[\"0\",\"0\",\"0\"],[\"1\",\"0\",\"1\"]]", "output": "4"}],
        "constraints": ["m == grid.length", "n == grid[i].length", "1 <= m, n <= 300"],
    },
    "valid anagram": {
        "desc": "Given two strings s and t, return true if t is an anagram of s.\n\nAn anagram uses the same letters with the same frequencies. Use a frequency counter (array of 26 or hash map) to count characters in both strings and compare.\n\nTime: O(n), Space: O(1) with fixed-size array.",
        "examples": [{"input": "s = 'anagram', t = 'nagaram'", "output": "true"}, {"input": "s = 'rat', t = 'car'", "output": "false"}],
        "constraints": ["1 <= s.length, t.length <= 5 * 10^4"],
    },
    "group anagrams": {
        "desc": "Given an array of strings, group the anagrams together.\n\nUse a hash map where the key is the sorted string (or character frequency tuple). All anagrams produce the same key.\n\nTime: O(n * k log k) where k is max string length. Space: O(n*k).",
        "examples": [{"input": "strs = ['eat','tea','tan','ate','nat','bat']", "output": "[['bat'],['nat','tan'],['ate','eat','tea']]"}],
        "constraints": ["1 <= strs.length <= 10^4", "0 <= strs[i].length <= 100"],
    },
    "valid sudoku": {
        "desc": "Determine if a 9x9 Sudoku board is valid. Only filled cells need to be validated:\n1. Each row has digits 1-9 without repetition\n2. Each column has digits 1-9 without repetition\n3. Each 3x3 sub-box has digits 1-9 without repetition\n\nUse hash sets for each row, column, and box to track seen digits.",
        "examples": [{"input": "A partially filled valid board", "output": "true"}, {"input": "A board with duplicate 8 in a column", "output": "false"}],
        "constraints": ["board.length == 9", "board[i].length == 9", "board[i][j] is digit 1-9 or '.'"],
    },
    "sudoku solver": {
        "desc": "Write a program to solve a Sudoku puzzle by filling empty cells.\n\nUse backtracking: find an empty cell, try digits 1-9. For each digit, check if placement is valid (no conflicts in row, column, or 3x3 box). If valid, place it and recurse. If stuck, backtrack.",
        "examples": [{"input": "Partially filled 9x9 board", "output": "Completed valid Sudoku board"}],
        "constraints": ["Exactly one solution exists"],
    },
    "string to integer": {
        "desc": "Implement atoi — convert a string to a 32-bit signed integer.\n\nAlgorithm:\n1. Skip leading whitespace\n2. Check for '+' or '-' sign\n3. Read digits until non-digit or end of string\n4. Clamp result to [-2^31, 2^31 - 1]\n\nHandle edge cases: empty string, no digits, overflow.",
        "examples": [{"input": "s = '42'", "output": "42"}, {"input": "s = '   -042'", "output": "-42"}, {"input": "s = '4193 with words'", "output": "4193"}],
        "constraints": ["0 <= s.length <= 200"],
    },
    "is subsequence": {
        "desc": "Given two strings s and t, return true if s is a subsequence of t.\n\nA subsequence maintains relative order but characters need not be contiguous. Use two pointers: one for s and one for t. Advance both when characters match, advance only t pointer otherwise.\n\nTime: O(t.length), Space: O(1).",
        "examples": [{"input": "s = 'ace', t = 'abcde'", "output": "true"}, {"input": "s = 'aec', t = 'abcde'", "output": "false"}],
        "constraints": ["0 <= s.length <= 100", "0 <= t.length <= 10^4"],
    },
    "container with most water": {
        "desc": "Given an array of heights representing vertical lines, find two lines that together with the x-axis form a container that holds the most water.\n\nUse two pointers at both ends. Move the shorter line inward (since moving the taller line can only decrease area).\n\nTime: O(n), Space: O(1).",
        "examples": [{"input": "height = [1,8,6,2,5,4,8,3,7]", "output": "49"}, {"input": "height = [1,1]", "output": "1"}],
        "constraints": ["2 <= height.length <= 10^5", "0 <= height[i] <= 10^4"],
    },
}

# ============================================================
# 2. SUBTOPIC-SPECIFIC DESCRIPTION & EXAMPLE GENERATORS
# ============================================================
# Each subtopic gets a template that generates problem-specific content

SUBTOPIC_GENERATORS = {
    # Fundamentals
    "Core Subjects": {
        "desc": "This covers essential computer science fundamentals: data structures, algorithms, operating systems, databases, and networking.\n\nMaster these core concepts to build a strong foundation for software engineering interviews and real-world problem solving.",
        "examples": [{"input": "Concept: What is a data structure?", "output": "A way to organize and store data for efficient access and modification"}],
    },
    "Getting Started": {
        "desc": "This is a beginner-level practice problem to help you get started with programming.\n\nFocus on understanding the problem statement, writing clean code, and handling basic input/output operations.",
        "examples": [{"input": "Read an integer n from input", "output": "Process and print the result"}],
    },
    "C++ Programming Basics": {
        "desc": "This problem covers fundamental C++ concepts including pointers, references, memory management, and basic syntax.\n\nUnderstanding C++ basics is critical for systems programming and competitive programming.",
        "examples": [{"input": "int *ptr = new int(5)", "output": "*ptr = 5, address stored in ptr"}],
    },
    "STL C++": {
        "desc": "This problem involves the C++ Standard Template Library (STL) — a powerful set of template classes and functions.\n\nLearn to use containers (vector, map, set, queue, stack), iterators, and algorithms (sort, find, binary_search) effectively.",
        "examples": [{"input": "vector<int> v = {3,1,4,1,5}", "output": "After sort: {1,1,3,4,5}"}],
    },
    "Basic Java Problems": {
        "desc": "This is a foundational Java programming exercise covering basic syntax, data types, control flow, and I/O operations.\n\nMaster Java fundamentals including variables, operators, conditional statements, and loops.",
        "examples": [{"input": "int a = 5, b = 3", "output": "Sum = 8, Product = 15"}],
    },
    "Loops Basics": {
        "desc": "This problem requires using loop constructs (for, while, do-while) to iterate through data and compute results.\n\nPractice loop control, nested loops, and understanding when to use each type of loop for optimal solutions.",
        "examples": [{"input": "n = 5", "output": "Loop from 1 to 5: 1 2 3 4 5"}],
    },
    "Digit Traversals": {
        "desc": "Extract and process individual digits of a number using modulo (%) and integer division (/) operations.\n\nCommon operations: count digits, sum of digits, reverse digits, check divisibility by digits.",
        "examples": [{"input": "n = 1234", "output": "Digits: 1, 2, 3, 4 | Sum: 10 | Reverse: 4321"}],
    },
    "Pattern Printing": {
        "desc": "Print the specified pattern using nested loops. Analyze the pattern row by row to determine:\n- How many spaces to print before each row\n- What characters to print and how many\n- Whether the pattern grows, shrinks, or both\n\nPattern problems build strong loop logic and are common in campus interviews.",
        "examples": [{"input": "n = 3", "output": "Row 1: *\\nRow 2: **\\nRow 3: ***"}],
    },
    "Time & Space Complexity": {
        "desc": "Analyze the time and space complexity of algorithms using Big-O notation.\n\nKey concepts:\n- O(1): Constant — hash table lookup\n- O(log n): Logarithmic — binary search\n- O(n): Linear — single loop\n- O(n log n): Linearithmic — merge sort\n- O(n^2): Quadratic — nested loops\n- O(2^n): Exponential — recursive subsets",
        "examples": [{"input": "Single for loop over n elements", "output": "Time: O(n), Space: O(1)"}, {"input": "Nested for loop (i: 0→n, j: 0→n)", "output": "Time: O(n^2)"}],
    },
    # Arrays & Strings
    "Arrays & Strings": {
        "desc": "Work with arrays and strings — the most fundamental data structures in programming.\n\nKey techniques: traversal, two pointers, sliding window, prefix sums, and in-place modifications.",
        "examples": [{"input": "arr = [1, 2, 3, 4, 5]", "output": "Traversal, manipulation, or search result"}],
    },
    "Reverse Array or String": {
        "desc": "Reverse the given array or string using the two-pointer technique.\n\nPlace one pointer at the beginning and another at the end. Swap elements and move pointers toward the center until they meet.\n\nTime: O(n), Space: O(1) for in-place reversal.",
        "examples": [{"input": "arr = [1, 2, 3, 4, 5]", "output": "[5, 4, 3, 2, 1]"}, {"input": "s = 'hello'", "output": "'olleh'"}],
    },
    "Rearrange Array": {
        "desc": "Rearrange elements of the array according to a specific rule or pattern.\n\nCommon patterns: alternating positive/negative, sort by frequency, rearrange to form largest number, or arrange in wave form.",
        "examples": [{"input": "arr = [3, -2, -1, 5, -3, 4]", "output": "[3, -2, 5, -1, 4, -3] (alternating +/-)"}],
    },
    "Max or Min in Array": {
        "desc": "Find the maximum or minimum element in an array.\n\nApproaches:\n- Linear scan: O(n) — iterate and track max/min\n- Divide and conquer: O(n) with fewer comparisons\n- For kth largest/smallest: use a heap or quickselect",
        "examples": [{"input": "arr = [3, 1, 4, 1, 5, 9, 2, 6]", "output": "Max: 9, Min: 1"}],
    },
    "Missing & Duplicate": {
        "desc": "Find missing or duplicate elements in an array of integers.\n\nTechniques:\n- XOR: Find single missing/duplicate in O(n) time, O(1) space\n- Sum formula: Expected sum minus actual sum gives missing element\n- Index marking: Use array indices as a hash to mark visited elements",
        "examples": [{"input": "arr = [1, 2, 4, 5] (range 1-5)", "output": "Missing: 3"}, {"input": "arr = [1, 3, 4, 2, 2]", "output": "Duplicate: 2"}],
    },
    "Majority Element": {
        "desc": "Find the element that appears more than n/2 (or n/3) times in an array.\n\nBoyer-Moore Voting Algorithm: Track a candidate and count. Increment count for same element, decrement for different. When count hits 0, switch candidate. Verify the candidate in a second pass.\n\nTime: O(n), Space: O(1).",
        "examples": [{"input": "arr = [2, 2, 1, 1, 1, 2, 2]", "output": "Majority element: 2"}],
    },
    "Prefix Sum Array": {
        "desc": "Build a prefix sum array where prefix[i] = sum of elements from index 0 to i.\n\nThis precomputation allows answering range sum queries in O(1):\nsum(l, r) = prefix[r] - prefix[l-1]\n\nPrefix sums are the foundation for many advanced techniques.",
        "examples": [{"input": "arr = [1, 2, 3, 4, 5]", "output": "prefix = [1, 3, 6, 10, 15]"}, {"input": "Query: sum(1,3)", "output": "prefix[3] - prefix[0] = 10 - 1 = 9"}],
    },
    # Sorting
    "Basic Sorting Algorithms": {
        "desc": "Implement fundamental sorting algorithms: Bubble Sort, Selection Sort, and Insertion Sort.\n\nBubble Sort: Repeatedly swap adjacent out-of-order elements. O(n^2).\nSelection Sort: Find minimum in unsorted portion, swap with front. O(n^2).\nInsertion Sort: Insert each element into its correct position. O(n^2), but efficient for small/nearly-sorted arrays.",
        "examples": [{"input": "arr = [64, 25, 12, 22, 11]", "output": "[11, 12, 22, 25, 64]"}],
    },
    "Sorting Algorithms": {
        "desc": "Implement and understand advanced sorting algorithms including Merge Sort, Quick Sort, Heap Sort, and their variants.\n\nCompare time/space complexities and understand when to use each:\n- Merge Sort: Stable, O(n log n), O(n) space\n- Quick Sort: In-place, O(n log n) avg, O(n^2) worst\n- Heap Sort: In-place, O(n log n), not stable",
        "examples": [{"input": "arr = [38, 27, 43, 3, 9, 82, 10]", "output": "[3, 9, 10, 27, 38, 43, 82]"}],
    },
    "Custom Sorting": {
        "desc": "Sort elements using custom comparison logic. Define a comparator function that determines the ordering of elements.\n\nCommon scenarios: sort by multiple keys, sort objects by specific fields, or sort for special arrangements (like forming the largest number).",
        "examples": [{"input": "arr = [3, 30, 34, 5, 9]", "output": "'9534330' (largest number formed)"}, {"input": "Sort by: last digit ascending", "output": "[30, 3, 34, 5, 9]"}],
    },
    "Counting Sort": {
        "desc": "Implement Counting Sort — a non-comparison-based sorting algorithm for integers in a known range.\n\nAlgorithm: Count frequency of each element, compute prefix sums, then place elements in correct positions.\n\nTime: O(n + k) where k = range. Space: O(k). Stable sort. Efficient when k is not significantly greater than n.",
        "examples": [{"input": "arr = [4, 2, 2, 8, 3, 3, 1]", "output": "[1, 2, 2, 3, 3, 4, 8]"}],
    },
    # Searching
    "Binary Search Basics": {
        "desc": "Apply binary search to find elements in a sorted array in O(log n) time.\n\nKey concept: Divide the search space in half at each step by comparing with the middle element.\n\nVariations: find first/last occurrence, lower/upper bound, search in rotated array.",
        "examples": [{"input": "arr = [1, 3, 5, 7, 9, 11], target = 7", "output": "Index: 3"}, {"input": "target = 6", "output": "-1 (not found)"}],
    },
    "Binary Search on Answer": {
        "desc": "Apply binary search on the answer space rather than on an array. This technique works when:\n1. The answer lies in a monotonic range [low, high]\n2. You can verify if a given answer is feasible in O(n)\n\nExamples: minimize maximum, maximize minimum, allocate resources optimally.",
        "examples": [{"input": "Books = [12,34,67,90], students = 2", "output": "113 (minimize max pages per student)"}],
    },
    "Lower & Upper Bound": {
        "desc": "Find the lower bound (first element >= target) and upper bound (first element > target) in a sorted array using binary search.\n\nLower bound: smallest index i such that arr[i] >= target\nUpper bound: smallest index i such that arr[i] > target\n\nUseful for counting occurrences and range queries.",
        "examples": [{"input": "arr = [1,2,2,2,3,4,5], target = 2", "output": "Lower bound: index 1, Upper bound: index 4"}],
    },
    "Rotated Sorted Array": {
        "desc": "Search in a sorted array that has been rotated at some unknown pivot point.\n\nModify binary search: at each step, determine which half is properly sorted. If target lies in the sorted half, search there; otherwise search the other half.\n\nTime: O(log n).",
        "examples": [{"input": "arr = [4,5,6,7,0,1,2], target = 0", "output": "Index: 4"}, {"input": "Find minimum element", "output": "0"}],
    },
    # Hashing
    "Hashing Technique": {
        "desc": "Use hash maps (dictionaries) and hash sets for O(1) average-time lookups, insertions, and deletions.\n\nCommon applications: counting frequencies, finding duplicates, checking existence, grouping elements, and solving two-sum type problems.\n\nHandle collisions using chaining or open addressing.",
        "examples": [{"input": "Count frequency: arr = [1,2,1,3,2,1]", "output": "{1:3, 2:2, 3:1}"}, {"input": "Check for pair with sum 5", "output": "true (2+3)"}],
    },
    "More Hashing Questions": {
        "desc": "Advanced hashing problems requiring creative use of hash maps and hash sets.\n\nTechniques: rolling hash, hash with custom keys (sorted string for anagrams), nested hash maps, and frequency counting with hash maps.",
        "examples": [{"input": "Group anagrams: ['eat','tea','tan','ate']", "output": "[['eat','tea','ate'],['tan']]"}],
    },
    # Two Pointers & Sliding Window
    "Two Pointer Problems": {
        "desc": "Use two pointers to solve array problems efficiently. Common patterns:\n\n1. Opposite ends: Start from both ends, move inward (container with most water, palindrome check)\n2. Same direction: Slow/fast pointers (remove duplicates, partition)\n3. Two arrays: Merge or compare sorted arrays\n\nReduces O(n^2) brute force to O(n).",
        "examples": [{"input": "Sorted arr = [1,2,3,4,6], target = 6", "output": "Pair: (2,4) at indices (1,3)"}],
    },
    "Target Sum Pair": {
        "desc": "Given an array and a target sum, find pairs of elements that add up to the target.\n\nApproach 1: Sort + two pointers — O(n log n)\nApproach 2: Hash set — O(n) time, O(n) space\n\nHandle duplicates and multiple pairs as required by the variant.",
        "examples": [{"input": "arr = [1, 5, 7, -1, 5], target = 6", "output": "Pairs: (1,5), (7,-1)"}, {"input": "arr = [2, 3, 4], target = 6", "output": "Pair: (2, 4)"}],
    },
    "Target Sum Triplet": {
        "desc": "Given an array, find all unique triplets (a, b, c) such that a + b + c = target.\n\nApproach: Sort the array. For each element, use two pointers on the remaining subarray to find pairs that sum to target - current.\n\nSkip duplicates to avoid repeated triplets. Time: O(n^2), Space: O(1).",
        "examples": [{"input": "arr = [-1,0,1,2,-1,-4], target = 0", "output": "[[-1,-1,2],[-1,0,1]]"}],
    },
    "Quadruplet Sum": {
        "desc": "Find all unique quadruplets (a, b, c, d) in the array that sum to a given target.\n\nApproach: Sort the array. Use two nested loops for the first two elements, then two pointers for the remaining two.\n\nTime: O(n^3), Space: O(1) extra.",
        "examples": [{"input": "arr = [1,0,-1,0,-2,2], target = 0", "output": "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]"}],
    },
    "Static Sliding Window": {
        "desc": "Use a fixed-size sliding window to process subarrays/substrings of length k.\n\nMaintain a window of size k. As the window slides right by one position: add the new element and remove the leftmost element.\n\nCommon: max/min/sum of subarray of size k.",
        "examples": [{"input": "arr = [1,3,2,6,-1,4,1,8,2], k = 3", "output": "Max sum subarray of size 3: [6,-1,4] or [4,1,8] = 13"}],
    },
    "Dynamic Array Window": {
        "desc": "Use a variable-size sliding window that expands and contracts based on conditions.\n\nPattern: Expand window by moving right pointer. When condition is violated, shrink by moving left pointer. Track the optimal result.\n\nCommon: longest substring without repeating chars, minimum window substring.",
        "examples": [{"input": "s = 'abcabcbb'", "output": "Longest substring without repeating chars: 'abc' (length 3)"}],
    },
    "Dynamic String Window": {
        "desc": "Apply sliding window technique on strings to find optimal substrings.\n\nUse character frequency maps to track window contents. Expand right pointer to include characters, shrink left pointer when valid.\n\nCommon problems: minimum window substring, longest repeating character replacement, anagram finding.",
        "examples": [{"input": "s = 'ADOBECODEBANC', t = 'ABC'", "output": "Minimum window containing all chars of t: 'BANC'"}],
    },
    # Stack & Queue
    "Stack & Queue Basics": {
        "desc": "Implement and use stack (LIFO: Last In First Out) and queue (FIFO: First In First Out) data structures.\n\nStack operations: push, pop, peek/top — all O(1)\nQueue operations: enqueue, dequeue, front — all O(1)\n\nApplications: expression evaluation, BFS traversal, undo operations.",
        "examples": [{"input": "Stack: push(1), push(2), push(3), pop()", "output": "Returns 3. Stack: [1, 2]"}, {"input": "Queue: enqueue(1), enqueue(2), dequeue()", "output": "Returns 1. Queue: [2]"}],
    },
    "Parenthesis Matching": {
        "desc": "Use a stack to validate and match parentheses, brackets, and braces in expressions.\n\nFor each opening bracket, push onto stack. For each closing bracket, check if the top of stack matches. If stack is empty at the end, the expression is valid.\n\nExtensions: find minimum additions to make valid, longest valid parentheses.",
        "examples": [{"input": "s = '([{}])'", "output": "Valid"}, {"input": "s = '([)]'", "output": "Invalid"}],
    },
    "Monotonic Stack": {
        "desc": "A monotonic stack maintains elements in either increasing or decreasing order. Used to efficiently find:\n- Next Greater Element (NGE)\n- Next Smaller Element\n- Previous Greater/Smaller Element\n\nProcess: For each element, pop elements from stack that violate monotonic property. The remaining top is the answer.",
        "examples": [{"input": "arr = [4, 5, 2, 10, 8], find NGE", "output": "NGE = [5, 10, 10, -1, -1]"}],
    },
    "Infix Expressions": {
        "desc": "Evaluate or convert infix expressions (operators between operands, e.g., A + B).\n\nUse two stacks: one for operands, one for operators. Handle operator precedence and parentheses.\n\nConversions: Infix to Postfix, Infix to Prefix using the Shunting Yard algorithm.",
        "examples": [{"input": "expr = '3 + 4 * 2'", "output": "Result: 11 (multiplication before addition)"}, {"input": "Infix: 'A+B*C'", "output": "Postfix: 'ABC*+'"}],
    },
    "Design Stack or Queue": {
        "desc": "Design custom stack or queue implementations with special features.\n\nCommon designs:\n- Min Stack: get minimum element in O(1)\n- Stack using Queues (and vice versa)\n- Circular Queue\n- Max Queue using deque",
        "examples": [{"input": "MinStack: push(3), push(1), push(2), getMin()", "output": "Returns 1"}, {"input": "pop(), getMin()", "output": "Returns 1 (after removing 2)"}],
    },
    # Heap
    "Binary Heap": {
        "desc": "Implement and use binary heap (priority queue) for efficient min/max element access.\n\nMin-Heap: parent <= children. Max-Heap: parent >= children.\nOperations: insert O(log n), extract-min/max O(log n), peek O(1).\n\nBuild heap from array: O(n). Common applications: k-th largest, merge k sorted lists, scheduling.",
        "examples": [{"input": "Insert: 5, 3, 8, 1, 2 into min-heap", "output": "Heap: [1, 2, 8, 5, 3]. Extract-min returns 1"}],
    },
    # Trees
    "Inorder Traversal": {
        "desc": "Traverse a binary tree in inorder: Left → Root → Right.\n\nFor a BST, inorder traversal gives elements in sorted ascending order.\n\nImplement recursively or iteratively (using a stack). Morris Traversal achieves O(1) space.",
        "examples": [{"input": "Tree: [1,null,2,3]", "output": "Inorder: [1, 3, 2]"}, {"input": "BST: [4,2,6,1,3,5,7]", "output": "Inorder: [1,2,3,4,5,6,7] (sorted!)"}],
    },
    "Depth and Width": {
        "desc": "Calculate the depth (height) or width of a binary tree.\n\nMax Depth: Use DFS recursion — depth = 1 + max(left_depth, right_depth). Base case: null node has depth 0.\nMax Width: Use BFS (level-order traversal) and track the number of nodes at each level.",
        "examples": [{"input": "Tree: [3,9,20,null,null,15,7]", "output": "Max Depth: 3, Max Width: 2 (level with [15,7])"}],
    },
    "Path Sum Problems": {
        "desc": "Find or count paths in a binary tree that satisfy a sum condition.\n\nVariants:\n- Root-to-leaf path with given sum\n- Any path with given sum\n- Maximum path sum (can start/end at any node)\n\nUse DFS with running sum. Backtrack when returning from a subtree.",
        "examples": [{"input": "Tree: [5,4,8,11,null,13,4], target = 22", "output": "Path exists: 5 → 4 → 11 → 2 (sum=22): true"}],
    },
    "View of Tree": {
        "desc": "Print different views of a binary tree: left view, right view, top view, or bottom view.\n\nLeft/Right View: Use BFS, take first/last node of each level.\nTop/Bottom View: Use BFS with horizontal distance tracking.\n\nEach view tests understanding of level-order traversal with coordinate tracking.",
        "examples": [{"input": "Tree: [1,2,3,4,5,6,7]", "output": "Left view: [1,2,4], Right view: [1,3,7]"}],
    },
    "Construct Binary Tree": {
        "desc": "Construct a binary tree from given traversal sequences.\n\nCommon variants:\n- From inorder + preorder: preorder[0] is root, split inorder to find left/right subtrees\n- From inorder + postorder: postorder[-1] is root\n- From level-order + inorder\n\nUse recursion with hash map for O(n) construction.",
        "examples": [{"input": "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]", "output": "Tree: [3,9,20,null,null,15,7]"}],
    },
    # BST
    "BST Basics": {
        "desc": "Work with Binary Search Trees where left child < root < right child.\n\nKey operations:\n- Search: O(h) — compare with root, go left/right\n- Insert: O(h) — find correct leaf position\n- Delete: O(h) — handle 0, 1, or 2 children cases\n\nInorder traversal gives sorted order. Balanced BST has h = O(log n).",
        "examples": [{"input": "BST: [4,2,7,1,3], search for 2", "output": "Found at depth 1 (left child of root)"}, {"input": "Insert 5", "output": "BST: [4,2,7,1,3,5,null]"}],
    },
    "Check for BST": {
        "desc": "Validate whether a given binary tree is a valid Binary Search Tree.\n\nApproach: Use recursive range checking — each node must be within a valid range (min, max).\n- Left child: range becomes (min, parent)\n- Right child: range becomes (parent, max)\n\nOR: Check if inorder traversal is strictly increasing.",
        "examples": [{"input": "Tree: [2,1,3]", "output": "true (valid BST)"}, {"input": "Tree: [5,1,4,null,null,3,6]", "output": "false (4 < 5 but is right child)"}],
    },
    # Dynamic Programming
    "Fibonacci Sequence": {
        "desc": "Solve problems that follow the Fibonacci-like recurrence pattern: f(n) = f(n-1) + f(n-2).\n\nExamples: Fibonacci numbers, climbing stairs, tiling problems.\n\nOptimize from O(2^n) recursion to O(n) DP using tabulation or memoization. Can even achieve O(log n) with matrix exponentiation.",
        "examples": [{"input": "n = 6", "output": "F(6) = 8. Sequence: 0,1,1,2,3,5,8"}],
    },
    "Climbing Stairs": {
        "desc": "Count the number of distinct ways to climb n stairs when you can take 1 or 2 steps at a time.\n\nRecurrence: dp[i] = dp[i-1] + dp[i-2] (Fibonacci pattern).\nBase cases: dp[0] = 1, dp[1] = 1.\n\nVariants include climbing with 1, 2, or 3 steps, or climbing with specific step sizes.",
        "examples": [{"input": "n = 4", "output": "5 ways: {1111, 112, 121, 211, 22}"}],
    },
    "Coin Change Problem": {
        "desc": "Given coin denominations and a target amount, find the minimum number of coins needed (or count total ways).\n\nDP state: dp[i] = min coins for amount i.\nTransition: dp[i] = min(dp[i], dp[i-coin] + 1) for each coin.\n\nBase: dp[0] = 0. Initialize rest to infinity.",
        "examples": [{"input": "coins = [1,5,10,25], amount = 30", "output": "Min coins: 2 (25+5)"}, {"input": "coins = [1,2,5], amount = 11", "output": "Min coins: 3 (5+5+1)"}],
    },
    "Knapsack Problem": {
        "desc": "Given items with weights and values, and a knapsack capacity W, maximize total value without exceeding weight capacity.\n\n0/1 Knapsack: Each item used at most once. DP[i][w] = max value using first i items with capacity w.\nUnbounded Knapsack: Items can be used multiple times.\n\nTime: O(n*W), Space: O(W) with space optimization.",
        "examples": [{"input": "weights = [1,3,4,5], values = [1,4,5,7], W = 7", "output": "Max value: 9 (items with weight 3 and 4)"}],
    },
    "Buy & Sell Stock": {
        "desc": "Given stock prices over n days, determine the best strategy to maximize profit.\n\nVariants:\n- Single transaction: Track min price, compute max profit at each day\n- Multiple transactions: Buy and sell on same day allowed\n- At most k transactions: DP with states\n- With cooldown: Can't buy day after selling",
        "examples": [{"input": "prices = [7,1,5,3,6,4] (one transaction)", "output": "Max profit: 5 (buy at 1, sell at 6)"}],
    },
    "House Robber": {
        "desc": "You are robbing houses along a street. You cannot rob two adjacent houses (alarm triggers). Maximize total loot.\n\nDP: dp[i] = max(dp[i-1], dp[i-2] + nums[i]).\nAt each house: either skip it (take dp[i-1]) or rob it (take dp[i-2] + nums[i]).\n\nVariant: Houses in a circle (first and last are adjacent).",
        "examples": [{"input": "nums = [1, 2, 3, 1]", "output": "4 (rob house 1 and 3: 1+3=4)"}, {"input": "nums = [2, 7, 9, 3, 1]", "output": "12 (rob houses 1,3,5: 2+9+1=12)"}],
    },
    "LIS Problems": {
        "desc": "Find the Longest Increasing Subsequence (LIS) — the longest subsequence where elements are in strictly increasing order.\n\nDP approach: dp[i] = length of LIS ending at index i. For each i, check all j < i where arr[j] < arr[i].\n\nOptimal: O(n log n) using binary search with a patience sorting technique.\n\nTime: O(n^2) DP, O(n log n) optimal.",
        "examples": [{"input": "arr = [10, 9, 2, 5, 3, 7, 101, 18]", "output": "LIS length: 4 (e.g., [2, 3, 7, 101])"}],
    },
    "Longest Common Subset": {
        "desc": "Find the Longest Common Subsequence (LCS) of two strings — the longest sequence that appears in both strings in the same relative order.\n\nDP: Create a 2D table. If characters match: dp[i][j] = dp[i-1][j-1] + 1. Otherwise: dp[i][j] = max(dp[i-1][j], dp[i][j-1]).\n\nTime: O(m*n), Space: O(m*n), optimizable to O(min(m,n)).",
        "examples": [{"input": "s1 = 'abcde', s2 = 'ace'", "output": "LCS: 'ace' (length 3)"}, {"input": "s1 = 'abc', s2 = 'def'", "output": "LCS: '' (length 0)"}],
    },
    "DP on Grid": {
        "desc": "Solve dynamic programming problems on 2D grids.\n\nCommon problems: unique paths, minimum path sum, maximal square, gold mine.\n\nDP state typically: dp[i][j] = optimal value to reach cell (i,j).\nTransition: dp[i][j] depends on dp[i-1][j], dp[i][j-1], or dp[i-1][j-1].",
        "examples": [{"input": "Grid 3x3, count unique paths top-left to bottom-right", "output": "6 paths (only move right or down)"}, {"input": "Grid with obstacles", "output": "Paths avoiding obstacles"}],
    },
    "Matrix Chain Multiplication": {
        "desc": "Given dimensions of n matrices, find the most efficient way to multiply them (minimize total scalar multiplications).\n\nDP on intervals: dp[i][j] = min cost to multiply matrices i through j.\nTry every split point k: dp[i][j] = min(dp[i][k] + dp[k+1][j] + cost_of_merge).\n\nTime: O(n^3), Space: O(n^2).",
        "examples": [{"input": "dims = [10, 30, 5, 60]", "output": "Optimal: (A1 × A2) × A3 = 4500 multiplications"}],
    },
    "Palindromic Substrings": {
        "desc": "Find palindromic substrings or the longest palindromic substring in a given string.\n\nApproach 1: Expand around center — for each character (and between characters), expand outward while palindrome holds. O(n^2).\nApproach 2: Manacher's algorithm for O(n).\n\nVariants: count all palindromic substrings, longest palindromic subsequence.",
        "examples": [{"input": "s = 'babad'", "output": "Longest palindromic substring: 'bab' or 'aba'"}, {"input": "s = 'cbbd'", "output": "'bb'"}],
    },
    "Word Break": {
        "desc": "Given a string s and a dictionary of words, determine if s can be segmented into a space-separated sequence of dictionary words.\n\nDP: dp[i] = true if s[0..i-1] can be segmented.\nTransition: dp[i] = true if any dp[j] is true and s[j..i-1] is in dictionary.\n\nTime: O(n^2 * m) where m is max word length.",
        "examples": [{"input": "s = 'leetcode', dict = ['leet', 'code']", "output": "true (leet + code)"}, {"input": "s = 'applepenapple', dict = ['apple', 'pen']", "output": "true"}],
    },
    # Bit Manipulation
    "Hamming Weight": {
        "desc": "Count the number of set bits (1s) in the binary representation of an integer (also called Hamming Weight or popcount).\n\nApproach 1: Check each bit using n & 1, then right shift.\nApproach 2: Brian Kernighan's trick — n = n & (n-1) removes the lowest set bit. Count iterations.\n\nTime: O(number of set bits).",
        "examples": [{"input": "n = 11 (binary: 1011)", "output": "3 (three 1-bits)"}, {"input": "n = 128 (binary: 10000000)", "output": "1"}],
    },
    "Single Number": {
        "desc": "Given an array where every element appears twice except one, find the single element.\n\nKey insight: XOR of a number with itself is 0. XOR of a number with 0 is the number itself.\nSolution: XOR all elements together. Pairs cancel out, leaving the single number.\n\nTime: O(n), Space: O(1).",
        "examples": [{"input": "nums = [4, 1, 2, 1, 2]", "output": "4"}, {"input": "nums = [2, 2, 1]", "output": "1"}],
    },
    "XOR Problems": {
        "desc": "Leverage XOR properties for efficient solutions:\n- a ^ a = 0 (self-cancellation)\n- a ^ 0 = a (identity)\n- XOR is commutative and associative\n\nApplications: find missing/duplicate numbers, swap without temp, find two unique elements in array of pairs.",
        "examples": [{"input": "Find missing in [0,1,3,4] (range 0-4)", "output": "2 (XOR 0-4 with array elements)"}, {"input": "Swap a=5, b=3 without temp", "output": "a=3, b=5 using a^=b; b^=a; a^=b"}],
    },
    "Bitmasking Basics": {
        "desc": "Use bitmasks to represent sets and solve subset-related problems efficiently.\n\nKey operations:\n- Set bit i: mask | (1 << i)\n- Clear bit i: mask & ~(1 << i)\n- Check bit i: mask & (1 << i)\n- Toggle bit: mask ^ (1 << i)\n\nBitmask DP uses integers to represent subsets, enabling O(2^n * n) solutions.",
        "examples": [{"input": "mask = 5 (binary: 101)", "output": "Bit 0: set, Bit 1: unset, Bit 2: set"}, {"input": "Subsets of {a,b,c} using bits 0-7", "output": "000={}, 001={a}, 010={b}, ... 111={a,b,c}"}],
    },
    # Graphs
    "Basic BFS/DFS": {
        "desc": "Traverse a graph using Breadth-First Search (BFS) or Depth-First Search (DFS).\n\nBFS: Uses a queue. Explores level by level. Finds shortest path in unweighted graphs.\nDFS: Uses a stack (or recursion). Explores as deep as possible before backtracking.\n\nBoth visit all reachable nodes in O(V + E) time.",
        "examples": [{"input": "Graph: 0-1, 0-2, 1-3, 2-3. Start: 0", "output": "BFS: [0,1,2,3], DFS: [0,1,3,2]"}],
    },
    "Connected Components": {
        "desc": "Find the number of connected components in an undirected graph.\n\nApproach: Run BFS/DFS from each unvisited node. Each traversal discovers one connected component. Increment count.\n\nAlternative: Union-Find (Disjoint Set Union) achieves near O(1) per operation.\n\nTime: O(V + E).",
        "examples": [{"input": "n=5, edges=[[0,1],[1,2],[3,4]]", "output": "2 components: {0,1,2} and {3,4}"}],
    },
    "Cycle Detection": {
        "desc": "Detect if a cycle exists in a graph.\n\nUndirected graph: DFS with parent tracking — if a visited node is found that isn't the parent, cycle exists.\nDirected graph: DFS with 3-color marking (white/gray/black) — a back edge (to gray node) indicates a cycle.\n\nAlternative: Topological sort fails if cycle exists.",
        "examples": [{"input": "Directed: 0→1→2→0", "output": "Cycle detected: 0→1→2→0"}, {"input": "DAG: 0→1→2, 0→2", "output": "No cycle"}],
    },
    "Topological Sort": {
        "desc": "Order vertices of a Directed Acyclic Graph (DAG) such that for every edge u→v, u comes before v.\n\nKahn's Algorithm (BFS): Process nodes with in-degree 0, reduce neighbors' in-degrees.\nDFS approach: Post-order DFS, then reverse.\n\nApplications: task scheduling, course prerequisites, build systems.",
        "examples": [{"input": "Courses: 4→3→1, 4→2→1, graph with 4 courses", "output": "Order: [4, 3, 2, 1] or [4, 2, 3, 1]"}],
    },
    "Dijkstra's Algorithm": {
        "desc": "Find shortest paths from a source vertex to all other vertices in a weighted graph with non-negative edge weights.\n\nAlgorithm: Use a min-heap (priority queue). Greedily extract the vertex with smallest distance, relax its neighbors.\n\nTime: O((V+E) log V) with binary heap. Does NOT work with negative weights.",
        "examples": [{"input": "Graph: 0→1(4), 0→2(1), 2→1(2). Source: 0", "output": "Dist: [0, 3, 1]. Shortest to 1 is via 2: 0→2→1 = 3"}],
    },
    "Minimum Spanning Tree": {
        "desc": "Find a subset of edges that connects all vertices with minimum total edge weight (no cycles).\n\nKruskal's Algorithm: Sort edges by weight, add edges that don't create cycles (use Union-Find). O(E log E).\nPrim's Algorithm: Grow MST from a source using a min-heap. O(E log V).\n\nMST has exactly V-1 edges.",
        "examples": [{"input": "4 vertices, edges: (0,1,10),(0,2,6),(0,3,5),(1,3,15),(2,3,4)", "output": "MST edges: (2,3,4),(0,3,5),(0,1,10). Total: 19"}],
    },
    "Disjoint Set Union (DSU)": {
        "desc": "Disjoint Set Union (Union-Find) efficiently manages groups of elements.\n\nOperations:\n- Find(x): Find the representative (root) of x's set\n- Union(x, y): Merge the sets containing x and y\n\nOptimizations: Path compression + Union by rank → near O(1) per operation.\n\nApplications: Kruskal's MST, connected components, cycle detection.",
        "examples": [{"input": "Union(1,2), Union(3,4), Union(1,3)", "output": "Find(2) == Find(4) → true (same set)"}],
    },
    # Trie
    "Trie or Prefix Tree": {
        "desc": "A Trie (prefix tree) is a tree-like data structure for efficient string operations.\n\nEach node represents a character. Paths from root to nodes represent prefixes.\n\nOperations: Insert, Search, StartsWith — all O(L) where L is string length.\nApplications: autocomplete, spell checker, IP routing, word games.",
        "examples": [{"input": "Insert: 'apple', 'app'. Search 'apple'", "output": "true"}, {"input": "StartsWith 'app'", "output": "true"}, {"input": "Search 'app'", "output": "false (not a complete word unless marked)"}],
    },
    # Recursion
    "Recursion Basics": {
        "desc": "Solve problems by breaking them into smaller subproblems of the same type.\n\nEvery recursion needs:\n1. Base case: When to stop (prevents infinite recursion)\n2. Recursive case: How to reduce the problem\n3. Trust: Assume the recursive call works correctly\n\nCommon: factorial, Fibonacci, power, array sum, printing sequences.",
        "examples": [{"input": "factorial(5)", "output": "120 = 5 × factorial(4) = 5 × 24"}, {"input": "sum([1,2,3,4])", "output": "10 = 1 + sum([2,3,4])"}],
    },
    "More Recursion Problems": {
        "desc": "Solve advanced recursive problems involving multiple recursive calls, helper parameters, or complex state.\n\nTechniques: tail recursion, divide and conquer, recursion with memoization, recursive backtracking.\n\nKey: identify the recurrence relation and base cases clearly.",
        "examples": [{"input": "Print all subsequences of 'abc'", "output": "'', 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'"}],
    },
    "Keypad Problems": {
        "desc": "Given a phone keypad mapping digits to letters (2→abc, 3→def, ..., 9→wxyz), generate all possible letter combinations for a given digit sequence.\n\nUse recursion: for each digit, try all corresponding letters and recurse on remaining digits.\n\nTotal combinations: product of letters per digit.",
        "examples": [{"input": "digits = '23'", "output": "['ad','ae','af','bd','be','bf','cd','ce','cf']"}],
    },
    "Maze Path Problems": {
        "desc": "Find all possible paths (or count paths) through a maze/grid from start to destination.\n\nTypically move right and down (sometimes all 4 directions). Use recursion with backtracking.\n\nVariants: count paths, print all paths, find shortest path, grid with obstacles.",
        "examples": [{"input": "3x3 grid, start (0,0), end (2,2)", "output": "Paths: RRDD, RDRD, RDDR, DRRD, DRDR, DDRR (6 paths)"}],
    },
    # Segment Tree & Range Queries
    "Range Sum Query": {
        "desc": "Answer range sum queries efficiently: given an array, find the sum of elements in range [l, r].\n\nApproaches:\n- Prefix Sum: O(n) build, O(1) query, no updates\n- Segment Tree: O(n) build, O(log n) query and update\n- BIT (Fenwick Tree): O(n) build, O(log n) query and update",
        "examples": [{"input": "arr = [1, 3, 5, 7, 9, 11], query(1,3)", "output": "Sum of arr[1..3] = 3+5+7 = 15"}, {"input": "Update arr[2]=6, query(1,3)", "output": "3+6+7 = 16"}],
    },
    "Range Minimum Query": {
        "desc": "Find the minimum element in a range [l, r] efficiently.\n\nSparse Table: O(n log n) build, O(1) query (no updates).\nSegment Tree: O(n) build, O(log n) query and update.\n\nSparse table is preferred when no updates are needed.",
        "examples": [{"input": "arr = [1, 3, 2, 7, 9, 11], RMQ(1,4)", "output": "min(3,2,7,9) = 2"}],
    },
    # Strings
    "String Matching Problems": {
        "desc": "Find occurrences of a pattern string in a text string.\n\nNaive: O(n*m). Efficient algorithms:\n- KMP: O(n+m) using failure function\n- Rabin-Karp: O(n+m) average using rolling hash\n- Z-Algorithm: O(n+m) using Z-array\n\nChoose based on single vs. multiple pattern matching needs.",
        "examples": [{"input": "text = 'AABAACAADAABAABA', pattern = 'AABA'", "output": "Found at indices: [0, 9, 12]"}],
    },
    "More String Problems": {
        "desc": "Solve advanced string manipulation problems involving character counting, transformations, and comparisons.\n\nTechniques: frequency counting, two pointers, sliding window, prefix matching, string hashing.",
        "examples": [{"input": "s = 'abcabcbb', find longest substring without repeating", "output": "'abc' (length 3)"}],
    },
    # Matrix
    "Basic Matrix Traversal": {
        "desc": "Traverse a 2D matrix in different patterns: row-wise, column-wise, diagonal, anti-diagonal, or boundary.\n\nUnderstand index relationships for different traversal patterns and handle edge cases for non-square matrices.",
        "examples": [{"input": "matrix = [[1,2,3],[4,5,6],[7,8,9]], row-wise", "output": "1,2,3,4,5,6,7,8,9"}, {"input": "Diagonal traversal", "output": "[1],[2,4],[3,5,7],[6,8],[9]"}],
    },
    "Spiral Matrix Traversal": {
        "desc": "Traverse a matrix in spiral order: right → down → left → up, spiraling inward.\n\nMaintain four boundaries (top, bottom, left, right). After traversing each direction, shrink the corresponding boundary. Stop when boundaries cross.",
        "examples": [{"input": "[[1,2,3],[4,5,6],[7,8,9]]", "output": "[1,2,3,6,9,8,7,4,5]"}],
    },
    "Rotate Matrix": {
        "desc": "Rotate a square matrix by 90 degrees clockwise (or counter-clockwise) in-place.\n\nClockwise 90°:\n1. Transpose the matrix (swap [i][j] with [j][i])\n2. Reverse each row\n\nCounter-clockwise 90°:\n1. Transpose the matrix\n2. Reverse each column",
        "examples": [{"input": "[[1,2,3],[4,5,6],[7,8,9]], rotate 90° CW", "output": "[[7,4,1],[8,5,2],[9,6,3]]"}],
    },
    "Search in 2D Matrix": {
        "desc": "Search for a target value in a sorted 2D matrix.\n\nIf rows and columns are sorted: Start from top-right corner. If current > target, move left. If current < target, move down. O(m+n).\n\nIf flattened matrix is sorted: Use binary search treating the matrix as a 1D array. O(log(m*n)).",
        "examples": [{"input": "matrix = [[1,3,5],[7,9,11],[13,15,17]], target = 9", "output": "true (found at [1][1])"}],
    },
    # Linked List variants
    "Design Linked List": {
        "desc": "Implement a linked list from scratch with operations: insertAtHead, insertAtTail, insertAtIndex, deleteAtIndex, get.\n\nChoose between singly linked list (next pointer only) or doubly linked list (prev + next pointers). Use a dummy head node to simplify edge cases.",
        "examples": [{"input": "insertAtHead(1), insertAtTail(3), insertAtIndex(1,2)", "output": "List: 1 → 2 → 3"}, {"input": "get(1)", "output": "2"}],
    },
    "Reverse Linked List": {
        "desc": "Reverse a singly linked list. Change the direction of all next pointers.\n\nIterative: Use three pointers (prev, curr, next). At each step, reverse curr's pointer.\nRecursive: Reverse the rest of the list first, then fix the head's pointer.\n\nVariants: reverse in groups of k, reverse between positions m and n.",
        "examples": [{"input": "1 → 2 → 3 → 4 → 5", "output": "5 → 4 → 3 → 2 → 1"}],
    },
    "Two Pointers in List": {
        "desc": "Use slow and fast pointers in linked lists to solve various problems.\n\nApplications:\n- Find middle node: slow moves 1 step, fast moves 2 steps\n- Detect cycle: Floyd's algorithm\n- Find start of cycle\n- Check if palindrome\n- Remove nth node from end",
        "examples": [{"input": "List: 1→2→3→4→5, find middle", "output": "Middle: 3 (slow pointer stops here)"}, {"input": "Detect cycle in 1→2→3→4→2", "output": "Cycle detected at node 2"}],
    },
    "Floyd's Cycle Detection": {
        "desc": "Detect a cycle in a linked list using Floyd's Tortoise and Hare algorithm.\n\nTwo pointers: slow (1 step) and fast (2 steps). If they meet, there's a cycle.\n\nTo find cycle start: After meeting, reset slow to head. Move both one step at a time. They meet at the cycle's start.\n\nTime: O(n), Space: O(1).",
        "examples": [{"input": "1→2→3→4→5→2 (cycle at node 2)", "output": "Cycle detected. Cycle starts at node 2"}],
    },
    "Remove List Nodes": {
        "desc": "Remove nodes from a linked list based on given conditions (value, position, or duplicates).\n\nUse a dummy head to handle edge cases when the head needs removal. Maintain a prev pointer to unlink the target node.\n\nCommon: remove nth from end, remove duplicates from sorted list, remove all occurrences of a value.",
        "examples": [{"input": "List: 1→2→6→3→4→5→6, remove val=6", "output": "1→2→3→4→5"}],
    },
    "Merge Sort List": {
        "desc": "Sort a linked list using merge sort in O(n log n) time.\n\nAlgorithm:\n1. Find middle using slow/fast pointers\n2. Recursively sort left and right halves\n3. Merge two sorted lists\n\nThis is the preferred sorting algorithm for linked lists since random access isn't needed.",
        "examples": [{"input": "4→2→1→3", "output": "1→2→3→4"}],
    },
    # Greedy
    "Meeting Rooms": {
        "desc": "Given an array of meeting time intervals, determine the minimum number of conference rooms required.\n\nApproach: Sort by start time. Use a min-heap to track end times of ongoing meetings. If a new meeting starts after the earliest ending meeting, reuse that room.\n\nTime: O(n log n).",
        "examples": [{"input": "intervals = [[0,30],[5,10],[15,20]]", "output": "2 rooms needed"}, {"input": "intervals = [[7,10],[2,4]]", "output": "1 room needed"}],
    },
    # Number Theory
    "Prime Numbers": {
        "desc": "Work with prime numbers: check primality, generate primes, factorize.\n\nPrimality test: Check divisibility up to sqrt(n). Time: O(sqrt(n)).\nSieve of Eratosthenes: Generate all primes up to n in O(n log log n).\nPrime factorization: Divide by primes from 2 to sqrt(n).",
        "examples": [{"input": "Is 17 prime?", "output": "true"}, {"input": "Primes up to 20", "output": "[2, 3, 5, 7, 11, 13, 17, 19]"}, {"input": "Factorize 60", "output": "2^2 × 3 × 5"}],
    },
    "Euclid's Algorithm": {
        "desc": "Find the Greatest Common Divisor (GCD) of two numbers using Euclid's algorithm.\n\nRecurrence: gcd(a, b) = gcd(b, a % b), base case: gcd(a, 0) = a.\n\nTime: O(log(min(a,b))). LCM can be computed as: lcm(a,b) = a * b / gcd(a,b).",
        "examples": [{"input": "a = 12, b = 8", "output": "GCD = 4"}, {"input": "a = 35, b = 15", "output": "GCD = 5, LCM = 105"}],
    },
    "Modular Arithmetic": {
        "desc": "Perform arithmetic operations under modulo (typically mod 10^9 + 7).\n\nKey properties:\n- (a + b) % m = ((a%m) + (b%m)) % m\n- (a * b) % m = ((a%m) * (b%m)) % m\n- Modular inverse: a^(-1) mod m = a^(m-2) mod m (when m is prime)\n\nUse modular exponentiation for large powers.",
        "examples": [{"input": "Compute 2^100 mod (10^9+7)", "output": "976371285"}, {"input": "(15 * 7) mod 10", "output": "5"}],
    },
    "Pascal Triangle": {
        "desc": "Generate Pascal's Triangle where each number is the sum of the two numbers directly above it.\n\nRow i, column j: C(i,j) = C(i-1,j-1) + C(i-1,j).\nFirst and last elements of each row are 1.\n\nApplications: binomial coefficients, combinations, probability.",
        "examples": [{"input": "numRows = 5", "output": "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]"}],
    },
    # System Design
    "Design Cache": {
        "desc": "Design a cache system like LRU (Least Recently Used) or LFU (Least Frequently Used).\n\nLRU Cache: Use a hash map + doubly linked list. Get and Put in O(1).\n- Get: Move accessed node to front (most recent)\n- Put: Add to front. If full, remove tail (least recent)\n\nLFU Cache: Track frequency counts + recency within same frequency.",
        "examples": [{"input": "LRU capacity=2: put(1,1), put(2,2), get(1), put(3,3)", "output": "After put(3,3): evicts key 2 (least recently used). Cache: {1:1, 3:3}"}],
    },
    "Design Patterns": {
        "desc": "Implement common software design patterns for object-oriented design.\n\nCreational: Singleton, Factory, Builder, Prototype\nStructural: Adapter, Decorator, Proxy, Facade\nBehavioral: Observer, Strategy, Command, Iterator\n\nDesign patterns provide reusable solutions to common software design problems.",
        "examples": [{"input": "Singleton pattern", "output": "Ensures only one instance of a class exists globally"}, {"input": "Observer pattern", "output": "Objects subscribe to events and get notified of changes"}],
    },
}


# ============================================================
# 3. SMART TITLE-BASED DESCRIPTION GENERATOR
# ============================================================

def generate_smart_description(title, category, sub_topic, difficulty):
    """
    Generate a problem-specific description with real examples.
    Uses multiple strategies to produce unique, meaningful content.
    """
    title_lower = title.lower().strip()

    # Strategy 1: Check KNOWN_PROBLEMS (exact and fuzzy match)
    if title_lower in KNOWN_PROBLEMS:
        kp = KNOWN_PROBLEMS[title_lower]
        return kp["desc"], kp.get("examples", []), kp.get("constraints", [])

    # Fuzzy match: strip trailing numbers/roman numerals
    import re
    clean_title = re.sub(r'\s*[-–]\s*(i+|[ivx]+|[0-9]+)\s*$', '', title_lower, flags=re.IGNORECASE).strip()
    if clean_title in KNOWN_PROBLEMS:
        kp = KNOWN_PROBLEMS[clean_title]
        return kp["desc"], kp.get("examples", []), kp.get("constraints", [])

    # Strategy 2: Check SUBTOPIC_GENERATORS for template
    if sub_topic in SUBTOPIC_GENERATORS:
        sg = SUBTOPIC_GENERATORS[sub_topic]
        # Build a problem-specific description using the title + subtopic template
        desc = f"{title}\n\n{sg['desc']}\n\nDifficulty: {difficulty} | Topic: {category} > {sub_topic}"
        examples = sg.get("examples", [])
        constraints = [f"Difficulty Level: {difficulty}"]
        return desc, examples, constraints

    # Strategy 3: Generate from title keywords with specific examples
    desc, examples = _generate_from_title_keywords(title, category, sub_topic, difficulty)
    constraints = [f"Difficulty Level: {difficulty}"]
    return desc, examples, constraints


def _generate_from_title_keywords(title, category, sub_topic, difficulty):
    """Generate descriptions and examples from analyzing the title."""
    title_lower = title.lower()

    # Build description parts
    parts = [f"{title}\n"]

    # Detect problem type from title and generate specific content
    if any(kw in title_lower for kw in ["reverse", "invert"]):
        parts.append("Reverse or invert the given data structure. Use the two-pointer technique for arrays/strings (swap from both ends) or pointer manipulation for linked lists.")
        examples = [{"input": "data = [1, 2, 3, 4, 5]", "output": "[5, 4, 3, 2, 1]"}]
    elif any(kw in title_lower for kw in ["sort", "arrange", "order"]):
        parts.append("Sort or arrange elements according to the specified criteria. Choose the appropriate algorithm based on constraints: comparison-based O(n log n) or linear-time for restricted ranges.")
        examples = [{"input": "arr = [5, 3, 8, 1, 2]", "output": "[1, 2, 3, 5, 8]"}]
    elif any(kw in title_lower for kw in ["search", "find", "look"]):
        parts.append("Search for a target element or condition. For sorted data, use binary search O(log n). For unsorted data, consider hash maps O(1) or linear scan O(n).")
        examples = [{"input": "arr = [1, 3, 5, 7, 9], target = 5", "output": "Found at index 2"}]
    elif any(kw in title_lower for kw in ["palindrom"]):
        parts.append("Check if the given data reads the same forwards and backwards. Use two pointers from both ends, comparing characters/elements as you move inward.")
        examples = [{"input": "s = 'racecar'", "output": "true (palindrome)"}, {"input": "s = 'hello'", "output": "false"}]
    elif any(kw in title_lower for kw in ["sum", "add", "plus"]):
        parts.append("Find elements that satisfy a sum condition. Consider hash maps for O(n) lookups, sorting + two pointers for O(n log n), or prefix sums for range queries.")
        examples = [{"input": "arr = [2, 7, 11, 15], target = 9", "output": "[0, 1] (indices of 2 and 7)"}]
    elif any(kw in title_lower for kw in ["maximum", "max", "largest", "greatest"]):
        parts.append("Find the maximum value or optimal solution. Consider greedy approaches, dynamic programming, or sliding window depending on the problem structure.")
        examples = [{"input": "arr = [3, 1, 4, 1, 5, 9, 2, 6]", "output": "Maximum: 9"}]
    elif any(kw in title_lower for kw in ["minimum", "min", "smallest", "least"]):
        parts.append("Find the minimum value or optimal minimum. Consider binary search on answer, BFS for shortest distances, or greedy approaches.")
        examples = [{"input": "arr = [3, 1, 4, 1, 5, 9, 2, 6]", "output": "Minimum: 1"}]
    elif any(kw in title_lower for kw in ["count", "number of", "how many"]):
        parts.append("Count the elements, occurrences, or combinations that satisfy the given condition. Use hash maps for frequency counting or DP for combinatorial counting.")
        examples = [{"input": "arr = [1, 2, 2, 3, 3, 3]", "output": "Count of 3: appears 3 times"}]
    elif any(kw in title_lower for kw in ["duplicate", "repeat"]):
        parts.append("Find or remove duplicate elements. Use hash sets for O(n) detection, sorting for O(n log n), or Floyd's algorithm for specific constraints.")
        examples = [{"input": "arr = [1, 3, 4, 2, 2]", "output": "Duplicate: 2"}]
    elif any(kw in title_lower for kw in ["merge"]):
        parts.append("Merge two or more sorted sequences into one sorted sequence. Use the two-pointer technique to compare elements from each sequence.")
        examples = [{"input": "arr1 = [1,3,5], arr2 = [2,4,6]", "output": "Merged: [1,2,3,4,5,6]"}]
    elif any(kw in title_lower for kw in ["rotate"]):
        parts.append("Rotate elements by k positions. For arrays, use the reversal algorithm. For matrices, use transpose + reverse.")
        examples = [{"input": "arr = [1,2,3,4,5], k = 2", "output": "[4,5,1,2,3] (right rotation)"}]
    elif any(kw in title_lower for kw in ["matrix", "grid"]):
        parts.append("Work with 2D grids/matrices. Handle row and column indices carefully. Common operations: traversal, search, rotation, and boundary management.")
        examples = [{"input": "matrix = [[1,2],[3,4]]", "output": "Process based on problem requirements"}]
    elif any(kw in title_lower for kw in ["tree", "node", "root", "leaf"]):
        parts.append("Work with tree data structures. Apply recursive traversal or level-order BFS. Think about the relationship between parent and child nodes.")
        examples = [{"input": "tree = [1, 2, 3, null, null, 4, 5]", "output": "Process based on traversal type"}]
    elif any(kw in title_lower for kw in ["graph", "path", "edge", "vertex"]):
        parts.append("Model the problem as a graph and apply BFS, DFS, or specialized algorithms based on the requirements.")
        examples = [{"input": "n = 4, edges = [[0,1],[1,2],[2,3]]", "output": "Process based on graph algorithm"}]
    elif any(kw in title_lower for kw in ["stack", "push", "pop"]):
        parts.append("Use a stack (LIFO) data structure. Stacks excel at problems involving matching brackets, expression evaluation, and tracking previous states.")
        examples = [{"input": "operations: push(1), push(2), pop()", "output": "Returns 2, stack = [1]"}]
    elif any(kw in title_lower for kw in ["queue", "deque"]):
        parts.append("Use a queue (FIFO) or deque for problems involving ordering, BFS traversal, or maintaining a sliding window.")
        examples = [{"input": "operations: enqueue(1), enqueue(2), dequeue()", "output": "Returns 1, queue = [2]"}]
    elif any(kw in title_lower for kw in ["linked list", "list node", "head"]):
        parts.append("Manipulate a linked list using pointer operations. Use dummy nodes to simplify edge cases and two pointers for traversal.")
        examples = [{"input": "list = 1 → 2 → 3 → 4", "output": "Modified list based on operation"}]
    elif any(kw in title_lower for kw in ["dp", "dynamic", "optimal", "ways", "distinct"]):
        parts.append("Apply dynamic programming by identifying overlapping subproblems. Define the state, write the recurrence relation, and choose between top-down (memoization) or bottom-up (tabulation).")
        examples = [{"input": "Problem-specific input", "output": "Optimal value or count"}]
    elif any(kw in title_lower for kw in ["subsequence"]):
        parts.append("Work with subsequences — elements in the same relative order but not necessarily contiguous. Use DP for optimal subsequences or recursion for generating all subsequences.")
        examples = [{"input": "arr = [1, 3, 5, 4, 7]", "output": "Longest increasing subsequence length: 4"}]
    elif any(kw in title_lower for kw in ["substring"]):
        parts.append("Work with substrings — contiguous sequences of characters. Apply sliding window or DP techniques for optimal substring problems.")
        examples = [{"input": "s = 'abcabcbb'", "output": "Longest substring without repeating: 'abc' (length 3)"}]
    elif any(kw in title_lower for kw in ["bit", "xor", "and", "binary"]):
        parts.append("Use bitwise operations for efficient computation. XOR for finding unique elements, AND/OR for masking, and bit shifts for multiplication/division by powers of 2.")
        examples = [{"input": "n = 5 (binary: 101)", "output": "Number of set bits: 2"}]
    elif any(kw in title_lower for kw in ["pattern", "print", "star", "triangle", "diamond"]):
        parts.append("Print the specified pattern using nested loops. Analyze each row to determine the number of spaces and characters to print.")
        examples = [{"input": "n = 4", "output": "Row 1: *\\nRow 2: **\\nRow 3: ***\\nRow 4: ****"}]
    elif any(kw in title_lower for kw in ["prime", "sieve"]):
        parts.append("Work with prime numbers using primality testing or the Sieve of Eratosthenes for efficient generation.")
        examples = [{"input": "n = 10", "output": "Primes: [2, 3, 5, 7]"}]
    elif any(kw in title_lower for kw in ["fibonacci", "fib"]):
        parts.append("Compute Fibonacci-like sequences where each term is the sum of previous terms. Use DP for O(n) time instead of exponential recursion.")
        examples = [{"input": "n = 7", "output": "F(7) = 13. Sequence: 0,1,1,2,3,5,8,13"}]
    elif any(kw in title_lower for kw in ["permut"]):
        parts.append("Generate all possible permutations (arrangements) of the given elements using backtracking or iterative approaches.")
        examples = [{"input": "arr = [1, 2, 3]", "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"}]
    elif any(kw in title_lower for kw in ["combin", "subset"]):
        parts.append("Generate all possible combinations or subsets. Use backtracking with include/exclude decisions at each step.")
        examples = [{"input": "arr = [1, 2, 3], choose 2", "output": "[[1,2],[1,3],[2,3]]"}]
    elif any(kw in title_lower for kw in ["interval", "overlap", "merge interval"]):
        parts.append("Process intervals (start, end pairs). Sort by start time, then merge overlapping intervals or find gaps.")
        examples = [{"input": "intervals = [[1,3],[2,6],[8,10],[15,18]]", "output": "Merged: [[1,6],[8,10],[15,18]]"}]
    elif any(kw in title_lower for kw in ["check", "valid", "verify", "is "]):
        parts.append("Validate whether the given input satisfies specific conditions or properties. Return true/false based on the validation rules.")
        examples = [{"input": "Input data to validate", "output": "true or false"}]
    elif any(kw in title_lower for kw in ["convert", "transform"]):
        parts.append("Convert or transform the given data from one format to another according to the specified rules.")
        examples = [{"input": "Source format data", "output": "Transformed result"}]
    elif any(kw in title_lower for kw in ["delete", "remove", "erase"]):
        parts.append("Remove elements or nodes that match the given criteria while maintaining the structure's integrity.")
        examples = [{"input": "data = [1, 2, 3, 2, 4], remove 2", "output": "[1, 3, 4]"}]
    elif any(kw in title_lower for kw in ["insert", "add"]):
        parts.append("Insert a new element at the specified position while maintaining the data structure's properties.")
        examples = [{"input": "data = [1, 3, 4], insert 2 at position 1", "output": "[1, 2, 3, 4]"}]
    elif any(kw in title_lower for kw in ["level order", "bfs", "breadth"]):
        parts.append("Traverse the data structure level by level using BFS (queue-based approach). Process all nodes at the current depth before moving to the next level.")
        examples = [{"input": "tree = [3, 9, 20, null, null, 15, 7]", "output": "Level order: [[3],[9,20],[15,7]]"}]
    elif any(kw in title_lower for kw in ["dfs", "depth first"]):
        parts.append("Explore the data structure using Depth-First Search. Go as deep as possible before backtracking. Use recursion or an explicit stack.")
        examples = [{"input": "graph with 5 nodes, start from 0", "output": "DFS order: [0, 1, 3, 2, 4]"}]
    else:
        # Generic but still meaningful
        parts.append(f"Solve this {difficulty.lower()}-level {category.lower()} problem. Analyze the input carefully, identify the appropriate algorithm or data structure, and implement an efficient solution.")
        examples = [{"input": f"Given input as specified", "output": f"Expected output"}, {"input": "Edge case input", "output": "Handle edge cases correctly"}]

    parts.append(f"\nDifficulty: {difficulty} | Topic: {category} > {sub_topic}")
    desc = "\n".join(parts)
    return desc, examples
