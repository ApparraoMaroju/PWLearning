// =============================================
// Program: COMPARISON OPERATORS — RELATIONAL (>, <, >=, <=)
// =============================================
// Relational operators compare two values by magnitude/order
// and return a boolean (true or false).
//
//   >   greater than
//   <   less than
//   >=  greater than or equal to
//   <=  less than or equal to
// =============================================

// Example 1: Basic relational comparisons
console.log("Example 1: Basic comparisons");

console.log("10 > 5    →", 10 > 5);        // true
console.log("10 < 5    →", 10 < 5);        // false
console.log("10 >= 10  →", 10 >= 10);      // true  (10 is equal, so >= holds)
console.log("10 <= 9   →", 10 <= 9);       // false
console.log("5 <= 5    →", 5 <= 5);        // true

console.log("");

// Example 2: Relational operators with variables
console.log("Example 2: Comparing variables");

let maxSpeed = 120;
let currentSpeed = 100;

console.log("maxSpeed =", maxSpeed, "| currentSpeed =", currentSpeed);
console.log("currentSpeed < maxSpeed →", currentSpeed < maxSpeed);  // true
console.log("currentSpeed > maxSpeed →", currentSpeed > maxSpeed);  // false

if (currentSpeed <= maxSpeed) {
    console.log("You are within the speed limit.");
}

console.log("");

// Example 3: Comparing strings (alphabetical order)
console.log("Example 3: String comparisons");

console.log("'apple' < 'banana' →", "apple" < "banana");   // true (a comes before b)
console.log("'apple' > 'Apple'  →", "apple" > "Apple");    // true (lowercase a has higher code)
console.log("'Zebra' < 'apple'  →", "Zebra" < "apple");    // true (uppercase Z < lowercase a)
console.log("'b' > 'a'          →", "b" > "a");            // true

console.log("");

// Example 4: Relational operators with expressions
console.log("Example 4: Comparing expressions");

let a = 10;
let b = 5;

console.log("a + b > 10    →", a + b > 10);       // true  (15 > 10)
console.log("a * 2 >= b * 4 →", a * 2 >= b * 4);  // true  (20 >= 20)
console.log("a - b <= 5    →", a - b <= 5);       // true  (5 <= 5)

console.log("");

// Example 5: Using relational operators in if...else
console.log("Example 5: Grade check with if...else");

let score = 75;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");  // this runs (75 >= 70)
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

console.log("");

// Example 6: Relational operators in loop conditions
console.log("Example 6: While loop condition");

let i = 0;

while (i < 3) {
    console.log("i =", i);
    i++;
}
// The loop runs while (i < 3) is true.

console.log("");

// Example 7: Range checks with && and ||
console.log("Example 7: Checking ranges");

let age = 25;

// Between 18 and 60 (inclusive) → "working age"
if (age >= 18 && age <= 60) {
    console.log("Age", age, "is a working age.");
}

// Outside 13-19 → "not a teenager"
if (age < 13 || age > 19) {
    console.log("Age", age, "is NOT a teenager.");
}

console.log("");

// Example 8: Comparing different types (numbers vs strings)
console.log("Example 8: Number vs string comparison");

console.log("10 > '5'    →", 10 > "5");        // true  ('5' converted to 5)
console.log("'10' < 9    →", "10" < 9);        // false ('10' converted to 10)
console.log("'abc' > 5   →", "abc" > 5);       // false ('abc' → NaN, NaN comparisons are false)

console.log("");

// Example 9: Chained comparison — a common pitfall
console.log("Example 9: Chained comparison pitfall");

console.log("3 < 5 < 2    →", 3 < 5 < 2);
// Evaluated left to right:
//   3 < 5  → true
//   true < 2 → 1 < 2 → true
// Result is true — NOT what a math person expects!

// Correct way:
let x = 3, y = 5, z = 2;
console.log("Correct: (x < y) && (y < z) →", x < y && y < z);  // false

// =============================================
// SUMMARY
// - Relational operators: > < >= <=
// - Return true or false
// - Strings compare by Unicode/alphabetical order
// - Use && / || to build range checks
// - Never chain (3 < x < 5) — use (x > 3 && x < 5)
// =============================================
