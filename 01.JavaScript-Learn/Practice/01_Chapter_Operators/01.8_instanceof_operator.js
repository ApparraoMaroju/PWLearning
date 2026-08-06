// =============================================
// Program: instanceof OPERATOR
// =============================================
// Checks whether an object is an instance of a
// constructor/class. Returns true or false.
//
//   object instanceof Constructor
// =============================================

// Example 1: Basic instanceof with built-in types
console.log("Example 1: Built-in constructors");

let arr = [1, 2, 3];
let date = new Date();
let obj = {};

console.log("arr instanceof Array      →", arr instanceof Array);    // true
console.log("arr instanceof Object     →", arr instanceof Object);   // true (Array inherits from Object)
console.log("date instanceof Date      →", date instanceof Date);    // true
console.log("date instanceof Object    →", date instanceof Object);  // true
console.log("obj instanceof Object     →", obj instanceof Object);   // true

console.log("");

// Example 2: Primitives are NOT instances
console.log("Example 2: Primitives");

let num = 5;
let str = "hello";

console.log("5 instanceof Number       →", num instanceof Number);    // false
console.log("'hello' instanceof String →", str instanceof String);    // false
// Primitives are not objects, so instanceof returns false.

console.log("");

// Example 3: With classes
console.log("Example 3: Custom classes");

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    bark() {
        return "Woof!";
    }
}

let rex = new Dog("Rex");

console.log("rex instanceof Dog      →", rex instanceof Dog);       // true
console.log("rex instanceof Animal   →", rex instanceof Animal);    // true (inheritance)
console.log("rex instanceof Object   →", rex instanceof Object);    // true

console.log("");

// Example 4: Using instanceof in a condition
console.log("Example 4: instanceof in if");

function describe(value) {
    if (value instanceof Array) {
        return "This is an array with " + value.length + " items.";
    } else if (value instanceof Date) {
        return "This is a date: " + value.toDateString();
    } else {
        return "Unknown type.";
    }
}

console.log(describe([1, 2, 3]));
console.log(describe(new Date()));
console.log(describe("just a string"));

console.log("");

// Example 5: instanceof with function constructors
console.log("Example 5: Function constructors");

function Car(brand) {
    this.brand = brand;
}

let myCar = new Car("Toyota");

console.log("myCar instanceof Car →", myCar instanceof Car);  // true

console.log("");

// Example 6: Error types
console.log("Example 6: Error types");

try {
    JSON.parse("not valid json");
} catch (err) {
    if (err instanceof SyntaxError) {
        console.log("Caught a SyntaxError:", err.message);
    } else if (err instanceof TypeError) {
        console.log("Caught a TypeError");
    } else {
        console.log("Unknown error:", err);
    }
}

console.log("");

// Example 7: Careful — works across the same realm/iframe only
console.log("Example 7: instanceof pitfall");

// let arrFromAnotherWindow = someIframeWindow.Array;  // different Array constructor!
// arr instanceof thatArrayConstructor → false
// In Node/browser this rarely matters, but be aware.

// =============================================
// SUMMARY
// - instanceof checks an object's constructor chain
// - True for the type AND its parent classes
// - Primitives (5, "hi") are NOT instances of anything
// - Handy for error handling and type checks
// =============================================
