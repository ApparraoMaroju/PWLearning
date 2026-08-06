// =============================================
// Program: FOR...IN LOOP
// =============================================
// The for...in loop iterates over the KEYS (property names)
// of an object. For arrays it gives you the INDEXES.
//   for (let key in object) {
//       // use object[key]
//   }
// =============================================

// Example 1: Basic for...in over an object
console.log("Example 1: Object keys");

let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

for (let key in person) {
    console.log("Key:", key);
}
// Output: name, age, city

console.log("");

// Example 2: Access values using the key
console.log("Example 2: Key-value pairs");

for (let key in person) {
    console.log(key, "=", person[key]);
}

console.log("");

// Example 3: for...in on arrays gives INDEXES (not values)
console.log("Example 3: Array indexes");

let fruits = ["apple", "banana", "cherry"];

for (let index in fruits) {
    console.log("Index:", index, "→ value:", fruits[index]);
}
// Note: index is a STRING ("0", "1", "2")

console.log("");

// Example 4: typeof of the index key
console.log("Example 4: Index type");

for (let i in fruits) {
    console.log(typeof i, "—", i);
}

console.log("");

// Example 5: Counting properties
console.log("Example 5: Count object properties");

let counter = 0;

for (let key in person) {
    counter++;
}
console.log("Person has", counter, "properties");

console.log("");

// Example 6: Checking if a property exists
console.log("Example 6: Build a report of present properties");

let settings = {
    theme: "dark",
    fontSize: 14,
    notifications: false
};

for (let key in settings) {
    console.log(`Setting "${key}" =`, settings[key]);
}

console.log("");

// Example 7: for...in vs for...of on objects
console.log("Example 7: for...in vs for...of");

// for...in → keys
for (let key in person) {
    console.log("for...in  →", key);
}

// for...of → needs Object.values() to get values
for (let value of Object.values(person)) {
    console.log("for...of  →", value);
}

console.log("");

// Example 8: Inherited properties are also visited
console.log("Example 8: hasOwnProperty() check");

let animal = { species: "dog" };
let dog = Object.create(animal);  // dog inherits from animal
dog.name = "Rex";

for (let key in dog) {
    if (dog.hasOwnProperty(key)) {
        console.log("Own property:", key);
    } else {
        console.log("Inherited property:", key);
    }
}
// Output: "Own property: name" then "Inherited property: species"

console.log("");

// Example 9: Why for...of is preferred for arrays
console.log("Example 9: for...of is safer for arrays");

// Use for...of for array VALUES:
for (let fruit of fruits) {
    console.log("for...of:", fruit);
}

// =============================================
// SUMMARY
// - for...in gives KEYS of an object (or INDEXES of an array)
// - Access values with object[key]
// - Array indexes come as strings
// - Prefer for...of for arrays (values), for...in for objects (keys)
// - Use hasOwnProperty() to skip inherited properties
// =============================================
