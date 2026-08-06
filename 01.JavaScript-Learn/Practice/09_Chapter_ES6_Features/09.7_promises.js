// =============================================
// Program: PROMISES & ASYNC/AWAIT  (ES6/ES2017)
// =============================================
// A Promise represents a future value — pending,
// fulfilled, or rejected. async/await is the
// modern way to consume promises.
// =============================================

// Example 1: Creating a promise
console.log("Example 1: Creating a Promise");

let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation succeeded!");
    } else {
        reject("Operation failed!");
    }
});

promise.then((result) => {
    console.log("Resolved:", result);
}).catch((error) => {
    console.log("Rejected:", error);
});

console.log("");

// Example 2: Promise states
console.log("Example 2: States");
console.log("States: pending → fulfilled | rejected");
console.log("You can only resolve/reject ONCE — later calls are ignored.");

console.log("");

// Example 3: Simulating async work with setTimeout
console.log("Example 3: Async simulation");

function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: id, name: "User " + id });
        }, 300);   // pretend network delay
    });
}

console.log("Fetching user...");
fetchUser(7).then((user) => {
    console.log("Got user:", user);
});

console.log("");

// Example 4: Chaining .then()
console.log("Example 4: Promise chaining");

function double(n) {
    return Promise.resolve(n * 2);   // already-resolved promise
}

double(5)
    .then((result) => {
        console.log("After double:", result);   // 10
        return double(result);                   // pass to next then
    })
    .then((result) => {
        console.log("After double again:", result);  // 20
        return double(result);
    })
    .then((result) => {
        console.log("After double 3x:", result);    // 40
    });

console.log("");

// Example 5: .catch() for errors
console.log("Example 5: Catching errors");

function riskyOperation(shouldFail) {
    return new Promise((resolve, reject) => {
        if (shouldFail) {
            reject(new Error("Something went wrong"));
        } else {
            resolve("All good");
        }
    });
}

riskyOperation(true)
    .then((result) => console.log("Success:", result))
    .catch((error) => console.log("Caught:", error.message));

console.log("");

// Example 6: .finally() — runs regardless
console.log("Example 6: finally");

riskyOperation(false)
    .then((result) => console.log("Success:", result))
    .catch((error) => console.log("Caught:", error.message))
    .finally(() => console.log("Finally: cleanup runs always"));

console.log("");

// Example 7: Promise.all — run in parallel
console.log("Example 7: Promise.all");

function wait(ms, label) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(label + " done"), ms);
    });
}

Promise.all([
    wait(200, "Task A"),
    wait(150, "Task B"),
    wait(100, "Task C")
]).then((results) => {
    console.log("All finished:", results);
    // ['Task A done', 'Task B done', 'Task C done']
});

console.log("");

// Example 8: async/await — cleaner syntax
console.log("Example 8: async/await");

async function getData() {
    let user = await fetchUser(1);     // pause until resolved
    let doubledId = await double(user.id);
    return "User " + user.name + " id doubled = " + doubledId;
}

getData().then((result) => {
    console.log("async/await result:", result);
});

console.log("");

// Example 9: async/await with try/catch
console.log("Example 9: try/catch with await");

async function safeCall() {
    try {
        let result = await riskyOperation(true);
        return "OK: " + result;
    } catch (error) {
        return "Error: " + error.message;
    }
}

safeCall().then((result) => {
    console.log(result);  // "Error: Something went wrong"
});

// =============================================
// SUMMARY
// - Promise: pending → fulfilled/rejected (once)
// - .then(success) .catch(error) .finally(always)
// - Promise.all runs promises in parallel
// - async function + await = promise, but readable
// - try/catch handles errors in async functions
// =============================================
