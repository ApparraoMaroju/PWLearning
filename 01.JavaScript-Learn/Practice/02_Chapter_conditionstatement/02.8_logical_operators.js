// =============================================
// Program: LOGICAL OPERATORS (&&, ||, !)
// =============================================
// Logical operators combine or invert conditions.
// They work with boolean values but can also return
// non-boolean values through short-circuit evaluation.
// =============================================

// =============================================
// 1. AND (&&)  — true only if BOTH sides are true
// =============================================
console.log("=== AND (&&) OPERATOR ===\n");

console.log("Truth table:");
console.log("   true  && true  =", true && true);   // true
console.log("   true  && false =", true && false);  // false
console.log("   false && true  =", false && true);  // false
console.log("   false && false =", false && false); // false

console.log("");

// Practical example — both conditions must be true
let age = 25;
let hasLicense = true;

console.log("Practical: Can you drive?");
if (age >= 18 && hasLicense) {
    console.log("   Yes — you are", age, "and have a license. ✅");
} else {
    console.log("   No — you need to be 18+ AND have a license.");
}

// What if one condition fails?
let age2 = 16;
if (age2 >= 18 && hasLicense) {
    console.log("   (won't print — age2 is 16)");
} else {
    console.log("   With age=16: Cannot drive. ❌");
}

console.log("");

// =============================================
// 2. OR (||)  — true if AT LEAST ONE side is true
// =============================================
console.log("=== OR (||) OPERATOR ===\n");

console.log("Truth table:");
console.log("   true  || true  =", true || true);   // true
console.log("   true  || false =", true || false);  // true
console.log("   false || true  =", false || true);  // true
console.log("   false || false =", false || false); // false

console.log("");

// Practical example — at least one condition must be true
let isPremium = false;
let cartTotal = 150;

console.log("Practical: Free shipping?");
if (isPremium || cartTotal >= 100) {
    console.log("   You qualify for free shipping! 🚚");  // true (cart >= 100)
} else {
    console.log("   Shipping costs apply.");
}

// Both false = no free shipping
let isPremium2 = false;
let cartTotal2 = 50;
if (isPremium2 || cartTotal2 >= 100) {
    console.log("   (won't print)");
} else {
    console.log("   With cart=$50: No free shipping.");
}

console.log("");

// =============================================
// 3. NOT (!)  — inverts true ↔ false
// =============================================
console.log("=== NOT (!) OPERATOR ===\n");

console.log("Truth table:");
console.log("   !true  =", !true);   // false
console.log("   !false =", !false);  // true

console.log("");

// Practical examples
let isLoggedIn = false;

console.log("Practical: Access control");
if (!isLoggedIn) {
    console.log("   Please log in to continue.");  // !false = true
}

let isDarkMode = true;
if (!isDarkMode) {
    console.log("   (this won't print — dark mode is on)");
} else {
    console.log("   Dark mode is ON.");
}

// Double NOT (!!) — converts any value to its boolean equivalent
console.log("\nDouble NOT (!!) — convert to boolean:");
console.log('   !!0        =', !!0);         // false (0 is falsy)
console.log('   !!1        =', !!1);         // true
console.log('   !!"hello"  =', !!"hello");   // true
console.log('   !!""       =', !!"");        // false
console.log('   !!null     =', !!null);      // false
console.log('   !![]       =', !![]);        // true (empty array is truthy)

console.log("");

// =============================================
// 4. SHORT-CIRCUIT EVALUATION
// =============================================
// JavaScript evaluates && and || left to right and STOPS
// as soon as the result is determined.
//
// && stops at the first falsy value.
// || stops at the first truthy value.

console.log("=== SHORT-CIRCUIT EVALUATION ===\n");

// && short-circuit
console.log("&& short-circuit:");
let result = 0 && console.log("This won't run — 0 is falsy");
console.log("   0 && ... =", result);  // 0 (stops at first falsy)

result = 5 && 10 && 0 && 20;
console.log("   5 && 10 && 0 && 20 =", result);  // 0 (third value is falsy)

result = 5 && 10 && 15;
console.log("   5 && 10 && 15 =", result);  // 15 (all truthy → returns last value)

console.log("");

// || short-circuit
console.log("|| short-circuit:");
result = 5 || console.log("This won't run — 5 is truthy");
console.log("   5 || ... =", result);  // 5 (stops at first truthy)

result = 0 || "" || null || "hello" || 42;
console.log('   0 || "" || null || "hello" || 42 =', result);  // "hello" (first truthy)

result = 0 || "" || null;
console.log('   0 || "" || null =', result);  // null (all falsy → returns last value)

console.log("");

// =============================================
// 5. COMBINING && and ||
// =============================================
// && has higher precedence than || (like multiplication before addition).

console.log("=== COMBINING && and || ===\n");

// Without parentheses
let combined = true || false && false;
// && runs first: false && false = false
// Then: true || false = true
console.log("   true || false && false =", combined);  // true

// With parentheses — changes the meaning
combined = (true || false) && false;
// || runs first: true || false = true
// Then: true && false = false
console.log("   (true || false) && false =", combined);  // false

// Rule: use parentheses to make your intent clear!

console.log("");

// Practical: Complex condition
let user = { name: "Alice" };
let isMember = false;
let purchaseAmount = 200;

// Check: is user valid AND (is member OR purchased enough)
if (user && (isMember || purchaseAmount >= 100)) {
    console.log("   User gets discount! 🎉");  // true: user exists AND (false || true)
} else {
    console.log("   No discount.");
}

console.log("");

// =============================================
// 6. PRACTICAL PATTERNS
// =============================================
console.log("=== PRACTICAL PATTERNS ===\n");

// Pattern 1: Guard — run only if condition is true
let isReady = true;
console.log("Pattern 1 — Guard with &&");
isReady && console.log("   System is ready! Proceeding...");

// Pattern 2: Default value with ||
console.log("\nPattern 2 — Default value with ||");
let userInput = "";
let name = userInput || "Guest";
console.log('   input: "" → name:', name);  // "Guest"

// Pattern 3: Conditional execution
let isDebugMode = true;
console.log("\nPattern 3 — Debug logging");
isDebugMode && console.log("   [DEBUG] Variable x = 42");

// Pattern 4: Multiple conditions in if
console.log("\nPattern 4 — Complex eligibility");
let hasAccount = true;
let isVerified = true;
let hasSubscription = false;

if (hasAccount && isVerified && (hasSubscription || purchaseAmount >= 50)) {
    console.log("   All checks passed! ✅");
} else {
    console.log("   Some requirements not met.");
}

// Pattern 5: Toggle with !
console.log("\nPattern 5 — Toggle state");
let isOpen = false;
isOpen = !isOpen;  // toggle
console.log("   After toggle 1:", isOpen);  // true
isOpen = !isOpen;  // toggle back
console.log("   After toggle 2:", isOpen);  // false

// =============================================
// SUMMARY
// =============================================
// && : both must be true              (stops at first falsy)
// || : at least one must be true      (stops at first truthy)
// !  : inverts true ↔ false
// !! : converts any value to boolean
//
// Short-circuit rules:
//   a && b && c  → returns first falsy, or last if all truthy
//   a || b || c  → returns first truthy, or last if all falsy
//
// Precedence: ! > && > ||
// Use parentheses when combining different operators!
// =============================================
