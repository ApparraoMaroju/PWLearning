// =============================================
// Program: OPTIONAL CHAINING (?.)  (ES2020)
// =============================================
// Optional chaining lets you safely access nested object properties
// without crashing if an intermediate value is null or undefined.
// Instead of throwing an error, it returns undefined.
// =============================================

// =============================================
// THE PROBLEM — without optional chaining
// =============================================
console.log("=== THE PROBLEM ===\n");

let user = {
    name: "Alice",
    address: {
        city: "New York"
        // Note: zipcode is NOT defined
    }
};

// This works fine:
console.log("City:", user.address.city);  // "New York"

// But this CRASHES:
try {
    console.log("Zipcode length:", user.address.zipcode.length);
} catch (error) {
    console.log("❌ Error without ?.:", error.message);
    // TypeError: Cannot read properties of undefined (reading 'length')
}
// Because user.address.zipcode is undefined, and undefined.length crashes.

console.log("");

// =============================================
// THE SOLUTION — with optional chaining (?.)
// =============================================
console.log("=== THE SOLUTION ===\n");

// ?. stops evaluation if the value is null/undefined and returns undefined

console.log("Zipcode length (with ?.):", user.address?.zipcode?.length);
// Instead of crashing, returns undefined

console.log("City (with ?.):", user.address?.city);  // "New York" (still works)
console.log("Country (with ?.):", user.address?.country);  // undefined

console.log("");

// =============================================
// ?. with PROPERTY ACCESS
// =============================================
console.log("=== PROPERTY ACCESS ===\n");

let user2 = {
    profile: {
        name: "Bob"
        // no age field
    }
};

// Safe access to nested properties
console.log("Name:", user2?.profile?.name);    // "Bob"
console.log("Age:", user2?.profile?.age);      // undefined (no crash)

// Deeply nested
console.log("City:", user2?.profile?.address?.city);  // undefined (no crash)

// What if user2 itself is null?
let user3 = null;
console.log("null user:", user3?.name);  // undefined (not a crash!)

// Without ?., this would crash:
// console.log(user3.name);  // TypeError

console.log("");

// =============================================
// ?. with METHOD CALLS  (?.)
// =============================================
console.log("=== METHOD CALLS ===\n");

let user4 = {
    name: "Charlie",
    greet() {
        return "Hello!";
    }
    // No sayGoodbye method
};

// Calling existing method — works fine
console.log("Greet:", user4.greet?.());  // "Hello!"

// Calling non-existent method — safely returns undefined
console.log("Goodbye:", user4.sayGoodbye?.());  // undefined (no crash!)

// Without ?. — would crash:
// console.log(user4.sayGoodbye());  // TypeError

console.log("");

// =============================================
// ?. with ARRAY INDEX ACCESS  (?.[])
// =============================================
console.log("=== ARRAY ACCESS ===\n");

let data = {
    items: ["apple", "banana"]
    // No 'tags' array
};

// Accessing existing array
console.log("Item[0]:", data?.items?.[0]);  // "apple"

// Accessing non-existent array
console.log("Tags[0]:", data?.tags?.[0]);  // undefined (no crash)

// Nested array access
let config = {
    settings: [
        { key: "theme", value: "dark" }
    ]
};

console.log("First setting key:", config?.settings?.[0]?.key);  // "theme"
console.log("Third setting:", config?.settings?.[2]?.value);    // undefined

console.log("");

// =============================================
// COMBINING ?. with ?? (Nullish Coalescing)
// =============================================
console.log("=== COMBINING WITH ?? ===\n");

// ?. alone returns undefined when a value is missing.
// ?? provides a default when the result is null/undefined.

let user5 = {
    profile: {
        // name is missing
    }
};

let userName = user5?.profile?.name ?? "Anonymous";
console.log("Username:", userName);  // "Anonymous" (name was undefined)

let userCity = user5?.profile?.address?.city ?? "Unknown City";
console.log("City:", userCity);  // "Unknown City"

// More practical
function getDisplayName(user) {
    return user?.name ?? user?.username ?? "Guest";
}

console.log("\nUsing function:");
console.log("  getDisplayName({name:'Alice'}):", getDisplayName({ name: "Alice" }));   // "Alice"
console.log("  getDisplayName({username:'bob'}):", getDisplayName({ username: "bob" })); // "bob"
console.log("  getDisplayName({}):", getDisplayName({}));               // "Guest"
console.log("  getDisplayName(null):", getDisplayName(null));            // "Guest"

console.log("");

// =============================================
// PRACTICAL REAL-WORLD EXAMPLES
// =============================================
console.log("=== REAL-WORLD EXAMPLES ===\n");

// Example 1: API response data
let apiResponse = {
    status: 200,
    data: {
        user: {
            id: 123,
            name: "Alice",
            preferences: {
                theme: "dark"
                // notifications not set
            }
        }
    }
};

console.log("Example 1: API Response");
console.log("  Theme:", apiResponse?.data?.user?.preferences?.theme ?? "light");
// → "dark" (found)

console.log("  Notifications:",
    apiResponse?.data?.user?.preferences?.notifications?.enabled ?? "default (on)");
// → "default (on)" (notifications not set, falls back)

console.log("  Bio:", apiResponse?.data?.user?.bio ?? "No bio available");
// → "No bio available"

console.log("");

// Example 2: Form validation
let formData = {
    contact: {
        email: "alice@example.com"
        // phone not filled
    }
};

console.log("Example 2: Form Data");
console.log("  Email:", formData?.contact?.email ?? "Not provided");
console.log("  Phone:", formData?.contact?.phone ?? "Not provided");

console.log("");

// Example 3: Conditional method call
let logger = {
    log: (msg) => console.log("  [LOG]:", msg)
    // No 'warn' method
};

console.log("Example 3: Logger");
logger.log?.("This works fine");       // runs
logger.warn?.("This is a warning");    // safely skipped (no crash)

console.log("");

// Example 4: Chaining through multiple levels
let company = {
    departments: {
        engineering: {
            manager: {
                name: "Bob",
                email: "bob@company.com"
            }
        }
        // No 'marketing' department
    }
};

console.log("Example 4: Company Structure");
let engManager = company?.departments?.engineering?.manager?.name ?? "No manager";
let marketingManager = company?.departments?.marketing?.manager?.name ?? "No manager";

console.log("  Engineering manager:", engManager);    // "Bob"
console.log("  Marketing manager:", marketingManager); // "No manager"

// =============================================
// SUMMARY
// =============================================
// ?. (Optional chaining) — safely access nested values
//
// Syntax variants:
//   obj?.prop        → property access
//   obj?.method()    → method call (only if method exists)
//   arr?.[index]     → array index access
//
// Key behavior:
//   - Returns undefined if anything in the chain is null/undefined
//   - Never throws "Cannot read properties of undefined/null"
//   - Combine with ?? for default values
//   - Can be chained: obj?.a?.b?.c?.d
// =============================================
