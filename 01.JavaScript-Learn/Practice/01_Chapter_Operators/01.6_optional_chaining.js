// =============================================
// Program: OPTIONAL CHAINING (?.) — ES2020
// =============================================
// Safely access nested properties, array items, or call
// methods WITHOUT crashing when an intermediate value
// is null or undefined. Returns undefined instead.
//
//   obj?.prop        → property access
//   obj?.[key]       → dynamic key access
//   obj.method?.()   → method call (only if it exists)
// =============================================

// Example 1: The problem — without ?.
console.log("Example 1: The problem");

let user = {
    name: "Alice",
    address: {
        city: "New York"
        // no zipcode
    }
};

// This would CRASH:
// console.log(user.address.zipcode.toUpperCase());
// ❌ TypeError: Cannot read properties of undefined

console.log("");

// Example 2: Safe access with ?.
console.log("Example 2: Safe property access");

console.log("City:", user.address?.city);                 // "New York"
console.log("Zipcode:", user.address?.zipcode);           // undefined (no crash)
console.log("Zipcode uppercase:", user.address?.zipcode?.toUpperCase());  // undefined

console.log("");

// Example 3: Missing intermediate object
console.log("Example 3: Missing middle level");

let customer = {
    name: "Bob"
    // no address
};

console.log("Address:", customer.address);        // undefined
console.log("City:", customer.address?.city);     // undefined (no crash)
console.log("customer?.name:", customer?.name);   // "Bob"

console.log("");

// Example 4: Optional method call ?.()
console.log("Example 4: Method calls");

let userWithGreet = {
    name: "Alice",
    greet() {
        return "Hello, " + this.name + "!";
    }
};

let userWithoutGreet = { name: "Bob" };

console.log("With greet:", userWithGreet.greet?.());     // "Hello, Alice!"
console.log("Without greet:", userWithoutGreet.greet?.());  // undefined (safe)

console.log("");

// Example 5: Array access ?.[]
console.log("Example 5: Array access");

let config = {
    features: ["dark-mode", "search"]
};

console.log("First feature:", config.features?.[0]);   // "dark-mode"
console.log("Tenth feature:", config.features?.[9]);   // undefined (safe)

let key = "name";
console.log("Dynamic key:", user?.[key]);              // "Alice"

console.log("");

// Example 6: ?. in conditions
console.log("Example 6: Checking before using");

let data = {
    profile: {
        name: "Alice"
    }
};

if (data?.profile?.name) {
    console.log("Profile name:", data.profile.name);
} else {
    console.log("No profile name available.");
}

let nothing = null;
console.log("nothing?.profile?.name →", nothing?.profile?.name);  // undefined (no crash)

console.log("");

// Example 7: ?. combined with ?? (nullish coalescing)
console.log("Example 7: ?. + ?? for safe defaults");

let settings = {
    theme: "dark"
    // no fontSize
};

let fontSize = settings?.fontSize ?? 14;   // undefined ?? 14 → 14
let theme = settings?.theme ?? "light";    // "dark" ?? "light" → "dark"

console.log("Font size:", fontSize);  // 14
console.log("Theme:", theme);         // "dark"

console.log("");

// Example 8: Short-circuiting
console.log("Example 8: Short-circuit behavior");

let a = null;
let result = a?.someMethod().anotherMethod();  // stops at null → undefined
console.log("Result:", result);  // undefined

// =============================================
// SUMMARY
// - ?. returns undefined instead of throwing when a link is null/undefined
// - Forms: obj?.prop, obj?.[key], obj.method?.()
// - Pairs well with ?? to supply defaults
// - Use it at API/data boundaries, not everywhere
// =============================================
