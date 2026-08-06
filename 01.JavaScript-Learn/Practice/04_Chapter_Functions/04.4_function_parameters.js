// =============================================
// Program: FUNCTION PARAMETERS & ARGUMENTS
// =============================================
// Parameters are the names in the definition.
// Arguments are the values you pass when calling.
// JavaScript is lenient: extra args are ignored,
// missing args become undefined.
// =============================================

// Example 1: Parameters vs arguments
function add(a, b) {   // a, b are PARAMETERS
    return a + b;
}

console.log("Example 1: Parameters vs arguments");
console.log("add(3, 5) =", add(3, 5));  // 3, 5 are ARGUMENTS → 8

console.log("");

// Example 2: Passing extra arguments (ignored)
console.log("Example 2: Extra arguments");

console.log("add(1, 2, 99) =", add(1, 2, 99));  // 3 (99 ignored)

console.log("");

// Example 3: Missing arguments become undefined
console.log("Example 3: Missing arguments");

console.log("add(7) =", add(7));   // 7 + undefined = NaN
console.log("add() =", add());     // undefined + undefined = NaN

console.log("");

// Example 4: The `arguments` object (regular functions only)
console.log("Example 4: arguments object");

function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log("sumAll(1, 2, 3) =", sumAll(1, 2, 3));        // 6
console.log("sumAll(1, 2, 3, 4, 5) =", sumAll(1, 2, 3, 4, 5));  // 15

console.log("");

// Example 5: Rest parameters (...) — modern replacement
console.log("Example 5: Rest parameters");

function sumWithRest(...numbers) {   // collects ALL args into an array
    return numbers.reduce((acc, n) => acc + n, 0);
}

console.log("sumWithRest(1, 2, 3) =", sumWithRest(1, 2, 3));        // 6
console.log("sumWithRest(1, 2, 3, 4, 5) =", sumWithRest(1, 2, 3, 4, 5));  // 15

console.log("");

// Example 6: Rest with leading parameters
console.log("Example 6: Rest after named params");

function makeSentence(verb, ...objects) {
    return "I " + verb + " " + objects.join(", ");
}

console.log(makeSentence("like", "apples", "bananas", "cherries"));
// "I like apples, bananas, cherries"

console.log("");

// Example 7: Passing arrays with spread
console.log("Example 7: Spread when calling");

let nums = [10, 20, 30];

console.log("sumWithRest(...nums) =", sumWithRest(...nums));  // 60
// ...nums spreads the array into individual arguments

console.log("");

// Example 8: Parameter count and length
console.log("Example 8: function.length");

function threeParams(a, b, c) {}

console.log("threeParams.length =", threeParams.length);  // 3
console.log("add.length =", add.length);                  // 2

// =============================================
// SUMMARY
// - Parameters = definition; arguments = call values
// - Missing args → undefined; extra args → ignored
// - arguments object works in regular functions
// - Rest params (...) collect remaining args into an array
// - Spread (...) expands an array into individual args
// =============================================
