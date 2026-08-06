// =============================================
// Program: STRING ↔ NUMBER CONVERSION
// =============================================
// Converting between strings and numbers is common
// when working with user input and formatted output.
// =============================================

// Example 1: String → Number with Number()
console.log("Example 1: Number()");

console.log('Number("42"):', Number("42"));        // 42
console.log('Number("3.14"):', Number("3.14"));    // 3.14
console.log('Number(""):', Number(""));            // 0
console.log('Number("abc"):', Number("abc"));      // NaN
console.log('Number("12px"):', Number("12px"));    // NaN (must be purely numeric)

console.log("");

// Example 2: parseInt() — parse whole numbers
console.log("Example 2: parseInt");

console.log('parseInt("42"):', parseInt("42"));          // 42
console.log('parseInt("42.9"):', parseInt("42.9"));      // 42 (drops decimals)
console.log('parseInt("12px"):', parseInt("12px"));      // 12 (stops at non-digit)
console.log('parseInt("  7 items"):', parseInt("  7 items"));  // 7 (ignores leading spaces)
console.log('parseInt("abc"):', parseInt("abc"));        // NaN

// parseInt with radix (base):
console.log('parseInt("ff", 16):', parseInt("ff", 16));  // 255 (hexadecimal)
console.log('parseInt("101", 2):', parseInt("101", 2));  // 5 (binary)

console.log("");

// Example 3: parseFloat() — parse decimal numbers
console.log("Example 3: parseFloat");

console.log('parseFloat("3.14"):', parseFloat("3.14"));    // 3.14
console.log('parseFloat("2.5 dollars"):', parseFloat("2.5 dollars"));  // 2.5
console.log('parseFloat("1,000"):', parseFloat("1,000"));  // 1 (stops at comma)

console.log("");

// Example 4: Number → String with toString()
console.log("Example 4: toString");

let num = 42;

console.log("num.toString():", num.toString());      // "42"
console.log("num.toString(2):", num.toString(2));    // "101010" (binary)
console.log("num.toString(16):", num.toString(16));  // "2a" (hex)

console.log("");

// Example 5: String() and concatenation shortcuts
console.log("Example 5: String() and + ''");

console.log('String(42):', String(42));        // "42"
console.log("42 + '':", 42 + "");              // "42" (implicit conversion)
console.log('String(true):', String(true));    // "true"

console.log("");

// Example 6: toFixed() — format decimals (returns a string!)
console.log("Example 6: toFixed");

let price = 19.995;

console.log("price.toFixed(2):", price.toFixed(2));  // "20.00" (string)
console.log("price.toFixed(1):", price.toFixed(1));  // "20.0"
console.log("price.toFixed(0):", price.toFixed(0));  // "20"

// Combine with Number() to get a number back:
let formatted = Number(price.toFixed(2));
console.log("Number(toFixed):", formatted, "| typeof:", typeof formatted);

console.log("");

// Example 7: Practical — reading numbers from input
console.log("Example 7: Practical input handling");

let ageInput = "25";          // pretend this came from a form
let yearsToAdd = "5";

// ❌ Wrong — string concatenation:
console.log("Wrong:", ageInput + yearsToAdd);  // "255"

// ✅ Correct — convert first:
let total = Number(ageInput) + Number(yearsToAdd);
console.log("Correct:", total);  // 30

console.log("");

// Example 8: Validating numeric input
console.log("Example 8: Validating input");

function isNumeric(value) {
    return !isNaN(Number(value));
}

console.log('isNumeric("123"):', isNumeric("123"));      // true
console.log('isNumeric("12.5"):', isNumeric("12.5"));    // true
console.log('isNumeric("abc"):', isNumeric("abc"));      // false
console.log('isNumeric(""):', isNumeric(""));            // true ("" → 0, careful!)

// =============================================
// SUMMARY
// - Number(str) — full conversion ("" → 0, invalid → NaN)
// - parseInt / parseFloat — lenient parsing (12px → 12)
// - num.toString(radix) / String(num) — number → string
// - toFixed(n) — decimal formatting (returns string)
// - Convert BEFORE arithmetic to avoid "25"+"5" = "255"
// =============================================
