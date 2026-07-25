// =============================================
// Program: if...else STATEMENT
// =============================================
// The if...else statement runs one block if condition is true,
// and a DIFFERENT block if condition is false.
// Syntax:
//   if (condition) {
//       // runs when true
//   } else {
//       // runs when false
//   }
// =============================================

// Example 1: Basic if...else
let age = 20;

console.log("Example 1: Adult or minor check");
console.log("Age:", age);

if (age >= 18) {
    console.log("You are an adult. ✅");
} else {
    console.log("You are a minor.");
}
// Output: "You are an adult." because 20 >= 18

console.log("");

// Example 2: With different value (triggers else)
let age2 = 15;

console.log("Example 2: When condition is false");
console.log("Age:", age2);

if (age2 >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor. ✅");
}
// Output: "You are a minor." because 15 >= 18 is false

console.log("");

// Example 3: Even or Odd
let number = 7;

console.log("Example 3: Even or Odd");
console.log("Number:", number);

if (number % 2 === 0) {     // % gives remainder — if divisible by 2, it's even
    console.log(number, "is EVEN.");
} else {
    console.log(number, "is ODD.");
}
// 7 % 2 = 1 → odd

console.log("");

// Example 4: Positive, Negative, or Zero — using if...else inside another
let num = 0;

console.log("Example 4: Positive or Negative");
console.log("Number:", num);

if (num >= 0) {
    // Nested if...else inside the true block
    if (num === 0) {
        console.log("Number is ZERO.");
    } else {
        console.log("Number is POSITIVE.");
    }
} else {
    console.log("Number is NEGATIVE.");
}

console.log("");

// Example 5: Password validation
let password = "pass123";
let correctPassword = "pass123";

console.log("Example 5: Password check");

if (password === correctPassword) {
    console.log("Access granted! Welcome. 🔓");
} else {
    console.log("Access denied! Wrong password. 🔒");
}

console.log("");

// Example 6: else with NOT operator
let isLoggedIn = false;

console.log("Example 6: Login status check");

if (!isLoggedIn) {   // !false = true
    console.log("Please log in to continue.");
} else {
    console.log("You are already logged in.");
}

console.log("");

// Example 7: Temperature advice
let temp = 35;

console.log("Example 7: Weather advice");

if (temp > 30) {
    console.log("It's hot outside — stay hydrated! 💧");
} else {
    console.log("Nice weather — enjoy your day! 🌤️");
}

console.log("");

// Example 8: Using ternary vs if...else (they do the SAME thing)
let score = 75;
let grade;

// Using if...else
if (score >= 60) {
    grade = "Pass";
} else {
    grade = "Fail";
}
console.log("Using if...else: Score", score, "→", grade);

// Using ternary (shorthand — same logic)
grade = score >= 60 ? "Pass" : "Fail";
console.log("Using ternary:  Score", score, "→", grade);
// Both produce the same result

// =============================================
// SUMMARY
// - if...else handles BOTH outcomes (true and false)
// - Only ONE block executes — never both
// - Use % 2 === 0 to check if a number is even
// - Ternary ?: is a shorthand for simple if...else
// =============================================
