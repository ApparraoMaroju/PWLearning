// =============================================
// Program: TRUTHY & FALSY VALUES in JavaScript
// =============================================
// In JavaScript, conditions don't have to be true or false.
// Any value can be used in a condition — it's treated as
// either "truthy" or "falsy".
//
// There are EXACTLY 6 falsy values. EVERYTHING else is truthy.
// =============================================

// =============================================
// THE 6 FALSY VALUES
// =============================================
console.log("=== THE 6 FALSY VALUES ===\n");

// 1. false
console.log("1. false:");
if (false) {
    console.log("   (this won't print)");
} else {
    console.log("   false is FALSY ✅");
}

// 2. 0 (zero)
console.log("\n2. 0 (zero):");
if (0) {
    console.log("   (this won't print)");
} else {
    console.log("   0 is FALSY ✅");
}

// 3. "" (empty string)
console.log('\n3. "" (empty string):');
if ("") {
    console.log("   (this won't print)");
} else {
    console.log('   "" is FALSY ✅');
}

// 4. null
console.log("\n4. null:");
if (null) {
    console.log("   (this won't print)");
} else {
    console.log("   null is FALSY ✅");
}

// 5. undefined
console.log("\n5. undefined:");
if (undefined) {
    console.log("   (this won't print)");
} else {
    console.log("   undefined is FALSY ✅");
}

// 6. NaN (Not a Number)
console.log("\n6. NaN (Not a Number):");
if (NaN) {
    console.log("   (this won't print)");
} else {
    console.log("   NaN is FALSY ✅");
}

console.log("\n");

// =============================================
// TRUTHY VALUES — everything else!
// =============================================
console.log("=== TRUTHY VALUES ===\n");

// Numbers (non-zero)
console.log("Numbers (non-zero):");
if (1) console.log("   1 is truthy ✅");
if (-1) console.log("   -1 is truthy ✅");
if (3.14) console.log("   3.14 is truthy ✅");
if (Infinity) console.log("   Infinity is truthy ✅");

// Strings (non-empty)
console.log("\nStrings (non-empty):");
if ("hello") console.log('   "hello" is truthy ✅');
if ("0") console.log('   "0" (string zero) is truthy ✅');
if (" ") console.log('   " " (space) is truthy ✅');
if ("false") console.log('   "false" (string) is truthy ✅');

// Arrays (even empty ones!)
console.log("\nArrays:");
if ([]) console.log("   [] (empty array) is truthy ✅");
if ([1, 2]) console.log("   [1,2] is truthy ✅");

// Objects (even empty ones!)
console.log("\nObjects:");
if ({}) console.log("   {} (empty object) is truthy ✅");
if ({ key: "val" }) console.log('   {key:"val"} is truthy ✅');

// Special values
console.log("\nOther:");
if (true) console.log("   true is truthy ✅");

console.log("\n");

// =============================================
// PRACTICAL EXAMPLES
// =============================================
console.log("=== PRACTICAL EXAMPLES ===\n");

// Example 1: Checking if a variable has a value
let username = "";

console.log("Example 1: Default name check");
if (username) {
    console.log("   Welcome,", username);
} else {
    console.log("   No username provided — using Guest.");
}
// "" is falsy, so else runs

username = "Alice";
if (username) {
    console.log("   Welcome,", username);  // this runs (truthy)
} else {
    console.log("   No username provided.");
}

console.log("");

// Example 2: Checking array length
let items = [];

console.log("Example 2: Is cart empty?");
// items.length is 0 (falsy) → cart is empty
if (items.length) {
    console.log("   Cart has", items.length, "item(s).");
} else {
    console.log("   Cart is empty. 🛒");
}

items = ["apple", "banana"];
if (items.length) {
    console.log("   Cart has", items.length, "item(s).");  // 2 (truthy)
} else {
    console.log("   Cart is empty.");
}

console.log("");

// Example 3: Checking if an object exists
let user = null;

console.log("Example 3: User profile check");
if (user) {
    console.log("   User:", user.name);
} else {
    console.log("   User not found.");  // null is falsy
}

user = { name: "Bob" };
if (user) {
    console.log("   User:", user.name);  // object is truthy
}

console.log("");

// Example 4: Default value with || (OR) operator
let input = "";
let defaultText = input || "Default value";

console.log("Example 4: Default value with ||");
console.log('   input = ""');
console.log("   Result:", defaultText);  // "Default value" ("" is falsy)

input = "Custom text";
defaultText = input || "Default value";
console.log('   input = "Custom text"');
console.log("   Result:", defaultText);  // "Custom text"

console.log("");

// Example 5: WARNING — || vs ?? with falsy values
let count = 0;  // 0 is a valid count, but it's falsy

console.log("Example 5: || vs ?? with 0");
console.log("   count =", count);

let withOR = count || 10;    // || treats 0 as "no value"
let withNullish = count ?? 10;  // ?? treats only null/undefined as "no value"

console.log("   Using ||:", withOR);      // 10  (wrong if 0 is valid)
console.log("   Using ??:", withNullish); // 0   (correct — preserves 0)

console.log("");

// Example 6: Truthy check in function
function greetUser(name) {
    if (name) {
        return "Hello, " + name + "!";
    }
    return "Hello, Guest!";
}

console.log("Example 6: Greeting function");
console.log("   greetUser('Alice'):", greetUser("Alice"));   // "Hello, Alice!"
console.log("   greetUser(''):", greetUser(""));            // "Hello, Guest!"
console.log("   greetUser(null):", greetUser(null));        // "Hello, Guest!"
console.log("   greetUser(undefined):", greetUser(undefined)); // "Hello, Guest!"

console.log("");

// Example 7: Stopping execution with falsy check
function processOrder(order) {
    if (!order) {
        console.log("   No order to process.");
        return;  // stop here
    }
    console.log("   Processing order #" + order.id + "...");
    // ... process the order
}

console.log("Example 7: Guard clause with !order");
processOrder(null);
processOrder({ id: 123 });

// =============================================
// SUMMARY
// =============================================
// 6 FALSY values:  false | 0 | "" | null | undefined | NaN
// EVERYTHING else is TRUTHY:  [], {}, non-zero numbers, non-empty strings, etc.
//
// Common patterns:
//   if (value) { ... }       → runs if value is NOT falsy
//   if (!value) { ... }      → runs if value IS falsy
//   value || default         → uses default if value is falsy (all 6)
//   value ?? default         → uses default only if null/undefined
// =============================================
