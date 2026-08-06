// =============================================
// Program: FUNCTION EXPRESSION
// =============================================
// A function expression stores a function inside a variable.
//   let name = function (params) { ... };   // anonymous
//   let name = function inner(params) { ... };  // named
// Unlike declarations, expressions are NOT hoisted.
// =============================================

// Example 1: Anonymous function expression
let greet = function () {
    console.log("Hello from a function expression!");
};

console.log("Example 1: Anonymous function expression");
greet();

console.log("");

// Example 2: Function expression with parameters
let multiply = function (a, b) {
    return a * b;
};

console.log("Example 2: With parameters");
console.log("multiply(4, 6) =", multiply(4, 6));  // 24

console.log("");

// Example 3: Named function expression
let factorial = function fact(n) {
    // The name "fact" is only usable INSIDE the function
    return n <= 1 ? 1 : n * fact(n - 1);
};

console.log("Example 3: Named function expression");
console.log("factorial(5) =", factorial(5));  // 120

console.log("");

// Example 4: Function expressions are NOT hoisted
console.log("Example 4: No hoisting");

// console.log(double(5));  // ❌ TypeError: double is not defined (not hoisted)

let double = function (x) {
    return x * 2;
};

console.log("double(5) =", double(5));  // 10 (defined before use)

console.log("");

// Example 5: Storing functions in an array
console.log("Example 5: Functions in an array");

let operations = [
    function (a, b) { return a + b; },
    function (a, b) { return a - b; },
    function (a, b) { return a * b; }
];

console.log("operations[0](10, 5) =", operations[0](10, 5));  // 15
console.log("operations[1](10, 5) =", operations[1](10, 5));  // 5
console.log("operations[2](10, 5) =", operations[2](10, 5));  // 50

console.log("");

// Example 6: Function expression as an object property
console.log("Example 6: As an object method");

let calculator = {
    add: function (a, b) { return a + b; },
    subtract: function (a, b) { return a - b; }
};

console.log("calculator.add(8, 2) =", calculator.add(8, 2));        // 10
console.log("calculator.subtract(8, 2) =", calculator.subtract(8, 2));  // 6

console.log("");

// Example 7: Passing a function expression as an argument
console.log("Example 7: Function as an argument");

function runTwice(fn) {
    fn();
    fn();
}

runTwice(function () {
    console.log("Running...");
});

// =============================================
// SUMMARY
// - let fn = function() { ... } — stored in a variable
// - NOT hoisted (must be defined before use)
// - Can be anonymous or named (named = self-reference)
// - Useful in arrays, objects, and as callback arguments
// =============================================
