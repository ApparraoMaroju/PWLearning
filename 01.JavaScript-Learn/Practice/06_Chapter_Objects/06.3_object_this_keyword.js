// =============================================
// Program: THE `this` KEYWORD
// =============================================
// `this` refers to the object that is CALLING the function.
// Its value depends on HOW the function is called.
// Arrow functions do NOT have their own `this`.
// =============================================

// Example 1: this in an object method
console.log("Example 1: this in a method");

let person = {
    name: "Alice",
    introduce() {
        return "Hi, I'm " + this.name;   // this = person
    }
};

console.log(person.introduce());  // "Hi, I'm Alice"

console.log("");

// Example 2: this depends on the caller
console.log("Example 2: Same method, different callers");

function whoAmI() {
    return "I am " + this.name;
}

let userA = { name: "Alice", whoAmI: whoAmI };
let userB = { name: "Bob", whoAmI: whoAmI };

console.log(userA.whoAmI());  // "I am Alice" (this = userA)
console.log(userB.whoAmI());  // "I am Bob"   (this = userB)

console.log("");

// Example 3: this in the global scope (Node)
console.log("Example 3: this at the top level");

console.log("Top-level this:", this);  // {} in a Node module

console.log("");

// Example 4: this inside a regular function (non-strict)
console.log("Example 4: this in a plain function");

function showThis() {
    return this;   // in strict mode → undefined; in sloppy mode → global object
}
console.log("Plain function this:", showThis());

console.log("");

// Example 5: Arrow functions have NO own this
console.log("Example 5: Arrow function this");

let team = {
    name: "Dev Team",
    members: ["Alice", "Bob"],
    regularList() {
        return this.members.map(function (m) {
            // `this` inside a regular function is NOT the team object
            return m + " (" + this.name + ")";   // this.name → undefined
        });
    },
    arrowList() {
        return this.members.map(m => m + " (" + this.name + ")");
        // arrow inherits `this` from the surrounding scope → team
    }
};

console.log("Regular function:", team.regularList());
// ['Alice (undefined)', 'Bob (undefined)']

console.log("Arrow function:", team.arrowList());
// ['Alice (Dev Team)', 'Bob (Dev Team)']

console.log("");

// Example 6: this with call() and apply()
console.log("Example 6: call() and apply()");

function describe(hobby) {
    return this.name + " likes " + hobby;
}

let alice = { name: "Alice" };
let bob = { name: "Bob" };

console.log(describe.call(alice, "reading"));   // "Alice likes reading"
console.log(describe.apply(bob, ["coding"]));   // "Bob likes coding"

console.log("");

// Example 7: this with bind()
console.log("Example 7: bind()");

let car = {
    brand: "Toyota",
    getBrand() {
        return this.brand;
    }
};

let unbound = car.getBrand;
// console.log(unbound());  // undefined — `this` is lost

let bound = car.getBrand.bind(car);   // permanently bind `this` to car
console.log("bound():", bound());     // "Toyota"

console.log("");

// Example 8: this in a constructor (new keyword)
console.log("Example 8: this in constructors");

function Animal(name) {
    this.name = name;   // `this` = the new object being created
}

let cat = new Animal("Whiskers");
console.log("cat.name:", cat.name);  // "Whiskers"

// =============================================
// SUMMARY
// - `this` = the object calling the function
// - obj.method() → this = obj
// - Arrow functions inherit `this` (no own binding)
// - call/apply/bind control `this` explicitly
// - In constructors, `this` = the new instance
// =============================================
