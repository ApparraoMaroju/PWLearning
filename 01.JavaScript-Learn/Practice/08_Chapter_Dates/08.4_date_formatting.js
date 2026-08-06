// =============================================
// Program: DATE FORMATTING
// =============================================
// Formatting dates for display:
//   toDateString, toTimeString, toISOString
//   toLocaleString, toLocaleDateString, toLocaleTimeString
//   toUTCString
// =============================================

// Example 1: Standard format methods
console.log("Example 1: Standard methods");

let date = new Date(2026, 6, 4, 15, 45, 30);

console.log("toString():", date.toString());
console.log("toDateString():", date.toDateString());
console.log("toTimeString():", date.toTimeString());
console.log("toISOString():", date.toISOString());
console.log("toUTCString():", date.toUTCString());

console.log("");

// Example 2: Locale formats
console.log("Example 2: Locale methods");

console.log("toLocaleString():", date.toLocaleString());
console.log("toLocaleDateString():", date.toLocaleDateString());
console.log("toLocaleTimeString():", date.toLocaleTimeString());

console.log("");

// Example 3: Locale with options — full control
console.log("Example 3: Locale options");

let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

console.log("Long format:", date.toLocaleDateString("en-US", options));
// "Saturday, July 4, 2026"

console.log("");

// Example 4: Different locales
console.log("Example 4: Same date, different locales");

console.log("en-US:", date.toLocaleDateString("en-US"));
console.log("en-GB:", date.toLocaleDateString("en-GB"));   // day/month/year
console.log("de-DE:", date.toLocaleDateString("de-DE"));
console.log("ja-JP:", date.toLocaleDateString("ja-JP"));

console.log("");

// Example 5: Time formatting options
console.log("Example 5: Time options");

let timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
};

console.log("12-hour:", date.toLocaleTimeString("en-US", timeOptions));  // "03:45:30 PM"

timeOptions.hour12 = false;
console.log("24-hour:", date.toLocaleTimeString("en-US", timeOptions));  // "15:45:30"

console.log("");

// Example 6: Practical — currency-style date (compact)
console.log("Example 6: Compact date");

function compactDate(d) {
    let y = d.getFullYear();
    let m = String(d.getMonth() + 1).padStart(2, "0");
    let day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
}

console.log("Compact:", compactDate(date));  // "2026-07-04"

console.log("");

// Example 7: Practical — relative "days ago" style
console.log("Example 7: Friendly date");

function friendlyDate(d) {
    let now = new Date();
    let diffDays = Math.round((now - d) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays === -1) return "Tomorrow";
    if (Math.abs(diffDays) < 7) return Math.abs(diffDays) + " days ago";
    return d.toLocaleDateString();
}

console.log("Today:", friendlyDate(new Date()));
console.log("Yesterday:", friendlyDate(new Date(Date.now() - 86400000)));
console.log("3 days ago:", friendlyDate(new Date(Date.now() - 3 * 86400000)));
console.log("30 days ago:", friendlyDate(new Date(Date.now() - 30 * 86400000)));

console.log("");

// Example 8: Practical — timestamp to readable time
console.log("Example 8: From a timestamp");

let timestamp = Date.now();
let fromTs = new Date(timestamp);

console.log("Readable:", fromTs.toLocaleString());
console.log("Time only:", fromTs.toLocaleTimeString());

// =============================================
// SUMMARY
// - toDateString / toTimeString / toISOString — quick formats
// - toLocaleString(...) — locale-aware, many options
// - Options: weekday, year, month, day, hour, minute...
// - hour12: true/false for 12/24-hour time
// - Build custom strings with getters + padStart
// =============================================
