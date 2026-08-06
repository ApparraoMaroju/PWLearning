// =============================================
// Program: DATE BASICS
// =============================================
// The Date object represents a moment in time.
//   new Date()              — now
//   new Date(timestamp)     — from milliseconds
//   new Date("2026-01-15")  — from a string
//   new Date(y, m, d, h, min, s) — from parts (month 0-based!)
// =============================================

// Example 1: Current date/time
console.log("Example 1: Current date");

let now = new Date();
console.log("new Date():", now);

console.log("");

// Example 2: Timestamp — milliseconds since Jan 1, 1970
console.log("Example 2: Timestamp");

let timestamp = Date.now();
console.log("Date.now():", timestamp);  // big number of milliseconds
console.log("typeof:", typeof timestamp);  // "number"

console.log("");

// Example 3: Creating from a timestamp
console.log("Example 3: From timestamp");

let fromTimestamp = new Date(0);
console.log("new Date(0):", fromTimestamp);  // 1970-01-01 (epoch)

let fromNow = new Date(Date.now());
console.log("new Date(Date.now()):", fromNow);

console.log("");

// Example 4: Creating from a date string
console.log("Example 4: From a string");

let fromString = new Date("2026-01-15");
console.log('new Date("2026-01-15"):', fromString);

let withTime = new Date("2026-01-15T10:30:00");
console.log('new Date("2026-01-15T10:30:00"):', withTime);

console.log("");

// Example 5: Creating from parts
console.log("Example 5: From parts (year, month, day)");

let fromParts = new Date(2026, 0, 15);   // month 0 = January!
console.log("new Date(2026, 0, 15):", fromParts);  // Jan 15, 2026

// IMPORTANT: months are 0-indexed:
//   0 = January, 1 = February, ... 11 = December
console.log("Month index 5 = June:", new Date(2026, 5, 1).toDateString());

console.log("");

// Example 6: Full time parts
console.log("Example 6: Date with time");

let full = new Date(2026, 0, 15, 14, 30, 45);
console.log("new Date(2026, 0, 15, 14, 30, 45):", full);

console.log("");

// Example 7: Invalid date
console.log("Example 7: Invalid date");

let invalid = new Date("not a date");
console.log("Invalid date object:", invalid);
console.log("isNaN(invalid):", isNaN(invalid));       // true
console.log("invalid.toString():", invalid.toString());  // "Invalid Date"

console.log("");

// Example 8: Displaying dates
console.log("Example 8: Display basics");

let today = new Date();

console.log("toString():", today.toString());
console.log("toDateString():", today.toDateString());
console.log("toISOString():", today.toISOString());

// =============================================
// SUMMARY
// - new Date() = now
// - Timestamps = ms since 1970-01-01 (Date.now())
// - Strings parse ISO format: "2026-01-15"
// - Month argument is 0-based (0 = January)
// - Check validity with isNaN(date)
// =============================================
