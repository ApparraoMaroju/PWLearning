// =============================================
// Program: shift() and unshift() — Add/Remove from START
// =============================================
// unshift() → adds element(s) to the BEGINNING, returns new length
// shift()   → removes the FIRST element, returns removed element
// Both MODIFY the original array (in-place).
// Slower than push/pop because all elements must re-index.
// =============================================

// ----- 1. unshift() — Add to Beginning -----
console.log("=== unshift() — ADD TO BEGINNING ===");

let queue = [30, 40];
console.log("Initial:", queue);

// Add one element at the beginning
let newLength = queue.unshift(20);
console.log("After unshift(20):", queue, "| returned:", newLength);

// Add multiple elements at beginning (added in order)
newLength = queue.unshift(-10, 0, 10);
console.log("After unshift(-10,0,10):", queue, "| returned:", newLength);
// Notice: -10,0,10 are added in that order at the beginning

// ----- 2. shift() — Remove from Beginning -----
console.log("\n=== shift() — REMOVE FROM BEGINNING ===");

let first = queue.shift();
console.log("Shifted:", first);   // -10
console.log("Array after:", queue);

first = queue.shift();
console.log("Shifted:", first);   // 0
console.log("Array after:", queue);

// Shift from empty array returns undefined
let empty = [];
console.log("Shift from empty:", empty.shift());  // undefined

// ----- 3. Using unshift/shift as a Queue -----
console.log("\n=== QUEUE DEMO (FIFO) ===");

// Queue = First-In, First-Out
let line = [];
line.push("Person 1");  // use push to add to end (preferred)
line.push("Person 2");
line.push("Person 3");
console.log("Line:", line);

// Serve the first person in line (FIFO)
let served = line.shift();  // remove from beginning
console.log("Served:", served);  // "Person 1"
console.log("Remaining line:", line);  // ["Person 2", "Person 3"]

served = line.shift();
console.log("Served:", served);  // "Person 2"
console.log("Remaining line:", line);  // ["Person 3"]

// ----- 4. Practical Examples -----
console.log("\n=== PRACTICAL EXAMPLES ===");

// Todo list — add urgent tasks to the front
let todos = ["write report", "check email"];

console.log("Todos:", todos);
todos.unshift("URGENT: Fix production bug!");
console.log("After urgent:", todos);

// Undo shift by keeping the removed value
let task = todos.shift();
console.log("Completed:", task);
console.log("Remaining:", todos);

// ----- 5. Performance Note -----
console.log("\n=== PERFORMANCE NOTE ===");
console.log("push/pop: O(1) — fast (operate at end)");
console.log("shift/unshift: O(n) — slow (re-indexes all elements)");
console.log("For large arrays, prefer push/pop over shift/unshift.");
console.log("Or use an index pointer instead of shift().");

// Index pointer alternative to avoid shift
let items = ["a", "b", "c", "d"];
let pointer = 0;
console.log("\nUsing index pointer instead of shift:");
while (pointer < items.length) {
    console.log(`  Process: items[${pointer}] = ${items[pointer]}`);
    pointer++;
}
console.log("Items still intact:", items);  // original array preserved

// =============================================
// SUMMARY
// unshift(x) → adds x at beginning, returns new length
// shift()    → removes first element, returns it
// Both modify the array in-place
// Queue = FIFO (First In, First Out) — push + shift
// Prefer push/pop for performance
// =============================================
