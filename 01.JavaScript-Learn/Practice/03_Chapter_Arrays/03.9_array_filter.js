// =============================================
// Program: filter() — Extract Elements by Condition
// =============================================
// filter() creates a NEW array with all elements that pass a test.
// Unlike find() which returns the FIRST match, filter() returns ALL matches.
// Does NOT modify the original array.
// =============================================

// ----- 1. Basic Filtering -----
console.log("=== BASIC FILTER ===");

let numbers = [5, 12, 8, 130, 44, 3, 99];

// Get all numbers greater than 10
let bigNumbers = numbers.filter(n => n > 10);
console.log("Numbers > 10:", bigNumbers);  // [12, 130, 44, 99]

// Get all even numbers
let evens = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);  // [12, 8, 130, 44]

// Get all numbers in a range
let range = numbers.filter(n => n >= 10 && n <= 50);
console.log("Between 10 and 50:", range);  // [12, 44]

// ----- 2. Filtering Objects -----
console.log("\n=== FILTERING OBJECTS ===");

let users = [
    { name: "Alice",   age: 25, active: true },
    { name: "Bob",     age: 17, active: false },
    { name: "Charlie", age: 30, active: true },
    { name: "Diana",   age: 15, active: true },
    { name: "Eve",     age: 22, active: false }
];

// Get all active users
let activeUsers = users.filter(u => u.active);
console.log("Active users:", activeUsers);

// Get all adults (age >= 18)
let adults = users.filter(u => u.age >= 18);
console.log("Adults:", adults.map(u => u.name));  // ["Alice", "Charlie", "Eve"]

// Get active adults
let activeAdults = users.filter(u => u.active && u.age >= 18);
console.log("Active adults:", activeAdults.map(u => u.name));  // ["Alice", "Charlie"]

// ----- 3. Filtering Strings -----
console.log("\n=== FILTERING STRINGS ===");

let fruits = ["apple", "banana", "apricot", "cherry", "avocado", "blueberry"];

// Get fruits starting with 'a'
let aFruits = fruits.filter(f => f.startsWith("a"));
console.log("Fruits starting with 'a':", aFruits);  // ["apple", "apricot", "avocado"]

// Get fruits with length > 6
let longFruits = fruits.filter(f => f.length > 6);
console.log("Long fruits:", longFruits);  // ["banana", "apricot", "avocado", "blueberry"]

// ----- 4. Removing Falsy Values -----
console.log("\n=== REMOVING FALSY VALUES ===");

let messyArray = [0, "hello", "", null, 42, undefined, false, "world", NaN];
let cleanArray = messyArray.filter(Boolean);
console.log("Original:", messyArray);
console.log("Filtered (truthy only):", cleanArray);  // ["hello", 42, "world"]

// Same as: messyArray.filter(item => !!item) or messyArray.filter(item => item)

// ----- 5. filter() with Index -----
console.log("\n=== USING INDEX ===");

let items = ["a", "b", "c", "d", "e"];

// Get elements at even indexes
let evenIndexed = items.filter((_, index) => index % 2 === 0);
console.log("Even indexed:", evenIndexed);  // ["a", "c", "e"]

// Remove duplicates (keep first occurrence)
let dupes = [1, 2, 2, 3, 4, 4, 5];
let unique = dupes.filter((val, idx, arr) => arr.indexOf(val) === idx);
console.log("Unique:", unique);  // [1, 2, 3, 4, 5]

// ----- 6. Real-world Examples -----
console.log("\n=== REAL-WORLD EXAMPLES ===");

// Search functionality
let products = [
    { name: "Laptop",    category: "electronics", price: 999 },
    { name: "Shirt",     category: "clothing",    price: 29 },
    { name: "Phone",     category: "electronics", price: 699 },
    { name: "Pants",     category: "clothing",    price: 49 },
    { name: "Tablet",    category: "electronics", price: 399 }
];

// Filter by category
let electronics = products.filter(p => p.category === "electronics");
console.log("Electronics:", electronics);

// Filter by price range
let affordable = products.filter(p => p.price > 30 && p.price < 500);
console.log("Affordable products:", affordable.map(p => p.name));

// Search by keyword
let keyword = "la";
let searchResults = products.filter(p =>
    p.name.toLowerCase().includes(keyword.toLowerCase())
);
console.log("Search for 'la':", searchResults.map(p => p.name));  // ["Laptop", "Tablet"]

// Example: Incomplete tasks
let todos = [
    { task: "Buy groceries",     done: true },
    { task: "Clean room",        done: false },
    { task: "Pay bills",         done: false },
    { task: "Walk dog",          done: true },
    { task: "Study JavaScript",  done: false }
];

let pending = todos.filter(t => !t.done);
console.log("\nPending todos:", pending.map(t => t.task));
// ["Clean room", "Pay bills", "Study JavaScript"]

let completed = todos.filter(t => t.done);
console.log("Completed todos:", completed.map(t => t.task));
// ["Buy groceries", "Walk dog"]

// ----- 7. filter() returns empty array when no match -----
console.log("\n=== EMPTY RESULT ===");

let noMatch = [1, 2, 3].filter(n => n > 10);
console.log("No match:", noMatch);  // []
console.log("Length:", noMatch.length);  // 0

// =============================================
// SUMMARY
// filter(fn) → new array with matching elements
// - callback: (element, index, array) => boolean
// - Returns ALL elements that pass the test
// - Original array is NOT modified (immutable)
// - Returns [] if no matches
// - filter(Boolean) removes all falsy values
// =============================================
