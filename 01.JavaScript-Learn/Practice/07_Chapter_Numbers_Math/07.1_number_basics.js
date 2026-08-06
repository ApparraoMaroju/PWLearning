// =============================================
// Program: NUMBER BASICS
// =============================================
// JavaScript has ONE number type (IEEE 754 double).
// Integers, decimals, negative, and special values
// are all "number".
// =============================================

// Example 1: Creating numbers
console.log("Example 1: Number literals");

let integer = 42;
let decimal = 3.14;
let negative = -7;
let exponential = 1.5e3;   // 1.5 × 10^3 = 1500

console.log("integer:", integer);
console.log("decimal:", decimal);
console.log("negative:", negative);
console.log("exponential (1.5e3):", exponential);

console.log("");

// Example 2: typeof
console.log("Example 2: typeof");

console.log("typeof 42:", typeof 42);         // "number"
console.log("typeof 3.14:", typeof 3.14);     // "number"
console.log("typeof NaN:", typeof NaN);       // "number"
console.log("typeof Infinity:", typeof Infinity);  // "number"

console.log("");

// Example 3: Integer vs float — same type
console.log("Example 3: Same type for all");

console.log("42 === 42.0:", 42 === 42.0);  // true (no separate integer type)

console.log("");

// Example 4: Special value — NaN (Not a Number)
console.log("Example 4: NaN");

console.log("0 / 0:", 0 / 0);               // NaN
console.log("Number('abc'):", Number("abc"));  // NaN
console.log("Math.sqrt(-1):", Math.sqrt(-1));  // NaN

// NaN is never equal to itself:
console.log("NaN === NaN:", NaN === NaN);   // false!
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));  // true (use this)

console.log("");

// Example 5: Special value — Infinity
console.log("Example 5: Infinity");

console.log("1 / 0:", 1 / 0);               // Infinity
console.log("-1 / 0:", -1 / 0);             // -Infinity
console.log("Infinity > 1e308:", Infinity > 1e308);  // true

console.log("Number.isFinite(42):", Number.isFinite(42));      // true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity));  // false

console.log("");

// Example 6: Arithmetic with numbers
console.log("Example 6: Arithmetic");

console.log("7 + 3:", 7 + 3);    // 10
console.log("7 - 3:", 7 - 3);    // 4
console.log("7 * 3:", 7 * 3);    // 21
console.log("7 / 3:", 7 / 3);    // 2.333...
console.log("7 % 3:", 7 % 3);    // 1 (remainder)
console.log("7 ** 3:", 7 ** 3);  // 343 (power)

console.log("");

// Example 7: Precision caveat
console.log("Example 7: Floating point precision");

console.log("0.1 + 0.2:", 0.1 + 0.2);   // 0.30000000000000004 (!)
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);  // false

// Fix: round the result
let sum = Math.round((0.1 + 0.2) * 100) / 100;
console.log("Rounded:", sum);  // 0.3

console.log("");

// Example 8: Number limits
console.log("Example 8: Limits");

console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);

// =============================================
// SUMMARY
// - One number type for ints and floats
// - NaN = invalid math (compare with Number.isNaN)
// - Infinity = overflow/division by zero
// - Floats can be imprecise (0.1 + 0.2) — round when needed
// =============================================
