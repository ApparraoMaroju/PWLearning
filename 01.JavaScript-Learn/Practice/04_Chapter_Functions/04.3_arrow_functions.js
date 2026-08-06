// =============================================
// Program: ARROW FUNCTIONS  (ES6)
// =============================================
// Arrow functions are a compact way to write functions.
//   (params) => expression        // implicit return
//   (params) => { statements }    // explicit body
// They do NOT have their own `this` (more on that later).
// =============================================

// Example 1: Basic arrow function
console.log("Example 1: Basic arrow");

let greet = () => console.log("Hello!");
greet();

console.log("");

// Example 2: Arrow with one parameter (parens optional)
console.log("Example 2: One parameter");

let double = x => x * 2;   // single param → no parentheses needed
console.log("double(5) =", double(5));  // 10

console.log("");

// Example 3: Arrow with multiple parameters
console.log("Example 3: Multiple parameters");

let add = (a, b) => a + b;
console.log("add(3, 4) =", add(3, 4));  // 7

console.log("");

// Example 4: Implicit return (single expression, no { })
console.log("Example 4: Implicit return");

let square = n => n * n;   // returns n*n automatically
console.log("square(6) =", square(6));  // 36

console.log("");

// Example 5: Block body — explicit return
console.log("Example 5: Block body");

let describe = (name, age) => {
    let status = age >= 18 ? "adult" : "minor";
    return `${name} is an ${status}`;
};

console.log(describe("Alice", 25));  // "Alice is an adult"
console.log(describe("Bob", 12));    // "Bob is a minor"

console.log("");

// Example 6: Returning an object (needs parentheses)
console.log("Example 6: Returning an object");

let makeUser = (name, age) => ({ name: name, age: age });
// The ( ) around { } tell JS it's an object, not a block

console.log(makeUser("Alice", 25));  // { name: 'Alice', age: 25 }

console.log("");

// Example 7: Arrow with array methods
console.log("Example 7: Arrow functions with arrays");

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(n => n * 2);
let evens = numbers.filter(n => n % 2 === 0);
let total = numbers.reduce((acc, n) => acc + n, 0);

console.log("Doubled:", doubled);  // [2, 4, 6, 8, 10]
console.log("Evens:", evens);      // [2, 4]
console.log("Total:", total);      // 15

console.log("");

// Example 8: Arrow vs function — `this` difference
console.log("Example 8: `this` binding");

let counter = {
    count: 0,
    regular: function () {
        return this.count;   // `this` = counter (own binding)
    },
    arrow: () => {
        return this.count;   // `this` = outer scope (NOT counter)
    }
};

console.log("regular():", counter.regular());  // 0
console.log("arrow():", counter.arrow());      // undefined (arrow has no own this)

console.log("");

// Example 9: Arrow function shorthand in forEach
console.log("Example 9: forEach with arrow");

["apple", "banana"].forEach(fruit => {
    console.log("Fruit:", fruit);
});

// =============================================
// SUMMARY
// - (params) => value  — concise, implicit return
// - Multi-line body uses { } and explicit return
// - No `this` of its own — inherits from the surrounding scope
// - Great for callbacks: map/filter/reduce/forEach
// =============================================
