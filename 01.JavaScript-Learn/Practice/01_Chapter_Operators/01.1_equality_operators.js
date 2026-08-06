// =============================================
// Program: COMPARISON OPERATORS — EQUALITY (==, ===, !=, !==)
// =============================================
// Equality operators compare two values and return true or false.
//
//   ==   loose equality    (converts types before comparing) ⚠️ avoid
//   ===  strict equality   (no conversion)                   ⭐ use this
//   !=   loose inequality  (converts types)                  ⚠️ avoid
//   !==  strict inequality (no conversion)                   ⭐ use this
// =============================================

// Example 1: Strict equality (===) — value AND type must match
console.log("Example 1: === (strict equality)");

console.log("5 === 5        →", 5 === 5);        // true  (same value, same type)
console.log("5 === '5'      →", 5 === "5");      // false (number vs string)
console.log("'a' === 'a'    →", "a" === "a");    // true
console.log("true === 1     →", true === 1);     // false (boolean vs number)
console.log("null === undefined →", null === undefined);  // false (different types)

console.log("");

// Example 2: Loose equality (==) — converts types first
console.log("Example 2: == (loose equality — avoid!)");

console.log("5 == '5'       →", 5 == "5");       // true  (string converted to number)
console.log("true == 1      →", true == 1);      // true  (true → 1)
console.log("0 == false     →", 0 == false);     // true  (!)
console.log("'' == 0        →", "" == 0);        // true  (!)
console.log("null == undefined →", null == undefined);  // true (special rule)
console.log("' ' == 0       →", " " == 0);       // true  (space becomes 0)

console.log("");

// Example 3: Why === is recommended — a real bug
console.log("Example 3: The === vs == bug");

function checkAnswer(userAnswer) {
    if (userAnswer == 100) {
        return "Correct!";
    }
    return "Wrong";
}

console.log("checkAnswer(100)   →", checkAnswer(100));    // "Correct!"
console.log("checkAnswer('100') →", checkAnswer("100"));  // "Correct!" (BUG — string passes)
// The string "100" should NOT be accepted, but == lets it through.
// With === the string would be rejected.

console.log("");

// Example 4: Inequality — != and !==
console.log("Example 4: != and !==");

console.log("5 != 6          →", 5 != 6);        // true
console.log("5 != '5'        →", 5 != "5");      // false (== says they're equal)
console.log("5 !== '5'       →", 5 !== "5");     // true  (types differ)
console.log("5 !== 5         →", 5 !== 5);       // false
console.log("5 !== '6'       →", 5 !== "6");     // true

console.log("");

// Example 5: Equality with objects — reference comparison
console.log("Example 5: Objects compare by REFERENCE, not content");

let objA = { name: "Alice" };
let objB = { name: "Alice" };
let objC = objA;  // same reference as objA

console.log("objA === objB    →", objA === objB);  // false (different objects in memory)
console.log("objA === objC    →", objA === objC);  // true  (same object)
console.log("objA.name === objB.name →", objA.name === objB.name);  // true (strings compare by value)

console.log("");

// Example 6: Equality in practice
console.log("Example 6: Practical checks");

let username = "admin";
console.log("username === 'admin' →", username === "admin");  // true

let age = 18;
if (age === 18) {
    console.log("Age is exactly 18.");
}

console.log("");

// Example 7: NaN never equals itself
console.log("Example 7: NaN edge case");

console.log("NaN === NaN →", NaN === NaN);   // false (special rule)
console.log("Number.isNaN(NaN) →", Number.isNaN(NaN));  // true — use this instead

// =============================================
// SUMMARY
// - === and !== compare value AND type (no conversion)
// - == and != convert types first — a source of subtle bugs
// - Always prefer === / !==
// - Objects compare by reference, primitives by value
// - NaN is never equal to itself — use Number.isNaN()
// =============================================
