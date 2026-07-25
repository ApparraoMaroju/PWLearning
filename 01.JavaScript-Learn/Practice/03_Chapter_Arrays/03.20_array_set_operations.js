// =============================================
// Program: Set Operations with Arrays
// =============================================
// Using Set and array methods to perform:
// - Unique values (deduplication)
// - Union (all unique from both)
// - Intersection (common to both)
// - Difference (in one but not the other)
// - Symmetric Difference (in either but not both)
// =============================================

// ----- 1. Removing Duplicates -----
console.log("=== REMOVING DUPLICATES ===");

let numbers = [1, 2, 2, 3, 4, 4, 4, 5, 5];
let unique = [...new Set(numbers)];
console.log("Original:", numbers);
console.log("Unique:", unique);  // [1, 2, 3, 4, 5]

// With strings
let fruits = ["apple", "banana", "apple", "orange", "banana"];
let uniqueFruits = [...new Set(fruits)];
console.log("Unique fruits:", uniqueFruits);  // ["apple", "banana", "orange"]

// Count unique items
console.log("Unique count:", new Set(numbers).size);  // 5

// ----- 2. Union (All Unique from Both Arrays) -----
console.log("\n=== UNION ===");

let arrA = [1, 2, 3, 4];
let arrB = [3, 4, 5, 6];

let union = [...new Set([...arrA, ...arrB])];
console.log("A:", arrA);
console.log("B:", arrB);
console.log("Union:", union);  // [1, 2, 3, 4, 5, 6]

// ----- 3. Intersection (Common Elements) -----
console.log("\n=== INTERSECTION ===");

let intersection = arrA.filter(item => arrB.includes(item));
console.log("Intersection:", intersection);  // [3, 4]

// With duplicates (use Set to deduplicate)
let arrX = [1, 2, 2, 3, 4];
let arrY = [2, 3, 3, 5];
let intersectionDeduped = [...new Set(arrX.filter(item => arrY.includes(item)))];
console.log("Intersection (deduped):", intersectionDeduped);  // [2, 3]

// ----- 4. Difference (In A but Not in B) -----
console.log("\n=== DIFFERENCE ===");

let diffA = arrA.filter(item => !arrB.includes(item));
console.log("In A but not B:", diffA);  // [1, 2]

let diffB = arrB.filter(item => !arrA.includes(item));
console.log("In B but not A:", diffB);  // [5, 6]

// ----- 5. Symmetric Difference (In Either, Not Both) -----
console.log("\n=== SYMMETRIC DIFFERENCE ===");

let symDiff = [
    ...arrA.filter(item => !arrB.includes(item)),
    ...arrB.filter(item => !arrA.includes(item))
];
console.log("Symmetric difference:", symDiff);  // [1, 2, 5, 6]

// ----- 6. Working with Objects (by property) -----
console.log("\n=== OBJECTS ===");

let usersA = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

let usersB = [
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "Diana" }
];

// Duplicate removal by property
let allUsers = [...usersA, ...usersB];
let uniqueById = [...new Map(allUsers.map(u => [u.id, u])).values()];
console.log("Unique by id:", uniqueById.map(u => u.name));
// ["Alice", "Bob", "Charlie", "Diana"]

// Intersection (by id)
let common = usersA.filter(a => usersB.some(b => b.id === a.id));
console.log("Common users:", common.map(u => u.name));  // ["Bob", "Charlie"]

// Difference (in A but not B by id)
let onlyInA = usersA.filter(a => !usersB.some(b => b.id === a.id));
console.log("Only in A:", onlyInA.map(u => u.name));  // ["Alice"]

// ----- 7. Practical Real-world Examples -----
console.log("\n=== REAL-WORLD ===");

// Tag management
let postTags = ["js", "array", "function", "scope"];
let userInterests = ["js", "react", "function", "css"];

let commonTags = postTags.filter(t => userInterests.includes(t));
console.log("Common tags:", commonTags);  // ["js", "function"]

let suggestedTags = userInterests.filter(t => !postTags.includes(t));
console.log("Suggested tags to add:", suggestedTags);  // ["react", "css"]

// Permission system
let userRoles = ["editor", "viewer"];
let requiredRoles = ["admin", "editor"];

let hasAnyRole = userRoles.some(r => requiredRoles.includes(r));
console.log("Has required role:", hasAnyRole);  // true ("editor")

let missingRoles = requiredRoles.filter(r => !userRoles.includes(r));
console.log("Missing roles:", missingRoles);  // ["admin"]

// Shopping cart comparison
let previousCart = ["laptop", "mouse", "keyboard"];
let currentCart = ["laptop", "monitor", "headphones"];

let removed = previousCart.filter(item => !currentCart.includes(item));
let added = currentCart.filter(item => !previousCart.includes(item));

console.log("\nCart changes:");
console.log("  Removed:", removed);     // ["mouse", "keyboard"]
console.log("  Added:", added);         // ["monitor", "headphones"]

// Checking if two arrays have any overlap
function haveCommonElements(arr1, arr2) {
    return arr1.some(item => arr2.includes(item));
}

console.log("\nAny common:", haveCommonElements([1, 2, 3], [3, 4, 5]));  // true
console.log("Any common:", haveCommonElements([1, 2], [3, 4]));          // false

// ----- 8. Helper Functions -----
console.log("\n=== HELPER FUNCTIONS ===");

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    return a.every((val, idx) => val === b[idx]);
}

function isSubset(subset, superset) {
    return subset.every(item => superset.includes(item));
}

console.log("Arrays equal:", arraysEqual([1, 2, 3], [1, 2, 3]));  // true
console.log("Arrays equal:", arraysEqual([1, 2], [2, 1]));         // false (order matters)
console.log("Is subset:", isSubset([1, 2], [1, 2, 3, 4]));         // true
console.log("Is subset:", isSubset([1, 5], [1, 2, 3]));            // false

// ----- 9. Set Conversion Notes -----
console.log("\n=== SET ===");

let set = new Set([1, 2, 3, 3, 4]);
console.log("Set:", set);  // Set(4) {1, 2, 3, 4}

// Set methods
set.add(5);
set.delete(1);
console.log("Set after add/delete:", set);  // Set(4) {2, 3, 4, 5}
console.log("Has 3:", set.has(3));          // true
console.log("Size:", set.size);             // 4

// Convert back to array
let backToArray = Array.from(set);
console.log("Back to array:", backToArray);  // [2, 3, 4, 5]

// =============================================
// SUMMARY
// Unique:        [...new Set(arr)]
// Union:         [...new Set([...a, ...b])]
// Intersection:  a.filter(x => b.includes(x))
// Difference:    a.filter(x => !b.includes(x))
// Sym Diff:      a.filter(x=>!b.includes(x)).concat(b.filter(x=>!a.includes(x)))
//
// For objects, use .some() or Map to compare by property/id
// Set also has: .add(), .delete(), .has(), .size, .clear()
// =============================================
