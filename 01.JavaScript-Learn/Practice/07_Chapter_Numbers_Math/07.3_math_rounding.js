// =============================================
// Program: MATH ROUNDING
// =============================================
//   Math.round(x)  — round to nearest integer
//   Math.ceil(x)   — round UP (toward +infinity)
//   Math.floor(x)  — round DOWN (toward -infinity)
//   Math.trunc(x)  — remove decimals (toward zero)
// =============================================

// Example 1: Math.round — nearest integer
console.log("Example 1: Math.round");

console.log("Math.round(4.4):", Math.round(4.4));  // 4
console.log("Math.round(4.5):", Math.round(4.5));  // 5
console.log("Math.round(4.6):", Math.round(4.6));  // 5
console.log("Math.round(-4.5):", Math.round(-4.5)); // -4 (rounds toward +infinity)

console.log("");

// Example 2: Math.ceil — always up
console.log("Example 2: Math.ceil");

console.log("Math.ceil(4.1):", Math.ceil(4.1));    // 5
console.log("Math.ceil(4.0):", Math.ceil(4.0));    // 4
console.log("Math.ceil(-4.1):", Math.ceil(-4.1));  // -4 (toward +infinity)

console.log("");

// Example 3: Math.floor — always down
console.log("Example 3: Math.floor");

console.log("Math.floor(4.9):", Math.floor(4.9));   // 4
console.log("Math.floor(4.0):", Math.floor(4.0));   // 4
console.log("Math.floor(-4.1):", Math.floor(-4.1)); // -5 (toward -infinity)

console.log("");

// Example 4: Math.trunc — drop the decimals
console.log("Example 4: Math.trunc");

console.log("Math.trunc(4.9):", Math.trunc(4.9));   // 4
console.log("Math.trunc(4.1):", Math.trunc(4.1));   // 4
console.log("Math.trunc(-4.9):", Math.trunc(-4.9)); // -4 (toward zero, NOT -5)

console.log("");

// Example 5: ceil vs floor vs trunc on negatives
console.log("Example 5: Negative numbers comparison");

let n = -3.7;

console.log("round(-3.7):", Math.round(n));  // -4
console.log("ceil(-3.7):", Math.ceil(n));    // -3
console.log("floor(-3.7):", Math.floor(n));  // -4
console.log("trunc(-3.7):", Math.trunc(n));  // -3

console.log("");

// Example 6: Rounding to decimal places
console.log("Example 6: Round to 2 decimals");

function roundTo(value, decimals) {
    let factor = 10 ** decimals;
    return Math.round(value * factor) / factor;
}

console.log("roundTo(3.14159, 2):", roundTo(3.14159, 2));  // 3.14
console.log("roundTo(3.14159, 3):", roundTo(3.14159, 3));  // 3.142
console.log("roundTo(123.456, 1):", roundTo(123.456, 1));  // 123.5

console.log("");

// Example 7: Practical — pagination
console.log("Example 7: Pagination math");

let totalItems = 47;
let itemsPerPage = 10;

let totalPages = Math.ceil(totalItems / itemsPerPage);
console.log("47 items, 10/page →", totalPages, "pages");  // 5

// Without ceil it would truncate: 47/10 = 4.7 → 4 (wrong!)

console.log("");

// Example 8: Practical — price display
console.log("Example 8: Price calculations");

let price = 19.99;
let quantity = 3;
let taxRate = 0.08;

let subtotal = price * quantity;                       // 59.97
let tax = Math.round(subtotal * taxRate * 100) / 100;  // round to cents
let total = Math.round((subtotal + tax) * 100) / 100;

console.log("Subtotal:", subtotal);
console.log("Tax:", tax);
console.log("Total:", total);

// =============================================
// SUMMARY
// - round → nearest; ceil → up; floor → down; trunc → toward zero
// - floor/ceil differ from trunc for NEGATIVE numbers
// - Round to decimals: Math.round(x * 10^n) / 10^n
// - ceil is perfect for pagination
// =============================================
