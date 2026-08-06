// =============================================
// Program: SCOPE & CLOSURES
// =============================================
// Scope = where a variable is visible.
//   Global scope  — visible everywhere
//   Function scope — visible inside the function (var)
//   Block scope   — visible inside { } (let, const)
// A CLOSURE is a function that remembers the variables
// from the scope where it was created.
// =============================================

// Example 1: Global vs function scope
let globalVar = "I am global";   // global scope

function showScope() {
    let localVar = "I am local";  // function scope
    console.log("Inside:", globalVar);   // can see global
    console.log("Inside:", localVar);    // can see local
}

showScope();
console.log("Outside:", globalVar);       // works
// console.log(localVar);  // ❌ ReferenceError — localVar is not visible outside

console.log("");

// Example 2: Block scope — let/const are block-scoped
console.log("Example 2: Block scope");

{
    let blockVar = "inside block";
    console.log("In block:", blockVar);   // visible here
}
// console.log(blockVar);  // ❌ ReferenceError

console.log("");

// Example 3: var is NOT block-scoped
console.log("Example 3: var vs let");

if (true) {
    var varVariable = "var survives";     // var → function/global scope
    let letVariable = "let stays inside"; // let → block scope
}
console.log("varVariable:", varVariable);      // works
// console.log(letVariable);  // ❌ ReferenceError

console.log("");

// Example 4: Nested scope — inner can see outer
console.log("Example 4: Nested functions");

let message = "Hello";

function outer() {
    let greeting = "Hi";

    function inner() {
        let detail = "from inner";
        // inner can see message, greeting, AND detail
        console.log(message + " / " + greeting + " " + detail);
    }

    inner();
}

outer();  // "Hello / Hi from inner"

console.log("");

// Example 5: Closure — function remembers its scope
console.log("Example 5: Basic closure");

function createCounter() {
    let count = 0;   // private variable

    return function () {
        count++;     // remembers `count` from the outer scope
        return count;
    };
}

let counter = createCounter();
console.log("counter():", counter());  // 1
console.log("counter():", counter());  // 2
console.log("counter():", counter());  // 3
// `count` is NOT accessible from outside, but the closure can use it.

console.log("");

// Example 6: Multiple closures share separate state
console.log("Example 6: Independent closures");

let counterA = createCounter();
let counterB = createCounter();

console.log("counterA():", counterA());  // 1
console.log("counterA():", counterA());  // 2
console.log("counterB():", counterB());  // 1  (separate `count`)

console.log("");

// Example 7: Closure with parameters
console.log("Example 7: Closure with a parameter");

function makeAdder(x) {
    return function (y) {
        return x + y;   // remembers x
    };
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log("add5(3):", add5(3));    // 8
console.log("add10(3):", add10(3));  // 13

console.log("");

// Example 8: Practical closure — private counter with methods
console.log("Example 8: Practical closure");

function createBankAccount(initial) {
    let balance = initial;

    return {
        deposit: function (amount) {
            balance += amount;
            return balance;
        },
        withdraw: function (amount) {
            if (amount <= balance) {
                balance -= amount;
            } else {
                console.log("Insufficient funds!");
            }
            return balance;
        },
        getBalance: function () {
            return balance;
        }
    };
}

let account = createBankAccount(100);
console.log("Deposit 50:", account.deposit(50));    // 150
console.log("Withdraw 30:", account.withdraw(30));  // 120
console.log("Balance:", account.getBalance());      // 120
// balance is private — only the closure methods can touch it

// =============================================
// SUMMARY
// - Global/function/block scopes control visibility
// - let & const → block scoped; var → function scoped
// - Inner functions can access outer variables
// - A closure keeps access to its creation scope
// - Use closures for private state / data hiding
// =============================================
