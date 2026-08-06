// =============================================
// Program: let & const  (ES6)
// =============================================
// let  — block-scoped, reassignable
// const — block-scoped, cannot be reassigned
// var  — function-scoped (the OLD way, avoid)
// =============================================

// Example 1: let vs const
console.log("Example 1: let vs const");

let count = 1;
count = 2;              // ✅ let can be reassigned
console.log("let count:", count);

const pi = 3.14159;
// pi = 3;   // ❌ TypeError: Assignment to constant variable
console.log("const pi:", pi);

console.log("");

// Example 2: const objects/arrays are still mutable
console.log("Example 2: const with objects");

const user = { name: "Alice" };
user.name = "Bob";        // ✅ allowed — we're not reassigning the variable
user.age = 25;            // ✅ adding properties is fine
// user = {};             // ❌ cannot reassign the variable

console.log("user:", user);

const arr = [1, 2, 3];
arr.push(4);              // ✅ allowed
console.log("arr:", arr);

console.log("");

// Example 3: Block scope with let/const
console.log("Example 3: Block scope");

{
    let blockLet = "let in block";
    const blockConst = "const in block";
    console.log("Inside:", blockLet, blockConst);
}
// console.log(blockLet);   // ❌ ReferenceError — block scoped

console.log("");

// Example 4: var is function-scoped, not block-scoped
console.log("Example 4: var vs let/const");

if (true) {
    var varValue = "var escapes the block";
    let letValue = "let stays in the block";
}

console.log("varValue:", varValue);   // "var escapes the block"
// console.log(letValue);  // ❌ ReferenceError

console.log("");

// Example 5: Temporal Dead Zone (TDZ)
console.log("Example 5: TDZ");

// console.log(myLet);  // ❌ ReferenceError — cannot access before declaration

let myLet = "defined later";
console.log("myLet:", myLet);  // works after declaration

// var is hoisted and initialized to undefined:
console.log("varHoisted:", varHoisted);  // undefined (no error)
var varHoisted = "var is hoisted";

console.log("");

// Example 6: When to use let vs const
console.log("Example 6: Choosing");

// Default to const:
const maxRetries = 3;
const settings = { dark: true };

// Use let when you must reassign:
let attempt = 0;
for (let i = 0; i < 3; i++) {   // i must be reassigned → let
    attempt++;
}
console.log("attempts:", attempt);

console.log("");

// Example 7: let in loops — new binding each iteration
console.log("Example 7: let in loops");

let functions = [];

for (let i = 0; i < 3; i++) {
    functions.push(() => i);   // each closure captures its OWN i
}

console.log("With let:", functions.map(fn => fn()));  // [0, 1, 2]

let functionsVar = [];

for (var v = 0; v < 3; v++) {
    functionsVar.push(() => v);   // all share the SAME v
}

console.log("With var:", functionsVar.map(fn => fn()));  // [3, 3, 3]

// =============================================
// SUMMARY
// - const: cannot reassign (but objects/arrays stay mutable)
// - let: reassignable, block-scoped
// - var: function-scoped, hoisted — avoid in modern code
// - Prefer const by default; let only when reassigning
// =============================================
