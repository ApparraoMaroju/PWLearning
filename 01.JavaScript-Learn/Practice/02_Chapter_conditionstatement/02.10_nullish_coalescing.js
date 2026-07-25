// =============================================
// Program: NULLISH COALESCING OPERATOR (??)  (ES2020)
// =============================================
// The nullish coalescing operator (??) returns the right-side value
// ONLY when the left-side value is null or undefined.
//
// This differs from || which returns the right-side for ALL falsy values
// (0, "", false, null, undefined, NaN).
// =============================================

// =============================================
// BASIC SYNTAX
// =============================================
console.log("=== BASIC SYNTAX ===\n");

let result;

// When left side is null → returns right side
result = null ?? "default";
console.log("null ?? 'default' =", result);  // "default"

// When left side is undefined → returns right side
result = undefined ?? "default";
console.log("undefined ?? 'default' =", result);  // "default"

// When left side has a value → returns left side
result = "hello" ?? "default";
console.log("'hello' ?? 'default' =", result);  // "hello"

result = 42 ?? "default";
console.log("42 ?? 'default' =", result);  // 42

console.log("");

// =============================================
// ?? vs || — THE CRITICAL DIFFERENCE
// =============================================
console.log("=== ?? vs || — THE CRITICAL DIFFERENCE ===\n");
console.log("The key difference: || treats ALL falsy values as 'no value'");
console.log("?? treats ONLY null and undefined as 'no value'\n");

let tests = [
    { label: "0",        value: 0 },
    { label: '""',       value: "" },
    { label: "false",   value: false },
    { label: "null",    value: null },
    { label: "undefined", value: undefined },
    { label: "NaN",     value: NaN },
];

for (let t of tests) {
    let withOr = t.value || "fallback";
    let withNullish = t.value ?? "fallback";
    console.log(`  ${t.label.padEnd(10)} → ||: ${String(withOr).padEnd(10)} | ?? : ${String(withNullish).padEnd(10)}`);
}
//                 ||                    ??
// 0          →   "fallback"      |   0              (?? preserves 0)
// ""         →   "fallback"      |   ""             (?? preserves "")
// false      →   "fallback"      |   false          (?? preserves false)
// null       →   "fallback"      |   "fallback"     (both fall back)
// undefined  →   "fallback"      |   "fallback"     (both fall back)
// NaN        →   "fallback"      |   NaN            (?? preserves NaN)

console.log("");

// =============================================
// PRACTICAL EXAMPLES — when || is WRONG
// =============================================
console.log("=== PRACTICAL EXAMPLES ===\n");

// Example 1: Age — 0 is a valid age, not "missing"
console.log("Example 1: Age input");
let ageInput = 0;  // user entered 0 (a baby's age)

let ageWithOR = ageInput || 18;      // WRONG — gives 18
let ageWithNullish = ageInput ?? 18; // CORRECT — gives 0

console.log("  age =", ageInput);
console.log("  Using ||:", ageWithOR, "(WRONG — should be 0)");
console.log("  Using ??:", ageWithNullish, "(CORRECT — preserves 0)");

console.log("");

// Example 2: Empty string — "" is a valid user input
console.log("Example 2: Empty string input");
let nickname = "";  // user cleared the field intentionally

let nameWithOR = nickname || "Anonymous";      // WRONG
let nameWithNullish = nickname ?? "Anonymous";  // CORRECT

console.log('  nickname = ""');
console.log("  Using ||:", nameWithOR, "(WRONG — should be '')");
console.log("  Using ??:", `"${nameWithNullish}"`, "(CORRECT — preserves '')");

console.log("");

// Example 3: Boolean false
console.log("Example 3: Boolean flag");
let showSidebar = false;  // user explicitly turned it off

let sidebarWithOR = showSidebar || true;      // WRONG — gives true
let sidebarWithNullish = showSidebar ?? true;  // CORRECT — gives false

console.log("  showSidebar =", showSidebar);
console.log("  Using ||:", sidebarWithOR, "(WRONG — should be false)");
console.log("  Using ??:", sidebarWithNullish, "(CORRECT — preserves false)");

console.log("");

// =============================================
// WHEN TO USE ??  vs  ||
// =============================================
console.log("=== WHEN TO USE WHICH ===\n");

console.log("Use ??  when:");
console.log("  - null/undefined means 'missing', but 0, '', false are valid values");
console.log("  - User input fields (age, name, preferences)");

console.log("\nUse ||  when:");
console.log("  - You want to fall back for ANY falsy value");
console.log("  - Simple default values where 0, '', false don't matter");

console.log("");

// =============================================
// COMBINING ?? with OPTIONAL CHAINING (?.)
// =============================================
console.log("=== ?? + ?. (POWER COMBO) ===\n");

// ?. safely accesses nested properties
// ?? provides default when result is null/undefined

let user = {
    name: "Alice",
    settings: {
        theme: "dark",
        fontSize: 0  // valid value!
    }
};

let theme = user?.settings?.theme ?? "light";
let fontSize = user?.settings?.fontSize ?? 16;
let language = user?.settings?.language ?? "en";

console.log("  Theme:", theme);        // "dark" (found)
console.log("  Font size:", fontSize); // 0 (preserved by ??, correct!)
console.log("  Language:", language);  // "en" (not set → fallback)

// Contrast with || — would be wrong
let fontSizeWrong = user?.settings?.fontSize || 16;
console.log("  Font size with ||:", fontSizeWrong);  // 16 (WRONG! 0 is valid)

console.log("");

// =============================================
// ?? with FUNCTIONS
// =============================================
console.log("=== ?? WITH FUNCTIONS ===\n");

function getConfig(key) {
    let configs = {
        host: "localhost",
        port: 3000,
        debug: false
    };
    return configs[key] ?? "not found";
}

console.log("  host:", getConfig("host"));    // "localhost"
console.log("  port:", getConfig("port"));    // 3000
console.log("  debug:", getConfig("debug"));  // false (correct — a valid value)
console.log("  path:", getConfig("path"));    // "not found" (doesn't exist)

console.log("");

// =============================================
// ?? CHAINING
// =============================================
console.log("=== CHAINING ?? ===\n");

// You can chain multiple ?? operators — it picks the FIRST non-null/undefined value
let a = null;
let b = undefined;
let c = "first value";
let d = "second value";

let result2 = a ?? b ?? c ?? d;
console.log("null ?? undefined ?? 'first' ?? 'second' =", result2);
// "first value" (first non-nullish value)

a = null;
b = "actual value";
result2 = a ?? b ?? "default";
console.log("null ?? 'actual' ?? 'default' =", result2);
// "actual value"

console.log("");

// =============================================
// IMPORTANT: ?? CANNOT BE CHAINED WITH && or ||
// =============================================
console.log("=== RESTRICTION ===\n");

// You CANNOT mix ?? with && or || in the same expression without parentheses

try {
    // This will throw a syntax error:
    // let x = null || "hello" ?? "world";  // SyntaxError!
} catch (e) {
    console.log("❌ Cannot mix ?? with || or &&");
}

// Use parentheses to be explicit:
let x = (null || "hello") ?? "world";
console.log("  (null || 'hello') ?? 'world' =", x);  // "hello"

let y = null ?? ("hello" || "world");
console.log("  null ?? ('hello' || 'world') =", y);  // "hello"

console.log("");

// =============================================
// SUMMARY
// =============================================
// ?? (Nullish Coalescing):
//   value ?? defaultValue
//   → returns defaultValue only if value is null or undefined
//   → otherwise returns value itself
//
// Key difference from ||:
//   ||  falls back for:  false, 0, "", null, undefined, NaN  (ALL falsy)
//   ??  falls back for:  null, undefined only
//
// Use ?? when 0, "", or false are legitimate values.
// Use || when you want ANY falsy value to trigger the fallback.
// Combine ?? with ?. for safe nested access with defaults.
// Cannot mix ?? with && or || without parentheses.
// =============================================
