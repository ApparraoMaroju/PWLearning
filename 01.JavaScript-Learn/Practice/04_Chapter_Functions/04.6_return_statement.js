// =============================================
// Program: RETURN STATEMENT
// =============================================
// return sends a value back to the caller and EXITS
// the function immediately. Code after return never runs.
// A function without return → undefined.
// =============================================

// Example 1: Returning a value
function square(x) {
    return x * x;
}

console.log("Example 1: Return a value");
let result = square(4);
console.log("square(4) =", result);  // 16

console.log("");

// Example 2: Without return → undefined
function noReturn() {
    console.log("This function prints but returns nothing.");
}

console.log("Example 2: Missing return");
let value = noReturn();
console.log("Returned value:", value);  // undefined

console.log("");

// Example 3: Early return — exit before the end
function checkAge(age) {
    if (age < 0) {
        return "Invalid age";   // exits immediately
    }
    if (age < 18) {
        return "Minor";
    }
    return "Adult";
}

console.log("Example 3: Early returns");
console.log("checkAge(-5):", checkAge(-5));   // "Invalid age"
console.log("checkAge(15):", checkAge(15));   // "Minor"
console.log("checkAge(25):", checkAge(25));   // "Adult"

console.log("");

// Example 4: Guard clause pattern
function processOrder(order) {
    if (!order) {
        return "No order provided";   // guard — stop early
    }
    if (!order.items || order.items.length === 0) {
        return "Order has no items";  // guard
    }
    return "Processing order with " + order.items.length + " item(s)";
}

console.log("Example 4: Guard clauses");
console.log(processOrder(null));                    // "No order provided"
console.log(processOrder({ items: [] }));           // "Order has no items"
console.log(processOrder({ items: [1, 2, 3] }));    // "Processing order with 3 item(s)"

console.log("");

// Example 5: Returning different types
console.log("Example 5: Returning different types");

function getStatus(code) {
    if (code === 200) return "OK";           // string
    if (code === 500) return 5;              // number
    return null;                             // null
}

console.log("getStatus(200):", getStatus(200));  // "OK"
console.log("getStatus(500):", getStatus(500));  // 5
console.log("getStatus(404):", getStatus(404));  // null

console.log("");

// Example 6: Returning an object/array
console.log("Example 6: Return object and array");

function getCoordinates() {
    return { x: 10, y: 20 };     // object
}

function getFavorites() {
    return ["pizza", "sushi"];   // array
}

console.log(getCoordinates());  // { x: 10, y: 20 }
console.log(getFavorites());    // ['pizza', 'sushi']

console.log("");

// Example 7: Returning another function (closure preview)
console.log("Example 7: Return a function");

function makeMultiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

let double = makeMultiplier(2);
let triple = makeMultiplier(3);

console.log("double(7):", double(7));  // 14
console.log("triple(7):", triple(7));  // 21

console.log("");

// Example 8: Code after return never runs
console.log("Example 8: Unreachable code");

function demo() {
    return "returned early";
    console.log("This NEVER prints");   // unreachable
}

console.log("demo():", demo());

// =============================================
// SUMMARY
// - return value → sends data back to the caller
// - return exits the function immediately
// - Without return, a function returns undefined
// - Early returns / guards make code readable
// - Functions can return strings, numbers, objects, arrays, or functions
// =============================================
