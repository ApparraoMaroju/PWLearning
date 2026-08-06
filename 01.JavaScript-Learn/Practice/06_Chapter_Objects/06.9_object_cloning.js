// =============================================
// Program: OBJECT CLONING — SHALLOW vs DEEP
// =============================================
// SHALLOW copy — top level is copied, but nested
// objects/arrays are still SHARED.
// DEEP copy — everything is copied (nested too).
// =============================================

// Example 1: Shallow copy with spread
console.log("Example 1: Shallow copy");

let original = {
    name: "Team",
    members: ["Alice", "Bob"],
    lead: { name: "Carol" }
};

let shallow = { ...original };

console.log("Top level separate?", shallow !== original);  // true
console.log("Nested array shared?", shallow.members === original.members);  // true!
console.log("Nested object shared?", shallow.lead === original.lead);  // true!

console.log("");

// Example 2: The problem — mutating nested data
console.log("Example 2: Mutation leaks through");

shallow.members.push("Dave");

console.log("original.members:", original.members);
// ['Alice', 'Bob', 'Dave'] — the shallow copy changed the original!

console.log("");

// Example 3: JSON deep copy (simple objects)
console.log("Example 3: JSON deep copy");

let deepCopy = JSON.parse(JSON.stringify(original));

console.log("Deep copy separate?", deepCopy !== original);          // true
console.log("Members separate?", deepCopy.members !== original.members);  // true

deepCopy.members.push("Eve");
console.log("original.members:", original.members);  // unchanged
console.log("deepCopy.members:", deepCopy.members);

console.log("");

// Example 4: JSON copy limitations
console.log("Example 4: JSON copy limitations");

let withFunction = {
    name: "Calculator",
    add(a, b) { return a + b; },        // functions are DROPPED
    date: new Date()                    // becomes a string!
};

let jsonCopy = JSON.parse(JSON.stringify(withFunction));

console.log("Functions survive?", typeof jsonCopy.add);  // "undefined" (dropped)
console.log("Date type:", typeof jsonCopy.date);         // "string" (not a Date)

console.log("");

// Example 5: structuredClone() — modern deep copy
console.log("Example 5: structuredClone");

let data = {
    name: "App",
    settings: { theme: "dark", counts: [1, 2, 3] }
};

let cloned = structuredClone(data);

console.log("Same?", cloned === data);                    // false
console.log("Nested same?", cloned.settings === data.settings);  // false (truly deep)

cloned.settings.counts.push(4);
console.log("original counts:", data.settings.counts);  // [1, 2, 3] (safe)

console.log("");

// Example 6: Manual deep clone with recursion
console.log("Example 6: Recursive deep clone");

function deepClone(value) {
    if (Array.isArray(value)) {
        return value.map(deepClone);
    }
    if (value !== null && typeof value === "object") {
        let result = {};
        for (let key of Object.keys(value)) {
            result[key] = deepClone(value[key]);
        }
        return result;
    }
    return value;   // primitives are copied by value
}

let manualClone = deepClone(original);
manualClone.members.push("Frank");

console.log("original.members:", original.members);  // unchanged
console.log("manualClone.members:", manualClone.members);

console.log("");

// Example 7: When shallow is enough
console.log("Example 7: Shallow is often fine");

// For flat objects, shallow copy IS a full copy:
let flat = { name: "Alice", age: 25 };
let flatCopy = { ...flat };
flatCopy.age = 30;

console.log("flat.age:", flat.age);        // 25 (safe)
console.log("flatCopy.age:", flatCopy.age);  // 30

// =============================================
// SUMMARY
// - Shallow: { ...obj } — flat objects OK, nested shared
// - JSON copy — simple but drops functions/Dates
// - structuredClone — modern, handles most types deeply
// - Manual recursion — full control
// - Choose depth based on your data
// =============================================
