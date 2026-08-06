// =============================================
// Program: OBJECT SPREAD & Object.assign
// =============================================
// Two ways to copy/merge objects:
//   { ...obj }          — spread operator (ES2018)
//   Object.assign(...)  — older, but still used
// =============================================

// Example 1: Copying with spread
console.log("Example 1: Spread copy");

let original = { name: "Alice", age: 25 };
let copy = { ...original };

console.log("original:", original);
console.log("copy:", copy);   // same content

// They are SEPARATE objects:
copy.name = "Bob";
console.log("original.name:", original.name);  // "Alice" (unchanged)
console.log("copy.name:", copy.name);          // "Bob"

console.log("");

// Example 2: Copying with Object.assign
console.log("Example 2: Object.assign copy");

let source = { x: 1, y: 2 };
let assigned = Object.assign({}, source);

console.log("assigned:", assigned);  // { x: 1, y: 2 }

console.log("");

// Example 3: Merging objects with spread
console.log("Example 3: Merge with spread");

let defaults = { theme: "dark", fontSize: 14, showBanner: true };
let userPrefs = { fontSize: 18 };   // overrides only this

let merged = { ...defaults, ...userPrefs };
console.log("merged:", merged);
// { theme: 'dark', fontSize: 18, showBanner: true }
// Later objects WIN on conflicts.

console.log("");

// Example 4: Merging with Object.assign
console.log("Example 4: Merge with assign");

let merged2 = Object.assign({}, defaults, userPrefs);
console.log("merged2:", merged2);  // same result

console.log("");

// Example 5: Adding properties with spread
console.log("Example 5: Add while spreading");

let base = { type: "book" };
let extended = { ...base, pages: 300, inStock: true };
console.log("extended:", extended);

console.log("");

// Example 6: Practical — updating objects immutably
console.log("Example 6: Immutable update");

let user = { id: 1, name: "Alice", role: "viewer" };

// Instead of mutating:
// user.role = "admin";

// Create a NEW object with the change:
let promoted = { ...user, role: "admin" };

console.log("user:", user);            // unchanged
console.log("promoted:", promoted);    // role updated

console.log("");

// Example 7: Shallow copy limitation
console.log("Example 7: Shallow copy warning");

let nested = {
    name: "Team",
    members: ["Alice", "Bob"]
};

let nestedCopy = { ...nested };

// The nested ARRAY is still SHARED:
nestedCopy.members.push("Carol");

console.log("nested.members:", nested.members);  // ['Alice', 'Bob', 'Carol'] (shared!)
console.log("nestedCopy.members:", nestedCopy.members);

console.log("");

// Example 8: Spread with arrays too
console.log("Example 8: Spread arrays");

let arr1 = [1, 2, 3];
let arr2 = [4, 5];

let combined = [...arr1, ...arr2];
console.log("combined:", combined);  // [1, 2, 3, 4, 5]

// =============================================
// SUMMARY
// - { ...obj } — clean copy/merge, later keys win
// - Object.assign(target, ...sources) — same idea
// - Great for immutable updates (new object each time)
// - Both are SHALLOW — nested objects/arrays are shared
// =============================================
