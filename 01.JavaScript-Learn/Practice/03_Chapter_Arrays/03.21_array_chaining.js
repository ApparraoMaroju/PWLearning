// =============================================
// Program: Method Chaining — Combining Array Methods
// =============================================
// Chaining lets you combine multiple array methods in a
// single, readable pipeline. Each method passes its result
// to the next method in the chain.
//
// Key: map/filter/reduce/some/every/flatMap all return arrays
// or values that can be used by the next method in the chain.
// =============================================

// ----- 1. Simple Chain: filter + map -----
console.log("=== FILTER + MAP ===");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get squares of even numbers
let result = numbers
    .filter(n => n % 2 === 0)   // [2, 4, 6, 8, 10]
    .map(n => n * n);           // [4, 16, 36, 64, 100]

console.log("Even squares:", result);

// Step by step breakdown:
let step1 = numbers.filter(n => n % 2 === 0);
console.log("Step 1 (filter evens):", step1);   // [2, 4, 6, 8, 10]
let step2 = step1.map(n => n * n);
console.log("Step 2 (square them):", step2);    // [4, 16, 36, 64, 100]

// ----- 2. filter + map + reduce -----
console.log("\n=== FILTER + MAP + REDUCE ===");

// Sum of squares of odd numbers
let oddSquaresSum = numbers
    .filter(n => n % 2 !== 0)    // [1, 3, 5, 7, 9]
    .map(n => n * n)              // [1, 9, 25, 49, 81]
    .reduce((sum, n) => sum + n, 0);  // 165

console.log("Sum of odd squares:", oddSquaresSum);  // 165

// ----- 3. Complex Chain with Objects -----
console.log("\n=== CHAIN WITH OBJECTS ===");

let products = [
    { name: "Laptop",    category: "electronics", price: 999,  inStock: true },
    { name: "Mouse",     category: "electronics", price: 25,   inStock: false },
    { name: "Shirt",     category: "clothing",    price: 29,   inStock: true },
    { name: "Phone",     category: "electronics", price: 699,  inStock: true },
    { name: "Pants",     category: "clothing",    price: 49,   inStock: true },
    { name: "Keyboard",  category: "electronics", price: 75,   inStock: false }
];

// Get names of in-stock electronics under $500, sorted by price
let affordableStock = products
    .filter(p => p.category === "electronics")   // only electronics
    .filter(p => p.inStock)                       // only in stock
    .filter(p => p.price < 500)                   // only affordable
    .sort((a, b) => a.price - b.price)             // sort cheap → expensive
    .map(p => `${p.name}: $${p.price}`);           // format output

console.log("Affordable in-stock electronics:");
affordableStock.forEach(item => console.log("  ", item));
//   "Phone: $699"? No — 699 > 500, so filtered out
// Result should show only items < 500

// Actually let me fix that:
let result2 = products
    .filter(p => p.category === "electronics" && p.inStock && p.price < 500)
    .sort((a, b) => a.price - b.price)
    .map(p => `${p.name}: $${p.price}`);

console.log("\nCorrected:", result2);
// Should be empty or show items under 500 — depends on data

// ----- 4. Chain with flatMap -----
console.log("\n=== CHAIN WITH FLATMAP ===");

let sentences = [
    "Hello world JavaScript",
    "Array methods are powerful",
    "Chaining makes code clean"
];

// Count total words
let wordCount = sentences
    .flatMap(s => s.split(" "))     // split all sentences into words
    .map(w => w.toLowerCase())       // normalize case
    .filter(w => w.length > 3)       // only longer words
    .length;                          // count them

console.log("Words > 3 chars:", wordCount);

// Unique words across all sentences
let uniqueWords = [...new Set(
    sentences
        .flatMap(s => s.toLowerCase().split(" "))
        .filter(w => w.length > 2)
)];
console.log("Unique words (>2 chars):", uniqueWords);

// ----- 5. Real-world Data Pipeline -----
console.log("\n=== DATA PIPELINE ===");

let orders = [
    { id: 1, customer: "Alice",   items: ["laptop", "mouse"],        total: 125 },
    { id: 2, customer: "Bob",     items: ["keyboard"],               total: 75 },
    { id: 3, customer: "Alice",   items: ["monitor", "headphones"],  total: 350 },
    { id: 4, customer: "Charlie", items: ["laptop", "tablet"],       total: 1400 },
    { id: 5, customer: "Bob",     items: ["mouse", "mousepad"],      total: 35 }
];

// Pipeline: get top-spending customers who bought more than once
let topCustomers = Object.entries(
    orders.reduce((acc, order) => {
        // Group by customer
        if (!acc[order.customer]) acc[order.customer] = { totalSpent: 0, orderCount: 0 };
        acc[order.customer].totalSpent += order.total;
        acc[order.customer].orderCount++;
        return acc;
    }, {})
)
 .filter(([_, data]) => data.orderCount > 1)     // more than 1 order
 .sort(([, a], [, b]) => b.totalSpent - a.totalSpent)  // highest spender first
 .map(([name, data]) => `${name}: $${data.totalSpent} (${data.orderCount} orders)`);

console.log("Top customers:");
topCustomers.forEach(c => console.log("  ", c));

// ----- 6. Grade Calculator Pipeline -----
console.log("\n=== GRADE PIPELINE ===");

let students = [
    { name: "Alice",   scores: [85, 90, 78, 92] },
    { name: "Bob",     scores: [70, 65, 80, 72] },
    { name: "Charlie", scores: [95, 88, 92, 96] },
    { name: "Diana",   scores: [60, 55, 70, 65] }
];

// Get passing students (avg >= 70), ranked
let ranked = students
    .map(s => ({
        name: s.name,
        average: +(s.scores.reduce((a, b) => a + b, 0) / s.scores.length).toFixed(1)
    }))
    .filter(s => s.average >= 70)
    .sort((a, b) => b.average - a.average)
    .map((s, i) => `#${i + 1} ${s.name} — ${s.average}%`);

console.log("Ranked students:");
ranked.forEach(s => console.log("  ", s));

// ----- 7. Chain Performance Note -----
console.log("\n=== PERFORMANCE NOTE ===");

let bigArray = Array.from({ length: 1000000 }, (_, i) => i);

// Chaining creates intermediate arrays (can be memory-intensive)
// Each .filter()/.map() creates a new array
let chained = bigArray
    .filter(n => n % 2 === 0)     // creates array of 500k
    .map(n => n * 2)              // creates array of 500k
    .slice(0, 5);                 // creates array of 5

console.log("Chained result:", chained);  // [0, 4, 8, 12, 16]

// For large data, flatMap can reduce passes
// Or use reduce for a single pass:
let singlePass = bigArray.reduce((acc, n) => {
    if (n % 2 === 0 && acc.length < 5) acc.push(n * 2);
    return acc;
}, []);
console.log("Single pass result:", singlePass);  // same result

// ----- 8. Chain vs Separate (Readability) -----
console.log("\n=== READABILITY ===");

let data = [3, 1, 4, 1, 5, 9, 2, 6];

// Unchained (verbose)
let filtered = data.filter(n => n > 3);
let mapped = filtered.map(n => n * 10);
let sorted = mapped.sort((a, b) => a - b);
console.log("Unchained:", sorted);

// Chained (concise)
let chainedResult = data
    .filter(n => n > 3)
    .map(n => n * 10)
    .sort((a, b) => a - b);
console.log("Chained:", chainedResult);

// Both produce [40, 50, 60, 90]

// =============================================
// SUMMARY
// Chaining = combining array methods in sequence
// Common chain: filter → map → sort → reduce/forEach
//
// Benefits:
// - Concise and readable (reads like a pipeline)
// - No intermediate variables needed
// - Easy to add/remove steps
//
// Performance:
// - Each step creates a new array (memory overhead)
// - For huge arrays, consider reduce for single-pass
// - flatMap reduces one pass compared to map + flat
// =============================================
