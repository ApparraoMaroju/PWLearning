// =============================================
// Program: STRING COMPARISON
// =============================================
// Comparing strings in JavaScript.
//   ===   — strict equality (case-sensitive)
//   > <   — alphabetical order (by Unicode code)
//   localeCompare() — locale-aware comparison
// =============================================

// Example 1: Equality with ===
console.log("Example 1: === equality");

console.log('"apple" === "apple":', "apple" === "apple");    // true
console.log('"apple" === "Apple":', "apple" === "Apple");    // false (case-sensitive)
console.log('"apple" === "banana":', "apple" === "banana");  // false

console.log("");

// Example 2: Case-insensitive equality
console.log("Example 2: Case-insensitive compare");

let userInput = "HELLO";
let expected = "hello";

console.log("Direct:", userInput === expected);  // false
console.log("Lowercased:", userInput.toLowerCase() === expected);  // true

console.log("");

// Example 3: Relational comparisons (alphabetical)
console.log("Example 3: < and >");

console.log('"apple" < "banana":', "apple" < "banana");   // true (a before b)
console.log('"banana" > "apple":', "banana" > "apple");   // true
console.log('"a" < "b":', "a" < "b");                     // true
console.log('"apple" < "apples":', "apple" < "apples");   // true (shorter = smaller)

console.log("");

// Example 4: The Unicode trap — uppercase sorts first
console.log("Example 4: Case affects ordering");

console.log('"Zebra" < "apple":', "Zebra" < "apple");  // true! (uppercase Z = 90, lowercase a = 97)
console.log('"A" < "a":', "A" < "a");                  // true (65 < 97)
console.log('"B" < "a":', "B" < "a");                  // true (66 < 97)

console.log("");

// Example 5: localeCompare() — proper alphabetical sorting
console.log("Example 5: localeCompare");

// Returns: negative (a before b), 0 (equal), positive (a after b)
console.log('"apple".localeCompare("banana"):', "apple".localeCompare("banana"));  // negative
console.log('"banana".localeCompare("apple"):', "banana".localeCompare("apple"));  // positive
console.log('"apple".localeCompare("apple"):', "apple".localeCompare("apple"));    // 0

// Case-insensitive:
console.log('"apple".localeCompare("Apple"):', "apple".localeCompare("Apple"));  // negative (still)

console.log("");

// Example 6: Sorting an array of strings
console.log("Example 6: Sorting strings");

let words = ["banana", "Apple", "cherry", "apple"];

let defaultSort = [...words].sort();
console.log("Default sort:", defaultSort);
// ['Apple', 'apple', 'banana', 'cherry'] (uppercase first!)

let localeSort = [...words].sort((a, b) => a.localeCompare(b));
console.log("localeCompare sort:", localeSort);
// ['Apple', 'apple', 'banana', 'cherry'] (case-insensitive-ish order)

console.log("");

// Example 7: Comparing user input to options
console.log("Example 7: Practical input matching");

let day = "MONDAY";
let validDays = ["monday", "tuesday", "wednesday"];

let matched = validDays.includes(day.toLowerCase());
console.log("Is valid day:", matched);  // true

console.log("");

// Example 8: Common mistakes
console.log("Example 8: Common mistakes");

// ❌ Using == instead of ===:
console.log('"" == 0:', "" == 0);       // true (loose equality converts!)
console.log('"" === 0:', "" === 0);     // false (strict)

// ❌ Comparing with a single = :
// if (name = "admin") { ... }  // assigns instead of compares!

// =============================================
// SUMMARY
// - === for equality (case-sensitive); lowercase both for case-insensitive
// - > < compare by Unicode code — uppercase letters sort first
// - localeCompare() is the reliable way for sorting
// - Always use === (never ==) when comparing strings
// =============================================
