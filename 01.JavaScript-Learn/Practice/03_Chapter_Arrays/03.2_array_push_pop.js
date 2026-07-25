// =============================================
// Program: push() and pop() — Add/Remove from END
// =============================================
// push()  → adds element(s) to the END, returns new length
// pop()   → removes the LAST element, returns removed element
// Both MODIFY the original array (in-place).
// Stack behavior: Last-In-First-Out (LIFO)
// =============================================

// ----- 1. push() — Add to End -----
console.log("=== push() — ADD TO END ===");

let stack = [10, 20];
console.log("Initial:", stack);

// Add one element at the end
let newLength = stack.push(30);
console.log("After push(30):", stack, "| returned:", newLength);  // [10,20,30], 3

// Add multiple elements at once
newLength = stack.push(40, 50, 60);
console.log("After push(40,50,60):", stack, "| returned:", newLength);  // [10,20,30,40,50,60], 6

// ----- 2. pop() — Remove from End -----
console.log("\n=== pop() — REMOVE FROM END ===");

let last = stack.pop();
console.log("Popped:", last);   // 60
console.log("Array after:", stack);  // [10,20,30,40,50]

last = stack.pop();
console.log("Popped:", last);   // 50
console.log("Array after:", stack);  // [10,20,30,40]

// Pop from empty array returns undefined
let empty = [];
console.log("Pop from empty:", empty.pop());  // undefined

// ----- 3. Using push/pop as a Stack -----
console.log("\n=== STACK DEMO (LIFO) ===");

let plateStack = [];

plateStack.push("Plate 1");
plateStack.push("Plate 2");
plateStack.push("Plate 3");
console.log("Stack:", plateStack);

let top = plateStack.pop();
console.log("Remove:", top);   // "Plate 3" (last added, first removed)
console.log("Stack now:", plateStack);

top = plateStack.pop();
console.log("Remove:", top);   // "Plate 2"
console.log("Stack now:", plateStack);

// ----- 4. push() returns new length (useful for tracking) -----
console.log("\n=== PRACTICAL USES ===");

let cart = [];
let count;

count = cart.push("Laptop");
console.log(`Cart has ${count} item(s):`, cart);

count = cart.push("Mouse", "Keyboard");
console.log(`Cart has ${count} item(s):`, cart);

// pop() to undo last action
let removed = cart.pop();
console.log("Removed:", removed);
console.log("Cart:", cart);

// ----- 5. Stack behavior visualization -----
console.log("\n=== STACK VISUALIZATION ===");

let history = [];
history.push("Page 1: Home");
history.push("Page 2: About");
history.push("Page 3: Contact");
console.log("Browser history:", history);

console.log("Back button → go to:", history.pop());  // Contact
console.log("Back button → go to:", history.pop());  // About
console.log("Remaining:", history);  // [Home]

// =============================================
// SUMMARY
// push(x)  → adds x at end, returns new length
// pop()    → removes last element, returns it
// Both modify the array in-place
// Stack = LIFO (Last In, First Out)
// =============================================
