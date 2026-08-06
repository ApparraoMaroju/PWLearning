// =============================================
// Chapter: FUNCTIONS in JavaScript
// =============================================
// Functions are reusable blocks of code.
// Run this file to see every function concept
// in action, side by side.
// =============================================

// =============================================
// 1.  FUNCTION DECLARATION
// =============================================
console.log("=== 1. FUNCTION DECLARATION ===");

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));


// =============================================
// 2.  FUNCTION EXPRESSION
// =============================================
console.log("\n=== 2. FUNCTION EXPRESSION ===");

let double = function (x) {
    return x * 2;
};

console.log("double(21):", double(21));  // 42


// =============================================
// 3.  ARROW FUNCTION
// =============================================
console.log("\n=== 3. ARROW FUNCTION ===");

let square = n => n * n;
console.log("square(9):", square(9));  // 81


// =============================================
// 4.  PARAMETERS & REST
// =============================================
console.log("\n=== 4. PARAMETERS & REST ===");

function sumAll(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
}

console.log("sumAll(1, 2, 3, 4):", sumAll(1, 2, 3, 4));  // 10


// =============================================
// 5.  DEFAULT PARAMETERS
// =============================================
console.log("\n=== 5. DEFAULT PARAMETERS ===");

function greetUser(name = "Guest") {
    return "Welcome, " + name;
}

console.log(greetUser());          // "Welcome, Guest"
console.log(greetUser("Bob"));     // "Welcome, Bob"


// =============================================
// 6.  RETURN & EARLY EXIT
// =============================================
console.log("\n=== 6. RETURN & EARLY EXIT ===");

function checkAge(age) {
    if (age < 0) return "Invalid";
    if (age < 18) return "Minor";
    return "Adult";
}

console.log(checkAge(-1));  // "Invalid"
console.log(checkAge(15));  // "Minor"
console.log(checkAge(25));  // "Adult"


// =============================================
// 7.  SCOPE & CLOSURES
// =============================================
console.log("\n=== 7. SCOPE & CLOSURES ===");

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log("counter():", counter());  // 1
console.log("counter():", counter());  // 2
console.log("counter():", counter());  // 3


// =============================================
// 8.  IIFE
// =============================================
console.log("\n=== 8. IIFE ===");

let secret = (function () {
    let privateValue = 42;
    return function () { return privateValue; };
})();

console.log("secret():", secret());  // 42


// =============================================
// 9.  CALLBACKS
// =============================================
console.log("\n=== 9. CALLBACKS ===");

function apply(arr, fn) {
    return arr.map(fn);
}

console.log("Doubled:", apply([1, 2, 3], n => n * 2));  // [2, 4, 6]


// =============================================
// 10. RECURSION
// =============================================
console.log("\n=== 10. RECURSION ===");

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log("factorial(5):", factorial(5));  // 120


// =============================================
// QUICK REFERENCE CHEAT SHEET
// =============================================
//
// function name(params) { ... }        // declaration (hoisted)
// let fn = function(params) { ... }    // expression
// let fn = (params) => value           // arrow (implicit return)
// function f(a = 1, ...rest) { }       // defaults + rest
// return value;                        // return & exit
// function outer() { let x; return () => x; }  // closure
// (function(){ ... })();               // IIFE
// fn(callback)                         // callbacks
// function f(n) { if (base) return; return f(n-1); }  // recursion
// =============================================
