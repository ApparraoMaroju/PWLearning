// =============================================
// Program: if STATEMENT
// =============================================
// The if statement runs a block of code ONLY if the condition is true.
// Syntax:
//   if (condition) {
//       // code to run if condition is true
//   }
// =============================================

// Example 1: Basic if
let temperature = 30;

console.log("Example 1: Temperature check");
console.log("Temperature is:", temperature);

if (temperature > 25) {
    console.log("It's a hot day! 🔥");
}
// Output: "It's a hot day!" because 30 > 25 is true

console.log("");  // blank line for readability

// Example 2: When condition is false — nothing happens
let temperature2 = 20;

console.log("Example 2: When condition is false");
console.log("Temperature is:", temperature2);

if (temperature2 > 25) {
    // This block is SKIPPED because 20 > 25 is false
    console.log("This will NOT print.");
}
console.log("(Notice: nothing printed between these lines — the if block was skipped)");

console.log("");

// Example 3: Using comparison operators in conditions
let age = 18;

console.log("Example 3: Age check");
if (age >= 18) {
    console.log("You are", age, "— eligible to vote.");
}

if (age === 18) {
    console.log("You just turned 18 — welcome!");
}

console.log("");

// Example 4: Multiple statements inside if
let isWeekend = true;

console.log("Example 4: Multiple statements in one if block");

if (isWeekend) {
    console.log("It's the weekend! 🎉");
    console.log("Time to relax.");
    console.log("No work today.");
}
// All three lines inside the block run because isWeekend is true

console.log("");

// Example 5: if with logical operators (&&, ||, !)
let hasAccount = true;
let cartTotal = 150;

console.log("Example 5: Combined conditions with &&");

if (hasAccount && cartTotal >= 100) {
    console.log("You qualify for FREE shipping! 🚚");
}

let isRaining = false;
let hasUmbrella = true;

if (isRaining || hasUmbrella) {
    console.log("You're prepared for the weather.");
}

// Example 6: Checking multiple ranges
let score = 85;

console.log("\nExample 6: Score range (using && for range checks)");

if (score >= 80 && score <= 100) {
    console.log("Score:", score, "— Excellent!");
}

if (score >= 60 && score < 80) {
    console.log("Score:", score, "— Good.");
}

// Example 7: Using variables for conditions
let isLoggedIn = true;
let isAdmin = false;

console.log("\nExample 7: Access control check");

if (isLoggedIn) {
    console.log("User is logged in.");
}

if (isLoggedIn && isAdmin) {
    console.log("User is an admin.");
}
// This doesn't print because isAdmin is false

console.log("");

// Example 8: if with NOT operator
let isDarkMode = false;

console.log("Example 8: Using ! (NOT) operator");

if (!isDarkMode) {
    console.log("Dark mode is OFF — switching it on.");
}

// =============================================
// SUMMARY
// - if runs code only when condition is true
// - Use comparison operators: > < >= <= === !==
// - Use logical operators: && || !
// - Braces {} define the block of code to run
// =============================================
