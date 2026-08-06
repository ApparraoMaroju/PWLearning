// =============================================
// Program: NUMBER METHODS
// =============================================
// Number methods for formatting and validation:
//   toString, toFixed, toPrecision
//   Number.isNaN, Number.isFinite, Number.isInteger
// =============================================

// Example 1: toString() — number to string
console.log("Example 1: toString");

let num = 255;

console.log("num.toString():", num.toString());      // "255"
console.log("num.toString(2):", num.toString(2));    // "11111111" (binary)
console.log("num.toString(16):", num.toString(16));  // "ff" (hex)

console.log("");

// Example 2: toFixed() — fixed decimal places (returns STRING)
console.log("Example 2: toFixed");

let pi = 3.14159;

console.log("pi.toFixed(2):", pi.toFixed(2));  // "3.14"
console.log("pi.toFixed(0):", pi.toFixed(0));  // "3"
console.log("pi.toFixed(4):", pi.toFixed(4));  // "3.1416"

// Note: returns a string!
let fixed = pi.toFixed(2);
console.log("typeof fixed:", typeof fixed);   // "string"

console.log("");

// Example 3: toPrecision() — significant digits
console.log("Example 3: toPrecision");

let value = 123.456;

console.log("value.toPrecision(4):", value.toPrecision(4));  // "123.5"
console.log("value.toPrecision(2):", value.toPrecision(2));  // "1.2e+2"
console.log("value.toPrecision(6):", value.toPrecision(6));  // "123.456"

console.log("");

// Example 4: Number.isNaN vs global isNaN
console.log("Example 4: Number.isNaN");

console.log("Number.isNaN(NaN):", Number.isNaN(NaN));        // true
console.log("Number.isNaN('abc'):", Number.isNaN("abc"));    // false (no coercion)
console.log("isNaN('abc'):", isNaN("abc"));                  // true (coerces first!)

console.log("");

// Example 5: Number.isInteger
console.log("Example 5: Number.isInteger");

console.log("Number.isInteger(5):", Number.isInteger(5));       // true
console.log("Number.isInteger(5.0):", Number.isInteger(5.0));   // true
console.log("Number.isInteger(5.5):", Number.isInteger(5.5));   // false
console.log("Number.isInteger('5'):", Number.isInteger("5"));   // false (no coercion)

console.log("");

// Example 6: Number.isFinite
console.log("Example 6: Number.isFinite");

console.log("Number.isFinite(42):", Number.isFinite(42));          // true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity));  // false
console.log("Number.isFinite(NaN):", Number.isFinite(NaN));        // false

console.log("");

// Example 7: Practical — formatting currency
console.log("Example 7: Currency formatting");

function formatCurrency(amount) {
    return "$" + amount.toFixed(2);
}

console.log(formatCurrency(19.5));    // "$19.50"
console.log(formatCurrency(0));       // "$0.00"
console.log(formatCurrency(1234.567)); // "$1234.57"

console.log("");

// Example 8: Practical — validating user input
console.log("Example 8: Input validation");

function validateAge(input) {
    let value = Number(input);
    if (Number.isNaN(value)) {
        return "Not a number";
    }
    if (!Number.isInteger(value)) {
        return "Age must be a whole number";
    }
    return "Valid age: " + value;
}

console.log(validateAge("25"));     // "Valid age: 25"
console.log(validateAge("25.5"));   // "Age must be a whole number"
console.log(validateAge("abc"));    // "Not a number"

// =============================================
// SUMMARY
// - toString(radix) — convert to string
// - toFixed(n) / toPrecision(n) — format (returns string)
// - Number.isNaN — true only for actual NaN
// - Number.isInteger / Number.isFinite — clean checks
// =============================================
