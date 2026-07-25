// =============================================
// Program: concat() and Spread (...) — Combine Arrays
// =============================================
// Both methods combine arrays into a new array.
// concat()  → old way
// spread …  → modern way (ES6, more flexible)
// Neither modifies the original arrays.
// =============================================

// ----- 1. concat() — Joining Arrays -----
console.log("=== concat() ===");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = arr1.concat(arr2);
console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("arr1.concat(arr2):", combined);  // [1, 2, 3, 4, 5, 6]

// concat multiple arrays at once
let arr3 = [7, 8];
combined = arr1.concat(arr2, arr3);
console.log("concat three arrays:", combined);  // [1,2,3,4,5,6,7,8]

// concat with individual values
combined = arr1.concat(99, 100, arr2);
console.log("concat with values:", combined);  // [1,2,3,99,100,4,5,6]

// ----- 2. Spread Operator (...) — Modern Way -----
console.log("\n=== SPREAD OPERATOR (...) ===");

let a = [10, 20];
let b = [30, 40];

let spread = [...a, ...b];
console.log("...[a] + ...[b]:", spread);  // [10, 20, 30, 40]

// Spread gives you full control over the position
spread = [...a, 25, ...b, 50];
console.log("With extra elements:", spread);  // [10, 20, 25, 30, 40, 50]

// ----- 3. concat() vs Spread — subtle difference -----
console.log("\n=== CONCAT vs SPREAD ===");

// Both produce the same result for simple cases
let x = [1, 2];
let y = [3, 4];

console.log("concat:", x.concat(y));
console.log("spread:", [...x, ...y]);

// Spread is more versatile:
// 1. Can add elements anywhere (not just at the end)
console.log("Spread middle:", [...x, 99, ...y, 100]);

// 2. Can spread strings into character arrays
let chars = [..."hello"];
console.log("Spread string:", chars);  // ["h", "e", "l", "l", "o"]

// 3. Can spread into function arguments
let nums = [5, 10, 3];
console.log("Math.max with spread:", Math.max(...nums));  // 10

// ----- 4. Creating copies with spread -----
console.log("\n=== CREATING COPIES ===");

let original = [1, 2, 3];
let copySpread = [...original];
let copyConcat = original.concat();

console.log("Spread copy:", copySpread);
console.log("Concat copy:", copyConcat);
console.log("Same reference?", original === copySpread);  // false (different arrays)

// Modify copy without affecting original
copySpread.push(4);
console.log("Original:", original);      // [1, 2, 3] (unchanged)
console.log("Copy after push:", copySpread);  // [1, 2, 3, 4]

// ----- 5. Real-world examples -----
console.log("\n=== REAL-WORLD ===");

// Merging shopping cart items
let cart1 = ["laptop", "mouse"];
let cart2 = ["keyboard", "monitor"];
let fullCart = [...cart1, ...cart2];
console.log("Full cart:", fullCart);

// Adding to front and back simultaneously
let prices = [25, 30, 45];
let adjusted = [19, ...prices, 50, 60];
console.log("Adjusted prices:", adjusted);

// Combining multiple sources
let morningTasks = ["wake up", "breakfast"];
let dayTasks = ["work", "lunch", "meetings"];
let eveningTasks = ["gym", "dinner", "sleep"];

let allTasks = [...morningTasks, ...dayTasks, ...eveningTasks];
console.log("\nDaily schedule:", allTasks);

// ----- 6. Flat vs Nested with Spread -----
console.log("\n=== SPREAD IS SHALLOW ===");

let nested = [[1, 2], [3, 4]];
let flat = [...nested[0], ...nested[1]];
console.log("Manually flattened:", flat);  // [1, 2, 3, 4]
// For deeper nesting, use .flat()

// =============================================
// SUMMARY
// concat() and spread (...) both combine arrays into new ones
//
// concat: array.concat(arr2, arr3, ...)
// spread: [...arr1, ...arr2, ...arr3]
//
// Spread is more flexible:
// - Insert anywhere, not just at end
// - Spread strings, Sets, etc.
// - Works with function arguments (Math.max(...nums))
// - Preferred modern style
// =============================================
