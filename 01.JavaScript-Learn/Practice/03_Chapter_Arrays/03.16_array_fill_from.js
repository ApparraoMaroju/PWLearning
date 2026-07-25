// =============================================
// Program: fill(), from(), of() — Static & Fill Methods
// =============================================
// fill()  → fills array with a static value (modifies in-place)
// from()  → creates array from iterable or array-like (static method)
// of()    → creates array from arguments (static method)
// =============================================

// ----- 1. fill() — Fill with a Value -----
console.log("=== fill() ===");

// Fill entire array with a single value
let arr = [1, 2, 3, 4, 5];
arr.fill(0);
console.log("fill(0):", arr);  // [0, 0, 0, 0, 0]

// fill with start index
let arr2 = [1, 2, 3, 4, 5];
arr2.fill(99, 2);  // start from index 2
console.log("fill(99, 2):", arr2);  // [1, 2, 99, 99, 99]

// fill with start and end indexes
let arr3 = [1, 2, 3, 4, 5];
arr3.fill(0, 1, 4);  // fill indexes 1, 2, 3 (end is exclusive)
console.log("fill(0, 1, 4):", arr3);  // [1, 0, 0, 0, 5]

// fill with negative index
let arr4 = [1, 2, 3, 4, 5];
arr4.fill(-1, -3);  // fill last 3 positions
console.log("fill(-1, -3):", arr4);  // [1, 2, -1, -1, -1]

// ----- 2. fill() — Create + Fill Pattern -----
console.log("\n=== CREATE + FILL PATTERN ===");

// Create array of n zeros
let zeros = new Array(5).fill(0);
console.log("5 zeros:", zeros);  // [0, 0, 0, 0, 0]

// Create array of sequential numbers
let seq = new Array(5).fill(0).map((_, i) => i + 1);
console.log("Sequential 1-5:", seq);  // [1, 2, 3, 4, 5]

// Create a 2D grid (matrix)
let grid = new Array(3).fill(null).map(() => new Array(3).fill(0));
console.log("3x3 grid:", grid);
// [[0,0,0], [0,0,0], [0,0,0]]

// ----- 3. Array.from() — From Iterable -----
console.log("\n=== Array.from() ===");

// From string (iterable)
let chars = Array.from("hello");
console.log("From string:", chars);  // ["h", "e", "l", "l", "o"]

// From Set
let set = new Set([1, 2, 2, 3, 3, 3]);
let fromSet = Array.from(set);
console.log("From Set:", fromSet);  // [1, 2, 3]

// From Map
let map = new Map([["a", 1], ["b", 2]]);
let entries = Array.from(map);
console.log("From Map:", entries);  // [["a", 1], ["b", 2]]

// Array-like object (has .length)
let arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
let fromObject = Array.from(arrayLike);
console.log("From array-like:", fromObject);  // ["a", "b", "c"]

// ----- 4. Array.from() with Map Function -----
console.log("\n=== Array.from() WITH MAP ===");

// Create sequence: [1, 2, 3, 4, 5]
let seq2 = Array.from({ length: 5 }, (_, i) => i + 1);
console.log("Sequence 1-5:", seq2);

// Create array of squares
let squares = Array.from({ length: 5 }, (_, i) => (i + 1) ** 2);
console.log("Squares:", squares);  // [1, 4, 9, 16, 25]

// Create array of random numbers
let randoms = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
console.log("Random numbers:", randoms);

// Fill with a computed pattern
let pattern = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
console.log("Pattern:", pattern);
// ["Item 1", "Item 2", ..., "Item 10"]

// ----- 5. Array.of() — From Arguments -----
console.log("\n=== Array.of() ===");

// Unlike new Array(), of() handles a single number correctly
let a = Array.of(5);     // [5]
let b = new Array(5);    // [empty × 5]

console.log("Array.of(5):", a);       // [5]
console.log("new Array(5):", b);      // [<5 empty slots>]

let c = Array.of(1, 2, 3, 4);
console.log("Array.of(1,2,3,4):", c);  // [1, 2, 3, 4]

// ----- 6. from() vs of() vs [] vs new Array() -----
console.log("\n=== COMPARISON ===");

// [] → most common for known values
let arr5 = [1, 2, 3];

// Array.of() → from arguments (safe for single number)
let arr6 = Array.of(5);     // [5]

// Array.from() → from iterable or array-like
let arr7 = Array.from("abc");  // ["a", "b", "c"]

// new Array(n) → create n empty slots (use with fill)
let arr8 = new Array(5).fill(0);

console.log("Best use cases:");
console.log("  [1,2,3]           → known values");
console.log("  Array.of(5)       → single number argument");
console.log("  Array.from('abc') → from iterable (string, Set, Map)");
console.log("  new Array(n).fill(0) → n zeros");

// ----- 7. Practical Examples -----
console.log("\n=== REAL-WORLD ===");

// Create a range function
function range(start, end, step = 1) {
    const length = Math.floor((end - start) / step) + 1;
    return Array.from({ length }, (_, i) => start + i * step);
}

console.log("range(1, 10):", range(1, 10));
console.log("range(0, 10, 2):", range(0, 10, 2));  // [0, 2, 4, 6, 8, 10]
console.log("range(5, 1, -1):", range(5, 1, -1));   // [5, 4, 3, 2, 1]

// Initialize a grid for game board
let board = Array.from({ length: 8 }, () =>
    Array.from({ length: 8 }, () => ".")
);
console.log("\nChess board (8x8):");
board.forEach(row => console.log(" ", row.join(" ")));

// =============================================
// SUMMARY
// fill(value, start, end) → modifies IN-PLACE
// Array.from(iterable, mapFn) → creates from iterable
// Array.of(...args) → creates from arguments
//
// Key patterns:
// new Array(n).fill(v) → n copies of v
// Array.from({length: n}, (_, i) => ...) → computed values
// =============================================
