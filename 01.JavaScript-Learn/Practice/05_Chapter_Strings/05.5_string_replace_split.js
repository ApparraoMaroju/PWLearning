// =============================================
// Program: STRING REPLACE & SPLIT
// =============================================
//   replace / replaceAll — swap text
//   split — break a string into an array
//   join — the reverse (array → string)
// =============================================

// Example 1: replace() — replaces the FIRST match only
console.log("Example 1: replace");

let sentence = "The cat sat on the mat. The cat was happy.";

let first = sentence.replace("cat", "dog");
console.log("After replace:", first);
// "The dog sat on the mat. The cat was happy." (only FIRST cat changed)

console.log("");

// Example 2: replaceAll() — replaces EVERY match
console.log("Example 2: replaceAll");

let all = sentence.replaceAll("cat", "dog");
console.log("After replaceAll:", all);
// "The dog sat on the mat. The dog was happy."

console.log("");

// Example 3: replace with a regular expression
console.log("Example 3: replace with regex");

let code = "Error 404: Page not found. Try error 500 instead.";

let fixed = code.replace(/error/gi, "status");   // g=global, i=ignore case
console.log("fixed:", fixed);

console.log("");

// Example 4: replace using a function
console.log("Example 4: replace with callback");

let nums = "Numbers: 5, 12, 7";

let doubled = nums.replace(/[0-9]+/g, (match) => Number(match) * 2);
console.log("doubled:", doubled);  // "Numbers: 10, 24, 14"

console.log("");

// Example 5: split() — string to array
console.log("Example 5: split");

let csv = "apple,banana,cherry";

let fruits = csv.split(",");
console.log("split by ',':", fruits);  // ['apple', 'banana', 'cherry']

console.log("split by ', ':", "a, b, c".split(", "));  // ['a', 'b', 'c']
console.log("split every char:", "abc".split(""));     // ['a', 'b', 'c']
console.log("split by space:", "Hello world".split(" "));  // ['Hello', 'world']

console.log("");

// Example 6: split with limit
console.log("Example 6: split with limit");

let text = "one two three four";
console.log("split(' ', 3):", text.split(" ", 3));  // ['one', 'two', 'three']

console.log("");

// Example 7: join() — array to string
console.log("Example 7: join");

let words = ["Hello", "world", "!"];
console.log("join(' '):", words.join(" "));   // "Hello world !"
console.log("join('-'):", words.join("-"));   // "Hello-world-!"
console.log("join():", words.join());         // "Hello,world,!" (default comma)

console.log("");

// Example 8: Practical — sentence to words, back to sentence
console.log("Example 8: Practical pipeline");

let paragraph = "Learning JavaScript is fun";

let wordArray = paragraph.split(" ");                 // split
console.log("Words:", wordArray);

let backTogether = wordArray.join(" ");               // join
console.log("Joined:", backTogether);

// Word count:
console.log("Word count:", wordArray.length);  // 4

console.log("");

// Example 9: Practical — clean up extra spaces
console.log("Example 9: Remove extra spaces");

let messy = "  too    many   spaces  ";
let clean = messy.trim().split(/\s+/).join(" ");
console.log("clean:", JSON.stringify(clean));  // "too many spaces"

// =============================================
// SUMMARY
// - replace replaces first match; replaceAll replaces all
// - Regex /pattern/g with flags for powerful matching
// - split turns a string into an array
// - join turns an array back into a string
// =============================================
