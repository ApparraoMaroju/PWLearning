// =============================================
// Program: slice() — Extract COPY of a Portion
// =============================================
// slice() returns a NEW array containing a copy of a portion.
// It does NOT modify the original array.
//
// Syntax: arr.slice(startIndex, endIndex)
//   - startIndex: where to begin (default 0)
//   - endIndex: where to end (exclusive, i.e. not included)
//   - Negative indexes count from the end
// =============================================

// ----- 1. Basic slice() -----
console.log("=== BASIC SLICE ===");

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("Full array:", fruits);

// Slice from index 1 to 3 (endIndex is EXCLUSIVE — "date" at 3 is NOT included)
let portion = fruits.slice(1, 3);
console.log("fruits.slice(1, 3):", portion);  // ["banana", "cherry"]

// Slice from start to end (no endIndex → goes to end)
portion = fruits.slice(2);
console.log("fruits.slice(2):", portion);  // ["cherry", "date", "elderberry"]

// Slice the whole array (copy)
let copy = fruits.slice();
console.log("fruits.slice():", copy);  // ["apple", "banana", "cherry", "date", "elderberry"]
console.log("Are they the same array?", fruits === copy);  // false (different references)

// ----- 2. Using Negative Indexes -----
console.log("\n=== NEGATIVE INDEXES ===");

// Negative index counts from end: -1 = last, -2 = second last, etc.
console.log("fruits.slice(-2):", fruits.slice(-2));        // ["date", "elderberry"]
console.log("fruits.slice(-3, -1):", fruits.slice(-3, -1)); // ["cherry", "date"]
console.log("fruits.slice(1, -1):", fruits.slice(1, -1));   // ["banana", "cherry", "date"]

// ----- 3. slice() does NOT modify the original -----
console.log("\n=== IMMUTABLE (ORIGINAL UNCHANGED) ===");

let original = [10, 20, 30, 40, 50];
let sliced = original.slice(1, 4);
console.log("Original:", original);  // unchanged: [10, 20, 30, 40, 50]
console.log("Sliced:", sliced);      // [20, 30, 40]

// ----- 4. Get first N and last N elements -----
console.log("\n=== FIRST N / LAST N ===");

let scores = [88, 72, 95, 63, 84, 91, 77];

// First 3 elements
let top3 = scores.slice(0, 3);
console.log("First 3:", top3);  // [88, 72, 95]

// Last 3 elements
let last3 = scores.slice(-3);
console.log("Last 3:", last3);  // [84, 91, 77]

// Remove first 2 and last 2 (get middle)
let middle = scores.slice(2, -2);
console.log("Middle:", middle);  // [95, 63, 84]

// ----- 5. Practical Uses -----
console.log("\n=== PRACTICAL USES ===");

// Pagination example
let items = [];
for (let i = 1; i <= 20; i++) items.push("Item " + i);

function paginate(array, page, pageSize) {
    let start = (page - 1) * pageSize;
    let end = start + pageSize;
    return array.slice(start, end);
}

console.log("Page 1:", paginate(items, 1, 5));
console.log("Page 2:", paginate(items, 2, 5));
console.log("Page 3:", paginate(items, 3, 5));

// Copy and modify safely
let temperatures = [22, 25, 19, 30, 28];
let weekend = temperatures.slice(-2);
weekend[0] = 0;  // modify the copy — does NOT affect original
console.log("\nModified copy:", weekend);
console.log("Original intact:", temperatures);

// ----- 6. Edge Cases -----
console.log("\n=== EDGE CASES ===");

let arr = [1, 2, 3];

console.log("slice(5):", arr.slice(5));      // []  (start beyond length)
console.log("slice(0, 0):", arr.slice(0, 0)); // []  (empty range)
console.log("slice(-10):", arr.slice(-10));   // [1,2,3]  (clamped to 0)
console.log("slice():", arr.slice());         // [1,2,3]  (full copy)

// =============================================
// SUMMARY
// slice(start, end) → new array copy
// - start inclusive, end EXCLUSIVE
// - Negative indexes count from end
// - Original array is NEVER modified (immutable)
// - No arguments → full copy of array
// - Great for creating paginated views
// =============================================
