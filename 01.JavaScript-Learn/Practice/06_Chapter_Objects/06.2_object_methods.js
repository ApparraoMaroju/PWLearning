// =============================================
// Program: OBJECT METHODS
// =============================================
// A method is a function stored as an object property.
// Inside a method, `this` refers to the object itself.
// =============================================

// Example 1: Method as a function value
console.log("Example 1: Method via function value");

let person = {
    name: "Alice",
    greet: function () {
        return "Hello, I'm " + this.name;
    }
};

console.log(person.greet());  // "Hello, I'm Alice"

console.log("");

// Example 2: Method shorthand (ES6)
console.log("Example 2: Method shorthand");

let dog = {
    name: "Rex",
    breed: "Labrador",
    bark() {                 // same as bark: function() { ... }
        return this.name + " says Woof!";
    },
    describe() {
        return this.name + " is a " + this.breed;
    }
};

console.log(dog.bark());
console.log(dog.describe());

console.log("");

// Example 3: Methods that use other methods
console.log("Example 3: Methods calling methods");

let counter = {
    count: 0,
    increment() {
        this.count++;
        return this.count;
    },
    reset() {
        this.count = 0;
        return this.count;
    },
    status() {
        return "Count is " + this.count + ". " + (this.count > 0 ? "Running." : "Idle.");
    }
};

console.log("increment:", counter.increment());  // 1
console.log("increment:", counter.increment());  // 2
console.log("status:", counter.status());        // "Count is 2. Running."
console.log("reset:", counter.reset());          // 0

console.log("");

// Example 4: `this` inside a method
console.log("Example 4: Understanding this");

let user = {
    name: "Bob",
    showThis() {
        return this;   // returns the object itself
    }
};

console.log("this is:", user.showThis());  // { name: 'Bob', showThis: [Function] }
console.log("this.name is:", user.showThis().name);  // "Bob"

console.log("");

// Example 5: Methods accessing and modifying data
console.log("Example 5: Modify object data");

let account = {
    owner: "Carol",
    balance: 100,
    deposit(amount) {
        this.balance += amount;
        return this.balance;
    },
    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient funds";
        }
        this.balance -= amount;
        return this.balance;
    }
};

console.log("Balance:", account.balance);        // 100
console.log("Deposit 50:", account.deposit(50)); // 150
console.log("Withdraw 30:", account.withdraw(30)); // 120
console.log("Withdraw 500:", account.withdraw(500));  // "Insufficient funds"

console.log("");

// Example 6: Method storing data in the object
console.log("Example 6: Storing computed data");

let temperature = {
    celsius: 25,
    setCelsius(value) {
        this.celsius = value;
    },
    toFahrenheit() {
        return this.celsius * 9 / 5 + 32;
    },
    describe() {
        return this.celsius + "°C = " + this.toFahrenheit() + "°F";
    }
};

temperature.setCelsius(30);
console.log("describe:", temperature.describe());  // "30°C = 86°F"

console.log("");

// Example 7: Methods added after creation
console.log("Example 7: Add method later");

let car = {
    brand: "Toyota"
};

car.honk = function () {
    return this.brand + " goes beep!";
};

console.log(car.honk());  // "Toyota goes beep!"

console.log("");

// Example 8: Object methods and arrays of objects
console.log("Example 8: Array of objects with methods");

let students = [
    { name: "Alice", score: 90, getGrade() { return this.score >= 90 ? "A" : "B"; } },
    { name: "Bob", score: 75, getGrade() { return this.score >= 90 ? "A" : "B"; } }
];

students.forEach(s => {
    console.log(s.name + " → " + s.getGrade());
});

// =============================================
// SUMMARY
// - Method = function property of an object
// - Use shorthand: method() { ... }
// - `this` refers to the object when called as obj.method()
// - Methods can read and modify the object's data
// =============================================
