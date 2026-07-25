// =============================================
// Program: flat() and flatMap() — Flatten Arrays
// =============================================
// flat()     → "flattens" nested arrays into a single-level array
// flatMap()  → maps each element THEN flattens (depth 1) in one step
// Both return NEW arrays — original is NOT modified.
// =============================================

// ----- 1. flat() — Basic Flattening -----
console.log("=== flat() BASIC ===");

let nested = [1, [2, 3], [4, [5, 6]]];

// Default depth is 1
let flat1 = nested.flat();
console.log("Original:", nested);
console.log("flat():", flat1);  // [1, 2, 3, 4, [5, 6]]
// Only the first level of nesting is flattened

// With depth 2
let flat2 = nested.flat(2);
console.log("flat(2):", flat2);  // [1, 2, 3, 4, 5, 6]

// ----- 2. Different Depth Levels -----
console.log("\n=== DEPTH LEVELS ===");

let deep = [1, [2, [3, [4, [5]]]]];

console.log("Original:", deep);
console.log("flat(1):", deep.flat(1));  // [1, 2, [3, [4, [5]]]]
console.log("flat(2):", deep.flat(2));  // [1, 2, 3, [4, [5]]]
console.log("flat(3):", deep.flat(3));  // [1, 2, 3, 4, [5]]
console.log("flat(Infinity):", deep.flat(Infinity));  // [1, 2, 3, 4, 5]

// ----- 3. Removing Empty Slots -----
console.log("\n=== REMOVING EMPTY SLOTS ===");

let sparse = [1, , 3, , 5];
console.log("Sparse array:", sparse);     // [1, empty, 3, empty, 5]

let clean = sparse.flat();
console.log("After flat():", clean);  // [1, 3, 5]  ← empty slots removed!

// ----- 4. flatMap() — Map then Flatten -----
console.log("\n=== flatMap() ===");

let sentences = ["Hello world", "JavaScript is fun", "I love coding"];

// Split each sentence into words, then flatten
let words = sentences.flatMap(s => s.split(" "));
console.log("Words:", words);
// ["Hello", "world", "JavaScript", "is", "fun", "I", "love", "coding"]

// Same as: sentences.map(s => s.split(" ")).flat()
// But flatMap does it in one pass — more efficient

// flatMap with numbers
let nums = [1, 2, 3, 4];
let expanded = nums.flatMap(n => [n, n * 10]);
console.log("Expanded:", expanded);  // [1, 10, 2, 20, 3, 30, 4, 40]

// ----- 5. flatMap vs map + flat -----
console.log("\n=== flatMap vs map + flat ===");

let data = [1, 2, 3, 4, 5];

// map then flat
let result1 = data.map(n => [n, n * n]).flat();
console.log("map + flat:", result1);  // [1, 1, 2, 4, 3, 9, 4, 16, 5, 25]

// flatMap (same result, single operation)
let result2 = data.flatMap(n => [n, n * n]);
console.log("flatMap:", result2);     // [1, 1, 2, 4, 3, 9, 4, 16, 5, 25]

// ----- 6. Practical Examples -----
console.log("\n=== REAL-WORLD EXAMPLES ===");

// Example: Get all tags from blog posts
let posts = [
    { title: "Post 1", tags: ["js", "array"] },
    { title: "Post 2", tags: ["function", "scope"] },
    { title: "Post 3", tags: ["js", "closure"] }
];

let allTags = posts.flatMap(p => p.tags);
console.log("All tags:", allTags);
// ["js", "array", "function", "scope", "js", "closure"]

// Remove duplicate tags
let uniqueTags = [...new Set(allTags)];
console.log("Unique tags:", uniqueTags);

// Example: Filter and expand in one go
let orders = [
    { id: 1, items: ["laptop", "mouse"] },
    { id: 2, items: ["keyboard"] },
    { id: 3, items: ["monitor", "laptop", "headphones"] }
];

// Get all items (flatten the items arrays)
let allItems = orders.flatMap(o => o.items);
console.log("All ordered items:", allItems);

// flatMap can filter by returning [] for items to exclude
let numbers2 = [1, -2, 3, -4, 5, -6];
let positivesWithNegativesDoubled = numbers2.flatMap(n => {
    if (n > 0) return [n];       // keep positive
    return [n, Math.abs(n)];     // keep negative and its absolute value
});
console.log("\nSpecial transform:", positivesWithNegativesDoubled);
// [1, -2, 2, 3, -4, 4, 5, -6, 6]

// flatMap as filter + map (return empty array to exclude)
let mixed2 = [1, 2, 3, 4, 5];
let evenDoubled = mixed2.flatMap(n => n % 2 === 0 ? [n * 2] : []);
console.log("\nFilter + map with flatMap:", evenDoubled);  // [4, 8]

// Same as: mixed2.filter(n => n % 2 === 0).map(n => n * 2)

// Example: Generate pairs
let chars = ["a", "b", "c"];
let pairs = chars.flatMap((c, i) => chars.slice(i + 1).map(c2 => [c, c2]));
console.log("Character pairs:", pairs);
// [["a","b"], ["a","c"], ["b","c"]]

// ----- 7. flat() for simple matrix operations -----
console.log("\n=== MATRIX / TABLE ===");

// Convert a 3x3 matrix to a single list
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let flattened = matrix.flat();
console.log("Matrix flattened:", flattened);  // [1,2,3,4,5,6,7,8,9]

// Sum all values in a matrix
let sum = matrix.flat().reduce((a, b) => a + b, 0);
console.log("Sum of matrix:", sum);  // 45

// =============================================
// SUMMARY
// flat(depth) → new array, flattened up to depth
//   - depth defaults to 1
//   - flat(Infinity) fully flattens
//   - Removes empty slots
//   - Does NOT modify original
//
// flatMap(fn) → map then flat(1) in one pass
//   - More efficient than map + flat
//   - Can filter by returning [] for excluded items
//   - Each element can produce 0, 1, or many output elements
// =============================================
