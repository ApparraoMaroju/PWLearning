// =============================================
// Program: NULLISH COALESCING (??) — ES2020
// =============================================
// Returns the RIGHT side only when the LEFT side is
// null or undefined. Unlike ||, it does NOT treat
// 0, "", or false as "missing".
//
//   value ?? fallback
// =============================================

// Example 1: Basic ?? behavior
console.log("Example 1: Basic ?? behavior");

console.log("null ?? 'fallback'      →", null ?? "fallback");       // "fallback"
console.log("undefined ?? 'fallback' →", undefined ?? "fallback");  // "fallback"
console.log("'value' ?? 'fallback'   →", "value" ?? "fallback");    // "value"

console.log("");

// Example 2: ?? vs || — THE key difference
console.log("Example 2: ?? vs || with falsy-but-valid values");

let age = 0;   // 0 is a valid age!

console.log("age || 18  →", age || 18);   // 18  (|| treats 0 as missing)
console.log("age ?? 18  →", age ?? 18);   // 0   (?? keeps 0 — not null/undefined)

console.log("");

// Example 3: Empty string behavior
console.log("Example 3: Empty string");

let name = "";

console.log('name || "Guest" →', name || "Guest");  // "Guest" (|| treats "" as missing)
console.log('name ?? "Guest" →', name ?? "Guest");   // ""      (?? keeps "")

console.log("");

// Example 4: false is preserved by ??
console.log("Example 4: false behavior");

let notifications = false;   // user explicitly disabled notifications

console.log("notifications || true →", notifications || true);  // true (wrong!)
console.log("notifications ?? true →", notifications ?? true);  // false (correct)

console.log("");

// Example 5: ?? with variables
console.log("Example 5: Setting defaults");

let input = null;
let result = input ?? "default value";
console.log("Result:", result);  // "default value"

input = "hello";
result = input ?? "default value";
console.log("Result:", result);  // "hello"

console.log("");

// Example 6: ?? in function parameters
console.log("Example 6: ?? with function args");

function greet(name) {
    let displayName = name ?? "Guest";
    console.log("Hello,", displayName + "!");
}

greet("Alice");   // Hello, Alice!
greet(undefined); // Hello, Guest!
greet(null);      // Hello, Guest!

console.log("");

// Example 7: ?? cannot mix with || or && without parentheses
console.log("Example 7: Mixing ?? with other operators");

// a ?? b || c    → SyntaxError! Must wrap in parentheses:
let a = null;
let b = "b";
let c = "c";

let combined = (a ?? b) || c;
console.log("(a ?? b) || c →", combined);  // "b"

console.log("");

// Example 8: ?? chained
console.log("Example 8: Chained ??");

let first = null;
let second = undefined;
let third = "found!";

console.log("Result:", first ?? second ?? third);  // "found!"

console.log("");

// Example 9: Practical — configuration with defaults
console.log("Example 9: Config object defaults");

let config = {
    theme: "dark"
    // no fontSize, no showBanner
};

let fontSize = config.fontSize ?? 16;
let theme = config.theme ?? "light";
let showBanner = config.showBanner ?? true;

console.log("fontSize:", fontSize);      // 16
console.log("theme:", theme);            // "dark"
console.log("showBanner:", showBanner);  // true

// =============================================
// SUMMARY
// - ?? returns the right side ONLY for null/undefined
// - Preserves 0, "", false (unlike ||)
// - Use ?? when 0/""/false are meaningful values
// - Wrap in parentheses when mixing with || or &&
// =============================================
