// =============================================
// Program: LOGICAL ASSIGNMENT OPERATORS (ES2021)
// =============================================
// Logical assignment operators combine logical operators (&&, ||, ??)
// with assignment (=). They assign a value ONLY when a condition is met.
//
// Three operators:
//   &&=  — assigns only if the variable is TRUTHY
//   ||=  — assigns only if the variable is FALSY
//   ??=  — assigns only if the variable is null/undefined
// =============================================

// =============================================
// 1. &&=  — AND ASSIGNMENT
// =============================================
// Assigns the right-side value ONLY if the left-side variable is truthy.
// Equivalent to:  x = x && value

console.log("=== &&= (AND ASSIGNMENT) ===\n");

console.log("Rule: assign only if current value is TRUTHY\n");

// When current value is truthy → assignment happens
let isReady = true;
isReady &&= "System Ready!";
console.log('  isReady = true  → isReady &&= "System Ready!" →', isReady);
// "System Ready!" (true is truthy, so assignment happens)

// When current value is falsy → assignment is SKIPPED
let isReady2 = false;
isReady2 &&= "System Ready!";
console.log('  isReady2 = false → isReady2 &&= "System Ready!" →', isReady2);
// false (false is falsy, so assignment is skipped)

console.log("");

// Practical examples
console.log("--- Practical Examples ---\n");

// Example: Only update config if the current config is valid
let config = { theme: "dark" };
config &&= { ...config, mode: "compact" };  // config is truthy → update happens
console.log("Config (was truthy):", config);  // { theme: "dark", mode: "compact" }

let invalidConfig = null;
invalidConfig &&= { mode: "compact" };  // null is falsy → skipped
console.log("Invalid config (was null):", invalidConfig);  // null (unchanged)

console.log("");

// Comparison with regular if:
let user = { name: "Alice", isActive: true };
// Instead of: if (user.isActive) { user.status = "online"; }
user.isActive &&= "online";
console.log("User status:", user);  // { name: "Alice", isActive: "online" }

console.log("");

// =============================================
// 2. ||=  — OR ASSIGNMENT
// =============================================
// Assigns the right-side value ONLY if the left-side variable is falsy.
// Equivalent to:  x = x || value

console.log("=== ||= (OR ASSIGNMENT) ===\n");

console.log("Rule: assign only if current value is FALSY\n");

// When current value is falsy → assignment happens
let cache = null;
cache ||= "default-cache";
console.log('  cache = null → cache ||= "default-cache" →', cache);
// "default-cache" (null is falsy, so assignment happens)

// When current value is truthy → assignment is SKIPPED
let cache2 = "my-cache";
cache2 ||= "default-cache";
console.log('  cache2 = "my-cache" → cache2 ||= "default-cache" →', cache2);
// "my-cache" (already has a truthy value)

console.log("");

// Practical examples
console.log("--- Practical Examples ---\n");

// Example: Set default name
let username = "";
username ||= "Guest";
console.log('  username = "" → username ||= "Guest" →', username);  // "Guest"

let username2 = "Alice";
username2 ||= "Guest";
console.log('  username2 = "Alice" → username2 ||= "Guest" →', username2);  // "Alice"

// Example: Tracking visits
let pageVisits = 0;
pageVisits ||= 1;   // WRONG use — 0 is falsy, but it's a valid count!
console.log("\n  ⚠️  WARNING with ||=:");
console.log("  pageVisits =", pageVisits);  // 1 (should be 0!)

// What we actually want:
let pageVisits2 = 0;
pageVisits2 = pageVisits2 + 1;  // just add 1
console.log("  Correct: pageVisits2 =", pageVisits2);  // 1

console.log("");

// =============================================
// 3. ??=  — NULLISH ASSIGNMENT
// =============================================
// Assigns the right-side value ONLY if the left-side variable is null or undefined.
// Equivalent to:  x = x ?? value

console.log("=== ??= (NULLISH ASSIGNMENT) ===\n");

console.log("Rule: assign only if current value is null or undefined\n");

// When current value is null → assignment happens
let settings = null;
settings ??= { theme: "light" };
console.log("  settings = null → settings ??= { theme: 'light' } →", settings);
// { theme: "light" }

// When current value is undefined → assignment happens
let timeout;
timeout ??= 5000;
console.log("  timeout = undefined → timeout ??= 5000 →", timeout);
// 5000

// When current value is ANYTHING else → assignment is SKIPPED
let theme = "dark";
theme ??= "light";
console.log('  theme = "dark" → theme ??= "light" →', theme);
// "dark" (already has a value)

let count = 0;
count ??= 10;
console.log("  count = 0 → count ??= 10 →", count);
// 0 (0 is NOT null/undefined, so ??= keeps it)

let isActive = false;
isActive ??= true;
console.log("  isActive = false → isActive ??= true →", isActive);
// false (false is NOT null/undefined)

console.log("");

// Practical examples
console.log("--- Practical Examples ---\n");

// Example: User preferences — keep 0, "", false but set defaults for missing
let userPrefs = {
    theme: null,          // not set yet
    fontSize: 14,          // user set this
    showToolbar: false     // user intentionally turned it off
};

// Set defaults only for null/undefined values
userPrefs.theme ??= "dark";        // null → set to "dark"
userPrefs.fontSize ??= 16;         // 14 → keeps 14 (not null)
userPrefs.showToolbar ??= true;    // false → keeps false (not null)
userPrefs.language ??= "en";       // undefined → set to "en"

console.log("  User preferences:", userPrefs);
// { theme: "dark", fontSize: 14, showToolbar: false, language: "en" }

console.log("");

// Example: Lazy initialization (only compute if not already set)
function getExpensiveData() {
    console.log("  (Computing expensive data...)");
    return { data: [1, 2, 3, 4, 5] };
}

let dataCache = null;

// First access — cache is null, so we compute
dataCache ??= getExpensiveData();
console.log("  First access:", dataCache);

// Second access — cache already has data, so we SKIP the computation
dataCache ??= getExpensiveData();
console.log("  Second access:", dataCache);  // (no "Computing..." message)
// Notice: "Computing expensive data" only printed once!

console.log("");

// =============================================
// COMPARISON — ALL THREE SIDE BY SIDE
// =============================================
console.log("=== COMPARISON TABLE ===\n");

let testValues = [true, false, 0, 1, "", "hello", null, undefined, []];

console.log("  Value".padEnd(12), "&&= 'yes'".padEnd(15), "||= 'yes'".padEnd(15), "??= 'yes'");
console.log("  " + "-".repeat(55));

for (let val of testValues) {
    // Test &&= (assign if truthy)
    let a = val;
    a &&= "yes";
    // Test ||= (assign if falsy)
    let b = val;
    b ||= "yes";
    // Test ??= (assign if null/undefined)
    let c = val;
    c ??= "yes";

    let display = String(val).padEnd(10);
    console.log(`  ${display}  ${String(a).padEnd(12)}  ${String(b).padEnd(12)}  ${c}`);
}

console.log("");
console.log("  Key observation:");
console.log("  - &&= only keeps falsy values (0, '', false, null, undefined, NaN)");
console.log("  - ||= only keeps truthy values");
console.log("  - ??= keeps everything except null and undefined");

console.log("");

// =============================================
// SHORTHAND vs LONG FORM COMPARISON
// =============================================
console.log("=== SHORTHAND vs LONG FORM ===\n");

let x, y, z;

// &&=
x = true;
x &&= "value";
// Is the same as:
// if (x) { x = "value"; }

// ||=
y = null;
y ||= "value";
// Is the same as:
// if (!y) { y = "value"; }

// ??=
z = null;
z ??= "value";
// Is the same as:
// if (z === null || z === undefined) { z = "value"; }

console.log("  &&= result:", x);  // "value"
console.log("  ||= result:", y);  // "value"
console.log("  ??= result:", z);  // "value"

// =============================================
// SUMMARY
// =============================================
// &&=  → assignment ONLY if current value is truthy
//        x &&= y   →   x = x && y   →   if (x) x = y
//
// ||=  → assignment ONLY if current value is falsy
//        x ||= y   →   x = x || y   →   if (!x) x = y
//
// ??=  → assignment ONLY if current value is null/undefined
//        x ??= y   →   x = x ?? y   →   if (x == null) x = y
//
// Use ??= when 0, "", or false are valid values (avoid ||= for those).
// Use ||= for simple default fallbacks when falsy = missing.
// Use &&= for updating only when current value is valid.
// =============================================
