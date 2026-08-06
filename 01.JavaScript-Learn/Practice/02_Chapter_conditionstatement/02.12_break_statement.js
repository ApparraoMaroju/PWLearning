// =============================================
// Program: BREAK STATEMENT
// =============================================
// The break statement EXITS a loop (or switch) immediately.
// Execution continues with the code AFTER the loop.
// =============================================

// Example 1: Break out of a for loop
console.log("Example 1: Stop at 3");

for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        break;  // exit the loop right here
    }
    console.log("i =", i);
}
console.log("Loop ended at i = 3");
// Output: 1, 2, then the message

console.log("");

// Example 2: Break in a while loop
console.log("Example 2: while loop with break");

let i = 0;

while (true) {
    i++;
    console.log("i =", i);
    if (i >= 3) {
        break;  // exit the infinite loop
    }
}
console.log("Exited the loop.");

console.log("");

// Example 3: Searching — stop when you find it
console.log("Example 3: Find a value in an array");

let fruits = ["apple", "banana", "cherry", "date"];
let target = "cherry";

for (let i = 0; i < fruits.length; i++) {
    console.log("Checking:", fruits[i]);
    if (fruits[i] === target) {
        console.log("Found", target, "at index", i);
        break;  // no need to keep searching
    }
}

console.log("");

// Example 4: Break inside a switch (already seen, recap)
console.log("Example 4: break in switch");

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;  // without this, it would fall through to the next case
    default:
        console.log("Other day");
}

console.log("");

// Example 5: Break skips the update part
console.log("Example 5: break skips remaining iterations");

for (let i = 0; i < 10; i++) {
    if (i === 2) {
        break;
    }
    console.log(i);
}
console.log("After break — i is now:", i);

console.log("");

// Example 6: Break in a do...while loop
console.log("Example 6: do...while with break");

let attempts = 0;

do {
    attempts++;
    console.log("Attempt", attempts);
    if (attempts === 2) {
        break;  // leave after 2 tries
    }
} while (true);

console.log("Stopped after", attempts, "attempts.");

console.log("");

// Example 7: Break when user "quits" (simulated)
console.log("Example 7: Stop on 'quit'");

let commands = ["run", "jump", "quit", "sleep"];

for (let cmd of commands) {
    if (cmd === "quit") {
        console.log("Quitting...");
        break;
    }
    console.log("Executing:", cmd);
}
// Output: run, jump, then "Quitting..."

console.log("");

// Example 8: Break only breaks the innermost loop
console.log("Example 8: Break inside a nested loop");

for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
        if (col === 1) {
            break;  // exits the INNER loop only
        }
        console.log("row", row, "col", col);
    }
    console.log("— inner loop finished for row", row);
}
// The outer loop continues normally.

// =============================================
// SUMMARY
// - break exits the loop (or switch) immediately
// - Common use: stop searching once you find something
// - break only exits the INNERMOST loop (use labels for outer loops)
// - Useful to exit "infinite" loops safely
// =============================================
