// =============================================
// Program: map() — Transform Every Element
// =============================================
// map() creates a NEW array by calling a function on EVERY element.
// The new array always has the SAME length as the original.
// Does NOT modify the original array.
// Perfect for transforming data from one format to another.
// =============================================

// ----- 1. Basic Transformation -----
console.log("=== BASIC TRANSFORMATION ===");

let numbers = [1, 2, 3, 4, 5];

// Double every number
let doubled = numbers.map(n => n * 2);
console.log("Original:", numbers);
console.log("Doubled:", doubled);  // [2, 4, 6, 8, 10]

// Square every number
let squared = numbers.map(n => n ** 2);
console.log("Squared:", squared);  // [1, 4, 9, 16, 25]

// Convert to string with prefix
let labeled = numbers.map(n => "Number " + n);
console.log("Labeled:", labeled);  // ["Number 1", "Number 2", ...]

// ----- 2. Mapping Arrays of Objects -----
console.log("\n=== MAPPING OBJECTS ===");

let users = [
    { firstName: "John", lastName: "Doe", age: 25 },
    { firstName: "Jane", lastName: "Smith", age: 30 },
    { firstName: "Bob",  lastName: "Jones", age: 22 }
];

// Extract just one property
let names = users.map(u => u.firstName);
console.log("First names:", names);  // ["John", "Jane", "Bob"]

// Create full name from properties
let fullNames = users.map(u => `${u.firstName} ${u.lastName}`);
console.log("Full names:", fullNames);  // ["John Doe", "Jane Smith", "Bob Jones"]

// Add computed properties (transform the shape)
let withLabels = users.map(u => ({
    fullName: `${u.firstName} ${u.lastName}`,
    isAdult: u.age >= 18,
    age: u.age
}));
console.log("Transformed:", withLabels);
// [{ fullName: "John Doe", isAdult: true, age: 25 }, ...]

// ----- 3. Mapping Strings -----
console.log("\n=== MAPPING STRINGS ===");

let fruits = ["apple", "banana", "cherry"];

// Uppercase all
let upper = fruits.map(f => f.toUpperCase());
console.log("Uppercase:", upper);  // ["APPLE", "BANANA", "CHERRY"]

// Get first letter
let firstLetters = fruits.map(f => f[0]);
console.log("First letters:", firstLetters);  // ["a", "b", "c"]

// Word lengths
let lengths = fruits.map(f => f.length);
console.log("Lengths:", lengths);  // [5, 6, 6]

// ----- 4. Using Index in map() -----
console.log("\n=== USING INDEX ===");

let items = ["a", "b", "c"];
let withIndex = items.map((val, idx) => `${idx + 1}. ${val}`);
console.log("Numbered:", withIndex);  // ["1. a", "2. b", "3. c"]

// Create HTML elements (simulated)
let colors = ["red", "green", "blue"];
let html = colors.map((c, i) => `<li id="color-${i}">${c}</li>`);
console.log("HTML:", html);
// ["<li id='color-0'>red</li>", "<li id='color-1'>green</li>", ...]

// ----- 5. map() + Other Methods (Chaining) -----
console.log("\n=== CHAINING ===");

let nums = [1, 2, 3, 4, 5, 6];

// Filter evens, then double them
let evenDoubled = nums
    .filter(n => n % 2 === 0)
    .map(n => n * 2);
console.log("Evens doubled:", evenDoubled);  // [4, 8, 12]

// Square all, then filter > 10
let result = nums
    .map(n => n * n)
    .filter(n => n > 10);
console.log("Squares > 10:", result);  // [16, 25, 36]

// ----- 6. Real-world Examples -----
console.log("\n=== REAL-WORLD EXAMPLES ===");

// Convert prices from USD to EUR
let pricesUSD = [10, 25, 50, 100];
let exchangeRate = 0.85;
let pricesEUR = pricesUSD.map(p => +(p * exchangeRate).toFixed(2));
console.log("USD:", pricesUSD);
console.log("EUR:", pricesEUR);  // [8.5, 21.25, 42.5, 85]

// Format display strings
let products = [
    { name: "Laptop",  price: 999, inStock: true },
    { name: "Mouse",   price: 25,  inStock: false },
    { name: "Keyboard",price: 75,  inStock: true }
];

let productCards = products.map(p =>
    `${p.name} — $${p.price} [${p.inStock ? "In Stock" : "Out of Stock"}]`
);
console.log("Product cards:");
productCards.forEach(card => console.log("  ", card));

// Parsing numbers from strings
let stringNums = ["1", "2", "3"];
let parsed = stringNums.map(Number);  // or .map(s => parseInt(s))
console.log("\nParsed numbers:", parsed);  // [1, 2, 3]

// Extract API response data
let apiResponse = [
    { user: { name: "Alice", email: "alice@test.com" } },
    { user: { name: "Bob", email: "bob@test.com" } }
];
let emails = apiResponse.map(item => item.user.email);
console.log("Emails:", emails);  // ["alice@test.com", "bob@test.com"]

// ----- 7. mapping vs forEach (important difference) -----
console.log("\n=== MAP vs forEach ===");

let arr = [1, 2, 3];

let fromMap = arr.map(n => n * 2);
let fromForEach = arr.forEach(n => n * 2);  // forEach doesn't return anything

console.log("map result:", fromMap);       // [2, 4, 6]
console.log("forEach result:", fromForEach);  // undefined

// =============================================
// SUMMARY
// map(fn) → new array with each element transformed
// - callback: (element, index, array) => newValue
// - Returns array of SAME length as original
// - Original array is NOT modified (immutable)
// - Chain with filter, reduce, etc.
// - Use when you need to TRANSFORM data
// - Use forEach when you need to PERFORM an action, not transform
// =============================================
