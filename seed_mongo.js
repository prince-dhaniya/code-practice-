/**
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

const problems = [
  {
    "title": "DSA Sheet",
    "topic": "Fundamentals",
    "sub_topic": "Core Subjects",
    "difficulty": "Easy",
    "link": "https://docs.google.com/spreadsheets/d/1spv5ZP7x1cZcFZXz2Fo_DAaM5jnlJDxWSziZ5ctUb2A/edit#gid=0"
  },
  {
    "title": "Puzzles",
    "topic": "Fundamentals",
    "sub_topic": "Core Subjects",
    "difficulty": "Easy",
    "link": "https://www.codingninjas.com/codestudio/guided-paths/top-150-interview-puzzles"
  },
  {
    "title": "Aptitude",
    "topic": "Fundamentals",
    "sub_topic": "Core Subjects",
    "difficulty": "Easy",
    "link": "https://www.codingninjas.com/codestudio/guided-paths/aptitude-preparation"
  },
  {
    "title": "SQL Leetcode",
    "topic": "Fundamentals",
    "sub_topic": "Core Subjects",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problemset/database/"
  },
  {
    "title": "Basic Problems Practice",
    "topic": "Fundamentals",
    "sub_topic": "Getting Started",
    "difficulty": "Easy",
    "link": "https://www.hackerrank.com/contests/module-1-java-dsa-class-challenges/challenges"
  },
  {
    "title": "Pointers in C++",
    "topic": "Fundamentals",
    "sub_topic": "C++ Programming Basics",
    "difficulty": "Easy",
    "link": "https://docs.google.com/spreadsheets/d/1spv5ZP7x1cZcFZXz2Fo_DAaM5jnlJDxWSziZ5ctUb2A/edit#gid=1079816901"
  },
  {
    "title": "Iterators in C++",
    "topic": "Fundamentals",
    "sub_topic": "STL C++",
    "difficulty": "Easy",
    "link": "https://www.geeksforgeeks.org/iterators-c-stl/"
  },
  {
    "title": "Inbuilt Algorithms in C++",
    "topic": "Fundamentals",
    "sub_topic": "STL C++",
    "difficulty": "Easy",
    "link": "https://www.geeksforgeeks.org/c-magicians-stl-algorithms/"
  },
  {
    "title": "Comparator in C++",
    "topic": "Fundamentals",
    "sub_topic": "STL C++",
    "difficulty": "Easy",
    "link": "https://www.geeksforgeeks.org/sorting-a-vector-in-c/"
  },
  {
    "title": "Tuples in C++",
    "topic": "Fundamentals",
    "sub_topic": "STL C++",
    "difficulty": "Easy",
    "link": "https://www.geeksforgeeks.org/tuples-in-c/"
  },
  {
    "title": "String Tokenizer in C++",
    "topic": "Fundamentals",
    "sub_topic": "STL C++",
    "difficulty": "Easy",
    "link": "https://www.geeksforgeeks.org/tokenizing-a-string-cpp/"
  },
  {
    "title": "Custom Hash Function",
    "topic": "Fundamentals",
    "sub_topic": "STL C++",
    "difficulty": "Easy",
    "link": "https://www.geeksforgeeks.org/how-to-create-an-unordered_map-of-user-defined-class-in-cpp/"
  },
  {
    "title": "Custom Priority Queue",
    "topic": "Fundamentals",
    "sub_topic": "STL C++",
    "difficulty": "Easy",
    "link": "https://www.geeksforgeeks.org/stl-priority-queue-for-structure-or-class/"
  },
  {
    "title": "Sets in C++",
    "topic": "Fundamentals",
    "sub_topic": "STL C++",
    "difficulty": "Easy",
    "link": "https://www.geeksforgeeks.org/difference-between-set-multiset-unordered_set-unordered_multiset-in-cpp/"
  },
  {
    "title": "Bitset in C++",
    "topic": "Fundamentals",
    "sub_topic": "STL C++",
    "difficulty": "Easy",
    "link": "https://www.geeksforgeeks.org/c-bitset-and-its-application/"
  },
  {
    "title": "Hello World - I",
    "topic": "Fundamentals",
    "sub_topic": "Basic Java Problems",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/java-hello-world4004/1"
  },
  {
    "title": "Hello World - II",
    "topic": "Fundamentals",
    "sub_topic": "Basic Java Problems",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/the-new-line-java/1"
  },
  {
    "title": "Java Comments",
    "topic": "Fundamentals",
    "sub_topic": "Basic Java Problems",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/learn-to-comment-java/1"
  },
  {
    "title": "Java Datatypes",
    "topic": "Fundamentals",
    "sub_topic": "Basic Java Problems",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/data-types-java/1"
  },
  {
    "title": "Java Inputs",
    "topic": "Fundamentals",
    "sub_topic": "Basic Java Problems",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/java-basic-data-types0041/1"
  },
  {
    "title": "Next vs Nextline",
    "topic": "Fundamentals",
    "sub_topic": "Basic Java Problems",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/nextline-and-next/1"
  },
  {
    "title": "Concatenate Strings",
    "topic": "Fundamentals",
    "sub_topic": "Basic Java Problems",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/java-strings-set-15112/1"
  },
  {
    "title": "Java If Else",
    "topic": "Fundamentals",
    "sub_topic": "Basic Java Problems",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/java-if-else-decision-making0924/1"
  },
  {
    "title": "Check Vowel",
    "topic": "Fundamentals",
    "sub_topic": "Basic Java Problems",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/vowel-or-not0831/1"
  },
  {
    "title": "Change Case of String",
    "topic": "Fundamentals",
    "sub_topic": "Basic Java Problems",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/change-the-string3541/1"
  },
  {
    "title": "Check Even Odd",
    "topic": "Fundamentals",
    "sub_topic": "Basic Java Problems",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/even-odd/1"
  },
  {
    "title": "Java Switch Case",
    "topic": "Fundamentals",
    "sub_topic": "Basic Java Problems",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/java-switch-case-statement3529/1"
  },
  {
    "title": "Java Loops",
    "topic": "Fundamentals",
    "sub_topic": "Basic Java Problems",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/java-loops-set-11726/1"
  },
  {
    "title": "Print Increasing",
    "topic": "Fundamentals",
    "sub_topic": "Loops Basics",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-1587115620/1#"
  },
  {
    "title": "Print Decreasing",
    "topic": "Fundamentals",
    "sub_topic": "Loops Basics",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/print-n-to-1-without-loop/1#"
  },
  {
    "title": "Sum of Series",
    "topic": "Fundamentals",
    "sub_topic": "Loops Basics",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/sum-of-first-n-terms5843/1"
  },
  {
    "title": "Sum of AP Series",
    "topic": "Fundamentals",
    "sub_topic": "Loops Basics",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/sum-of-ap-series4512/1"
  },
  {
    "title": "Sum of GP Series",
    "topic": "Fundamentals",
    "sub_topic": "Loops Basics",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/sum-of-gp2120/1"
  },
  {
    "title": "Factorial Problem",
    "topic": "Fundamentals",
    "sub_topic": "Loops Basics",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/factorial5739/1#"
  },
  {
    "title": "Power Function",
    "topic": "Fundamentals",
    "sub_topic": "Loops Basics",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/powx-n/description/"
  },
  {
    "title": "Check Power of 2",
    "topic": "Fundamentals",
    "sub_topic": "Loops Basics",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/power-of-2-1587115620/1"
  },
  {
    "title": "Nth Fibonacci",
    "topic": "Fundamentals",
    "sub_topic": "Loops Basics",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/fibonacci-number/description/"
  },
  {
    "title": "Nth Tribonacci",
    "topic": "Fundamentals",
    "sub_topic": "Loops Basics",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/n-th-tribonacci-number/description/"
  },
  {
    "title": "Print A to Z",
    "topic": "Fundamentals",
    "sub_topic": "Loops Basics",
    "difficulty": "Easy",
    "link": "https://www.geeksforgeeks.org/program-to-print-alphabets-from-a-to-z-using-loop/"
  },
  {
    "title": "Fizz Buzz",
    "topic": "Fundamentals",
    "sub_topic": "Loops Basics",
    "difficulty": "Easy",
    "link": "https://www.hackerrank.com/challenges/fizzbuzz/problem"
  },
  {
    "title": "Count Digits of Number",
    "topic": "Fundamentals",
    "sub_topic": "Digit Traversals",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/count-digits5716/1"
  },
  {
    "title": "Reverse Integer",
    "topic": "Fundamentals",
    "sub_topic": "Digit Traversals",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/reverse-integer/"
  },
  {
    "title": "Double Reversal",
    "topic": "Fundamentals",
    "sub_topic": "Digit Traversals",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/a-number-after-a-double-reversal/"
  },
  {
    "title": "Sum & Product of Digits",
    "topic": "Fundamentals",
    "sub_topic": "Digit Traversals",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/"
  },
  {
    "title": "Self Dividing Numbers",
    "topic": "Fundamentals",
    "sub_topic": "Digit Traversals",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/self-dividing-numbers/"
  },
  {
    "title": "Amstrong Number",
    "topic": "Fundamentals",
    "sub_topic": "Digit Traversals",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/armstrong-numbers2727/1"
  },
  {
    "title": "Rotate Digits of Number",
    "topic": "Fundamentals",
    "sub_topic": "Digit Traversals",
    "difficulty": "Easy",
    "link": "https://pepcoding.com/resources/online-java-foundation/getting-started/rotate-a-number-official/ojquestion"
  },
  {
    "title": "Rotate Digits of Number",
    "topic": "Fundamentals",
    "sub_topic": "Digit Traversals",
    "difficulty": "Easy",
    "link": "https://www.geeksforgeeks.org/rotate-digits-of-a-given-number-by-k/"
  },
  {
    "title": "Inverse of Number",
    "topic": "Fundamentals",
    "sub_topic": "Digit Traversals",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/getting-started/inverse-of-a-number-official/ojquestion"
  },
  {
    "title": "Stones Remove Game",
    "topic": "Mathematics",
    "sub_topic": "Basic Math Problems",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/nim-game/"
  },
  {
    "title": "Divisor Game",
    "topic": "Mathematics",
    "sub_topic": "Basic Math Problems",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/divisor-game/"
  },
  {
    "title": "Digital Root",
    "topic": "Mathematics",
    "sub_topic": "Basic Math Problems",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/add-digits/"
  },
  {
    "title": "Bulb Switcher",
    "topic": "Mathematics",
    "sub_topic": "Basic Math Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/bulb-switcher/"
  },
  {
    "title": "Tournament Matches",
    "topic": "Mathematics",
    "sub_topic": "Basic Math Problems",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/count-of-matches-in-tournament/"
  },
  {
    "title": "Count Odd In Range",
    "topic": "Mathematics",
    "sub_topic": "Basic Math Problems",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/"
  },
  {
    "title": "Max Water Bottles",
    "topic": "Mathematics",
    "sub_topic": "Basic Math Problems",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/water-bottles/"
  },
  {
    "title": "Pythagorean Triplets",
    "topic": "Mathematics",
    "sub_topic": "Basic Math Problems",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/count-square-sum-triples/"
  },
  {
    "title": "Factorial Trailing 0s",
    "topic": "Mathematics",
    "sub_topic": "Basic Math Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/factorial-trailing-zeroes/"
  },
  {
    "title": "Check Ugly Number",
    "topic": "Mathematics",
    "sub_topic": "Basic Math Problems",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/ugly-number/"
  },
  {
    "title": "Nth Term of GP",
    "topic": "Mathematics",
    "sub_topic": "Basic Math Problems",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/series-gp4646/1"
  },
  {
    "title": "Days Between Dates",
    "topic": "Mathematics",
    "sub_topic": "Basic Math Problems",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/number-of-days-between-two-dates/"
  },
  {
    "title": "Day of the Year",
    "topic": "Mathematics",
    "sub_topic": "Basic Math Problems",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/day-of-the-year/"
  },
  {
    "title": "Day of the Week",
    "topic": "Mathematics",
    "sub_topic": "Basic Math Problems",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/day-of-the-week/"
  },
  {
    "title": "Next Closest Time",
    "topic": "Mathematics",
    "sub_topic": "Basic Math Problems",
    "difficulty": "Easy",
    "link": "https://www.codingninjas.com/codestudio/problems/ninja-s-watch_1264948"
  },
  {
    "title": "Pattern Printing",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/"
  },
  {
    "title": "Stars Pattern",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/pattern-printing1347/1"
  },
  {
    "title": "Lower RIght Triangle",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/patterns/pattern-type-1-official/ojquestion"
  },
  {
    "title": "Upper Left Triangle",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/patterns/pattern-type-2-official/ojquestion"
  },
  {
    "title": "Lower Right Triangle",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/patterns/pattern-type-3-official/ojquestion"
  },
  {
    "title": "Upper Right Triangle",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://www.codingninjas.com/codestudio/problems/give-me-triangle_893275"
  },
  {
    "title": "Diamond Pattern",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://www.codingninjas.com/codestudio/problems/diamond-of-stars_893297"
  },
  {
    "title": "Hollow Diamond",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/patterns/design-pattern-6-official/ojquestion"
  },
  {
    "title": "Diamond Border",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/patterns/design-pattern-10-official/ojquestion"
  },
  {
    "title": "Backward Slash",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/patterns/design-pattern-7-official/ojquestion"
  },
  {
    "title": "Forward Slash",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/patterns/design-pattern-8-official/ojquestion"
  },
  {
    "title": "Cross of Stars",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/patterns/design-pattern-9-official/ojquestion"
  },
  {
    "title": "Cross of Numbers",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://www.codingninjas.com/codestudio/problems/number-x_893302"
  },
  {
    "title": "Table of Number",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://pepcoding.com/resources/online-java-foundation/patterns/design-pattern-14-official/ojquestion"
  },
  {
    "title": "Pattern of Numbers - I",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://www.codingninjas.com/codestudio/problems/number-pattern_893191"
  },
  {
    "title": "Pattern of Numbers - II",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://pepcoding.com/resources/online-java-foundation/patterns/design-pattern-15-official/ojquestion"
  },
  {
    "title": "Pattern of Numbers - III",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://pepcoding.com/resources/online-java-foundation/patterns/design-pattern-16-official/ojquestion"
  },
  {
    "title": "Fibonacci Pattern",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/patterns/design-pattern-12-official/ojquestion"
  },
  {
    "title": "Mirror Image Triangle",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://www.codingninjas.com/codestudio/problems/mirror-image-of-triangle_893344"
  },
  {
    "title": "Arrow Pattern",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/patterns/design-pattern-17-official/ojquestion"
  },
  {
    "title": "Empty Hour Glass",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/patterns/design-pattern-18-official/ojquestion"
  },
  {
    "title": "Swastik Pattern",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/patterns/design-pattern-19-official/ojquestion"
  },
  {
    "title": "W Pattern",
    "topic": "Fundamentals",
    "sub_topic": "Pattern Printing",
    "difficulty": "Easy",
    "link": "https://pepcoding.com/resources/online-java-foundation/patterns/design-pattern-20-official/ojquestion"
  },
  {
    "title": "Complexity Practice",
    "topic": "Fundamentals",
    "sub_topic": "Time & Space Complexity",
    "difficulty": "Easy",
    "link": "https://www.interviewbit.com/courses/programming/time-complexity/"
  },
  {
    "title": "Arrays and Strings Practice",
    "topic": "Arrays",
    "sub_topic": "Arrays & Strings",
    "difficulty": "Medium",
    "link": "https://takeuforward.org/interviews/tcs-nqt-coding-sheet-tcs-coding-questions/"
  },
  {
    "title": "Reverse Array",
    "topic": "Arrays",
    "sub_topic": "Reverse Array or String",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/reverse-an-array/0"
  },
  {
    "title": "Left Rotate Array",
    "topic": "Arrays",
    "sub_topic": "Reverse Array or String",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/rotate-array-by-n-elements/0"
  },
  {
    "title": "Right Rotate Array",
    "topic": "Arrays",
    "sub_topic": "Reverse Array or String",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/rotate-array/"
  },
  {
    "title": "Reverse String",
    "topic": "Arrays",
    "sub_topic": "Reverse Array or String",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/reverse-string/"
  },
  {
    "title": "Reverse String Range",
    "topic": "Arrays",
    "sub_topic": "Reverse Array or String",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/reverse-string-ii/"
  },
  {
    "title": "Reverse Words - I",
    "topic": "Arrays",
    "sub_topic": "Reverse Array or String",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/reverse-words-in-a-string/"
  },
  {
    "title": "Reverse Words - II",
    "topic": "Arrays",
    "sub_topic": "Reverse Array or String",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/reverse-words-in-a-string-iii/"
  },
  {
    "title": "Reverse Vowels",
    "topic": "Arrays",
    "sub_topic": "Reverse Array or String",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/reverse-vowels-of-a-string/"
  },
  {
    "title": "Palindromic String",
    "topic": "Arrays",
    "sub_topic": "Reverse Array or String",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/valid-palindrome/"
  },
  {
    "title": "Palindromic Integer",
    "topic": "Arrays",
    "sub_topic": "Reverse Array or String",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/palindrome-number/"
  },
  {
    "title": "Palindrome After Deletion",
    "topic": "Arrays",
    "sub_topic": "Reverse Array or String",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/valid-palindrome-ii/"
  },
  {
    "title": "String to Integer",
    "topic": "Strings",
    "sub_topic": "String to Integer",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/string-to-integer-atoi/"
  },
  {
    "title": "Valid Number",
    "topic": "Strings",
    "sub_topic": "String to Integer",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/valid-number/"
  },
  {
    "title": "Excel Column No to Title",
    "topic": "Strings",
    "sub_topic": "String to Integer",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/excel-sheet-column-title/"
  },
  {
    "title": "Excel Column Title to No",
    "topic": "Strings",
    "sub_topic": "String to Integer",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/excel-sheet-column-number/"
  },
  {
    "title": "Linear Search",
    "topic": "Arrays",
    "sub_topic": "Linear Traversal",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1"
  },
  {
    "title": "Maximum & Minimum",
    "topic": "Arrays",
    "sub_topic": "Linear Traversal",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/max-min-05542f2f-69aa-4253-9cc7-84eb7bf739c4/"
  },
  {
    "title": "Maximum & Minimum",
    "topic": "Arrays",
    "sub_topic": "Linear Traversal",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/"
  },
  {
    "title": "Smallest Range",
    "topic": "Arrays",
    "sub_topic": "Linear Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/smallest-range-i/"
  },
  {
    "title": "Second Largest",
    "topic": "Arrays",
    "sub_topic": "Linear Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/"
  },
  {
    "title": "Valid Mountain Array",
    "topic": "Arrays",
    "sub_topic": "Linear Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/valid-mountain-array/"
  },
  {
    "title": "Is Array Sorted Rotated",
    "topic": "Arrays",
    "sub_topic": "Linear Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/"
  },
  {
    "title": "Distribute Candies",
    "topic": "Arrays",
    "sub_topic": "Linear Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/distribute-candies-to-people/"
  },
  {
    "title": "Count Equal Pairs",
    "topic": "Arrays",
    "sub_topic": "Linear Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/number-of-good-pairs/"
  },
  {
    "title": "Range Addition",
    "topic": "Arrays",
    "sub_topic": "Linear Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/range-addition-ii/"
  },
  {
    "title": "Visiting All Points",
    "topic": "Arrays",
    "sub_topic": "Linear Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-time-visiting-all-points/"
  },
  {
    "title": "Subarray or Substrings",
    "topic": "Arrays",
    "sub_topic": "Linear Traversal",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/all-substrings_1262347"
  },
  {
    "title": "Sum of Odd Subarrays",
    "topic": "Arrays",
    "sub_topic": "Linear Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sum-of-all-odd-length-subarrays/"
  },
  {
    "title": "Celebrity Problem - I",
    "topic": "Arrays",
    "sub_topic": "Linear Traversal",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1"
  },
  {
    "title": "Celebrity Problem - II",
    "topic": "Arrays",
    "sub_topic": "Linear Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-the-town-judge/"
  },
  {
    "title": "Non Decreasing Array",
    "topic": "Arrays",
    "sub_topic": "Linear Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/non-decreasing-array/"
  },
  {
    "title": "Target Modulo Sum Pair",
    "topic": "Arrays",
    "sub_topic": "Linear Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/"
  },
  {
    "title": "Running Sum",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/running-sum-of-1d-array/"
  },
  {
    "title": "Highest Altitude Point",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-the-highest-altitude/"
  },
  {
    "title": "Positive Step Sum",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/"
  },
  {
    "title": "Leaders in Array",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1"
  },
  {
    "title": "Equillibrium Point",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-pivot-index/"
  },
  {
    "title": "Balanced Array",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/ways-to-make-a-fair-array/"
  },
  {
    "title": "Product Array Puzzle",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/product-of-array-except-self/"
  },
  {
    "title": "Max Closest Person",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximize-distance-to-closest-person/"
  },
  {
    "title": "Sum of Even Nos Queries",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sum-of-even-numbers-after-queries/"
  },
  {
    "title": "Prefix Aligned Binary String",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/"
  },
  {
    "title": "Shifting Letters",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/shifting-letters/"
  },
  {
    "title": "Polynomial Evaluation",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/value-of-polynomial2413/1"
  },
  {
    "title": "Polynomial Evaluation",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/horners-method-polynomial-evaluation/"
  },
  {
    "title": "Prefix Sum Array",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/"
  },
  {
    "title": "Range Sum Query 1D",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/range-sum-query-immutable/"
  },
  {
    "title": "Range Sum Query 2D",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/range-sum-query-2d-immutable/"
  },
  {
    "title": "Difference Array",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/difference-array-range-update-query-o1/"
  },
  {
    "title": "Range Update Queries - I",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://www.spoj.com/problems/UPDATEIT/"
  },
  {
    "title": "Range Update Queries - II",
    "topic": "Arrays",
    "sub_topic": "Prefix Sum Array",
    "difficulty": "Medium",
    "link": "https://cses.fi/problemset/task/1651"
  },
  {
    "title": "Print Matrix Row Wise",
    "topic": "Arrays",
    "sub_topic": "Basic Matrix Traversal",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/two-dimensional-world/0"
  },
  {
    "title": "Print Matix Column Wise",
    "topic": "Arrays",
    "sub_topic": "Basic Matrix Traversal",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/library/row-wise-vs-column-wise-traversal-of-a-matrix"
  },
  {
    "title": "Wave or Snake Traversal",
    "topic": "Arrays",
    "sub_topic": "Basic Matrix Traversal",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/print-matrix-in-snake-pattern-1587115621/1"
  },
  {
    "title": "Reverse Wave Traversal",
    "topic": "Arrays",
    "sub_topic": "Basic Matrix Traversal",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/print-matrix-reverse-wave-form/"
  },
  {
    "title": "Searching in Matrix",
    "topic": "Arrays",
    "sub_topic": "Basic Matrix Traversal",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/searching-algorithms-for-a-2d-arrays-matrix/"
  },
  {
    "title": "Exit Point in Matrix",
    "topic": "Arrays",
    "sub_topic": "Basic Matrix Traversal",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/exit-point-in-a-matrix0905/1"
  },
  {
    "title": "Convert 1D Array to 2D",
    "topic": "Arrays",
    "sub_topic": "Basic Matrix Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/convert-1d-array-into-2d-array/"
  },
  {
    "title": "Shift 2D Grid",
    "topic": "Arrays",
    "sub_topic": "Basic Matrix Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/shift-2d-grid/"
  },
  {
    "title": "Reshape Matrix",
    "topic": "Arrays",
    "sub_topic": "Basic Matrix Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/reshape-the-matrix/"
  },
  {
    "title": "Identical Matrices",
    "topic": "General",
    "sub_topic": "Two Matrices",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/identical-matrices1042/1"
  },
  {
    "title": "Add Matrices",
    "topic": "General",
    "sub_topic": "Two Matrices",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/addition-of-two-square-matrices4916/1"
  },
  {
    "title": "Multiply Matrices",
    "topic": "General",
    "sub_topic": "Two Matrices",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/multiply-matrices/1"
  },
  {
    "title": "Transpose Matrix",
    "topic": "Arrays",
    "sub_topic": "Rotate Matrix",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/transpose-matrix/"
  },
  {
    "title": "Rotate 90D Clockwise",
    "topic": "Arrays",
    "sub_topic": "Rotate Matrix",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/rotate-image/"
  },
  {
    "title": "Rotate 90D Anticlockwise",
    "topic": "Arrays",
    "sub_topic": "Rotate Matrix",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/rotate-by-90-degree-1587115621/1"
  },
  {
    "title": "Rotate 180D Clockwise",
    "topic": "Arrays",
    "sub_topic": "Rotate Matrix",
    "difficulty": "Medium",
    "link": "https://www.techiedelight.com/inplace-rotate-matrix-180-degrees/"
  },
  {
    "title": "Rotate 180D Anticlockwize",
    "topic": "Arrays",
    "sub_topic": "Rotate Matrix",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/c-matrix-rotation-by-180-degree0745/1"
  },
  {
    "title": "Equal Matrix Rotations",
    "topic": "Arrays",
    "sub_topic": "Rotate Matrix",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/"
  },
  {
    "title": "Diagonal Traversal - BL to TR",
    "topic": "Arrays",
    "sub_topic": "Diagonal Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/diagonal-traverse-ii/"
  },
  {
    "title": "Diagonal Traversal - Zig Zag",
    "topic": "Arrays",
    "sub_topic": "Diagonal Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/diagonal-traverse/"
  },
  {
    "title": "Diagonal Traversal - TL to BR",
    "topic": "Arrays",
    "sub_topic": "Diagonal Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sort-the-matrix-diagonally/"
  },
  {
    "title": "Matrix Diagonal Sum",
    "topic": "Arrays",
    "sub_topic": "Diagonal Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/matrix-diagonal-sum/"
  },
  {
    "title": "Toeplitz Matrix",
    "topic": "Arrays",
    "sub_topic": "Diagonal Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/toeplitz-matrix/"
  },
  {
    "title": "Check X Matrix",
    "topic": "Arrays",
    "sub_topic": "Diagonal Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/check-if-matrix-is-x-matrix/"
  },
  {
    "title": "Upper Lower Triangle",
    "topic": "Arrays",
    "sub_topic": "Diagonal Traversal",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/sum-of-upper-and-lower-triangles-1587115621/1"
  },
  {
    "title": "Saddle Point in Matrix",
    "topic": "Arrays",
    "sub_topic": "Rows & Columns",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/lucky-numbers-in-a-matrix/"
  },
  {
    "title": "Set Matrix Zeros",
    "topic": "Arrays",
    "sub_topic": "Rows & Columns",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/set-matrix-zeroes/"
  },
  {
    "title": "Valid Tic Tac Toe State",
    "topic": "Arrays",
    "sub_topic": "Rows & Columns",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/valid-tic-tac-toe-state/"
  },
  {
    "title": "Winner of Tic Tac Toe",
    "topic": "Arrays",
    "sub_topic": "Rows & Columns",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/"
  },
  {
    "title": "Equal Row Column Sum",
    "topic": "Arrays",
    "sub_topic": "Rows & Columns",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/sums-of-i-th-row-and-i-th-column3054/1"
  },
  {
    "title": "Rows Columns Valid Matrix",
    "topic": "Arrays",
    "sub_topic": "Rows & Columns",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/"
  },
  {
    "title": "Game of Life",
    "topic": "Arrays",
    "sub_topic": "Rows & Columns",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/game-of-life/"
  },
  {
    "title": "Boundary Traversal",
    "topic": "Arrays",
    "sub_topic": "Spiral Matrix Traversal",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/boundary-elements-of-matrix1102/1"
  },
  {
    "title": "Spiral Matrix Traversal",
    "topic": "Arrays",
    "sub_topic": "Spiral Matrix Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/spiral-matrix/"
  },
  {
    "title": "Fill Matrix in Spiral Order",
    "topic": "Arrays",
    "sub_topic": "Spiral Matrix Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/spiral-matrix-ii/"
  },
  {
    "title": "Reverse Spiral Matrix",
    "topic": "Arrays",
    "sub_topic": "Spiral Matrix Traversal",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/reverse-spiral-form-of-matrix4033/1"
  },
  {
    "title": "Spiral Matrix - Starting Pt",
    "topic": "Arrays",
    "sub_topic": "Spiral Matrix Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/spiral-matrix-iii/"
  },
  {
    "title": "Shell Rotate Matrix",
    "topic": "Arrays",
    "sub_topic": "Spiral Matrix Traversal",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/rotate-matrix-elements-clockwise2336/1"
  },
  {
    "title": "Shell Rotate Matrix",
    "topic": "Arrays",
    "sub_topic": "Spiral Matrix Traversal",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/library/rotate-each-ring-of-matrix-clockwise-by-k-elements"
  },
  {
    "title": "Plus One to Array",
    "topic": "Arrays",
    "sub_topic": "Big Integers as Arrays",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/plus-one/"
  },
  {
    "title": "Plus K to Array",
    "topic": "Arrays",
    "sub_topic": "Big Integers as Arrays",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/add-to-array-form-of-integer/"
  },
  {
    "title": "Add Two Strings",
    "topic": "Arrays",
    "sub_topic": "Big Integers as Arrays",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/add-strings/"
  },
  {
    "title": "Subtract Two Arrays",
    "topic": "Arrays",
    "sub_topic": "Big Integers as Arrays",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/function-and-arrays/difference-of-two-arrays-official/ojquestion"
  },
  {
    "title": "Subtract Two Arrays",
    "topic": "Arrays",
    "sub_topic": "Big Integers as Arrays",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/difference-of-two-large-numbers/"
  },
  {
    "title": "Compare Two Strings",
    "topic": "Arrays",
    "sub_topic": "Big Integers as Arrays",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/compare-two-large-numbers3413/1"
  },
  {
    "title": "Multiply Two Strings",
    "topic": "Arrays",
    "sub_topic": "Big Integers as Arrays",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/multiply-strings/"
  },
  {
    "title": "Large Factorial",
    "topic": "Arrays",
    "sub_topic": "Big Integers as Arrays",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/factorials-of-large-numbers2508/1"
  },
  {
    "title": "Multiply Polynomials",
    "topic": "Arrays",
    "sub_topic": "Big Integers as Arrays",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/multiply-two-polynomals0721/1"
  },
  {
    "title": "Sparse Matrix",
    "topic": "Arrays",
    "sub_topic": "Big Integers as Arrays",
    "difficulty": "Medium",
    "link": "https://www.javatpoint.com/sparse-matrix"
  },
  {
    "title": "Big Integers Java",
    "topic": "Arrays",
    "sub_topic": "Big Integers as Arrays",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/biginteger-class-in-java/"
  },
  {
    "title": "Majority Element - I",
    "topic": "Arrays",
    "sub_topic": "Majority Element",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/majority-element/"
  },
  {
    "title": "Majority Element - II",
    "topic": "Arrays",
    "sub_topic": "Majority Element",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/majority-element-ii/"
  },
  {
    "title": "Majority Element - III",
    "topic": "Arrays",
    "sub_topic": "Majority Element",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/count-element-occurences/1"
  },
  {
    "title": "Missing Number - I",
    "topic": "Arrays",
    "sub_topic": "Missing & Duplicate",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/missing-number/"
  },
  {
    "title": "Missing Number - II",
    "topic": "Arrays",
    "sub_topic": "Missing & Duplicate",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/"
  },
  {
    "title": "First Missing Positive",
    "topic": "Arrays",
    "sub_topic": "Missing & Duplicate",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/first-missing-positive/"
  },
  {
    "title": "Repeating Element - I",
    "topic": "Arrays",
    "sub_topic": "Missing & Duplicate",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-the-duplicate-number/"
  },
  {
    "title": "Repeating Element - II",
    "topic": "Arrays",
    "sub_topic": "Missing & Duplicate",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/find-duplicates-in-an-array/1"
  },
  {
    "title": "Repeating Element - III",
    "topic": "Arrays",
    "sub_topic": "Missing & Duplicate",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-all-duplicates-in-an-array/"
  },
  {
    "title": "Max Repeating Element",
    "topic": "Arrays",
    "sub_topic": "Missing & Duplicate",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/maximum-repeating-number4858/1"
  },
  {
    "title": "Missing & Repeating",
    "topic": "Arrays",
    "sub_topic": "Missing & Duplicate",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/set-mismatch/"
  },
  {
    "title": "Is Subsequence",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/is-subsequence/"
  },
  {
    "title": "Largest Word in Dictionary",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/find-largest-word-in-dictionary2430/1"
  },
  {
    "title": "Valid Anagram",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/valid-anagram/"
  },
  {
    "title": "K Anagrams",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/check-if-two-strings-are-k-anagrams-or-not/1"
  },
  {
    "title": "Anagram Substrings",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-all-anagrams-in-a-string/"
  },
  {
    "title": "Anagram Mappings",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/anagram-mapping_3125901"
  },
  {
    "title": "Group Anagrams",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/group-anagrams/"
  },
  {
    "title": "Group Shifted Strings",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/hashmap-and-heaps/group-shifted-string-official/ojquestion"
  },
  {
    "title": "Group Shifted Strings",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/group-shifted-string/"
  },
  {
    "title": "Find & Replace Pattern",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-and-replace-pattern/"
  },
  {
    "title": "Odd - Even Anagrams",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/groups-of-special-equivalent-strings/"
  },
  {
    "title": "Word Subsets",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/word-subsets/"
  },
  {
    "title": "Isomorphic Strings - I",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/isomorphic-strings/"
  },
  {
    "title": "Isomorphic Strings - II",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/match-specific-pattern/1"
  },
  {
    "title": "Word Pattern - I",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/word-pattern/"
  },
  {
    "title": "Word Pattern - II",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/match-a-pattern-and-string-without-using-regular-expressions/"
  },
  {
    "title": "Camelcase Matching",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/camelcase-matching/"
  },
  {
    "title": "First Unique Character",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/first-unique-character-in-a-string/"
  },
  {
    "title": "Remove Duplicate Chars",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/remove-all-duplicates-from-a-given-string4321/1"
  },
  {
    "title": "First Repeated Character",
    "topic": "Strings",
    "sub_topic": "String Matching Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/repeated-character2058/1"
  },
  {
    "title": "Run Length Encoding",
    "topic": "Strings",
    "sub_topic": "More String Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/run-length-encoding/1"
  },
  {
    "title": "String Compression",
    "topic": "Strings",
    "sub_topic": "More String Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/string-compression/"
  },
  {
    "title": "Compare Version Nos",
    "topic": "Strings",
    "sub_topic": "More String Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/compare-version-numbers/"
  },
  {
    "title": "Zig Zag Conversion",
    "topic": "Strings",
    "sub_topic": "More String Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/zigzag-conversion/"
  },
  {
    "title": "Validate IP Address",
    "topic": "Strings",
    "sub_topic": "More String Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/validate-ip-address/"
  },
  {
    "title": "Maximum Number Swap",
    "topic": "Strings",
    "sub_topic": "More String Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-swap/"
  },
  {
    "title": "Largest Odd Substring",
    "topic": "Strings",
    "sub_topic": "More String Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/largest-odd-number-in-string/"
  },
  {
    "title": "Beauty of All Substrings",
    "topic": "Strings",
    "sub_topic": "More String Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sum-of-beauty-of-all-substrings/"
  },
  {
    "title": "Pretty JSON",
    "topic": "Strings",
    "sub_topic": "More String Problems",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/pretty-json/"
  },
  {
    "title": "Print Decreasing",
    "topic": "Recursion",
    "sub_topic": "Recursion Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/print-n-to-1-without-loop/1"
  },
  {
    "title": "Print Increasing",
    "topic": "Recursion",
    "sub_topic": "Recursion Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-1587115620/1"
  },
  {
    "title": "Print Increasing Decreasing",
    "topic": "Recursion",
    "sub_topic": "Recursion Basics",
    "difficulty": "Medium",
    "link": "https://pepcoding.com/resources/online-java-foundation/introduction-to-recursion/print-increasing-decreasing-official/ojquestion"
  },
  {
    "title": "Factorial",
    "topic": "Recursion",
    "sub_topic": "Recursion Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/factorial5739/1"
  },
  {
    "title": "Print ZigZag",
    "topic": "Recursion",
    "sub_topic": "Recursion Basics",
    "difficulty": "Medium",
    "link": "https://pepcoding.com/resources/online-java-foundation/introduction-to-recursion/print-zig-zag-official/ojquestion"
  },
  {
    "title": "Tower of Hanoi",
    "topic": "Recursion",
    "sub_topic": "Recursion Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/tower-of-hanoi-1587115621/1"
  },
  {
    "title": "Exponentiation",
    "topic": "Recursion",
    "sub_topic": "Recursion Basics",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/powx-n/"
  },
  {
    "title": "Print Array Left to Right",
    "topic": "Recursion",
    "sub_topic": "Recursion Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/print-elements-of-array4910/1"
  },
  {
    "title": "Print Array Right to Left",
    "topic": "Recursion",
    "sub_topic": "Recursion Basics",
    "difficulty": "Medium",
    "link": "https://pepcoding.com/resources/online-java-foundation/recursion-in-arrays/display-array-in-reverse/ojquestion"
  },
  {
    "title": "Check Is Array Sorted",
    "topic": "Recursion",
    "sub_topic": "Recursion Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1"
  },
  {
    "title": "Largest Element in Array",
    "topic": "Recursion",
    "sub_topic": "Recursion Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/largest-element-in-array4009/0"
  },
  {
    "title": "First & Last Occurence",
    "topic": "Recursion",
    "sub_topic": "Recursion Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/find-index4752/1"
  },
  {
    "title": "Find All Occurences",
    "topic": "Recursion",
    "sub_topic": "Recursion Basics",
    "difficulty": "Medium",
    "link": "https://pepcoding.com/resources/online-java-foundation/recursion-in-arrays/all-indices-official/ojquestion"
  },
  {
    "title": "Subsets",
    "topic": "Recursion",
    "sub_topic": "Subsets Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/subsets/"
  },
  {
    "title": "Subarray vs Subset",
    "topic": "Recursion",
    "sub_topic": "Subsets Problems",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/subarraysubstring-vs-subsequence-and-programs-to-generate-them/"
  },
  {
    "title": "Iterative Method",
    "topic": "Recursion",
    "sub_topic": "Subsets Problems",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/function-and-arrays/subsets-of-array-official/ojquestion"
  },
  {
    "title": "Get Subsets",
    "topic": "Recursion",
    "sub_topic": "Subsets Problems",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/recursion-with-arraylists/get-subsequence-official/ojquestion"
  },
  {
    "title": "Print Subsets",
    "topic": "Recursion",
    "sub_topic": "Subsets Problems",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/recursion-on-the-way-up/print-subsequence-official/ojquestion"
  },
  {
    "title": "Unique Subsets",
    "topic": "Recursion",
    "sub_topic": "Subsets Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/subsets-ii/"
  },
  {
    "title": "Subsets of Given Size",
    "topic": "Recursion",
    "sub_topic": "Subsets Problems",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/print-all-possible-combinations-of-r-elements-in-a-given-array-of-size-n/"
  },
  {
    "title": "Letter Tile Possibilites",
    "topic": "Recursion",
    "sub_topic": "Subsets Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/letter-tile-possibilities/"
  },
  {
    "title": "Square Matchsticks",
    "topic": "Recursion",
    "sub_topic": "Subsets Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/matchsticks-to-square/"
  },
  {
    "title": "Beautiful Arrangement",
    "topic": "Recursion",
    "sub_topic": "Subsets Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/beautiful-arrangement/"
  },
  {
    "title": "Print Stair Paths",
    "topic": "Recursion",
    "sub_topic": "Maze Path Problems",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/recursion-on-the-way-up/print-stair-paths-official/ojquestion"
  },
  {
    "title": "Get Stair Paths",
    "topic": "Recursion",
    "sub_topic": "Maze Path Problems",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/recursion-with-arraylists/get-stair-paths-official/ojquestion"
  },
  {
    "title": "All Maze Paths",
    "topic": "Recursion",
    "sub_topic": "Maze Path Problems",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/print-all-possible-paths-from-top-left-corner-to-bottom-right-corner-of-a-2-d-matrix_1171152"
  },
  {
    "title": "Rat in Maze",
    "topic": "Recursion",
    "sub_topic": "Maze Path Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1"
  },
  {
    "title": "Rat in Maze",
    "topic": "Recursion",
    "sub_topic": "Maze Path Problems",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/recursion-backtracking/flood-fill-official/ojquestion"
  },
  {
    "title": "Count Rat in Maze Paths",
    "topic": "Recursion",
    "sub_topic": "Maze Path Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/unique-paths-iii/"
  },
  {
    "title": "Rat in Maze with Jumps",
    "topic": "Recursion",
    "sub_topic": "Maze Path Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/rat-maze-with-multiple-jumps3852/1"
  },
  {
    "title": "Get Maze Path with Jumps",
    "topic": "Recursion",
    "sub_topic": "Maze Path Problems",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/recursion-with-arraylists/get-maze-path-with-jumps-official/ojquestion"
  },
  {
    "title": "Print Maze Path with Jumps",
    "topic": "Recursion",
    "sub_topic": "Maze Path Problems",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/recursion-on-the-way-up/print-maze-path-with-jumps-official/ojquestion"
  },
  {
    "title": "Gold Mine Problem",
    "topic": "Recursion",
    "sub_topic": "Maze Path Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/path-with-maximum-gold/"
  },
  {
    "title": "Combinations",
    "topic": "Mathematics",
    "sub_topic": "Combinations",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/combinations/"
  },
  {
    "title": "Combinations - 1",
    "topic": "Mathematics",
    "sub_topic": "Combinations",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/combinations-i-official/ojquestion"
  },
  {
    "title": "Combinations - 2",
    "topic": "Mathematics",
    "sub_topic": "Combinations",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/combinations-2-official/ojquestion"
  },
  {
    "title": "Factor Combinations",
    "topic": "Mathematics",
    "sub_topic": "Combinations",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/factor-combinations_1232628"
  },
  {
    "title": "Permutations",
    "topic": "Recursion",
    "sub_topic": "Permutations",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/permutations/"
  },
  {
    "title": "Permutations - 1",
    "topic": "Recursion",
    "sub_topic": "Permutations",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/permutation-i-official/ojquestion"
  },
  {
    "title": "Permutations - 2",
    "topic": "Recursion",
    "sub_topic": "Permutations",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/permutations-ii-official/ojquestion"
  },
  {
    "title": "Permutations - 3",
    "topic": "Recursion",
    "sub_topic": "Permutations",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/"
  },
  {
    "title": "Distinct Permutations",
    "topic": "Recursion",
    "sub_topic": "Permutations",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/permutations-ii/"
  },
  {
    "title": "Distinct Permutations - 1",
    "topic": "Recursion",
    "sub_topic": "Permutations",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/permutations-words-1-official/ojquestion"
  },
  {
    "title": "Distinct Permutations - 2",
    "topic": "Recursion",
    "sub_topic": "Permutations",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/permutations-words-2-official/ojquestion"
  },
  {
    "title": "Palindromic Permutations",
    "topic": "Recursion",
    "sub_topic": "Permutations",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/pallindrome-patterns0809/1"
  },
  {
    "title": "K Words - Combination - I",
    "topic": "Mathematics",
    "sub_topic": "K Words Combination",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/words-kselection-1-official/ojquestion"
  },
  {
    "title": "K Words - Combination - II",
    "topic": "Mathematics",
    "sub_topic": "K Words Combination",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/word-kselection-2-official/ojquestion"
  },
  {
    "title": "K Words - Combination - III",
    "topic": "Mathematics",
    "sub_topic": "K Words Combination",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/words-kselection-3-official/ojquestion"
  },
  {
    "title": "K Words - Combination - IV",
    "topic": "Mathematics",
    "sub_topic": "K Words Combination",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/words-kselection-4-official/ojquestion"
  },
  {
    "title": "K Words - Permutation - I",
    "topic": "Arrays",
    "sub_topic": "K Words Permutation",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/words-klength-words-1-official/ojquestion"
  },
  {
    "title": "K Words - Permutation - II",
    "topic": "Arrays",
    "sub_topic": "K Words Permutation",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/words-klength-words-2-official/ojquestion"
  },
  {
    "title": "K Words - Permutation - III",
    "topic": "Arrays",
    "sub_topic": "K Words Permutation",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/wors-klength-words-3-official/ojquestion"
  },
  {
    "title": "K Words - Permutation - IV",
    "topic": "Arrays",
    "sub_topic": "K Words Permutation",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/words-klength-words-4-official/ojquestion"
  },
  {
    "title": "Permutations - 2d as 2d - Box Choose",
    "topic": "Arrays",
    "sub_topic": "2D Perm & Comb",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/queens-permutations-2das2d-queen-chooses-official/ojquestion"
  },
  {
    "title": "Combinations - 2d as 2d - Box Choose",
    "topic": "Arrays",
    "sub_topic": "2D Perm & Comb",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/queens-combinations-2das2d-box-chooses-official/ojquestion"
  },
  {
    "title": "Permutations - 2d as 2d - Queen Choose",
    "topic": "Arrays",
    "sub_topic": "2D Perm & Comb",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/queens-permutations-2das2d-box-chooses-official/ojquestion"
  },
  {
    "title": "Combination - 2d as 2d - Box Choose",
    "topic": "Arrays",
    "sub_topic": "2D Perm & Comb",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/queens-combinations-2das2d-official/ojquestion"
  },
  {
    "title": "Combination - 2d as 1d - Queen Choose",
    "topic": "Arrays",
    "sub_topic": "2D Perm & Comb",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/queens-combinations-2das1d-queen-chooses-official/ojquestion"
  },
  {
    "title": "Keypad Combinations",
    "topic": "Recursion",
    "sub_topic": "Keypad Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"
  },
  {
    "title": "Get Keypad Combinations",
    "topic": "Recursion",
    "sub_topic": "Keypad Problems",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/recursion-with-arraylists/get-kpc-official/ojquestion"
  },
  {
    "title": "Print Keypad Combinations",
    "topic": "Recursion",
    "sub_topic": "Keypad Problems",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/recursion-on-the-way-up/print-kpc-official/ojquestion"
  },
  {
    "title": "Print Decode Ways",
    "topic": "Recursion",
    "sub_topic": "Keypad Problems",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/recursion-on-the-way-up/print-encodings-official/ojquestion"
  },
  {
    "title": "Print Decode Ways",
    "topic": "Recursion",
    "sub_topic": "Keypad Problems",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/print-all-possible-decodings-of-a-given-digit-sequence/"
  },
  {
    "title": "Generalized Abbreviations",
    "topic": "Recursion",
    "sub_topic": "Keypad Problems",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/generalized-abbreviation_1233144"
  },
  {
    "title": "Abbreviations - Using R&B",
    "topic": "Recursion",
    "sub_topic": "Keypad Problems",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/abbreviation-suing-backtracking-official/ojquestion"
  },
  {
    "title": "Abbreviations - Using Bits",
    "topic": "Recursion",
    "sub_topic": "Keypad Problems",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/bit-manipulation/abrreviation1-using-bits-official/ojquestion"
  },
  {
    "title": "Keypad Sequence",
    "topic": "Recursion",
    "sub_topic": "Keypad Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/convert-a-sentence-into-its-equivalent-mobile-numeric-keypad-sequence0547/1"
  },
  {
    "title": "Letter Case Permutations",
    "topic": "Recursion",
    "sub_topic": "Keypad Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/letter-case-permutation/"
  },
  {
    "title": "N Queen - Combinations",
    "topic": "Backtracking",
    "sub_topic": "N Queen Problem",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/nqueens-combinations-2das1d-queen-chooses-official/ojquestion"
  },
  {
    "title": "N Queen - Permutations",
    "topic": "Backtracking",
    "sub_topic": "N Queen Problem",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/nqueens-permutations-2das1d-official-queen-chooses/ojquestion"
  },
  {
    "title": "N Queens - I",
    "topic": "Backtracking",
    "sub_topic": "N Queen Problem",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/n-queens/"
  },
  {
    "title": "N Queens - II",
    "topic": "Backtracking",
    "sub_topic": "N Queen Problem",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/n-queens-ii/"
  },
  {
    "title": "N Queen - Backtracking",
    "topic": "Backtracking",
    "sub_topic": "N Queen Problem",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/recursion-backtracking/n-queens-official/ojquestion"
  },
  {
    "title": "N Queen - Branch & Bound",
    "topic": "Backtracking",
    "sub_topic": "N Queen Problem",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/nqueens-branch-and-bound-official/ojquestion"
  },
  {
    "title": "N Queen - Bit Manipulation",
    "topic": "Backtracking",
    "sub_topic": "N Queen Problem",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/bit-manipulation/nqueens-using-bits-official/ojquestion"
  },
  {
    "title": "N Knights",
    "topic": "Backtracking",
    "sub_topic": "N Queen Problem",
    "difficulty": "Medium",
    "link": "https://www.codechef.com/problems/KNIGHTS"
  },
  {
    "title": "N Knights",
    "topic": "Backtracking",
    "sub_topic": "N Queen Problem",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/nknights-combinations-2das1d-knight-chooses-official/ojquestion"
  },
  {
    "title": "Knight's Tour Problem",
    "topic": "Backtracking",
    "sub_topic": "N Queen Problem",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/knight-tour_1170518"
  },
  {
    "title": "Coin Change - Combination - 1",
    "topic": "Dynamic Programming",
    "sub_topic": "Coin Change Problem",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/combination-sum-ii/"
  },
  {
    "title": "Coin Change - Combination - 2",
    "topic": "Dynamic Programming",
    "sub_topic": "Coin Change Problem",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/combination-sum/"
  },
  {
    "title": "Coin Change - Combination - 3",
    "topic": "Dynamic Programming",
    "sub_topic": "Coin Change Problem",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/combination-sum-iii/"
  },
  {
    "title": "Coin Change - Permutation - 1",
    "topic": "Dynamic Programming",
    "sub_topic": "Coin Change Problem",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/coin-change-permutations-1-official/ojquestion"
  },
  {
    "title": "Coin Change - Permutation - 2",
    "topic": "Dynamic Programming",
    "sub_topic": "Coin Change Problem",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/coin-change-permutations-2-official/ojquestion"
  },
  {
    "title": "Josephus Problem",
    "topic": "Mathematics",
    "sub_topic": "Puzzles Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-the-winner-of-the-circular-game/"
  },
  {
    "title": "Word Search",
    "topic": "Mathematics",
    "sub_topic": "Puzzles Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/word-search/"
  },
  {
    "title": "Crossword Puzzle - I",
    "topic": "Mathematics",
    "sub_topic": "Puzzles Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/"
  },
  {
    "title": "Crossword Puzzle - II",
    "topic": "Mathematics",
    "sub_topic": "Puzzles Problems",
    "difficulty": "Medium",
    "link": "https://www.hackerrank.com/challenges/crossword-puzzle/problem"
  },
  {
    "title": "Valid Sudoku",
    "topic": "Mathematics",
    "sub_topic": "Puzzles Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/valid-sudoku/"
  },
  {
    "title": "Sudoku Solver",
    "topic": "Mathematics",
    "sub_topic": "Puzzles Problems",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/sudoku-solver/"
  },
  {
    "title": "Sudoku Solver",
    "topic": "Mathematics",
    "sub_topic": "Puzzles Problems",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/sudoku-backtracking-7/"
  },
  {
    "title": "Verbal Arithmetic Puzzle",
    "topic": "Mathematics",
    "sub_topic": "Puzzles Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/verbal-arithmetic-puzzle/"
  },
  {
    "title": "Magnet Puzzle",
    "topic": "Mathematics",
    "sub_topic": "Puzzles Problems",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/magnet-puzzle-backtracking-9/"
  },
  {
    "title": "Smallest No in DI Pattern",
    "topic": "Mathematics",
    "sub_topic": "Puzzles Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/construct-smallest-number-from-di-string/"
  },
  {
    "title": "Max Score Words",
    "topic": "Mathematics",
    "sub_topic": "Puzzles Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-score-words-formed-by-letters/"
  },
  {
    "title": "Largest No in K Swaps",
    "topic": "Recursion",
    "sub_topic": "More Recursion Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/largest-number-in-k-swaps-1587115620/1"
  },
  {
    "title": "Print Friend Pairings",
    "topic": "Recursion",
    "sub_topic": "More Recursion Problems",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/friends-pairing-2-official/ojquestion"
  },
  {
    "title": "Stepping Numbers",
    "topic": "Recursion",
    "sub_topic": "More Recursion Problems",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/stepping-numbers/"
  },
  {
    "title": "Generate Balanced Parenthesis",
    "topic": "Recursion",
    "sub_topic": "More Recursion Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/generate-parentheses/"
  },
  {
    "title": "Lexicographical Numbers",
    "topic": "Recursion",
    "sub_topic": "More Recursion Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/lexicographical-numbers/"
  },
  {
    "title": "Restore IP Addresses",
    "topic": "Recursion",
    "sub_topic": "More Recursion Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/restore-ip-addresses/"
  },
  {
    "title": "Count & Say",
    "topic": "Recursion",
    "sub_topic": "More Recursion Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-and-say/"
  },
  {
    "title": "Convert Integer to Roman",
    "topic": "Recursion",
    "sub_topic": "More Recursion Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/integer-to-roman/"
  },
  {
    "title": "Convert Roman to Integer",
    "topic": "Recursion",
    "sub_topic": "More Recursion Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/roman-to-integer/"
  },
  {
    "title": "Integer in English Words",
    "topic": "Recursion",
    "sub_topic": "More Recursion Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/integer-to-english-words/"
  },
  {
    "title": "Expression Add Operators",
    "topic": "Recursion",
    "sub_topic": "More Recursion Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/expression-add-operators/"
  },
  {
    "title": "Additive Numbers",
    "topic": "Recursion",
    "sub_topic": "More Recursion Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/additive-number/"
  },
  {
    "title": "Split into Fibonacci Sequence",
    "topic": "Recursion",
    "sub_topic": "More Recursion Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/split-array-into-fibonacci-sequence/"
  },
  {
    "title": "Paranthesis Addition Ways",
    "topic": "Recursion",
    "sub_topic": "More Recursion Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/different-ways-to-add-parentheses/"
  },
  {
    "title": "Kth Symbol in Grammar",
    "topic": "Recursion",
    "sub_topic": "More Recursion Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/k-th-symbol-in-grammar/"
  },
  {
    "title": "Lucky Number",
    "topic": "Recursion",
    "sub_topic": "More Recursion Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/lucky-numbers2911/1"
  },
  {
    "title": "GCD of 2 Numbers",
    "topic": "Mathematics",
    "sub_topic": "Euclid's Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-greatest-common-divisor-of-array/"
  },
  {
    "title": "Euclid's Algorithm",
    "topic": "Mathematics",
    "sub_topic": "Euclid's Algorithm",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/lcm-and-gcd4516/1"
  },
  {
    "title": "GCD of Array",
    "topic": "Mathematics",
    "sub_topic": "Euclid's Algorithm",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/gcd-of-array0614/1"
  },
  {
    "title": "GCD of Big Integer",
    "topic": "Mathematics",
    "sub_topic": "Euclid's Algorithm",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/advanced-gcd_1082145"
  },
  {
    "title": "GCD of Big Integer",
    "topic": "Mathematics",
    "sub_topic": "Euclid's Algorithm",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/gcd-of-two-numbers-when-one-of-them-can-be-very-large-2/"
  },
  {
    "title": "Required Rooms",
    "topic": "Mathematics",
    "sub_topic": "Euclid's Algorithm",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/required-rooms3939/1"
  },
  {
    "title": "Deck of Cards",
    "topic": "Mathematics",
    "sub_topic": "Euclid's Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/"
  },
  {
    "title": "Simplified Fractions",
    "topic": "Mathematics",
    "sub_topic": "Euclid's Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/simplified-fractions/"
  },
  {
    "title": "Min Deletions Array Divisible",
    "topic": "Mathematics",
    "sub_topic": "Euclid's Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/"
  },
  {
    "title": "Cutting Squares",
    "topic": "Mathematics",
    "sub_topic": "Euclid's Algorithm",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/cutting-rectangles3659/1"
  },
  {
    "title": "Largest Coprime Divisor",
    "topic": "Mathematics",
    "sub_topic": "Euclid's Algorithm",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/largest-coprime-divisor/"
  },
  {
    "title": "Largest Coprime Divisor",
    "topic": "Mathematics",
    "sub_topic": "Euclid's Algorithm",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/largest-number-divides-x-co-prime-y/"
  },
  {
    "title": "Extended Euclid Algorithm",
    "topic": "Mathematics",
    "sub_topic": "Extended Euclid",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/extended-euclidean-algorithm3848/1"
  },
  {
    "title": "Linear Diophantine Eqn",
    "topic": "Mathematics",
    "sub_topic": "Extended Euclid",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/linear-diophantine-equations5649/1"
  },
  {
    "title": "Checking No is Prime",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/prime-number2314/1"
  },
  {
    "title": "Kth Factor of Number",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/the-kth-factor-of-n/"
  },
  {
    "title": "Three Divisors",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/three-divisors/"
  },
  {
    "title": "Four Divisors",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/four-divisors/"
  },
  {
    "title": "Count Factors",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/number-of-factors1435/1"
  },
  {
    "title": "Sum of Factors",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/factors-sum2016/1"
  },
  {
    "title": "Product of Factors",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/product-of-factors-of-number4757/1"
  },
  {
    "title": "Count Common Divisors",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/common-divisors4712/1"
  },
  {
    "title": "Perfect Number",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/perfect-number/"
  },
  {
    "title": "Count Prime Numbers",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-primes/"
  },
  {
    "title": "Find Kth Prime",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/find-nth-prime_920382"
  },
  {
    "title": "Prime Arrangements",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/prime-arrangements/"
  },
  {
    "title": "Smallest Prime Factor",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/least-prime-factor5216/1"
  },
  {
    "title": "Largest Prime Factor",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/largest-prime-factor_1062687"
  },
  {
    "title": "Primes in Range I",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/count-primes-in-range1604/1"
  },
  {
    "title": "Bitset Sieve",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/bitwise-sieve/"
  },
  {
    "title": "Product of Primes",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/product-of-primes5328/1"
  },
  {
    "title": "Primes in Range II",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://www.spoj.com/problems/PRIME1/"
  },
  {
    "title": "Segmented Sieve",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/segmented-sieve/"
  },
  {
    "title": "Prime Factorization",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/prime-factors5052/1"
  },
  {
    "title": "Prime Factorization Queries",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/prime-factorisation_1760849?leftPanelTab=0"
  },
  {
    "title": "Count Prime Factors",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/nfactor_1496510"
  },
  {
    "title": "Divisor Queries",
    "topic": "Mathematics",
    "sub_topic": "Prime Numbers",
    "difficulty": "Medium",
    "link": "https://www.spoj.com/problems/DIVSUM/"
  },
  {
    "title": "Modular Arithmeitc",
    "topic": "Mathematics",
    "sub_topic": "Modular Arithmetic",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/modulo-1097-1000000007/"
  },
  {
    "title": "Modular Factorial",
    "topic": "Mathematics",
    "sub_topic": "Modular Arithmetic",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/large-factorial4721/1"
  },
  {
    "title": "Modular Exponentiation",
    "topic": "Mathematics",
    "sub_topic": "Modular Arithmetic",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/modular-exponentiation_1082146"
  },
  {
    "title": "Fermat's Little Theorem",
    "topic": "Mathematics",
    "sub_topic": "Modular Arithmetic",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/fermats-little-theorem/"
  },
  {
    "title": "Modular Division",
    "topic": "Mathematics",
    "sub_topic": "Modular Arithmetic",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/modular-division/"
  },
  {
    "title": "Modular Muliplicative Inverse",
    "topic": "Mathematics",
    "sub_topic": "Modular Arithmetic",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/modular-multiplicative-inverse-1587115620/1"
  },
  {
    "title": "Modular Binomial Coeff",
    "topic": "Mathematics",
    "sub_topic": "Modular Arithmetic",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/ncr-mod-m-part-10038/1"
  },
  {
    "title": "Modular Permutation Coeff",
    "topic": "Mathematics",
    "sub_topic": "Modular Arithmetic",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/permutationcoefficient_1214975"
  },
  {
    "title": "Sum of All Subarrays",
    "topic": "Mathematics",
    "sub_topic": "Modular Arithmetic",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/sum-of-subarrays2229/1"
  },
  {
    "title": "Sum of All Subsets",
    "topic": "Mathematics",
    "sub_topic": "Modular Arithmetic",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/sum-of-all-sub-sequences-of-a-number3437/1"
  },
  {
    "title": "Sum of Subset Width",
    "topic": "Mathematics",
    "sub_topic": "Modular Arithmetic",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sum-of-subsequence-widths/"
  },
  {
    "title": "Nth Magical Number",
    "topic": "Mathematics",
    "sub_topic": "Inclusion Exclusion Principle",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/nth-magical-number/"
  },
  {
    "title": "Nth Ugly Number",
    "topic": "Mathematics",
    "sub_topic": "Inclusion Exclusion Principle",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/ugly-number-iii/"
  },
  {
    "title": "Sort Array",
    "topic": "Sorting",
    "sub_topic": "Sorting Algorithms",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sort-an-array/"
  },
  {
    "title": "Inbuilt Sorting",
    "topic": "Sorting",
    "sub_topic": "Sorting Algorithms",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/know-sorting-algorithm-set-1-sorting-weapons-used-programming-languages/"
  },
  {
    "title": "Bubble Sort",
    "topic": "Sorting",
    "sub_topic": "Basic Sorting Algorithms",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/bubble-sort/1"
  },
  {
    "title": "Bubble Sort - Recursive",
    "topic": "Sorting",
    "sub_topic": "Basic Sorting Algorithms",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/recursive-bubble-sort/"
  },
  {
    "title": "Bubble Sort - Count Swaps",
    "topic": "Sorting",
    "sub_topic": "Basic Sorting Algorithms",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/punish-the-students5726/1"
  },
  {
    "title": "Insertion Sort",
    "topic": "Sorting",
    "sub_topic": "Basic Sorting Algorithms",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/insertion-sort/1"
  },
  {
    "title": "Insertion Sort - Recursive",
    "topic": "Sorting",
    "sub_topic": "Basic Sorting Algorithms",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/recursive-insertion-sort/"
  },
  {
    "title": "Selection Sort",
    "topic": "Sorting",
    "sub_topic": "Basic Sorting Algorithms",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/selection-sort/1"
  },
  {
    "title": "Selection Sort - Recursive",
    "topic": "Sorting",
    "sub_topic": "Basic Sorting Algorithms",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/recursive-selection-sort/"
  },
  {
    "title": "Pancake Sorting",
    "topic": "Sorting",
    "sub_topic": "Basic Sorting Algorithms",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/pancake-sorting/"
  },
  {
    "title": "Merge Two Sorted Arrays - I",
    "topic": "Arrays",
    "sub_topic": "Merge Sorted Arrays",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/merge-sorted-array/"
  },
  {
    "title": "Merging Using Two Pointers",
    "topic": "Arrays",
    "sub_topic": "Merge Sorted Arrays",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/merge-two-sorted-arrays/"
  },
  {
    "title": "Merge Two Sorted Arrays - II",
    "topic": "Arrays",
    "sub_topic": "Merge Sorted Arrays",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1"
  },
  {
    "title": "Merging using Insertion Sort",
    "topic": "Arrays",
    "sub_topic": "Merge Sorted Arrays",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/merge-two-sorted-arrays-o1-extra-space/"
  },
  {
    "title": "Merging using Shell Sort",
    "topic": "Arrays",
    "sub_topic": "Merge Sorted Arrays",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/efficiently-merging-two-sorted-arrays-with-o1-extra-space/"
  },
  {
    "title": "Union of 2 Sorted Arrays",
    "topic": "Arrays",
    "sub_topic": "Merge Sorted Arrays",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1"
  },
  {
    "title": "Intersection of 2 Arrays - I",
    "topic": "Arrays",
    "sub_topic": "Merge Sorted Arrays",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/intersection-of-two-arrays/"
  },
  {
    "title": "Intersection of 2 Arrays - II",
    "topic": "Arrays",
    "sub_topic": "Merge Sorted Arrays",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/intersection-of-two-arrays-ii/"
  },
  {
    "title": "Instersection of 3 Arrays",
    "topic": "Arrays",
    "sub_topic": "Merge Sorted Arrays",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/common-elements1132/1"
  },
  {
    "title": "Symmetric Difference",
    "topic": "Arrays",
    "sub_topic": "Merge Sorted Arrays",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-the-difference-of-two-arrays/"
  },
  {
    "title": "Squares of Sorted Array",
    "topic": "Arrays",
    "sub_topic": "Merge Sorted Arrays",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/squares-of-a-sorted-array/"
  },
  {
    "title": "Partition Around Pivot",
    "topic": "Arrays",
    "sub_topic": "Partitioning Algorithm",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/time-and-space-complexity/partition-an-array-official/ojquestion"
  },
  {
    "title": "Sort Binary Array",
    "topic": "Arrays",
    "sub_topic": "Partitioning Algorithm",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/binary-array-sorting-1587115620/1"
  },
  {
    "title": "Sort Colors 012",
    "topic": "Arrays",
    "sub_topic": "Partitioning Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sort-colors/"
  },
  {
    "title": "Dual Pivot Partitioning",
    "topic": "Arrays",
    "sub_topic": "Partitioning Algorithm",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/three-way-partitioning/1"
  },
  {
    "title": "Three Way Partitioning",
    "topic": "Arrays",
    "sub_topic": "Partitioning Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/partition-array-according-to-given-pivot/"
  },
  {
    "title": "Move Zeroes To End",
    "topic": "Arrays",
    "sub_topic": "Partitioning Algorithm",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/move-zeroes/"
  },
  {
    "title": "Segregate w/o Relative Order",
    "topic": "Arrays",
    "sub_topic": "Partitioning Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sort-array-by-parity/"
  },
  {
    "title": "Segregate with Relative Order",
    "topic": "Arrays",
    "sub_topic": "Partitioning Algorithm",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1"
  },
  {
    "title": "Alternate w/o Relative Order",
    "topic": "Arrays",
    "sub_topic": "Partitioning Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sort-array-by-parity-ii/"
  },
  {
    "title": "Alternate with Relative Order",
    "topic": "Arrays",
    "sub_topic": "Partitioning Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/rearrange-array-elements-by-sign/"
  },
  {
    "title": "Wiggle Sort - 1",
    "topic": "Arrays",
    "sub_topic": "Rearrange Array",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/wiggle-sort_3155169"
  },
  {
    "title": "Wiggle Sort - 1",
    "topic": "Arrays",
    "sub_topic": "Rearrange Array",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/convert-array-into-zig-zag-fashion1638/1"
  },
  {
    "title": "Wiggle Sort - 2",
    "topic": "Arrays",
    "sub_topic": "Rearrange Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/wiggle-sort-ii/"
  },
  {
    "title": "Wave Sort - Lexical Order",
    "topic": "Arrays",
    "sub_topic": "Rearrange Array",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/wave-array-1587115621/1"
  },
  {
    "title": "Wave Sort - Min Max Form",
    "topic": "Arrays",
    "sub_topic": "Rearrange Array",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/-rearrange-array-alternately-1587115620/1"
  },
  {
    "title": "Inverse Permutation - I",
    "topic": "Arrays",
    "sub_topic": "Rearrange Array",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/rearrange-an-array-with-o1-extra-space3142/1"
  },
  {
    "title": "Inverse Permutation - II",
    "topic": "Arrays",
    "sub_topic": "Rearrange Array",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/rearrange-array-arrj-becomes-arri-j/"
  },
  {
    "title": "Reorder Array with Indexes",
    "topic": "Arrays",
    "sub_topic": "Rearrange Array",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/inverse-permutation0344/0"
  },
  {
    "title": "Reorder Array with Indexes",
    "topic": "Arrays",
    "sub_topic": "Rearrange Array",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/reorder-a-array-according-to-given-indexes/"
  },
  {
    "title": "Merge Sort",
    "topic": "General",
    "sub_topic": "Divide & Conquer Based",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/merge-sort/1"
  },
  {
    "title": "Quick Sort",
    "topic": "General",
    "sub_topic": "Divide & Conquer Based",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/quick-sort/1"
  },
  {
    "title": "Dual Pivot Quicksort",
    "topic": "General",
    "sub_topic": "Divide & Conquer Based",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/dual-pivot-quicksort/"
  },
  {
    "title": "3 Way Quick Sort",
    "topic": "General",
    "sub_topic": "Divide & Conquer Based",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/3-way-quicksort-dutch-national-flag/"
  },
  {
    "title": "Improving Quicksort",
    "topic": "General",
    "sub_topic": "Divide & Conquer Based",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/improvement-on-the-quick-sort-algorithm/"
  },
  {
    "title": "Sort Array of Dates",
    "topic": "Sorting",
    "sub_topic": "Counting Sort",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/sort-big-list-dates_1806890"
  },
  {
    "title": "Minimum Time Distance",
    "topic": "Sorting",
    "sub_topic": "Counting Sort",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-time-difference/"
  },
  {
    "title": "H Index Unsorted",
    "topic": "Sorting",
    "sub_topic": "Counting Sort",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/h-index/"
  },
  {
    "title": "Height Checker",
    "topic": "Sorting",
    "sub_topic": "Counting Sort",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/height-checker/"
  },
  {
    "title": "Relative Sort Array",
    "topic": "Sorting",
    "sub_topic": "Counting Sort",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/relative-sort-array/"
  },
  {
    "title": "Max Consecutive Gap",
    "topic": "Sorting",
    "sub_topic": "Counting Sort",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-gap/"
  },
  {
    "title": "Frequency Sort",
    "topic": "Sorting",
    "sub_topic": "Counting Sort",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sort-array-by-increasing-frequency/"
  },
  {
    "title": "Frequency Sort String",
    "topic": "Sorting",
    "sub_topic": "Counting Sort",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sort-characters-by-frequency/"
  },
  {
    "title": "Top K Frequent Elements",
    "topic": "Sorting",
    "sub_topic": "Counting Sort",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/top-k-frequent-elements/"
  },
  {
    "title": "Top K Frequent Words",
    "topic": "Sorting",
    "sub_topic": "Counting Sort",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/top-k-frequent-words/"
  },
  {
    "title": "Top K Frequent in Stream",
    "topic": "Sorting",
    "sub_topic": "Counting Sort",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/top-k-numbers3425/1"
  },
  {
    "title": "Inversion Count",
    "topic": "Arrays",
    "sub_topic": "Inversion Count",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1"
  },
  {
    "title": "Inversions - Merge Sort",
    "topic": "Arrays",
    "sub_topic": "Inversion Count",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/counting-inversions/"
  },
  {
    "title": "Inversions - Policy Based DS",
    "topic": "Arrays",
    "sub_topic": "Inversion Count",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/inversion-count-using-policy-based-data-structure/"
  },
  {
    "title": "Min Adjacent Swaps to Sort",
    "topic": "Arrays",
    "sub_topic": "Inversion Count",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/minimum-number-of-swaps-needed2136/1"
  },
  {
    "title": "Global & Local Inversions",
    "topic": "Arrays",
    "sub_topic": "Inversion Count",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/global-and-local-inversions/"
  },
  {
    "title": "Reverse Pairs",
    "topic": "Arrays",
    "sub_topic": "Inversion Count",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/reverse-pairs/"
  },
  {
    "title": "Count of Smaller After Self",
    "topic": "Arrays",
    "sub_topic": "Inversion Count",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/"
  },
  {
    "title": "Count of Range Sum",
    "topic": "Arrays",
    "sub_topic": "Inversion Count",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-of-range-sum/"
  },
  {
    "title": "Count Binary Substrings",
    "topic": "Arrays",
    "sub_topic": "Inversion Count",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/count-of-substrings-in-a-binary-string-that-contains-more-1s-than-0s/"
  },
  {
    "title": "Binary Search",
    "topic": "Searching",
    "sub_topic": "Binary Search Basics",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/binary-search/"
  },
  {
    "title": "Transition Point",
    "topic": "Searching",
    "sub_topic": "Binary Search Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/find-transition-point-1587115620/1"
  },
  {
    "title": "First Bad Version",
    "topic": "Searching",
    "sub_topic": "Binary Search Basics",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/first-bad-version/"
  },
  {
    "title": "Guess No Higher or Lower",
    "topic": "Searching",
    "sub_topic": "Binary Search Basics",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/guess-number-higher-or-lower/"
  },
  {
    "title": "Arranging Coins",
    "topic": "Searching",
    "sub_topic": "Binary Search Basics",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/arranging-coins/"
  },
  {
    "title": "Fixed Point in Sorted Array",
    "topic": "Searching",
    "sub_topic": "Binary Search Basics",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/fixed-point_1264949"
  },
  {
    "title": "Lower & Upper Bound",
    "topic": "Searching",
    "sub_topic": "Lower & Upper Bound",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/implementing-upper_bound-and-lower_bound-in-c/"
  },
  {
    "title": "Search Insert Position",
    "topic": "Searching",
    "sub_topic": "Lower & Upper Bound",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/search-insert-position/"
  },
  {
    "title": "Ceil in Sorted Array",
    "topic": "Searching",
    "sub_topic": "Lower & Upper Bound",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/ceiling-in-a-sorted-array_1825401"
  },
  {
    "title": "Floor in Sorted Array",
    "topic": "Searching",
    "sub_topic": "Lower & Upper Bound",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/0"
  },
  {
    "title": "First & Last Occurence",
    "topic": "Searching",
    "sub_topic": "Lower & Upper Bound",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"
  },
  {
    "title": "Count Occurences",
    "topic": "Searching",
    "sub_topic": "Lower & Upper Bound",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/number-of-occurrence2259/1"
  },
  {
    "title": "Closest Element",
    "topic": "Searching",
    "sub_topic": "Lower & Upper Bound",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/find-the-closest-number5513/1"
  },
  {
    "title": "K Closest Elements",
    "topic": "Searching",
    "sub_topic": "Lower & Upper Bound",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-k-closest-elements/"
  },
  {
    "title": "Heaters",
    "topic": "Searching",
    "sub_topic": "Lower & Upper Bound",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/heaters/"
  },
  {
    "title": "Remove 2*Min >= Max",
    "topic": "Searching",
    "sub_topic": "Lower & Upper Bound",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/remove-minimum-elements4612/1"
  },
  {
    "title": "Square Root - Integral",
    "topic": "Searching",
    "sub_topic": "Root & Square",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sqrtx/"
  },
  {
    "title": "Square Root - Decimal",
    "topic": "Searching",
    "sub_topic": "Root & Square",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/square-root-decimal_1095655"
  },
  {
    "title": "Valid Perfect Square",
    "topic": "Searching",
    "sub_topic": "Root & Square",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/valid-perfect-square/"
  },
  {
    "title": "Nth Root of Number",
    "topic": "Searching",
    "sub_topic": "Root & Square",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/find-nth-root-of-m5843/1"
  },
  {
    "title": "Pivot in Rotated Sorted - I",
    "topic": "Searching",
    "sub_topic": "Rotated Sorted Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
  },
  {
    "title": "Pivot in Rotated Sorted - II",
    "topic": "Searching",
    "sub_topic": "Rotated Sorted Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/"
  },
  {
    "title": "Rotation Count in Rotated Sorted",
    "topic": "Searching",
    "sub_topic": "Rotated Sorted Array",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/rotation4723/1"
  },
  {
    "title": "Search in Rotated Sorted - I",
    "topic": "Searching",
    "sub_topic": "Rotated Sorted Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/"
  },
  {
    "title": "Search in Rotated Sorted - II",
    "topic": "Searching",
    "sub_topic": "Rotated Sorted Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/"
  },
  {
    "title": "Search in Nearly Sorted",
    "topic": "Searching",
    "sub_topic": "Rotated Sorted Array",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/leetcode/search-in-nearly-sorted-array/ojquestion"
  },
  {
    "title": "Search in Nearly Sorted",
    "topic": "Searching",
    "sub_topic": "Rotated Sorted Array",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/search-almost-sorted-array/"
  },
  {
    "title": "Peak in Bitonic Array",
    "topic": "Searching",
    "sub_topic": "Mountain Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/peak-index-in-a-mountain-array/"
  },
  {
    "title": "Search in Bitonic Array",
    "topic": "Searching",
    "sub_topic": "Mountain Array",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/search-in-bitonic-array/"
  },
  {
    "title": "Find Peak Element",
    "topic": "Searching",
    "sub_topic": "Mountain Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-peak-element/"
  },
  {
    "title": "Search 2D Matrix - I",
    "topic": "Searching",
    "sub_topic": "Search in 2D Matrix",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/search-a-2d-matrix/"
  },
  {
    "title": "Search 2D Matrix - II",
    "topic": "Searching",
    "sub_topic": "Search in 2D Matrix",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/search-a-2d-matrix-ii/"
  },
  {
    "title": "Count 0 in Binary Matrix",
    "topic": "Searching",
    "sub_topic": "Search in 2D Matrix",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/count-zeros-in-a-sorted-matrix/1"
  },
  {
    "title": "Max 1s Row in Binary Matrix",
    "topic": "Searching",
    "sub_topic": "Search in 2D Matrix",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1"
  },
  {
    "title": "Peak Element in Matrix",
    "topic": "Searching",
    "sub_topic": "Search in 2D Matrix",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-a-peak-element-ii/"
  },
  {
    "title": "Median 2 Sorted Arrays - Same Size",
    "topic": "Searching",
    "sub_topic": "Median in 2 Arrays",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/median-of-two-sorted-arrays/"
  },
  {
    "title": "Median 2 Sorted Arrays - Dff Size",
    "topic": "Searching",
    "sub_topic": "Median in 2 Arrays",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/"
  },
  {
    "title": "Kth Element in 2 Sorted Arrays",
    "topic": "Searching",
    "sub_topic": "Median in 2 Arrays",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1"
  },
  {
    "title": "Median in Row Wise Sorted Matrix",
    "topic": "Searching",
    "sub_topic": "Median in 2 Arrays",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1"
  },
  {
    "title": "Book Allocation",
    "topic": "Searching",
    "sub_topic": "Binary Search on Answer",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1"
  },
  {
    "title": "Painter's Partition",
    "topic": "Searching",
    "sub_topic": "Binary Search on Answer",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/painters-partition-problem/"
  },
  {
    "title": "Split Array Largest Sum",
    "topic": "Searching",
    "sub_topic": "Binary Search on Answer",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/split-array-largest-sum/"
  },
  {
    "title": "Capacity to Ship Packages",
    "topic": "Searching",
    "sub_topic": "Binary Search on Answer",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/"
  },
  {
    "title": "Min Days to Make Bouquets",
    "topic": "Searching",
    "sub_topic": "Binary Search on Answer",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/"
  },
  {
    "title": "Koko Eating Banana",
    "topic": "Searching",
    "sub_topic": "Binary Search on Answer",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/koko-eating-bananas/"
  },
  {
    "title": "Smallest Divisor Threshold",
    "topic": "Searching",
    "sub_topic": "Binary Search on Answer",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/"
  },
  {
    "title": "Min Time to Complete Trips",
    "topic": "Searching",
    "sub_topic": "Binary Search on Answer",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-time-to-complete-trips/"
  },
  {
    "title": "Min Speed to Arrive on Time",
    "topic": "Searching",
    "sub_topic": "Binary Search on Answer",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-speed-to-arrive-on-time/"
  },
  {
    "title": "Aggressive Cows",
    "topic": "Searching",
    "sub_topic": "Binary Search on Answer",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/aggressive-cows_1082559"
  },
  {
    "title": "Magnetic Force Balls",
    "topic": "Searching",
    "sub_topic": "Binary Search on Answer",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/magnetic-force-between-two-balls/"
  },
  {
    "title": "Max Candies to Children",
    "topic": "Searching",
    "sub_topic": "Binary Search on Answer",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-candies-allocated-to-k-children/"
  },
  {
    "title": "Woodcutting Eko - SPOJ",
    "topic": "Searching",
    "sub_topic": "Binary Search on Answer",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/woodcutting-made-easy/"
  },
  {
    "title": "Minimize Max Products Store",
    "topic": "Searching",
    "sub_topic": "Binary Search on Answer",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/"
  },
  {
    "title": "Minimize Farthest Gas Stations",
    "topic": "Searching",
    "sub_topic": "Binary Search on Answer",
    "difficulty": "Medium",
    "link": "https://www.lintcode.com/problem/848/"
  },
  {
    "title": "Roti Prata - SPOJ",
    "topic": "Searching",
    "sub_topic": "Binary Search on Answer",
    "difficulty": "Medium",
    "link": "https://www.spoj.com/problems/PRATA/"
  },
  {
    "title": "Single Element in Sorted",
    "topic": "Searching",
    "sub_topic": "More Binary Search Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/single-element-in-a-sorted-array/"
  },
  {
    "title": "Kth Missing Element",
    "topic": "Searching",
    "sub_topic": "More Binary Search Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/kth-missing-positive-number/"
  },
  {
    "title": "H Index - Sorted",
    "topic": "Searching",
    "sub_topic": "More Binary Search Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/h-index-ii/"
  },
  {
    "title": "Longest Subset Limited Sum",
    "topic": "Searching",
    "sub_topic": "More Binary Search Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-subsequence-with-limited-sum/"
  },
  {
    "title": "Kth Smallest Pair Distance",
    "topic": "Searching",
    "sub_topic": "More Binary Search Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-k-th-smallest-pair-distance/"
  },
  {
    "title": "Random Pick with Weight",
    "topic": "Searching",
    "sub_topic": "More Binary Search Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/random-pick-with-weight/"
  },
  {
    "title": "Missing Element of AP",
    "topic": "Searching",
    "sub_topic": "More Binary Search Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/missing-element-of-ap2228/1"
  },
  {
    "title": "Min Factorial Trailing 0s",
    "topic": "Searching",
    "sub_topic": "More Binary Search Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/smallest-factorial-number5929/1"
  },
  {
    "title": "Count Factorials with k 0s",
    "topic": "Searching",
    "sub_topic": "More Binary Search Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/"
  },
  {
    "title": "Left Out Candies",
    "topic": "Searching",
    "sub_topic": "More Binary Search Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/left-out-candies/0"
  },
  {
    "title": "Min Coin Piles",
    "topic": "Searching",
    "sub_topic": "More Binary Search Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/coin-piles5152/1/"
  },
  {
    "title": "Longest Subarray Sum > 0",
    "topic": "Searching",
    "sub_topic": "More Binary Search Problems",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/longest-subarray-with-sum-greater-than-equal-to-zero/"
  },
  {
    "title": "Double Helix - SPOJ",
    "topic": "Searching",
    "sub_topic": "More Binary Search Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/max-sum-path-in-two-arrays/1"
  },
  {
    "title": "Design Linked List",
    "topic": "Linked List",
    "sub_topic": "Design Linked List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-linked-list/"
  },
  {
    "title": "Searching - SLL",
    "topic": "Linked List",
    "sub_topic": "Design Linked List",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/search-in-a-linked-list_975381"
  },
  {
    "title": "Traversal - SLL",
    "topic": "Linked List",
    "sub_topic": "Design Linked List",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/print-linked-list-elements/1"
  },
  {
    "title": "Remove All Occurences",
    "topic": "Linked List",
    "sub_topic": "Remove List Nodes",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/remove-linked-list-elements/"
  },
  {
    "title": "Remove Duplicates in Sorted List - I",
    "topic": "Linked List",
    "sub_topic": "Remove List Nodes",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/"
  },
  {
    "title": "Remove Duplicates in Sorted List - II",
    "topic": "Linked List",
    "sub_topic": "Remove List Nodes",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/"
  },
  {
    "title": "Delete Node Without Head",
    "topic": "Linked List",
    "sub_topic": "Remove List Nodes",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/delete-node-in-a-linked-list/"
  },
  {
    "title": "Remove 0 Sum Nodes",
    "topic": "Linked List",
    "sub_topic": "Remove List Nodes",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/"
  },
  {
    "title": "Get Middle Node of List",
    "topic": "Linked List",
    "sub_topic": "Two Pointers in List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/middle-of-the-linked-list/"
  },
  {
    "title": "Delete Middle Node of List",
    "topic": "Linked List",
    "sub_topic": "Two Pointers in List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/"
  },
  {
    "title": "Get Kth Node from End",
    "topic": "Linked List",
    "sub_topic": "Two Pointers in List",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1"
  },
  {
    "title": "Delete Kth Node from End",
    "topic": "Linked List",
    "sub_topic": "Two Pointers in List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
  },
  {
    "title": "Swap Kth List Nodes",
    "topic": "Linked List",
    "sub_topic": "Two Pointers in List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/swapping-nodes-in-a-linked-list/"
  },
  {
    "title": "Intersection Node of 2 Lists",
    "topic": "Linked List",
    "sub_topic": "Two Pointers in List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/intersection-of-two-linked-lists/"
  },
  {
    "title": "Common Nodes in 2 Lists",
    "topic": "Linked List",
    "sub_topic": "Two Pointers in List",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/intersection-of-two-linked-list/1"
  },
  {
    "title": "Common Nodes in 2 Sorted Lists",
    "topic": "Linked List",
    "sub_topic": "Two Pointers in List",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1"
  },
  {
    "title": "Merge 2 Unsorted Lists",
    "topic": "Linked List",
    "sub_topic": "Two Pointers in List",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/union-of-two-linked-list/1"
  },
  {
    "title": "Check Circular List",
    "topic": "Linked List",
    "sub_topic": "Floyd's Cycle Detection",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/circular-linked-list/1"
  },
  {
    "title": "Linked List Cycle Detection",
    "topic": "Linked List",
    "sub_topic": "Floyd's Cycle Detection",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/linked-list-cycle/"
  },
  {
    "title": "Starting List Node in Cycle",
    "topic": "Linked List",
    "sub_topic": "Floyd's Cycle Detection",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/linked-list-cycle-ii/"
  },
  {
    "title": "Length of Linked List Cycle",
    "topic": "Linked List",
    "sub_topic": "Floyd's Cycle Detection",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/find-length-of-loop/1"
  },
  {
    "title": "Remove Cycle from List",
    "topic": "Linked List",
    "sub_topic": "Floyd's Cycle Detection",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1"
  },
  {
    "title": "Reverse Singly Linked List",
    "topic": "Linked List",
    "sub_topic": "Reverse Linked List",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/reverse-linked-list/"
  },
  {
    "title": "Reverse SLL in Range",
    "topic": "Linked List",
    "sub_topic": "Reverse Linked List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/reverse-linked-list-ii/"
  },
  {
    "title": "Reverse SLL in K Groups",
    "topic": "Linked List",
    "sub_topic": "Reverse Linked List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/reverse-nodes-in-k-group/"
  },
  {
    "title": "Swap List Nodes in Pairs",
    "topic": "Linked List",
    "sub_topic": "Reverse Linked List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/swap-nodes-in-pairs/"
  },
  {
    "title": "Reverse Even List Nodes",
    "topic": "Linked List",
    "sub_topic": "Reverse Linked List",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/even-reverse/"
  },
  {
    "title": "Reverse Doubly Linked List",
    "topic": "Linked List",
    "sub_topic": "Reverse Linked List",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1"
  },
  {
    "title": "Palindrome Linked List",
    "topic": "Linked List",
    "sub_topic": "Reverse Linked List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/palindrome-linked-list/"
  },
  {
    "title": "Merge 2 Sorted Lists",
    "topic": "Linked List",
    "sub_topic": "Merge Sort List",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/merge-two-sorted-lists/"
  },
  {
    "title": "Merge K Sorted Lists",
    "topic": "Linked List",
    "sub_topic": "Merge Sort List",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/merge-k-sorted-lists/"
  },
  {
    "title": "Flatten Sorted Lists",
    "topic": "Linked List",
    "sub_topic": "Merge Sort List",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1"
  },
  {
    "title": "Sort Singly Linked List",
    "topic": "Linked List",
    "sub_topic": "Merge Sort List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sort-list/"
  },
  {
    "title": "Merge Sort - SLL",
    "topic": "Linked List",
    "sub_topic": "Merge Sort List",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/merge-sort-for-linked-list/"
  },
  {
    "title": "Merge Sort - DLL",
    "topic": "Linked List",
    "sub_topic": "Merge Sort List",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/merge-sort-on-doubly-linked-list/1"
  },
  {
    "title": "Partition Linked List",
    "topic": "Linked List",
    "sub_topic": "Quick Sort List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/partition-list/"
  },
  {
    "title": "Sort Binary Linked List",
    "topic": "Linked List",
    "sub_topic": "Quick Sort List",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/sort-binary-linked-list/"
  },
  {
    "title": "Segregate Odd & Even Nodes",
    "topic": "Linked List",
    "sub_topic": "Quick Sort List",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/segregate-even-and-odd-nodes-in-a-linked-list5035/1"
  },
  {
    "title": "Sort Colors in Linked List",
    "topic": "Linked List",
    "sub_topic": "Quick Sort List",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1"
  },
  {
    "title": "QuickSort - SLL",
    "topic": "Linked List",
    "sub_topic": "Quick Sort List",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/quick-sort-on-linked-list/1"
  },
  {
    "title": "Quick Sort - DLL",
    "topic": "Linked List",
    "sub_topic": "Quick Sort List",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/quicksort-on-doubly-linked-list/1"
  },
  {
    "title": "Quicksort vs Mergesort",
    "topic": "Linked List",
    "sub_topic": "Quick Sort List",
    "difficulty": "Medium",
    "link": "https://www.interviewkickstart.com/learn/quicksort-vs-merge-sort"
  },
  {
    "title": "Quicksort vs Mergesort",
    "topic": "Linked List",
    "sub_topic": "Quick Sort List",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/why-quick-sort-preferred-for-arrays-and-merge-sort-for-linked-lists/"
  },
  {
    "title": "Fold of Linked List",
    "topic": "Linked List",
    "sub_topic": "Reorder Linked List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/reorder-list/"
  },
  {
    "title": "Unfold of Linked List",
    "topic": "Linked List",
    "sub_topic": "Reorder Linked List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/odd-even-linked-list/"
  },
  {
    "title": "Rotate Linked List",
    "topic": "Linked List",
    "sub_topic": "Reorder Linked List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/rotate-list/"
  },
  {
    "title": "Insertion Sort List",
    "topic": "Linked List",
    "sub_topic": "Reorder Linked List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/insertion-sort-list/"
  },
  {
    "title": "Split List in K Parts",
    "topic": "Linked List",
    "sub_topic": "Reorder Linked List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/split-linked-list-in-parts/"
  },
  {
    "title": "Flatten Multilevel DLL",
    "topic": "Linked List",
    "sub_topic": "Reorder Linked List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/"
  },
  {
    "title": "Clone List with Random Pointers",
    "topic": "Linked List",
    "sub_topic": "Reorder Linked List",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/copy-list-with-random-pointer/"
  },
  {
    "title": "Absolute List Sorting",
    "topic": "Linked List",
    "sub_topic": "Reorder Linked List",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/absolute-list-sorting/1"
  },
  {
    "title": "Add 1 to Linked List",
    "topic": "Linked List",
    "sub_topic": "Big Integers as Lists",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1"
  },
  {
    "title": "Add Two Lists - I",
    "topic": "Linked List",
    "sub_topic": "Big Integers as Lists",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/add-two-numbers/"
  },
  {
    "title": "Add Two Lists - II",
    "topic": "Linked List",
    "sub_topic": "Big Integers as Lists",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/add-two-numbers-ii/"
  },
  {
    "title": "Subtract Two Lists",
    "topic": "Linked List",
    "sub_topic": "Big Integers as Lists",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/subtraction-in-linked-list/1"
  },
  {
    "title": "Multiply Two Lists",
    "topic": "Linked List",
    "sub_topic": "Big Integers as Lists",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/multiply-two-linked-lists/1"
  },
  {
    "title": "Polynomial Addition",
    "topic": "Linked List",
    "sub_topic": "Big Integers as Lists",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/polynomial-addition/1"
  },
  {
    "title": "Multiply Polynomials",
    "topic": "Linked List",
    "sub_topic": "Big Integers as Lists",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/multiplication-of-two-polynomials-using-linked-list/"
  },
  {
    "title": "Design LRU Cache",
    "topic": "Linked List",
    "sub_topic": "Design Cache",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/lru-cache/"
  },
  {
    "title": "LRU Page Faults",
    "topic": "Linked List",
    "sub_topic": "Design Cache",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/page-faults-in-lru/0"
  },
  {
    "title": "Design LFU Cache",
    "topic": "Linked List",
    "sub_topic": "Design Cache",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/lfu-cache/"
  },
  {
    "title": "Design GetRandom - I",
    "topic": "Linked List",
    "sub_topic": "Design Cache",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/insert-delete-getrandom-o1/"
  },
  {
    "title": "Design GetRandom - II",
    "topic": "Linked List",
    "sub_topic": "Design Cache",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/"
  },
  {
    "title": "Design Stack Using Array",
    "topic": "Stack & Queue",
    "sub_topic": "Stack & Queue Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/implement-stack-using-array/1"
  },
  {
    "title": "Design Stack Using List",
    "topic": "Stack & Queue",
    "sub_topic": "Stack & Queue Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/implement-stack-using-linked-list/1"
  },
  {
    "title": "Design 2 Stacks in Array",
    "topic": "Stack & Queue",
    "sub_topic": "Stack & Queue Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1"
  },
  {
    "title": "Design K Stacks in Array",
    "topic": "Stack & Queue",
    "sub_topic": "Stack & Queue Basics",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/n-stacks-in-an-array_1164271"
  },
  {
    "title": "Design Stack Using Heap",
    "topic": "Stack & Queue",
    "sub_topic": "Stack & Queue Basics",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/implement-stack-using-priority-queue-or-heap/"
  },
  {
    "title": "Design Queue Using Array",
    "topic": "Stack & Queue",
    "sub_topic": "Stack & Queue Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/implement-queue-using-array/1"
  },
  {
    "title": "Design Queue Using List",
    "topic": "Stack & Queue",
    "sub_topic": "Stack & Queue Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/implement-queue-using-linked-list/1"
  },
  {
    "title": "Design Circular Queue",
    "topic": "Stack & Queue",
    "sub_topic": "Stack & Queue Basics",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-circular-queue/"
  },
  {
    "title": "Circular Queue Using Array",
    "topic": "Stack & Queue",
    "sub_topic": "Stack & Queue Basics",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/"
  },
  {
    "title": "Circular Queue Using List",
    "topic": "Stack & Queue",
    "sub_topic": "Stack & Queue Basics",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/circular-queue-set-2-circular-linked-list-implementation/"
  },
  {
    "title": "Design Circular Deque",
    "topic": "Stack & Queue",
    "sub_topic": "Doubly Ended Queue",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-circular-deque/"
  },
  {
    "title": "Deque Using Circular Array",
    "topic": "Stack & Queue",
    "sub_topic": "Doubly Ended Queue",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/implementation-deque-using-circular-array/"
  },
  {
    "title": "Deque Using DLL",
    "topic": "Stack & Queue",
    "sub_topic": "Doubly Ended Queue",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/implementation-deque-using-doubly-linked-list/"
  },
  {
    "title": "Stack & Queue using Deque",
    "topic": "Stack & Queue",
    "sub_topic": "Doubly Ended Queue",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/implement-stack-queue-using-deque/"
  },
  {
    "title": "Design Stack using Queue",
    "topic": "Stack & Queue",
    "sub_topic": "Design Stack or Queue",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/implement-stack-using-queues/"
  },
  {
    "title": "Design Queue using Stack",
    "topic": "Stack & Queue",
    "sub_topic": "Design Stack or Queue",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/implement-queue-using-stacks/"
  },
  {
    "title": "Design Minimum Stack",
    "topic": "Stack & Queue",
    "sub_topic": "Design Stack or Queue",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/min-stack/"
  },
  {
    "title": "Design Maximum Stack",
    "topic": "Stack & Queue",
    "sub_topic": "Design Stack or Queue",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/max-stack_985280"
  },
  {
    "title": "Design Max Frequency Stack",
    "topic": "Stack & Queue",
    "sub_topic": "Design Stack or Queue",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-frequency-stack/"
  },
  {
    "title": "Design Middle Queue",
    "topic": "Stack & Queue",
    "sub_topic": "Design Stack or Queue",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-front-middle-back-queue/"
  },
  {
    "title": "Delete Middle in Stack",
    "topic": "Stack & Queue",
    "sub_topic": "Design Stack or Queue",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/delete-middle-element-of-a-stack/1"
  },
  {
    "title": "Design Stack with Increments",
    "topic": "Stack & Queue",
    "sub_topic": "Design Stack or Queue",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-a-stack-with-increment-operation/"
  },
  {
    "title": "Validate Stack Sequences",
    "topic": "Stack & Queue",
    "sub_topic": "Design Stack or Queue",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/validate-stack-sequences/"
  },
  {
    "title": "Reverse Stack",
    "topic": "Stack & Queue",
    "sub_topic": "Rearrange Stack or Queue",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/reverse-stack-using-recursion_631875"
  },
  {
    "title": "Reverse Queue",
    "topic": "Stack & Queue",
    "sub_topic": "Rearrange Stack or Queue",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/reversing-queue_1170046"
  },
  {
    "title": "Sort Stack",
    "topic": "Stack & Queue",
    "sub_topic": "Rearrange Stack or Queue",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/sort-a-stack_985275"
  },
  {
    "title": "Sort Queue",
    "topic": "Stack & Queue",
    "sub_topic": "Rearrange Stack or Queue",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/library/sorting-of-queue"
  },
  {
    "title": "Interleave Queue",
    "topic": "Stack & Queue",
    "sub_topic": "Rearrange Stack or Queue",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/interleave-the-first-half-of-the-queue-with-the-second-half_1169450"
  },
  {
    "title": "Redundant Braces",
    "topic": "Stack & Queue",
    "sub_topic": "Parenthesis Matching",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/redundant-braces/"
  },
  {
    "title": "Balanced Parenthesis - I",
    "topic": "Stack & Queue",
    "sub_topic": "Parenthesis Matching",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/valid-parentheses/"
  },
  {
    "title": "Balanced Parenthesis - II",
    "topic": "Stack & Queue",
    "sub_topic": "Parenthesis Matching",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/valid-parenthesis-string/"
  },
  {
    "title": "Remove Outermost Paranthesis",
    "topic": "Stack & Queue",
    "sub_topic": "Parenthesis Matching",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/remove-outermost-parentheses/"
  },
  {
    "title": "Longest Valid Parentheses",
    "topic": "Stack & Queue",
    "sub_topic": "Parenthesis Matching",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-valid-parentheses/"
  },
  {
    "title": "Min Additions for Balanced Braces - I",
    "topic": "Stack & Queue",
    "sub_topic": "Parenthesis Matching",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/"
  },
  {
    "title": "Min Additions for Balanced Braces - II",
    "topic": "Stack & Queue",
    "sub_topic": "Parenthesis Matching",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/"
  },
  {
    "title": "Min Removals for Balanced Braces - I",
    "topic": "Stack & Queue",
    "sub_topic": "Parenthesis Matching",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/"
  },
  {
    "title": "Min Removals for Balanced Braces - II",
    "topic": "Stack & Queue",
    "sub_topic": "Parenthesis Matching",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/remove-invalid-parentheses/"
  },
  {
    "title": "Min Reversals for Balanced Braces",
    "topic": "Stack & Queue",
    "sub_topic": "Parenthesis Matching",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/count-the-reversals0401/1"
  },
  {
    "title": "Min Swaps for Balanced Braces",
    "topic": "Stack & Queue",
    "sub_topic": "Parenthesis Matching",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/minimum-swaps-for-bracket-balancing2704/1"
  },
  {
    "title": "Score of Parenthesis",
    "topic": "Stack & Queue",
    "sub_topic": "Parenthesis Matching",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/score-of-parentheses/"
  },
  {
    "title": "Reverse Substrings B/W Braces",
    "topic": "Stack & Queue",
    "sub_topic": "Parenthesis Matching",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/"
  },
  {
    "title": "Decode String",
    "topic": "Stack & Queue",
    "sub_topic": "Parenthesis Matching",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/decode-string/"
  },
  {
    "title": "Number of Atoms",
    "topic": "Stack & Queue",
    "sub_topic": "Parenthesis Matching",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/number-of-atoms/"
  },
  {
    "title": "Maximum Nesting Depth",
    "topic": "Stack & Queue",
    "sub_topic": "Parenthesis Matching",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/"
  },
  {
    "title": "Infix Evaluation",
    "topic": "Stack & Queue",
    "sub_topic": "Infix Expressions",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/arithmetic-expression-evaluation_1170517"
  },
  {
    "title": "Infix Evaluation",
    "topic": "Stack & Queue",
    "sub_topic": "Infix Expressions",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/expression-evaluation/"
  },
  {
    "title": "Infix Conversions",
    "topic": "Stack & Queue",
    "sub_topic": "Infix Expressions",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/stacks-and-queues/infix-conversions-official/ojquestion"
  },
  {
    "title": "Infix To Prefix Conversion",
    "topic": "Stack & Queue",
    "sub_topic": "Infix Expressions",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/convert-infix-prefix-notation/"
  },
  {
    "title": "Infix To Postfix Conversion",
    "topic": "Stack & Queue",
    "sub_topic": "Infix Expressions",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1"
  },
  {
    "title": "Basic Calculator - I",
    "topic": "Stack & Queue",
    "sub_topic": "Infix Expressions",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/basic-calculator/"
  },
  {
    "title": "Basic Calculator - II",
    "topic": "Stack & Queue",
    "sub_topic": "Infix Expressions",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/basic-calculator-ii/"
  },
  {
    "title": "Basic Calculator - III",
    "topic": "Stack & Queue",
    "sub_topic": "Infix Expressions",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/stacks/basic-calculator-3-official/ojquestion"
  },
  {
    "title": "Postfix Expression",
    "topic": "Stack & Queue",
    "sub_topic": "Postfix Expressions",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/stacks-and-queues/postfix-evaluation-conversions-official/ojquestion"
  },
  {
    "title": "Postfix Evaluation",
    "topic": "Stack & Queue",
    "sub_topic": "Postfix Expressions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/evaluate-reverse-polish-notation/"
  },
  {
    "title": "Postix to Infix Conversion",
    "topic": "Stack & Queue",
    "sub_topic": "Postfix Expressions",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/postfix-to-infix/"
  },
  {
    "title": "Postfix to Prefix Conversion",
    "topic": "Stack & Queue",
    "sub_topic": "Postfix Expressions",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/postfix-to-prefix_1788455"
  },
  {
    "title": "Prefix Expression",
    "topic": "Stack & Queue",
    "sub_topic": "Prefix Expressions",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/stacks-and-queues/prefix-official/ojquestion"
  },
  {
    "title": "Prefix Evaluation",
    "topic": "Stack & Queue",
    "sub_topic": "Prefix Expressions",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/evaluation-prefix-expressions/"
  },
  {
    "title": "Prefix to Infix Conversion",
    "topic": "Stack & Queue",
    "sub_topic": "Prefix Expressions",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/prefix-to-infix_1215000"
  },
  {
    "title": "Prefix to Postfix Conversion",
    "topic": "Stack & Queue",
    "sub_topic": "Prefix Expressions",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/prefix-postfix-conversion/"
  },
  {
    "title": "Exp Tree - Construction",
    "topic": "Trees",
    "sub_topic": "Expression Tree",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/build-binary-expression-tree-from-infix-expression_1281854"
  },
  {
    "title": "Exp Tree - Evaluation",
    "topic": "Trees",
    "sub_topic": "Expression Tree",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/evaluate-expression-tree_975484"
  },
  {
    "title": "Expression Tree",
    "topic": "Trees",
    "sub_topic": "Expression Tree",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/expression-tree/"
  },
  {
    "title": "Next Greater Element",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/next-larger-element-1587115620/1"
  },
  {
    "title": "NGE - Circular Array",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/next-greater-element-ii/"
  },
  {
    "title": "NGE - Two Arrays",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/next-greater-element-i/"
  },
  {
    "title": "NGE - Linked List",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/next-greater-node-in-linked-list/"
  },
  {
    "title": "Prices with Special Discount",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/"
  },
  {
    "title": "Daily Temperatures",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/daily-temperatures/"
  },
  {
    "title": "Online Stock Span",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/online-stock-span/"
  },
  {
    "title": "Largest Area Histogram",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/largest-rectangle-in-histogram/"
  },
  {
    "title": "132 Pattern",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/132-pattern/"
  },
  {
    "title": "Sum of Subarray Ranges",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sum-of-subarray-ranges/"
  },
  {
    "title": "Sum of Subarray Minimums",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sum-of-subarray-minimums/"
  },
  {
    "title": "Sum of Total Wizard Strength",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sum-of-total-strength-of-wizards/"
  },
  {
    "title": "Max Subarray Min Product",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-subarray-min-product/"
  },
  {
    "title": "Max of Sliding Window Min",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/maximum-of-minimum-for-every-window-size3453/1"
  },
  {
    "title": "No of Valid Subarrays",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/stacks/number-of-valid-subarrays-official/ojquestion"
  },
  {
    "title": "VIsible People in Queue",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/number-of-visible-people-in-a-queue/"
  },
  {
    "title": "Coubt Submatrix with All 1s",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-submatrices-with-all-ones/"
  },
  {
    "title": "Maximal Rectangle",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximal-rectangle/"
  },
  {
    "title": "Remove Duplicate Letters",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/remove-duplicate-letters/"
  },
  {
    "title": "Remove K Digits",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/remove-k-digits/"
  },
  {
    "title": "Lexico Smallest Subset",
    "topic": "Stack & Queue",
    "sub_topic": "Monotonic Stack",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-the-most-competitive-subsequence/"
  },
  {
    "title": "Asteroid Collision",
    "topic": "Stack & Queue",
    "sub_topic": "More Stack Queue Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/asteroid-collision/"
  },
  {
    "title": "Exclusive Time of Functions",
    "topic": "Stack & Queue",
    "sub_topic": "More Stack Queue Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/exclusive-time-of-functions/"
  },
  {
    "title": "Number of Recent Calls",
    "topic": "Stack & Queue",
    "sub_topic": "More Stack Queue Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/number-of-recent-calls/"
  },
  {
    "title": "Valid Word After Subsitution",
    "topic": "Stack & Queue",
    "sub_topic": "More Stack Queue Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/"
  },
  {
    "title": "1st Unique Char - Stream",
    "topic": "Stack & Queue",
    "sub_topic": "More Stack Queue Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0"
  },
  {
    "title": "Decode String at Index",
    "topic": "Stack & Queue",
    "sub_topic": "More Stack Queue Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/decoded-string-at-index/"
  },
  {
    "title": "Generate Binary Numbers",
    "topic": "Stack & Queue",
    "sub_topic": "More Stack Queue Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/generate-binary-numbers-1587115620/1"
  },
  {
    "title": "Remove Adjacent Duplicates - I",
    "topic": "Stack & Queue",
    "sub_topic": "More Stack Queue Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/"
  },
  {
    "title": "Remove Adjacent Duplicates - II",
    "topic": "Stack & Queue",
    "sub_topic": "More Stack Queue Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/"
  },
  {
    "title": "Remove Adjacent Duplicates - III",
    "topic": "Stack & Queue",
    "sub_topic": "More Stack Queue Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/consecutive-elements2306/1"
  },
  {
    "title": "Card Rotation - I",
    "topic": "Stack & Queue",
    "sub_topic": "More Stack Queue Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/reveal-cards-in-increasing-order/"
  },
  {
    "title": "Card Rotation - II",
    "topic": "Stack & Queue",
    "sub_topic": "More Stack Queue Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/card-rotation5834/1"
  },
  {
    "title": "Design HashMap",
    "topic": "Hashing",
    "sub_topic": "Hashing Technique",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-hashmap/"
  },
  {
    "title": "Design HashSet",
    "topic": "Hashing",
    "sub_topic": "Hashing Technique",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-hashset/"
  },
  {
    "title": "Common Elements",
    "topic": "Arrays",
    "sub_topic": "Intersection & Union",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-common-characters/"
  },
  {
    "title": "Uncommon Elements",
    "topic": "Arrays",
    "sub_topic": "Intersection & Union",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/uncommon-words-from-two-sentences/"
  },
  {
    "title": "Union of Unsorted Arrays",
    "topic": "Arrays",
    "sub_topic": "Intersection & Union",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/union-of-two-arrays3538/1"
  },
  {
    "title": "Common Elements in 2 of 3",
    "topic": "Arrays",
    "sub_topic": "Intersection & Union",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/two-out-of-three/"
  },
  {
    "title": "Contains Duplicate - I",
    "topic": "Arrays",
    "sub_topic": "Intersection & Union",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/contains-duplicate/"
  },
  {
    "title": "Contains Duplicate - II",
    "topic": "Arrays",
    "sub_topic": "Intersection & Union",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/contains-duplicate-ii/"
  },
  {
    "title": "Contains Duplicate - III",
    "topic": "Arrays",
    "sub_topic": "Intersection & Union",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/contains-duplicate-iii/"
  },
  {
    "title": "First Repeating Element",
    "topic": "Arrays",
    "sub_topic": "Intersection & Union",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/first-repeating-element4018/1"
  },
  {
    "title": "First Unique Element",
    "topic": "Arrays",
    "sub_topic": "Intersection & Union",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/non-repeating-element3958/1"
  },
  {
    "title": "0 Sum Subarray",
    "topic": "Arrays",
    "sub_topic": "Target Subarray Sum",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1"
  },
  {
    "title": "Largest 0 Sum Subarray",
    "topic": "Arrays",
    "sub_topic": "Target Subarray Sum",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1"
  },
  {
    "title": "Count 0 Sum Subarrays",
    "topic": "Arrays",
    "sub_topic": "Target Subarray Sum",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/zero-sum-subarrays1825/1"
  },
  {
    "title": "K Sum Subarray",
    "topic": "Arrays",
    "sub_topic": "Target Subarray Sum",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
  },
  {
    "title": "K Sum Subarray - Only Positives",
    "topic": "Arrays",
    "sub_topic": "Target Subarray Sum",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/find-subarray-with-given-sum/"
  },
  {
    "title": "K Sum Subarray - With Negatives",
    "topic": "Arrays",
    "sub_topic": "Target Subarray Sum",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/find-subarray-with-given-sum-in-array-of-integers/"
  },
  {
    "title": "Count K Sum Subarrays",
    "topic": "Arrays",
    "sub_topic": "Target Subarray Sum",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/subarray-sum-equals-k/"
  },
  {
    "title": "Largest K Sum Subarray",
    "topic": "Arrays",
    "sub_topic": "Target Subarray Sum",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1"
  },
  {
    "title": "Min Moves Reduce X to 0",
    "topic": "Arrays",
    "sub_topic": "Target Subarray Sum",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/"
  },
  {
    "title": "Count K XOR Subarrays",
    "topic": "Arrays",
    "sub_topic": "Target Subarray Sum",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/subarray-with-given-xor/"
  },
  {
    "title": "Largest Divisible Subarray",
    "topic": "Arrays",
    "sub_topic": "Divisible Subarrays",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/make-sum-divisible-by-p/"
  },
  {
    "title": "Count Divisible Subarrays",
    "topic": "Arrays",
    "sub_topic": "Divisible Subarrays",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/subarray-sums-divisible-by-k/"
  },
  {
    "title": "K Multiple Subarray Sum",
    "topic": "Arrays",
    "sub_topic": "Divisible Subarrays",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/continuous-subarray-sum/"
  },
  {
    "title": "Count Bad Pairs - I",
    "topic": "Arrays",
    "sub_topic": "Divisible Subarrays",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-number-of-bad-pairs/"
  },
  {
    "title": "Count Bad Pairs - II",
    "topic": "Arrays",
    "sub_topic": "Divisible Subarrays",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-nice-pairs-in-an-array/"
  },
  {
    "title": "Count K Absolute Diff Pairs",
    "topic": "Arrays",
    "sub_topic": "Divisible Subarrays",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/"
  },
  {
    "title": "Count Equal Divisible Pairs",
    "topic": "Arrays",
    "sub_topic": "Divisible Subarrays",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/"
  },
  {
    "title": "Count Equal Distance Points",
    "topic": "Arrays",
    "sub_topic": "Divisible Subarrays",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/pairs-of-non-coinciding-points4141/1"
  },
  {
    "title": "Largest Subarray Equal 01",
    "topic": "Hashing",
    "sub_topic": "Binary Subarray Sum",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/contiguous-array/"
  },
  {
    "title": "Count Subarrays Equal 01",
    "topic": "Hashing",
    "sub_topic": "Binary Subarray Sum",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/count-subarrays-with-equal-number-of-1s-and-0s-1587115620/1"
  },
  {
    "title": "Longest Subarray Equal 012",
    "topic": "Hashing",
    "sub_topic": "Binary Subarray Sum",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/hashmap-and-heaps/longest-subarray-with-equal-number-of-0s-1s-and-2s-official/ojquestion"
  },
  {
    "title": "Count Subarrays Equal 012",
    "topic": "Hashing",
    "sub_topic": "Binary Subarray Sum",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/equal-0-1-and-23208/1"
  },
  {
    "title": "Largest Subarray More 1s",
    "topic": "Hashing",
    "sub_topic": "Binary Subarray Sum",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-well-performing-interval/"
  },
  {
    "title": "Binary Subarray Target Sum",
    "topic": "Hashing",
    "sub_topic": "Binary Subarray Sum",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/binary-subarrays-with-sum/"
  },
  {
    "title": "Count 0 Sum Submatrix",
    "topic": "Hashing",
    "sub_topic": "Target Sum Submatrices",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/sub-matrices-with-sum-zero/"
  },
  {
    "title": "Largest 0 Sum Submatrix",
    "topic": "Hashing",
    "sub_topic": "Target Sum Submatrices",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/largest-rectangular-sub-matrix-whose-sum-is-0/1"
  },
  {
    "title": "Count K Sum Submatrix",
    "topic": "Hashing",
    "sub_topic": "Target Sum Submatrices",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/"
  },
  {
    "title": "Largest Submatrix Equal 01",
    "topic": "Hashing",
    "sub_topic": "Target Sum Submatrices",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/largest-submatrix-with-equal-number-of-0-s-and-1-s_1062689"
  },
  {
    "title": "Max Sum Square Submatrix",
    "topic": "Hashing",
    "sub_topic": "Target Sum Submatrices",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/maximum-sum-square-submatrix/"
  },
  {
    "title": "Count 0 XOR Pairs",
    "topic": "Hashing",
    "sub_topic": "More Hashing Questions",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/counts-zeros-xor-pairs0349/1"
  },
  {
    "title": "Degree of Array",
    "topic": "Hashing",
    "sub_topic": "More Hashing Questions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/degree-of-an-array/"
  },
  {
    "title": "Longest Consecutive Sequence",
    "topic": "Hashing",
    "sub_topic": "More Hashing Questions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-consecutive-sequence/"
  },
  {
    "title": "Tricky Sorting Cost",
    "topic": "Hashing",
    "sub_topic": "More Hashing Questions",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/morning-assembly3038/1"
  },
  {
    "title": "Array Pairs Divisible by K",
    "topic": "Hashing",
    "sub_topic": "More Hashing Questions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/"
  },
  {
    "title": "Fraction to Recurring Decimal",
    "topic": "Hashing",
    "sub_topic": "More Hashing Questions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/fraction-to-recurring-decimal/"
  },
  {
    "title": "Rabbits in Forest",
    "topic": "Hashing",
    "sub_topic": "More Hashing Questions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/rabbits-in-forest/"
  },
  {
    "title": "Array of Doubled Pairs",
    "topic": "Hashing",
    "sub_topic": "More Hashing Questions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/array-of-doubled-pairs/"
  },
  {
    "title": "Powerful Integers",
    "topic": "Hashing",
    "sub_topic": "More Hashing Questions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/powerful-integers/"
  },
  {
    "title": "Hand of Straights",
    "topic": "Hashing",
    "sub_topic": "More Hashing Questions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/hand-of-straights/"
  },
  {
    "title": "Rank Transform of Array",
    "topic": "Hashing",
    "sub_topic": "More Hashing Questions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/rank-transform-of-an-array/"
  },
  {
    "title": "Stream Disjoint Intervals",
    "topic": "Hashing",
    "sub_topic": "More Hashing Questions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/data-stream-as-disjoint-intervals/"
  },
  {
    "title": "Brick Wall",
    "topic": "Hashing",
    "sub_topic": "More Hashing Questions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/brick-wall/"
  },
  {
    "title": "Max Equal Frequency",
    "topic": "Hashing",
    "sub_topic": "More Hashing Questions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-equal-frequency/"
  },
  {
    "title": "Design Priority Queue",
    "topic": "Heap",
    "sub_topic": "Binary Heap",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/hashmap-and-heap/priority-queue-using-heap-official/ojquestion"
  },
  {
    "title": "Build Min Heap",
    "topic": "Heap",
    "sub_topic": "Binary Heap",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/build-min-heap_1171167"
  },
  {
    "title": "Heap Sort",
    "topic": "Heap",
    "sub_topic": "Binary Heap",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/heap-sort/1"
  },
  {
    "title": "Heap Sort MCQ",
    "topic": "Heap",
    "sub_topic": "Binary Heap",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/algorithms-sorting-question-21/"
  },
  {
    "title": "Does Array Represent Heap",
    "topic": "Heap",
    "sub_topic": "Binary Heap",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/does-array-represent-heap4345/1"
  },
  {
    "title": "Is Binary Tree Heap",
    "topic": "Heap",
    "sub_topic": "Binary Heap",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/is-binary-tree-heap/1"
  },
  {
    "title": "Convert Min to Max Heap",
    "topic": "Heap",
    "sub_topic": "Binary Heap",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/convert-min-heap-to-max-heap_1381084"
  },
  {
    "title": "Convert BST to Min Heap",
    "topic": "Heap",
    "sub_topic": "Binary Heap",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/convert-bst-to-min-heap_920498"
  },
  {
    "title": "Merge Two Max Heaps",
    "topic": "Heap",
    "sub_topic": "Binary Heap",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/merge-two-binary-max-heap0144/1"
  },
  {
    "title": "Priority Queue Using List",
    "topic": "Heap",
    "sub_topic": "Binary Heap",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/priority-queue-using-linked-list/"
  },
  {
    "title": "Priority Queue Using Heap",
    "topic": "Heap",
    "sub_topic": "Binary Heap",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/why-is-binary-heap-preferred-over-bst-for-priority-queue/"
  },
  {
    "title": "K Largest - Sorted Order",
    "topic": "Heap",
    "sub_topic": "Heap Order Statistics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/k-largest-elements3736/1"
  },
  {
    "title": "K Largest - Original Order",
    "topic": "Heap",
    "sub_topic": "Heap Order Statistics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/print-k-smallest-elements-in-their-original-order/0"
  },
  {
    "title": "K Closest Points",
    "topic": "Heap",
    "sub_topic": "Heap Order Statistics",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/k-closest-points-to-origin/"
  },
  {
    "title": "Kth Smallest Element",
    "topic": "Heap",
    "sub_topic": "Heap Order Statistics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1"
  },
  {
    "title": "Kth Largest Element",
    "topic": "Heap",
    "sub_topic": "Heap Order Statistics",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/kth-largest-element-in-an-array/"
  },
  {
    "title": "Quick Select Algorithm",
    "topic": "Heap",
    "sub_topic": "Heap Order Statistics",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/quickselect-algorithm/"
  },
  {
    "title": "Kth Largest in Stream",
    "topic": "Heap",
    "sub_topic": "Heap Order Statistics",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/kth-largest-element-in-a-stream/"
  },
  {
    "title": "Kth Smallest in Sorted Matrix",
    "topic": "Heap",
    "sub_topic": "Heap Order Statistics",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/"
  },
  {
    "title": "K Min Sum Combinations",
    "topic": "Heap",
    "sub_topic": "Heap Order Statistics",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/"
  },
  {
    "title": "Kth Smallest Fraction",
    "topic": "Heap",
    "sub_topic": "Heap Order Statistics",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/k-th-smallest-prime-fraction/"
  },
  {
    "title": "Sort K Sorted Array",
    "topic": "Heap",
    "sub_topic": "Heap Order Statistics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/nearly-sorted-algorithm/0"
  },
  {
    "title": "Merge K Sorted Arrays",
    "topic": "Heap",
    "sub_topic": "Heap Order Statistics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1"
  },
  {
    "title": "Smallest Range in K Lists",
    "topic": "Heap",
    "sub_topic": "Heap Order Statistics",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/"
  },
  {
    "title": "Geometric Algorithms",
    "topic": "Mathematics",
    "sub_topic": "Basic Geometry Problems",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/geometric-algorithms/"
  },
  {
    "title": "Rectangle Overlap",
    "topic": "Mathematics",
    "sub_topic": "Basic Geometry Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/rectangle-overlap/"
  },
  {
    "title": "Largest Triangle Perimeter",
    "topic": "Mathematics",
    "sub_topic": "Basic Geometry Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/largest-perimeter-triangle/"
  },
  {
    "title": "Matrix Cells in Order",
    "topic": "Mathematics",
    "sub_topic": "Basic Geometry Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/matrix-cells-in-distance-order/"
  },
  {
    "title": "Largest Triangle Area",
    "topic": "Mathematics",
    "sub_topic": "Basic Geometry Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/largest-triangle-area/"
  },
  {
    "title": "Construct Rectangle",
    "topic": "Mathematics",
    "sub_topic": "Basic Geometry Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/construct-the-rectangle/"
  },
  {
    "title": "Two Collinear Points",
    "topic": "Mathematics",
    "sub_topic": "Basic Geometry Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/check-if-it-is-a-straight-line/"
  },
  {
    "title": "Non Collinear Points",
    "topic": "Mathematics",
    "sub_topic": "Basic Geometry Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/valid-boomerang/"
  },
  {
    "title": "Valid Square Points",
    "topic": "Mathematics",
    "sub_topic": "Basic Geometry Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/valid-square/"
  },
  {
    "title": "Max Distance Points",
    "topic": "Mathematics",
    "sub_topic": "Basic Geometry Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-of-absolute-value-expression/"
  },
  {
    "title": "Total Rectangle Area",
    "topic": "Mathematics",
    "sub_topic": "Basic Geometry Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/rectangle-area/"
  },
  {
    "title": "Max Collinear Points",
    "topic": "Mathematics",
    "sub_topic": "Basic Geometry Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/max-points-on-a-line/"
  },
  {
    "title": "Best Meeting Point",
    "topic": "Mathematics",
    "sub_topic": "Basic Geometry Problems",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/best-meeting-point_1463982"
  },
  {
    "title": "Line Reflection",
    "topic": "Mathematics",
    "sub_topic": "Basic Geometry Problems",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/line-reflection_1467109"
  },
  {
    "title": "Intersecting Lines",
    "topic": "Mathematics",
    "sub_topic": "Basic Geometry Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/check-if-two-line-segments-intersect0017/1"
  },
  {
    "title": "Check Pt Inside Triangle",
    "topic": "Mathematics",
    "sub_topic": "Basic Geometry Problems",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/check-whether-a-given-point-lies-inside-a-triangle-or-not/"
  },
  {
    "title": "Two Sum - Unsorted",
    "topic": "Hashing",
    "sub_topic": "Target Sum Pair",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/two-sum/"
  },
  {
    "title": "Two Sum - Unsorted",
    "topic": "Hashing",
    "sub_topic": "Target Sum Pair",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/"
  },
  {
    "title": "Two Sum - Sorted",
    "topic": "Hashing",
    "sub_topic": "Target Sum Pair",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"
  },
  {
    "title": "K Sum Pairs - Remove Pairs",
    "topic": "Hashing",
    "sub_topic": "Target Sum Pair",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/max-number-of-k-sum-pairs/"
  },
  {
    "title": "K Sum Pairs - Two Arrays",
    "topic": "Hashing",
    "sub_topic": "Target Sum Pair",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/count-pair-sum5956/1"
  },
  {
    "title": "K Sum Pairs - Unique Pairs",
    "topic": "Hashing",
    "sub_topic": "Target Sum Pair",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/arrays-and-strings/2-sum-target-sum-unique-pairs/ojquestion"
  },
  {
    "title": "K Sum Pairs - All Pairs",
    "topic": "Hashing",
    "sub_topic": "Target Sum Pair",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1"
  },
  {
    "title": "K Sum Pairs - Sorted Matrix",
    "topic": "Hashing",
    "sub_topic": "Target Sum Pair",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/count-pairs-sum-in-matrices4332/1"
  },
  {
    "title": "Two Sum - Closest",
    "topic": "Hashing",
    "sub_topic": "Target Sum Pair",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/pair-in-array-whose-sum-is-closest-to-x1124/0"
  },
  {
    "title": "Two Sum - Design",
    "topic": "Hashing",
    "sub_topic": "Target Sum Pair",
    "difficulty": "Medium",
    "link": "https://www.lintcode.com/problem/607/"
  },
  {
    "title": "Two Sum - Smaller",
    "topic": "Hashing",
    "sub_topic": "Target Sum Pair",
    "difficulty": "Medium",
    "link": "https://www.lintcode.com/problem/609"
  },
  {
    "title": "Two Sum - Greater",
    "topic": "Hashing",
    "sub_topic": "Target Sum Pair",
    "difficulty": "Medium",
    "link": "https://www.lintcode.com/problem/443"
  },
  {
    "title": "Boats to Save People",
    "topic": "Hashing",
    "sub_topic": "Target Sum Pair",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/boats-to-save-people/"
  },
  {
    "title": "Target Difference Pair",
    "topic": "Hashing",
    "sub_topic": "Target Sum Pair",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/find-pair-given-difference1559/1"
  },
  {
    "title": "K Difference Pairs",
    "topic": "Hashing",
    "sub_topic": "Target Sum Pair",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/k-diff-pairs-in-an-array/"
  },
  {
    "title": "Longest Difference Pair",
    "topic": "Hashing",
    "sub_topic": "Target Sum Pair",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/"
  },
  {
    "title": "3 Sum",
    "topic": "Hashing",
    "sub_topic": "Target Sum Triplet",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/3sum/"
  },
  {
    "title": "3 Sum - Closest",
    "topic": "Hashing",
    "sub_topic": "Target Sum Triplet",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/3sum-closest/"
  },
  {
    "title": "3 Sum - Smaller",
    "topic": "Hashing",
    "sub_topic": "Target Sum Triplet",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1"
  },
  {
    "title": "Target Sum Triplets",
    "topic": "Hashing",
    "sub_topic": "Target Sum Triplet",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/3sum-with-multiplicity/"
  },
  {
    "title": "Count Valid Triplets",
    "topic": "Hashing",
    "sub_topic": "Target Sum Triplet",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/count-the-triplets4615/1"
  },
  {
    "title": "Valid Triangles",
    "topic": "Hashing",
    "sub_topic": "Target Sum Triplet",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/valid-triangle-number/"
  },
  {
    "title": "Good Triplets",
    "topic": "Hashing",
    "sub_topic": "Target Sum Triplet",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-good-triplets/"
  },
  {
    "title": "Closest in 3 Arrays",
    "topic": "Hashing",
    "sub_topic": "Target Sum Triplet",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/array-3-pointers/"
  },
  {
    "title": "4 Sum - I",
    "topic": "General",
    "sub_topic": "Quadruplet Sum",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/4sum/"
  },
  {
    "title": "4 Sum - Using 2 Pointer",
    "topic": "General",
    "sub_topic": "Quadruplet Sum",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/find-four-numbers-with-sum-equal-to-given-sum/"
  },
  {
    "title": "4 Sum - Using Hashmap",
    "topic": "General",
    "sub_topic": "Quadruplet Sum",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/find-four-elements-that-sum-to-a-given-value-set-2/"
  },
  {
    "title": "4 Sum - II",
    "topic": "General",
    "sub_topic": "Quadruplet Sum",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/4sum-ii/"
  },
  {
    "title": "Tuples - Equal Sum",
    "topic": "General",
    "sub_topic": "Quadruplet Sum",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/sum-equals-to-sum4006/1"
  },
  {
    "title": "Tuples - Equal Product",
    "topic": "General",
    "sub_topic": "Quadruplet Sum",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/tuple-with-same-product/"
  },
  {
    "title": "Special Quadruplets",
    "topic": "General",
    "sub_topic": "Quadruplet Sum",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-special-quadruplets/"
  },
  {
    "title": "Target Sum K Set",
    "topic": "General",
    "sub_topic": "Quadruplet Sum",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/arrays-and-strings/k-sum-target-sum-unique-set/ojquestion"
  },
  {
    "title": "Trapping Rain Water",
    "topic": "General",
    "sub_topic": "Two Pointer Problems",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/trapping-rain-water/"
  },
  {
    "title": "Container with Most Water",
    "topic": "General",
    "sub_topic": "Two Pointer Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/container-with-most-water/"
  },
  {
    "title": "Max Consecutive Ones",
    "topic": "General",
    "sub_topic": "Two Pointer Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/max-consecutive-ones/"
  },
  {
    "title": "Remove All Occurences",
    "topic": "General",
    "sub_topic": "Two Pointer Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/remove-element/"
  },
  {
    "title": "Remove Duplicates Sorted - I",
    "topic": "General",
    "sub_topic": "Two Pointer Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
  },
  {
    "title": "Remove Duplicates Sorted - II",
    "topic": "General",
    "sub_topic": "Two Pointer Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/"
  },
  {
    "title": "Long Pressed Name",
    "topic": "General",
    "sub_topic": "Two Pointer Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/long-pressed-name/"
  },
  {
    "title": "Longest Consecutive Chars",
    "topic": "General",
    "sub_topic": "Two Pointer Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/consecutive-characters/"
  },
  {
    "title": "Count Equal Consecutive 0s 1s",
    "topic": "General",
    "sub_topic": "Two Pointer Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-binary-substrings/"
  },
  {
    "title": "Happy Number",
    "topic": "General",
    "sub_topic": "Two Pointer Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/happy-number/"
  },
  {
    "title": "Fizz Buzz",
    "topic": "General",
    "sub_topic": "Two Pointer Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/fizz-buzz/"
  },
  {
    "title": "Smallest String Deleting Ends",
    "topic": "General",
    "sub_topic": "Two Pointer Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/"
  },
  {
    "title": "Shorted Unsorted Subarray",
    "topic": "General",
    "sub_topic": "Two Pointer Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/shortest-unsorted-continuous-subarray/"
  },
  {
    "title": "Max Sum Subarray Size K",
    "topic": "General",
    "sub_topic": "Static Sliding Window",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1"
  },
  {
    "title": "Max Subarray Average Size K",
    "topic": "General",
    "sub_topic": "Static Sliding Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-average-subarray-i/"
  },
  {
    "title": "K Radius Subarray Averages",
    "topic": "General",
    "sub_topic": "Static Sliding Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/k-radius-subarray-averages/"
  },
  {
    "title": "Min Sum Subarray Size K",
    "topic": "General",
    "sub_topic": "Static Sliding Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/"
  },
  {
    "title": "Sliding Window Maximum",
    "topic": "General",
    "sub_topic": "Static Sliding Window",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/sliding-window-maximum/"
  },
  {
    "title": "Anagram Permutation",
    "topic": "General",
    "sub_topic": "Static Sliding Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/permutation-in-string/"
  },
  {
    "title": "Distinct Nos Sliding Window",
    "topic": "General",
    "sub_topic": "Static Sliding Window",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/count-distinct-elements-in-every-window/1"
  },
  {
    "title": "Min Swaps Group Together - I",
    "topic": "General",
    "sub_topic": "Static Sliding Window",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/group-all-1-s-together_1171155"
  },
  {
    "title": "Min Swaps Group Together - II",
    "topic": "General",
    "sub_topic": "Static Sliding Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/"
  },
  {
    "title": "Min Swaps Group Together - III",
    "topic": "General",
    "sub_topic": "Static Sliding Window",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together4847/1"
  },
  {
    "title": "First Negative Sliding Window",
    "topic": "General",
    "sub_topic": "Static Sliding Window",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1"
  },
  {
    "title": "Substring Concatenations",
    "topic": "General",
    "sub_topic": "Static Sliding Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/"
  },
  {
    "title": "Max Sum Atmost 2 Unique",
    "topic": "General",
    "sub_topic": "Static Sliding Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/fruit-into-baskets/"
  },
  {
    "title": "Sliding Window Median",
    "topic": "General",
    "sub_topic": "Static Sliding Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sliding-window-median/"
  },
  {
    "title": "Smallest Subarray Sum >= X - I",
    "topic": "Arrays",
    "sub_topic": "Dynamic Array Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-size-subarray-sum/"
  },
  {
    "title": "Smallest Subarray Sum >= X - II",
    "topic": "Arrays",
    "sub_topic": "Dynamic Array Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/"
  },
  {
    "title": "Maximum Subarray Sum < X",
    "topic": "Arrays",
    "sub_topic": "Dynamic Array Window",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/maximum-sum-of-subarray-less-than-or-equal-to-x4033/1"
  },
  {
    "title": "Count Subarrays Score < K",
    "topic": "Arrays",
    "sub_topic": "Dynamic Array Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-subarrays-with-score-less-than-k/"
  },
  {
    "title": "Count Subarrays Product < X",
    "topic": "Arrays",
    "sub_topic": "Dynamic Array Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/subarray-product-less-than-k/"
  },
  {
    "title": "Subarrays with Max Value > K",
    "topic": "Arrays",
    "sub_topic": "Dynamic Array Window",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/count-of-subarrays5922/1"
  },
  {
    "title": "Subarrays Bounded Maximum",
    "topic": "Arrays",
    "sub_topic": "Dynamic Array Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/"
  },
  {
    "title": "Max Sum Subarray All Unique",
    "topic": "Arrays",
    "sub_topic": "Dynamic Array Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-erasure-value/"
  },
  {
    "title": "Max Sum Rectangle < K Sum",
    "topic": "Arrays",
    "sub_topic": "Dynamic Array Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/"
  },
  {
    "title": "Max Consecutive 1s K Flips",
    "topic": "Arrays",
    "sub_topic": "Dynamic Array Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/max-consecutive-ones-iii/"
  },
  {
    "title": "Minimum Window Substring - I",
    "topic": "Strings",
    "sub_topic": "Dynamic String Window",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/minimum-window-substring/"
  },
  {
    "title": "Minimum Window Substring - II",
    "topic": "Strings",
    "sub_topic": "Dynamic String Window",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/smallest-distant-window/0"
  },
  {
    "title": "Minimum Window Subsequence",
    "topic": "Strings",
    "sub_topic": "Dynamic String Window",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/minimum-window-subsequence_2181133"
  },
  {
    "title": "Longest Substring All Unique",
    "topic": "Strings",
    "sub_topic": "Dynamic String Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
  },
  {
    "title": "Count Substrings All Unique",
    "topic": "Strings",
    "sub_topic": "Dynamic String Window",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/hashmap-and-heaps/count-of-substrings-having-all-unique-characters-official/ojquestion"
  },
  {
    "title": "Longest Substring Atmost K Unique",
    "topic": "Strings",
    "sub_topic": "Dynamic String Window",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/longest-sub-string-with-at-most-k-distinct-characters_699944"
  },
  {
    "title": "Count Substrings Atmost K Unique",
    "topic": "Strings",
    "sub_topic": "Dynamic String Window",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/hashmap-and-heaps/count-of-substrings-having-at-most-k-unique-characters-official/ojquestion"
  },
  {
    "title": "Longest Substring Exact K Unique",
    "topic": "Strings",
    "sub_topic": "Dynamic String Window",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1"
  },
  {
    "title": "Count Substrings Exact K Unique",
    "topic": "Strings",
    "sub_topic": "Dynamic String Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/subarrays-with-k-different-integers/"
  },
  {
    "title": "Count Subarrays K Odd",
    "topic": "Strings",
    "sub_topic": "Dynamic String Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-number-of-nice-subarrays/"
  },
  {
    "title": "Longest Substring Atleast K Repeating",
    "topic": "Strings",
    "sub_topic": "Dynamic String Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/"
  },
  {
    "title": "Count Substrings All Chars",
    "topic": "Strings",
    "sub_topic": "Dynamic String Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/"
  },
  {
    "title": "Longest Repeating Replacement",
    "topic": "Strings",
    "sub_topic": "Dynamic String Window",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-repeating-character-replacement/"
  },
  {
    "title": "Job Sequencing",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1"
  },
  {
    "title": "Merge Intervals",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/merge-intervals/"
  },
  {
    "title": "Insert Interval",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/insert-interval/"
  },
  {
    "title": "Interval Intersections",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/interval-list-intersections/"
  },
  {
    "title": "Max Overlap Intervals",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/"
  },
  {
    "title": "Video Stitching",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/video-stitching/"
  },
  {
    "title": "Max Meetings - I",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1"
  },
  {
    "title": "Max Meetings - II",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/"
  },
  {
    "title": "Max Meetings - III",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/meeting-rooms-iii/"
  },
  {
    "title": "Activity Selection",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/activity-selection-problem-greedy-algo-1/"
  },
  {
    "title": "Max Train Stoppage",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/maximum-trains-for-which-stoppage-can-be-provided_1169456"
  },
  {
    "title": "Disjoint Intervals",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/non-overlapping-intervals/"
  },
  {
    "title": "Min Balloon Bursts",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/"
  },
  {
    "title": "Max Chain Length",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-length-of-pair-chain/"
  },
  {
    "title": "Min Meeting Rooms",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/meeting-room-ii_893289"
  },
  {
    "title": "Min Train Platforms",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1"
  },
  {
    "title": "Car Pooling",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/car-pooling/"
  },
  {
    "title": "Teemo Attacking",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/teemo-attacking/"
  },
  {
    "title": "Employee Free Time",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/employee-free-time_1171181"
  },
  {
    "title": "My Calendar - I",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/my-calendar-i/"
  },
  {
    "title": "My Calendar - II",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/my-calendar-ii/"
  },
  {
    "title": "My Calendar - III",
    "topic": "Greedy",
    "sub_topic": "Meeting Rooms",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/my-calendar-iii/"
  },
  {
    "title": "Weight Balanced Tree",
    "topic": "Heap",
    "sub_topic": "Huffman Coding",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/comparison-between-height-balanced-tree-and-weight-balanced-tree/"
  },
  {
    "title": "Huffman Encoding",
    "topic": "Heap",
    "sub_topic": "Huffman Coding",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/huffman-encoding3345/1"
  },
  {
    "title": "Huffman Decoding",
    "topic": "Heap",
    "sub_topic": "Huffman Coding",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/huffman-decoding/1"
  },
  {
    "title": "Min Cost of Ropes",
    "topic": "Heap",
    "sub_topic": "Huffman Coding",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1"
  },
  {
    "title": "Encode & Decode String",
    "topic": "Heap",
    "sub_topic": "Huffman Coding",
    "difficulty": "Medium",
    "link": "https://www.lintcode.com/problem/659/"
  },
  {
    "title": "Max Product of 3 Nos",
    "topic": "Arrays",
    "sub_topic": "Max or Min in Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-product-of-three-numbers/"
  },
  {
    "title": "Min Subset Greater Sum",
    "topic": "Arrays",
    "sub_topic": "Max or Min in Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/"
  },
  {
    "title": "Smallest Range Score",
    "topic": "Arrays",
    "sub_topic": "Max or Min in Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/smallest-range-ii/"
  },
  {
    "title": "Least Unique Elements",
    "topic": "Arrays",
    "sub_topic": "Max or Min in Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/"
  },
  {
    "title": "Min Difference 3 Moves",
    "topic": "Arrays",
    "sub_topic": "Max or Min in Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/"
  },
  {
    "title": "Min Fibonacci Sum K",
    "topic": "Arrays",
    "sub_topic": "Max or Min in Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/"
  },
  {
    "title": "Min Moves Equal - I",
    "topic": "Arrays",
    "sub_topic": "Max or Min in Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-moves-to-equal-array-elements/"
  },
  {
    "title": "Min Moves Equal - II",
    "topic": "Arrays",
    "sub_topic": "Max or Min in Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/"
  },
  {
    "title": "Partition Disjoint Intervals",
    "topic": "Arrays",
    "sub_topic": "Max or Min in Array",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/partition-array-into-disjoint-intervals/"
  },
  {
    "title": "Not Target Sum Subset",
    "topic": "Arrays",
    "sub_topic": "Max or Min in Array",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/smallest-number-subset1220/1"
  },
  {
    "title": "Max Sum 2nd Smallest",
    "topic": "Arrays",
    "sub_topic": "Max or Min in Array",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/max-sum-in-sub-arrays0824/1"
  },
  {
    "title": "Indian Coin Change",
    "topic": "Arrays",
    "sub_topic": "Max or Min in Array",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/-minimum-number-of-coins4426/1"
  },
  {
    "title": "Chocolate Distribution",
    "topic": "Arrays",
    "sub_topic": "Max or Min in Array",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem/0"
  },
  {
    "title": "Min & Max Candies",
    "topic": "Arrays",
    "sub_topic": "Max or Min in Array",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/shop-in-candy-store/0"
  },
  {
    "title": "Highest Pyramid",
    "topic": "Arrays",
    "sub_topic": "Max or Min in Array",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/find-maximum-height-pyramid-from-the-given-array-of-objects/"
  },
  {
    "title": "Max Sum Rotation",
    "topic": "Arrays",
    "sub_topic": "Max or Min in Array",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/max-sum-in-the-configuration/1"
  },
  {
    "title": "Minimum Jumps in Seats",
    "topic": "Arrays",
    "sub_topic": "Max or Min in Array",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/seats/"
  },
  {
    "title": "Max Profit Ticket Selling",
    "topic": "Arrays",
    "sub_topic": "Max or Min in Array",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/profit-maximisation/"
  },
  {
    "title": "Max Sum Value X Index",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/maximize-arrii-of-an-array0026/1"
  },
  {
    "title": "Coordinate Compression",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/convert-an-array-to-reduced-form1101/1"
  },
  {
    "title": "Assign Cookies",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/assign-cookies/"
  },
  {
    "title": "Lemonade Change",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/lemonade-change/"
  },
  {
    "title": "Next Permutation - I",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/next-permutation/"
  },
  {
    "title": "Next Permutation - II",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/next-greater-element-iii/"
  },
  {
    "title": "Smallest Permutation",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/"
  },
  {
    "title": "Largest Permutation",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/largest-permutation/"
  },
  {
    "title": "Largest No From Array",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/largest-number/"
  },
  {
    "title": "Min Sum of 2 Numbers",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/min-sum-formed-by-digits3551/1"
  },
  {
    "title": "Arithmetic Sequence",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/"
  },
  {
    "title": "DI String Match",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/di-string-match/"
  },
  {
    "title": "Max Absolute Difference - I",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/swap-and-maximize5859/1"
  },
  {
    "title": "Max Absolute Difference - II",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/maximum-absolute-difference/"
  },
  {
    "title": "Reorganize String - I",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/reorganize-string/"
  },
  {
    "title": "Reorganize String - II",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/ninja-favourite-string_1460386"
  },
  {
    "title": "Distinct Barcodes",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/distant-barcodes/"
  },
  {
    "title": "Task Scheduler",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/task-scheduler/"
  },
  {
    "title": "Max Profit Assigning Work",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/most-profit-assigning-work/"
  },
  {
    "title": "Shortest Job First Scheduling",
    "topic": "Arrays",
    "sub_topic": "Array Permutation",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/single-threaded-cpu/"
  },
  {
    "title": "Partition Labels",
    "topic": "Arrays",
    "sub_topic": "Array Partitions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/partition-labels/"
  },
  {
    "title": "Max Chunks to Sort - I",
    "topic": "Arrays",
    "sub_topic": "Array Partitions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/max-chunks-to-make-sorted/"
  },
  {
    "title": "Max Chunks to Sort - II",
    "topic": "Arrays",
    "sub_topic": "Array Partitions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/max-chunks-to-make-sorted-ii/"
  },
  {
    "title": "Min Moves Unique Array",
    "topic": "Arrays",
    "sub_topic": "Array Partitions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-increment-to-make-array-unique/"
  },
  {
    "title": "Array Partition Pairs",
    "topic": "Arrays",
    "sub_topic": "Array Partitions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/array-partition/"
  },
  {
    "title": "Largest Derangement",
    "topic": "Arrays",
    "sub_topic": "Array Partitions",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/largest-derangement-sequence/"
  },
  {
    "title": "Circular Tour - I",
    "topic": "Arrays",
    "sub_topic": "Array Partitions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/gas-station/"
  },
  {
    "title": "Circular Tour - II",
    "topic": "Arrays",
    "sub_topic": "Array Partitions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-number-of-refueling-stops/"
  },
  {
    "title": "Candy Distribution",
    "topic": "Arrays",
    "sub_topic": "Array Partitions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/candy/"
  },
  {
    "title": "Kill Most Monsters",
    "topic": "Arrays",
    "sub_topic": "Array Partitions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/eliminate-maximum-number-of-monsters/"
  },
  {
    "title": "Advantage Shuffle",
    "topic": "Arrays",
    "sub_topic": "Array Partitions",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/advantage-shuffle/"
  },
  {
    "title": "Minimize the Heights - I",
    "topic": "Arrays",
    "sub_topic": "Array Partitions",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/minimize-the-heights-i/1"
  },
  {
    "title": "Minimize the Heights - II",
    "topic": "Arrays",
    "sub_topic": "Array Partitions",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1"
  },
  {
    "title": "Median from Data Stream",
    "topic": "Sorting",
    "sub_topic": "Custom Sorting",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-median-from-data-stream/"
  },
  {
    "title": "Minimize Cash Flow",
    "topic": "Sorting",
    "sub_topic": "Custom Sorting",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/minimize-cash-flow/0"
  },
  {
    "title": "Two City Scheduling",
    "topic": "Sorting",
    "sub_topic": "Custom Sorting",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/two-city-scheduling/"
  },
  {
    "title": "Maximum Profit IPO",
    "topic": "Sorting",
    "sub_topic": "Custom Sorting",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/ipo/"
  },
  {
    "title": "Height Queue Reconstruct",
    "topic": "Sorting",
    "sub_topic": "Custom Sorting",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/queue-reconstruction-by-height/"
  },
  {
    "title": "Defense Kingdom",
    "topic": "Sorting",
    "sub_topic": "Custom Sorting",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/"
  },
  {
    "title": "Custom Sort String",
    "topic": "Sorting",
    "sub_topic": "Custom Sorting",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/custom-sort-string/"
  },
  {
    "title": "Marks of PCM",
    "topic": "Sorting",
    "sub_topic": "Custom Sorting",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/marks-of-pcm2529/1"
  },
  {
    "title": "Car Fleet",
    "topic": "Sorting",
    "sub_topic": "Custom Sorting",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/car-fleet/"
  },
  {
    "title": "Wine Buying & Selling",
    "topic": "Sorting",
    "sub_topic": "Custom Sorting",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/wine-buying-and-selling/1"
  },
  {
    "title": "Arrange Amplifiers",
    "topic": "Sorting",
    "sub_topic": "Custom Sorting",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/arranging-amplifiers_1171045"
  },
  {
    "title": "Biased Standings",
    "topic": "Sorting",
    "sub_topic": "Custom Sorting",
    "difficulty": "Medium",
    "link": "https://www.spoj.com/problems/BAISED/"
  },
  {
    "title": "Constructor - Binary Tree",
    "topic": "Graphs",
    "sub_topic": "Basics of DFS",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/binary-tree/binary_tree_constructor/topic"
  },
  {
    "title": "Tree Properties",
    "topic": "Graphs",
    "sub_topic": "Basics of DFS",
    "difficulty": "Medium",
    "link": "https://drive.google.com/file/d/1A3Qiyb7MRryTErL5r1KtnxxLzPjOyTME/view"
  },
  {
    "title": "Size - Binary Tree",
    "topic": "Graphs",
    "sub_topic": "Basics of DFS",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/size-of-binary-tree/1"
  },
  {
    "title": "Max & Min - Binary Tree",
    "topic": "Graphs",
    "sub_topic": "Basics of DFS",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/max-and-min-element-in-binary-tree/1"
  },
  {
    "title": "Preorder Traversal - Binary Tree",
    "topic": "Graphs",
    "sub_topic": "Basics of DFS",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/binary-tree-preorder-traversal/"
  },
  {
    "title": "Inorder Traversal - Binary Tree",
    "topic": "Graphs",
    "sub_topic": "Basics of DFS",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/binary-tree-inorder-traversal/"
  },
  {
    "title": "Postorder Traversal - Binary Tree",
    "topic": "Graphs",
    "sub_topic": "Basics of DFS",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/binary-tree-postorder-traversal/"
  },
  {
    "title": "Recursive DFS Traversals",
    "topic": "Graphs",
    "sub_topic": "Basics of DFS",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/"
  },
  {
    "title": "Iterative DFS Traverals",
    "topic": "Graphs",
    "sub_topic": "Basics of DFS",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/binary-tree/iterative-pre-post-in-binary-tree-official/ojquestion"
  },
  {
    "title": "Iterative DFS Traverals",
    "topic": "Graphs",
    "sub_topic": "Basics of DFS",
    "difficulty": "Medium",
    "link": "https://www.enjoyalgorithms.com/blog/iterative-binary-tree-traversals-using-stack"
  },
  {
    "title": "Searching in Binary Tree",
    "topic": "Graphs",
    "sub_topic": "Basics of DFS",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/search-a-node-in-binary-tree/"
  },
  {
    "title": "BFS vs DFS Traversals - I",
    "topic": "Graphs",
    "sub_topic": "Basics of DFS",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/difference-between-bfs-and-dfs/"
  },
  {
    "title": "BFS vs DFS Traversals - II",
    "topic": "Graphs",
    "sub_topic": "Basics of DFS",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/"
  },
  {
    "title": "Preorder Predecessor",
    "topic": "Graphs",
    "sub_topic": "Basics of DFS",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/preorder-predecessor-node-binary-tree/"
  },
  {
    "title": "Preorder Successor",
    "topic": "Graphs",
    "sub_topic": "Basics of DFS",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/preorder-successor-node-binary-tree/"
  },
  {
    "title": "Max Depth of Binary Tree",
    "topic": "Trees",
    "sub_topic": "Depth and Width",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
  },
  {
    "title": "Min Depth of Binary Tree",
    "topic": "Trees",
    "sub_topic": "Depth and Width",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-depth-of-binary-tree/"
  },
  {
    "title": "Is Binary Tree Balanced",
    "topic": "Trees",
    "sub_topic": "Depth and Width",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/balanced-binary-tree/"
  },
  {
    "title": "Diameter of Binary Tree",
    "topic": "Trees",
    "sub_topic": "Depth and Width",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/diameter-of-binary-tree/"
  },
  {
    "title": "Max Width of Binary Tree - I",
    "topic": "Trees",
    "sub_topic": "Depth and Width",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/maximum-width-of-tree/1"
  },
  {
    "title": "Max Width of Binary Tree - II",
    "topic": "Trees",
    "sub_topic": "Depth and Width",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-width-of-binary-tree/"
  },
  {
    "title": "Vertical Width or Shadow",
    "topic": "Trees",
    "sub_topic": "Depth and Width",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/vertical-width-of-a-binary-tree/1"
  },
  {
    "title": "Ancestors in Binary Tree",
    "topic": "General",
    "sub_topic": "Node Paths Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/ancestors-in-binary-tree/1"
  },
  {
    "title": "Max Node Ancestor Difference",
    "topic": "General",
    "sub_topic": "Node Paths Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/maximum-difference-between-node-and-its-ancestor/1"
  },
  {
    "title": "Count Turns in N2N Path",
    "topic": "General",
    "sub_topic": "Node Paths Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/number-of-turns-in-binary-tree/1"
  },
  {
    "title": "All Root to Leaf Tree Paths",
    "topic": "General",
    "sub_topic": "Node Paths Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/binary-tree-paths/"
  },
  {
    "title": "Sum of Root to Leaf Paths",
    "topic": "General",
    "sub_topic": "Node Paths Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sum-root-to-leaf-numbers/"
  },
  {
    "title": "Linearize Binary Tree",
    "topic": "General",
    "sub_topic": "Node Paths Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/"
  },
  {
    "title": "Linked List in Binary Tree",
    "topic": "General",
    "sub_topic": "Node Paths Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/linked-list-in-binary-tree/"
  },
  {
    "title": "Count Good Nodes",
    "topic": "General",
    "sub_topic": "Node Paths Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-good-nodes-in-binary-tree/"
  },
  {
    "title": "Maximum Sum Subtree",
    "topic": "Trees",
    "sub_topic": "Subtree Sum Problems",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/largest-sub-tree-sum_920400"
  },
  {
    "title": "Tilt of Binary Tree",
    "topic": "Trees",
    "sub_topic": "Subtree Sum Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/binary-tree-tilt/"
  },
  {
    "title": "Target Sum Subtrees",
    "topic": "Trees",
    "sub_topic": "Subtree Sum Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/count-number-of-subtrees-having-given-sum/1"
  },
  {
    "title": "Transform to Sum Tree",
    "topic": "Trees",
    "sub_topic": "Subtree Sum Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/transform-to-sum-tree/1"
  },
  {
    "title": "Check Sum Tree",
    "topic": "Trees",
    "sub_topic": "Subtree Sum Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/sum-tree/1"
  },
  {
    "title": "Has Root to Leaf Path Sum",
    "topic": "Trees",
    "sub_topic": "Path Sum Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/path-sum/"
  },
  {
    "title": "All Root to Leaf Path Sum",
    "topic": "Trees",
    "sub_topic": "Path Sum Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/path-sum-ii/"
  },
  {
    "title": "Longest Root to Leaf Path Sum",
    "topic": "Trees",
    "sub_topic": "Path Sum Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/sum-of-the-longest-bloodline-of-a-tree/1"
  },
  {
    "title": "Node to Descendant Path Sum",
    "topic": "Trees",
    "sub_topic": "Path Sum Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/path-sum-iii/"
  },
  {
    "title": "Max Leaf to Leaf Path Sum",
    "topic": "Trees",
    "sub_topic": "Path Sum Problems",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/maximum-path-sum-between-two-leaves_794950"
  },
  {
    "title": "Max Node to Node Path Sum",
    "topic": "Trees",
    "sub_topic": "Path Sum Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
  },
  {
    "title": "Longest Univalue Path",
    "topic": "Trees",
    "sub_topic": "Path Sum Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-univalue-path/"
  },
  {
    "title": "Nodes K Level Down",
    "topic": "Trees",
    "sub_topic": "K Distance Nodes",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/k-distance-from-root/1"
  },
  {
    "title": "Nodes At K Distance",
    "topic": "Trees",
    "sub_topic": "K Distance Nodes",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/"
  },
  {
    "title": "Burning Tree",
    "topic": "Trees",
    "sub_topic": "K Distance Nodes",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/"
  },
  {
    "title": "Delete Single Child Parents",
    "topic": "Trees",
    "sub_topic": "Modify Binary Tree",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/remove-half-nodes/1"
  },
  {
    "title": "Merge Two Binary Trees",
    "topic": "Trees",
    "sub_topic": "Modify Binary Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/merge-two-binary-trees/"
  },
  {
    "title": "Delete Target Leaf Nodes",
    "topic": "Trees",
    "sub_topic": "Modify Binary Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/delete-leaves-with-a-given-value/"
  },
  {
    "title": "Delete Insufficient Nodes",
    "topic": "Trees",
    "sub_topic": "Modify Binary Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/"
  },
  {
    "title": "Delete Nodes & Return Forest",
    "topic": "Trees",
    "sub_topic": "Modify Binary Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/delete-nodes-and-return-forest/"
  },
  {
    "title": "Add One Row to Tree",
    "topic": "Trees",
    "sub_topic": "Modify Binary Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/add-one-row-to-tree/"
  },
  {
    "title": "Follow Children Sum Property",
    "topic": "Trees",
    "sub_topic": "Modify Binary Tree",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/childrensumproperty_790723"
  },
  {
    "title": "Identical or Same Trees",
    "topic": "Trees",
    "sub_topic": "Compare Trees",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/same-tree/"
  },
  {
    "title": "Foldable Binary Tree",
    "topic": "Trees",
    "sub_topic": "Compare Trees",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/foldable-binary-tree/1"
  },
  {
    "title": "Isomorphic Binary Tree",
    "topic": "Trees",
    "sub_topic": "Compare Trees",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/check-if-tree-is-isomorphic/1"
  },
  {
    "title": "Symmetric or Mirror Tree",
    "topic": "Trees",
    "sub_topic": "Compare Trees",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/symmetric-tree/"
  },
  {
    "title": "Invert Binary Tree",
    "topic": "Trees",
    "sub_topic": "Compare Trees",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/invert-binary-tree/"
  },
  {
    "title": "Find Cloned Tree Node",
    "topic": "Trees",
    "sub_topic": "Compare Trees",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/"
  },
  {
    "title": "Image Multiplication",
    "topic": "Trees",
    "sub_topic": "Compare Trees",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/image-multiplication0627/1"
  },
  {
    "title": "Duplicate Subtree - I",
    "topic": "Trees",
    "sub_topic": "Compare Trees",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/subtree-of-another-tree/"
  },
  {
    "title": "Duplicate Subtree - II",
    "topic": "Trees",
    "sub_topic": "Compare Trees",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-duplicate-subtrees/"
  },
  {
    "title": "Count Complete Tree Nodes",
    "topic": "Trees",
    "sub_topic": "Complete Binary Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-complete-tree-nodes/"
  },
  {
    "title": "Is Binary Tree Complete",
    "topic": "Trees",
    "sub_topic": "Complete Binary Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/check-completeness-of-a-binary-tree/"
  },
  {
    "title": "Design Complete Tree",
    "topic": "Trees",
    "sub_topic": "Complete Binary Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/complete-binary-tree-inserter/"
  },
  {
    "title": "Splitted Tree Max Edge Score",
    "topic": "Graphs",
    "sub_topic": "More DFS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/"
  },
  {
    "title": "Splitted Tree Max Node Score",
    "topic": "Graphs",
    "sub_topic": "More DFS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-nodes-with-the-highest-score/"
  },
  {
    "title": "Holiday Accomodation",
    "topic": "Graphs",
    "sub_topic": "More DFS Problems",
    "difficulty": "Medium",
    "link": "https://www.spoj.com/problems/HOLI/"
  },
  {
    "title": "Print Single Child Nodes",
    "topic": "Graphs",
    "sub_topic": "More DFS Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/print-all-nodes-that-dont-have-sibling/1"
  },
  {
    "title": "Tree Coloring Game",
    "topic": "Graphs",
    "sub_topic": "More DFS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/binary-tree-coloring-game/"
  },
  {
    "title": "2nd Min in Special Tree",
    "topic": "Graphs",
    "sub_topic": "More DFS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/"
  },
  {
    "title": "Path in ZigZag Labelled Tree",
    "topic": "Graphs",
    "sub_topic": "More DFS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/"
  },
  {
    "title": "Level Order of Binary Tree",
    "topic": "Searching",
    "sub_topic": "Breadth First Search",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/level-order-traversal/1"
  },
  {
    "title": "Level Order Linewise",
    "topic": "Searching",
    "sub_topic": "Breadth First Search",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/binary-tree-level-order-traversal/"
  },
  {
    "title": "Reverse Levelorder",
    "topic": "Searching",
    "sub_topic": "Breadth First Search",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/"
  },
  {
    "title": "Zigzag Levelorder",
    "topic": "Searching",
    "sub_topic": "Breadth First Search",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
  },
  {
    "title": "Alternate Levelorder",
    "topic": "Searching",
    "sub_topic": "Breadth First Search",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/perfect-binary-tree-specific-level-order-traversal/"
  },
  {
    "title": "Cousins in Binary Tree",
    "topic": "Searching",
    "sub_topic": "Breadth First Search",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/cousins-in-binary-tree/"
  },
  {
    "title": "Maximum Level Sum",
    "topic": "Searching",
    "sub_topic": "Breadth First Search",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/"
  },
  {
    "title": "Average Levelorder",
    "topic": "Searching",
    "sub_topic": "Breadth First Search",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/average-of-levels-in-binary-tree/"
  },
  {
    "title": "Are Leaves at Same Level",
    "topic": "Searching",
    "sub_topic": "Breadth First Search",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/leaf-at-same-level/1"
  },
  {
    "title": "Populate Right Pointer - I",
    "topic": "Searching",
    "sub_topic": "Breadth First Search",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/"
  },
  {
    "title": "Populate Right Pointer - II",
    "topic": "Searching",
    "sub_topic": "Breadth First Search",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/"
  },
  {
    "title": "Even Odd Tree",
    "topic": "Searching",
    "sub_topic": "Breadth First Search",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/even-odd-tree/"
  },
  {
    "title": "Diagonal Order - I",
    "topic": "General",
    "sub_topic": "Diagnol Order",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/diagonal-traversal-of-binary-tree/1"
  },
  {
    "title": "Diagonal Order - II",
    "topic": "General",
    "sub_topic": "Diagnol Order",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/trees/diagonal-order-(anti-clock-wise)-of-a-binarytree/ojquestion"
  },
  {
    "title": "Diagonal Sum",
    "topic": "General",
    "sub_topic": "Diagnol Order",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/diagonal-sum-in-binary-tree/1"
  },
  {
    "title": "Vertical Order - I",
    "topic": "Trees",
    "sub_topic": "Vertical Order",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/print-a-binary-tree-in-vertical-order/1"
  },
  {
    "title": "Vertical Order - II",
    "topic": "Trees",
    "sub_topic": "Vertical Order",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/"
  },
  {
    "title": "Vertical Order Sum",
    "topic": "Trees",
    "sub_topic": "Vertical Order",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/vertical-sum/1"
  },
  {
    "title": "Left View of Binary Tree",
    "topic": "Trees",
    "sub_topic": "View of Tree",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1"
  },
  {
    "title": "Right View of Binary Tree",
    "topic": "Trees",
    "sub_topic": "View of Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/binary-tree-right-side-view/"
  },
  {
    "title": "Top View of Binary Tree",
    "topic": "Trees",
    "sub_topic": "View of Tree",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1"
  },
  {
    "title": "Bottom View of Binary Tree",
    "topic": "Trees",
    "sub_topic": "View of Tree",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1"
  },
  {
    "title": "Boundary Traversal of Tree",
    "topic": "Trees",
    "sub_topic": "View of Tree",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1"
  },
  {
    "title": "Convert Tree to Threaded - I",
    "topic": "Trees",
    "sub_topic": "Morris Traversal",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/convert-binary-tree-threaded-binary-tree-2/"
  },
  {
    "title": "Convert Tree to Threaded - II",
    "topic": "Trees",
    "sub_topic": "Morris Traversal",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/convert-binary-tree-threaded-binary-tree-set-2-efficient/"
  },
  {
    "title": "Morris Inorder Traversal",
    "topic": "Trees",
    "sub_topic": "Morris Traversal",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion-and-without-stack/"
  },
  {
    "title": "Morris Preorder Traversal",
    "topic": "Trees",
    "sub_topic": "Morris Traversal",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/morris-traversal-for-preorder/"
  },
  {
    "title": "Morris Postorder Traversal",
    "topic": "Trees",
    "sub_topic": "Morris Traversal",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/postorder-traversal-binary-tree-without-recursion-without-stack/"
  },
  {
    "title": "Serialize & Deserialize Binary Tree",
    "topic": "Trees",
    "sub_topic": "Construct Binary Tree",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
  },
  {
    "title": "Verify Preorder Serialization",
    "topic": "Trees",
    "sub_topic": "Construct Binary Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/"
  },
  {
    "title": "Tree from Preorder & Inorder",
    "topic": "Trees",
    "sub_topic": "Construct Binary Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
  },
  {
    "title": "Tree from Postorder & Inorder",
    "topic": "Trees",
    "sub_topic": "Construct Binary Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/"
  },
  {
    "title": "Tree from Preorder & Postorder",
    "topic": "Trees",
    "sub_topic": "Construct Binary Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/"
  },
  {
    "title": "Tree from Levelorder & Inorder",
    "topic": "Trees",
    "sub_topic": "Construct Binary Tree",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/construct-tree-from-inorder-and-levelorder/1"
  },
  {
    "title": "Clone Binary Tree",
    "topic": "Trees",
    "sub_topic": "Construct Binary Tree",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/clone-a-binary-tree/1"
  },
  {
    "title": "Binary Tree from Parent Array",
    "topic": "Trees",
    "sub_topic": "Construct Binary Tree",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-parent-array/1"
  },
  {
    "title": "Bracket String from Binary Tree",
    "topic": "Trees",
    "sub_topic": "Construct Binary Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/construct-string-from-binary-tree/"
  },
  {
    "title": "Binary Tree from Bracket String",
    "topic": "Trees",
    "sub_topic": "Construct Binary Tree",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/binary-tree-from-bracket_1118117"
  },
  {
    "title": "Ternary Expression to Binary Tree",
    "topic": "Trees",
    "sub_topic": "Construct Binary Tree",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/ternarytotree_1102306"
  },
  {
    "title": "Heap Ordered Binary Tree",
    "topic": "Trees",
    "sub_topic": "Construct Binary Tree",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/inorder-traversal-of-cartesian-tree/"
  },
  {
    "title": "LCA - Binary Tree",
    "topic": "Trees",
    "sub_topic": "LCA Variations",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"
  },
  {
    "title": "LCA - Deepest Leaves",
    "topic": "Trees",
    "sub_topic": "LCA Variations",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/"
  },
  {
    "title": "LCA - Parent Pointers",
    "topic": "Trees",
    "sub_topic": "LCA Variations",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/lowest-common-ancestor-of-a-binary-tree-iii_1280134"
  },
  {
    "title": "LCA - 3 Nodes",
    "topic": "Trees",
    "sub_topic": "LCA Variations",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/lca-of-three-nodes_794944"
  },
  {
    "title": "LCA - K Nodes",
    "topic": "Trees",
    "sub_topic": "LCA Variations",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/least-common-ancestor-of-any-number-of-nodes-in-binary-tree/"
  },
  {
    "title": "Shortest Distance of 2 Nodes",
    "topic": "Trees",
    "sub_topic": "LCA Variations",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/min-distance-between-two-given-nodes-of-a-binary-tree/1"
  },
  {
    "title": "Binary Lifting - Kth Ancestor",
    "topic": "Trees",
    "sub_topic": "Binary Lifting",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/kth-ancestor-of-a-tree-node/"
  },
  {
    "title": "Distance Queries",
    "topic": "Trees",
    "sub_topic": "Binary Lifting",
    "difficulty": "Medium",
    "link": "https://cses.fi/problemset/task/1135"
  },
  {
    "title": "DP on Trees",
    "topic": "Mathematics",
    "sub_topic": "Rerooting Technique",
    "difficulty": "Medium",
    "link": "https://codeforces.com/blog/entry/79857"
  },
  {
    "title": "Subordinates",
    "topic": "Mathematics",
    "sub_topic": "Rerooting Technique",
    "difficulty": "Medium",
    "link": "https://cses.fi/problemset/task/1674"
  },
  {
    "title": "Tree Matching",
    "topic": "Mathematics",
    "sub_topic": "Rerooting Technique",
    "difficulty": "Medium",
    "link": "https://cses.fi/problemset/task/1130"
  },
  {
    "title": "Tree Distances - I",
    "topic": "Mathematics",
    "sub_topic": "Rerooting Technique",
    "difficulty": "Medium",
    "link": "https://cses.fi/problemset/task/1132"
  },
  {
    "title": "Tree Distances - II",
    "topic": "Mathematics",
    "sub_topic": "Rerooting Technique",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sum-of-distances-in-tree/"
  },
  {
    "title": "House Robber - Tree",
    "topic": "Mathematics",
    "sub_topic": "Rerooting Technique",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/house-robber-iii/"
  },
  {
    "title": "Largest Independent Set",
    "topic": "Mathematics",
    "sub_topic": "Rerooting Technique",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/largest-independent-set-problem/0"
  },
  {
    "title": "Vertex Cover Tree",
    "topic": "Mathematics",
    "sub_topic": "Rerooting Technique",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/vertex-cover-problem-set-2-dynamic-programming-solution-tree/"
  },
  {
    "title": "Longest ZigZag Path",
    "topic": "Mathematics",
    "sub_topic": "Rerooting Technique",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/"
  },
  {
    "title": "Binary Tree Cameras",
    "topic": "Mathematics",
    "sub_topic": "Rerooting Technique",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/binary-tree-cameras/"
  },
  {
    "title": "Distribute Coins",
    "topic": "Mathematics",
    "sub_topic": "Rerooting Technique",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/distribute-coins-in-binary-tree/"
  },
  {
    "title": "Min Time to Collect Apples",
    "topic": "Mathematics",
    "sub_topic": "Rerooting Technique",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/"
  },
  {
    "title": "Min Cost Tree From Leaf",
    "topic": "Mathematics",
    "sub_topic": "Rerooting Technique",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/"
  },
  {
    "title": "N Ary Tree Problems",
    "topic": "Trees",
    "sub_topic": "N Ary or Generic Tree",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/generic-tree/"
  },
  {
    "title": "Preorder DFS - Nary",
    "topic": "Trees",
    "sub_topic": "N Ary or Generic Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/n-ary-tree-preorder-traversal/"
  },
  {
    "title": "Postorder DFS - Nary",
    "topic": "Trees",
    "sub_topic": "N Ary or Generic Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/n-ary-tree-postorder-traversal/"
  },
  {
    "title": "Height of Nary Tree",
    "topic": "Trees",
    "sub_topic": "N Ary or Generic Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-depth-of-n-ary-tree/"
  },
  {
    "title": "Diameter of Nary Tree",
    "topic": "Trees",
    "sub_topic": "N Ary or Generic Tree",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/largest-distance-between-nodes-of-a-tree/"
  },
  {
    "title": "Mirror of Nary Tree",
    "topic": "Trees",
    "sub_topic": "N Ary or Generic Tree",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/check-mirror-in-n-ary-tree1528/1"
  },
  {
    "title": "Levelorder BFS - Nary",
    "topic": "Trees",
    "sub_topic": "N Ary or Generic Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/n-ary-tree-level-order-traversal/"
  },
  {
    "title": "Nary to Binary Tree",
    "topic": "Trees",
    "sub_topic": "N Ary or Generic Tree",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/encode-n-ary-tree-to-binary-tree_1281859"
  },
  {
    "title": "Serialize Deserialize NAry",
    "topic": "Trees",
    "sub_topic": "N Ary or Generic Tree",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/serialize-and-deserialize-an-n-ary-tree_1376416"
  },
  {
    "title": "Lockable Tree",
    "topic": "Trees",
    "sub_topic": "N Ary or Generic Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/operations-on-tree/"
  },
  {
    "title": "Lockable Tree",
    "topic": "Trees",
    "sub_topic": "N Ary or Generic Tree",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/locking-and-unlocking-of-resources-in-the-form-of-n-ary-tree/"
  },
  {
    "title": "Insertion in BST",
    "topic": "BST",
    "sub_topic": "BST Basics",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/insert-into-a-binary-search-tree/"
  },
  {
    "title": "Deletion in BST",
    "topic": "BST",
    "sub_topic": "BST Basics",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/delete-node-in-a-bst/"
  },
  {
    "title": "Searching in BST",
    "topic": "BST",
    "sub_topic": "BST Basics",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/search-in-a-binary-search-tree/"
  },
  {
    "title": "Minimum Node in BST",
    "topic": "BST",
    "sub_topic": "BST Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1"
  },
  {
    "title": "Maximum Node in BST",
    "topic": "BST",
    "sub_topic": "BST Basics",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/find-the-node-with-maximum-value-in-a-binary-search-tree/"
  },
  {
    "title": "Handle Duplicates in BST",
    "topic": "BST",
    "sub_topic": "BST Basics",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/how-to-handle-duplicates-in-binary-search-tree/"
  },
  {
    "title": "DFS Generic Solver in BST",
    "topic": "BST",
    "sub_topic": "BST Basics",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/binary-search-tree/size-sum-max-min-find-in-bst-official/ojquestion"
  },
  {
    "title": "LCA in BST",
    "topic": "BST",
    "sub_topic": "BST Basics",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
  },
  {
    "title": "Inorder Pred/Successor in BST",
    "topic": "BST",
    "sub_topic": "Inorder Traversal",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1"
  },
  {
    "title": "Inorder Successor in BST",
    "topic": "BST",
    "sub_topic": "Inorder Traversal",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/inorder-successor-in-binary-search-tree/"
  },
  {
    "title": "Kth Smallest Element in BST",
    "topic": "BST",
    "sub_topic": "Inorder Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/"
  },
  {
    "title": "Kth Largest Element in BST",
    "topic": "BST",
    "sub_topic": "Inorder Traversal",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1"
  },
  {
    "title": "Greater Sum Tree from BST",
    "topic": "BST",
    "sub_topic": "Inorder Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/"
  },
  {
    "title": "Min Difference in BST",
    "topic": "BST",
    "sub_topic": "Inorder Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-absolute-difference-in-bst/"
  },
  {
    "title": "Mode in BST",
    "topic": "BST",
    "sub_topic": "Inorder Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-mode-in-binary-search-tree/"
  },
  {
    "title": "Recover BST",
    "topic": "BST",
    "sub_topic": "Inorder Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/recover-binary-search-tree/"
  },
  {
    "title": "Union of BSTs",
    "topic": "BST",
    "sub_topic": "Inorder Traversal",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/all-elements-in-two-binary-search-trees/"
  },
  {
    "title": "Print Nodes in Range",
    "topic": "BST",
    "sub_topic": "Range Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/print-bst-elements-in-given-range/1"
  },
  {
    "title": "Count Nodes in Range",
    "topic": "BST",
    "sub_topic": "Range Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1"
  },
  {
    "title": "Range Sum of BST",
    "topic": "BST",
    "sub_topic": "Range Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/range-sum-of-bst/"
  },
  {
    "title": "Trim BST",
    "topic": "BST",
    "sub_topic": "Range Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/trim-a-binary-search-tree/"
  },
  {
    "title": "Ceil Element in BST",
    "topic": "BST",
    "sub_topic": "Range Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/implementing-ceil-in-bst/1"
  },
  {
    "title": "Floor Element in BST",
    "topic": "BST",
    "sub_topic": "Range Problems",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/floor-from-bst_920457"
  },
  {
    "title": "Closest Element in BST",
    "topic": "BST",
    "sub_topic": "Range Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/find-the-closest-element-in-bst/1"
  },
  {
    "title": "K Closest Elements in BST",
    "topic": "BST",
    "sub_topic": "Range Problems",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/k-closest-values_1281852"
  },
  {
    "title": "Split BST",
    "topic": "BST",
    "sub_topic": "Range Problems",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/split-bst_1376434"
  },
  {
    "title": "Construct BST From Inorder",
    "topic": "BST",
    "sub_topic": "Construct BST",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/"
  },
  {
    "title": "Construct BST From Preorder",
    "topic": "BST",
    "sub_topic": "Construct BST",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/"
  },
  {
    "title": "Construct BST From Postorder",
    "topic": "BST",
    "sub_topic": "Construct BST",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/construct-bst-from-post-order/1"
  },
  {
    "title": "Construct BST From Levelorder",
    "topic": "BST",
    "sub_topic": "Construct BST",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/convert-level-order-traversal-to-bst/1"
  },
  {
    "title": "Convert Sorted SLL to BST",
    "topic": "BST",
    "sub_topic": "Construct BST",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/"
  },
  {
    "title": "Convert BST to Sorted SLL",
    "topic": "BST",
    "sub_topic": "Construct BST",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/increasing-order-search-tree/"
  },
  {
    "title": "Convert BST To Sorted DLL",
    "topic": "BST",
    "sub_topic": "Construct BST",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1"
  },
  {
    "title": "Convert BST To Sorted CDLL",
    "topic": "BST",
    "sub_topic": "Construct BST",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/binary-tree-to-cdll/1"
  },
  {
    "title": "Convert Sorted DLL to BST",
    "topic": "BST",
    "sub_topic": "Construct BST",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/trees/convert-sorted-dll-to-bst/ojquestion"
  },
  {
    "title": "Convert Sorted DLL to BST",
    "topic": "BST",
    "sub_topic": "Construct BST",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/in-place-conversion-of-sorted-dll-to-balanced-bst/"
  },
  {
    "title": "Serialize & Deserialize BST",
    "topic": "BST",
    "sub_topic": "Construct BST",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/serialize-and-deserialize-bst/"
  },
  {
    "title": "Balance a BST",
    "topic": "BST",
    "sub_topic": "Construct BST",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/balance-a-binary-search-tree/"
  },
  {
    "title": "Depth of BST from Array",
    "topic": "BST",
    "sub_topic": "Construct BST",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/depth-of-bst_2221406"
  },
  {
    "title": "Validate BST",
    "topic": "BST",
    "sub_topic": "Check for BST",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/validate-binary-search-tree/"
  },
  {
    "title": "Validate BST",
    "topic": "BST",
    "sub_topic": "Check for BST",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/"
  },
  {
    "title": "Largest BST Subtree",
    "topic": "BST",
    "sub_topic": "Check for BST",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/largest-bst/1"
  },
  {
    "title": "Max Sum BST Subtree",
    "topic": "BST",
    "sub_topic": "Check for BST",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/"
  },
  {
    "title": "Check Dead End in BST",
    "topic": "BST",
    "sub_topic": "Check for BST",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/check-whether-bst-contains-dead-end/1"
  },
  {
    "title": "Verify Preorder of BST",
    "topic": "BST",
    "sub_topic": "Check for BST",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/preorder-traversal-and-bst4006/1"
  },
  {
    "title": "Identical BST",
    "topic": "BST",
    "sub_topic": "Check for BST",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/identical-bsts_920527"
  },
  {
    "title": "Identical BST - O(n^2)",
    "topic": "BST",
    "sub_topic": "Check for BST",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/check-if-two-given-key-sequences-construct-same-bsts/"
  },
  {
    "title": "Identical BST - O(n)",
    "topic": "BST",
    "sub_topic": "Check for BST",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/check-for-identical-bsts-without-building-the-trees/"
  },
  {
    "title": "BST Iterator - I",
    "topic": "BST",
    "sub_topic": "BST Iterator",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/binary-search-tree-iterator/"
  },
  {
    "title": "BST Iterator - II",
    "topic": "BST",
    "sub_topic": "BST Iterator",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/bst-iterator-2_1377938"
  },
  {
    "title": "Forward Iterator in BST",
    "topic": "BST",
    "sub_topic": "BST Iterator",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/implementing-forward-iterator-in-bst/"
  },
  {
    "title": "Backward Iterator in BST",
    "topic": "BST",
    "sub_topic": "BST Iterator",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/implementing-backward-iterator-in-bst/"
  },
  {
    "title": "Target Sum Pair in BST - I",
    "topic": "BST",
    "sub_topic": "BST Iterator",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/"
  },
  {
    "title": "Target Sum Pair in BST - II",
    "topic": "BST",
    "sub_topic": "BST Iterator",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/brothers-from-different-root/1"
  },
  {
    "title": "Median of BST",
    "topic": "BST",
    "sub_topic": "BST Iterator",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/median-of-bst/1"
  },
  {
    "title": "Merge Two BSTs",
    "topic": "BST",
    "sub_topic": "BST Iterator",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/merge-two-bst-s/1"
  },
  {
    "title": "Fibonacci Number",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/fibonacci-number/"
  },
  {
    "title": "Tribonacci Number",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/n-th-tribonacci-number/"
  },
  {
    "title": "Valid Binary Strings",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/consecutive-1s-not-allowed1912/1"
  },
  {
    "title": "Arrange Buildings",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/count-number-of-ways-to-place-houses/"
  },
  {
    "title": "Decode Ways",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/decode-ways/"
  },
  {
    "title": "A+B+C+ Subsets",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/count-subsequences-of-type-ai-bj-ck4425/1"
  },
  {
    "title": "Tiling - 2 X 1 Tiles",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/ways-to-tile-a-floor5836/1"
  },
  {
    "title": "Tiling - M X 1 Tiles",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/count-the-number-of-ways-to-tile-the-floor-of-size-n-x-m-using-1-x-m-size-tiles0509/1"
  },
  {
    "title": "Dominos & Trominos",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/domino-and-tromino-tiling/"
  },
  {
    "title": "Count Friend Pairing",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/friends-pairing-problem5425/1"
  },
  {
    "title": "Distinct Subsequences",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/distinct-subsequences-ii/"
  },
  {
    "title": "Ugly Numbers",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/ugly-number-ii/"
  },
  {
    "title": "Super Ugly Numbers",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/super-ugly-number/"
  },
  {
    "title": "Count Derangements",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://www.codingninjas.com/codestudio/problems/count-derangements_873861"
  },
  {
    "title": "Assembly Line Scheduling",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/get-the-maximum-score/"
  },
  {
    "title": "Assembly Line Scheduling",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://www.geeksforgeeks.org/assembly-line-scheduling-dp-34/"
  },
  {
    "title": "Weighted Job Scheduling - I",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/maximum-profit-in-job-scheduling/"
  },
  {
    "title": "Weighted Job Scheduling - II",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/"
  },
  {
    "title": "Max Taxi Earnings",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/maximum-earnings-from-taxi/"
  },
  {
    "title": "Min Flips Sort Binary",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/flip-string-to-monotone-increasing/"
  },
  {
    "title": "Min Swaps Increasing Sets",
    "topic": "Dynamic Programming",
    "sub_topic": "Fibonacci Sequence",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/"
  },
  {
    "title": "Climb Stairs - I",
    "topic": "Dynamic Programming",
    "sub_topic": "Climbing Stairs",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/climbing-stairs/"
  },
  {
    "title": "Climb Stairs - II",
    "topic": "Dynamic Programming",
    "sub_topic": "Climbing Stairs",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/count-number-of-hops-1587115620/1"
  },
  {
    "title": "Climb Stairs - III",
    "topic": "Dynamic Programming",
    "sub_topic": "Climbing Stairs",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/climb-stairs-with-variable-jumps-official/ojquestion"
  },
  {
    "title": "Climb Stairs - III",
    "topic": "Dynamic Programming",
    "sub_topic": "Climbing Stairs",
    "difficulty": "Easy",
    "link": "https://www.geeksforgeeks.org/count-number-ways-jump-reach-end/"
  },
  {
    "title": "Climb Stairs - IV",
    "topic": "Dynamic Programming",
    "sub_topic": "Climbing Stairs",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/min-cost-climbing-stairs/"
  },
  {
    "title": "Jump Game - I",
    "topic": "Dynamic Programming",
    "sub_topic": "Climbing Stairs",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/jump-game/"
  },
  {
    "title": "Jump Game - II",
    "topic": "Dynamic Programming",
    "sub_topic": "Climbing Stairs",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/jump-game-ii/"
  },
  {
    "title": "Jump Game - III",
    "topic": "Dynamic Programming",
    "sub_topic": "Climbing Stairs",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/jump-game-vi/"
  },
  {
    "title": "Jump Game - All Paths",
    "topic": "Dynamic Programming",
    "sub_topic": "Climbing Stairs",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/dynamic-programming/min-jumps-re-official/ojquestion"
  },
  {
    "title": "Jump Game - All Paths",
    "topic": "Dynamic Programming",
    "sub_topic": "Climbing Stairs",
    "difficulty": "Easy",
    "link": "https://www.geeksforgeeks.org/paths-requiring-minimum-number-of-jumps-to-reach-end-of-array/"
  },
  {
    "title": "Frog Jump - I",
    "topic": "Dynamic Programming",
    "sub_topic": "Climbing Stairs",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/frog-jump/"
  },
  {
    "title": "Frog Jump - II",
    "topic": "Dynamic Programming",
    "sub_topic": "Climbing Stairs",
    "difficulty": "Easy",
    "link": "https://www.codingninjas.com/codestudio/problems/frog-jump_3621012"
  },
  {
    "title": "Min Steps to 1",
    "topic": "Dynamic Programming",
    "sub_topic": "Climbing Stairs",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/minimum-steps-to-minimize-n-as-per-given-condition0618/1"
  },
  {
    "title": "Min Taps to Water",
    "topic": "Dynamic Programming",
    "sub_topic": "Climbing Stairs",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/"
  },
  {
    "title": "2 Keys Keyboard",
    "topic": "Dynamic Programming",
    "sub_topic": "Climbing Stairs",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/2-keys-keyboard/"
  },
  {
    "title": "4 Keys Keyboard",
    "topic": "Dynamic Programming",
    "sub_topic": "Climbing Stairs",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/special-keyboard3018/1"
  },
  {
    "title": "House Robber - I",
    "topic": "Dynamic Programming",
    "sub_topic": "House Robber",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/house-robber/"
  },
  {
    "title": "House Robber - II",
    "topic": "Dynamic Programming",
    "sub_topic": "House Robber",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/house-robber-ii/"
  },
  {
    "title": "House Robber - III",
    "topic": "Dynamic Programming",
    "sub_topic": "House Robber",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/adjacents-are-not-allowed3528/1"
  },
  {
    "title": "Paint House - I",
    "topic": "Dynamic Programming",
    "sub_topic": "House Robber",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/paint-house_1460385"
  },
  {
    "title": "Paint House - II",
    "topic": "Dynamic Programming",
    "sub_topic": "House Robber",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/ninja-s-contract_1459321"
  },
  {
    "title": "Paint Fence - I",
    "topic": "Dynamic Programming",
    "sub_topic": "House Robber",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/painting-the-fence3727/1"
  },
  {
    "title": "Paint Fence - II",
    "topic": "Dynamic Programming",
    "sub_topic": "House Robber",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/"
  },
  {
    "title": "Fractional Knapsack",
    "topic": "Dynamic Programming",
    "sub_topic": "Knapsack Problem",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1"
  },
  {
    "title": "0-1 Knapsack",
    "topic": "Dynamic Programming",
    "sub_topic": "Knapsack Problem",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1"
  },
  {
    "title": "0-1 Knapsack - Print Ways",
    "topic": "Dynamic Programming",
    "sub_topic": "Knapsack Problem",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/printing-items-01-knapsack/"
  },
  {
    "title": "0-1 Knapsack - Print Ways",
    "topic": "Dynamic Programming",
    "sub_topic": "Knapsack Problem",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/dynamic-programming/zero-one-knapsack-re-official/ojquestion"
  },
  {
    "title": "Unbounded Knapsack",
    "topic": "Dynamic Programming",
    "sub_topic": "Knapsack Problem",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1"
  },
  {
    "title": "Rod Cutting Max Sum",
    "topic": "Dynamic Programming",
    "sub_topic": "Knapsack Problem",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/rod-cutting0840/1"
  },
  {
    "title": "Min Cost for Tickets",
    "topic": "Dynamic Programming",
    "sub_topic": "Knapsack Problem",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-cost-for-tickets/"
  },
  {
    "title": "Min Cost to Fill Bag",
    "topic": "Dynamic Programming",
    "sub_topic": "Knapsack Problem",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/minimum-cost-to-fill-given-weight-in-a-bag1956/1"
  },
  {
    "title": "Flip Array Signs",
    "topic": "Dynamic Programming",
    "sub_topic": "Knapsack Problem",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/flip-array/"
  },
  {
    "title": "1s & 0s Binary String",
    "topic": "Dynamic Programming",
    "sub_topic": "Knapsack Problem",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/ones-and-zeroes/"
  },
  {
    "title": "Minimum Coin Change",
    "topic": "Dynamic Programming",
    "sub_topic": "Coin Change Problem",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/coin-change/"
  },
  {
    "title": "Coin Change - Combinations",
    "topic": "Dynamic Programming",
    "sub_topic": "Coin Change Problem",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/coin-change-2/"
  },
  {
    "title": "Coin Change - Permutations",
    "topic": "Dynamic Programming",
    "sub_topic": "Coin Change Problem",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/combination-sum-iv/"
  },
  {
    "title": "1. One Transaction",
    "topic": "Dynamic Programming",
    "sub_topic": "Buy & Sell Stock",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
  },
  {
    "title": "2. Infinite Transactions",
    "topic": "Dynamic Programming",
    "sub_topic": "Buy & Sell Stock",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/"
  },
  {
    "title": "3. Transaction Fees",
    "topic": "Dynamic Programming",
    "sub_topic": "Buy & Sell Stock",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/"
  },
  {
    "title": "4. Cooldown",
    "topic": "Dynamic Programming",
    "sub_topic": "Buy & Sell Stock",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"
  },
  {
    "title": "5. Two Transactions",
    "topic": "Dynamic Programming",
    "sub_topic": "Buy & Sell Stock",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/"
  },
  {
    "title": "6. K Transactions",
    "topic": "Dynamic Programming",
    "sub_topic": "Buy & Sell Stock",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/"
  },
  {
    "title": "Check Target Sum Subset",
    "topic": "Dynamic Programming",
    "sub_topic": "Target Sum Subset",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1"
  },
  {
    "title": "Count Target Sum Subset",
    "topic": "Dynamic Programming",
    "sub_topic": "Target Sum Subset",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/perfect-sum-problem5633/1"
  },
  {
    "title": "Print All Target Sum Subsets - I",
    "topic": "Dynamic Programming",
    "sub_topic": "Target Sum Subset",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/recursion-backtracking/target-sum-subsets-official/ojquestion"
  },
  {
    "title": "Print All Target Sum Subsets - II",
    "topic": "Dynamic Programming",
    "sub_topic": "Target Sum Subset",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/dynamic-programming/print-all-paths-with-target-sum-subset-official/ojquestion"
  },
  {
    "title": "Equal Sum Partition",
    "topic": "Dynamic Programming",
    "sub_topic": "Target Sum Subset",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/partition-equal-subset-sum/"
  },
  {
    "title": "Target Diff Partition",
    "topic": "Dynamic Programming",
    "sub_topic": "Target Sum Subset",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/target-sum/"
  },
  {
    "title": "Equal Average Partition",
    "topic": "Dynamic Programming",
    "sub_topic": "Target Sum Subset",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/split-array-with-same-average/"
  },
  {
    "title": "K Equal Sum Partition",
    "topic": "Dynamic Programming",
    "sub_topic": "Target Sum Subset",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/"
  },
  {
    "title": "K Partitions - I",
    "topic": "Dynamic Programming",
    "sub_topic": "Target Sum Subset",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/recursion-and-backtracking/k-partitions-official/ojquestion"
  },
  {
    "title": "K Partitions - II",
    "topic": "Dynamic Programming",
    "sub_topic": "Target Sum Subset",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/dynamic-programming-and-greedy/partition-into-subsets-official/ojquestion"
  },
  {
    "title": "Bell Numbers",
    "topic": "Dynamic Programming",
    "sub_topic": "Target Sum Subset",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/bell-numbers2108/1"
  },
  {
    "title": "Tug of War - Equal Size",
    "topic": "Dynamic Programming",
    "sub_topic": "Target Sum Subset",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/"
  },
  {
    "title": "Tug of War - Diff Size",
    "topic": "Dynamic Programming",
    "sub_topic": "Target Sum Subset",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/minimum-sum-partition3317/1"
  },
  {
    "title": "Min Path Sum in Maze",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-path-sum/"
  },
  {
    "title": "Min Path Sum - All Paths",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/dynamic-programming/minimum-cost-path-re-official/ojquestion"
  },
  {
    "title": "Min Path Sum in Triangle",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/triangle/"
  },
  {
    "title": "Minimum Falling Path Sum",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-falling-path-sum/"
  },
  {
    "title": "Goldmine All Paths",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/dynamic-programming/goldmine-re-official/ojquestion"
  },
  {
    "title": "Unique Paths - I",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/unique-paths/"
  },
  {
    "title": "Unique Paths - II",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/unique-paths-ii/"
  },
  {
    "title": "Knight's Probability Chess",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/knight-probability-in-chessboard/"
  },
  {
    "title": "Keypad Problem - DP",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/mobile-numeric-keypad5456/1"
  },
  {
    "title": "Dungeon Game",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/dungeon-game/"
  },
  {
    "title": "Cherry Pickup - I",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/cherry-pickup/"
  },
  {
    "title": "Cherry Pickup - II",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/cherry-pickup-ii/"
  },
  {
    "title": "Maximal Square",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximal-square/"
  },
  {
    "title": "Square Submatrix All 1s",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-square-submatrices-with-all-ones/"
  },
  {
    "title": "Out of Boundary Paths",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/out-of-boundary-paths/"
  },
  {
    "title": "Largest Bordered Square",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/largest-1-bordered-square/"
  },
  {
    "title": "Knight Dialer",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/knight-dialer/"
  },
  {
    "title": "Largest Plus Sign",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/largest-plus-sign/"
  },
  {
    "title": "Divide Cholocate Bar",
    "topic": "Dynamic Programming",
    "sub_topic": "DP on Grid",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/chocolate-bar_975353?leftPanelTab=0"
  },
  {
    "title": "Pascal Triangle - I",
    "topic": "Dynamic Programming",
    "sub_topic": "Pascal Triangle",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/pascals-triangle/"
  },
  {
    "title": "Pascal Triangle - II",
    "topic": "Dynamic Programming",
    "sub_topic": "Pascal Triangle",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/pascals-triangle-ii/"
  },
  {
    "title": "Binomial Coeff (nCr)",
    "topic": "Dynamic Programming",
    "sub_topic": "Pascal Triangle",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/ncr1019/1"
  },
  {
    "title": "Permutation Coeff (nPr)",
    "topic": "Dynamic Programming",
    "sub_topic": "Pascal Triangle",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/npr4253/1"
  },
  {
    "title": "Water Overflow",
    "topic": "Dynamic Programming",
    "sub_topic": "Pascal Triangle",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/champagne-overflow2636/1"
  },
  {
    "title": "Longest Increasing Subset",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-increasing-subsequence/"
  },
  {
    "title": "Print All LIS",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/dynamic-programming/lis-re-official/ojquestion"
  },
  {
    "title": "Count All LIS",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/number-of-longest-increasing-subsequence/"
  },
  {
    "title": "Longest Increasing Subarray",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-continuous-increasing-subsequence/"
  },
  {
    "title": "Max Sum Increasing Subset",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1"
  },
  {
    "title": "Longest Bitonic Subset",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/"
  },
  {
    "title": "Max Sum Bitonic Subset",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/maximum-sum-bitonic-subsequence/0"
  },
  {
    "title": "Longest Bitonic Subarray",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-mountain-in-array/"
  },
  {
    "title": "Building Bridges",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/dynamic-programming/max-non-overlapping-bridges-official/ojquestion"
  },
  {
    "title": "Building Bridges",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/dynamic-programming-building-bridges/"
  },
  {
    "title": "Russian Doll Envelopes",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/russian-doll-envelopes/"
  },
  {
    "title": "Perfect Squares",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/perfect-squares/"
  },
  {
    "title": "Count AP Subarray",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/arithmetic-slices/"
  },
  {
    "title": "Count AP Subsets",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/arithmetic-slices-ii-subsequence/"
  },
  {
    "title": "Longest AP Subarray",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/longest-arithmetic-progression1019/1"
  },
  {
    "title": "Longest AP Subset",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-arithmetic-subsequence/"
  },
  {
    "title": "Longest Wiggle Subset",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/wiggle-subsequence/"
  },
  {
    "title": "Highway Billboards",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/highway-billboards_3125967"
  },
  {
    "title": "Box Stacking - I",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/box-stacking/0/"
  },
  {
    "title": "Box Stacking - II",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-height-by-stacking-cuboids/"
  },
  {
    "title": "Largest Divisible Subset",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/largest-divisible-subset/"
  },
  {
    "title": "LCIS (LCS + LIS)",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/longest-common-increasing-subsequence1437/1"
  },
  {
    "title": "Longest String Chain",
    "topic": "Dynamic Programming",
    "sub_topic": "LIS Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-string-chain/"
  },
  {
    "title": "Longest Common Subset",
    "topic": "Dynamic Programming",
    "sub_topic": "Longest Common Subset",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-common-subsequence/"
  },
  {
    "title": "Uncrossed Lines",
    "topic": "Dynamic Programming",
    "sub_topic": "Longest Common Subset",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/uncrossed-lines/"
  },
  {
    "title": "Print Any LCS",
    "topic": "Dynamic Programming",
    "sub_topic": "Longest Common Subset",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/printing-longest-common-subsequence/"
  },
  {
    "title": "Print All LCS",
    "topic": "Dynamic Programming",
    "sub_topic": "Longest Common Subset",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/print-all-lcs-sequences3413/1/"
  },
  {
    "title": "Longest Common Substring",
    "topic": "Dynamic Programming",
    "sub_topic": "Longest Common Subset",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-length-of-repeated-subarray/"
  },
  {
    "title": "Increase LCS by 1",
    "topic": "Dynamic Programming",
    "sub_topic": "Longest Common Subset",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/count-ways-to-increase-lcs-length-of-two-strings-by-one/1"
  },
  {
    "title": "LCS of 3 Strings",
    "topic": "Dynamic Programming",
    "sub_topic": "Longest Common Subset",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/lcs-of-three-strings/0"
  },
  {
    "title": "Longest Duplicate Subset",
    "topic": "Dynamic Programming",
    "sub_topic": "Longest Duplicate Subset",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence2004/1"
  },
  {
    "title": "Longest Duplicate Substring - I",
    "topic": "Dynamic Programming",
    "sub_topic": "Longest Duplicate Subset",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/longest-duplicate-substring/"
  },
  {
    "title": "Longest Duplicate Substring - II",
    "topic": "Dynamic Programming",
    "sub_topic": "Longest Duplicate Subset",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/longest-repeating-and-non-overlapping-substring/0"
  },
  {
    "title": "Longest Palindromic Subset",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Subsets",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/longest-palindromic-subsequence/"
  },
  {
    "title": "Count Palindromic Subset - I",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Subsets",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1"
  },
  {
    "title": "Count Palindromic Subset - II",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Subsets",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/count-different-palindromic-subsequences/"
  },
  {
    "title": "Min Deletions for Palindrome",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Subsets",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/minimum-deletitions/0"
  },
  {
    "title": "Min Insertions for Palindrome",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Subsets",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/"
  },
  {
    "title": "K Palindromic String",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Subsets",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/find-if-string-is-k-palindrome-or-not1923/1"
  },
  {
    "title": "Count Palindromic Substrings",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Substrings",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/palindromic-substrings/"
  },
  {
    "title": "Using Dynamic Programming",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Substrings",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/count-palindrome-sub-strings-string/"
  },
  {
    "title": "Using Expand Around Center",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Substrings",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/count-palindrome-sub-strings-string-set-2/"
  },
  {
    "title": "Print All Palindromic Substrings",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Substrings",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/find-palindromic-sub-strings-given-string-set-2/"
  },
  {
    "title": "Distinct Palindromic Substrings",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Substrings",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/distinct-palindromic-substrings/0"
  },
  {
    "title": "Using Dynamic Programming",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Substrings",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/distinct-palindromic-sub-strings-of-the-given-string-using-dynamic-programming/"
  },
  {
    "title": "Using Manacher's Algorithm",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Substrings",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/find-number-distinct-palindromic-sub-strings-given-string/"
  },
  {
    "title": "Longest Palindromic Substring",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Substrings",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-palindromic-substring/"
  },
  {
    "title": "Using Dynamic Programming",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Substrings",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/longest-palindrome-substring-set-1/"
  },
  {
    "title": "Using Expand Around Center",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Substrings",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/longest-palindromic-substring-set-2/"
  },
  {
    "title": "Wildcard Matching",
    "topic": "Dynamic Programming",
    "sub_topic": "Expression Matching",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/wildcard-matching/"
  },
  {
    "title": "Regular Expression Matching",
    "topic": "Dynamic Programming",
    "sub_topic": "Expression Matching",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/regular-expression-matching/"
  },
  {
    "title": "Edit Distance",
    "topic": "Dynamic Programming",
    "sub_topic": "Expression Matching",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/edit-distance/"
  },
  {
    "title": "Min Cost for Identical Strings",
    "topic": "Dynamic Programming",
    "sub_topic": "Expression Matching",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/minimum-cost-to-make-two-strings-identical1107/1"
  },
  {
    "title": "Min Delete Operations",
    "topic": "Dynamic Programming",
    "sub_topic": "Expression Matching",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/delete-operation-for-two-strings/"
  },
  {
    "title": "Min ASCII Delete Sum",
    "topic": "Dynamic Programming",
    "sub_topic": "Expression Matching",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/"
  },
  {
    "title": "Interleaving String",
    "topic": "Dynamic Programming",
    "sub_topic": "Expression Matching",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/interleaving-string/"
  },
  {
    "title": "Distinct Transformations",
    "topic": "Dynamic Programming",
    "sub_topic": "Expression Matching",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/distinct-subsequences/"
  },
  {
    "title": "Min Insertions and Deletions",
    "topic": "Dynamic Programming",
    "sub_topic": "Expression Matching",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/minimum-number-of-deletions-and-insertions0209/1"
  },
  {
    "title": "Shortest Common Superset - I",
    "topic": "Dynamic Programming",
    "sub_topic": "Shortest Common Superset",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/shortest-common-supersequence0322/1"
  },
  {
    "title": "Shortest Common Superset - II",
    "topic": "Dynamic Programming",
    "sub_topic": "Shortest Common Superset",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/shortest-common-supersequence/"
  },
  {
    "title": "Shortest Uncommon Subset",
    "topic": "Dynamic Programming",
    "sub_topic": "Shortest Common Superset",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/shortest-uncommon-subsequence5746/1"
  },
  {
    "title": "Nth Catalan Number",
    "topic": "Dynamic Programming",
    "sub_topic": "Catalan Numbers",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/nth-catalan-number0817/1"
  },
  {
    "title": "Nth Catalan - 3 Solns",
    "topic": "Dynamic Programming",
    "sub_topic": "Catalan Numbers",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/program-nth-catalan-number/"
  },
  {
    "title": "Catalan No Applications",
    "topic": "Dynamic Programming",
    "sub_topic": "Catalan Numbers",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/applications-of-catalan-numbers/"
  },
  {
    "title": "Unique BSTs - I",
    "topic": "Dynamic Programming",
    "sub_topic": "Catalan Numbers",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/unique-binary-search-trees/"
  },
  {
    "title": "Unique BSTs - II",
    "topic": "Dynamic Programming",
    "sub_topic": "Catalan Numbers",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/unique-binary-search-trees-ii/"
  },
  {
    "title": "Count Balanced Paranthesis",
    "topic": "Dynamic Programming",
    "sub_topic": "Catalan Numbers",
    "difficulty": "Hard",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/dynamic-programming/count-brackets-official/ojquestion"
  },
  {
    "title": "Count of Mountain Ranges",
    "topic": "Dynamic Programming",
    "sub_topic": "Catalan Numbers",
    "difficulty": "Hard",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/dynamic-programming/count-valleys-mountains-official/ojquestion"
  },
  {
    "title": "Dyck Paths",
    "topic": "Dynamic Programming",
    "sub_topic": "Catalan Numbers",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/dyck-path1028/1"
  },
  {
    "title": "Dyck Words",
    "topic": "Dynamic Programming",
    "sub_topic": "Catalan Numbers",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/dyck-words-of-given-length/"
  },
  {
    "title": "Non Intersecting Chords",
    "topic": "Dynamic Programming",
    "sub_topic": "Catalan Numbers",
    "difficulty": "Hard",
    "link": "https://www.interviewbit.com/problems/intersecting-chords-in-a-circle/"
  },
  {
    "title": "Count Handshakes",
    "topic": "Dynamic Programming",
    "sub_topic": "Catalan Numbers",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/handshakes1303/1"
  },
  {
    "title": "Count Triangulations",
    "topic": "Dynamic Programming",
    "sub_topic": "Catalan Numbers",
    "difficulty": "Hard",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/dynamic-programming/number-of-ways-of-triangulation-official/ojquestion"
  },
  {
    "title": "Min Score Triangluation",
    "topic": "Dynamic Programming",
    "sub_topic": "Catalan Numbers",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/minimum-score-triangulation-of-polygon/"
  },
  {
    "title": "Maximum Subarray Sum",
    "topic": "Dynamic Programming",
    "sub_topic": "Kadane's Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-subarray/"
  },
  {
    "title": "Max Absolute Sum Subarray",
    "topic": "Dynamic Programming",
    "sub_topic": "Kadane's Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/"
  },
  {
    "title": "Max Sum Circular Subarray",
    "topic": "Dynamic Programming",
    "sub_topic": "Kadane's Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-sum-circular-subarray/"
  },
  {
    "title": "K Concatenation Max Sum",
    "topic": "Dynamic Programming",
    "sub_topic": "Kadane's Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/k-concatenation-maximum-sum/"
  },
  {
    "title": "Maximum Product Subarray",
    "topic": "Dynamic Programming",
    "sub_topic": "Kadane's Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-product-subarray/"
  },
  {
    "title": "Maximum Sum Submatrix",
    "topic": "Dynamic Programming",
    "sub_topic": "Kadane's Algorithm",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/maximum-sum-rectangle/0"
  },
  {
    "title": "Max Sum Subarray >= K Size",
    "topic": "Dynamic Programming",
    "sub_topic": "Kadane's Algorithm",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/largest-sum-subarray-of-size-at-least-k3121/1"
  },
  {
    "title": "Best Sightseeing Pair",
    "topic": "Dynamic Programming",
    "sub_topic": "Kadane's Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/best-sightseeing-pair/"
  },
  {
    "title": "Max Difference of 0s 1s",
    "topic": "Dynamic Programming",
    "sub_topic": "Kadane's Algorithm",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/maximum-difference-of-zeros-and-ones-in-binary-string4111/1"
  },
  {
    "title": "Max Sum 2 Non-Overlap Subarrays",
    "topic": "Dynamic Programming",
    "sub_topic": "Kadane's Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/"
  },
  {
    "title": "Max Sum 3 Non-Overlap Subarrays",
    "topic": "Dynamic Programming",
    "sub_topic": "Kadane's Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/"
  },
  {
    "title": "Max Sum 3 Non-Overlap Subarrays",
    "topic": "Dynamic Programming",
    "sub_topic": "Kadane's Algorithm",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/dynamic-programming/maximum-sum-of-m-non-overlapping-subarrays-official/ojquestion"
  },
  {
    "title": "Max Sum K Non-Overlap Subarrays",
    "topic": "Dynamic Programming",
    "sub_topic": "Kadane's Algorithm",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/max-sum-of-m-non-overlapping-subarrays-of-size-k/"
  },
  {
    "title": "Predict the Winner",
    "topic": "Dynamic Programming",
    "sub_topic": "Optimal Game Strategy",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/predict-the-winner/"
  },
  {
    "title": "Stone Game",
    "topic": "Dynamic Programming",
    "sub_topic": "Optimal Game Strategy",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/stone-game/"
  },
  {
    "title": "Optimal Game Strategy",
    "topic": "Dynamic Programming",
    "sub_topic": "Optimal Game Strategy",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/optimal-strategy-for-a-game-1587115620/1"
  },
  {
    "title": "Wine Selling Problem",
    "topic": "Dynamic Programming",
    "sub_topic": "Optimal Game Strategy",
    "difficulty": "Hard",
    "link": "https://www.codingninjas.com/codestudio/library/wine-selling"
  },
  {
    "title": "Egg Drop - 2 Eggs",
    "topic": "Dynamic Programming",
    "sub_topic": "Optimal Game Strategy",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/"
  },
  {
    "title": "Egg Drop - K Eggs",
    "topic": "Dynamic Programming",
    "sub_topic": "Optimal Game Strategy",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/egg-dropping-puzzle-1587115620/1"
  },
  {
    "title": "Super Egg Drop",
    "topic": "Dynamic Programming",
    "sub_topic": "Optimal Game Strategy",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/super-egg-drop/"
  },
  {
    "title": "Stone Game - II",
    "topic": "Dynamic Programming",
    "sub_topic": "Optimal Game Strategy",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/stone-game-ii/"
  },
  {
    "title": "Stone Game - III",
    "topic": "Dynamic Programming",
    "sub_topic": "Optimal Game Strategy",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/stone-game-iii/"
  },
  {
    "title": "Stone Game - IV",
    "topic": "Dynamic Programming",
    "sub_topic": "Optimal Game Strategy",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/stone-game-iv/"
  },
  {
    "title": "Stone Game - V",
    "topic": "Dynamic Programming",
    "sub_topic": "Optimal Game Strategy",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/stone-game-v/"
  },
  {
    "title": "Stone Game - VII",
    "topic": "Dynamic Programming",
    "sub_topic": "Optimal Game Strategy",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/stone-game-vii/"
  },
  {
    "title": "Stone Game - VIII",
    "topic": "Dynamic Programming",
    "sub_topic": "Optimal Game Strategy",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/stone-game-viii/"
  },
  {
    "title": "Palindrome Partitioning - I",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Partitioning",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/palindrome-partitioning/"
  },
  {
    "title": "Palindrome Partitioning - II",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Partitioning",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/palindrome-partitioning-ii/"
  },
  {
    "title": "Palindrome Partitioning - III",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Partitioning",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/palindrome-partitioning-iii/"
  },
  {
    "title": "Palindrome Partitioning - IV",
    "topic": "Dynamic Programming",
    "sub_topic": "Palindromic Partitioning",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/palindrome-partitioning-iv/"
  },
  {
    "title": "Matrix Chain Multiplication",
    "topic": "Dynamic Programming",
    "sub_topic": "Matrix Chain Multiplication",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1"
  },
  {
    "title": "Printing Brackets",
    "topic": "Dynamic Programming",
    "sub_topic": "Matrix Chain Multiplication",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/brackets-in-matrix-chain-multiplication1024/1"
  },
  {
    "title": "Parsing Boolean Expression",
    "topic": "Dynamic Programming",
    "sub_topic": "Matrix Chain Multiplication",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/parsing-a-boolean-expression/"
  },
  {
    "title": "Boolean Parenthesization",
    "topic": "Dynamic Programming",
    "sub_topic": "Matrix Chain Multiplication",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/boolean-parenthesization5610/0"
  },
  {
    "title": "Optimal Binary Search Tree",
    "topic": "Dynamic Programming",
    "sub_topic": "Matrix Chain Multiplication",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/optimal-binary-search-tree2214/1"
  },
  {
    "title": "Partition array for Max Sum",
    "topic": "Dynamic Programming",
    "sub_topic": "Matrix Chain Multiplication",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/partition-array-for-maximum-sum/"
  },
  {
    "title": "Burst Balloons",
    "topic": "Dynamic Programming",
    "sub_topic": "Matrix Chain Multiplication",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/burst-balloons/"
  },
  {
    "title": "Scramble String",
    "topic": "Dynamic Programming",
    "sub_topic": "Matrix Chain Multiplication",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/scramble-string/"
  },
  {
    "title": "Rectangle Cutting",
    "topic": "Dynamic Programming",
    "sub_topic": "Matrix Chain Multiplication",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/"
  },
  {
    "title": "Min Cost to Merge Stones",
    "topic": "Dynamic Programming",
    "sub_topic": "Matrix Chain Multiplication",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/minimum-cost-to-merge-stones/"
  },
  {
    "title": "Min Cost to Cut Stick",
    "topic": "Dynamic Programming",
    "sub_topic": "Matrix Chain Multiplication",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/"
  },
  {
    "title": "Min & Max Values with * +",
    "topic": "Dynamic Programming",
    "sub_topic": "Matrix Chain Multiplication",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/minimum-maximum-values-expression/"
  },
  {
    "title": "Check Word Break",
    "topic": "Dynamic Programming",
    "sub_topic": "Word Break",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/word-break/"
  },
  {
    "title": "Concatenated Words",
    "topic": "Dynamic Programming",
    "sub_topic": "Word Break",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/concatenated-words/"
  },
  {
    "title": "Word Break - Backtracking",
    "topic": "Dynamic Programming",
    "sub_topic": "Word Break",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/word-break-part-2/0"
  },
  {
    "title": "Word Break - DP",
    "topic": "Dynamic Programming",
    "sub_topic": "Word Break",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/word-break-ii/"
  },
  {
    "title": "Minimum Word Break",
    "topic": "Dynamic Programming",
    "sub_topic": "Word Break",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/minimum-word-break/"
  },
  {
    "title": "Text Justification - Greedy",
    "topic": "Dynamic Programming",
    "sub_topic": "Word Break",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/text-justification/"
  },
  {
    "title": "Text Justification - DP",
    "topic": "Dynamic Programming",
    "sub_topic": "Word Break",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/word-wrap/0"
  },
  {
    "title": "Decimal to Any Base",
    "topic": "Bit Manipulation",
    "sub_topic": "Number System",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/decimal-to-any-base-conversion2440/0"
  },
  {
    "title": "Decimal to Any Base",
    "topic": "Bit Manipulation",
    "sub_topic": "Number System",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/sum-of-digits-in-base-k/"
  },
  {
    "title": "Decimal to Base 7",
    "topic": "Bit Manipulation",
    "sub_topic": "Number System",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/base-7/"
  },
  {
    "title": "Decimal to Hexadecimal",
    "topic": "Bit Manipulation",
    "sub_topic": "Number System",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/convert-a-number-to-hexadecimal/"
  },
  {
    "title": "Decimal to -2 Base",
    "topic": "Bit Manipulation",
    "sub_topic": "Number System",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/convert-to-base-2/"
  },
  {
    "title": "Any Base to Decimal",
    "topic": "Bit Manipulation",
    "sub_topic": "Number System",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/convert-from-any-base-to-decimal3736/1"
  },
  {
    "title": "Convert Binary to Decimal",
    "topic": "Bit Manipulation",
    "sub_topic": "Number System",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/"
  },
  {
    "title": "Any Base to Any Base",
    "topic": "Bit Manipulation",
    "sub_topic": "Number System",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/function-and-arrays/any-base-to-any-base-official/ojquestion"
  },
  {
    "title": "Any Base to Any Base",
    "topic": "Bit Manipulation",
    "sub_topic": "Number System",
    "difficulty": "Easy",
    "link": "https://www.geeksforgeeks.org/convert-a-number-from-base-a-to-base-b/"
  },
  {
    "title": "Any Base Addition",
    "topic": "Bit Manipulation",
    "sub_topic": "Number System",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/function-and-arrays/any-base-addition-official/ojquestion"
  },
  {
    "title": "Any Base Addition",
    "topic": "Bit Manipulation",
    "sub_topic": "Number System",
    "difficulty": "Easy",
    "link": "https://www.geeksforgeeks.org/program-to-add-two-integers-of-given-base/"
  },
  {
    "title": "Add Binary Numbers",
    "topic": "Bit Manipulation",
    "sub_topic": "Number System",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/add-binary/"
  },
  {
    "title": "Add -2 Base Numbers",
    "topic": "Bit Manipulation",
    "sub_topic": "Number System",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/adding-two-negabinary-numbers/"
  },
  {
    "title": "Any Base Subtraction",
    "topic": "Bit Manipulation",
    "sub_topic": "Number System",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/function-and-arrays/any-base-subtraction-official/ojquestion"
  },
  {
    "title": "Any Base Subtraction",
    "topic": "Bit Manipulation",
    "sub_topic": "Number System",
    "difficulty": "Easy",
    "link": "https://www.geeksforgeeks.org/program-to-subtract-two-integers-of-given-base/"
  },
  {
    "title": "Any Base Multiplication",
    "topic": "Bit Manipulation",
    "sub_topic": "Number System",
    "difficulty": "Easy",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/function-and-arrays/any-base-multiplication-official/ojquestion"
  },
  {
    "title": "Any Base Multiplication",
    "topic": "Bit Manipulation",
    "sub_topic": "Number System",
    "difficulty": "Easy",
    "link": "https://www.hackerearth.com/problem/algorithm/any-base-multiplication-65d2d68b/"
  },
  {
    "title": "Bitmasking Tricks",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitmasking Basics",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/bits-manipulation-important-tactics/"
  },
  {
    "title": "Binary Representation",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitmasking Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/binary-representation5003/1"
  },
  {
    "title": "1s Complement",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitmasking Basics",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/number-complement/"
  },
  {
    "title": "2s Complement",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitmasking Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/2s-complement3124/1"
  },
  {
    "title": "Check Bits",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitmasking Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/check-whether-k-th-bit-is-set-or-not-1587115620/1"
  },
  {
    "title": "Check Odd or Even",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitmasking Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/odd-or-even3618/1"
  },
  {
    "title": "Set Bits",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitmasking Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/set-kth-bit3724/1"
  },
  {
    "title": "Unset or Clear Bits",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitmasking Basics",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/reset-in-range_972998"
  },
  {
    "title": "Toggle Bits",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitmasking Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/toggle-bits-given-range0952/1"
  },
  {
    "title": "Swap 2 Nos Using Bits",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitmasking Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/swap-two-numbers3844/1"
  },
  {
    "title": "Power Set Using Bits",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitmasking Basics",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/power-set4302/1"
  },
  {
    "title": "Find Rightmost Set Bit",
    "topic": "Bit Manipulation",
    "sub_topic": "Hamming Weight",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/find-first-set-bit-1587115620/1"
  },
  {
    "title": "Set Rightmost Unset Bit",
    "topic": "Bit Manipulation",
    "sub_topic": "Hamming Weight",
    "difficulty": "Easy",
    "link": "https://practice.geeksforgeeks.org/problems/set-the-rightmost-unset-bit4436/1"
  },
  {
    "title": "Hamming Weight - I",
    "topic": "Bit Manipulation",
    "sub_topic": "Hamming Weight",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/number-of-1-bits/"
  },
  {
    "title": "Hamming Weight - II",
    "topic": "Bit Manipulation",
    "sub_topic": "Hamming Weight",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/counting-bits/"
  },
  {
    "title": "Hamming Distance",
    "topic": "Bit Manipulation",
    "sub_topic": "Hamming Weight",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/hamming-distance/"
  },
  {
    "title": "Total Hamming Distance",
    "topic": "Bit Manipulation",
    "sub_topic": "Hamming Weight",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/total-hamming-distance/"
  },
  {
    "title": "Prime Set Bits",
    "topic": "Bit Manipulation",
    "sub_topic": "Hamming Weight",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/"
  },
  {
    "title": "Steps Reduce to 0",
    "topic": "Bit Manipulation",
    "sub_topic": "Hamming Weight",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/"
  },
  {
    "title": "Min Bit Flips to Convert No",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitset Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/"
  },
  {
    "title": "Same No of Set Bits",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitset Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/shreyansh-and-his-bits1420/1"
  },
  {
    "title": "Copy Set Bits in Range",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitset Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/copy-set-bits-in-range0623/1"
  },
  {
    "title": "Reverse Bits",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitset Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/reverse-bits/"
  },
  {
    "title": "Swap Odd Even Bits",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitset Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/swap-all-odd-and-even-bits-1587115621/1"
  },
  {
    "title": "Swap Nibbles in Byte",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitset Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/swap-two-nibbles-in-a-byte0446/1"
  },
  {
    "title": "Check Power of 2",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitset Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/power-of-two/"
  },
  {
    "title": "Highest Power of 2",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitset Problems",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/highest-power-2-less-equal-given-number/"
  },
  {
    "title": "Check Power of 3",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitset Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/power-of-three/"
  },
  {
    "title": "Check Power of 4",
    "topic": "Bit Manipulation",
    "sub_topic": "Bitset Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/power-of-four/"
  },
  {
    "title": "Generate Gray Codes - I",
    "topic": "Bit Manipulation",
    "sub_topic": "Gray Codes",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/gray-code/"
  },
  {
    "title": "Generate Gray Codes - II",
    "topic": "Bit Manipulation",
    "sub_topic": "Gray Codes",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/generate-grey-code-sequences/1"
  },
  {
    "title": "Gray - Binary Conversion",
    "topic": "Bit Manipulation",
    "sub_topic": "Gray Codes",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/gray-to-binary-and-binary-to-gray5518/1"
  },
  {
    "title": "Single Number - I",
    "topic": "Bit Manipulation",
    "sub_topic": "Single Number",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/single-number/"
  },
  {
    "title": "Single Number - II",
    "topic": "Bit Manipulation",
    "sub_topic": "Single Number",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/single-number-ii/"
  },
  {
    "title": "Single Number - III",
    "topic": "Bit Manipulation",
    "sub_topic": "Single Number",
    "difficulty": "Easy",
    "link": "https://leetcode.com/problems/single-number-iii/"
  },
  {
    "title": "Triplets with = XOR",
    "topic": "Bit Manipulation",
    "sub_topic": "XOR Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/"
  },
  {
    "title": "XOR of Sum of Pairs",
    "topic": "Bit Manipulation",
    "sub_topic": "XOR Problems",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/xor-sum-every-possible-pair-array/"
  },
  {
    "title": "Min Xor Pair",
    "topic": "Bit Manipulation",
    "sub_topic": "XOR Problems",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/min-xor-value/"
  },
  {
    "title": "Xor Subarray Queries",
    "topic": "Bit Manipulation",
    "sub_topic": "XOR Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/xor-queries-of-a-subarray/"
  },
  {
    "title": "Max XOR in Range",
    "topic": "Bit Manipulation",
    "sub_topic": "XOR Problems",
    "difficulty": "Medium",
    "link": "https://www.hackerrank.com/challenges/maximizing-xor/problem"
  },
  {
    "title": "XOR of All Subarrays",
    "topic": "Bit Manipulation",
    "sub_topic": "XOR Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/game-of-xor1541/1"
  },
  {
    "title": "Count Pairs = XOR",
    "topic": "Bit Manipulation",
    "sub_topic": "XOR Problems",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/pairs-with-given-xor/"
  },
  {
    "title": "Bitwise AND of Range",
    "topic": "Bit Manipulation",
    "sub_topic": "XOR Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/bitwise-and-of-numbers-range/"
  },
  {
    "title": "Josephus Special Case",
    "topic": "Bit Manipulation",
    "sub_topic": "More Bits Problems",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/data-structures-and-algorithms-in-java-levelup/bit-manipulation/josephus-special-official/ojquestion"
  },
  {
    "title": "Josephus Special Case",
    "topic": "Bit Manipulation",
    "sub_topic": "More Bits Problems",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/josephus-problem-set-2-simple-solution-k-2/"
  },
  {
    "title": "Divide Integers w/o Operators",
    "topic": "Bit Manipulation",
    "sub_topic": "More Bits Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/divide-two-integers/"
  },
  {
    "title": "Add Integers w/o Operators",
    "topic": "Bit Manipulation",
    "sub_topic": "More Bits Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sum-of-two-integers/"
  },
  {
    "title": "Valid Words for Puzzle",
    "topic": "Bit Manipulation",
    "sub_topic": "More Bits Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/"
  },
  {
    "title": "Integer Replacement",
    "topic": "Bit Manipulation",
    "sub_topic": "More Bits Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/integer-replacement/"
  },
  {
    "title": "Is No Multiple of 3",
    "topic": "Bit Manipulation",
    "sub_topic": "More Bits Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/is-binary-number-multiple-of-30654/1"
  },
  {
    "title": "UTF - 8 Encoding",
    "topic": "Bit Manipulation",
    "sub_topic": "More Bits Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/utf-8-validation/"
  },
  {
    "title": "Palindromic Binary No",
    "topic": "Bit Manipulation",
    "sub_topic": "More Bits Problems",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/palindromic-binary-representation/"
  },
  {
    "title": "Binary Substrings 1 to N",
    "topic": "Bit Manipulation",
    "sub_topic": "More Bits Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/"
  },
  {
    "title": "Count Steps to Reduce to 1",
    "topic": "Bit Manipulation",
    "sub_topic": "More Bits Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/"
  },
  {
    "title": "DFS",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1"
  },
  {
    "title": "DFS - Multisolver",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/graphs/mutilsovler-graph-official/ojquestion"
  },
  {
    "title": "DFS - Iterative",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/iterative-depth-first-traversal/"
  },
  {
    "title": "DFS - Applications",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/applications-of-depth-first-search/"
  },
  {
    "title": "BFS",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1"
  },
  {
    "title": "BFS - Applications",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/applications-of-breadth-first-traversal/"
  },
  {
    "title": "Has Path (IB)",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-if-path-exists-in-graph/"
  },
  {
    "title": "Print All Paths",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/all-paths-from-source-to-target/"
  },
  {
    "title": "Time to Inform Employees",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/time-needed-to-inform-all-employees/"
  },
  {
    "title": "Min Swaps to Sort Array",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/minimum-swaps/1"
  },
  {
    "title": "Clone Graph",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/clone-graph/"
  },
  {
    "title": "Hamiltonian Path",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/hamiltonian-path2522/1"
  },
  {
    "title": "Hamiltonian Cycle",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/hamiltonian-cycle-backtracking-6/"
  },
  {
    "title": "Hamitonian Cycle",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/graphs/hamiltonian-official/ojquestion"
  },
  {
    "title": "Pacific Atlantic Water Flow",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/pacific-atlantic-water-flow/"
  },
  {
    "title": "Surrounded Regions",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/surrounded-regions/"
  },
  {
    "title": "Reorder Routes",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/"
  },
  {
    "title": "Water Jug Problem",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/water-and-jug-problem/"
  },
  {
    "title": "Smallest Multiple with 0 & 1",
    "topic": "Graphs",
    "sub_topic": "Basic BFS/DFS",
    "difficulty": "Medium",
    "link": "https://www.interviewbit.com/problems/smallest-multiple-with-0-and-1/"
  },
  {
    "title": "Euler Path & Circuit",
    "topic": "Graphs",
    "sub_topic": "Euler Path & Circuit",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/euler-circuit-and-path/1"
  },
  {
    "title": "Seven Bridges of Königsberg",
    "topic": "Graphs",
    "sub_topic": "Euler Path & Circuit",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/paths-travel-nodes-using-edgeseven-bridges-konigsberg/"
  },
  {
    "title": "Euler Path - Undirected",
    "topic": "Graphs",
    "sub_topic": "Euler Path & Circuit",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/eulerian-path-and-circuit/"
  },
  {
    "title": "Euler Path - Directed",
    "topic": "Graphs",
    "sub_topic": "Euler Path & Circuit",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/euler-circuit-directed-graph/"
  },
  {
    "title": "Reconstruct Itinerary",
    "topic": "Graphs",
    "sub_topic": "Euler Path & Circuit",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/reconstruct-itinerary/"
  },
  {
    "title": "Number of Provinces",
    "topic": "Graphs",
    "sub_topic": "Connected Components",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/number-of-provinces/"
  },
  {
    "title": "Make Graph Connected",
    "topic": "Graphs",
    "sub_topic": "Connected Components",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/number-of-operations-to-make-network-connected/"
  },
  {
    "title": "Unreachable Pair Nodes",
    "topic": "Graphs",
    "sub_topic": "Connected Components",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/"
  },
  {
    "title": "Minimize Malware Spread",
    "topic": "Graphs",
    "sub_topic": "Connected Components",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimize-malware-spread/"
  },
  {
    "title": "Number of Islands",
    "topic": "Graphs",
    "sub_topic": "Connected Components",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/number-of-islands/"
  },
  {
    "title": "Number of Enclaves",
    "topic": "Graphs",
    "sub_topic": "Connected Components",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/number-of-enclaves/"
  },
  {
    "title": "Number of Distinct Islands",
    "topic": "Graphs",
    "sub_topic": "Connected Components",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/number-of-distinct-islands/1"
  },
  {
    "title": "Island Perimeter",
    "topic": "Graphs",
    "sub_topic": "Connected Components",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/island-perimeter/"
  },
  {
    "title": "Island Area",
    "topic": "Graphs",
    "sub_topic": "Connected Components",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/max-area-of-island/"
  },
  {
    "title": "Flood Fill",
    "topic": "Graphs",
    "sub_topic": "Connected Components",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/flood-fill/"
  },
  {
    "title": "SCC - Kosaraju Algo",
    "topic": "Graphs",
    "sub_topic": "Connected Components",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1"
  },
  {
    "title": "Kosaraju - DFS",
    "topic": "Graphs",
    "sub_topic": "Connected Components",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/connectivity-in-a-directed-graph/"
  },
  {
    "title": "Kosaraju - BFS",
    "topic": "Graphs",
    "sub_topic": "Connected Components",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/check-given-directed-graph-strongly-connected-set-2-kosaraju-using-bfs/"
  },
  {
    "title": "SCC - Tarjan Algo",
    "topic": "Graphs",
    "sub_topic": "Connected Components",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/strongly-connected-component-tarjanss-algo-1587115621/1"
  },
  {
    "title": "Tarjan Algorithm",
    "topic": "Graphs",
    "sub_topic": "Connected Components",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/tarjan-algorithm-find-strongly-connected-components/"
  },
  {
    "title": "Cycle in Undirected Graph",
    "topic": "Graphs",
    "sub_topic": "Cycle Detection",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1"
  },
  {
    "title": "Undirected - DFS",
    "topic": "Graphs",
    "sub_topic": "Cycle Detection",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/detect-cycle-undirected-graph/"
  },
  {
    "title": "Undirected - BFS",
    "topic": "Graphs",
    "sub_topic": "Cycle Detection",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/detect-cycle-in-an-undirected-graph-using-bfs/"
  },
  {
    "title": "Cycle in Directed Graph",
    "topic": "Graphs",
    "sub_topic": "Cycle Detection",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1"
  },
  {
    "title": "Directed - DFS - 2 Arrays",
    "topic": "Graphs",
    "sub_topic": "Cycle Detection",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/"
  },
  {
    "title": "Directed - DFS - Coloring",
    "topic": "Graphs",
    "sub_topic": "Cycle Detection",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/detect-cycle-direct-graph-using-colors/"
  },
  {
    "title": "Directed - BFS",
    "topic": "Graphs",
    "sub_topic": "Cycle Detection",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/detect-cycle-in-a-directed-graph-using-bfs/"
  },
  {
    "title": "Graph - Valid Tree",
    "topic": "Graphs",
    "sub_topic": "Cycle Detection",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/graph-valid-tree_1376618"
  },
  {
    "title": "Eventual Safe States",
    "topic": "Graphs",
    "sub_topic": "Cycle Detection",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/find-eventual-safe-states/"
  },
  {
    "title": "Longest Cycle Length",
    "topic": "Graphs",
    "sub_topic": "Cycle Detection",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-cycle-in-a-graph/"
  },
  {
    "title": "Print All Cycles",
    "topic": "Graphs",
    "sub_topic": "Cycle Detection",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/print-all-the-cycles-in-an-undirected-graph/"
  },
  {
    "title": "Topological Sort",
    "topic": "Graphs",
    "sub_topic": "Topological Sort",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/topological-sort/1"
  },
  {
    "title": "Topological Sort - DFS",
    "topic": "Graphs",
    "sub_topic": "Topological Sort",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/topological-sorting/"
  },
  {
    "title": "Topological Sort - BFS",
    "topic": "Graphs",
    "sub_topic": "Topological Sort",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/"
  },
  {
    "title": "Course Schedule - I",
    "topic": "Graphs",
    "sub_topic": "Topological Sort",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/course-schedule/"
  },
  {
    "title": "Course Schedule - II",
    "topic": "Graphs",
    "sub_topic": "Topological Sort",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/course-schedule-ii/"
  },
  {
    "title": "Parallel Courses",
    "topic": "Graphs",
    "sub_topic": "Topological Sort",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/parallel-courses_1376444"
  },
  {
    "title": "Alien Dictionary - I",
    "topic": "Graphs",
    "sub_topic": "Topological Sort",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/verifying-an-alien-dictionary/"
  },
  {
    "title": "Alien Dictionary - II",
    "topic": "Graphs",
    "sub_topic": "Topological Sort",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/alien-dictionary/1"
  },
  {
    "title": "Mother Vertex",
    "topic": "Graphs",
    "sub_topic": "Topological Sort",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/mother-vertex/1"
  },
  {
    "title": "Assign Directions - DAG",
    "topic": "Graphs",
    "sub_topic": "Topological Sort",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/assign-directions-to-edges-so-that-the-directed-graph-remains-acyclic/"
  },
  {
    "title": "Minimum Height Trees",
    "topic": "Graphs",
    "sub_topic": "Topological Sort",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-height-trees/"
  },
  {
    "title": "Bipartite Graph",
    "topic": "Graphs",
    "sub_topic": "Graph Coloring",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/is-graph-bipartite/"
  },
  {
    "title": "Bipartite Graph - BFS",
    "topic": "Graphs",
    "sub_topic": "Graph Coloring",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/bipartite-graph/"
  },
  {
    "title": "Bipartite Graph - DFS",
    "topic": "Graphs",
    "sub_topic": "Graph Coloring",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/check-if-a-given-graph-is-bipartite-using-dfs/"
  },
  {
    "title": "Possible Bipartition",
    "topic": "Graphs",
    "sub_topic": "Graph Coloring",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/possible-bipartition/"
  },
  {
    "title": "Two Clique Problem",
    "topic": "Graphs",
    "sub_topic": "Graph Coloring",
    "difficulty": "Hard",
    "link": "https://www.codingninjas.com/codestudio/problems/two-cliques_1214524"
  },
  {
    "title": "M Coloring Problem",
    "topic": "Graphs",
    "sub_topic": "Graph Coloring",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1"
  },
  {
    "title": "Graph Coloring",
    "topic": "Graphs",
    "sub_topic": "Graph Coloring",
    "difficulty": "Hard",
    "link": "https://www.interviewbit.com/blog/graph-coloring-problem/"
  },
  {
    "title": "Unweighted Graph",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/shortest-path-in-an-unweighted-graph_981297"
  },
  {
    "title": "Unweighted Graph",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/shortest-path-unweighted-graph/"
  },
  {
    "title": "Spread of Infection",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://www.pepcoding.com/resources/online-java-foundation/graphs/infection-spread-official/ojquestion"
  },
  {
    "title": "Rotten Oranges",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/rotting-oranges/"
  },
  {
    "title": "Snake and Ladder",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/snakes-and-ladders/"
  },
  {
    "title": "Word Ladder - I",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/word-ladder/"
  },
  {
    "title": "Word Ladder - II",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/word-ladder-ii/"
  },
  {
    "title": "Nearest 0 in Binary Matrix",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/01-matrix/"
  },
  {
    "title": "Shortest Path in Binary Matrix",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/shortest-path-in-binary-matrix/"
  },
  {
    "title": "Min Steps by Knight",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/steps-by-knight5927/1"
  },
  {
    "title": "Shortest Bridge",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/shortest-bridge/"
  },
  {
    "title": "Shortest Path Visiting All Nodes",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/shortest-path-visiting-all-nodes/"
  },
  {
    "title": "Farthest Land Possible",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/as-far-from-land-as-possible/"
  },
  {
    "title": "Sliding Puzzle",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/sliding-puzzle/"
  },
  {
    "title": "K Similar Strings",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/k-similar-strings/"
  },
  {
    "title": "0-1 BFS",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/0-1-bfs-shortest-path-binary-graph/"
  },
  {
    "title": "Minimum Edges Reversals",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/reverse-edges_1200162"
  },
  {
    "title": "Min Cost for Valid Path",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/"
  },
  {
    "title": "Trapping Rain Water 3D",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/trapping-rain-water-ii/"
  },
  {
    "title": "Jump Game - III",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/jump-game-iii/"
  },
  {
    "title": "Jump Game - IV",
    "topic": "Graphs",
    "sub_topic": "Unweighted Graph",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/jump-game-iv/"
  },
  {
    "title": "Network Delay Time",
    "topic": "Graphs",
    "sub_topic": "Dijkstra's Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/network-delay-time/"
  },
  {
    "title": "Min Cost Path in Grid",
    "topic": "Graphs",
    "sub_topic": "Dijkstra's Algorithm",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/minimum-cost-path3833/1"
  },
  {
    "title": "Path with Max Probability",
    "topic": "Graphs",
    "sub_topic": "Dijkstra's Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/path-with-maximum-probability/"
  },
  {
    "title": "Path with Min Effort",
    "topic": "Graphs",
    "sub_topic": "Dijkstra's Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/path-with-minimum-effort/"
  },
  {
    "title": "Count Shortest Paths",
    "topic": "Graphs",
    "sub_topic": "Dijkstra's Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/"
  },
  {
    "title": "Bus Routes",
    "topic": "Graphs",
    "sub_topic": "Dijkstra's Algorithm",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/bus-routes/"
  },
  {
    "title": "Bellman Ford Algorithm",
    "topic": "Graphs",
    "sub_topic": "Bellman Ford Algo",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1"
  },
  {
    "title": "Negative Weight Cycle",
    "topic": "Graphs",
    "sub_topic": "Bellman Ford Algo",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/negative-weight-cycle3504/1"
  },
  {
    "title": "Cheapest Flights K Stops",
    "topic": "Graphs",
    "sub_topic": "Bellman Ford Algo",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
  },
  {
    "title": "Floyd Warshall Algorithm",
    "topic": "Graphs",
    "sub_topic": "Floyd Warshall Algo",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1"
  },
  {
    "title": "City with Min Neighbours",
    "topic": "Graphs",
    "sub_topic": "Floyd Warshall Algo",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/"
  },
  {
    "title": "Shortest Paths Queries",
    "topic": "Graphs",
    "sub_topic": "Floyd Warshall Algo",
    "difficulty": "Hard",
    "link": "https://cses.fi/problemset/task/1672"
  },
  {
    "title": "Shortest Path in DAG",
    "topic": "Graphs",
    "sub_topic": "Directed Acyclic Graph",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/shortest-path-for-directed-acyclic-graphs/"
  },
  {
    "title": "Longest Path in DAG",
    "topic": "Graphs",
    "sub_topic": "Directed Acyclic Graph",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/find-longest-path-directed-acyclic-graph/"
  },
  {
    "title": "Longest Path - Tree",
    "topic": "Graphs",
    "sub_topic": "Directed Acyclic Graph",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/longest-path-undirected-tree/"
  },
  {
    "title": "Longest Increasing Path Matrix",
    "topic": "Graphs",
    "sub_topic": "Directed Acyclic Graph",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/"
  },
  {
    "title": "Jump Game - V",
    "topic": "Graphs",
    "sub_topic": "Directed Acyclic Graph",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/jump-game-v/"
  },
  {
    "title": "Shortest Path in Multistage Graph",
    "topic": "Graphs",
    "sub_topic": "Directed Acyclic Graph",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/multistage-graph-shortest-path/"
  },
  {
    "title": "Disjoint Set Union",
    "topic": "Graphs",
    "sub_topic": "Disjoint Set Union (DSU)",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/disjoint-set-union-find/1"
  },
  {
    "title": "No of Island Queries",
    "topic": "Graphs",
    "sub_topic": "Disjoint Set Union (DSU)",
    "difficulty": "Hard",
    "link": "https://www.codingninjas.com/codestudio/problems/number-of-islands-ii_1266048"
  },
  {
    "title": "Smallest Equivalent String",
    "topic": "Graphs",
    "sub_topic": "Disjoint Set Union (DSU)",
    "difficulty": "Hard",
    "link": "https://www.codingninjas.com/codestudio/problems/smallest-equivalent-string_1381859"
  },
  {
    "title": "Has Path Queries",
    "topic": "Graphs",
    "sub_topic": "Disjoint Set Union (DSU)",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/"
  },
  {
    "title": "Similar String Groups",
    "topic": "Graphs",
    "sub_topic": "Disjoint Set Union (DSU)",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/similar-string-groups/"
  },
  {
    "title": "Smallest String with Swaps",
    "topic": "Graphs",
    "sub_topic": "Disjoint Set Union (DSU)",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/smallest-string-with-swaps/"
  },
  {
    "title": "Satisfiability of Eqn",
    "topic": "Graphs",
    "sub_topic": "Disjoint Set Union (DSU)",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/satisfiability-of-equality-equations/"
  },
  {
    "title": "Redundant Connection - I",
    "topic": "Graphs",
    "sub_topic": "Disjoint Set Union (DSU)",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/redundant-connection/"
  },
  {
    "title": "Redundant Connection - II",
    "topic": "Graphs",
    "sub_topic": "Disjoint Set Union (DSU)",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/redundant-connection-ii/"
  },
  {
    "title": "GCD Threshold Connectivity",
    "topic": "Graphs",
    "sub_topic": "Disjoint Set Union (DSU)",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/graph-connectivity-with-threshold/"
  },
  {
    "title": "Evaluate Division",
    "topic": "Graphs",
    "sub_topic": "Disjoint Set Union (DSU)",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/evaluate-division/"
  },
  {
    "title": "Colorful Array",
    "topic": "Graphs",
    "sub_topic": "Disjoint Set Union (DSU)",
    "difficulty": "Hard",
    "link": "https://www.spoj.com/problems/CLFLARR/"
  },
  {
    "title": "Remove Max Edges",
    "topic": "Graphs",
    "sub_topic": "Disjoint Set Union (DSU)",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/"
  },
  {
    "title": "Accounts Merge",
    "topic": "Graphs",
    "sub_topic": "Disjoint Set Union (DSU)",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/accounts-merge/"
  },
  {
    "title": "Rank Transform of Matrix",
    "topic": "Graphs",
    "sub_topic": "Disjoint Set Union (DSU)",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/rank-transform-of-a-matrix/"
  },
  {
    "title": "Most Stones Removed",
    "topic": "Graphs",
    "sub_topic": "Disjoint Set Union (DSU)",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/"
  },
  {
    "title": "Making Large Island",
    "topic": "Graphs",
    "sub_topic": "Disjoint Set Union (DSU)",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/making-a-large-island/"
  },
  {
    "title": "Swim in Rising Water",
    "topic": "Graphs",
    "sub_topic": "Disjoint Set Union (DSU)",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/swim-in-rising-water/"
  },
  {
    "title": "Minimum Spanning Tree",
    "topic": "Graphs",
    "sub_topic": "Minimum Spanning Tree",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1"
  },
  {
    "title": "Min Cost to Connect Points",
    "topic": "Graphs",
    "sub_topic": "Minimum Spanning Tree",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/min-cost-to-connect-all-points/"
  },
  {
    "title": "Optimize Water Distribution",
    "topic": "Graphs",
    "sub_topic": "Minimum Spanning Tree",
    "difficulty": "Hard",
    "link": "https://www.codingninjas.com/codestudio/problems/water-supply-in-a-village_1380956"
  },
  {
    "title": "Euler Tour of Tree",
    "topic": "Graphs",
    "sub_topic": "Articulation Pt & Bridges",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/euler-tour-tree/"
  },
  {
    "title": "Edge Classification",
    "topic": "Graphs",
    "sub_topic": "Articulation Pt & Bridges",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/tree-back-edge-and-cross-edges-in-dfs-of-graph/"
  },
  {
    "title": "Articulation Points",
    "topic": "Graphs",
    "sub_topic": "Articulation Pt & Bridges",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/articulation-point-1/1"
  },
  {
    "title": "Critical Connections",
    "topic": "Graphs",
    "sub_topic": "Articulation Pt & Bridges",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/critical-connections-in-a-network/"
  },
  {
    "title": "Trie Applications",
    "topic": "Trie",
    "sub_topic": "Trie or Prefix Tree",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/applications-advantages-and-disadvantages-of-trie/"
  },
  {
    "title": "Implement Trie/Prefix Tree - I",
    "topic": "Trie",
    "sub_topic": "Trie or Prefix Tree",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/implement-trie-prefix-tree/"
  },
  {
    "title": "Implement Trie/Prefix Tree - II",
    "topic": "Trie",
    "sub_topic": "Trie or Prefix Tree",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/implement-trie_1387095?utm_source=youtube&utm_medium=affiliate&utm_campaign=striver_tries_videos"
  },
  {
    "title": "Design Add Search Word",
    "topic": "Trie",
    "sub_topic": "Prefix Tree Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-add-and-search-words-data-structure/"
  },
  {
    "title": "Weighted Prefix Search",
    "topic": "Trie",
    "sub_topic": "Prefix Tree Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/map-sum-pairs/"
  },
  {
    "title": "Longest Common Prefix",
    "topic": "Trie",
    "sub_topic": "Prefix Tree Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-common-prefix/"
  },
  {
    "title": "Longest Word in Dictionary",
    "topic": "Trie",
    "sub_topic": "Prefix Tree Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/longest-word-in-dictionary/"
  },
  {
    "title": "Implement Magic Dictionary",
    "topic": "Trie",
    "sub_topic": "Prefix Tree Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/implement-magic-dictionary/"
  },
  {
    "title": "String Searching Queries",
    "topic": "Trie",
    "sub_topic": "Prefix Tree Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/stream-of-characters/"
  },
  {
    "title": "Design Search Suggestions",
    "topic": "Trie",
    "sub_topic": "Prefix Tree Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/search-suggestions-system/"
  },
  {
    "title": "Word Search - II",
    "topic": "Trie",
    "sub_topic": "Prefix Tree Problems",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/word-search-ii/"
  },
  {
    "title": "Word Boggle",
    "topic": "Trie",
    "sub_topic": "Prefix Tree Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/word-boggle4143/1"
  },
  {
    "title": "Replace Words with Prefix",
    "topic": "Trie",
    "sub_topic": "Prefix Tree Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/replace-words/"
  },
  {
    "title": "Prefix & Suffix Search",
    "topic": "Trie",
    "sub_topic": "Prefix Tree Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/prefix-and-suffix-search/"
  },
  {
    "title": "Palindrome Pairs",
    "topic": "Trie",
    "sub_topic": "Prefix Tree Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/palindrome-pairs/"
  },
  {
    "title": "Shortest Unique Prefix",
    "topic": "Trie",
    "sub_topic": "Prefix Tree Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/shortest-unique-prefix-for-every-word/1"
  },
  {
    "title": "Count Distinct Substrings",
    "topic": "Trie",
    "sub_topic": "Prefix Tree Problems",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/count-of-distinct-substrings/1"
  },
  {
    "title": "Maximum XOR Pair - I",
    "topic": "Trie",
    "sub_topic": "Binary Trie Problems",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"
  },
  {
    "title": "Maximum XOR Pair - II",
    "topic": "Trie",
    "sub_topic": "Binary Trie Problems",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/"
  },
  {
    "title": "XOR Pairs in Range",
    "topic": "Trie",
    "sub_topic": "Binary Trie Problems",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/count-pairs-with-xor-in-a-range/"
  },
  {
    "title": "Unique Rows in 01 Matrix",
    "topic": "Trie",
    "sub_topic": "Binary Trie Problems",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/unique-rows-in-boolean-matrix/1"
  },
  {
    "title": "Subarrays with XOR < K",
    "topic": "Trie",
    "sub_topic": "Binary Trie Problems",
    "difficulty": "Hard",
    "link": "https://www.spoj.com/problems/SUBXOR/"
  },
  {
    "title": "CP Handbook",
    "topic": "Advanced",
    "sub_topic": "Competitive Programming",
    "difficulty": "Hard",
    "link": "https://cses.fi/book/book.pdf"
  },
  {
    "title": "CSES Problem Set",
    "topic": "Advanced",
    "sub_topic": "Competitive Programming",
    "difficulty": "Hard",
    "link": "https://cses.fi/problemset/list/"
  },
  {
    "title": "Setting IDE Java",
    "topic": "Advanced",
    "sub_topic": "Template",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/setting-up-java-competitive-programming-environment/"
  },
  {
    "title": "Setting IDE C++",
    "topic": "Advanced",
    "sub_topic": "Template",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/setting-up-sublime-text-for-cpp-competitive-programming-environment/"
  },
  {
    "title": "Fast I/O Java",
    "topic": "Advanced",
    "sub_topic": "Template",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/fast-io-in-java-in-competitive-programming/"
  },
  {
    "title": "Fast I/O C++",
    "topic": "Advanced",
    "sub_topic": "Template",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/fast-io-for-competitive-programming/"
  },
  {
    "title": "Java Tricks",
    "topic": "Advanced",
    "sub_topic": "Template",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/java-tricks-competitive-programming-java-8/"
  },
  {
    "title": "C++ Tricks",
    "topic": "Advanced",
    "sub_topic": "Template",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/c-tricks-competitive-programming-c-11/"
  },
  {
    "title": "Search Occurence",
    "topic": "Advanced",
    "sub_topic": "String Pattern Matching",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/pattern-searching5231/1"
  },
  {
    "title": "First Occurence",
    "topic": "Advanced",
    "sub_topic": "String Pattern Matching",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"
  },
  {
    "title": "Longest Prefix Suffix",
    "topic": "Advanced",
    "sub_topic": "String Pattern Matching",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/longest-happy-prefix/"
  },
  {
    "title": "Longest Palindrome Prefix",
    "topic": "Advanced",
    "sub_topic": "String Pattern Matching",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/print-the-longest-palindromic-prefix-of-a-given-string/"
  },
  {
    "title": "KMP Algorithm",
    "topic": "Advanced",
    "sub_topic": "String Pattern Matching",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/search-pattern0205/1"
  },
  {
    "title": "Repeated String Pattern - I",
    "topic": "Advanced",
    "sub_topic": "String Pattern Matching",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/repeated-substring-pattern/"
  },
  {
    "title": "Repeated String Pattern - II",
    "topic": "Advanced",
    "sub_topic": "String Pattern Matching",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/repeated-string-match/"
  },
  {
    "title": "Shortest Palindrome",
    "topic": "Advanced",
    "sub_topic": "String Pattern Matching",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/shortest-palindrome/"
  },
  {
    "title": "Rolling Hash Function",
    "topic": "Advanced",
    "sub_topic": "String Pattern Matching",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/find-substring-with-given-hash-value/"
  },
  {
    "title": "Rabin Karp Algorithm",
    "topic": "Advanced",
    "sub_topic": "String Pattern Matching",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/31272eef104840f7430ad9fd1d43b434a4b9596b/1"
  },
  {
    "title": "Distinct Echo Substrings",
    "topic": "Advanced",
    "sub_topic": "String Pattern Matching",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/distinct-echo-substrings/"
  },
  {
    "title": "Repeated DNA Sequences",
    "topic": "Advanced",
    "sub_topic": "String Pattern Matching",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/repeated-dna-sequences/"
  },
  {
    "title": "Z Algorithm",
    "topic": "Advanced",
    "sub_topic": "String Pattern Matching",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/8dcd25918295847b4ced54055eae35a8501181c1/1"
  },
  {
    "title": "O.E.I.S Series",
    "topic": "Advanced",
    "sub_topic": "Advanced Mathematics",
    "difficulty": "Hard",
    "link": "http://oeis.org/"
  },
  {
    "title": "Euler's Totient Function",
    "topic": "Advanced",
    "sub_topic": "Advanced Number Theory",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/euler-totient-function4604/1"
  },
  {
    "title": "Pigeonhole Principle",
    "topic": "Advanced",
    "sub_topic": "Advanced Number Theory",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/discrete-mathematics-the-pigeonhole-principle/"
  },
  {
    "title": "Big Power - Large A",
    "topic": "Advanced",
    "sub_topic": "Large Exponentiation",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/find-abm3912/1"
  },
  {
    "title": "Big Power - Large A",
    "topic": "Advanced",
    "sub_topic": "Large Exponentiation",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/find-abm-large/"
  },
  {
    "title": "Big Power - Large B",
    "topic": "Advanced",
    "sub_topic": "Large Exponentiation",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/find-abm-where-b-is-very-large/"
  },
  {
    "title": "Super Power",
    "topic": "Advanced",
    "sub_topic": "Large Exponentiation",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/super-pow/"
  },
  {
    "title": "Power of Power",
    "topic": "Advanced",
    "sub_topic": "Large Exponentiation",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/find-power-power-mod-prime/"
  },
  {
    "title": "Power - Big Integers",
    "topic": "Advanced",
    "sub_topic": "Large Exponentiation",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/writing-power-function-for-large-numbers/"
  },
  {
    "title": "Modular Factorial",
    "topic": "Advanced",
    "sub_topic": "Large Exponentiation",
    "difficulty": "Hard",
    "link": "https://www.codingninjas.com/codestudio/problems/boring-factorials_1474978"
  },
  {
    "title": "Factorials Again",
    "topic": "Advanced",
    "sub_topic": "Large Exponentiation",
    "difficulty": "Hard",
    "link": "https://www.codingninjas.com/codestudio/problems/factorial-again_1756177?leftPanelTab=0"
  },
  {
    "title": "Product of Factorials",
    "topic": "Advanced",
    "sub_topic": "Large Exponentiation",
    "difficulty": "Hard",
    "link": "https://www.spoj.com/problems/FACTMUL/"
  },
  {
    "title": "Linear Recurrence Relation",
    "topic": "Advanced",
    "sub_topic": "Fibonacci Numbers",
    "difficulty": "Medium",
    "link": "https://www.hackerearth.com/practice/notes/solving-linear-recurrence-relation/"
  },
  {
    "title": "Facts About Fibonacci",
    "topic": "Advanced",
    "sub_topic": "Fibonacci Numbers",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/interesting-facts-fibonacci-numbers/"
  },
  {
    "title": "Matrix Exponentiation",
    "topic": "Advanced",
    "sub_topic": "Fibonacci Numbers",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/matrix-exponentiation/"
  },
  {
    "title": "Generalized Fibonacci",
    "topic": "Advanced",
    "sub_topic": "Fibonacci Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/generalised-fibonacci-numbers1820/1"
  },
  {
    "title": "Modified Fibonacci",
    "topic": "Advanced",
    "sub_topic": "Fibonacci Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/modified-fibonacci4449/1"
  },
  {
    "title": "Cassini Identity",
    "topic": "Advanced",
    "sub_topic": "Fibonacci Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/fibonacci-expression3939/1"
  },
  {
    "title": "Check Fibonacci",
    "topic": "Advanced",
    "sub_topic": "Fibonacci Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/check-if-the-number-is-fibonacci4654/1"
  },
  {
    "title": "GCD & Fibonacci",
    "topic": "Advanced",
    "sub_topic": "Fibonacci Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/gcd-and-fibonacci-numbers4351/1"
  },
  {
    "title": "Nth Fibonaci Last Digit",
    "topic": "Advanced",
    "sub_topic": "Fibonacci Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/the-nth-fibonnaci3150/1"
  },
  {
    "title": "Nth Digit of Fibonacci",
    "topic": "Advanced",
    "sub_topic": "Fibonacci Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/nth-digit-of-fibonacci1449/1"
  },
  {
    "title": "Nth Non Fibonacci",
    "topic": "Advanced",
    "sub_topic": "Fibonacci Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/non-fibonacci-number2258/1"
  },
  {
    "title": "Nth Even Fibonacci",
    "topic": "Advanced",
    "sub_topic": "Fibonacci Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/nth-even-fibonacci-number1119/1"
  },
  {
    "title": "Fibonacci Sum",
    "topic": "Advanced",
    "sub_topic": "Fibonacci Numbers",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/fibonacci-sum1423/1"
  },
  {
    "title": "Throwing Dice",
    "topic": "Advanced",
    "sub_topic": "Fibonacci Numbers",
    "difficulty": "Medium",
    "link": "https://cses.fi/problemset/task/1096"
  },
  {
    "title": "Dice Roll Expectation",
    "topic": "Advanced",
    "sub_topic": "Fibonacci Numbers",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/matrix-exponentiation_1790218"
  },
  {
    "title": "Recursive Sequence - I",
    "topic": "Advanced",
    "sub_topic": "Fibonacci Numbers",
    "difficulty": "Medium",
    "link": "https://www.spoj.com/problems/SEQ/"
  },
  {
    "title": "Recursive Sequence - II",
    "topic": "Advanced",
    "sub_topic": "Fibonacci Numbers",
    "difficulty": "Medium",
    "link": "https://www.spoj.com/problems/SPP/"
  },
  {
    "title": "Birthday Paradox",
    "topic": "Advanced",
    "sub_topic": "Probability Problems",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/birthday-paradox/"
  },
  {
    "title": "Mathematical Expectation",
    "topic": "Advanced",
    "sub_topic": "Probability Problems",
    "difficulty": "Hard",
    "link": "https://www.codechef.com/wiki/tutorial-expectation"
  },
  {
    "title": "Coupon Collector Problem",
    "topic": "Advanced",
    "sub_topic": "Probability Problems",
    "difficulty": "Hard",
    "link": "https://www.spoj.com/problems/FAVDICE/"
  },
  {
    "title": "Dice Probability",
    "topic": "Advanced",
    "sub_topic": "Probability Problems",
    "difficulty": "Hard",
    "link": "https://cses.fi/problemset/task/1725"
  },
  {
    "title": "Candy Lottery",
    "topic": "Advanced",
    "sub_topic": "Probability Problems",
    "difficulty": "Hard",
    "link": "https://cses.fi/problemset/task/1727"
  },
  {
    "title": "Inversion Probability",
    "topic": "Advanced",
    "sub_topic": "Probability Problems",
    "difficulty": "Hard",
    "link": "https://cses.fi/problemset/task/1728"
  },
  {
    "title": "Moving Robots",
    "topic": "Advanced",
    "sub_topic": "Probability Problems",
    "difficulty": "Hard",
    "link": "https://cses.fi/problemset/task/1726"
  },
  {
    "title": "Finders Keeper",
    "topic": "Advanced",
    "sub_topic": "Game Theory",
    "difficulty": "Hard",
    "link": "https://www.spoj.com/problems/NGM/"
  },
  {
    "title": "Game of Nim",
    "topic": "Advanced",
    "sub_topic": "Game Theory",
    "difficulty": "Hard",
    "link": "https://www.spoj.com/problems/MMMGAME/"
  },
  {
    "title": "QCJ3 Game",
    "topic": "Advanced",
    "sub_topic": "Game Theory",
    "difficulty": "Hard",
    "link": "https://www.spoj.com/problems/QCJ3/"
  },
  {
    "title": "Stone Game - VI",
    "topic": "Advanced",
    "sub_topic": "Game Theory",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/stone-game-vi/"
  },
  {
    "title": "Maximum Coins",
    "topic": "Advanced",
    "sub_topic": "Game Theory",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/maximum-number-of-coins-you-can-get/"
  },
  {
    "title": "Sum Game",
    "topic": "Advanced",
    "sub_topic": "Game Theory",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/sum-game/"
  },
  {
    "title": "Remove Same Colors",
    "topic": "Advanced",
    "sub_topic": "Game Theory",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/"
  },
  {
    "title": "CSES - Stick Game",
    "topic": "Advanced",
    "sub_topic": "Game Theory",
    "difficulty": "Hard",
    "link": "https://cses.fi/problemset/task/1729"
  },
  {
    "title": "CSES - Nim Game I",
    "topic": "Advanced",
    "sub_topic": "Game Theory",
    "difficulty": "Hard",
    "link": "https://cses.fi/problemset/task/1730"
  },
  {
    "title": "CSES - Nim Game II",
    "topic": "Advanced",
    "sub_topic": "Game Theory",
    "difficulty": "Hard",
    "link": "https://cses.fi/problemset/task/1098"
  },
  {
    "title": "CSES - Stair Game",
    "topic": "Advanced",
    "sub_topic": "Game Theory",
    "difficulty": "Hard",
    "link": "https://cses.fi/problemset/task/1099"
  },
  {
    "title": "CSES - Grundy's Game",
    "topic": "Advanced",
    "sub_topic": "Game Theory",
    "difficulty": "Hard",
    "link": "https://cses.fi/problemset/task/2207"
  },
  {
    "title": "CSES - Another Game",
    "topic": "Advanced",
    "sub_topic": "Game Theory",
    "difficulty": "Hard",
    "link": "https://cses.fi/problemset/task/2208"
  },
  {
    "title": "Jump Search",
    "topic": "Advanced",
    "sub_topic": "Advanced Searching",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/jump-search/"
  },
  {
    "title": "Step Array Search",
    "topic": "Advanced",
    "sub_topic": "Advanced Searching",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/searching-in-an-array-where-adjacent-differ-by-at-most-k/0"
  },
  {
    "title": "Exponential Search",
    "topic": "Advanced",
    "sub_topic": "Advanced Searching",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/exponential-search/"
  },
  {
    "title": "Unbounded Binary Search",
    "topic": "Advanced",
    "sub_topic": "Advanced Searching",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/find-the-point-where-a-function-becomes-negative/"
  },
  {
    "title": "Searching in Infinite Sorted",
    "topic": "Advanced",
    "sub_topic": "Advanced Searching",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/"
  },
  {
    "title": "Interpolation Search",
    "topic": "Advanced",
    "sub_topic": "Advanced Searching",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/interpolation-search/"
  },
  {
    "title": "Ternary Search",
    "topic": "Advanced",
    "sub_topic": "Advanced Searching",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/ternary-search/"
  },
  {
    "title": "XOR List",
    "topic": "Advanced",
    "sub_topic": "XOR List",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/xor-linked-list/1"
  },
  {
    "title": "XOR List - I",
    "topic": "Advanced",
    "sub_topic": "XOR List",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/xor-linked-list-a-memory-efficient-doubly-linked-list-set-1/"
  },
  {
    "title": "XOR List - II",
    "topic": "Advanced",
    "sub_topic": "XOR List",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/xor-linked-list-a-memory-efficient-doubly-linked-list-set-2/"
  },
  {
    "title": "Design Skip List",
    "topic": "Advanced",
    "sub_topic": "Skip List",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/design-skiplist/"
  },
  {
    "title": "Insertion",
    "topic": "Advanced",
    "sub_topic": "Skip List",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/skip-list-set-2-insertion/"
  },
  {
    "title": "Search & Deletion",
    "topic": "Advanced",
    "sub_topic": "Skip List",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/skip-list-set-3-searching-deletion/"
  },
  {
    "title": "1. Move to Front Method",
    "topic": "Advanced",
    "sub_topic": "Self Organizing List",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/self-organizing-list-move-front-method/?ref=rp"
  },
  {
    "title": "2. Count Method",
    "topic": "Advanced",
    "sub_topic": "Self Organizing List",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/self-organizing-list-count-method/"
  },
  {
    "title": "3. Tranpose Method",
    "topic": "Advanced",
    "sub_topic": "Self Organizing List",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/self-organizing-list-transpose-method/"
  },
  {
    "title": "Insertion",
    "topic": "Advanced",
    "sub_topic": "Unrolled Linked List",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/insertion-unrolled-linked-list/"
  },
  {
    "title": "AVL Tree Insertion",
    "topic": "Advanced",
    "sub_topic": "AVL Tree",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/avl-tree-insertion/1"
  },
  {
    "title": "AVL Tree Deletion",
    "topic": "Advanced",
    "sub_topic": "AVL Tree",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/avl-tree-deletion/1"
  },
  {
    "title": "2-3 Trees",
    "topic": "Advanced",
    "sub_topic": "M Way Tree",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/2-3-trees-search-and-insert/"
  },
  {
    "title": "2-3-4 Trees",
    "topic": "Advanced",
    "sub_topic": "M Way Tree",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/2-3-4-tree/"
  },
  {
    "title": "M Way Tree - I",
    "topic": "Advanced",
    "sub_topic": "M Way Tree",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/m-way-search-trees-set-1-searching/"
  },
  {
    "title": "M Way Tree - II",
    "topic": "Advanced",
    "sub_topic": "M Way Tree",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/m-way-search-tree-set-2-insertion-and-deletion/"
  },
  {
    "title": "Augmented DS",
    "topic": "Advanced",
    "sub_topic": "Red Black Trees",
    "difficulty": "Hard",
    "link": "https://drive.google.com/file/d/1YZk9V2siZOYvvPnyIcK2O4ZND7JBlA5s/view"
  },
  {
    "title": "Interval Trees",
    "topic": "Advanced",
    "sub_topic": "Red Black Trees",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/interval-tree/"
  },
  {
    "title": "Splay Tree - Searching",
    "topic": "Advanced",
    "sub_topic": "Splay Trees",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/splay-tree-set-1-insert/"
  },
  {
    "title": "Splay Tree - Insertion",
    "topic": "Advanced",
    "sub_topic": "Splay Trees",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/splay-tree-set-2-insert-delete/"
  },
  {
    "title": "Splay Tree - Deletion",
    "topic": "Advanced",
    "sub_topic": "Splay Trees",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/splay-tree-set-3-delete/"
  },
  {
    "title": "Range Sum Query - 1D",
    "topic": "Advanced",
    "sub_topic": "Range Sum Query",
    "difficulty": "Medium",
    "link": "https://cses.fi/problemset/task/1646"
  },
  {
    "title": "Range Sum Query - 2D",
    "topic": "Advanced",
    "sub_topic": "Range Sum Query",
    "difficulty": "Medium",
    "link": "https://cses.fi/problemset/task/1652"
  },
  {
    "title": "RSQ - Point Update 1D",
    "topic": "Advanced",
    "sub_topic": "Range Sum Query",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/range-sum-query-mutable/"
  },
  {
    "title": "RSQ - Point Update 2D",
    "topic": "Advanced",
    "sub_topic": "Range Sum Query",
    "difficulty": "Medium",
    "link": "https://www.lintcode.com/problem/817/"
  },
  {
    "title": "RSQ - Range pdates",
    "topic": "Advanced",
    "sub_topic": "Range Sum Query",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/arithmetic-progression-queries_696448"
  },
  {
    "title": "Count Even in Range",
    "topic": "Advanced",
    "sub_topic": "Range Sum Query",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/hard_5841302"
  },
  {
    "title": "Squares Sum Range Query",
    "topic": "Advanced",
    "sub_topic": "Range Sum Query",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/squares-sum_1473861"
  },
  {
    "title": "Range Minimum Query",
    "topic": "Advanced",
    "sub_topic": "Range Minimum Query",
    "difficulty": "Hard",
    "link": "https://www.codingninjas.com/codestudio/problems/fastest-horse_1467107"
  },
  {
    "title": "RMQ - Point Updates",
    "topic": "Advanced",
    "sub_topic": "Range Minimum Query",
    "difficulty": "Hard",
    "link": "https://cses.fi/problemset/task/1649"
  },
  {
    "title": "RMQ - Range Updates",
    "topic": "Advanced",
    "sub_topic": "Range Minimum Query",
    "difficulty": "Hard",
    "link": "https://www.hackerearth.com/problem/algorithm/range-update-range-max-queries/"
  },
  {
    "title": "Max Subarray Sum Queries",
    "topic": "Advanced",
    "sub_topic": "Subarray Sum Queries",
    "difficulty": "Medium",
    "link": "https://cses.fi/problemset/task/1190"
  },
  {
    "title": "Max Subarray Sum Range - I",
    "topic": "Advanced",
    "sub_topic": "Subarray Sum Queries",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/max_subarray_sum_1469227?leftPanelTab=0"
  },
  {
    "title": "Max Subarray Sum Range - II",
    "topic": "Advanced",
    "sub_topic": "Subarray Sum Queries",
    "difficulty": "Medium",
    "link": "https://www.spoj.com/problems/GSS3/"
  },
  {
    "title": "Max Pair Sum Range Queries",
    "topic": "Advanced",
    "sub_topic": "Subarray Sum Queries",
    "difficulty": "Medium",
    "link": "https://www.codingninjas.com/codestudio/problems/maximum-sum_1467395"
  },
  {
    "title": "Max Prefix Sum Queries - I",
    "topic": "Advanced",
    "sub_topic": "Subarray Sum Queries",
    "difficulty": "Medium",
    "link": "https://practice.geeksforgeeks.org/problems/maximum-prefix-sum-for-a-given-range0227/1"
  },
  {
    "title": "Max Prefix Sum Queries - II",
    "topic": "Advanced",
    "sub_topic": "Subarray Sum Queries",
    "difficulty": "Medium",
    "link": "https://cses.fi/problemset/task/2166"
  },
  {
    "title": "Inversion Count",
    "topic": "Advanced",
    "sub_topic": "Range Query Problems",
    "difficulty": "Hard",
    "link": "https://www.spoj.com/problems/INVCNT/"
  },
  {
    "title": "Range XOR Queris",
    "topic": "Advanced",
    "sub_topic": "Range Query Problems",
    "difficulty": "Hard",
    "link": "https://cses.fi/problemset/task/1650"
  },
  {
    "title": "Distinct Value Queries",
    "topic": "Advanced",
    "sub_topic": "Range Query Problems",
    "difficulty": "Hard",
    "link": "https://cses.fi/problemset/task/1734"
  },
  {
    "title": "Value in Range Queries",
    "topic": "Advanced",
    "sub_topic": "Range Query Problems",
    "difficulty": "Hard",
    "link": "https://cses.fi/problemset/task/1144"
  },
  {
    "title": "Value > K Queries - I",
    "topic": "Advanced",
    "sub_topic": "Range Query Problems",
    "difficulty": "Hard",
    "link": "https://www.spoj.com/problems/KQUERY/"
  },
  {
    "title": "Value > K Queries - II",
    "topic": "Advanced",
    "sub_topic": "Range Query Problems",
    "difficulty": "Hard",
    "link": "https://www.spoj.com/problems/KQUERYO/"
  },
  {
    "title": "Chocolate & Sweetnes",
    "topic": "Advanced",
    "sub_topic": "Range Query Problems",
    "difficulty": "Hard",
    "link": "https://www.codingninjas.com/codestudio/problems/chocolate-and-sweetness_2542078?leftPanelTab=0"
  },
  {
    "title": "AND Rounds",
    "topic": "Advanced",
    "sub_topic": "Range Query Problems",
    "difficulty": "Hard",
    "link": "https://www.spoj.com/problems/ANDROUND/"
  },
  {
    "title": "Design Tetris",
    "topic": "Advanced",
    "sub_topic": "Range Query Problems",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/falling-squares/"
  },
  {
    "title": "Frequency Range Queries",
    "topic": "Advanced",
    "sub_topic": "Range Query Problems",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/interesting-queries4742/1"
  },
  {
    "title": "Smallest Subarray GCD",
    "topic": "Advanced",
    "sub_topic": "Range Query Problems",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/smallest-sub-array4107/1"
  },
  {
    "title": "Palindrome Substring Queries",
    "topic": "Advanced",
    "sub_topic": "Range Query Problems",
    "difficulty": "Hard",
    "link": "https://www.hackerearth.com/practice/algorithms/string-algorithm/string-searching/practice-problems/algorithm/palindrome-queries-eefd5c23/"
  },
  {
    "title": "Increasing Triplet Subsets",
    "topic": "Advanced",
    "sub_topic": "Range Query Problems",
    "difficulty": "Hard",
    "link": "https://www.codingninjas.com/codestudio/problems/selecting-three-people_1214971"
  },
  {
    "title": "Binary Flip Queries",
    "topic": "Advanced",
    "sub_topic": "Range Query Problems",
    "difficulty": "Hard",
    "link": "https://www.codingninjas.com/codestudio/problems/binary-flip_1473837"
  },
  {
    "title": "Card Trick",
    "topic": "Advanced",
    "sub_topic": "Range Query Problems",
    "difficulty": "Hard",
    "link": "https://www.spoj.com/problems/CTRICK/"
  },
  {
    "title": "Niceday of Competitors",
    "topic": "Advanced",
    "sub_topic": "Range Query Problems",
    "difficulty": "Hard",
    "link": "https://www.spoj.com/problems/NICEDAY/"
  },
  {
    "title": "Computational Geometry",
    "topic": "Advanced",
    "sub_topic": "Advanced Geometry",
    "difficulty": "Hard",
    "link": "https://www.hackerearth.com/practice/notes/computational-geometry-i-1/"
  },
  {
    "title": "Line Sweep Technique",
    "topic": "Advanced",
    "sub_topic": "Advanced Geometry",
    "difficulty": "Hard",
    "link": "https://www.hackerearth.com/practice/math/geometry/line-sweep-technique/tutorial/"
  },
  {
    "title": "Convex Polygon",
    "topic": "Advanced",
    "sub_topic": "Advanced Geometry",
    "difficulty": "Hard",
    "link": "https://www.codingninjas.com/codestudio/problems/convex-polygon_1466936"
  },
  {
    "title": "Convex Hull",
    "topic": "Advanced",
    "sub_topic": "Advanced Geometry",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/convex-hull2138/1"
  },
  {
    "title": "Erect the Fence",
    "topic": "Advanced",
    "sub_topic": "Advanced Geometry",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/erect-the-fence/"
  },
  {
    "title": "Jarvis Algorithm",
    "topic": "Advanced",
    "sub_topic": "Advanced Geometry",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/convex-hull-set-1-jarviss-algorithm-or-wrapping/"
  },
  {
    "title": "Digit Dynamic Programming",
    "topic": "Advanced",
    "sub_topic": "Digit Dynamic Programming",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/digit-dp-introduction/"
  },
  {
    "title": "Nos in Range with Sum Digits",
    "topic": "Advanced",
    "sub_topic": "Digit Dynamic Programming",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/count-of-numbers-from-range-l-r-whose-sum-of-digits-is-y-set-2/"
  },
  {
    "title": "Count Numbers from Given Set",
    "topic": "Advanced",
    "sub_topic": "Digit Dynamic Programming",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/numbers-at-most-n-given-digit-set/"
  },
  {
    "title": "Digit Sum in Numbers",
    "topic": "Advanced",
    "sub_topic": "Digit Dynamic Programming",
    "difficulty": "Hard",
    "link": "https://www.spoj.com/problems/PR003004/"
  },
  {
    "title": "Count 1s in Nos <= N",
    "topic": "Advanced",
    "sub_topic": "Digit Dynamic Programming",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/number-of-digit-one/"
  },
  {
    "title": "Digit Count in Range",
    "topic": "Advanced",
    "sub_topic": "Digit Dynamic Programming",
    "difficulty": "Hard",
    "link": "https://www.codingninjas.com/codestudio/problems/digit-count-in-range_1234691"
  },
  {
    "title": "Nos with No Equal Digits",
    "topic": "Advanced",
    "sub_topic": "Digit Dynamic Programming",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/count-of-n-digit-numbers-having-no-pair-of-equal-consecutive-digits/"
  },
  {
    "title": "Nos without Consecutive 1s",
    "topic": "Advanced",
    "sub_topic": "Digit Dynamic Programming",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/"
  },
  {
    "title": "Nos with Repeated Digits",
    "topic": "Advanced",
    "sub_topic": "Digit Dynamic Programming",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/numbers-with-repeated-digits/"
  },
  {
    "title": "N Digit Stepping Nos",
    "topic": "Advanced",
    "sub_topic": "Digit Dynamic Programming",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/number-n-digit-stepping-numbers/"
  },
  {
    "title": "DP with Bitmasking",
    "topic": "Advanced",
    "sub_topic": "DP With Bitmasking",
    "difficulty": "Hard",
    "link": "https://www.hackerearth.com/practice/algorithms/dynamic-programming/bit-masking/tutorial/"
  },
  {
    "title": "DP with Bitmasking",
    "topic": "Advanced",
    "sub_topic": "DP With Bitmasking",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/bitmasking-and-dynamic-programming-set-1-count-ways-to-assign-unique-cap-to-every-person/"
  },
  {
    "title": "Travelling Salesman Problem",
    "topic": "Advanced",
    "sub_topic": "DP With Bitmasking",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/travelling-salesman-problem2732/1"
  },
  {
    "title": "TSP - Backtracking",
    "topic": "Advanced",
    "sub_topic": "DP With Bitmasking",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/travelling-salesman-problem-implementation-using-backtracking/?ref=rp"
  },
  {
    "title": "TSP - Dynamic Programming - I",
    "topic": "Advanced",
    "sub_topic": "DP With Bitmasking",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/travelling-salesman-problem-set-1/"
  },
  {
    "title": "TSP - Dynamic Programming - II",
    "topic": "Advanced",
    "sub_topic": "DP With Bitmasking",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/bitmasking-dynamic-programming-set-2-tsp/"
  },
  {
    "title": "Smallest Sufficient Team",
    "topic": "Advanced",
    "sub_topic": "DP With Bitmasking",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/smallest-sufficient-team/"
  },
  {
    "title": "Ways to wear Diff Hats",
    "topic": "Advanced",
    "sub_topic": "DP With Bitmasking",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/"
  },
  {
    "title": "Max Students in Exam",
    "topic": "Advanced",
    "sub_topic": "DP With Bitmasking",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/maximum-students-taking-exam/"
  },
  {
    "title": "Shortest Superstring",
    "topic": "Advanced",
    "sub_topic": "DP With Bitmasking",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/find-the-shortest-superstring/"
  },
  {
    "title": "Meet in the Middle",
    "topic": "Advanced",
    "sub_topic": "Meet in the Middle",
    "difficulty": "Hard",
    "link": "https://codeforces.com/blog/entry/95571"
  },
  {
    "title": "Meet in the Middle",
    "topic": "Advanced",
    "sub_topic": "Meet in the Middle",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/meet-in-the-middle/"
  },
  {
    "title": "Target Sum Subset",
    "topic": "Advanced",
    "sub_topic": "Meet in the Middle",
    "difficulty": "Hard",
    "link": "https://cses.fi/problemset/task/1628"
  },
  {
    "title": "Sum of Four Values",
    "topic": "Advanced",
    "sub_topic": "Meet in the Middle",
    "difficulty": "Hard",
    "link": "https://cses.fi/problemset/task/1642"
  },
  {
    "title": "Subset Sum in Range",
    "topic": "Advanced",
    "sub_topic": "Meet in the Middle",
    "difficulty": "Hard",
    "link": "https://www.spoj.com/problems/SUBSUMS/"
  },
  {
    "title": "Max Flow Problem",
    "topic": "Advanced",
    "sub_topic": "Network Flow Algorithm",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/find-the-maximum-flow/0"
  },
  {
    "title": "Max Flow Problem",
    "topic": "Advanced",
    "sub_topic": "Network Flow Algorithm",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/max-flow-problem-introduction/"
  },
  {
    "title": "Ford Fulkerson Algo",
    "topic": "Advanced",
    "sub_topic": "Network Flow Algorithm",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/ford-fulkerson-algorithm-for-maximum-flow-problem/"
  },
  {
    "title": "Dinic's Algorithm",
    "topic": "Advanced",
    "sub_topic": "Network Flow Algorithm",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/dinics-algorithm-maximum-flow/"
  },
  {
    "title": "Minimum Cut",
    "topic": "Advanced",
    "sub_topic": "Network Flow Algorithm",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/find-minimum-s-t-cut-in-a-flow-network/0"
  },
  {
    "title": "Minimum Cut",
    "topic": "Advanced",
    "sub_topic": "Network Flow Algorithm",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/minimum-cut-in-a-directed-graph/"
  },
  {
    "title": "Max Bipartite Matching",
    "topic": "Advanced",
    "sub_topic": "Network Flow Algorithm",
    "difficulty": "Hard",
    "link": "https://practice.geeksforgeeks.org/problems/maximum-bipartite-matching/1"
  },
  {
    "title": "Max Bipartite Matching",
    "topic": "Advanced",
    "sub_topic": "Network Flow Algorithm",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/maximum-bipartite-matching/"
  },
  {
    "title": "UML - Java T Point",
    "topic": "System Design",
    "sub_topic": "Java Advanced",
    "difficulty": "Medium",
    "link": "https://www.javatpoint.com/uml-diagrams"
  },
  {
    "title": "Real World Problems",
    "topic": "System Design",
    "sub_topic": "Java Advanced",
    "difficulty": "Medium",
    "link": "https://www.andiamogo.com/S-OOD.pdf"
  },
  {
    "title": "Print in Order",
    "topic": "System Design",
    "sub_topic": "Multithreading",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/print-in-order/"
  },
  {
    "title": "Print FooBar Alternately",
    "topic": "System Design",
    "sub_topic": "Multithreading",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/print-foobar-alternately/"
  },
  {
    "title": "Print Zero Even Odd",
    "topic": "System Design",
    "sub_topic": "Multithreading",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/print-zero-even-odd/"
  },
  {
    "title": "Building H2O",
    "topic": "System Design",
    "sub_topic": "Multithreading",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/building-h2o/"
  },
  {
    "title": "Fizz Buzz Multithreaded",
    "topic": "System Design",
    "sub_topic": "Multithreading",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/fizz-buzz-multithreaded/"
  },
  {
    "title": "The Dining Philosophers",
    "topic": "System Design",
    "sub_topic": "Multithreading",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/the-dining-philosophers/"
  },
  {
    "title": "Design Principles - Definitions",
    "topic": "System Design",
    "sub_topic": "Design Principles",
    "difficulty": "Medium",
    "link": "https://java-design-patterns.com/principles/"
  },
  {
    "title": "SOLID Principles - OODesign",
    "topic": "System Design",
    "sub_topic": "Design Principles",
    "difficulty": "Medium",
    "link": "https://www.oodesign.com/design-principles"
  },
  {
    "title": "SOLID Principles - Baeldung",
    "topic": "System Design",
    "sub_topic": "Design Principles",
    "difficulty": "Medium",
    "link": "https://www.baeldung.com/solid-principles"
  },
  {
    "title": "SOLID Principles - FreeCodeCamp",
    "topic": "System Design",
    "sub_topic": "Design Principles",
    "difficulty": "Medium",
    "link": "https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/"
  },
  {
    "title": "Design Patterns - OODesign",
    "topic": "System Design",
    "sub_topic": "Design Patterns",
    "difficulty": "Medium",
    "link": "https://www.oodesign.com/"
  },
  {
    "title": "Design Patterns - JavaTPoint",
    "topic": "System Design",
    "sub_topic": "Design Patterns",
    "difficulty": "Medium",
    "link": "https://www.javatpoint.com/design-patterns-in-java"
  },
  {
    "title": "Design Patterns - DigitalOcean",
    "topic": "System Design",
    "sub_topic": "Design Patterns",
    "difficulty": "Medium",
    "link": "https://www.digitalocean.com/community/tutorials/java-design-patterns-example-tutorial"
  },
  {
    "title": "Design Parking Lot",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-parking-system/"
  },
  {
    "title": "Design Parking Lot",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://www.educative.io/courses/grokking-the-object-oriented-design-interview/gxM3gRxmr8Z"
  },
  {
    "title": "Design Ordered Stream",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-an-ordered-stream/"
  },
  {
    "title": "Design ATM Machine",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-an-atm-machine/"
  },
  {
    "title": "Design Tiny URL",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/encode-and-decode-tinyurl/"
  },
  {
    "title": "Design Twitter",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-twitter/"
  },
  {
    "title": "Design Tweet Counter",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/tweet-counts-per-frequency/"
  },
  {
    "title": "Design Online Election",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/online-election/"
  },
  {
    "title": "Design Timeseries Database",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/time-based-key-value-store/"
  },
  {
    "title": "Design Food Rating System",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-a-food-rating-system/"
  },
  {
    "title": "Design BitSet",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-bitset/"
  },
  {
    "title": "Design Bank System",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/simple-bank-system/"
  },
  {
    "title": "Design Browser History",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-browser-history/"
  },
  {
    "title": "Design No Container System",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-a-number-container-system/"
  },
  {
    "title": "Stock Price Fluctuation",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/stock-price-fluctuation/"
  },
  {
    "title": "Seat Reservation Manager",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/seat-reservation-manager/"
  },
  {
    "title": "Authentication Manager",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-authentication-manager/"
  },
  {
    "title": "Railway Underground System",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-underground-system/"
  },
  {
    "title": "Design Book My Show",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/booking-concert-tickets-in-groups/"
  },
  {
    "title": "Design Movie Rental App",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-movie-rental-system/"
  },
  {
    "title": "Design Text Editor",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/design-a-text-editor/"
  },
  {
    "title": "Design Interval Tree",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/range-module/"
  },
  {
    "title": "Design O1 Data Structure",
    "topic": "System Design",
    "sub_topic": "Leetcode Problems",
    "difficulty": "Medium",
    "link": "https://leetcode.com/problems/all-oone-data-structure/"
  },
  {
    "title": "Design Peeking Iterator",
    "topic": "System Design",
    "sub_topic": "Design Parser",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/peeking-iterator/"
  },
  {
    "title": "Flatten Nested List Iterator",
    "topic": "System Design",
    "sub_topic": "Design Parser",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/flatten-nested-list-iterator/"
  },
  {
    "title": "Parse Nested List",
    "topic": "System Design",
    "sub_topic": "Design Parser",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/mini-parser/"
  },
  {
    "title": "RLE Iterator",
    "topic": "System Design",
    "sub_topic": "Design Parser",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/rle-iterator/"
  },
  {
    "title": "Crawler Log Folder",
    "topic": "System Design",
    "sub_topic": "Design Parser",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/crawler-log-folder/"
  },
  {
    "title": "Simplify Path",
    "topic": "System Design",
    "sub_topic": "Design Parser",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/simplify-path/"
  },
  {
    "title": "Remove Comments",
    "topic": "System Design",
    "sub_topic": "Design Parser",
    "difficulty": "Hard",
    "link": "https://leetcode.com/problems/remove-comments/"
  },
  {
    "title": "Design Tic Tac Toe",
    "topic": "System Design",
    "sub_topic": "Leetcode Locked",
    "difficulty": "Hard",
    "link": "https://www.codingninjas.com/codestudio/problems/design-tic-tac-toe_1265038"
  },
  {
    "title": "Design Hit Counter",
    "topic": "System Design",
    "sub_topic": "Leetcode Locked",
    "difficulty": "Hard",
    "link": "https://www.codingninjas.com/codestudio/problems/hit-counter_1230785"
  },
  {
    "title": "Ternary Expression Parser",
    "topic": "System Design",
    "sub_topic": "Leetcode Locked",
    "difficulty": "Hard",
    "link": "https://www.lintcode.com/problem/887/"
  },
  {
    "title": "Design Candy Crush",
    "topic": "System Design",
    "sub_topic": "Leetcode Locked",
    "difficulty": "Hard",
    "link": "https://www.lintcode.com/problem/858/"
  },
  {
    "title": "Design Snake Game",
    "topic": "System Design",
    "sub_topic": "Leetcode Locked",
    "difficulty": "Hard",
    "link": "https://leetcode.ca/2016-11-17-353-Design-Snake-Game/"
  },
  {
    "title": "Design Leaderboard",
    "topic": "System Design",
    "sub_topic": "Leetcode Locked",
    "difficulty": "Hard",
    "link": "https://leetcode.ca/2019-04-27-1244-Design-A-Leaderboard/"
  },
  {
    "title": "Design File System",
    "topic": "System Design",
    "sub_topic": "Leetcode Locked",
    "difficulty": "Hard",
    "link": "https://leetcode.ca/2019-02-08-1166-Design-File-System/"
  },
  {
    "title": "Design In Memory File System",
    "topic": "System Design",
    "sub_topic": "Leetcode Locked",
    "difficulty": "Hard",
    "link": "https://leetcode.ca/2017-07-10-588-Design-In-Memory-File-System/"
  },
  {
    "title": "Design Excel Sum Formula",
    "topic": "System Design",
    "sub_topic": "Leetcode Locked",
    "difficulty": "Hard",
    "link": "https://leetcode.ca/2017-08-22-631-Design-Excel-Sum-Formula/"
  },
  {
    "title": "Design Log Storage System",
    "topic": "System Design",
    "sub_topic": "Leetcode Locked",
    "difficulty": "Hard",
    "link": "https://leetcode.ca/2017-08-26-635-Design-Log-Storage-System/"
  },
  {
    "title": "Design Logger Rate Limiter",
    "topic": "System Design",
    "sub_topic": "Leetcode Locked",
    "difficulty": "Hard",
    "link": "https://leetcode.ca/2016-11-23-359-Logger-Rate-Limiter/"
  },
  {
    "title": "Most Recently Used Queue",
    "topic": "System Design",
    "sub_topic": "Leetcode Locked",
    "difficulty": "Hard",
    "link": "https://leetcode.ca/2021-04-08-1756-Design-Most-Recently-Used-Queue/"
  },
  {
    "title": "Design Deck of Cards",
    "topic": "System Design",
    "sub_topic": "Leetcode Locked",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/design-data-structuresclasses-objectsfor-generic-deck-cards/"
  },
  {
    "title": "Design Call Center",
    "topic": "System Design",
    "sub_topic": "Leetcode Locked",
    "difficulty": "Hard",
    "link": "https://medium.com/@mithoonkumar/design-call-centre-ood-9f5d3baff82a"
  },
  {
    "title": "Design Parking Lot",
    "topic": "System Design",
    "sub_topic": "Machine Coding Round",
    "difficulty": "Hard",
    "link": "https://workat.tech/machine-coding/practice/design-parking-lot-qm6hwq4wkhp8"
  },
  {
    "title": "Design Splitwise App",
    "topic": "System Design",
    "sub_topic": "Machine Coding Round",
    "difficulty": "Hard",
    "link": "https://workat.tech/machine-coding/practice/splitwise-problem-0kp2yneec2q2"
  },
  {
    "title": "Design Chess Validator",
    "topic": "System Design",
    "sub_topic": "Machine Coding Round",
    "difficulty": "Hard",
    "link": "https://workat.tech/machine-coding/practice/design-chess-validator-to77d8oqpx2h"
  },
  {
    "title": "Design Snake and Ladder",
    "topic": "System Design",
    "sub_topic": "Machine Coding Round",
    "difficulty": "Hard",
    "link": "https://workat.tech/machine-coding/practice/snake-and-ladder-problem-zgtac9lxwntg"
  },
  {
    "title": "Design 2048 Game",
    "topic": "System Design",
    "sub_topic": "Machine Coding Round",
    "difficulty": "Hard",
    "link": "https://workat.tech/machine-coding/practice/design-2048-game-osycd22zpn1y"
  },
  {
    "title": "Design Tic Tac Toe",
    "topic": "System Design",
    "sub_topic": "Machine Coding Round",
    "difficulty": "Hard",
    "link": "https://workat.tech/machine-coding/practice/design-tic-tac-toe-smyfi9x064ry"
  },
  {
    "title": "Design Library Management",
    "topic": "System Design",
    "sub_topic": "Machine Coding Round",
    "difficulty": "Hard",
    "link": "https://workat.tech/machine-coding/practice/design-library-management-system-jgjrv8q8b136"
  },
  {
    "title": "Design Trello",
    "topic": "System Design",
    "sub_topic": "Machine Coding Round",
    "difficulty": "Hard",
    "link": "https://workat.tech/machine-coding/practice/trello-problem-t0nwwqt61buz"
  },
  {
    "title": "Design In Memory Cache",
    "topic": "System Design",
    "sub_topic": "Machine Coding Round",
    "difficulty": "Hard",
    "link": "https://workat.tech/machine-coding/practice/design-key-value-store-6gz6cq124k65"
  },
  {
    "title": "Design Distributed Queue",
    "topic": "System Design",
    "sub_topic": "Machine Coding Round",
    "difficulty": "Hard",
    "link": "https://workat.tech/machine-coding/practice/design-distributed-queue-cuudq0sk0v14"
  },
  {
    "title": "HLD - GeeksForGeeks",
    "topic": "System Design",
    "sub_topic": "High Level Design",
    "difficulty": "Hard",
    "link": "https://www.geeksforgeeks.org/system-design-tutorial/?ref=ghm"
  },
  {
    "title": "HLD - Guided Path",
    "topic": "System Design",
    "sub_topic": "High Level Design",
    "difficulty": "Hard",
    "link": "https://www.codingninjas.com/codestudio/guided-paths/system-design"
  },
  {
    "title": "HLD - Blogs",
    "topic": "System Design",
    "sub_topic": "High Level Design",
    "difficulty": "Hard",
    "link": "https://workat.tech/system-design"
  },
  {
    "title": "Chosing Right Database - I",
    "topic": "System Design",
    "sub_topic": "Databases",
    "difficulty": "Medium",
    "link": "https://www.integrate.io/blog/which-database/"
  },
  {
    "title": "Chosing Right Database - II",
    "topic": "System Design",
    "sub_topic": "Databases",
    "difficulty": "Medium",
    "link": "http://jlamere.github.io/databases/"
  },
  {
    "title": "Database Scaling Patterns",
    "topic": "System Design",
    "sub_topic": "Databases",
    "difficulty": "Medium",
    "link": "https://www.freecodecamp.org/news/understanding-database-scaling-patterns/"
  },
  {
    "title": "Scaling Databases",
    "topic": "System Design",
    "sub_topic": "Databases",
    "difficulty": "Medium",
    "link": "https://betterprogramming.pub/scaling-sql-nosql-databases-1121b24506df"
  },
  {
    "title": "In Memory Database",
    "topic": "System Design",
    "sub_topic": "Databases",
    "difficulty": "Medium",
    "link": "https://medium.com/@denisanikin/what-an-in-memory-database-is-and-how-it-persists-data-efficiently-f43868cff4c1"
  },
  {
    "title": "Graph Database",
    "topic": "System Design",
    "sub_topic": "Databases",
    "difficulty": "Medium",
    "link": "https://neo4j.com/developer/graph-database/"
  },
  {
    "title": "Database Indexing",
    "topic": "System Design",
    "sub_topic": "Databases",
    "difficulty": "Medium",
    "link": "https://www.freecodecamp.org/news/database-indexing-at-a-glance-bb50809d48bd/"
  },
  {
    "title": "Master Slave Database",
    "topic": "System Design",
    "sub_topic": "Databases",
    "difficulty": "Medium",
    "link": "https://www.datadriveninvestor.com/2020/05/28/the-master-slave-database-concept-for-beginners/"
  },
  {
    "title": "Master-Slave vs Master-Master",
    "topic": "System Design",
    "sub_topic": "Databases",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/single-master-and-multi-master-replication-in-dbms/"
  },
  {
    "title": "ACID vs BASE Properties",
    "topic": "System Design",
    "sub_topic": "Databases",
    "difficulty": "Medium",
    "link": "https://www.geeksforgeeks.org/acid-model-vs-base-model-for-database/"
  },
  {
    "title": "Design Cache",
    "topic": "System Design",
    "sub_topic": "InterviewBit HLD",
    "difficulty": "Hard",
    "link": "https://www.interviewbit.com/problems/design-cache/"
  },
  {
    "title": "Sharding Database",
    "topic": "System Design",
    "sub_topic": "InterviewBit HLD",
    "difficulty": "Hard",
    "link": "https://www.interviewbit.com/problems/sharding-a-database/"
  },
  {
    "title": "Highly Available Database",
    "topic": "System Design",
    "sub_topic": "InterviewBit HLD",
    "difficulty": "Hard",
    "link": "https://www.interviewbit.com/problems/highly-available-database/"
  },
  {
    "title": "Highly Consistent Database",
    "topic": "System Design",
    "sub_topic": "InterviewBit HLD",
    "difficulty": "Hard",
    "link": "https://www.interviewbit.com/problems/highly-consistent-database/"
  },
  {
    "title": "Design URL Shortener",
    "topic": "System Design",
    "sub_topic": "InterviewBit HLD",
    "difficulty": "Hard",
    "link": "https://www.interviewbit.com/problems/design-url-shortener/"
  },
  {
    "title": "Design Web Search",
    "topic": "System Design",
    "sub_topic": "InterviewBit HLD",
    "difficulty": "Hard",
    "link": "https://www.interviewbit.com/problems/design-search-typeahead/"
  },
  {
    "title": "Design Whatsapp",
    "topic": "System Design",
    "sub_topic": "InterviewBit HLD",
    "difficulty": "Hard",
    "link": "https://www.interviewbit.com/problems/design-messenger/"
  },
  {
    "title": "Design Twitter",
    "topic": "System Design",
    "sub_topic": "InterviewBit HLD",
    "difficulty": "Hard",
    "link": "https://www.interviewbit.com/problems/design-twitter/"
  }
];

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
    
    console.log('\n📊 Summary:');
    console.log('  Difficulty Distribution:');
    Object.entries(difficultyCounts).forEach(([k, v]) => console.log(`    ${k}: ${v}`));
    console.log('  \n  Topics:');
    Object.entries(topicCounts)
      .sort((a, b) => b[1] - a[1])
      .forEach(([k, v]) => console.log(`    ${k}: ${v}`));
    
  } catch (error) {
    console.error('❌ Seed failed:', error.message);
  } finally {
    await mongoose.disconnect();
    console.log('\n🔌 Disconnected from MongoDB');
  }
}

seed();
