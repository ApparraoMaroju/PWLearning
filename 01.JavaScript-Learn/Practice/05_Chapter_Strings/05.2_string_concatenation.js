// =============================================
// Program: STRING CONCATENATION
// =============================================
// Concatenation joins strings together.
//   "Hello" + " " + "World"  →  "Hello World"
// Template literals are the modern, cleaner way.
// =============================================

// Example 1: Using the + operator
console.log("Example 1: + operator");

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log("fullName:", fullName);  // "John Doe"

console.log("");

// Example 2: += appends to a string
console.log("Example 2: += operator");

let message = "Hello";
message += " World";   // same as: message = message + " World"
console.log("message:", message);  // "Hello World"

console.log("");

// Example 3: Concatenating numbers with strings
console.log("Example 3: Numbers + strings");

console.log("Age: " + 25);         // "Age: 25"
console.log("5 + '5':", 5 + "5");  // "55" (number becomes string)
console.log("'5' + 5:", "5" + 5);  // "55"

// Careful — + with two numbers ADDS:
console.log("1 + 2:", 1 + 2);      // 3

console.log("");

// Example 4: Multiple parts
console.log("Example 4: Many parts");

let city = "New York";
let year = 2026;

console.log("I live in " + city + " since " + year + ".");
// "I live in New York since 2026."

console.log("");

// Example 5: Template literals (backticks)
console.log("Example 5: Template literals");

let product = "laptop";
let price = 1200;

let sentence = `The ${product} costs $${price}.`;
console.log(sentence);  // "The laptop costs $1200."

console.log("");

// Example 6: Template literals with expressions
console.log("Example 6: Expressions inside ${}");

let a = 10;
let b = 5;

console.log(`Sum of ${a} and ${b} is ${a + b}`);  // "Sum of 10 and 5 is 15"
console.log(`2 to the power of 8 is ${2 ** 8}`);  // 256

console.log("");

// Example 7: Multi-line strings
console.log("Example 7: Multi-line");

// With + and \n:
let line1 = "First line\nSecond line";
console.log(line1);

// With template literals — just write newlines:
let line2 = `First line
Second line`;
console.log(line2);

console.log("");

// Example 8: String concatenation in loops
console.log("Example 8: Building a string in a loop");

let result = "";

for (let i = 1; i <= 5; i++) {
    result += i + " ";
}
console.log("result:", result);  // "1 2 3 4 5 "

// =============================================
// SUMMARY
// - + and += join strings
// - Numbers become strings when concatenated
// - Template literals `...` with ${expr} are cleaner
// - Templates support multi-line text natively
// =============================================
