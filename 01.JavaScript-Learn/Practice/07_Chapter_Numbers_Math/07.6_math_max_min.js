// =============================================
// Program: MATH.MAX & MATH.MIN
// =============================================
//   Math.max(...values)  — the largest value
//   Math.min(...values)  — the smallest value
// They accept any number of arguments.
// =============================================

// Example 1: Basic Math.max
console.log("Example 1: Math.max");

console.log("Math.max(3, 9, 5):", Math.max(3, 9, 5));  // 9
console.log("Math.max(-1, -5, -3):", Math.max(-1, -5, -3));  // -1

console.log("");

// Example 2: Basic Math.min
console.log("Example 2: Math.min");

console.log("Math.min(3, 9, 5):", Math.min(3, 9, 5));  // 3
console.log("Math.min(-1, -5, -3):", Math.min(-1, -5, -3));  // -5

console.log("");

// Example 3: Max of an array (needs spread)
console.log("Example 3: Max of array");

let scores = [88, 92, 75, 100, 84];

// Math.max(scores) → NaN! (arrays don't spread automatically)
console.log("Math.max(scores):", Math.max(scores));  // NaN

// Use the spread operator:
console.log("Math.max(...scores):", Math.max(...scores));  // 100
console.log("Math.min(...scores):", Math.min(...scores));  // 75

console.log("");

// Example 4: Empty array edge case
console.log("Example 4: Empty array");

console.log("Math.max():", Math.max());      // -Infinity
console.log("Math.min():", Math.min());      // Infinity

console.log("");

// Example 5: Max with multiple arrays combined
console.log("Example 5: Combine arrays");

let temps1 = [72, 85, 68];
let temps2 = [90, 81, 77];

let maxTemp = Math.max(...temps1, ...temps2);
console.log("Max temp:", maxTemp);  // 90

console.log("");

// Example 6: Practical — clamping values
console.log("Example 6: Clamp a value");

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

console.log("clamp(150, 0, 100):", clamp(150, 0, 100));  // 100
console.log("clamp(-50, 0, 100):", clamp(-50, 0, 100));  // 0
console.log("clamp(50, 0, 100):", clamp(50, 0, 100));    // 50

console.log("");

// Example 7: Practical — highest score with name
console.log("Example 7: Find the best player");

let players = [
    { name: "Alice", score: 88 },
    { name: "Bob", score: 95 },
    { name: "Carol", score: 91 }
];

let bestScore = Math.max(...players.map(p => p.score));
let bestPlayer = players.find(p => p.score === bestScore);

console.log("Best score:", bestScore);            // 95
console.log("Best player:", bestPlayer.name);     // "Bob"

console.log("");

// Example 8: Practical — game stats
console.log("Example 8: Game stats");

let gameTimes = [120, 85, 150, 95, 110];

console.log("Fastest time:", Math.min(...gameTimes), "sec");   // 85
console.log("Slowest time:", Math.max(...gameTimes), "sec");   // 150
console.log("Range:", Math.max(...gameTimes) - Math.min(...gameTimes));  // 65

console.log("");

// Example 9: NaN propagates
console.log("Example 9: NaN in arguments");

console.log("Math.max(3, NaN, 5):", Math.max(3, NaN, 5));  // NaN
console.log("Math.min(3, NaN, 5):", Math.min(3, NaN, 5));  // NaN

// =============================================
// SUMMARY
// - Math.max / Math.min — largest/smallest of arguments
// - Arrays need spread: Math.max(...arr)
// - Empty call: max → -Infinity, min → Infinity
// - Great for clamping and finding extremes
// =============================================
