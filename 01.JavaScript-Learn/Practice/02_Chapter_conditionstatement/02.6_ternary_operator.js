// =============================================
// Program: TERNARY OPERATOR (? :)
// =============================================
// The ternary operator is a SHORTHAND for if...else.
// It returns one of two values based on a condition.
// Syntax:
//   condition ? valueIfTrue : valueIfFalse
// =============================================

// Example 1: Basic ternary — adult or minor check
let age = 20;

console.log("Example 1: Basic ternary");
console.log("Age:", age);

let status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status);  // "Adult"

// Equivalent if...else for comparison:
// if (age >= 18) {
//     status = "Adult";
// } else {
//     status = "Minor";
// }

console.log("");

// Example 2: Ternary for assignment
let isRaining = true;

console.log("Example 2: Using ternary for value assignment");

let action = isRaining ? "Take an umbrella ☂️" : "Enjoy the sun ☀️";
console.log("Action:", action);  // "Take an umbrella"

console.log("");

// Example 3: Ternary inside console.log()
let score = 85;

console.log("Example 3: Ternary inside console.log");
console.log("Score:", score, "→", score >= 60 ? "PASS ✅" : "FAIL ❌");

console.log("");

// Example 4: Chained (nested) ternary — multiple conditions
let number = 0;

console.log("Example 4: Chained ternary (multiple conditions)");

let result = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(number, "is", result);
// This reads as:
//   if (number > 0) → "Positive"
//   else if (number < 0) → "Negative"
//   else → "Zero"

// Try different values
number = -5;
result = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(number, "is", result);  // "Negative"

number = 10;
result = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(number, "is", result);  // "Positive"

console.log("");

// Example 5: Ternary for setting CSS class logic
let isActive = true;

console.log("Example 5: Toggle state");

let buttonClass = isActive ? "btn-active" : "btn-inactive";
console.log("Button class:", buttonClass);  // "btn-active"

isActive = false;
buttonClass = isActive ? "btn-active" : "btn-inactive";
console.log("Button class:", buttonClass);  // "btn-inactive"

console.log("");

// Example 6: Ternary with function call
function getDiscount(isMember) {
    return isMember ? 20 : 5;
}

console.log("Example 6: Ternary in function return");
console.log("Member discount:", getDiscount(true) + "%");   // 20%
console.log("Non-member discount:", getDiscount(false) + "%");  // 5%

console.log("");

// Example 7: Ternary for minimum/maximum
let a = 15;
let b = 8;

console.log("Example 7: Find min and max using ternary");
console.log("a:", a, "| b:", b);

let max = a > b ? a : b;   // a > b → a=15 is bigger
let min = a < b ? a : b;   // a < b → false → b=8 is smaller
console.log("Maximum:", max);
console.log("Minimum:", min);

console.log("");

// Example 8: Ternary for access control
let isLoggedIn = true;
let isAdmin = false;

console.log("Example 8: Access control");

let accessLevel = isLoggedIn
    ? (isAdmin ? "Admin Panel" : "User Dashboard")
    : "Login Page";

console.log("Access:", accessLevel);
// This is a nested ternary (harder to read — use with care)
// Reads as:
//   if (isLoggedIn) {
//       if (isAdmin) → "Admin Panel"
//       else → "User Dashboard"
//   } else {
//       "Login Page"
//   }

console.log("");

// Example 9: Ternary for even/odd check
let num = 7;

console.log("Example 9: Even or Odd");

let type = num % 2 === 0 ? "Even" : "Odd";
console.log(num, "is", type);  // "Odd"

num = 10;
console.log(num, "is", num % 2 === 0 ? "Even" : "Odd");  // "Even"

console.log("");

// Example 10: Ternary with template literal
let user = "Alice";
let points = 95;

console.log("Example 10: Ternary in template literal");

let message = `${user} ${points >= 100 ? "unlocked" : "needs"} the achievement.`;
console.log(message);  // "Alice needs the achievement."

points = 150;
message = `${user} ${points >= 100 ? "unlocked" : "needs"} the achievement.`;
console.log(message);  // "Alice unlocked the achievement."

// Example 11: Ternary for default values
let username = null;
let displayName = username ? username : "Guest";

console.log("\nExample 11: Default value");
console.log("Display name:", displayName);  // "Guest"

username = "Bob";
displayName = username ? username : "Guest";
console.log("Display name:", displayName);  // "Bob"

// =============================================
// SUMMARY
// - Ternary = inline if...else that returns a value
// - Syntax: condition ? valueIfTrue : valueIfFalse
// - Great for simple conditional assignments
// - Avoid deeply nested ternaries (hard to read)
// - Prefer if...else for complex logic
// =============================================
