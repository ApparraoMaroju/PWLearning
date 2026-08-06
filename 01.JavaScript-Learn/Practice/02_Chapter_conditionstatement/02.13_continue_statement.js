// =============================================
// Program: CONTINUE STATEMENT
// =============================================
// The continue statement SKIPS the rest of the current iteration
// and jumps to the next one. The loop keeps running — it does NOT exit.
// =============================================

// Example 1: Skip a specific value
console.log("Example 1: Skip number 3");

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;  // skip 3, go to i = 4
    }
    console.log("i =", i);
}
// Output: 1, 2, 4, 5  (3 is skipped)

console.log("");

// Example 2: Print only even numbers
console.log("Example 2: Only even numbers (skip odd)");

for (let i = 1; i <= 8; i++) {
    if (i % 2 !== 0) {
        continue;  // skip odd numbers
    }
    console.log("Even:", i);
}
// Output: 2, 4, 6, 8

console.log("");

// Example 3: Skip empty strings in an array
console.log("Example 3: Skip empty values");

let items = ["apple", "", "banana", "", "cherry"];

for (let item of items) {
    if (item === "") {
        continue;  // skip empty strings
    }
    console.log("Item:", item);
}
// Output: apple, banana, cherry

console.log("");

// Example 4: continue in a while loop
console.log("Example 4: while loop with continue");

let i = 0;

while (i < 6) {
    i++;  // update BEFORE continue, or you get an infinite loop!
    if (i % 2 === 0) {
        continue;  // skip even numbers
    }
    console.log("Odd:", i);
}
// Output: 1, 3, 5

console.log("");

// Example 5: continue vs break — side by side
console.log("Example 5: continue vs break");

console.log("With continue (skips 3):");
for (let n = 1; n <= 5; n++) {
    if (n === 3) continue;
    console.log(n);
}

console.log("With break (stops at 3):");
for (let n = 1; n <= 5; n++) {
    if (n === 3) break;
    console.log(n);
}

console.log("");

// Example 6: Filter with continue (only valid entries)
console.log("Example 6: Process only valid scores");

let scores = [90, -5, 75, 0, 88, -1];

for (let score of scores) {
    if (score < 0) {
        console.log("Ignoring invalid score:", score);
        continue;
    }
    console.log("Valid score:", score);
}

console.log("");

// Example 7: Skip a specific day in a schedule
console.log("Example 7: Skip 'Saturday'");

let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

for (let day of days) {
    if (day === "Sat" || day === "Sun") {
        continue;  // skip the weekend
    }
    console.log("Work day:", day);
}

// =============================================
// SUMMARY
// - continue skips the current iteration, NOT the whole loop
// - Use it to filter out unwanted values
// - In while loops, update the counter BEFORE continue
// - Difference: continue → skip one item; break → end the loop
// =============================================
