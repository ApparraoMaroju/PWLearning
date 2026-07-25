// =============================================
// Chapter: Operators in JavaScript (Part 1)
// =============================================
// Operators are symbols that perform operations on values (operands).
// =============================================

// =============================================
// 1. ARITHMETIC OPERATORS
// =============================================
// Used to perform mathematical calculations.

let a = 10;
let b = 3;

console.log("=== ARITHMETIC OPERATORS ===");
console.log("a =", a, ", b =", b);

// Addition (+)
console.log("a + b =", a + b);   // 10 + 3 = 13

// Subtraction (-)
console.log("a - b =", a - b);   // 10 - 3 = 7

// Multiplication (*)
console.log("a * b =", a * b);   // 10 * 3 = 30

// Division (/)  -> gives quotient
console.log("a / b =", a / b);   // 10 / 3 = 3.333...

// Modulus (%)  -> gives remainder
console.log("a % b =", a % b);   // 10 % 3 = 1

// Exponentiation (**)  -> power of
console.log("a ** b =", a ** b); // 10 ** 3 = 1000 (10 raised to power 3)

// Increment (++)
let x = 5;
x++;  // same as x = x + 1
console.log("\nIncrement: x =", x);  // 6

// Decrement (--)
let y = 5;
y--;  // same as y = y - 1
console.log("Decrement: y =", y);   // 4

// ---------- Pre vs Post Increment/Decrement ----------
// POST-increment: returns OLD value, then increments
let num1 = 5;
let result1 = num1++;
console.log("\nPost-increment: result1 =", result1, ", num1 =", num1);  // result1=5, num1=6

// PRE-increment: increments first, then returns NEW value
let num2 = 5;
let result2 = ++num2;
console.log("Pre-increment: result2 =", result2, ", num2 =", num2);     // result2=6, num2=6

// Same logic applies to -- (decrement)
let num3 = 5;
console.log("Post-decrement:", num3--, ", after:", num3);  // prints 5, then num3=4

let num4 = 5;
console.log("Pre-decrement:", --num4, ", after:", num4);   // prints 4, then num4=4


// =============================================
// 2. ASSIGNMENT OPERATORS
// =============================================
// Used to assign values to variables.

console.log("\n=== ASSIGNMENT OPERATORS ===");

let n = 10;
console.log("Initial n =", n);

// Simple assignment (=)
n = 20;
console.log("n = 20     =>", n);

// Add and assign (+=)
n = 10;
n += 5;   // same as n = n + 5
console.log("n += 5     =>", n);  // 15

// Subtract and assign (-=)
n = 10;
n -= 3;   // same as n = n - 3
console.log("n -= 3     =>", n);  // 7

// Multiply and assign (*=)
n = 10;
n *= 2;   // same as n = n * 2
console.log("n *= 2     =>", n);  // 20

// Divide and assign (/=)
n = 10;
n /= 4;   // same as n = n / 4
console.log("n /= 4     =>", n);  // 2.5

// Modulus and assign (%=)
n = 10;
n %= 3;   // same as n = n % 3
console.log("n %= 3     =>", n);  // 1

// Exponent and assign (**=)
n = 10;
n **= 2;  // same as n = n ** 2
console.log("n **= 2    =>", n);  // 100


// =============================================
// 3. COMPARISON (RELATIONAL) OPERATORS
// =============================================
// Used to compare two values — always return true or false.

console.log("\n=== COMPARISON OPERATORS ===");

let p = 10;
let q = "10";   // string, not number
let r = 5;

// Equal to (==)  -> checks ONLY value, NOT type
console.log("p == q  :", p == q);   // true  (because both have value 10)

// Strict equal to (===) -> checks BOTH value AND type
console.log("p === q :", p === q);  // false (number vs string)

// Not equal to (!=)  -> checks only value
console.log("p != q  :", p != q);   // false (values are same)

// Strict not equal to (!==) -> checks value OR type
console.log("p !== q :", p !== q);  // true  (types are different)

// Greater than (>)
console.log("p > r   :", p > r);    // true  (10 > 5)

// Less than (<)
console.log("p < r   :", p < r);    // false (10 < 5 is wrong)

// Greater than or equal to (>=)
console.log("p >= 10 :", p >= 10);  // true  (10 >= 10)

// Less than or equal to (<=)
console.log("r <= 5  :", r <= 5);   // true  (5 <= 5)

// Ternary Operator (? :)  — shorthand for if-else
// Syntax: condition ? valueIfTrue : valueIfFalse
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log("\nTernary: Can vote?", canVote);  // "Yes"

age = 15;
canVote = age >= 18 ? "Yes" : "No";
console.log("Ternary: Can vote?", canVote);   // "No"


// =============================================
// 4. LOGICAL OPERATORS
// =============================================
// Used to combine multiple conditions. Return boolean or short-circuit value.

console.log("\n=== LOGICAL OPERATORS ===");

let isLoggedIn = true;
let isAdmin = false;

// AND (&&)  -> true only if BOTH are true
console.log("true  && false :", isLoggedIn && isAdmin);  // false
console.log("true  && true  :", isLoggedIn && true);     // true

// OR (||)   -> true if AT LEAST ONE is true
console.log("true  || false :", isLoggedIn || isAdmin);  // true
console.log("false || false :", false || false);         // false

// NOT (!)   -> reverses the boolean value
console.log("!true         :", !true);      // false
console.log("!false        :", !false);     // true
console.log("!isLoggedIn   :", !isLoggedIn); // false (reverses true)

// ---------- Short-circuit Evaluation ----------
// && stops at first false; || stops at first true.

console.log("\n--- Short-circuit Examples ---");

// With &&
let result = 0 && 10;       // 0 is falsy -> stops here, returns 0
console.log("0 && 10 =", result);  // 0

result = 5 && 10;           // 5 is truthy -> continues, returns 10
console.log("5 && 10 =", result);  // 10

// With ||
result = 0 || 10;           // 0 is falsy -> continues, returns 10
console.log("0 || 10 =", result);  // 10

result = 5 || 10;           // 5 is truthy -> stops here, returns 5
console.log("5 || 10 =", result);  // 5

// Nullish Coalescing (??)  -> returns right side ONLY if left is null or undefined
let userName = null;
let displayName = userName ?? "Guest";
console.log("\nNullish Coalescing:", displayName);  // "Guest" (because userName was null)

userName = "Alice";
displayName = userName ?? "Guest";
console.log("Nullish Coalescing:", displayName);    // "Alice" (not null/undefined)

// Difference between || and ??
// || treats ALL falsy values (0, "", false, null, undefined) as "no value"
// ?? treats ONLY null/undefined as "no value"
let count = 0;
console.log("\n|| vs ?? with 0:");
console.log("count || 10 =", count || 10);  // 10 (0 is falsy, so falls back)
console.log("count ?? 10 =", count ?? 10);  // 0  (0 is not null/undefined, keeps it)


// =============================================
// 5. STRING OPERATORS
// =============================================
// Concatenation — joining strings together.

console.log("\n=== STRING OPERATORS ===");

// + with strings does concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);   // "John Doe"

// += appends to string
let msg = "Hello";
msg += " World";
console.log("Message:", msg);  // "Hello World"

// Template literals (backticks ``) — modern way
let greet = `Hello, ${firstName} ${lastName}!`;
console.log("Template literal:", greet);  // "Hello, John Doe!"


// =============================================
// 6. TYPE OPERATORS
// =============================================
// Used to check or change the type of a value.

console.log("\n=== TYPE OPERATORS ===");

// typeof — tells you what type a value is
console.log("typeof 42        :", typeof 42);           // "number"
console.log("typeof 'hello'   :", typeof "hello");      // "string"
console.log("typeof true      :", typeof true);          // "boolean"
console.log("typeof undefined :", typeof undefined);     // "undefined"
console.log("typeof null      :", typeof null);          // "object" (this is a known JS bug)
console.log("typeof [1,2,3]   :", typeof [1, 2, 3]);    // "object"
console.log("typeof {a:1}     :", typeof { a: 1 });     // "object"

// instanceof — checks if an object is an instance of a class/constructor
let arr = [1, 2, 3];
let obj = { name: "test" };
console.log("\narr instanceof Array  :", arr instanceof Array);   // true
console.log("obj instanceof Object :", obj instanceof Object);  // true


// =============================================
// 7. BITWISE OPERATORS (Bonus — less common)
// =============================================
// Work on the binary representation of numbers.

console.log("\n=== BITWISE OPERATORS ===");

let m = 5;  // binary: 0101
let nB = 3; // binary: 0011

console.log("m =", m, "(binary 0101), n =", nB, "(binary 0011)");

// AND (&)  -> 1 if BOTH bits are 1
console.log("5 & 3  =", m & nB);    // 1  (binary 0001)

// OR (|)   -> 1 if AT LEAST ONE bit is 1
console.log("5 | 3  =", m | nB);    // 7  (binary 0111)

// XOR (^)  -> 1 if bits are DIFFERENT
console.log("5 ^ 3  =", m ^ nB);    // 6  (binary 0110)

// NOT (~)  -> flips all bits
console.log("~5     =", ~m);        // -6 (flips 0101 -> 1010 in 2's complement)

// Left shift (<<) -> shifts bits left (multiplies by 2^shift)
console.log("5 << 1 =", 5 << 1);    // 10 (0101 -> 1010)

// Right shift (>>) -> shifts bits right (divides by 2^shift)
console.log("5 >> 1 =", 5 >> 1);    // 2  (0101 -> 0010)


// =============================================
// 8. OPERATOR PRECEDENCE (which runs first)
// =============================================
// JavaScript follows standard math rules: PEMDAS / BODMAS

console.log("\n=== OPERATOR PRECEDENCE ===");

let result_no_parens = 2 + 3 * 4;
console.log("2 + 3 * 4 =", result_no_parens);  // 14 (multiplication first)

let result_with_parens = (2 + 3) * 4;
console.log("(2 + 3) * 4 =", result_with_parens);  // 20 (parentheses first)

// Rule of thumb: when in doubt, use parentheses to make intent clear.
let complex = (10 + 5) * (2 ** 3) - 10 / 2;
// Step by step: (15) * (8) - 5 = 120 - 5 = 115
console.log("Complex expression:", complex);  // 115


// =============================================
// QUICK REFERENCE CHEAT SHEET
// =============================================
//
// Arithmetic : +  -  *  /  %  **  ++  --
// Assignment : =  +=  -=  *=  /=  %=  **=
// Comparison : ==  ===  !=  !==  >  <  >=  <=  ?:
// Logical    : &&  ||  !  ??
// String     : +  +=  `template ${}`
// Type       : typeof  instanceof
// Bitwise    : &  |  ^  ~  <<  >>
// =============================================
