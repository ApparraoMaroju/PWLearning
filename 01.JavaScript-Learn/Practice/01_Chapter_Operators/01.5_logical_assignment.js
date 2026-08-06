// =============================================
// Program: LOGICAL ASSIGNMENT OPERATORS (ES2021)
// =============================================
// Combine a logical operator with an assignment.
//
//   &&=  assign only if the variable is TRUTHY
//   ||=  assign only if the variable is FALSY
//   ??=  assign only if the variable is null/undefined
// =============================================

// Example 1: &&= — assign if current value is truthy
console.log("Example 1: &&=");

let isLoggedIn = true;
let user = { name: "Alice" };

isLoggedIn &&= user;   // isLoggedIn is truthy → assign user
console.log("isLoggedIn:", isLoggedIn);  // { name: "Alice" }

let isLoggedOut = false;
isLoggedOut &&= user;  // false is falsy → NOT assigned
console.log("isLoggedOut:", isLoggedOut);  // false (unchanged)

console.log("");

// Example 2: ||= — assign if current value is falsy
console.log("Example 2: ||=");

let name = "";
name ||= "Guest";   // "" is falsy → assign "Guest"
console.log("name:", name);  // "Guest"

let existing = "Alice";
existing ||= "Guest";  // "Alice" is truthy → NOT assigned
console.log("existing:", existing);  // "Alice"

console.log("");

// Example 3: ??= — assign only if null/undefined
console.log("Example 3: ??=");

let settings = null;
settings ??= { theme: "light" };   // null → assign
console.log("settings:", settings);  // { theme: "light" }

let count = 0;
count ??= 100;   // 0 is NOT null/undefined → NOT assigned
console.log("count:", count);  // 0 (preserved)

let empty = "";
empty ??= "default";   // "" is NOT null/undefined → NOT assigned
console.log("empty:", empty);  // "" (preserved)

console.log("");

// Example 4: ||= vs ??= — the key difference
console.log("Example 4: ||= vs ??= with falsy-but-valid values");

let age = 0;         // 0 is a valid age!

age ||= 18;   // 0 is falsy → becomes 18 (WRONG for real data)
console.log("age after ||=:", age);  // 18

let realAge = 0;
realAge ??= 18;  // 0 is not null/undefined → stays 0 (CORRECT)
console.log("realAge after ??=:", realAge);  // 0

console.log("");

// Example 5: Long-form equivalents
console.log("Example 5: What the shortcuts mean");

let a = 0;
a ||= 10;
// is the same as:
// if (!a) { a = 10; }
console.log("a:", a);  // 10

let b = "hello";
b &&= "world";
// is the same as:
// if (b) { b = "world"; }
console.log("b:", b);  // "world"

let c = undefined;
c ??= "default";
// is the same as:
// if (c == null) { c = "default"; }
console.log("c:", c);  // "default"

console.log("");

// Example 6: Practical use — caching
console.log("Example 6: Cache with ||=");

let cache = {};

function getData(key) {
    cache[key] ||= "computed value for " + key;  // compute once, reuse after
    return cache[key];
}

console.log(getData("user"));
console.log(getData("user"));  // same cached value, no recompute
console.log("Cache contents:", cache);

// =============================================
// SUMMARY
// - &&= assign if truthy     (keep strong values)
// - ||= assign if falsy      (fill in defaults)
// - ??= assign if null/undefined (fill in missing, keep 0/""/false)
// - Use ??= over ||= when 0, "", or false are meaningful values
// =============================================
