// =============================================
// Program: STRING PADDING & REPEAT  (ES2017)
// =============================================
//   padStart / padEnd — pad a string to a length
//   repeat — repeat a string N times
//   charCodeAt / fromCharCode — character codes
// =============================================

// Example 1: padStart() — pad at the beginning
console.log("Example 1: padStart");

let hour = "7";
console.log("padStart(2, '0'):", hour.padStart(2, "0"));  // "07"

let month = "12";
console.log("padStart(2, '0'):", month.padStart(2, "0")); // "12" (already 2 chars)

console.log("");

// Example 2: padEnd() — pad at the end
console.log("Example 2: padEnd");

let label = "Name";
console.log("padEnd(10, '.'):", label.padEnd(10, "."));  // "Name......"

let price = "$9";
console.log("padEnd(6, ' '):", JSON.stringify(price.padEnd(6, " ")));  // "$9    "

console.log("");

// Example 3: Practical — formatting a digital clock
console.log("Example 3: Digital clock formatting");

function formatTime(hours, minutes, seconds) {
    return [hours, minutes, seconds]
        .map(n => String(n).padStart(2, "0"))
        .join(":");
}

console.log("09:05:03 →", formatTime(9, 5, 3));   // "09:05:03"
console.log("23:59:59 →", formatTime(23, 59, 59)); // "23:59:59"

console.log("");

// Example 4: Practical — aligning table columns
console.log("Example 4: Table alignment");

let rows = [
    ["Alice", "Engineer"],
    ["Bob", "Designer"],
    ["Charlie", "Manager"]
];

for (let [name, role] of rows) {
    console.log(name.padEnd(10) + role);
}
// Alice     Engineer
// Bob       Designer
// Charlie   Manager

console.log("");

// Example 5: repeat() — repeat a string
console.log("Example 5: repeat");

console.log("'ab'.repeat(3):", "ab".repeat(3));    // "ababab"
console.log("'-'.repeat(5):", "-".repeat(5));      // "-----"
console.log("'ha '.repeat(2):", "ha ".repeat(2));  // "ha ha "

console.log("");

// Example 6: Practical — progress bar
console.log("Example 6: Progress bar");

function progressBar(percent) {
    let filled = Math.round(percent / 10);
    return "[" + "█".repeat(filled) + "░".repeat(10 - filled) + "] " + percent + "%";
}

console.log(progressBar(30));  // [███░░░░░░░] 30%
console.log(progressBar(80));  // [████████░░] 80%

console.log("");

// Example 7: charCodeAt() and String.fromCharCode()
console.log("Example 7: Character codes");

let letter = "A";
console.log('"A".charCodeAt(0):', letter.charCodeAt(0));  // 65

console.log("String.fromCharCode(65):", String.fromCharCode(65));   // "A"
console.log("String.fromCharCode(97):", String.fromCharCode(97));   // "a"

// Practical — shift letters (simple cipher):
function shiftLetter(ch, amount) {
    let code = ch.charCodeAt(0);
    return String.fromCharCode(code + amount);
}

console.log("shiftLetter('A', 1):", shiftLetter("A", 1));  // "B"
console.log("shiftLetter('a', 1):", shiftLetter("a", 1));  // "b"

console.log("");

// Example 8: Practical — truncate long text
console.log("Example 8: Truncate text");

function truncate(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength - 3) + "...";
}

console.log(truncate("A very long title that goes on", 20));
// "A very long title..."

// =============================================
// SUMMARY
// - padStart / padEnd — pad to a target length
// - repeat(n) — repeat a string n times
// - charCodeAt / String.fromCharCode — code ↔ character
// - Great for clocks, tables, progress bars, truncation
// =============================================
