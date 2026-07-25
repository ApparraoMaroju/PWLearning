// =============================================
// Chapter: Condition Statements in JavaScript
// =============================================
// Condition statements control program flow based on true/false conditions.
// =============================================

// =============================================
// 1.  if STATEMENT  (basic conditional)
// =============================================
// Runs a block of code ONLY if the condition is true.

console.log("=== 1. if STATEMENT ===");

let temperature = 30;

if (temperature > 25) {
    console.log("It's a hot day! ☀️");  // this runs because 30 > 25
}

temperature = 20;
if (temperature > 25) {
    console.log("This won't print");  // skipped — condition is false
}
console.log("(nothing printed above because condition was false)\n");


// =============================================
// 2.  if...else STATEMENT
// =============================================
// if true → run first block, otherwise → run else block.

console.log("=== 2. if...else STATEMENT ===");

let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
// Output: "You are an adult."

age = 15;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
// Output: "You are a minor."


// =============================================
// 3.  if...else if...else  (multiple conditions)
// =============================================
// Check multiple conditions in sequence. Stops at the first true condition.

console.log("\n=== 3. if...else if...else ===");

let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");   // <-- this runs (85 >= 80)
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
// Note: once one condition is true, the rest are skipped.

// Another example — checking a range
let hour = 14;  // 2 PM

if (hour >= 5 && hour < 12) {
    console.log("Good morning!");
} else if (hour >= 12 && hour < 17) {
    console.log("Good afternoon!");    // runs (12 <= 14 < 17)
} else if (hour >= 17 && hour < 21) {
    console.log("Good evening!");
} else {
    console.log("Good night!");
}


// =============================================
// 4.  NESTED if STATEMENTS
// =============================================
// An if inside another if — for checking sub-conditions.

console.log("\n=== 4. NESTED if STATEMENTS ===");

let username = "admin";
let password = "secret123";

if (username === "admin") {
    if (password === "secret123") {
        console.log("Login successful! Welcome admin.");
    } else {
        console.log("Wrong password.");
    }
} else {
    console.log("Unknown user.");
}
// Output: "Login successful! Welcome admin."

// Nested example — checking eligibility
let agePerson = 25;
let hasLicense = true;

if (agePerson >= 18) {
    console.log("You are old enough to drive.");
    if (hasLicense) {
        console.log("You can rent a car. 🚗");
    } else {
        console.log("Get a license first.");
    }
} else {
    console.log("Too young to drive.");
}
// Output: "You are old enough to drive." then "You can rent a car."


// =============================================
// 5.  switch STATEMENT
// =============================================
// Cleaner alternative to many else-if checks on a single value.
// Compares using strict equality (===).

console.log("\n=== 5. switch STATEMENT ===");

let day = 3;  // 1 = Monday, 2 = Tuesday ... 7 = Sunday
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;  // break exits the switch — without it, execution "falls through"
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";  // <-- this runs (day === 3)
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number";  // runs if no case matches
}
console.log("Day", day, "is", dayName);  // "Day 3 is Wednesday"

// ---------- Fall-through (intentionally omitting break) ----------
console.log("\n--- Fall-through example ---");

let fruit = "apple";

switch (fruit) {
    case "apple":
    case "pear":
        console.log("This is a pome fruit.");
        break;
    case "banana":
        console.log("This is a tropical fruit.");
        break;
    default:
        console.log("Unknown fruit.");
}
// Both "apple" and "pear" share the same output because there's no break
// between them — execution falls through from "apple" case into the next line.

// ---------- switch with numbers (grade example) ----------
console.log("\n--- Grade with switch ---");

let gradeScore = 85;

switch (true) {
    // Trick: switch(true) lets you use conditions as cases
    case gradeScore >= 90:
        console.log("A");
        break;
    case gradeScore >= 80:
        console.log("B");  // runs (85 >= 80)
        break;
    case gradeScore >= 70:
        console.log("C");
        break;
    case gradeScore >= 60:
        console.log("D");
        break;
    default:
        console.log("F");
}


// =============================================
// 6.  TERNARY OPERATOR  (? :)
// =============================================
// Shorthand for if-else — inline conditional.
// Syntax: condition ? valueIfTrue : valueIfFalse

console.log("\n=== 6. TERNARY OPERATOR (? :) ===");

let isRaining = true;
let action = isRaining ? "Take an umbrella" : "Enjoy the sun";
console.log("Action:", action);  // "Take an umbrella"

// Ternary can be nested (but keep it readable)
let num = 0;
let result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(num, "is", result);  // "0 is Zero"

num = -5;
result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(num, "is", result);  // "-5 is Negative"


// =============================================
// 7.  TRUTHY & FALSY VALUES  (in condition context)
// =============================================
// In JavaScript, conditions don't have to be true/false.
// They're evaluated as "truthy" or "falsy".

console.log("\n=== 7. TRUTHY & FALSY VALUES ===");

// FALSY values (all six of them):
// 1. false
// 2. 0
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN (Not a Number)

// EVERYTHING else is TRUTHY.

let falsyExamples = [false, 0, "", null, undefined, NaN];

for (let val of falsyExamples) {
    if (val) {
        console.log(val, "is truthy");
    } else {
        console.log(val, "is FALSY");
    }
}

// Truthy examples — anything that is not the six falsy values
console.log("\nTruthy examples:");
if ("hello") console.log('  "hello" is truthy');
if (42) console.log("  42 is truthy");
if ([1, 2]) console.log("  [1,2] (non-empty array) is truthy");
if ({ key: "val" }) console.log('  {key:"val"} (non-empty object) is truthy');
if (true) console.log("  true is truthy");
if (-1) console.log("  -1 is truthy");  // negative numbers are truthy!

// Practical use — default value with || operator
let userInput = "";  // empty string (falsy)
let defaultText = userInput || "Default value";
console.log("\nDefault using ||:", defaultText);  // "Default value" (because "" is falsy)


// =============================================
// 8.  COMBINING CONDITIONS  (&&, ||, !)
// =============================================
// Logical operators let you build complex conditions.

console.log("\n=== 8. COMBINING CONDITIONS ===");

let hasAccount = true;
let isPremium = false;
let cartTotal = 150;

// AND — both must be true
if (hasAccount && cartTotal >= 100) {
    console.log("You get free shipping!");  // runs: both conditions true
}

// OR — at least one must be true
if (isPremium || cartTotal >= 100) {
    console.log("You qualify for a discount!");  // runs: cartTotal>=100 is true
}

// NOT — reverses the condition
let isDarkMode = false;
if (!isDarkMode) {
    console.log("Switching to dark mode...");  // runs: !false = true
}

// Complex combination — parentheses group conditions
let loggedIn = true;
let hasPermission = true;
let isOwner = false;

if (loggedIn && (hasPermission || isOwner)) {
    console.log("Access granted.");  // runs: true && (true || false) = true
} else {
    console.log("Access denied.");
}


// =============================================
// 9.  OPTIONAL CHAINING  (?.)  — modern (ES2020)
// =============================================
// Safely access nested properties without crashing if something is null/undefined.

console.log("\n=== 9. OPTIONAL CHAINING (?.) ===");

let user = {
    name: "Alice",
    address: {
        city: "New York"
    }
};

// Without optional chaining — crashes if intermediate value is null/undefined
// console.log(user.address.zipcode.length);  // TypeError if zipcode is undefined

// With optional chaining — returns undefined instead of crashing
console.log("Zipcode length:", user.address?.zipcode?.length);  // undefined

// Another example — calling a method that might not exist
let user2 = {
    name: "Bob"
    // no greet() method
};

let greeting = user2.greet?.();  // ?.() calls greet only if it exists
console.log("Greeting result:", greeting);  // undefined


// =============================================
// 10. NULLISH COALESCING  (??)  — modern (ES2020)
// =============================================
// Returns right side ONLY when left side is null or undefined.
// Unlike ||, it does NOT treat 0, "", or false as "no value".

console.log("\n=== 10. NULLISH COALESCING (??) ===");

let userAge = 0;       // 0 is a valid age, not "missing"
let displayAge1 = userAge || 18;     // || gives 18  (because 0 is falsy)
let displayAge2 = userAge ?? 18;     // ?? gives 0  (because 0 is not null/undefined)

console.log("Using ||:", displayAge1);  // 18  (wrong — user is 0 years old)
console.log("Using ??:", displayAge2);  // 0   (correct — keeps the real value)

// Another example with empty string
let userName = "";
let nameDisplay1 = userName || "Guest";   // "Guest"  ("" is falsy)
let nameDisplay2 = userName ?? "Guest";   // ""       ("" is not null/undefined)
console.log('|| gives:', nameDisplay1);
console.log('?? gives:', nameDisplay2);


// =============================================
// BONUS: Conditional (short-circuit) assignment
// =============================================
// &&=  ||=  ??=  (ES2021) — assign only under certain conditions

console.log("\n=== BONUS: Logical Assignment Operators ===");

// &&= — assign only if the variable is truthy
let isReady = true;
let config = { mode: "dark" };
isReady &&= config;  // isReady is true, so config gets assigned
console.log("&&= result:", isReady);  // { mode: "dark" }

// ||= — assign only if the variable is falsy
let cache = null;
cache ||= "default cache";  // null is falsy, so "default cache" is assigned
console.log("||= result:", cache);  // "default cache"

// ??= — assign only if the variable is null/undefined
let settings = null;
settings ??= { theme: "light" };  // null -> assign
console.log("??= result:", settings);  // { theme: "light" }

settings = { theme: "dark" };
settings ??= { theme: "light" };   // already has value -> no change
console.log("??= unchanged:", settings);  // { theme: "dark" }


// =============================================
// QUICK REFERENCE CHEAT SHEET
// =============================================
//
// if (condition) { ... }
// if (condition) { ... } else { ... }
// if (c1) { ... } else if (c2) { ... } else { ... }
// switch (value) { case x: ... break; default: ... }
// condition ? valueIfTrue : valueIfFalse
// value?.property  (optional chaining)
// value ?? fallback (nullish coalescing)
//
// Falsy values: false, 0, "", null, undefined, NaN
// Truthy: everything else
//
// Logical   : &&=  ||=  ??=
// =============================================
