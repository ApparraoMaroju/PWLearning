// =============================================
// Chapter: ES6 FEATURES in JavaScript
// =============================================
// Modern JavaScript additions. Run this file to
// see the highlights in action, side by side.
// =============================================

// =============================================
// 1.  let & const
// =============================================
console.log("=== 1. let & const ===");

const PI = 3.14159;
let count = 0;
count = 1;

console.log("PI:", PI, "| count:", count);


// =============================================
// 2.  TEMPLATE LITERALS
// =============================================
console.log("\n=== 2. TEMPLATE LITERALS ===");

let name = "Alice";
console.log(`Hello, ${name}! 2+2=${2 + 2}`);
console.log(`Multi-line
string`);


// =============================================
// 3.  DESTRUCTURING
// =============================================
console.log("\n=== 3. DESTRUCTURING ===");

let [a, b] = [1, 2];
let { x, y } = { x: 10, y: 20 };

console.log("a:", a, "b:", b, "x:", x, "y:", y);

[a, b] = [b, a];   // swap
console.log("After swap — a:", a, "b:", b);


// =============================================
// 4.  SPREAD & REST
// =============================================
console.log("\n=== 4. SPREAD & REST ===");

let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2];
console.log("combined:", combined);

function sum(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
}
console.log("sum(1,2,3,4):", sum(1, 2, 3, 4));


// =============================================
// 5.  CLASSES
// =============================================
console.log("\n=== 5. CLASSES ===");

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return this.name + " makes a sound";
    }
}

class Dog extends Animal {
    speak() {
        return this.name + " barks!";
    }
}

let rex = new Dog("Rex");
console.log(rex.speak());


// =============================================
// 6.  MODULES
// =============================================
console.log("\n=== 6. MODULES ===");

console.log("Use export/import with .mjs files (see 09.6_modules.js)");


// =============================================
// 7.  PROMISES & ASYNC/AWAIT
// =============================================
console.log("\n=== 7. PROMISES & ASYNC/AWAIT ===");

async function demo() {
    let value = await Promise.resolve("resolved value");
    console.log("Await result:", value);
}

demo();

Promise.all([
    Promise.resolve(1),
    Promise.resolve(2)
]).then((vals) => console.log("Promise.all:", vals));


// =============================================
// QUICK REFERENCE CHEAT SHEET
// =============================================
//
// let / const          — block-scoped variables
// `template ${expr}`   — interpolation, multi-line
// [a, b] = arr         — array destructuring
// { a, b } = obj       — object destructuring
// ...arr               — spread (expand)
// function(...args)    — rest (collect)
// class X extends Y    — classes + inheritance
// import/export        — modules (.mjs)
// new Promise(...)     — async values
// .then/.catch/.finally — promise handling
// async/await          — promise sugar
// Promise.all([...])   — parallel promises
// =============================================
