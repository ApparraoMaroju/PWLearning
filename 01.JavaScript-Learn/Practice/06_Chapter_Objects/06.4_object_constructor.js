// =============================================
// Program: OBJECT CONSTRUCTORS
// =============================================
// A constructor is a function that creates objects
// when called with `new`. It's a blueprint for
// creating multiple similar objects.
// =============================================

// Example 1: Constructor function
console.log("Example 1: Basic constructor");

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        return "Hello, I'm " + this.name;
    };
}

let alice = new Person("Alice", 25);
let bob = new Person("Bob", 30);

console.log(alice.sayHello());   // "Hello, I'm Alice"
console.log(bob.sayHello());     // "Hello, I'm Bob"
console.log("alice.age:", alice.age);  // 25

console.log("");

// Example 2: What `new` does
console.log("Example 2: How new works");

// `new Person("Alice", 25)`:
//   1. Creates an empty object {}
//   2. Sets `this` to that object
//   3. Runs the constructor body (attaches properties)
//   4. Returns the object (if no explicit return)

function Demo() {
    this.value = 42;
}
let d = new Demo();
console.log("d.value:", d.value);  // 42

console.log("");

// Example 3: Without `new` — this is NOT the new object
console.log("Example 3: Forgetting new");

// function Person(name) {
//     this.name = name;   // in sloppy mode this → global; properties leak!
// }
// let p = Person("Alice");  // ❌ returns undefined, no object created

// The convention: name constructors with a CAPITAL letter
console.log("Convention: Capitalize constructor names (e.g. Person)");

console.log("");

// Example 4: instanceof with constructors
console.log("Example 4: instanceof");

console.log("alice instanceof Person:", alice instanceof Person);  // true
console.log("alice instanceof Object:", alice instanceof Object);  // true
console.log("[1,2] instanceof Array:", [1, 2] instanceof Array);   // true

console.log("");

// Example 5: Adding methods to the prototype
console.log("Example 5: Prototype methods");

function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
}

// Methods on the prototype are SHARED by all instances
Animal.prototype.makeSound = function () {
    return this.name + " says " + this.sound;
};

Animal.prototype.describe = function () {
    return this.name + " is a " + this.constructor.name;
};

let cat = new Animal("Whiskers", "Meow");
let dog = new Animal("Rex", "Woof");

console.log(cat.makeSound());   // "Whiskers says Meow"
console.log(dog.makeSound());   // "Rex says Woof"
console.log(cat.describe());    // "Whiskers is a Animal"

console.log("");

// Example 6: Constructor with default values
console.log("Example 6: Defaults in constructor");

function Product(name, price, inStock = true) {
    this.name = name;
    this.price = price;
    this.inStock = inStock;
    this.applyDiscount = function (percent) {
        this.price -= this.price * (percent / 100);
        return this.price;
    };
}

let laptop = new Product("Laptop", 1000);
console.log("laptop.inStock:", laptop.inStock);  // true (default)
laptop.applyDiscount(10);
console.log("Price after 10% off:", laptop.price);  // 900

console.log("");

// Example 7: Constructor returning an object explicitly
console.log("Example 7: Explicit return");

function Special() {
    this.normal = "kept";
    return { custom: "returned object" };   // overrides `this`
}

let s = new Special();
console.log("s:", s);  // { custom: 'returned object' } (this discarded)

// =============================================
// SUMMARY
// - Constructor + new = factory for similar objects
// - Capitalize constructor names by convention
// - `this` inside the constructor = the new instance
// - Prototype methods are shared across instances
// - Returning an object from a constructor overrides it
// =============================================
