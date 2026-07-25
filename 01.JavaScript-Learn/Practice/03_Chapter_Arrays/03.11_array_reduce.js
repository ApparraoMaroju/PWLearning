// =============================================
// Program: reduce() — Accumulate to a Single Value
// =============================================
// reduce() executes a reducer function on each element,
// resulting in a SINGLE output value (accumulated result).
// Can return a number, string, object, or even another array.
//
// Syntax: arr.reduce((accumulator, currentValue, index, array) => {}, initialValue)
// =============================================

// ----- 1. Summing Numbers (simplest use) -----
console.log("=== SUMMING WITH REDUCE ===");

let numbers = [10, 20, 30, 40, 50];

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);  // 150
// Walkthrough: 0 + 10 → 10 + 20 → 30 + 30 → 60 + 40 → 100 + 50 → 150

// Without initialValue, first element is used as acc
let sum2 = numbers.reduce((acc, curr) => acc + curr);
console.log("Sum (no initial value):", sum2);  // 150
// Walkthrough: 10 + 20 → 30 + 30 → 60 + 40 → 100 + 50 → 150

// ----- 2. Multiply (product) -----
console.log("\n=== PRODUCT ===");

let product = [1, 2, 3, 4].reduce((acc, n) => acc * n, 1);
console.log("Product:", product);  // 24 (1*2*3*4)

// ----- 3. Finding Max/Min -----
console.log("\n=== MIN / MAX ===");

let values = [45, 3, 67, 12, 89, 5];

let max = values.reduce((acc, n) => n > acc ? n : acc, -Infinity);
console.log("Max:", max);  // 89

let min = values.reduce((acc, n) => n < acc ? n : acc, Infinity);
console.log("Min:", min);  // 3

// Easier way: Math.max(...values) but reduce works too

// ----- 4. Reducing Objects (grouping/counting) -----
console.log("\n=== GROUPING AND COUNTING ===");

let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// Count occurrences of each fruit
let fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log("Fruit counts:", fruitCount);  // { apple: 3, banana: 2, orange: 1 }

// ----- 5. Reducing Arrays of Objects -----
console.log("\n=== ARRAYS OF OBJECTS ===");

let orders = [
    { product: "Laptop",   price: 1000, quantity: 1 },
    { product: "Mouse",    price: 25,   quantity: 2 },
    { product: "Keyboard", price: 75,   quantity: 1 },
    { product: "Monitor",  price: 300,  quantity: 2 }
];

// Calculate total cost
let totalCost = orders.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);
console.log("Total cost: $" + totalCost);  // $1725

// Build an array of product names from orders
let productNames = orders.reduce((acc, item) => {
    acc.push(item.product);
    return acc;
}, []);
console.log("Products:", productNames);  // ["Laptop", "Mouse", "Keyboard", "Monitor"]

// Same as: orders.map(item => item.product) — map is simpler here

// Build a lookup object (id → item)
let users = [
    { id: 101, name: "Alice" },
    { id: 102, name: "Bob" },
    { id: 103, name: "Charlie" }
];

let userLookup = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
}, {});
console.log("Lookup[102]:", userLookup[102]);  // { id: 102, name: "Bob" }

// ----- 6. reduce() to Flatten Arrays -----
console.log("\n=== FLATTEN WITH REDUCE ===");

let nested = [[1, 2], [3, 4], [5, 6]];
let flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log("Flattened:", flat);  // [1, 2, 3, 4, 5, 6]

// Same as: nested.flat() — but shows how reduce works

// Multiple levels (recurse)
let deepNested = [1, [2, [3, 4]], 5];
function flattenDeep(arr) {
    return arr.reduce((acc, item) => {
        return acc.concat(Array.isArray(item) ? flattenDeep(item) : item);
    }, []);
}
console.log("Deep flatten:", flattenDeep(deepNested));  // [1, 2, 3, 4, 5]

// ----- 7. reduceRight() — same as reduce but right-to-left -----
console.log("\n=== reduceRight() ===");

let chars = ["a", "b", "c", "d"];

let fromLeft = chars.reduce((acc, c) => acc + c, "");
console.log("Left to right:", fromLeft);  // "abcd"

let fromRight = chars.reduceRight((acc, c) => acc + c, "");
console.log("Right to left:", fromRight);  // "dcba"

// ----- 8. Real-world Example: Pipeline -----
console.log("\n=== REAL-WORLD PIPELINE ===");

// String processing pipeline
let pipeline = [
    (s) => s.trim(),
    (s) => s.toLowerCase(),
    (s) => s.replace(/\s+/g, "-"),
    (s) => s.substring(0, 20)
];

let input = "  Hello World! This is JavaScript  ";
let result = pipeline.reduce((str, fn) => fn(str), input);
console.log("Pipeline result:", result);  // "hello-world!-this-is"

// ----- 9. reduce() with Index -----
console.log("\n=== USING INDEX ===");

let scores = [85, 90, 78, 92];

// Combine index and value into an array
let indexed = scores.reduce((acc, score, idx) => {
    acc.push({ index: idx, score: score });
    return acc;
}, []);
console.log("Indexed scores:", indexed);
// [{ index:0, score:85 }, { index:1, score:90 }, ...]

// ----- 10. IMPORTANT: Empty array without initial value -----
console.log("\n=== EDGE CASE ===");

let empty = [];

try {
    empty.reduce((acc, n) => acc + n);
} catch (e) {
    console.log("Empty array without initialValue throws:", e.message);
    // TypeError: Reduce of empty array with no initial value
}

// Fix: always provide initialValue when array might be empty
let safe = empty.reduce((acc, n) => acc + n, 0);
console.log("Safe reduce with initialValue:", safe);  // 0

// =============================================
// SUMMARY
// reduce(fn, initialValue) → single accumulated result
// callback: (acc, current, index, array) => newAcc
// - Can produce ANY type: number, string, object, array
// - Always provide an initialValue (especially for empty arrays)
// - Without initialValue, first element becomes acc
// - reduceRight() goes right-to-left
// - Use for: summing, grouping, counting, building lookups, pipelines
// =============================================
