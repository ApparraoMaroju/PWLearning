// =============================================
// Program: TEMPLATE LITERALS  (ES6)
// =============================================
// Backtick strings with ${} interpolation.
// Covered in depth in Chapter 5 — here we focus
// on the ES6 feature aspects: tagged templates
// and common patterns.
// =============================================

// Example 1: Interpolation with expressions
console.log("Example 1: Interpolation");

let user = "Alice";
let role = "admin";
let loginCount = 7;

let message = `${user} is ${role}, logged in ${loginCount} times`;
console.log(message);

console.log("");

// Example 2: Multi-line without \n
console.log("Example 2: Multi-line");

let oldStyle = "Line 1\nLine 2\nLine 3";   // messy with \n

let templateStyle = `Line 1
Line 2
Line 3`;

console.log("Template literal:");
console.log(templateStyle);

console.log("");

// Example 3: Nested templates
console.log("Example 3: Nested");

let items = ["apple", "banana"];

let list = `
Shopping list:
${items.map(item => `  - ${item}`).join("\n")}
`;

console.log(list);

console.log("");

// Example 4: Tagged templates
console.log("Example 4: Tagged templates");

function highlight(strings, ...values) {
    let result = "";
    strings.forEach((str, i) => {
        result += str;
        if (i < values.length) {
            result += "**" + values[i] + "**";   // wrap values
        }
    });
    return result;
}

let product = "Laptop";
let price = 1200;

let highlighted = highlight`The ${product} costs $${price}.`;
console.log(highlighted);  // "The **Laptop** costs $**1200**."

console.log("");

// Example 5: Tagged template — building HTML safely
console.log("Example 5: HTML escaping tag");

function escapeHTML(strings, ...values) {
    return strings.reduce((acc, str, i) => {
        let value = values[i - 1];
        if (value !== undefined) {
            value = String(value)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
            acc += value;
        }
        return acc + str;
    }, "");
}

let userComment = "<script>alert('xss')</script>";
let safeHtml = escapeHTML`<p>${userComment}</p>`;
console.log("Escaped:", safeHtml);

console.log("");

// Example 6: Raw strings — String.raw
console.log("Example 6: String.raw");

console.log("Normal:", "\n");            // newline
console.log("Raw:", String.raw`\n`);     // literal backslash-n

// Useful for paths and regexes:
let path = String.raw`C:\Users\Name\Documents`;
console.log("Raw path:", path);

console.log("");

// Example 7: Common patterns
console.log("Example 7: Common patterns");

// Building URLs:
let base = "https://api.example.com";
let id = 42;
console.log(`${base}/users/${id}`);  // "https://api.example.com/users/42"

// Debug output:
let x = 10;
console.log(`x = ${x}`);   // "x = 10"

// =============================================
// SUMMARY
// - `${expr}` interpolation with full JS expressions
// - Native multi-line support
// - Tagged templates give functions control over output
// - String.raw for literal backslashes
// =============================================
