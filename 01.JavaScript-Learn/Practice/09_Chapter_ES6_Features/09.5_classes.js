// =============================================
// Program: CLASSES  (ES6)
// =============================================
// Classes are a cleaner syntax for constructor +
// prototype. They support inheritance with extends.
// =============================================

// Example 1: Basic class
console.log("Example 1: Basic class");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return "Hi, I'm " + this.name + " and I'm " + this.age;
    }
}

let alice = new Person("Alice", 25);
let bob = new Person("Bob", 30);

console.log(alice.introduce());
console.log(bob.introduce());

console.log("");

// Example 2: Class methods
console.log("Example 2: Methods");

class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        return this.count;
    }

    reset() {
        this.count = 0;
        return this.count;
    }

    value() {
        return this.count;
    }
}

let counter = new Counter();
counter.increment();
counter.increment();
console.log("Count:", counter.value());  // 2
counter.reset();
console.log("After reset:", counter.value());  // 0

console.log("");

// Example 3: Getters and setters
console.log("Example 3: Getters/setters");

class Temperature {
    constructor(celsius) {
        this._celsius = celsius;
    }

    get celsius() {
        return this._celsius;
    }

    set celsius(value) {
        if (value < -273.15) {
            console.log("Too cold — setting to absolute zero");
            value = -273.15;
        }
        this._celsius = value;
    }

    get fahrenheit() {
        return this._celsius * 9 / 5 + 32;
    }
}

let temp = new Temperature(25);
console.log("Celsius:", temp.celsius);      // 25 (getter)
console.log("Fahrenheit:", temp.fahrenheit); // 77

temp.celsius = 30;                          // setter
console.log("Updated:", temp.celsius);      // 30

console.log("");

// Example 4: Static methods
console.log("Example 4: Static methods");

class MathHelper {
    static square(x) {
        return x * x;
    }

    static isEven(n) {
        return n % 2 === 0;
    }
}

// Static methods are called on the CLASS, not instances:
console.log("MathHelper.square(5):", MathHelper.square(5));  // 25
console.log("MathHelper.isEven(8):", MathHelper.isEven(8));  // true

console.log("");

// Example 5: Inheritance with extends
console.log("Example 5: Inheritance");

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return this.name + " makes a sound";
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);          // call the parent constructor
        this.breed = breed;
    }

    speak() {                 // OVERRIDE the parent method
        return this.name + " barks!";
    }

    fetch() {
        return this.name + " fetches the ball";
    }
}

let rex = new Dog("Rex", "Labrador");

console.log(rex.speak());   // "Rex barks!" (overridden)
console.log(rex.fetch());   // "Rex fetches the ball" (new method)
console.log(rex instanceof Dog);     // true
console.log(rex instanceof Animal);  // true (inheritance chain)

console.log("");

// Example 6: super to reuse parent methods
console.log("Example 6: super.method()");

class Bird extends Animal {
    speak() {
        return super.speak() + " — tweet!";
        // super.speak() calls the parent's version
    }
}

let tweety = new Bird("Tweety");
console.log(tweety.speak());  // "Tweety makes a sound — tweet!"

console.log("");

// Example 7: Class fields (modern syntax)
console.log("Example 7: Class fields");

class Product {
    // Fields are declared directly (no constructor needed):
    inStock = true;
    category = "general";

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    info() {
        return `${this.name}: $${this.price} (${this.inStock ? "in stock" : "sold out"})`;
    }
}

let laptop = new Product("Laptop", 999);
console.log(laptop.info());

// =============================================
// SUMMARY
// - class + constructor for the blueprint
// - extends for inheritance; super() calls parent
// - Methods can be overridden; add new ones freely
// - static methods belong to the class itself
// - Getters/setters add controlled access
// =============================================
