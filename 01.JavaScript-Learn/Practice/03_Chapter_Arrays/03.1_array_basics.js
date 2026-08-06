// =============================================
// Program: Array Basics — Creating, Accessing, Length
// =============================================
// Arrays store multiple values in a single variable.
// Ordered by index (starts at 0).
// =============================================

// ----- 1. Creating Arrays -----
console.log("=== CREATING ARRAYS ===");

// Using square brackets (most common)
let fruits = ["apple", "banana", "orange"];
console.log("Fruits:", fruits);

// Using new Array()
let numbers = new Array(1, 2, 3, 4, 5);
console.log("Numbers:", numbers);

// Empty array
let empty = [];
console.log("Empty array:", empty);

// Array with mixed data types (JS allows any types in one array)
let mixed = [42, "hello", true, null, { name: "test" }];
console.log("Mixed types:", mixed);

// Caution: new Array(5) creates an array of 5 empty slots, NOT [5]
let slots = new Array(5);
console.log("new Array(5) creates 5 slots:", slots, "| length:", slots.length);

// ----- 2. Accessing Elements -----
console.log("\n=== ACCESSING ELEMENTS ===");

let colors = ["red", "green", "blue", "yellow"];

console.log('colors[0]:', colors[0]);   // "red"    (first element, index 0)
console.log('colors[2]:', colors[2]);   // "blue"   (third element)
console.log('colors[-1]:', colors[-1]); // undefined (negative index does NOT work like Python)

// Get last element safely
console.log('Last element:', colors[colors.length - 1]);  // "yellow"

// ----- 3. Array Length -----
console.log("\n=== ARRAY LENGTH ===");

console.log("colors.length:", colors.length);  // 4

// Length auto-updates when you add elements
colors.push("purple");
console.log("After push, length:", colors.length);  // 5

// You can also set length to truncate
let arr = [1, 2, 3, 4, 5];
arr.length = 3;  // truncate to first 3 elements
console.log("After arr.length = 3:", arr);  // [1, 2, 3]

// ----- 4. Modifying Elements by Index -----
console.log("\n=== MODIFYING ===");

let items = ["a", "b", "c"];
items[1] = "B";  // change element at index 1
console.log("After items[1] = 'B':", items);  // ["a", "B", "c"]

// Adding beyond length creates sparse array
items[5] = "f";
console.log("After items[5] = 'f':", items);
console.log("Notice empty slots:", Object.keys(items));  // keys: "0", "1", "2", "5"

// ----- 5. Checking if a Variable is an Array -----
console.log("\n=== CHECKING TYPE ===");

console.log("Array.isArray(fruits):", Array.isArray(fruits));  // true
console.log("Array.isArray({}):", Array.isArray({}));          // false
console.log("typeof an array:", typeof fruits);  // "object" (not helpful for detection)


// ----- 6. Iterating Over Arrays -----
console.log("\n=== ITERATING ===");

let scores = [85, 92, 78, 95];

// Traditional for loop
console.log("Using for loop:");
for (let i = 0; i < scores.length; i++) {
    console.log(`  [${i}] = ${scores[i]}`);
}

// for...of loop (modern, cleaner)
console.log("Using for...of:");
for (let score of scores) {
    console.log(" ", score);
} 

// =============================================
// SUMMARY
// Arrays = ordered, indexed collections
// - Index starts at 0, last index = length - 1
// - .length shows element count and can truncate
// - Array.isArray() is the reliable type check
// - Sparse arrays have empty slots (avoid them)
// =============================================
