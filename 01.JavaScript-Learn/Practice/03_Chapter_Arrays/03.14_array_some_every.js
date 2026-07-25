// =============================================
// Program: some() and every() — Test Array Conditions
// =============================================
// some()  → returns true if AT LEAST ONE element passes the test
// every() → returns true if ALL elements pass the test
// Both return a BOOLEAN (true/false).
// Both stop early when the result is determined (short-circuit).
// =============================================

// ----- 1. some() — At Least One -----
console.log("=== some() — AT LEAST ONE ===");

let numbers = [1, 3, 5, 7, 8, 9];

// Is there at least one even number?
let hasEven = numbers.some(n => n % 2 === 0);
console.log("Has even:", hasEven);  // true (8 is even)

// Is there a number > 10?
let hasBig = numbers.some(n => n > 10);
console.log("Has > 10:", hasBig);  // false

// Is there a negative number?
let hasNegative = numbers.some(n => n < 0);
console.log("Has negative:", hasNegative);  // false

// ----- 2. every() — All Must Pass -----
console.log("\n=== every() — ALL MUST PASS ===");

let evens = [2, 4, 6, 8, 10];

// Are all numbers even?
let allEven = evens.every(n => n % 2 === 0);
console.log("All even:", allEven);  // true

// Are all numbers positive?
let allPositive = evens.every(n => n > 0);
console.log("All positive:", allPositive);  // true

// Are all numbers < 10?
let allBelow10 = evens.every(n => n < 10);
console.log("All below 10:", allBelow10);  // false (10 is not < 10)

// ----- 3. Working with Objects -----
console.log("\n=== WITH OBJECTS ===");

let users = [
    { name: "Alice",   age: 25, verified: true  },
    { name: "Bob",     age: 17, verified: true  },
    { name: "Charlie", age: 30, verified: false }
];

// Are all users verified?
let allVerified = users.every(u => u.verified);
console.log("All verified:", allVerified);  // false (Charlie is not)

// Is at least one user a minor?
let hasMinor = users.some(u => u.age < 18);
console.log("Has minor:", hasMinor);  // true (Bob is 17)

// Are all users adults?
let allAdults = users.every(u => u.age >= 18);
console.log("All adults:", allAdults);  // false (Bob is 17)

// ----- 4. Practical Validation Examples -----
console.log("\n=== VALIDATION ===");

// Form validation
function validateForm(fields) {
    // All fields must be non-empty
    let allFilled = fields.every(f => f.value.trim() !== "");

    // At least one checkbox must be checked
    let anyChecked = fields.some(f => f.checked);

    return { allFilled, anyChecked };
}

let formData = [
    { name: "username", value: "Alice", checked: false },
    { name: "email",    value: "a@b.com", checked: false },
    { name: "terms",    value: "true", checked: true }
];

let validation = validateForm(formData);
console.log("All fields filled:", validation.allFilled);   // true
console.log("Any checked:", validation.anyChecked);        // true

// Check if an array has any valid items
function hasValidItems(items) {
    return items.some(item => item !== null && item !== undefined);
}

console.log("Has valid:", hasValidItems([null, undefined, 42]));   // true
console.log("Has valid:", hasValidItems([null, undefined]));       // false

// ----- 5. Short-circuit Behavior -----
console.log("\n=== SHORT-CIRCUIT ===");

// some() stops at the first true
let testArr = [1, 2, 3, 4, 5];
testArr.some(n => {
    console.log("  some checking:", n);
    return n > 3;
});
// Stops at 4 (first match)

console.log("");

// every() stops at the first false
testArr.every(n => {
    console.log("  every checking:", n);
    return n < 3;
});
// Stops at 3 (first failure, because 3 is not < 3)

// ----- 6. Edge Cases -----
console.log("\n=== EDGE CASES ===");

let empty = [];

// some() on empty → false (nothing passes the test)
console.log("some on empty:", empty.some(n => n > 0));  // false

// every() on empty → true (vacuously true, "all elements match" is true for zero elements)
console.log("every on empty:", empty.every(n => n > 0));  // true

// ----- 7. Real-world Examples -----
console.log("\n=== REAL-WORLD ===");

// Check permissions
let userRoles = ["user", "editor"];

let isAdmin = userRoles.some(r => r === "admin");
let canEdit = userRoles.some(r => ["editor", "admin"].includes(r));

console.log("Is admin:", isAdmin);   // false
console.log("Can edit:", canEdit);   // true

// Check if all items are in stock
let cart = [
    { name: "Laptop",  inStock: true },
    { name: "Mouse",   inStock: true },
    { name: "Keyboard",inStock: false }
];

let allAvailable = cart.every(item => item.inStock);
console.log("\nAll in stock:", allAvailable);  // false

// Check if cart is ready for checkout
let hasOutOfStock = cart.some(item => !item.inStock);
console.log("Has out-of-stock:", hasOutOfStock);  // true

// Filter array using some — find products that match any keyword
let products = ["Laptop", "Phone", "Tablet", "Monitor"];
let searchTerms = ["lap", "mon"];

let matching = products.filter(product =>
    searchTerms.some(term => product.toLowerCase().includes(term.toLowerCase()))
);
console.log("\nMatching products:", matching);  // ["Laptop", "Monitor"]

// =============================================
// SUMMARY
// some(fn)  → true if ANY element passes  (short-circuits at true)
// every(fn) → true if ALL elements pass   (short-circuits at false)
//
// Both return boolean. Both short-circuit.
// some() on empty → false
// every() on empty → true
//
// Perfect for validation, permission checks, existence checks
// =============================================
