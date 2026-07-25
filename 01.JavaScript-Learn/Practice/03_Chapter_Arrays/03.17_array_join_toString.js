// =============================================
// Program: join(), toString(), toLocaleString() — Array to String
// =============================================
// These methods convert an array into a STRING.
// join()   → joins elements with a separator (most flexible)
// toString() → joins with comma (default, no separator control)
// toLocaleString() → locale-aware version
// =============================================

// ----- 1. join() — Join with Separator -----
console.log("=== join() ===");

let fruits = ["apple", "banana", "orange"];

// Default separator is comma
console.log("join():", fruits.join());        // "apple,banana,orange"

// Custom separator
console.log("join(' - '):", fruits.join(" - "));   // "apple - banana - orange"
console.log("join(', '):", fruits.join(", "));     // "apple, banana, orange"
console.log("join(' | '):", fruits.join(" | "));   // "apple | banana | orange"
console.log("join(''):", fruits.join(""));          // "applebananaorange"

// ----- 2. toString() — Comma Separated Only -----
console.log("\n=== toString() ===");

console.log("toString():", fruits.toString());  // "apple,banana,orange"

// Same as join() with no argument, but you can't set separator

// ----- 3. toLocaleString() — Locale-aware -----
console.log("\n=== toLocaleString() ===");

// For numbers, locale affects formatting
let numbers = [1000, 2000, 3000];
console.log("numbers.toString():", numbers.toString());        // "1000,2000,3000"
console.log("numbers.toLocaleString():", numbers.toLocaleString("en-US"));
// "1,000,2,000,3,000"  (US format with thousands separators)

// Different locales
console.log("German:", numbers.toLocaleString("de-DE"));
// "1.000,2.000,3.000"  (German format)

// ----- 4. join() with Different Data Types -----
console.log("\n=== JOIN WITH DIFFERENT TYPES ===");

let mixed = [1, "hello", true, null, undefined, [1, 2]];
console.log("join mixed:", mixed.join(", "));
// "1, hello, true, , , 1,2"  (null/undefined become empty, nested arrays are flattened)

// ----- 5. join() on Nested Arrays -----
console.log("\n=== NESTED ARRAYS ===");

let nested = [[1, 2], [3, 4], [5, 6]];
console.log("nested join(', '):", nested.join(", "));  // "1,2, 3,4, 5,6"
console.log("nested join(' | '):", nested.join(" | "));  // "1,2 | 3,4 | 5,6"

// ----- 6. Practical Examples -----
console.log("\n=== PRACTICAL EXAMPLES ===");

// URL/slug generation
let tags = ["javascript", "arrays", "tutorial"];
let url = "/tags/" + tags.join("/");
console.log("URL:", url);  // "/tags/javascript/arrays/tutorial"

// CSV-like output
let rows = [
    ["Name", "Age", "City"],
    ["Alice", 25, "New York"],
    ["Bob", 30, "London"],
    ["Charlie", 22, "Paris"]
];
let csv = rows.map(row => row.join(",")).join("\n");
console.log("CSV:\n" + csv);
// Name,Age,City
// Alice,25,New York
// Bob,30,London
// Charlie,22,Paris

// Build a sentence from words
let words = ["JavaScript", "is", "a", "powerful", "language"];
console.log("\nSentence:", words.join(" "));  // "JavaScript is a powerful language"

// Create a class list for HTML (simulated)
let classes = ["btn", "btn-primary", "active", "large"];
console.log("Class attribute:", classes.join(" "));  // "btn btn-primary active large"

// Path building
let parts = ["users", "123", "posts"];
let path = "/" + parts.join("/");
console.log("Path:", path);  // "/users/123/posts"

// ----- 7. Empty Array and Single Element -----
console.log("\n=== EDGE CASES ===");

console.log("[].join(','):", [].join(","));          // "" (empty string)
console.log("[1].join(','):", [1].join(","));        // "1"
console.log("[1, null, 2].join(',')", [1, null, 2].join(","));  // "1,,2"
console.log("[1, undefined, 2].join(',')", [1, undefined, 2].join(","));  // "1,,2"

// ----- 8. join() for Display/Formatting -----
console.log("\n=== FORMATTING ===");

// Numbered list
let items = ["Milk", "Bread", "Eggs"];
console.log("Shopping list:", items.map((item, i) => `${i + 1}. ${item}`).join(" | "));
// "1. Milk | 2. Bread | 3. Eggs"

// Array as bullet list
let list = fruits.map(f => `  - ${f}`).join("\n");
console.log("Bullet list:\n" + list);
//   - apple
//   - banana
//   - orange

// =============================================
// SUMMARY
// join(separator) → string with custom separator
//   - separator defaults to ","
//   - null/undefined → empty string
//   - Nested arrays are flattened one level
//
// toString() → comma-separated string (no separator control)
// toLocaleString(locale) → locale-aware formatting
//
// Common: .join(", "), .join(""), .join(" | "), .join("\n")
// =============================================
