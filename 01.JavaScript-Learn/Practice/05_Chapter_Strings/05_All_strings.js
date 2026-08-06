// =============================================
// Chapter: STRINGS in JavaScript
// =============================================
// Strings store text. Run this file to see every
// string concept in action, side by side.
// =============================================

// =============================================
// 1.  STRING BASICS
// =============================================
console.log("=== 1. STRING BASICS ===");

let name = "JavaScript";
console.log("name:", name, "| length:", name.length);
console.log("First char:", name[0], "| Last char:", name[name.length - 1]);


// =============================================
// 2.  CONCATENATION
// =============================================
console.log("\n=== 2. CONCATENATION ===");

let greeting = "Hello" + " " + "World";
console.log("With +:", greeting);

let template = `2 + 2 = ${2 + 2}`;
console.log("Template:", template);


// =============================================
// 3.  BASIC METHODS
// =============================================
console.log("\n=== 3. BASIC METHODS ===");

let text = "  Hello World  ";

console.log("trim:", JSON.stringify(text.trim()));
console.log("upper:", text.trim().toUpperCase());
console.log('includes("World"):', text.includes("World"));
console.log('indexOf("World"):', text.indexOf("World"));
console.log("slice(2, 7):", text.slice(2, 7));


// =============================================
// 4.  SEARCH METHODS
// =============================================
console.log("\n=== 4. SEARCH METHODS ===");

let filename = "report_final.pdf";

console.log('startsWith("report"):', filename.startsWith("report"));
console.log('endsWith(".pdf"):', filename.endsWith(".pdf"));
console.log('lastIndexOf("_"):', filename.lastIndexOf("_"));


// =============================================
// 5.  REPLACE & SPLIT
// =============================================
console.log("\n=== 5. REPLACE & SPLIT ===");

let sentence = "The cat sat on the mat";

console.log("replace:", sentence.replace("cat", "dog"));
console.log("split:", sentence.split(" "));
console.log("join:", ["a", "b", "c"].join("-"));


// =============================================
// 6.  TEMPLATE LITERALS
// =============================================
console.log("\n=== 6. TEMPLATE LITERALS ===");

let user = "Alice";
let score = 95;

console.log(`${user} scored ${score} ${score >= 90 ? "excellent" : "good"}`);


// =============================================
// 7.  STRING ↔ NUMBER
// =============================================
console.log("\n=== 7. STRING ↔ NUMBER ===");

console.log('Number("42"):', Number("42"));
console.log('parseInt("42px"):', parseInt("42px"));
console.log('parseFloat("3.14"):', parseFloat("3.14"));
console.log("(42).toString():", (42).toString());
console.log("(3.14159).toFixed(2):", (3.14159).toFixed(2));


// =============================================
// 8.  COMPARISON
// =============================================
console.log("\n=== 8. COMPARISON ===");

console.log('"apple" === "apple":', "apple" === "apple");
console.log('"apple" < "banana":', "apple" < "banana");
console.log('"apple".localeCompare("banana"):', "apple".localeCompare("banana"));


// =============================================
// 9.  PADDING & REPEAT
// =============================================
console.log("\n=== 9. PADDING & REPEAT ===");

console.log('"7".padStart(2, "0"):', "7".padStart(2, "0"));
console.log('"ha".repeat(3):', "ha".repeat(3));
console.log('"A".charCodeAt(0):', "A".charCodeAt(0));
console.log("String.fromCharCode(66):", String.fromCharCode(66));


// =============================================
// QUICK REFERENCE CHEAT SHEET
// =============================================
//
// length          → character count
// toUpperCase / toLowerCase / trim
// includes / indexOf / lastIndexOf / startsWith / endsWith
// slice(start, end) / substring(a, b)
// replace / replaceAll / split / join
// charAt / charCodeAt / String.fromCharCode
// padStart / padEnd / repeat
// Number / parseInt / parseFloat / toString / toFixed
// `template ${expression}`
// =============================================
