// =============================================
// Chapter: OBJECTS in JavaScript
// =============================================
// Objects store data as key-value pairs.
// Run this file to see every object concept
// in action, side by side.
// =============================================

// =============================================
// 1.  OBJECT BASICS
// =============================================
console.log("=== 1. OBJECT BASICS ===");

let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

console.log("Dot:", person.name);
console.log("Bracket:", person["age"]);

person.email = "alice@example.com";   // add
console.log("After add:", person);

delete person.city;                   // delete
console.log("After delete:", person);


// =============================================
// 2.  OBJECT METHODS
// =============================================
console.log("\n=== 2. OBJECT METHODS ===");

let counter = {
    count: 0,
    increment() {
        this.count++;
        return this.count;
    },
    reset() {
        this.count = 0;
        return this.count;
    }
};

console.log("increment:", counter.increment());  // 1
console.log("increment:", counter.increment());  // 2
console.log("reset:", counter.reset());          // 0


// =============================================
// 3.  `this` KEYWORD
// =============================================
console.log("\n=== 3. this KEYWORD ===");

let user = {
    name: "Bob",
    intro() {
        return "Hi, I'm " + this.name;
    }
};

console.log(user.intro());  // "Hi, I'm Bob"


// =============================================
// 4.  CONSTRUCTORS
// =============================================
console.log("\n=== 4. CONSTRUCTORS ===");

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let alice = new Person("Alice", 25);
let bob = new Person("Bob", 30);

console.log("alice:", alice);
console.log("bob instanceof Person:", bob instanceof Person);  // true


// =============================================
// 5.  ES6 ENHANCEMENTS
// =============================================
console.log("\n=== 5. ES6 ENHANCEMENTS ===");

let name = "Carol";
let role = "admin";

let member = { name, role };   // shorthand
console.log("member:", member);


// =============================================
// 6.  DESTRUCTURING
// =============================================
console.log("\n=== 6. DESTRUCTURING ===");

let { name: n, role: r } = member;
console.log("n:", n, "| r:", r);  // "Carol" | "admin"


// =============================================
// 7.  KEYS / VALUES / ENTRIES
// =============================================
console.log("\n=== 7. KEYS / VALUES / ENTRIES ===");

console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));


// =============================================
// 8.  SPREAD & Object.assign
// =============================================
console.log("\n=== 8. SPREAD & ASSIGN ===");

let defaults = { theme: "dark", fontSize: 14 };
let prefs = { fontSize: 18 };

let merged = { ...defaults, ...prefs };
console.log("merged:", merged);  // { theme: 'dark', fontSize: 18 }

let viaAssign = Object.assign({}, defaults, prefs);
console.log("viaAssign:", viaAssign);


// =============================================
// 9.  CLONING
// =============================================
console.log("\n=== 9. CLONING ===");

let original = { a: 1, nested: { b: 2 } };

let shallow = { ...original };
console.log("Shallow nested shared?", shallow.nested === original.nested);  // true

let deep = structuredClone(original);
console.log("Deep nested shared?", deep.nested === original.nested);  // false


// =============================================
// QUICK REFERENCE CHEAT SHEET
// =============================================
//
// let obj = { key: value };          // object literal
// obj.key / obj["key"]               // access
// obj.key = value                    // add/update
// delete obj.key                     // remove
// method() { }                       // method shorthand
// this                               // calling object
// new Constructor()                  // instantiate
// { name, role }                     // property shorthand
// [expr]                             // computed key
// { a, b } = obj                     // destructuring
// { a = 10 }                         // default
// { ...rest }                        // rest
// Object.keys / values / entries     // static methods
// { ...a, ...b }                     // merge (shallow)
// structuredClone(obj)               // deep clone
// =============================================
