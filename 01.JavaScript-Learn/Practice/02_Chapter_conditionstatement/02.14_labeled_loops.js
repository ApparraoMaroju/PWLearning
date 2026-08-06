// =============================================
// Program: LABELED LOOPS (break/continue with labels)
// =============================================
// A label gives a loop a NAME so break/continue can target
// THAT loop instead of just the innermost one.
//   outer: for (...) {
//       for (...) {
//           break outer;      // exits the outer loop
//           continue outer;   // jumps to the outer loop's next iteration
//       }
//   }
// Labels are rarely needed — use them only for nested loops.
// =============================================

// Example 1: break with a label — exit the outer loop
console.log("Example 1: break outer (exit everything)");

outer: for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
        if (row === 2 && col === 2) {
            console.log("Hit (2,2) — breaking out of BOTH loops");
            break outer;  // normally break would only exit the inner loop
        }
        console.log("row", row, "col", col);
    }
}
console.log("Loop finished.\n");

// Example 2: continue with a label — skip to the next row
console.log("Example 2: continue outer (skip whole row)");

outer: for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
        if (row === 2) {
            console.log("Skipping row 2 entirely");
            continue outer;  // jump to the next row
        }
        console.log("row", row, "col", col);
    }
}
console.log("");

// Example 3: Without label — compare what happens
console.log("Example 3: Same loop WITHOUT label (for comparison)");

for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
        if (row === 2) {
            console.log("(unlabeled) skipping only col 1");
            continue;  // skips only this column of row 2
        }
        console.log("row", row, "col", col);
    }
}

console.log("");

// Example 4: Search a 2D array and stop at the first match
console.log("Example 4: Find a value in a grid");

let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let found = false;

outer: for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
        if (grid[r][c] === 8) {
            console.log("Found 8 at row", r, "col", c);
            found = true;
            break outer;  // no more searching needed
        }
    }
}

if (!found) {
    console.log("8 not found in grid.");
}

console.log("");

// Example 5: Label with a while loop
console.log("Example 5: Labeled while loops");

let a = 1;

outerWhile: while (a <= 3) {
    let b = 1;
    while (b <= 3) {
        if (a * b > 4) {
            console.log("a*b =", a * b, "> 4 — stopping");
            break outerWhile;
        }
        console.log("a =", a, "b =", b);
        b++;
    }
    a++;
}

// =============================================
// SUMMARY
// - Labels let break/continue target an outer loop
// - Syntax: name: for (...) { ... break name; }
// - break label → exits the labeled loop entirely
// - continue label → jumps to the labeled loop's next iteration
// - Use sparingly — most loops don't need labels
// =============================================
