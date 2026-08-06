// =============================================
// Program: WHILE LOOP
// =============================================
// The while loop repeats code WHILE a condition is true.
// The condition is checked BEFORE each iteration.
//   while (condition) {
//       // code to run while condition is true
//   }
// =============================================

// Example 1: Basic while loop
console.log("Example 1: Count from 1 to 5");

let i = 1;

while (i <= 5) {
    console.log("i =", i);
    i++;  // IMPORTANT: update the counter, or the loop never ends
}
// Output: i = 1, 2, 3, 4, 5

console.log("");

// Example 2: While with a boolean flag
console.log("Example 2: Password check simulation");

let isCorrect = false;
let attempts = 0;

while (!isCorrect) {
    attempts++;
    console.log("Attempt", attempts, "- checking password...");
    if (attempts >= 3) {
        isCorrect = true;  // pretend the password was accepted
    }
}
console.log("Access granted after", attempts, "attempts.");

console.log("");

// Example 3: Sum numbers until the sum exceeds 20
console.log("Example 3: Add until sum > 20");

let sum = 0;
let number = 1;

while (sum <= 20) {
    sum += number;
    console.log("Added", number, "→ sum =", sum);
    number++;
}
console.log("Final sum:", sum);

console.log("");

// Example 4: Looping through an array with while
console.log("Example 4: Print array elements");

let fruits = ["apple", "banana", "cherry"];
let index = 0;

while (index < fruits.length) {
    console.log("Fruit:", fruits[index]);
    index++;
}

console.log("");

// Example 5: While with user-input style condition
console.log("Example 5: Simulate 'keep asking until valid'");

let input = "";
let validInputs = ["yes", "no"];

while (!validInputs.includes(input)) {
    console.log("Waiting for a valid input...");
    input = "no";  // pretend the user typed "no"
}
console.log("Valid input received:", input);

console.log("");

// Example 6: Finding the first power of 2 greater than 1000
console.log("Example 6: First power of 2 > 1000");

let value = 1;

while (value <= 1000) {
    value *= 2;
}
console.log("Result:", value);  // 1024

console.log("");

// Example 7: while loop vs for loop — same result
console.log("Example 7: while and for produce the same output");

let a = 1;
while (a <= 3) {
    console.log("while → a =", a);
    a++;
}

for (let b = 1; b <= 3; b++) {
    console.log("for   → b =", b);
}

console.log("");

// Example 8: Infinite while loop (danger!) — commented out
// let danger = true;
// while (danger) {
//     console.log("This never ends!");
// }
// To stop: press Ctrl+C

// =============================================
// SUMMARY
// - Use while when you DON'T know how many times to repeat
// - Condition is checked BEFORE the body runs (may run 0 times)
// - ALWAYS update the counter/flag inside the loop
// - Common use: keep trying until a condition becomes true
// =============================================
