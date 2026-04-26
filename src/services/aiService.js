import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
let genAI = null;
if (API_KEY) {
  genAI = new GoogleGenerativeAI(API_KEY);
}

const COACH_KNOWLEDGE_BASE = {
  // 1: Two Sum
  1: {
    mentalModel: "Try using the Two-Pointer technique (if sorted) or a Hash Map to reduce complexity from O(n²) to O(n).",
    pseudocode: `Step-by-Step Logic:\n1. Create an empty dictionary to store numbers and their indices.\n2. Loop through the array.\n3. For each number, calculate its 'complement' (target - number).\n4. If the complement is already in the dictionary, return both indices.\n5. Otherwise, add the current number and its index to the dictionary.`,
    solutionCode: `var twoSum = function(nums, target) {\n    const map = {};\n    for (let i = 0; i < nums.length; i++) {\n        let complement = target - nums[i];\n        if (map[complement] !== undefined) {\n            return [map[complement], i];\n        }\n        map[nums[i]] = i;\n    }\n    return [];\n};`
  },
  // 2: Best Time to Buy and Sell Stock
  2: {
    mentalModel: "You are looking for the maximum difference between two numbers where the smaller number comes before the larger one. Track the minimum price seen so far in a single pass.",
    pseudocode: `Step-by-Step Logic:\n1. Initialize 'min_price' to infinity and 'max_profit' to 0.\n2. Iterate through each price.\n3. If the current price is less than 'min_price', update 'min_price'.\n4. Calculate profit if you sold today (current price - min_price).\n5. If this profit is greater than 'max_profit', update 'max_profit'.`,
    solutionCode: `var maxProfit = function(prices) {\n    let minPrice = Infinity;\n    let maxProfit = 0;\n    for(let i=0; i<prices.length; i++) {\n        if(prices[i] < minPrice) minPrice = prices[i];\n        else if(prices[i] - minPrice > maxProfit) maxProfit = prices[i] - minPrice;\n    }\n    return maxProfit;\n};`
  },
  // Generic fallback for all other problems
  default: {
    mentalModel: "Always start by identifying the core bottleneck. Does the problem require sorting, a Hash Map for fast lookups, or a specific traversal technique like BFS/DFS?",
    pseudocode: `Socratic Steps:\n1. Write down an example input and expected output on paper.\n2. Ask yourself: what data structure naturally fits this data? (e.g., Arrays, HashMaps, Trees)\n3. Draft the logic in plain English before writing syntax.\n4. Handle edge cases (like empty inputs) first.`,
    solutionCode: `// Example Template\nfunction solution(nums) {\n    // Implement optimal approach here\n    // 1. Initialize data structures\n    // 2. Iterate and process\n    // 3. Return target value\n    return [];\n}`
  }
};

export const analyzeCode = async (code, language, problem, isNudge = false, currentHintIndex = 0, chatHistory = [], explicitUserMsg = "") => {
  // Simulate AI network delay if running strictly locally
  if (!API_KEY) {
     await new Promise(r => setTimeout(r, isNudge ? 800 : 1200));
  }

  // ==========================================
  // MODULE 1: Chatbot Queries & Logic Approaching
  // ==========================================
  if (isNudge) {
    // If the explicit message is provided (Chatbot call), use it. Otherwise, fallback to the old signature (where message was passed in 'code')
    const userMessage = explicitUserMsg ? explicitUserMsg.trim() : (typeof code === 'string' ? code.trim() : "");
    const lowerMessage = userMessage.toLowerCase();

    // -- TRUE GENERATIVE AI INTEGRATION --
    if (API_KEY) {
      try {
        const systemInstruction = `
You are "AI Mentor", a world-class Senior DSA Coach built into the ApexCode platform.
The student's name is "Prince". Always address him by name.

## YOUR RESPONSE RULES:
1. FORMAT: Always use clean Markdown. Use **bold**, \`inline code\`, and fenced code blocks with the correct language tag (e.g. \`\`\`python).
2. STRUCTURE every response using these sections as needed:
   - **🧠 Approach** — Explain the core intuition, mental model, and which data structure/algorithm pattern applies (e.g., Sliding Window, Two Pointers, BFS, DP, etc.)
   - **📝 Pseudocode** — Provide clear, step-by-step pseudocode that Prince can translate into any language.
   - **🐛 Bug Fix** — If Prince's code has errors, point out the EXACT line and explain what's wrong and how to fix it. Show the corrected snippet.
   - **✅ Solution** — When Prince explicitly asks for "the code", "solution", "answer", or "give me the code", provide a COMPLETE, OPTIMAL, BUG-FREE, RUNNABLE solution in ${language}. The code must compile and produce correct output. Do NOT provide incomplete templates or pseudocode as "solution".
3. TIME & SPACE COMPLEXITY: Always mention the Big-O time and space complexity of your suggested approach.
4. TONE: Supportive, encouraging, professional. You are a mentor who wants Prince to learn AND succeed.
5. EDGE CASES: Always mention important edge cases (empty input, single element, duplicates, negative numbers, etc.)

## CONTEXT FOR THIS SESSION:
- Problem Title: ${problem?.title || 'Unknown'}
- Problem Description: ${problem?.description || 'No description provided'}
- Target Language: ${language}
- Prince's current code is provided below each message for reference.

## IMPORTANT:
- When Prince asks "how to approach" or "hint" → Give Approach + Pseudocode (no full code).
- When Prince asks "fix my code" or "what's wrong" or "error" → Analyze his code, find the bug, show the fix.
- When Prince asks for "code", "solution", "answer" → Give the COMPLETE working solution. No templates. No placeholders. Real, runnable code.
- Keep responses concise but complete. No unnecessary filler.
`;

        // Smart model fallback chain — tries each model until one works
        const MODEL_CANDIDATES = ["gemini-2.0-flash", "gemini-pro", "gemini-1.0-pro"];

        // Convert React UI messages into Gemini Chat Format (Must start with User!)
        const formattedHistory = [];
        let hasSeenUser = false;
        
        if (chatHistory && chatHistory.length > 0) {
            chatHistory.forEach(m => {
                if (m.role === 'user') {
                    hasSeenUser = true;
                }
                if (hasSeenUser && (m.role === 'user' || m.role === 'assistant')) {
                    const mappedRole = m.role === 'user' ? 'user' : 'model';
                    if (formattedHistory.length === 0 || formattedHistory[formattedHistory.length - 1].role !== mappedRole) {
                        formattedHistory.push({
                            role: mappedRole,
                            parts: [{ text: m.text || "..." }]
                        });
                    } else {
                        formattedHistory[formattedHistory.length - 1].parts[0].text += `\n\n${m.text}`;
                    }
                }
            });
        }

        const prompt = `Prince's Active Code in Editor:\n\`\`\`${language}\n${code || '// No code written yet'}\n\`\`\`\n\nPrince's Message: "${userMessage}"`;

        let lastError = null;
        for (const modelName of MODEL_CANDIDATES) {
            try {
                console.log(`[AI Mentor] Trying model: ${modelName}`);
                const model = genAI.getGenerativeModel({ model: modelName, systemInstruction });
                const chat = model.startChat({ history: formattedHistory });
                const result = await chat.sendMessage(prompt);
                console.log(`[AI Mentor] Success with model: ${modelName}`);
                return { hints: [result.response.text()] };
            } catch (modelErr) {
                console.warn(`[AI Mentor] Model ${modelName} failed:`, modelErr.message);
                lastError = modelErr;
                // If it's a 404 (model not found), try next model
                if (modelErr.message?.includes("404") || modelErr.message?.includes("not found")) {
                    continue;
                }
                // If it's any other error (429 rate limit, 403 auth, etc.), stop trying
                throw modelErr;
            }
        }
        // If all models failed with 404, throw the last error
        throw lastError;
      } catch (e) {
        console.warn("Gemini API Error, falling back to local coach.", e);
        if (e.message?.includes("API key not valid") || e.status === 400 || e.status === 403) {
           return { hints: [`**❌ API Key Error**\n\nPrince, your Gemini API key seems to be invalid or restricted. Please verify the key in your \`.env\` file.\n\nError: \`${e.message}\``] };
        }
        // For 429 and all other errors, fall through to local knowledge base below
      }
    }

    // -- LOCAL FALLBACK (Used when: no API key, API rate-limited, or API offline) --
    const knowledge = COACH_KNOWLEDGE_BASE[problem?.id] || COACH_KNOWLEDGE_BASE.default;

    // Explicit code requests
    if (lowerMessage.includes("code") || lowerMessage.includes("answer") || lowerMessage.includes("solution")) {
       return { hints: [`**✅ Solution** *(Offline Coach)*\n\nAlright Prince, here is the reference solution for **${problem?.title || 'this problem'}**. Study the logic carefully:\n\n\`\`\`javascript\n${knowledge.solutionCode}\n\`\`\`\n\n**🧠 Mental Model:** ${knowledge.mentalModel}`] };
    }
    
    // Core approach requests
    if (lowerMessage.includes("how to approach") || lowerMessage.includes("hint") || lowerMessage.includes("stuck") || lowerMessage.includes("help")) {
      if (currentHintIndex === 0) {
        return { hints: [`**🧠 Approach** *(Offline Coach)*\n\n${knowledge.mentalModel}\n\n**📝 Next Step:** Think about which data structure fits this pattern. Want the step-by-step pseudocode? Just ask!`] };
      } else {
        return { hints: [`**📝 Pseudocode** *(Offline Coach)*\n\n${knowledge.pseudocode}\n\nTry translating this into **${language}** code. You've got this, Prince!`] };
      }
    }

    // Generic fallback for any question
    return { hints: [`**🧠 Offline Coach**\n\nHey Prince! I'm running in offline mode right now. Here's what I can help with for **${problem?.title || 'this problem'}**:\n\n**Mental Model:** ${knowledge.mentalModel}\n\n---\n\nTry asking me:\n- *"How to approach?"* → I'll give you the strategy\n- *"Give me the pseudocode"* → Step-by-step logic\n- *"Show me the code"* → Reference solution\n\n*(The AI engine will reconnect automatically on your next message!)*`] };
  }

  // ==========================================
  // MODULE 2 & 3: Submit Analysis (Debugger & Optimization)
  // ==========================================
  const result = { isSubmit: true, hints: [], errors: [], inefficiencies: [], complexity: null, mentorMessage: null };
  
  if (!code || code.trim() === '') { 
    result.mentorMessage = "Prince, your editor is completely empty. You have to write some code before I can coach you!";
    result.errors.push({ line: 1, message: "No code submitted." }); 
    return result; 
  }

  const lines = code.split('\n');
  const loopLines = [];
  lines.forEach((line, i) => { if (line.match(/\b(for|while)\b/)) loopLines.push(i + 1); });

  // Evaluate Big-O Efficiency
  if (loopLines.length > 1) {
    result.inefficiencies.push(`Nested loops detected at lines ${loopLines.join(', ')}.`);
    result.complexity = { time: "O(n²)", space: "O(1)", explanation: "Nested iteration over the input causes quadratic growth." };
  } else if (loopLines.length === 1) {
    result.complexity = { time: "O(n)", space: "O(n)", explanation: "Single-pass linear scan. Efficient approach." };
  } else {
    result.complexity = { time: "O(1)", space: "O(1)", explanation: "No iteration detected. Make sure you're processing the data." };
  }

  const hasLogic = lines.some(l => {
    const t = l.trim();
    return t.length > 0 && !t.startsWith('#') && !t.startsWith('//') && t !== 'pass' && !t.startsWith('def ') && !t.startsWith('class ') && !t.startsWith('public') && !t.startsWith('int ') && !t.startsWith('var ') && !t.startsWith('function') && t !== '{' && t !== '}' && t !== '};';
  });
  if (!hasLogic) {
    result.mentorMessage = "Prince, your function structure is there, but there is no actual logic written inside. Try implementing the first step of the pseudocode!";
    result.errors.push({ line: 1, message: "Function body is empty." });
    return result;
  }

  return result;
};
