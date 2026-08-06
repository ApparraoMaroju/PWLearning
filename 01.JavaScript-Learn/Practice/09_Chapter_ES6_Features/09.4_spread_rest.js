// =============================================
// Program: SPREAD & REST  (ES6/ES2018)
// =============================================
// Spread (...) — EXPANDS an iterable into elements.
// Rest (...)    — COLLECTS elements into an array.
// Same syntax, opposite jobs — depends on context.
// =============================================

// Example 1: Spread arrays — copy
console.log("Example 1: Spread array copy");

let original = [1, 2, 3];
let copy = [...original];

console.log("copy:", copy);                    // [1, 2, 3]
console.log("Different array?", copy !== original);  // true

copy.push(4);
console.log("original:", original);  // unchanged [1, 2, 3]

console.log("");

// Example 2: Spread arrays — combine
console.log("Example 2: Combine arrays");

let arr1 = [1, 2];
let arr2 = [3, 4];

let combined = [...arr1, ...arr2];
let withMiddle = [...arr1, 99, ...arr2];

console.log("combined:", combined);      // [1, 2, 3, 4]
console.log("withMiddle:", withMiddle);  // [1, 2, 99, 3, 4]

console.log("");

// Example 3: Spread into function calls
console.log("Example 3: Spread in function calls");

let nums = [4, 9, 2];

console.log("Math.max(...nums):", Math.max(...nums));  // 9
console.log("Math.min(...nums):", Math.min(...nums));  // 2

console.log("");

// Example 4: Spread strings
console.log("Example 4: Spread strings");

let word = "Hi";
console.log("[...word]:", [...word]);  // ['H', 'i']
console.log("Math.max(...'239'):", Math.max(...'239'));  // 9

console.log("");

// Example 5: Rest parameters — collect arguments
console.log("Example 5: Rest parameters");

function sum(...numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}

console.log("sum(1, 2, 3):", sum(1, 2, 3));           // 6
console.log("sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5));  // 15

console.log("");

// Example 6: Rest with named parameters
console.log("Example 6: Rest after named params");

function log(level, ...messages) {
    console.log("[" + level + "]", messages.join(" "));
}

log("INFO", "Server", "started", "on", "port", 3000);
// "[INFO] Server started on port 3000"

console.log("");

// Example 7: Spread objects (ES2018)
console.log("Example 7: Object spread");

let defaults = { theme: "dark", fontSize: 14 };
let userPrefs = { fontSize: 18 };

let merged = { ...defaults, ...userPrefs };
console.log("merged:", merged);  // { theme: 'dark', fontSize: 18 }

console.log("");

// Example 8: Rest in destructuring
console.log("Example 8: Rest in destructuring");

let [first, ...others] = [1, 2, 3, 4];

console.log("first:", first);    // 1
console.log("others:", others);  // [2, 3, 4]

let { a, ...restObj } = { a: 1, b: 2, c: 3 };
console.log("a:", a);            // 1
console.log("restObj:", restObj); // { b: 2, c: 3 }

console.log("");

// Example 9: Practical — deduplicate with spread + Set
console.log("Example 9: Deduplication");

let withDupes = [1, 2, 2, 3, 3, 3];
let unique = [...new Set(withDupes)];

console.log("unique:", unique);  // [1, 2, 3]

// =============================================
// SUMMARY
// - Spread ... → expand: [...arr], {...obj}, fn(...args)
// - Rest ... → collect: function(...args), [a, ...rest]
// - Object spread merges (later keys win)
// - Handy for copies, merges, dedupe, function args
// =============================================
