// =============================================
// Program: STRING METHODS — BASIC
// =============================================
// Common string methods. Strings are immutable,
// so these methods return NEW strings.
// =============================================

// Example 1: toUpperCase() and toLowerCase()
console.log("Example 1: Case conversion");

let text = "Hello World";

console.log("toUpperCase:", text.toUpperCase());  // "HELLO WORLD"
console.log("toLowerCase:", text.toLowerCase());  // "hello world"
console.log("original:", text);                   // unchanged (immutable)

console.log("");

// Example 2: trim() — remove whitespace from both ends
console.log("Example 2: trim");

let padded = "   spaced out   ";
console.log("trimmed:", JSON.stringify(padded.trim()));  // "spaced out"
console.log("trimStart:", JSON.stringify(padded.trimStart()));  // "spaced out   "
console.log("trimEnd:", JSON.stringify(padded.trimEnd()));  // "   spaced out"

console.log("");

// Example 3: includes() — check if a substring exists
console.log("Example 3: includes");

let sentence = "The quick brown fox";

console.log('includes("quick"):', sentence.includes("quick"));   // true
console.log('includes("cat"):', sentence.includes("cat"));       // false
console.log('includes("FOX"):', sentence.includes("FOX"));       // false (case-sensitive)

console.log("");

// Example 4: indexOf() — find position of a substring
console.log("Example 4: indexOf");

console.log('indexOf("quick"):', sentence.indexOf("quick"));   // 4
console.log('indexOf("brown"):', sentence.indexOf("brown"));   // 10
console.log('indexOf("cat"):', sentence.indexOf("cat"));       // -1 (not found)

// indexOf with a start position:
console.log('indexOf("o", 8):', sentence.indexOf("o", 8));     // first "o" after index 8

console.log("");

// Example 5: slice() — extract a portion
console.log("Example 5: slice");

let word = "JavaScript";

console.log("slice(0, 4):", word.slice(0, 4));       // "Java"
console.log("slice(4):", word.slice(4));             // "Script"
console.log("slice(-6):", word.slice(-6));           // "Script" (negative = from end)
console.log("slice(0, -4):", word.slice(0, -4));     // "Java" (up to 4 from end)

console.log("");

// Example 6: substring() — similar to slice (no negatives)
console.log("Example 6: substring");

console.log("substring(0, 4):", word.substring(0, 4));  // "Java"
console.log("substring(4, 0):", word.substring(4, 0));  // "Java" (swaps arguments!)

console.log("");

// Example 7: charAt() and charCodeAt()
console.log("Example 7: charAt / charCodeAt");

console.log('charAt(0):', word.charAt(0));        // "J"
console.log('charAt(9):', word.charAt(9));        // "t"
console.log('charCodeAt(0):', word.charCodeAt(0)); // 74 (Unicode value of "J")

console.log("");

// Example 8: Practical — cleaning user input
console.log("Example 8: Practical input cleaning");

let userInput = "  ALICE@Example.COM  ";
let cleaned = userInput.trim().toLowerCase();

console.log("cleaned:", cleaned);  // "alice@example.com"

// =============================================
// SUMMARY
// - toUpperCase / toLowerCase — change case
// - trim — remove whitespace
// - includes / indexOf — search
// - slice / substring — extract parts
// - charAt / charCodeAt — character access
// - All return new strings (originals unchanged)
// =============================================
