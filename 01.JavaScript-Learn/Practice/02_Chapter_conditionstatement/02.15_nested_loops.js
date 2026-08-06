// =============================================
// Program: NESTED LOOPS
// =============================================
// A nested loop is a loop INSIDE another loop.
// For EVERY outer iteration, the INNER loop runs completely.
//   for (...) {
//       for (...) {
//           // inner body
//       }
//   }
// =============================================

// Example 1: Multiplication table (1 to 3)
console.log("Example 1: Multiplication table 1-3");

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i + " × " + j + " = " + (i * j));
    }
    console.log("---");  // separator between rows
}

console.log("");

// Example 2: Pattern — right triangle of stars
console.log("Example 2: Star triangle (5 rows)");

for (let row = 1; row <= 5; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
        line += "*";
    }
    console.log(line);
}

console.log("");

// Example 3: Square grid of numbers
console.log("Example 3: 3x3 number grid");

for (let row = 1; row <= 3; row++) {
    let line = "";
    for (let col = 1; col <= 3; col++) {
        line += col + " ";
    }
    console.log("Row " + row + ":", line);
}

console.log("");

// Example 4: Clock simulation (hours and minutes)
console.log("Example 4: Clock from 0:00 to 0:59 (hour 0 only)");

for (let hour = 0; hour < 1; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
        console.log("Time:", hour + ":" + (minute < 10 ? "0" : "") + minute);
    }
}

console.log("");

// Example 5: Iterating a 2D array
console.log("Example 5: 2D array (matrix)");

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let r = 0; r < matrix.length; r++) {
    let rowValues = [];
    for (let c = 0; c < matrix[r].length; c++) {
        rowValues.push(matrix[r][c]);
    }
    console.log("Row", r, ":", rowValues.join(" "));
}

console.log("");

// Example 6: Nested while loops
console.log("Example 6: Nested while loops");

let i = 1;

while (i <= 3) {
    let j = 1;
    while (j <= 3) {
        process.stdout.write(i + "-" + j + " ");  // print on one line
        j++;
    }
    console.log("");  // new line after each outer iteration
    i++;
}

console.log("");

// Example 7: Counting total iterations
console.log("Example 7: How many times does the inner loop run?");

let count = 0;

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
        count++;
    }
}
console.log("Inner loop ran", count, "times (4 × 5)");

console.log("");

// Example 8: Prime number check using nested loops
console.log("Example 8: Find primes up to 20");

for (let num = 2; num <= 20; num++) {
    let isPrime = true;
    for (let div = 2; div < num; div++) {
        if (num % div === 0) {
            isPrime = false;
            break;  // found a divisor — not prime
        }
    }
    if (isPrime) {
        console.log(num, "is prime");
    }
}

// =============================================
// SUMMARY
// - Inner loop runs fully for EACH outer iteration
// - Total iterations = outer count × inner count
// - Used for tables, grids, patterns, 2D arrays
// - Combine with break/continue/labels for control
// =============================================
