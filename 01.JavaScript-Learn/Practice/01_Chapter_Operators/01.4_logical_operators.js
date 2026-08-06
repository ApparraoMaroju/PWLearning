// =============================================
// Program: LOGICAL OPERATORS (&&, ||, !)
// =============================================
// Logical operators combine or invert conditions.
//
//   &&  AND  — true only if BOTH sides are true
//   ||  OR   — true if AT LEAST ONE side is true
//   !   NOT  — flips true ↔ false
//
// They also do short-circuit evaluation and return the
// actual values involved (not always true/false).
// =============================================

// Example 1: AND (&&) — truth table
console.log("Example 1: AND (&&)");

console.log("true && true   →", true && true);    // true
console.log("true && false  →", true && false);   // false
console.log("false && true  →", false && true);   // false
console.log("false && false →", false && false);  // false

console.log("");

// Example 2: OR (||) — truth table
console.log("Example 2: OR (||)");

console.log("true || true   →", true || true);    // true
console.log("true || false  →", true || false);   // true
console.log("false || true  →", false || true);   // true
console.log("false || false →", false || false);  // false

console.log("");

// Example 3: NOT (!) — truth table
console.log("Example 3: NOT (!)");

console.log("!true  →", !true);    // false
console.log("!false →", !false);   // true
console.log("!!42   →", !!42);     // true  (double NOT → convert to boolean)
console.log("!!0    →", !!0);      // false

console.log("");

// Example 4: Combining with comparison operators
console.log("Example 4: Combined conditions");

let age = 25;
let hasLicense = true;

console.log("age >= 18 && hasLicense →", age >= 18 && hasLicense);  // true

let score = 85;
console.log("score >= 90 || score >= 80 →", score >= 90 || score >= 80);  // true

console.log("");

// Example 5: Mixing && and || with parentheses
console.log("Example 5: Mixing operators");

let loggedIn = true;
let isAdmin = false;
let isOwner = true;

let canEdit = loggedIn && (isAdmin || isOwner);
console.log("Can edit:", canEdit);  // true

console.log("");

// Example 6: Short-circuit evaluation
console.log("Example 6: Short-circuit behavior");

// && stops at the first FALSY value:
console.log("0 && 'second'       →", 0 && "second");        // 0
console.log("'first' && 'second' →", "first" && "second");  // "second" (last value)

// || stops at the first TRUTHY value:
console.log("'first' || 'second' →", "first" || "second");  // "first"
console.log("0 || 'second'       →", 0 || "second");        // "second"

console.log("");

// Example 7: || for default values
console.log("Example 7: Default values with ||");

let username = "";
let displayName = username || "Guest";
console.log("Display name:", displayName);  // "Guest" ("" is falsy)

let nickname = "Bob";
console.log("Display name:", nickname || "Guest");  // "Bob"

console.log("");

// Example 8: && as a guard
console.log("Example 8: Guard with &&");

let user = { name: "Alice" };
user && console.log("User exists:", user.name);  // runs only if user is truthy

let emptyUser = null;
emptyUser && console.log("This will NOT print");  // skipped (null is falsy)

console.log("");

// Example 9: ! in conditions
console.log("Example 9: NOT in if");

let isDarkMode = false;
if (!isDarkMode) {
    console.log("Enabling dark mode...");
}

console.log("");

// Example 10: Operator precedence (! > && > ||)
console.log("Example 10: Precedence");

console.log("true || false && false →", true || false && false);
// Evaluated as: true || (false && false) → true || false → true

console.log("(true || false) && false →", (true || false) && false);  // false

console.log("");

// Example 11: Logical operators with non-boolean values
console.log("Example 11: Non-boolean operands");

console.log("'Hello' && 42     →", "Hello" && 42);      // 42 (both truthy → last value)
console.log("null && 42        →", null && 42);         // null (first falsy)
console.log("'' || 'fallback'  →", "" || "fallback");   // "fallback"
console.log("'first' && 'last' →", "first" && "last");  // "last"

// =============================================
// SUMMARY
// - && = both true; || = at least one true; ! = flip
// - && and || return VALUES (short-circuit), not just booleans
// - || is handy for defaults; && is handy for guards
// - Precedence: ! > && > || (use parentheses to be clear)
// =============================================
