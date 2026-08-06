// =============================================
// Program: CALLBACK FUNCTIONS
// =============================================
// A callback is a function passed as an ARGUMENT to
// another function, to be called later.
// A HIGHER-ORDER function is a function that takes
// or returns another function.
// =============================================

// Example 1: Basic callback
function greet(name, callback) {
    console.log("Hello,", name + "!");
    callback();   // call the callback
}

console.log("Example 1: Basic callback");

greet("Alice", function () {
    console.log("(callback ran after greeting)");
});

console.log("");

// Example 2: Callback with arrow function
console.log("Example 2: Arrow callback");

function process(number, operation) {
    console.log("Processing", number, "→", operation(number));
}

process(10, n => n * 2);   // 20
process(10, n => n + 5);   // 15

console.log("");

// Example 3: Array methods use callbacks
console.log("Example 3: Array method callbacks");

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(n => n * 2);       // callback to transform
let evens = numbers.filter(n => n % 2 === 0); // callback to test

console.log("Doubled:", doubled);  // [2, 4, 6, 8, 10]
console.log("Evens:", evens);      // [2, 4]

console.log("");

// Example 4: Callback with parameters
console.log("Example 4: Callback receiving arguments");

function calculate(a, b, operation) {
    return operation(a, b);
}

console.log("Sum:", calculate(8, 4, (x, y) => x + y));   // 12
console.log("Diff:", calculate(8, 4, (x, y) => x - y));  // 4
console.log("Prod:", calculate(8, 4, (x, y) => x * y));  // 32

console.log("");

// Example 5: Named callback functions
console.log("Example 5: Named callbacks");

function square(n) { return n * n; }
function cube(n) { return n * n * n; }

function applyToEach(arr, fn) {
    return arr.map(fn);
}

console.log("Squares:", applyToEach([1, 2, 3], square));  // [1, 4, 9]
console.log("Cubes:", applyToEach([1, 2, 3], cube));      // [1, 8, 27]

console.log("");

// Example 6: setTimeout uses a callback (async)
console.log("Example 6: setTimeout callback");
console.log("(waiting 500ms...)");

setTimeout(function () {
    console.log("Timer finished!");
}, 500);

console.log("");

// Example 7: Callback to handle both success and error
console.log("Example 7: Success/error callbacks");

function fetchUser(id, onSuccess, onError) {
    let users = { 1: "Alice", 2: "Bob" };

    if (users[id]) {
        onSuccess(users[id]);
    } else {
        onError("User " + id + " not found");
    }
}

fetchUser(1,
    name => console.log("Found:", name),
    msg => console.log("Error:", msg)
);

fetchUser(99,
    name => console.log("Found:", name),
    msg => console.log("Error:", msg)
);

console.log("");

// Example 8: Function returning a function (higher-order)
console.log("Example 8: Higher-order function");

function createGreeting(punctuation) {
    return function (name) {
        return "Hello, " + name + punctuation;
    };
}

let casual = createGreeting("!");
let formal = createGreeting(".");

console.log(casual("Alice"));   // "Hello, Alice!"
console.log(formal("Bob"));     // "Hello, Bob."

// =============================================
// SUMMARY
// - Callback = function passed to another function
// - Higher-order function = takes/returns functions
// - Used everywhere: map/filter/sort, setTimeout, event handlers
// - Great for reusing logic (success/error handling)
// =============================================
