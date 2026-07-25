// =============================================
// Program: indexOf(), lastIndexOf(), includes() — Search
// =============================================
// These methods search for a value in the array.
// indexOf()     → returns the INDEX or -1 if not found
// lastIndexOf() → returns the LAST matching index
// includes()    → returns true/false (boolean)
// All use strict equality (===) for comparison.
// =============================================

// ----- 1. indexOf() — Find Index -----
console.log("=== indexOf() ===");

let fruits = ["apple", "banana", "orange", "banana", "grape"];

console.log("Fruits:", fruits);

let idx = fruits.indexOf("banana");
console.log('indexOf("banana"):', idx);  // 1 (first match)

idx = fruits.indexOf("grape");
console.log('indexOf("grape"):', idx);   // 4

// Not found → -1
idx = fruits.indexOf("mango");
console.log('indexOf("mango"):', idx);   // -1 (not found)

// ----- 2. lastIndexOf() — Find Last Match -----
console.log("\n=== lastIndexOf() ===");

let lastIdx = fruits.lastIndexOf("banana");
console.log('lastIndexOf("banana"):', lastIdx);  // 3 (last occurrence)

lastIdx = fruits.lastIndexOf("apple");
console.log('lastIndexOf("apple"):', lastIdx);   // 0 (only one)

// ----- 3. includes() — Check if Exists -----
console.log("\n=== includes() ===");

console.log('includes("banana"):', fruits.includes("banana"));  // true
console.log('includes("mango"):', fruits.includes("mango"));    // false

// Great for simple existence checks
let allowedRoles = ["admin", "editor", "moderator"];
let userRole = "admin";
if (allowedRoles.includes(userRole)) {
    console.log("Access granted for", userRole);
}

// ----- 4. Using second argument (start search index) -----
console.log("\n=== SEARCH FROM INDEX ===");

let nums = [10, 20, 30, 40, 50, 30, 60];

// Start searching from index 3
console.log('indexOf(30, 3):', nums.indexOf(30, 3));  // 5 (second 30)
console.log('indexOf(30):', nums.indexOf(30));         // 2 (first 30)

// includes with start index
console.log('includes(40, 3):', nums.includes(40, 3));  // true
console.log('includes(40, 5):', nums.includes(40, 5));  // false

// ----- 5. Practical Patterns -----
console.log("\n=== PRACTICAL PATTERNS ===");

// Pattern 1: Check before removing
let cart = ["laptop", "mouse", "keyboard", "mouse"];

function removeItem(cart, item) {
    let positions = [];
    let idx = cart.indexOf(item);
    while (idx !== -1) {
        positions.push(idx);
        idx = cart.indexOf(item, idx + 1);
    }
    return positions;
}
console.log("Positions of 'mouse':", removeItem(cart, "mouse"));  // [1, 3]

// Pattern 2: Toggle item (add if not exists, remove if exists)
function toggleItem(arr, item) {
    if (arr.includes(item)) {
        // Remove it
        let idx = arr.indexOf(item);
        arr.splice(idx, 1);
        console.log(`Removed "${item}"`);
    } else {
        arr.push(item);
        console.log(`Added "${item}"`);
    }
    return arr;
}

let selections = ["tea", "coffee"];
console.log("\nToggle demo:");
console.log("Initial:", selections);
toggleItem(selections, "coffee");  // removes
console.log("After toggle:", selections);
toggleItem(selections, "coffee");  // adds back
console.log("After toggle:", selections);

// Pattern 3: Using !includes as a guard / negative check
let blockedIPs = ["192.168.1.1", "10.0.0.5"];
let visitorIP = "192.168.1.100";

if (!blockedIPs.includes(visitorIP)) {
    console.log("\nIP not blocked — allow access");
}

// ----- 6. Strict Equality (===) matters -----
console.log("\n=== STRICT EQUALITY ===");

// indexOf uses === so type matters
console.log('indexOf("5"):', [1, 2, "5", 5].indexOf("5"));  // 2 (string match)
console.log('indexOf(5):', [1, 2, "5", 5].indexOf(5));       // 3 (number match)
console.log('includes("5"):', [1, 2, "5", 5].includes("5"));  // true
console.log('includes(5):', [1, 2, "5", 5].includes(5));       // true

// Objects: reference comparison, NOT value comparison
let obj1 = { id: 1 };
let obj2 = { id: 2 };
let objects = [obj1, obj2];
console.log("\nObject comparison:");
console.log('includes({id:1}):', objects.includes({ id: 1 }));  // false (different ref!)
console.log('includes(obj1):', objects.includes(obj1));          // true (same ref)

// =============================================
// SUMMARY
// indexOf(x)     → first index or -1
// lastIndexOf(x) → last index or -1
// includes(x)    → true/false
// All use === (strict equality)
// Second argument = start position for search
// Objects compare by reference, not by value
// =============================================
