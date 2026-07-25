// =============================================
// Program: splice() — Add, Remove, Replace ANYWHERE
// =============================================
// splice() is the Swiss Army knife of arrays.
// It can ADD, REMOVE, or REPLACE elements at any position.
// Modifies the ORIGINAL array. Returns removed elements.
//
// Syntax: arr.splice(startIndex, deleteCount, ...itemsToAdd)
// =============================================

// ----- 1. REMOVE elements -----
console.log("=== REMOVING WITH splice() ===");

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("Initial:", fruits);

// Remove 2 elements starting from index 1
let removed = fruits.splice(1, 2);
console.log("Removed:", removed);   // ["banana", "cherry"]
console.log("Array after:", fruits); // ["apple", "date", "elderberry"]

// Remove just 1 element (index 1, delete 1)
removed = fruits.splice(1, 1);
console.log("Removed one:", removed);  // ["date"]
console.log("Array now:", fruits);      // ["apple", "elderberry"]

// Remove last element using negative index
fruits = ["a", "b", "c", "d"];
removed = fruits.splice(-1, 1);  // start from last, remove 1
console.log("\nNegative index removed:", removed);  // ["d"]
console.log("Array:", fruits);  // ["a", "b", "c"]

// ----- 2. ADD elements (without removing) -----
console.log("\n=== ADDING WITH splice() ===");

let colors = ["red", "green", "blue"];
console.log("Initial:", colors);

// Add at index 1 (deleteCount = 0 means no removal)
colors.splice(1, 0, "yellow", "purple");
console.log("After adding at index 1:", colors);
// ["red", "yellow", "purple", "green", "blue"]

// Add at the beginning (index 0)
colors.splice(0, 0, "orange");
console.log("After adding at beginning:", colors);
// ["orange", "red", "yellow", "purple", "green", "blue"]

// Add at the end (index = length)
colors.splice(colors.length, 0, "pink");
console.log("After adding at end:", colors);
// ["orange", "red", "yellow", "purple", "green", "blue", "pink"]

// ----- 3. REPLACE elements (remove + add) -----
console.log("\n=== REPLACING WITH splice() ===");

let tasks = ["Task A", "Task B", "Task C", "Task D"];
console.log("Initial:", tasks);

// Replace "Task B" and "Task C" with new tasks
let replaced = tasks.splice(1, 2, "Task X", "Task Y");
console.log("Removed:", replaced);   // ["Task B", "Task C"]
console.log("Array after:", tasks);  // ["Task A", "Task X", "Task Y", "Task D"]

// Replace just 1 element
tasks.splice(2, 1, "Task Z");
console.log("After replacing index 2:", tasks);  // ["Task A", "Task X", "Task Z", "Task D"]

// ----- 4. splice() returns empty array when nothing removed -----
console.log("\n=== RETURN VALUE ===");

let arr = [1, 2, 3];
let result = arr.splice(0, 0, 99);
console.log("Returned when deleteCount=0:", result);  // []

console.log("\n");

// ----- 5. Real-world use case: Insert at specific position -----
console.log("=== REAL-WORLD: PRIORITY TODO ===");

let todoList = ["write report", "check email", "meeting prep"];

// Add high-priority task at index 1 (after the first task)
todoList.splice(1, 0, "URGENT: Fix login bug!");
console.log("Todo list:", todoList);

// Replace a task
let idx = todoList.indexOf("check email");
if (idx !== -1) {
    todoList.splice(idx, 1, "send email");
}
console.log("After updating:", todoList);

// ----- 6. Using splice() to clear a portion of array -----
console.log("\n=== PARTIAL CLEAR ===");

let nums = [10, 20, 30, 40, 50, 60];
nums.splice(2);  // remove everything from index 2 to end
console.log("After removing from index 2:", nums);  // [10, 20]

// Restore and remove all
nums = [10, 20, 30, 40, 50, 60];
nums.splice(0);  // remove everything
console.log("After removing all:", nums);  // []

// =============================================
// SUMMARY
// splice(start, deleteCount, ...items)
// - Removes deleteCount items from start index
// - Inserts items at the same position
// - Returns an array of removed items
// - Modifies the original array
// - Negative start index counts from the end
// - deleteCount = 0 → pure insert
// - deleteCount omitted → removes all to end
// =============================================
