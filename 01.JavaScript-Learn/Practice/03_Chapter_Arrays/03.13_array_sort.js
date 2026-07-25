// =============================================
// Program: sort() and reverse() — Ordering Arrays
// =============================================
// sort()    → sorts elements IN-PLACE (modifies original), returns sorted array
// reverse() → reverses elements IN-PLACE (modifies original), returns reversed array
// Default sort converts elements to strings first — which causes bugs with numbers!
// Always provide a compare function for numbers.
// =============================================

// ----- 1. Default sort (STRING sort!) -----
console.log("=== DEFAULT SORT (STRING) ===");

let fruits = ["banana", "apple", "cherry", "date"];
fruits.sort();
console.log("Sorted fruits:", fruits);  // ["apple", "banana", "cherry", "date"]

// WORKS for strings — but FAILS for numbers!
let numbers = [10, 5, 80, 2, 35];
numbers.sort();
console.log("Numbers sorted default:", numbers);
// [10, 2, 35, 5, 80]  ← WRONG! Sorted as strings: "10" < "2" < "35" < "5" < "80"

// ----- 2. Proper Number Sort with Compare Function -----
console.log("\n=== PROPER NUMBER SORT ===");

numbers = [10, 5, 80, 2, 35];

// Ascending (a - b)
numbers.sort((a, b) => a - b);
console.log("Ascending:", numbers);  // [2, 5, 10, 35, 80]

// Descending (b - a)
numbers.sort((a, b) => b - a);
console.log("Descending:", numbers);  // [80, 35, 10, 5, 2]

// How the compare function works:
// a - b < 0  → a comes first (ascending)
// a - b > 0  → b comes first
// a - b = 0  → keep original order

// ----- 3. Sorting Objects by Property -----
console.log("\n=== SORTING OBJECTS ===");

let users = [
    { name: "Charlie", age: 22, salary: 50000 },
    { name: "Alice",   age: 30, salary: 75000 },
    { name: "Bob",     age: 25, salary: 60000 }
];

// Sort by age (ascending)
let byAge = [...users].sort((a, b) => a.age - b.age);
console.log("By age (asc):", byAge.map(u => `${u.name}:${u.age}`));

// Sort by name (alphabetical)
let byName = [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log("By name:", byName.map(u => u.name));

// Sort by salary (descending)
let bySalary = [...users].sort((a, b) => b.salary - a.salary);
console.log("By salary (desc):", bySalary.map(u => `${u.name}:$${u.salary}`));

// ----- 4. Sorting Strings with localeCompare -----
console.log("\n=== LOCALE-AWARE SORT ===");

let words = ["résumé", "apple", "Zebra", "ñandú", "banana", "Éclair"];

// Default (may not handle accented chars well)
words.sort();
console.log("Default:", words);

// Locale-aware (handles accents, case correctly)
words.sort((a, b) => a.localeCompare(b));
console.log("localeCompare:", words);
// "apple", "banana", "Éclair", "ñandú", "résumé", "Zebra"

// Case-insensitive sort (simple)
let mixed = ["cat", "Banana", "apple", "Dog"];
mixed.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("Case-insensitive:", mixed);  // ["apple", "Banana", "cat", "Dog"]

// ----- 5. reverse() — Reverse Order -----
console.log("\n=== reverse() ===");

let letters = ["a", "b", "c", "d", "e"];
console.log("Original:", letters);

letters.reverse();
console.log("Reversed:", letters);  // ["e", "d", "c", "b", "a"]

// Reverse again to get back
letters.reverse();
console.log("Reversed back:", letters);  // ["a", "b", "c", "d", "e"]

// Practical: Get last 3 in reverse order
let scores = [88, 72, 95, 63, 84];
let last3Reversed = scores.slice(-3).reverse();
console.log("Last 3 reversed:", last3Reversed);  // [84, 63, 95]

// ----- 6. Chain sort with reverse for descending -----
console.log("\n=== CHAINING ===");

let nums = [4, 1, 7, 3, 9, 2];

// Sort ascending then reverse to get descending
nums.sort((a, b) => a - b).reverse();
console.log("Sorted desc (sort+reverse):", nums);  // [9, 7, 4, 3, 2, 1]

// Or just use b - a directly
nums.sort((a, b) => b - a);
console.log("Sorted desc (b-a):", nums);  // [9, 7, 4, 3, 2, 1]

// ----- 7. Important: sort() modifies original array -----
console.log("\n=== MUTATION (IMPORTANT) ===");

let original = [3, 1, 4, 1, 5];
let sorted = original.sort((a, b) => a - b);

console.log("Original array:", original);  // [1, 1, 3, 4, 5]  ← CHANGED!
console.log("Sorted array:", sorted);      // [1, 1, 3, 4, 5]
console.log("Same reference?", original === sorted);  // true (same array)

// To avoid mutation, make a copy first:
let values = [3, 1, 4, 1, 5];
let copySorted = [...values].sort((a, b) => a - b);
console.log("\nCopy technique:");
console.log("Original preserved:", values);  // [3, 1, 4, 1, 5]
console.log("Copy sorted:", copySorted);      // [1, 1, 3, 4, 5]

// Also works with .slice().sort()
let copySorted2 = values.slice().sort((a, b) => a - b);

// ----- 8. Real-world Sorting Examples -----
console.log("\n=== REAL-WORLD ===");

// Sort products by price
let products = [
    { name: "Laptop",   price: 999 },
    { name: "Mouse",    price: 25 },
    { name: "Monitor",  price: 300 },
    { name: "Keyboard", price: 75 }
];

let cheapest = [...products].sort((a, b) => a.price - b.price);
console.log("Cheapest first:");
cheapest.forEach(p => console.log(`  $${p.price} — ${p.name}`));

// Sort dates (as strings)
let dates = ["2024-01-15", "2023-06-10", "2025-03-20"];
dates.sort();
console.log("\nDates sorted (ISO format works!):", dates);
// ISO format sorts correctly as strings

// Sort by multiple criteria
let people = [
    { name: "Alice",   age: 25 },
    { name: "Bob",     age: 25 },
    { name: "Charlie", age: 30 },
    { name: "Diana",   age: 25 }
];

// Sort by age first, then by name
people.sort((a, b) => {
    if (a.age !== b.age) return a.age - b.age;
    return a.name.localeCompare(b.name);
});
console.log("\nMulti-sort (age, then name):");
people.forEach(p => console.log(`  ${p.name}: ${p.age}`));

// =============================================
// SUMMARY
// sort(fn) → sorts IN-PLACE, returns the array
// reverse() → reverses IN-PLACE, returns the array
//
// Compare functions:
//   a - b  → ascending
//   b - a  → descending
//   a.localeCompare(b) → string sort (handles accents/case)
//
// Always provide a comparison function for numbers!
// Use [...arr].sort() or arr.slice().sort() to avoid mutation
// =============================================
