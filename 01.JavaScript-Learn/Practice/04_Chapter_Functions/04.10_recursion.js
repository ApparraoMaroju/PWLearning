// =============================================
// Program: RECURSION
// =============================================
// Recursion is when a function calls ITSELF.
// Every recursive function needs:
//   1. A BASE CASE  — when to STOP
//   2. A RECURSIVE CASE — calling itself with a smaller problem
// =============================================

// Example 1: Factorial — n! = n × (n-1) × ... × 1
function factorial(n) {
    // Base case: 0! = 1
    if (n <= 1) {
        return 1;
    }
    // Recursive case: n × (n-1)!
    return n * factorial(n - 1);
}

console.log("Example 1: Factorial");
console.log("factorial(5) =", factorial(5));   // 120
console.log("factorial(0) =", factorial(0));   // 1 (base case)

// Trace for factorial(4):
//   factorial(4) = 4 * factorial(3)
//                = 4 * 3 * factorial(2)
//                = 4 * 3 * 2 * factorial(1)
//                = 4 * 3 * 2 * 1 = 24

console.log("");

// Example 2: Fibonacci sequence
function fibonacci(n) {
    // Base cases
    if (n <= 0) return 0;
    if (n === 1) return 1;
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Example 2: Fibonacci");
for (let i = 0; i <= 7; i++) {
    console.log("fib(" + i + ") =", fibonacci(i));
}
// 0, 1, 1, 2, 3, 5, 8, 13

console.log("");

// Example 3: Sum of numbers 1 to n
function sumUpTo(n) {
    if (n <= 1) {
        return n;
    }
    return n + sumUpTo(n - 1);
}

console.log("Example 3: Sum 1 to n");
console.log("sumUpTo(10) =", sumUpTo(10));  // 55

console.log("");

// Example 4: Countdown (recursion with side effects)
function countdown(n) {
    console.log(n);
    if (n <= 1) {
        console.log("Blast off! 🚀");
        return;   // base case — stop
    }
    countdown(n - 1);   // recursive case
}

console.log("Example 4: Countdown");
countdown(5);

console.log("");

// Example 5: Recursion vs iteration (both work)
console.log("Example 5: Recursion vs loop");

function sumRecursive(n) {
    if (n <= 0) return 0;
    return n + sumRecursive(n - 1);
}

function sumLoop(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log("sumRecursive(100) =", sumRecursive(100));  // 5050
console.log("sumLoop(100) =", sumLoop(100));            // 5050

console.log("");

// Example 6: Power — x^n
function power(base, exponent) {
    if (exponent === 0) {
        return 1;   // any number to the power of 0 = 1
    }
    return base * power(base, exponent - 1);
}

console.log("Example 6: Power");
console.log("power(2, 10) =", power(2, 10));  // 1024
console.log("power(3, 3) =", power(3, 3));    // 27

console.log("");

// Example 7: Recursion on arrays — sum of array
function arraySum(arr) {
    if (arr.length === 0) {
        return 0;   // base case: empty array sums to 0
    }
    return arr[0] + arraySum(arr.slice(1));   // first + rest
}

console.log("Example 7: Array sum");
console.log("arraySum([1, 2, 3, 4, 5]) =", arraySum([1, 2, 3, 4, 5]));  // 15

console.log("");

// Example 8: DANGER — missing base case = stack overflow
// function infinite() {
//     return infinite();   // ❌ RangeError: Maximum call stack size exceeded
// }
// Always ensure the base case is reachable!

// =============================================
// SUMMARY
// - Recursion = a function calling itself
// - ALWAYS include a base case (stopping condition)
// - Each call works on a SMALLER problem
// - Elegant for trees, factorials, Fibonacci, countdowns
// - Beware: deep recursion can overflow the call stack
// =============================================
