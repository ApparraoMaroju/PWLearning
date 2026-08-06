// =============================================
// Program: DEFAULT PARAMETERS  (ES6)
// =============================================
// Default parameters give a parameter a fallback value
// that is used when the argument is undefined.
//   function name(param = defaultValue) { ... }
// =============================================

// Example 1: Basic default parameter
function greet(name = "Guest") {
    console.log("Hello,", name + "!");
}

console.log("Example 1: Basic default");

greet("Alice");       // "Hello, Alice!"
greet();              // "Hello, Guest!" (default used)
greet(undefined);     // "Hello, Guest!" (undefined triggers default)

console.log("");

// Example 2: Defaults avoid NaN
function add(a, b = 0) {
    return a + b;
}

console.log("Example 2: Defaults prevent NaN");
console.log("add(5) =", add(5));        // 5 (b defaults to 0)
console.log("add(5, 3) =", add(5, 3));  // 8

console.log("");

// Example 3: null does NOT trigger the default
console.log("Example 3: null vs undefined");

console.log("greet(null):");
greet(null);   // "Hello, null!" (null is a value, default NOT used)

console.log("");

// Example 4: Multiple default parameters
function createUser(name, age = 18, city = "Unknown") {
    return { name: name, age: age, city: city };
}

console.log("Example 4: Multiple defaults");
console.log(createUser("Alice"));                    // {name:'Alice', age:18, city:'Unknown'}
console.log(createUser("Bob", 30));                  // {name:'Bob', age:30, city:'Unknown'}
console.log(createUser("Carol", 25, "New York"));    // all provided

console.log("");

// Example 5: Default using a previous parameter
function calculatePrice(base, tax = base * 0.1) {
    return base + tax;
}

console.log("Example 5: Default referencing earlier param");
console.log("calculatePrice(100) =", calculatePrice(100));      // 110
console.log("calculatePrice(100, 20) =", calculatePrice(100, 20));  // 120

console.log("");

// Example 6: Default with a function call
function getDefaultCity() {
    return "New York";
}

function locate(user, city = getDefaultCity()) {
    return user + " is in " + city;
}

console.log("Example 6: Default calls a function");
console.log(locate("Alice"));           // "Alice is in New York"
console.log(locate("Bob", "Boston"));   // "Bob is in Boston"

console.log("");

// Example 7: Default with arrays/objects (avoid sharing)
function addItem(list = []) {
    list.push("item");
    return list;
}

console.log("Example 7: Default array is fresh each call");
console.log(addItem());  // ['item']
console.log(addItem());  // ['item'] (NOT ['item','item'] — new array each time)

console.log("");

// Example 8: Undefined triggers default, but not null/false/0/""
function test(value = "default") {
    return value;
}

console.log("Example 8: Which values trigger the default?");
console.log("test(undefined) →", test(undefined));   // "default"
console.log("test(null) →", test(null));             // null
console.log("test(0) →", test(0));                   // 0
console.log("test('') →", test(""));                 // ""

// =============================================
// SUMMARY
// - param = value gives a fallback for undefined
// - Defaults can reference earlier params or call functions
// - Only undefined triggers the default (null/0/""/false do NOT)
// =============================================
