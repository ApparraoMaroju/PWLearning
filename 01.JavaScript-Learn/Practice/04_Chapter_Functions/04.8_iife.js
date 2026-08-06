// =============================================
// Program: IIFE — Immediately Invoked Function Expression
// =============================================
// An IIFE is a function expression that runs immediately
// after it is created. It creates its OWN scope, keeping
// variables private and out of the global namespace.
//   (function () { ... })();
// =============================================

// Example 1: Basic IIFE
console.log("Example 1: Basic IIFE");

(function () {
    console.log("This runs immediately!");
})();
// The function is defined AND called in one step.

console.log("");

// Example 2: IIFE with parameters
console.log("Example 2: IIFE with arguments");

(function (name) {
    console.log("Hello,", name + "!");
})("Alice");
// "Alice" is passed in as the `name` parameter.

console.log("");

// Example 3: IIFE returning a value
console.log("Example 3: IIFE returns a value");

let result = (function (a, b) {
    return a + b;
})(3, 4);

console.log("IIFE returned:", result);  // 7

console.log("");

// Example 4: Arrow function IIFE
console.log("Example 4: Arrow IIFE");

(() => {
    console.log("Arrow IIFE runs too!");
})();

console.log("");

// Example 5: Keeping variables private
console.log("Example 5: Private variables");

// Without IIFE, count would leak into global scope.
let counter = (function () {
    let count = 0;   // private — not accessible outside

    return {
        increment: function () { return ++count; },
        decrement: function () { return --count; },
        get: function () { return count; }
    };
})();

console.log("counter.increment():", counter.increment());  // 1
console.log("counter.increment():", counter.increment());  // 2
console.log("counter.decrement():", counter.decrement());  // 1
// console.log(count);  // ❌ ReferenceError — count is private

console.log("");

// Example 6: IIFE for one-time initialization
console.log("Example 6: One-time setup");

let config = (function () {
    // Setup logic runs once
    let settings = { theme: "dark", fontSize: 14 };
    console.log("(initializing config...)");
    return settings;
})();

console.log("config:", config);

console.log("");

// Example 7: IIFE avoiding global name collisions
console.log("Example 7: Isolated scope");

let app = "main app";

(function () {
    let app = "temporary app";   // local, doesn't clash
    console.log("Inside IIFE:", app);
})();

console.log("Outside IIFE:", app);  // "main app" (unchanged)

console.log("");

// Example 8: IIFE with async (modern usage)
console.log("Example 8: Async IIFE");

(async function () {
    let data = await Promise.resolve("fetched data");
    console.log("Async IIFE got:", data);
})();

// =============================================
// SUMMARY
// - (function(){ ... })() runs immediately
// - Creates a private scope — no global pollution
// - Can take arguments and return values
// - Modern use: async IIFE for top-level await
// =============================================
