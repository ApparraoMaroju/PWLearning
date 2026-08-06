// =============================================
// Program: DO...WHILE LOOP
// =============================================
// The do...while loop is like while, but the body runs AT LEAST ONCE,
// because the condition is checked AFTER each iteration.
//   do {
//       // code to run (always runs at least once)
//   } while (condition);
// =============================================

// Example 1: Basic do...while loop
console.log("Example 1: Count from 1 to 5");

let i = 1;

do {
    console.log("i =", i);
    i++;
} while (i <= 5);
// Output: i = 1, 2, 3, 4, 5

console.log("");

// Example 2: Body runs at least once even when condition is false
console.log("Example 2: Condition is false from the start");

let x = 10;

do {
    console.log("This runs once even though", x, "is not < 5");
    x++;
} while (x < 5);
// The condition (10 < 5) is false, but the body already ran once.

console.log("");

// Example 3: Same logic with while — compare the difference
console.log("Example 3: while vs do...while with the same start");

let y = 10;

while (y < 5) {
    console.log("while: this never prints");
}

do {
    console.log("do...while: this prints once");
} while (y < 5);

console.log("");

// Example 4: Simulating "show menu at least once"
console.log("Example 4: Menu must display at least once");

let menuChoice = "";
let validChoices = ["1", "2", "3"];

do {
    console.log("Menu: [1] Start  [2] Settings  [3] Exit");
    menuChoice = "1";  // pretend the user picked an option
} while (!validChoices.includes(menuChoice));

console.log("User selected option:", menuChoice);

console.log("");

// Example 5: Sum numbers until user "quits" (simulated)
console.log("Example 5: Keep adding until quit");

let total = 0;
let userInput = "10";  // first input

do {
    total += Number(userInput);
    console.log("Current total:", total);
    userInput = "quit";  // pretend the user typed "quit" next
} while (userInput !== "quit");

console.log("Final total:", total);

console.log("");

// Example 6: Roll a dice until you get a 6 (simulated random)
console.log("Example 6: Dice roll simulation");

let roll;

do {
    roll = Math.floor(Math.random() * 6) + 1;  // random 1-6
    console.log("Rolled:", roll);
} while (roll !== 6);

console.log("Got a 6! 🎲");

console.log("");

// Example 7: do...while inside a function
console.log("Example 7: Retry logic in a function");

function getValidNumber() {
    let num;
    do {
        num = 5;  // pretend a number was entered
    } while (num < 0);  // keep asking while negative
    return num;
}

console.log("Valid number:", getValidNumber());

// =============================================
// SUMMARY
// - do...while runs the body FIRST, then checks the condition
// - Guaranteed to run AT LEAST once (unlike while)
// - Great for menus, retry logic, and "ask at least once" scenarios
// - Syntax note: the while(condition) ends with a semicolon ;
// =============================================
