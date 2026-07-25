// =============================================
// Program: find() and findIndex() — Search by Condition
// =============================================
// Unlike indexOf/includes which search by VALUE,
// find() and findIndex() search by CONDITION (callback function).
//
// find()      → returns the FIRST element that passes the test
// findIndex() → returns the INDEX of the first passing element
// findLast()  → returns the LAST element that passes the test  (ES2023)
// findLastIndex() → returns the INDEX of the last passing element (ES2023)
// =============================================

// ----- 1. find() — Get the First Matching Element -----
console.log("=== find() — FIRST MATCH ===");

let numbers = [5, 12, 8, 130, 44];

// Find the first number greater than 10
let found = numbers.find(n => n > 10);
console.log("First > 10:", found);  // 12

// Find the first even number
found = numbers.find(n => n % 2 === 0);
console.log("First even:", found);  // 12

// Find the first number > 200 (none exist)
found = numbers.find(n => n > 200);
console.log("First > 200:", found);  // undefined

// ----- 2. findIndex() — Get the Index of First Match -----
console.log("\n=== findIndex() ===");

let idx = numbers.findIndex(n => n > 10);
console.log("Index of first > 10:", idx);  // 1 (value 12 is at index 1)

idx = numbers.findIndex(n => n > 200);
console.log("Index of first > 200:", idx);  // -1 (not found)

// ----- 3. Working with Objects (most common use) -----
console.log("\n=== FINDING IN OBJECTS ===");

let users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob",   age: 30 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "Diana", age: 30 }
];

// Find user with name "Bob"
let user = users.find(u => u.name === "Bob");
console.log("Found user:", user);  // { id: 2, name: "Bob", age: 30 }

// Find the first person over 25
let over25 = users.find(u => u.age > 25);
console.log("First over 25:", over25);  // { id: 2, name: "Bob", age: 30 }

// Find index of user with id = 3
let userIdx = users.findIndex(u => u.id === 3);
console.log("Index of id=3:", userIdx);  // 2

// ----- 4. findLast() and findLastIndex() (ES2023) -----
console.log("\n=== findLast() & findLastIndex() (ES2023) ===");

// Works on Node.js 22+ or modern browsers
// If not available, this will error — uncomment if supported

try {
    let last = numbers.findLast(n => n > 10);
    console.log("Last > 10:", last);  // 44

    let lastIdx = numbers.findLastIndex(n => n > 10);
    console.log("Last index > 10:", lastIdx);  // 3 (value 44)
} catch (e) {
    console.log("findLast/findLastIndex not supported in this Node version");
}

// Manual alternative to findLast
let lastOver10 = [...numbers].reverse().find(n => n > 10);
console.log("Manual findLast:", lastOver10);  // 44

// ----- 5. Practical Examples -----
console.log("\n=== PRACTICAL EXAMPLES ===");

// Example: Find product by ID (like a database lookup)
let products = [
    { sku: "LAP001", name: "Laptop", price: 999 },
    { sku: "MOU002", name: "Mouse",  price: 25 },
    { sku: "KEY003", name: "Keyboard", price: 75 }
];

function findProduct(sku) {
    return products.find(p => p.sku === sku);
}

console.log("Product MOU002:", findProduct("MOU002"));  // Mouse

// Example: Find first available appointment slot
let slots = [
    { time: "9:00", taken: true },
    { time: "10:00", taken: false },
    { time: "11:00", taken: false },
    { time: "12:00", taken: true }
];

let available = slots.find(s => !s.taken);
console.log("First available:", available?.time);  // "10:00"

// Example: findIndex to remove an item
let items = [
    { id: "a", text: "Task A" },
    { id: "b", text: "Task B" },
    { id: "c", text: "Task C" }
];

let removeId = "b";
let removeIdx = items.findIndex(item => item.id === removeId);
if (removeIdx !== -1) {
    items.splice(removeIdx, 1);
}
console.log("After removing id='b':", items);  // Task B removed

// ----- 6. find() with complex conditions -----
console.log("\n=== COMPLEX CONDITIONS ===");

let orders = [
    { id: 101, customer: "Alice", amount: 250, paid: true },
    { id: 102, customer: "Bob", amount: 150, paid: false },
    { id: 103, customer: "Alice", amount: 75, paid: true },
    { id: 104, customer: "Charlie", amount: 500, paid: false }
];

// Find first unpaid order by Alice
let unpaidAlice = orders.find(o => o.customer === "Alice" && !o.paid);
console.log("Unpaid Alice order:", unpaidAlice);  // undefined (both Alice orders are paid)

// Find first order over $200 that's unpaid
let largeUnpaid = orders.find(o => o.amount > 200 && !o.paid);
console.log("Large unpaid order:", largeUnpaid);  // { id:104, customer:"Charlie", amount:500, paid:false }

// =============================================
// SUMMARY
// find(fn)        → returns first element passing test (or undefined)
// findIndex(fn)   → returns index of first passing element (or -1)
// findLast(fn)    → returns LAST element passing test    (ES2023)
// findLastIndex(fn) → returns LAST index                 (ES2023)
//
// The callback receives (element, index, array)
// Perfect for searching arrays of objects by property
// =============================================
