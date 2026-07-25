// =============================================
// Program: Array Destructuring — Unpack Arrays Easily
// =============================================
// Destructuring lets you extract array elements into variables
// in a single, clean statement. Introduced in ES6.
// =============================================

// ----- 1. Basic Destructuring -----
console.log("=== BASIC DESTRUCTURING ===");

let fruits = ["apple", "banana", "orange"];

// Old way
let first = fruits[0];
let second = fruits[1];

// Destructuring (new way)
let [a, b, c] = fruits;
console.log("a:", a);  // "apple"
console.log("b:", b);  // "banana"
console.log("c:", c);  // "orange"

// ----- 2. Skipping Elements -----
console.log("\n=== SKIPPING ELEMENTS ===");

let colors = ["red", "green", "blue", "yellow"];

// Skip the second element
let [red, , blue] = colors;
console.log("red:", red);   // "red"
console.log("blue:", blue); // "blue" (third element, not "blue" value)

// ----- 3. Rest Pattern (...) -----
console.log("\n=== REST PATTERN ===");

let numbers = [1, 2, 3, 4, 5];

// Get first, then rest
let [firstNum, ...rest] = numbers;
console.log("First:", firstNum);     // 1
console.log("Rest:", rest);          // [2, 3, 4, 5]

// Get first two, rest
let [x, y, ...others] = numbers;
console.log("x:", x, "y:", y);           // 1, 2
console.log("Others:", others);          // [3, 4, 5]

// rest must be the LAST element (syntax error otherwise)
// let [...rest, last] = arr;  // ❌ SyntaxError

// ----- 4. Default Values -----
console.log("\n=== DEFAULT VALUES ===");

let incomplete = ["hello"];

// Provide default when value is undefined
let [greeting, farewell = "Goodbye"] = incomplete;
console.log("greeting:", greeting);  // "hello"
console.log("farewell:", farewell);  // "Goodbye" (default used)

// Without default
let [greeting2, farewell2] = incomplete;
console.log("farewell2:", farewell2);  // undefined

// Default with nested arrays
let [p, q = 10, r = 20] = [1, undefined, 3];
console.log(p, q, r);  // 1, 10, 3

// ----- 5. Swapping Variables (Elegant!) -----
console.log("\n=== SWAPPING ===");

let left = "A";
let right = "B";

console.log("Before: left =", left, ", right =", right);

// Swap without temporary variable!
[left, right] = [right, left];

console.log("After:  left =", left, ", right =", right);
// left = "B", right = "A"

// Practical: sort two numbers
let num1 = 10, num2 = 5;
if (num1 > num2) [num1, num2] = [num2, num1];
console.log("Sorted:", num1, num2);  // 5, 10

// ----- 6. Nested Array Destructuring -----
console.log("\n=== NESTED DESTRUCTURING ===");

let nested = [1, [2, 3], 4];

// Extract inner array elements
let [one, [two, three], four] = nested;
console.log("one:", one, "two:", two, "three:", three, "four:", four);
// 1, 2, 3, 4

// ----- 7. Destructuring Function Return Values -----
console.log("\n=== FUNCTION RETURNS ===");

function getMinMax(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    return [min, max];
}

let scores = [85, 92, 60, 78, 95];
let [lowest, highest] = getMinMax(scores);
console.log("Lowest:", lowest);   // 60
console.log("Highest:", highest); // 95

// Function that returns multiple values
function getCoordinates() {
    return [10, 20, 30];
}

let [px, py, pz] = getCoordinates();
console.log("x:", px, "y:", py, "z:", pz);  // 10, 20, 30

// Ignore some returned values
let [xCoord, , zCoord] = getCoordinates();
console.log("Only x and z:", xCoord, zCoord);  // 10, 30

// ----- 8. Destructuring in Function Parameters -----
console.log("\n=== FUNCTION PARAMETERS ===");

function printFirstTwo([first, second]) {
    console.log(`First: ${first}, Second: ${second}`);
}

printFirstTwo(["JavaScript", "Python", "Ruby"]);  // First: JavaScript, Second: Python

// With rest
function processArray([head, ...tail]) {
    console.log("Head:", head);
    console.log("Tail:", tail);
}
processArray([1, 2, 3, 4]);
// Head: 1
// Tail: [2, 3, 4]

// ----- 9. Practical Real-world Examples -----
console.log("\n=== REAL-WORLD ===");

// API response parsing
let apiResponse = {
    data: {
        results: [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" }
        ]
    }
};

let { data: { results: [firstUser, secondUser] } } = apiResponse;
console.log("First user:", firstUser.name);   // "Alice"
console.log("Second user:", secondUser.name); // "Bob"

// Splitting strings
let fullName = "John Doe";
let [firstName, lastName] = fullName.split(" ");
console.log("First:", firstName, "Last:", lastName);  // John, Doe

// Extract from RegExp match
let dateStr = "2024-01-15";
let [, year, month, day] = dateStr.match(/(\d{4})-(\d{2})-(\d{2})/) || [];
console.log("Year:", year, "Month:", month, "Day:", day);  // 2024, 01, 15

// Zip two arrays (combine)
let names = ["Alice", "Bob", "Charlie"];
let ages = [25, 30, 22];
let zipped = names.map((name, i) => [name, ages[i]]);
zipped.forEach(([name, age]) => {
    console.log(`${name} is ${age} years old`);
});
// Alice is 25 years old
// Bob is 30 years old
// Charlie is 22 years old

// =============================================
// SUMMARY
// let [var1, var2, ...rest] = array
// - Extract elements by position
// - Skip with empty: let [a, , b] = arr
// - Rest (...rest) collects remaining elements (must be last)
// - Default: let [a = "default"] = arr
// - Swap: [a, b] = [b, a]
// - Works with nested arrays and function returns
// =============================================
