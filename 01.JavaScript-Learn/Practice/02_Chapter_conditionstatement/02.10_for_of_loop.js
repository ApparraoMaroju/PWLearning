// =============================================
// Program: FOR...OF LOOP  (ES6)
// =============================================
// The for...of loop iterates over the VALUES of an iterable
// (arrays, strings, Maps, Sets, etc.).
//   for (let item of iterable) {
//       // use item
//   }
// No index needed — ideal for reading array elements.
// =============================================

// Example 1: Basic for...of over an array
console.log("Example 1: Array values");

let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

console.log("");

// Example 2: Over a string (each character)
console.log("Example 2: String characters");

let word = "Hi";

for (let char of word) {
    console.log("Char:", char);
}
// Output: "H", "i"

console.log("");

// Example 3: With index (using entries())
console.log("Example 3: Value AND index");

let colors = ["red", "green", "blue"];

for (let [index, color] of colors.entries()) {
    console.log("Index", index, "→", color);
}

console.log("");

// Example 4: Summing numbers
console.log("Example 4: Sum of array values");

let numbers = [10, 20, 30, 40];
let sum = 0;

for (let num of numbers) {
    sum += num;
}
console.log("Sum:", sum);  // 100

console.log("");

// Example 5: Over a Set (no duplicates)
console.log("Example 5: Set values");

let uniqueNums = new Set([1, 2, 2, 3, 3, 3]);

for (let num of uniqueNums) {
    console.log("Unique number:", num);
}
// Output: 1, 2, 3

console.log("");

// Example 6: Over a Map (key-value pairs)
console.log("Example 6: Map entries");

let scores = new Map([
    ["Alice", 90],
    ["Bob", 85]
]);

for (let [name, score] of scores) {
    console.log(name, "scored", score);
}

console.log("");

// Example 7: for...of vs traditional for loop
console.log("Example 7: Comparison with traditional for");

let nums = [5, 6, 7];

console.log("Traditional for:");
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

console.log("for...of:");
for (let num of nums) {
    console.log(num);
}
// Same output — for...of is cleaner when you only need values

console.log("");

// Example 8: Filtering inside the loop
console.log("Example 8: Print only even numbers");

let data = [1, 2, 3, 4, 5, 6];

for (let item of data) {
    if (item % 2 === 0) {
        console.log(item, "is even");
    }
}

console.log("");

// Example 9: for...of with objects — NOT allowed directly
let person = { name: "Alice", age: 25 };

// for (let prop of person) { ... }  // TypeError: person is not iterable
// Use Object.values() / Object.entries() instead:

console.log("Example 9: Object values via Object.values()");

for (let value of Object.values(person)) {
    console.log("Value:", value);
}

// =============================================
// SUMMARY
// - for...of gives you VALUES (not indexes)
// - Works on arrays, strings, Sets, Maps, and other iterables
// - Use .entries() when you also need the index
// - Objects are NOT iterable directly — use Object.values()/keys()/entries()
// =============================================
