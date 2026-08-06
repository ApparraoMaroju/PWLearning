// =============================================
// Program: DESTRUCTURING  (ES6)
// =============================================
// Unpack values from arrays and objects into
// variables in one line.
//   let [a, b] = array;
//   let { x, y } = object;
// =============================================

// Example 1: Array destructuring
console.log("Example 1: Array destructuring");

let fruits = ["apple", "banana", "cherry"];

let [first, second, third] = fruits;

console.log("first:", first);    // "apple"
console.log("second:", second);  // "banana"
console.log("third:", third);    // "cherry"

console.log("");

// Example 2: Skipping elements
console.log("Example 2: Skipping");

let [a, , c] = [10, 20, 30];   // skip the second value

console.log("a:", a);  // 10
console.log("c:", c);  // 30

console.log("");

// Example 3: Rest pattern in arrays
console.log("Example 3: Rest in arrays");

let [head, ...tail] = [1, 2, 3, 4, 5];

console.log("head:", head);    // 1
console.log("tail:", tail);    // [2, 3, 4, 5]

console.log("");

// Example 4: Default values
console.log("Example 4: Defaults");

let [x = 10, y = 20] = [5];   // y has no value → default

console.log("x:", x);  // 5
console.log("y:", y);  // 20 (default used)

console.log("");

// Example 5: Object destructuring
console.log("Example 5: Object destructuring");

let person = { name: "Alice", age: 25, city: "NYC" };

let { name, age } = person;

console.log("name:", name);  // "Alice"
console.log("age:", age);    // 25

console.log("");

// Example 6: Renaming in object destructuring
console.log("Example 6: Renaming");

let { name: fullName, age: years } = person;

console.log("fullName:", fullName);  // "Alice"
console.log("years:", years);        // 25

console.log("");

// Example 7: Object destructuring with defaults + rest
console.log("Example 7: Defaults and rest");

let settings = { theme: "dark" };

let { theme, fontSize = 16, ...rest } = settings;

console.log("theme:", theme);        // "dark"
console.log("fontSize:", fontSize);  // 16 (default)
console.log("rest:", rest);          // {}

console.log("");

// Example 8: Swapping variables
console.log("Example 8: Swap values");

let p = 1;
let q = 2;

[p, q] = [q, p];   // one-line swap

console.log("p:", p, "| q:", q);  // 2 | 1

console.log("");

// Example 9: Destructuring function returns
console.log("Example 9: Function returns");

function getMinMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

let [min, max] = getMinMax([5, 2, 9, 1]);
console.log("min:", min, "| max:", max);  // 1 | 9

console.log("");

// Example 10: Nested destructuring
console.log("Example 10: Nested");

let data = {
    user: {
        id: 7,
        contact: { email: "a@b.com" }
    }
};

let { user: { id, contact: { email } } } = data;

console.log("id:", id);            // 7
console.log("email:", email);      // "a@b.com"

// =============================================
// SUMMARY
// - [a, b] = array — positional unpacking
// - { a, b } = obj — key-based unpacking
// - Skip with commas, rename with { a: newName }
// - ...rest collects the remainder
// - Defaults fill in missing values
// =============================================
