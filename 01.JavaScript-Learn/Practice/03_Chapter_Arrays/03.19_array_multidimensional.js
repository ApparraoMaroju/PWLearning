// =============================================
// Program: Multidimensional Arrays (Nested Arrays)
// =============================================
// JavaScript doesn't have true "2D arrays" — it has arrays of arrays.
// This gives you full flexibility with rows and columns.
// =============================================

// ----- 1. Creating a 2D Array (Matrix) -----
console.log("=== CREATING 2D ARRAYS ===");

// Manual creation
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix:", matrix);
console.log("Rows:", matrix.length);     // 3
console.log("Cols:", matrix[0].length);  // 3

// Using loops
let rows = 3, cols = 4;
let grid = [];
for (let r = 0; r < rows; r++) {
    grid[r] = [];
    for (let c = 0; c < cols; c++) {
        grid[r][c] = r * cols + c + 1;
    }
}
console.log("\nLoop-created grid:", grid);
// [[1,2,3,4], [5,6,7,8], [9,10,11,12]]

// Using Array.from() (modern)
let board = Array.from({ length: 5 }, () => Array(5).fill(0));
console.log("5x5 board:", board);

// ----- 2. Accessing Elements -----
console.log("\n=== ACCESSING ===");

let ticTacToe = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"]
];

// Access by [row][column]
console.log("Top-left:", ticTacToe[0][0]);     // "X"
console.log("Center:", ticTacToe[1][1]);        // "X"
console.log("Bottom-right:", ticTacToe[2][2]);  // "X"

// ----- 3. Modifying Elements -----
console.log("\n=== MODIFYING ===");

let grid2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

grid2[1][1] = 0;  // change center to 0
console.log("After change:", grid2);
// [[1,2,3], [4,0,6], [7,8,9]]

// ----- 4. Iterating Over 2D Arrays -----
console.log("\n=== ITERATING ===");

console.log("With nested for loops:");
for (let r = 0; r < grid2.length; r++) {
    let rowStr = "";
    for (let c = 0; c < grid2[r].length; c++) {
        rowStr += grid2[r][c] + " ";
    }
    console.log("  Row", r, ":", rowStr);
}

console.log("\nWith forEach:");
grid2.forEach((row, r) => {
    console.log("  Row", r, ":", row.join(", "));
});

// ----- 5. Irregular (Jagged) Arrays -----
console.log("\n=== JAGGED ARRAYS ===");

// Each row can have a different length
let jagged = [
    [1, 2],
    [3, 4, 5],
    [6],
    [7, 8, 9, 10]
];

console.log("Jagged array:");
jagged.forEach((row, i) => {
    console.log(`  Row ${i} (len=${row.length}):`, row);
});

// ----- 6. Practical Examples -----
console.log("\n=== REAL-WORLD ===");

// Example: Chess board
let chess = Array.from({ length: 8 }, () => Array(8).fill("."));

// Place pieces
chess[0] = ["♜","♞","♝","♛","♚","♝","♞","♜"];
chess[1] = Array(8).fill("♟");
chess[6] = Array(8).fill("♙");
chess[7] = ["♖","♘","♗","♕","♔","♗","♘","♖"];

console.log("Chess board:");
chess.forEach(row => console.log(" ", row.join(" ")));

// Example: Student grades table
let grades = [
    ["Alice",   85, 92, 78],
    ["Bob",     70, 88, 95],
    ["Charlie", 90, 85, 82],
    ["Diana",   60, 75, 80]
];

console.log("\nStudent grades:");
console.log("  Name     | Math | Sci | Eng");

grades.forEach(([name, ...scores]) => {
    let avg = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(0);
    console.log(`  ${name.padEnd(8)} | ${scores.join("    | ")} | Avg: ${avg}`);
});

// Example: Tic-Tac-Toe winner check
function checkWinner(board) {
    // Check rows
    for (let row of board) {
        if (row.every(cell => cell === "X")) return "X";
        if (row.every(cell => cell === "O")) return "O";
    }
    // Check columns
    for (let c = 0; c < 3; c++) {
        if (board[0][c] === "X" && board[1][c] === "X" && board[2][c] === "X") return "X";
        if (board[0][c] === "O" && board[1][c] === "O" && board[2][c] === "O") return "O";
    }
    // Check diagonals
    if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") return "X";
    if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") return "O";
    if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") return "X";
    if (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O") return "O";
    return null;
}

let game = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "X", "O"]
];
console.log("\nTic-tac-toe winner:", checkWinner(game) || "No winner");
// "X" wins (diagonal)

// ----- 7. Higher Dimensions (3D arrays) -----
console.log("\n=== 3D ARRAYS ===");

// Create a 3x3x3 cube
let cube = [];
for (let x = 0; x < 3; x++) {
    cube[x] = [];
    for (let y = 0; y < 3; y++) {
        cube[x][y] = [];
        for (let z = 0; z < 3; z++) {
            cube[x][y][z] = x + y + z;
        }
    }
}

console.log("3D cube[1][1][1]:", cube[1][1][1]);  // 3
console.log("3D cube[0][2][1]:", cube[0][2][1]);  // 3

// ----- 8. Flattening and Mapping -----
console.log("\n=== OPERATIONS ON 2D ===");

let data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Sum all elements
let total = data.flat().reduce((a, b) => a + b, 0);
console.log("Total sum:", total);  // 45

// Double every element
let doubled = data.map(row => row.map(n => n * 2));
console.log("Doubled:", doubled);
// [[2,4,6], [8,10,12], [14,16,18]]

// Row sums
let rowSums = data.map(row => row.reduce((a, b) => a + b, 0));
console.log("Row sums:", rowSums);  // [6, 15, 24]

// =============================================
// SUMMARY
// Multi-dim arrays = arrays of arrays
// Access: arr[row][col]
// Common patterns: matrix, grid, board, table
// Can be jagged (different row lengths)
// Iterate with nested loops or nested array methods
// Flatten with .flat() for aggregate operations
// =============================================
