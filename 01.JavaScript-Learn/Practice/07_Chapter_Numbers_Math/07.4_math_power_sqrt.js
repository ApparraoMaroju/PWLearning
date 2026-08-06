// =============================================
// Program: MATH — POWER, SQRT, ABS, SIGN
// =============================================
//   Math.pow(x, y)  — x to the power of y
//   Math.sqrt(x)    — square root
//   Math.abs(x)     — absolute value (remove sign)
//   Math.sign(x)    — sign: -1, 0, or 1
// =============================================

// Example 1: Math.pow — exponentiation
console.log("Example 1: Math.pow");

console.log("Math.pow(2, 3):", Math.pow(2, 3));    // 8
console.log("Math.pow(5, 2):", Math.pow(5, 2));    // 25
console.log("Math.pow(10, 0):", Math.pow(10, 0));  // 1 (anything^0 = 1)
console.log("Math.pow(2, -1):", Math.pow(2, -1));  // 0.5

// The ** operator is the modern equivalent:
console.log("2 ** 3:", 2 ** 3);  // 8

console.log("");

// Example 2: Math.sqrt — square root
console.log("Example 2: Math.sqrt");

console.log("Math.sqrt(16):", Math.sqrt(16));    // 4
console.log("Math.sqrt(2):", Math.sqrt(2));      // 1.414...
console.log("Math.sqrt(-1):", Math.sqrt(-1));    // NaN (no real sqrt of negative)
console.log("Math.sqrt(0):", Math.sqrt(0));      // 0

console.log("");

// Example 3: Math.abs — absolute value
console.log("Example 3: Math.abs");

console.log("Math.abs(-5):", Math.abs(-5));     // 5
console.log("Math.abs(5):", Math.abs(5));       // 5
console.log("Math.abs(-3.14):", Math.abs(-3.14));  // 3.14
console.log("Math.abs(0):", Math.abs(0));       // 0

console.log("");

// Example 4: Math.sign — returns -1, 0, or 1
console.log("Example 4: Math.sign");

console.log("Math.sign(-7):", Math.sign(-7));  // -1
console.log("Math.sign(0):", Math.sign(0));    // 0
console.log("Math.sign(7):", Math.sign(7));    // 1
console.log("Math.sign(-0.5):", Math.sign(-0.5));  // -1

console.log("");

// Example 5: Practical — distance between points
console.log("Example 5: Distance between two points");

let x1 = 0, y1 = 0;
let x2 = 3, y2 = 4;

let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
console.log("Distance (3,4):", distance);  // 5 (3-4-5 triangle)

console.log("");

// Example 6: Practical — difference without negatives
console.log("Example 6: Abs difference");

function difference(a, b) {
    return Math.abs(a - b);
}

console.log("difference(10, 3):", difference(10, 3));  // 7
console.log("difference(3, 10):", difference(3, 10));  // 7 (same)

console.log("");

// Example 7: Practical — percent change
console.log("Example 7: Percent change");

function percentChange(oldValue, newValue) {
    let change = ((newValue - oldValue) / oldValue) * 100;
    return Math.sign(change) + " " + Math.abs(change).toFixed(1) + "%";
}

console.log("100 → 130:", percentChange(100, 130));  // "1 30.0%"
console.log("100 → 80:", percentChange(100, 80));    // "-1 20.0%"

console.log("");

// Example 8: Math.cbrt — cube root (bonus)
console.log("Example 8: Math.cbrt");

console.log("Math.cbrt(27):", Math.cbrt(27));  // 3
console.log("Math.cbrt(8):", Math.cbrt(8));    // 2

// =============================================
// SUMMARY
// - pow / ** — powers; sqrt — square root
// - abs — strip the sign (distance/difference)
// - sign — tells direction (-1, 0, 1)
// - Combine pow + sqrt for distance formulas
// =============================================
