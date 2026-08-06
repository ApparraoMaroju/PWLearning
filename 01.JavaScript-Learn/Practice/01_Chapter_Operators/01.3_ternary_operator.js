// =============================================
// Program: TERNARY OPERATOR (? :)
// =============================================
// The ternary operator is a SHORTHAND for if...else.
// It is an expression — it RETURNS a value.
//
//   condition ? valueIfTrue : valueIfFalse
// =============================================

// Example 1: Basic ternary — adult or minor
console.log("Example 1: Basic ternary");

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";

console.log("Age:", age, "→", status);  // "Adult"

// Equivalent if...else:
// let status;
// if (age >= 18) {
//     status = "Adult";
// } else {
//     status = "Minor";
// }

console.log("");

// Example 2: Ternary for assignment
console.log("Example 2: Choosing a value");

let isRaining = true;
let action = isRaining ? "Take an umbrella ☂️" : "Enjoy the sun ☀️";
console.log("Action:", action);  // "Take an umbrella"

console.log("");

// Example 3: Ternary directly inside console.log()
console.log("Example 3: Ternary in console.log");

let score = 85;
console.log("Score:", score, "→", score >= 60 ? "PASS ✅" : "FAIL ❌");

score = 40;
console.log("Score:", score, "→", score >= 60 ? "PASS ✅" : "FAIL ❌");

console.log("");

// Example 4: Chained (nested) ternary — multiple conditions
console.log("Example 4: Chained ternary");

let number = 0;
let result = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(number, "is", result);  // "Zero"

// Reads as:
//   if (number > 0) → "Positive"
//   else if (number < 0) → "Negative"
//   else → "Zero"

console.log("");

// Example 5: Ternary with function return
console.log("Example 5: Ternary in a function");

function getDiscount(isMember) {
    return isMember ? 20 : 5;
}

console.log("Member discount:", getDiscount(true) + "%");    // 20%
console.log("Guest discount:", getDiscount(false) + "%");    // 5%

console.log("");

// Example 6: Ternary for min/max
console.log("Example 6: Find max/min");

let a = 15;
let b = 8;

let max = a > b ? a : b;
let min = a < b ? a : b;

console.log("a:", a, "b:", b);
console.log("Maximum:", max);  // 15
console.log("Minimum:", min);  // 8

console.log("");

// Example 7: Even or odd
console.log("Example 7: Even/odd check");

let num = 7;
console.log(num, "is", num % 2 === 0 ? "Even" : "Odd");  // "Odd"

num = 10;
console.log(num, "is", num % 2 === 0 ? "Even" : "Odd");  // "Even"

console.log("");

// Example 8: Nested ternary for access control
console.log("Example 8: Nested ternary (use with care)");

let isLoggedIn = true;
let isAdmin = false;

let access = isLoggedIn
    ? (isAdmin ? "Admin Panel" : "User Dashboard")
    : "Login Page";

console.log("Access:", access);  // "User Dashboard"

console.log("");

// Example 9: Ternary in a template literal
console.log("Example 9: Ternary inside a template string");

let player = "Alice";
let points = 95;

let message = `${player} ${points >= 100 ? "unlocked" : "needs"} the achievement.`;
console.log(message);  // "Alice needs the achievement."

points = 150;
console.log(`${player} ${points >= 100 ? "unlocked" : "needs"} the achievement.`);  // "unlocked"

console.log("");

// Example 10: Ternary for default values
console.log("Example 10: Default value pattern");

let username = null;
let displayName = username ? username : "Guest";
console.log("Display name:", displayName);  // "Guest"

username = "Bob";
displayName = username ? username : "Guest";
console.log("Display name:", displayName);  // "Bob"

// =============================================
// SUMMARY
// - Ternary = inline if...else that returns a value
// - Syntax: condition ? valueIfTrue : valueIfFalse
// - Great for simple conditional assignments
// - Chained ternaries are hard to read — prefer if...else for complex logic
// =============================================
