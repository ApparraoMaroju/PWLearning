// =============================================
// Program: STRING BASICS
// =============================================
// Strings store text. You can use single quotes,
// double quotes, or backticks (template literals).
// Strings are IMMUTABLE — methods return new strings.
// =============================================

// Example 1: Three ways to create strings
console.log("Example 1: Creating strings");

let single = 'Single quotes';
let double = "Double quotes";
let backtick = `Backticks`;

console.log(single);
console.log(double);
console.log(backtick);

console.log("");

// Example 2: typeof and length
console.log("Example 2: typeof and length");

let message = "Hello, World!";

console.log("typeof message:", typeof message);  // "string"
console.log("length:", message.length);          // 13

console.log("");

// Example 3: Indexing — characters at positions
console.log("Example 3: Indexing");

let word = "JavaScript";

console.log("word[0]:", word[0]);        // "J"
console.log("word[4]:", word[4]);        // "S"
console.log("word[9]:", word[9]);        // "t"
console.log("word[10]:", word[10]);      // undefined (out of range)
console.log("word[-1]:", word[-1]);      // undefined (no negative indexing)

console.log("");

// Example 4: Last character
console.log("Example 4: Last character");

let name = "Alice";
let lastChar = name[name.length - 1];

console.log("name:", name, "| last char:", lastChar);  // "e"

console.log("");

// Example 5: Strings are IMMUTABLE
console.log("Example 5: Immutability");

let greeting = "Hello";
greeting[0] = "J";   // ❌ this does NOT work

console.log("greeting:", greeting);  // still "Hello"

// You must REASSIGN to change a string:
greeting = "Jello";
console.log("greeting after reassign:", greeting);  // "Jello"

console.log("");

// Example 6: Escaping characters
console.log("Example 6: Escape sequences");

let quote = "She said, \"Hello!\"";
console.log(quote);

let path = "C:\\Users\\name";
console.log(path);

let multiline = "Line 1\nLine 2";
console.log(multiline);

console.log("");

// Example 7: Empty string
console.log("Example 7: Empty string");

let empty = "";
console.log("empty length:", empty.length);  // 0
console.log("empty is falsy:", !empty);      // true

// =============================================
// SUMMARY
// - Strings: 'single', "double", `backtick`
// - .length gives the number of characters
// - Access characters with [index] (0-based)
// - Strings are immutable — reassign to change
// - Use \ for escaping special characters
// =============================================
