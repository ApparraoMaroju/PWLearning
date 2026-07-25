// =============================================
// Program: switch STATEMENT
// =============================================
// The switch statement is a cleaner alternative to long else-if ladders
// when comparing a single value against many possibilities.
// It uses STRICT equality (===) for comparison.
// Syntax:
//   switch (expression) {
//       case value1:
//           // code to run
//           break;
//       case value2:
//           // code to run
//           break;
//       default:
//           // runs if no case matches
//   }
// =============================================

// Example 1: Day of the week
let day = 3;  // 1=Monday, 2=Tuesday... 7=Sunday
let dayName;

console.log("Example 1: Day of the Week");
console.log("Day number:", day);

switch (day) {
    case 1:
        dayName = "Monday";
        break;   // break exits the switch — without it, execution falls through
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";  // <-- this case matches (day === 3)
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number";
}
console.log("The day is:", dayName);  // "Wednesday"

console.log("");

// Example 2: Month name by number
let month = 4;
let monthName;

console.log("Example 2: Month Name");

switch (month) {
    case 1:  monthName = "January";   break;
    case 2:  monthName = "February";  break;
    case 3:  monthName = "March";     break;
    case 4:  monthName = "April";     break;  // matches
    case 5:  monthName = "May";       break;
    case 6:  monthName = "June";      break;
    case 7:  monthName = "July";      break;
    case 8:  monthName = "August";    break;
    case 9:  monthName = "September"; break;
    case 10: monthName = "October";   break;
    case 11: monthName = "November";  break;
    case 12: monthName = "December";  break;
    default: monthName = "Invalid month";
}
console.log("Month:", monthName);  // "April"
// (Multiple statements can share one line when they're short)

console.log("");

// Example 3: Fall-through (NO break — intentional)
// Without break, execution "falls through" to the next case,
// running ALL following cases until a break or end of switch.

let fruit = "apple";
console.log("Example 3: Fall-through (shared logic)");
console.log("Fruit:", fruit);

switch (fruit) {
    case "apple":
    case "pear":
        // Both apple and pear share this code
        console.log("This is a POME fruit.");
        break;
    case "banana":
    case "mango":
        console.log("This is a TROPICAL fruit.");
        break;
    case "orange":
    case "lemon":
        console.log("This is a CITRUS fruit.");
        break;
    default:
        console.log("Unknown fruit category.");
}
// Because there's no break after "apple", execution falls through
// to the "pear" case's code and runs it.

console.log("");

// Example 4: Fall-through for ranges
let score = 85;

console.log("Example 4: Grade with fall-through (switch true)");

// Trick: switch(true) lets you use conditions as cases
switch (true) {
    case score >= 90:
        console.log("Grade: A");
        break;
    case score >= 80:
        console.log("Grade: B");  // this runs (85 >= 80)
        break;
    case score >= 70:
        console.log("Grade: C");
        break;
    case score >= 60:
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
}

console.log("");

// Example 5: Switch with strings — simple calculator
let operator = "+";
let num1 = 10;
let num2 = 5;
let result;

console.log("Example 5: Simple Calculator");
console.log(num1, operator, num2, "= ?");

switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        break;
    case "%":
        result = num1 % num2;
        break;
    default:
        result = "Invalid operator";
}
console.log("Result:", result);  // 15

console.log("");

// Example 6: Season finder (grouping months)
let monthNumber = 11;  // November

console.log("Example 6: Season Finder");
console.log("Month:", monthNumber);

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log("Season: Winter ❄️");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Season: Spring 🌸");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Season: Summer ☀️");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Season: Autumn 🍂");  // this runs
        break;
    default:
        console.log("Invalid month");
}

console.log("");

// Example 7: Without default (default is optional)
let color = "red";
console.log("Example 7: Without default case");

switch (color) {
    case "red":
        console.log("Stop!");
        break;
    case "green":
        console.log("Go!");
        break;
    // No default — if no case matches, nothing runs
}
// "red" matches case "red", so it prints.

console.log("");

// Example 8: What happens WITHOUT break? (demonstrating the bug)
let value = 2;
console.log("Example 8: WITHOUT break (fall-through bug)");
console.log("Value:", value, "(notice: NO break statements below)");

switch (value) {
    case 1:
        console.log("Case 1");
    case 2:
        console.log("Case 2");
    case 3:
        console.log("Case 3");
    default:
        console.log("Default");
}
// Outputs:
//   Case 2
//   Case 3
//   Default
// Because there's no break after case 2, execution falls through
// all the way to the end! Always use break unless intentional.

// =============================================
// SUMMARY
// - switch compares using === (strict equality)
// - break stops execution — without it, code "falls through"
// - Fall-through is useful for grouping cases (same handler)
// - default is optional — catches unmatched values
// - Use switch(true) when you need range/condition checks
// - More readable than long else-if ladders for single-value checks
// =============================================
