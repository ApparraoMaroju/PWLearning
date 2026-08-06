// =============================================
// Program: TEMPLATE LITERALS  (ES6)
// =============================================
// Template literals use backticks ` instead of quotes.
// They support:
//   - Variable interpolation: ${expression}
//   - Multi-line strings
//   - Expressions, function calls, ternaries inside ${}
// =============================================

// Example 1: Basic interpolation
console.log("Example 1: Basic interpolation");

let name = "Alice";
let age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
// "My name is Alice and I am 25 years old."

console.log("");

// Example 2: Expressions inside ${}
console.log("Example 2: Expressions");

let a = 10;
let b = 5;

console.log(`a + b = ${a + b}`);        // 15
console.log(`a * b = ${a * b}`);        // 50
console.log(`a ** b = ${a ** b}`);      // 100000

console.log("");

// Example 3: Function calls inside ${}
console.log("Example 3: Function calls");

function getGreeting() {
    return "Hello there!";
}

console.log(`Message: ${getGreeting()}`);  // "Message: Hello there!"

console.log("");

// Example 4: Ternary inside ${}
console.log("Example 4: Ternary");

let score = 85;
console.log(`Result: ${score >= 60 ? "PASS" : "FAIL"}`);  // "PASS"

score = 40;
console.log(`Result: ${score >= 60 ? "PASS" : "FAIL"}`);  // "FAIL"

console.log("");

// Example 5: Multi-line strings (no \n needed)
console.log("Example 5: Multi-line");

let address = `123 Main Street
Apt 4B
New York, NY`;

console.log(address);
// Prints on 3 lines

console.log("");

// Example 6: Nested templates
console.log("Example 6: Nested templates");

let user = "Bob";
let role = "admin";

let message = `Welcome, ${user} (${role === "admin" ? `full ${role} access` : "limited access"})`;
console.log(message);  // "Welcome, Bob (full admin access)"

console.log("");

// Example 7: Building HTML-like strings
console.log("Example 7: Building HTML");

let product = "Laptop";
let price = 999;

let html = `
    <div class="product">
        <h2>${product}</h2>
        <p>Price: $${price}</p>
    </div>
`;

console.log(html);

console.log("");

// Example 8: Escaping backticks and ${}
console.log("Example 8: Escaping");

console.log(`Use \` for backtick`);            // "Use ` for backtick"
console.log("Use ${ for literal ${}");          // "Use ${ for literal ${}"

console.log("");

// Example 9: Template literals with objects
console.log("Example 9: Objects in templates");

let person = { name: "Carol", city: "Boston" };
console.log(`${person.name} lives in ${person.city}.`);  // "Carol lives in Boston."

// =============================================
// SUMMARY
// - Backticks create template literals
// - ${expression} inserts values, expressions, ternaries, calls
// - Native multi-line support
// - Can be nested for complex output
// =============================================
