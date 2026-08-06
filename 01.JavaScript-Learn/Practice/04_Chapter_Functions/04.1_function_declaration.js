// =============================================
// Program: FUNCTION DECLARATION
// =============================================
// A function declaration defines a named, reusable block of code.
//   function name(parameters) {
//       // body
//   }
// Declarations are HOISTED — you can call them before they appear.
// =============================================

// Example 1: Basic function declaration
function greet() {
    console.log("Hello, world!");
}

console.log("Example 1: Call a function");
greet();       // "Hello, world!"
greet();       // callable as many times as you want

console.log("");

// Example 2: Function with parameters
function greetUser(name) {
    console.log("Hello,", name + "!");
}

console.log("Example 2: Function with parameters");
greetUser("Alice");   // "Hello, Alice!"
greetUser("Bob");     // "Hello, Bob!"

console.log("");

// Example 3: Function returning a value
function add(a, b) {
    return a + b;
}

console.log("Example 3: Function with return");
let sum = add(5, 3);
console.log("add(5, 3) =", sum);  // 8
console.log("add(10, 20) =", add(10, 20));  // 30

console.log("");

// Example 4: Hoisting — call BEFORE the declaration
console.log("Example 4: Hoisting");

sayHi();  // works even though the declaration comes later

function sayHi() {
    console.log("Hi! (hoisted)");
}

console.log("");

// Example 5: Function with multiple parameters
function calculateRectangleArea(length, width) {
    return length * width;
}

console.log("Example 5: Multiple parameters");
console.log("Area of 5 x 4:", calculateRectangleArea(5, 4));  // 20
console.log("Area of 10 x 10:", calculateRectangleArea(10, 10));  // 100

console.log("");

// Example 6: Function calling another function
function square(x) {
    return x * x;
}

function sumOfSquares(a, b) {
    return square(a) + square(b);
}

console.log("Example 6: Functions calling functions");
console.log("sumOfSquares(3, 4) =", sumOfSquares(3, 4));  // 9 + 16 = 25

console.log("");

// Example 7: Multiple returns
function categorize(num) {
    if (num > 0) {
        return "positive";
    } else if (num < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

console.log("Example 7: Multiple return paths");
console.log("categorize(5):", categorize(5));      // "positive"
console.log("categorize(-3):", categorize(-3));    // "negative"
console.log("categorize(0):", categorize(0));      // "zero"

// =============================================
// SUMMARY
// - function name(params) { ... } defines a function
// - Call with name(args)
// - Declarations are hoisted (callable before definition)
// - return sends a value back; without it, the function returns undefined
// =============================================
