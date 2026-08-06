// =============================================
// Program: OBJECT DESTRUCTURING  (ES6)
// =============================================
// Destructuring unpacks object properties into
// individual variables in one line.
//   let { a, b } = obj;
// =============================================

// Example 1: Basic destructuring
console.log("Example 1: Basic destructuring");

let person = { name: "Alice", age: 25, city: "New York" };

let { name, age } = person;

console.log("name:", name);   // "Alice"
console.log("age:", age);     // 25

console.log("");

// Example 2: Different variable names
console.log("Example 2: Renaming variables");

let { name: personName, age: personAge } = person;

console.log("personName:", personName);  // "Alice"
console.log("personAge:", personAge);    // 25

console.log("");

// Example 3: Default values
console.log("Example 3: Defaults");

let settings = { theme: "dark" };

let { theme, fontSize = 14 } = settings;

console.log("theme:", theme);          // "dark"
console.log("fontSize:", fontSize);    // 14 (default used)

// Without default it would be undefined:
let { language } = settings;
console.log("language:", language);    // undefined

console.log("");

// Example 4: Rest pattern — collect the rest
console.log("Example 4: Rest with destructuring");

let user = { id: 1, name: "Bob", email: "bob@example.com", role: "user" };

let { id, name: username, ...rest } = user;

console.log("id:", id);              // 1
console.log("username:", username);  // "Bob"
console.log("rest:", rest);          // { email: 'bob@example.com', role: 'user' }

console.log("");

// Example 5: Nested object destructuring
console.log("Example 5: Nested objects");

let product = {
    name: "Laptop",
    specs: {
        ram: "16GB",
        storage: "512GB"
    }
};

let { name: productName, specs: { ram, storage } } = product;

console.log("productName:", productName);  // "Laptop"
console.log("ram:", ram);                  // "16GB"
console.log("storage:", storage);          // "512GB"

console.log("");

// Example 6: Destructuring in function parameters
console.log("Example 6: Function parameters");

function describe({ name, age }) {
    return name + " is " + age + " years old";
}

console.log(describe({ name: "Alice", age: 25 }));  // "Alice is 25 years old"

console.log("");

// Example 7: Destructuring with defaults in parameters
console.log("Example 7: Defaults in parameters");

function greet({ name = "Guest", greeting = "Hello" } = {}) {
    return greeting + ", " + name + "!";
}

console.log(greet({ name: "Bob" }));       // "Hello, Bob!"
console.log(greet({}));                    // "Hello, Guest!"
console.log(greet());                      // "Hello, Guest!" (thanks to = {})

console.log("");

// Example 8: Swapping with arrays (related concept)
console.log("Example 8: Swap with destructuring");

let a = 1;
let b = 2;

[a, b] = [b, a];   // swap

console.log("a:", a, "| b:", b);  // 2, 1

console.log("");

// Example 9: Practical — extracting from API data
console.log("Example 9: Practical API data");

let apiResponse = {
    status: 200,
    data: {
        user: { id: 7, name: "Carol" }
    }
};

let { status, data: { user: { id: userId, name: userName } } } = apiResponse;

console.log("status:", status);    // 200
console.log("id:", userId);        // 7
console.log("userName:", userName); // "Carol"

// =============================================
// SUMMARY
// - { a, b } = obj unpacks properties
// - Rename with { a: newName }
// - Defaults with { a = 10 }
// - ...rest collects remaining properties
// - Works great in function parameters
// =============================================
