// =============================================
// Program: forEach() — Loop Through Every Element
// =============================================
// forEach() executes a function ONCE for each array element.
// Unlike map/filter/reduce, it returns undefined (not a new array).
// Use forEach when you want to PERFORM an action (side effect),
// not when you want to TRANSFORM data.
// =============================================

// ----- 1. Basic forEach -----
console.log("=== BASIC forEach ===");

let fruits = ["apple", "banana", "orange"];

console.log("Listing fruits:");
fruits.forEach(function(fruit) {
    console.log(" ", fruit);
});

// Using arrow function
console.log("\nWith arrow function:");
fruits.forEach(fruit => console.log(" ", fruit.toUpperCase()));

// ----- 2. forEach with Index -----
console.log("\n=== WITH INDEX ===");

let colors = ["red", "green", "blue"];

colors.forEach((color, index) => {
    console.log(`  [${index}] = ${color}`);
});

// Practical — numbered list
console.log("\nShopping list:");
["Milk", "Bread", "Eggs", "Butter"].forEach((item, i) => {
    console.log(`  ${i + 1}. ${item}`);
});

// ----- 3. forEach with Full Array -----
console.log("\n=== WITH FULL ARRAY ===");

let nums = [10, 20, 30];
nums.forEach((val, idx, arr) => {
    console.log(`  arr[${idx}] = ${val}  (array: [${arr}])`);
});

// ----- 4. Practical Examples -----
console.log("\n=== PRACTICAL EXAMPLES ===");

// Example: Log all user data
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob",   age: 30 },
    { name: "Charlie", age: 22 }
];

console.log("User list:");
users.forEach((user, i) => {
    console.log(`  ${i + 1}. ${user.name} (${user.age} years old)`);
});

// Example: Accumulate values (side effect)
let total = 0;
let prices = [10, 25, 15, 30];
prices.forEach(price => {
    total += price;
});
console.log("\nTotal price: $" + total);  // $80

// forEach for side effects: update DOM (simulated)
console.log("\nUpdating DOM elements (simulated):");
let items = ["home", "about", "contact"];
items.forEach(item => {
    console.log(`  document.getElementById("${item}").style.display = "block"`);
});

// ----- 5. forEach vs for...of (when to use each) -----
console.log("\n=== forEach vs for...of ===");

let scores = [88, 72, 95];

// forEach gives you index automatically
console.log("forEach — with index:");
scores.forEach((score, i) => console.log(`  [${i}]: ${score}`));

// for...of is cleaner when you only need values
console.log("for...of — values only:");
for (let score of scores) {
    console.log(" ", score);
}

// for...of with entries() gives both
console.log("for...of with entries():");
for (let [i, score] of scores.entries()) {
    console.log(`  [${i}]: ${score}`);
}

// ----- 6. IMPORTANT: forEach does NOT return -----
console.log("\n=== forEach vs map (CRITICAL DIFFERENCE) ===");

let arr = [1, 2, 3];

let fromForEach = arr.forEach(n => n * 2);
let fromMap = arr.map(n => n * 2);

console.log("forEach return:", fromForEach);  // undefined
console.log("map return:", fromMap);           // [2, 4, 6]

// If you want a new array, use map(). If you want to do something, use forEach().

// ----- 7. You CANNOT break out of forEach -----
console.log("\n=== CAN'T BREAK ===");

// forEach runs ALL elements — you can't break or continue
// Use a regular for loop if you need early exit

let numbers = [1, 2, 3, 4, 5];
console.log("forEach runs all elements — no break:");
numbers.forEach(n => {
    console.log("  visiting:", n);
    // Even if we wanted to stop at 3, we can't
});

console.log("\nUsing for...of with break:");
for (let n of numbers) {
    console.log("  visiting:", n);
    if (n === 3) break;  // stops here
}
console.log("(stopped at 3)");

// ----- 8. forEach on empty array -----
console.log("\n=== EDGE CASE ===");

[].forEach(item => {
    console.log("This never runs");
});
console.log("forEach on empty: nothing happens (no error)");

// ----- 9. Real-world: Logging and reporting -----
console.log("\n=== REAL-WORLD ===");

function processOrders(orders) {
    let totalRevenue = 0;

    orders.forEach(order => {
        let itemTotal = order.price * order.quantity;
        totalRevenue += itemTotal;
        console.log(`  ${order.customer} bought ${order.quantity}x ${order.product} — $${itemTotal}`);
    });

    console.log(`  Total revenue: $${totalRevenue}`);
    return totalRevenue;
}

let sampleOrders = [
    { customer: "Alice",   product: "Laptop",   price: 1000, quantity: 1 },
    { customer: "Bob",     product: "Mouse",    price: 25,   quantity: 3 },
    { customer: "Charlie", product: "Keyboard", price: 75,   quantity: 1 }
];

console.log("Order summary:");
processOrders(sampleOrders);

// =============================================
// SUMMARY
// forEach(fn) → undefined (no return value)
// callback: (element, index, array) => void
//
// When to use forEach:
// - Logging, printing, displaying data
// - Side effects (writing to DB, sending emails)
// - Accumulating values into an external variable
//
// When NOT to use:
// - Need a new array → use map()
// - Need to filter → use filter()
// - Need early exit (break) → use for...of or for loop
// =============================================
