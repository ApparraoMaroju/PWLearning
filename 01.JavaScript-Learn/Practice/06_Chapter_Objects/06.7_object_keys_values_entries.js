// =============================================
// Program: OBJECT.KEYS / VALUES / ENTRIES
// =============================================
// Static Object methods for working with object data:
//   Object.keys(obj)    → array of keys
//   Object.values(obj)  → array of values
//   Object.entries(obj) → array of [key, value] pairs
// =============================================

// Example 1: Object.keys()
console.log("Example 1: Object.keys");

let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

let keys = Object.keys(person);
console.log("Keys:", keys);  // ['name', 'age', 'city']

console.log("");

// Example 2: Object.values()
console.log("Example 2: Object.values");

let values = Object.values(person);
console.log("Values:", values);  // ['Alice', 25, 'New York']

console.log("");

// Example 3: Object.entries()
console.log("Example 3: Object.entries");

let entries = Object.entries(person);
console.log("Entries:", entries);
// [['name', 'Alice'], ['age', 25], ['city', 'New York']]

console.log("");

// Example 4: Looping with entries (for...of)
console.log("Example 4: Loop with entries");

for (let [key, value] of Object.entries(person)) {
    console.log(`${key} = ${value}`);
}

console.log("");

// Example 5: Checking object length (no .length on objects)
console.log("Example 5: Object size");

let numberOfKeys = Object.keys(person).length;
console.log("Number of properties:", numberOfKeys);  // 3

console.log("");

// Example 6: Practical — sum of values
console.log("Example 6: Sum object values");

let scores = { math: 85, science: 90, english: 75 };

let total = Object.values(scores).reduce((sum, s) => sum + s, 0);
console.log("Total score:", total);  // 250

console.log("");

// Example 7: Practical — find a key by value
console.log("Example 7: Find key by value");

let countries = { US: "United States", IN: "India", FR: "France" };

function getKeyByValue(obj, targetValue) {
    for (let [key, value] of Object.entries(obj)) {
        if (value === targetValue) {
            return key;
        }
    }
    return null;
}

console.log("Key for 'India':", getKeyByValue(countries, "India"));  // "IN"
console.log("Key for 'Japan':", getKeyByValue(countries, "Japan"));  // null

console.log("");

// Example 8: Practical — transform objects
console.log("Example 8: Transform an object");

let prices = { apple: 1.5, banana: 0.5, cherry: 3.0 };

// Double every price:
let doubled = Object.fromEntries(
    Object.entries(prices).map(([fruit, price]) => [fruit, price * 2])
);

console.log("Doubled prices:", doubled);
// { apple: 3, banana: 1, cherry: 6 }

console.log("");

// Example 9: Keys/values of an empty object
console.log("Example 9: Empty object");

let emptyObj = {};
console.log("Keys:", Object.keys(emptyObj));    // []
console.log("Values:", Object.values(emptyObj)); // []

// =============================================
// SUMMARY
// - keys → property names; values → property values
// - entries → [key, value] pairs (loop-friendly)
// - Object.keys(obj).length = property count
// - Combine with map/filter/reduce for transformations
// - Object.fromEntries reverses entries → object
// =============================================
