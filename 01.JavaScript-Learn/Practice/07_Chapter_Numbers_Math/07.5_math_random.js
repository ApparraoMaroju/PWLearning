// =============================================
// Program: MATH.RANDOM
// =============================================
// Math.random() returns a decimal between 0 (inclusive)
// and 1 (exclusive):  0 ≤ x < 1
// Build random integers with scaling and Math.floor.
// =============================================

// Example 1: Basic Math.random()
console.log("Example 1: Basic random");

let r = Math.random();
console.log("Math.random():", r);
console.log("Always between 0 and 1:", r >= 0 && r < 1);  // true

console.log("");

// Example 2: Random integer 0 to 9
console.log("Example 2: Integer 0-9");

function randomDigit() {
    return Math.floor(Math.random() * 10);   // 0 ≤ x < 10 → 0..9
}

console.log("Three random digits:", randomDigit(), randomDigit(), randomDigit());

console.log("");

// Example 3: Random integer 1 to 10
console.log("Example 3: Integer 1-10");

function randomOneToTen() {
    return Math.floor(Math.random() * 10) + 1;  // 1..10
}

console.log("Three rolls:", randomOneToTen(), randomOneToTen(), randomOneToTen());

console.log("");

// Example 4: Generic random integer in a range
console.log("Example 4: Generic range (min-max inclusive)");

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("5-10:", randomInt(5, 10), randomInt(5, 10));
console.log("100-200:", randomInt(100, 200), randomInt(100, 200));

console.log("");

// Example 5: Dice roll (1-6)
console.log("Example 5: Dice roll");

function rollDie() {
    return randomInt(1, 6);
}

let results = [];
for (let i = 0; i < 5; i++) {
    results.push(rollDie());
}
console.log("5 dice rolls:", results.join(", "));

console.log("");

// Example 6: Coin flip
console.log("Example 6: Coin flip");

function flipCoin() {
    return Math.random() < 0.5 ? "Heads" : "Tails";
}

let flips = [];
for (let i = 0; i < 5; i++) {
    flips.push(flipCoin());
}
console.log("5 flips:", flips.join(", "));

console.log("");

// Example 7: Random element from an array
console.log("Example 7: Random array element");

let fruits = ["apple", "banana", "cherry", "date"];

function randomItem(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

console.log("Random fruits:", randomItem(fruits), "|", randomItem(fruits));

console.log("");

// Example 8: Random decimal in a range
console.log("Example 8: Random decimal 0-100");

function randomDecimal(max) {
    return Math.random() * max;
}

console.log("Random decimals:", randomDecimal(100).toFixed(2), "|", randomDecimal(100).toFixed(2));

console.log("");

// Example 9: Simulating a lottery number pick
console.log("Example 9: Lottery simulation");

function lotteryNumbers(count, max) {
    let picks = new Set();
    while (picks.size < count) {
        picks.add(randomInt(1, max));
    }
    return [...picks].sort((a, b) => a - b);
}

console.log("6 numbers from 1-49:", lotteryNumbers(6, 49).join(" "));

// =============================================
// SUMMARY
// - Math.random() → 0 ≤ x < 1
// - Integer 0..n-1: Math.floor(Math.random() * n)
// - Range min..max: Math.floor(Math.random() * (max-min+1)) + min
// - Use for dice, coins, random picks, shuffles
// =============================================
