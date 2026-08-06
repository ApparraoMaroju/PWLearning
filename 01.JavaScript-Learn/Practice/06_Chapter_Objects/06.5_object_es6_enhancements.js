// =============================================
// Program: OBJECT ES6 ENHANCEMENTS
// =============================================
// ES6 added convenient object features:
//   - Property shorthand (omit value when same name)
//   - Method shorthand (omit : function)
//   - Computed property names [expression]
// =============================================

// Example 1: Property shorthand
console.log("Example 1: Property shorthand");

let name = "Alice";
let age = 25;

// Old way:
let oldWay = { name: name, age: age };

// ES6 shorthand — same result:
let newWay = { name, age };

console.log("oldWay:", oldWay);
console.log("newWay:", newWay);   // same content, less typing

console.log("");

// Example 2: Practical shorthand — from variables
console.log("Example 2: Building objects from variables");

let firstName = "John";
let lastName = "Doe";
let role = "admin";

let user = { firstName, lastName, role };
console.log("user:", user);
console.log("user.firstName:", user.firstName);  // "John"

console.log("");

// Example 3: Method shorthand
console.log("Example 3: Method shorthand");

// Old way:
let calculatorOld = {
    add: function (a, b) { return a + b; },
    subtract: function (a, b) { return a - b; }
};

// ES6 way:
let calculator = {
    add(a, b) { return a + b; },
    subtract(a, b) { return a - b; }
};

console.log("add(10, 5):", calculator.add(10, 5));        // 15
console.log("subtract(10, 5):", calculator.subtract(10, 5));  // 5

console.log("");

// Example 4: Computed property names
console.log("Example 4: Computed property names");

let keyName = "dynamicKey";
let obj = {
    [keyName]: "value via computed key",   // key = "dynamicKey"
    ["prefix_" + 1]: "another computed key"
};

console.log("obj:", obj);
console.log("obj.dynamicKey:", obj.dynamicKey);
console.log("obj.prefix_1:", obj.prefix_1);

console.log("");

// Example 5: Computed keys in loops (practical)
console.log("Example 5: Dynamic key building");

let statuses = ["pending", "approved", "rejected"];
let counts = {};

statuses.forEach((status, index) => {
    counts[status] = index + 1;   // key computed from data
});

console.log("counts:", counts);  // { pending: 1, approved: 2, rejected: 3 }

console.log("");

// Example 6: Combining shorthand with methods
console.log("Example 6: All together");

let title = "JavaScript";
let pages = 300;

let book = {
    title,               // shorthand
    pages,               // shorthand
    summary() {          // method shorthand
        return `${this.title} has ${this.pages} pages`;
    },
    ["is" + "Available"]: true   // computed key
};

console.log(book.summary());          // "JavaScript has 300 pages"
console.log("book.isAvailable:", book.isAvailable);  // true

console.log("");

// Example 7: Object spread (ES2018) in object literals
console.log("Example 7: Spread in literals");

let base = { type: "book", genre: "education" };
let extended = { ...base, title, pages };
console.log("extended:", extended);

// =============================================
// SUMMARY
// - { name } shorthand when variable === key
// - method() { } shorthand for functions
// - [expr] computed property names
// - { ...other } spread to copy/merge
// =============================================
