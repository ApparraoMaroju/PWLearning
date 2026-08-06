// =============================================
// Program: OBJECT BASICS
// =============================================
// Objects store data as KEY: VALUE pairs.
//   let obj = { key: value, key2: value2 };
// Access values with dot notation or brackets.
// =============================================

// Example 1: Creating an object
console.log("Example 1: Object literal");

let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

console.log(person);

console.log("");

// Example 2: Accessing properties — dot notation
console.log("Example 2: Dot notation");

console.log("person.name:", person.name);   // "Alice"
console.log("person.age:", person.age);     // 25
console.log("person.city:", person.city);   // "New York"

console.log("");

// Example 3: Bracket notation
console.log("Example 3: Bracket notation");

console.log('person["name"]:', person["name"]);  // "Alice"
console.log('person["age"]:', person["age"]);    // 25

// Bracket notation is needed for dynamic keys:
let key = "city";
console.log("person[key]:", person[key]);  // "New York"

console.log("");

// Example 4: Adding and updating properties
console.log("Example 4: Add / update");

person.email = "alice@example.com";   // add a new property
person.age = 26;                      // update an existing one

console.log("After updates:", person);

console.log("");

// Example 5: Deleting properties
console.log("Example 5: Delete");

delete person.city;   // remove the property
console.log("After delete:", person);
console.log("person.city:", person.city);  // undefined

console.log("");

// Example 6: Accessing missing properties
console.log("Example 6: Missing properties");

let obj = { a: 1 };
console.log("obj.b:", obj.b);  // undefined (not an error)

console.log("");

// Example 7: Objects with various value types
console.log("Example 7: Mixed value types");

let product = {
    name: "Laptop",
    price: 999.99,
    inStock: true,
    tags: ["electronics", "computer"],   // array
    specs: { ram: "16GB", storage: "512GB" },  // nested object
    discount: null
};

console.log("product.name:", product.name);
console.log("product.tags[0]:", product.tags[0]);
console.log("product.specs.ram:", product.specs.ram);   // nested access
console.log("product.specs.storage:", product.specs.storage);

console.log("");

// Example 8: Checking if a property exists
console.log("Example 8: Property existence");

console.log("'name' in product:", "name" in product);      // true
console.log("'brand' in product:", "brand" in product);    // false
console.log("product.price !== undefined:", product.price !== undefined);  // true

// =============================================
// SUMMARY
// - Objects = { key: value } pairs
// - Dot notation (obj.key) or bracket (obj["key"])
// - Bracket for dynamic keys; dot is cleaner
// - Add/update with assignment; delete with delete
// - Missing properties → undefined
// =============================================
