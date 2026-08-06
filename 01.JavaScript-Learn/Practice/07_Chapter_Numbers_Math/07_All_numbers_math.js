// =============================================
// Chapter: NUMBERS & MATH in JavaScript
// =============================================
// Numbers and the Math object.
// Run this file to see every concept in action.
// =============================================

// =============================================
// 1.  NUMBER BASICS
// =============================================
console.log("=== 1. NUMBER BASICS ===");

console.log("typeof 42:", typeof 42);
console.log("0.1 + 0.2:", 0.1 + 0.2);            // precision quirk
console.log("NaN === NaN:", NaN === NaN);        // false
console.log("1 / 0:", 1 / 0);                    // Infinity


// =============================================
// 2.  NUMBER METHODS
// =============================================
console.log("\n=== 2. NUMBER METHODS ===");

console.log("(255).toString(16):", (255).toString(16));   // "ff"
console.log("(3.14159).toFixed(2):", (3.14159).toFixed(2));  // "3.14"
console.log("Number.isInteger(4.5):", Number.isInteger(4.5));  // false
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));     // true


// =============================================
// 3.  ROUNDING
// =============================================
console.log("\n=== 3. ROUNDING ===");

console.log("round(4.6):", Math.round(4.6));   // 5
console.log("ceil(4.1):", Math.ceil(4.1));     // 5
console.log("floor(4.9):", Math.floor(4.9));   // 4
console.log("trunc(-4.9):", Math.trunc(-4.9)); // -4


// =============================================
// 4.  POWER / SQRT / ABS / SIGN
// =============================================
console.log("\n=== 4. POWER / SQRT / ABS / SIGN ===");

console.log("pow(2, 10):", Math.pow(2, 10));    // 1024
console.log("sqrt(144):", Math.sqrt(144));      // 12
console.log("abs(-42):", Math.abs(-42));        // 42
console.log("sign(-7):", Math.sign(-7));        // -1


// =============================================
// 5.  RANDOM
// =============================================
console.log("\n=== 5. RANDOM ===");

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random 1-6:", randomInt(1, 6), "|", randomInt(1, 6));
console.log("Random 1-6:", randomInt(1, 6), "|", randomInt(1, 6));


// =============================================
// 6.  MAX / MIN
// =============================================
console.log("\n=== 6. MAX / MIN ===");

let nums = [42, 17, 93, 55];

console.log("max:", Math.max(...nums));  // 93
console.log("min:", Math.min(...nums));  // 17


// =============================================
// 7.  CONSTANTS & TRIG
// =============================================
console.log("\n=== 7. CONSTANTS & TRIG ===");

console.log("PI:", Math.PI.toFixed(4));
console.log("E:", Math.E.toFixed(4));
console.log("sin(90°):", Math.sin(Math.PI / 2).toFixed(1));  // 1.0
console.log("log2(8):", Math.log2(8));                       // 3


// =============================================
// QUICK REFERENCE CHEAT SHEET
// =============================================
//
// Numbers: typeof, NaN, Infinity, 0.1+0.2 precision
// Methods: toString(radix), toFixed(n), toPrecision(n)
// Checks:  Number.isNaN, Number.isInteger, Number.isFinite
// Rounding: Math.round / ceil / floor / trunc
// Power:   Math.pow(x,y)  (or x ** y), Math.sqrt(x), Math.cbrt(x)
// Abs:     Math.abs(x)
// Sign:    Math.sign(x)  → -1, 0, 1
// Random:  Math.random()  → 0 ≤ x < 1
//          Math.floor(Math.random() * (max-min+1)) + min
// Extrema: Math.max(...arr), Math.min(...arr)
// Trig:    Math.sin / cos / tan (radians)
// Logs:    Math.log / log2 / log10 / exp
// Consts:  Math.PI, Math.E
// =============================================
