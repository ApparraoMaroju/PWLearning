// =============================================
// Program: FOR LOOP
// =============================================
// The for loop repeats a block of code a known number of times.
// It has three parts:
//   for (initialization; condition; update) {
//       // code to run each time
//   }
//   1. initialization  — runs ONCE at the start
//   2. condition       — checked BEFORE each iteration
//   3. update          — runs AFTER each iteration
// =============================================

// Example 1: Basic for loop — counting 1 to 5
console.log("Example 1: Count 1 to 5");

for (let i = 1; i <= 5; i++) {
    console.log("i =", i);
}
// Output: i = 1, 2, 3, 4, 5

console.log("");

// Example 2: Step-by-step breakdown of the three parts
console.log("Example 2: How the three parts work together");
console.log("(init runs once → check condition → run body → update → check again...)");

for (let step = 0; step < 3; step++) {
    console.log("step =", step);
}
// Output: step = 0, 1, 2  (stops when step becomes 3)

console.log("");

// Example 3: Counting down (decrement)
console.log("Example 3: Countdown from 5");

for (let i = 5; i >= 1; i--) {
    console.log("T-minus", i);
}
console.log("Liftoff! 🚀");

console.log("");

// Example 4: Skip by 2 (step of 2)
console.log("Example 4: Even numbers from 2 to 10");

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
// Output: 2, 4, 6, 8, 10

console.log("");

// Example 5: Loop through an array
let fruits = ["apple", "banana", "cherry"];

console.log("Example 5: Loop through an array");
console.log("Fruits:", fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit at index", i, "is", fruits[i]);
}

console.log("");

// Example 6: Sum of numbers 1 to 10
console.log("Example 6: Sum of 1 to 10");

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;   // same as: sum = sum + i
}
console.log("Total:", sum);  // 55

console.log("");

// Example 7: Building a string with a loop
console.log("Example 7: Repeat a message 3 times");

let message = "";

for (let i = 0; i < 3; i++) {
    message += "Hello! ";
}
console.log("Message:", message);

console.log("");

// Example 8: Looping backwards over an array
console.log("Example 8: Array in reverse order");

let numbers = [10, 20, 30, 40];

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log("numbers[" + i + "] =", numbers[i]);
}

console.log("");

// Example 9: Loop without initializer declared inside
console.log("Example 9: Using an existing variable");

let count = 0;

for (; count < 3; count++) {
    console.log("count =", count);
}
console.log("After loop, count =", count);  // 3 (variable still exists outside)

console.log("");

// Example 10: Infinite loop (danger!) — commented out for safety
// for (;;) {
//     console.log("This never ends!");
// }
// To stop: press Ctrl+C

// =============================================
// SUMMARY
// - Use for loop when you know how many times to repeat
// - Three parts: initialization, condition, update
// - i++ counts up, i-- counts down, i += 2 steps by 2
// - Use fruits.length for array length
// - Avoid infinite loops (for (;;)) — always ensure the condition becomes false
// =============================================
