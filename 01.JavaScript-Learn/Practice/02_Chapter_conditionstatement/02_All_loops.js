// =============================================
// Chapter: LOOPS in JavaScript
// =============================================
// Loops repeat a block of code. Run this file to see
// every kind of loop in action, side by side.
// =============================================

// =============================================
// 1.  for LOOP — known number of repetitions
// =============================================
console.log("=== 1. for LOOP ===");

for (let i = 1; i <= 5; i++) {
    console.log("i =", i);
}

// Loop through an array
let fruits = ["apple", "banana", "cherry"];
console.log("\nLoop through array:");
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
}


// =============================================
// 2.  while LOOP — repeat while condition is true
// =============================================
console.log("\n=== 2. while LOOP ===");

let count = 1;
while (count <= 3) {
    console.log("count =", count);
    count++;
}

// Keep adding until sum > 20
let sum = 0;
let n = 1;
while (sum <= 20) {
    sum += n;
    n++;
}
console.log("Sum reached:", sum);


// =============================================
// 3.  do...while LOOP — runs at least once
// =============================================
console.log("\n=== 3. do...while LOOP ===");

let x = 10;
do {
    console.log("Body runs even though condition is false (x =", x + ")");
} while (x < 5);


// =============================================
// 4.  for...of LOOP — iterate over VALUES
// =============================================
console.log("\n=== 4. for...of LOOP ===");

for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// Works on strings too
for (let char of "Hi") {
    console.log("Char:", char);
}


// =============================================
// 5.  for...in LOOP — iterate over KEYS
// =============================================
console.log("\n=== 5. for...in LOOP ===");

let person = { name: "Alice", age: 25 };
for (let key in person) {
    console.log(key, "=", person[key]);
}


// =============================================
// 6.  break — exit the loop
// =============================================
console.log("\n=== 6. break ===");

for (let i = 1; i <= 10; i++) {
    if (i === 3) break;
    console.log(i);
}
console.log("Stopped at 3.");


// =============================================
// 7.  continue — skip to the next iteration
// =============================================
console.log("\n=== 7. continue ===");

for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
console.log("(3 was skipped)");


// =============================================
// 8.  NESTED LOOPS — loop inside a loop
// =============================================
console.log("\n=== 8. NESTED LOOPS ===");

for (let i = 1; i <= 3; i++) {
    let line = "";
    for (let j = 1; j <= 3; j++) {
        line += i * j + " ";
    }
    console.log("Row", i, ":", line);
}


// =============================================
// 9.  LABELED LOOPS — name a loop for break/continue
// =============================================
console.log("\n=== 9. LABELED LOOPS ===");

outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2) continue outer;
        console.log("i =", i, "j =", j);
    }
}


// =============================================
// 10. forEach() — array method (function-based loop)
// =============================================
console.log("\n=== 10. array.forEach() ===");

fruits.forEach((fruit, index) => {
    console.log("Index", index, "→", fruit);
});


// =============================================
// QUICK REFERENCE CHEAT SHEET
// =============================================
//
// for (init; condition; update) { ... }     // known count
// while (condition) { ... }                  // unknown count
// do { ... } while (condition);              // runs at least once
// for (let item of iterable) { ... }         // values (arrays, strings, Sets, Maps)
// for (let key in object) { ... }            // keys (objects)
// break;                                     // exit loop
// continue;                                  // skip this iteration
// outer: for (...) { break outer; }          // labeled loops
// array.forEach((item, index) => { ... })    // array method
//
// Falsy values that end while loops: false, 0, "", null, undefined, NaN
// =============================================
