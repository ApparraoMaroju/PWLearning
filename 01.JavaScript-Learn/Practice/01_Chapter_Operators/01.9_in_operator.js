// =============================================
// Program: in OPERATOR
// =============================================
// Checks whether a PROPERTY exists in an object
// (including inherited properties). Returns true/false.
//
//   "propertyName" in object
// =============================================

// Example 1: Basic in operator with objects
console.log("Example 1: Check object properties");

let person = {
    name: "Alice",
    age: 25
};

console.log("'name' in person →", "name" in person);    // true
console.log("'age' in person  →", "age" in person);     // true
console.log("'city' in person →", "city" in person);    // false (not defined)

console.log("");

// Example 2: The property exists even if value is undefined
console.log("Example 2: Value is undefined but key exists");

let obj = { a: undefined };

console.log("'a' in obj →", "a" in obj);        // true (key exists)
console.log("obj.a      →", obj.a);             // undefined (value is undefined)

// Compare: checking the value directly
console.log("obj.a !== undefined →", obj.a !== undefined);  // false — but key exists!

console.log("");

// Example 3: Difference between `in` and direct access
console.log("Example 3: in vs truthiness");

let settings = { theme: "dark" };

console.log("'theme' in settings →", "theme" in settings);       // true
console.log("settings.theme      →", settings.theme);            // "dark"
console.log("'fontSize' in settings →", "fontSize" in settings); // false

// Common bug:
console.log("settings.fontSize ? 'yes' : 'no' →", settings.fontSize ? "yes" : "no");
// returns "no" because fontSize is undefined (falsy) — but it also doesn't exist.

console.log("");

// Example 4: With arrays (checks INDEX, not values)
console.log("Example 4: Arrays");

let fruits = ["apple", "banana"];

console.log("0 in fruits      →", 0 in fruits);    // true  (index 0 exists)
console.log("1 in fruits      →", 1 in fruits);    // true
console.log("2 in fruits      →", 2 in fruits);    // false (only 2 items: indexes 0,1)
console.log("'length' in fruits →", "length" in fruits);  // true (length is a property)
console.log("'apple' in fruits  →", "apple" in fruits);   // false (checks indexes, not values)

console.log("");

// Example 5: In a condition
console.log("Example 5: in with if");

let config = {
    showBanner: true
};

if ("showBanner" in config) {
    console.log("Config has showBanner:", config.showBanner);
} else {
    console.log("showBanner not configured — using default.");
}

console.log("");

// Example 6: Inherited properties
console.log("Example 6: Inherited properties");

let animal = { species: "dog" };
let dog = Object.create(animal);  // dog inherits from animal
dog.name = "Rex";

console.log("'name' in dog    →", "name" in dog);       // true (own property)
console.log("'species' in dog →", "species" in dog);    // true (inherited)
console.log("dog.hasOwnProperty('species') →", dog.hasOwnProperty("species"));  // false

console.log("");

// Example 7: `in` with built-in object methods
console.log("Example 7: Built-in methods");

let arr = [1, 2, 3];

console.log("'push' in arr →", "push" in arr);      // true (Array method)
console.log("'toString' in arr →", "toString" in arr);  // true (inherited from Object)

console.log("");

// Example 8: Checking for object keys dynamically
console.log("Example 8: Dynamic key check");

let keyToCheck = "age";
console.log("keyToCheck =", keyToCheck);

if (keyToCheck in person) {
    console.log("Found:", person[keyToCheck]);
} else {
    console.log("Key", keyToCheck, "not in person.");
}

// =============================================
// SUMMARY
// - "key" in obj → true if the key EXISTS (value may be undefined)
// - Works on arrays too — checks INDEXES, not values
// - Includes inherited properties (use hasOwnProperty to exclude)
// - Use when you must know a key exists, not just its value
// =============================================
