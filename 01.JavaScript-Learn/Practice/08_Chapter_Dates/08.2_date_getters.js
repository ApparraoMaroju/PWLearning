// =============================================
// Program: DATE GETTERS
// =============================================
// Methods that READ parts of a date.
//   getFullYear, getMonth, getDate, getDay
//   getHours, getMinutes, getSeconds, getMilliseconds
//   getTime (timestamp)
// =============================================

// Example 1: Date components
console.log("Example 1: Reading components");

let date = new Date(2026, 6, 4, 15, 45, 30, 123);  // Jul 4, 2026 15:45:30.123

console.log("getFullYear():", date.getFullYear());        // 2026
console.log("getMonth():", date.getMonth());              // 6 (July — 0-based!)
console.log("getDate():", date.getDate());                // 4 (day of month)
console.log("getDay():", date.getDay());                  // 6 (Saturday — 0=Sunday)
console.log("getHours():", date.getHours());              // 15
console.log("getMinutes():", date.getMinutes());          // 45
console.log("getSeconds():", date.getSeconds());          // 30
console.log("getMilliseconds():", date.getMilliseconds()); // 123

console.log("");

// Example 2: Month and day are 0-based
console.log("Example 2: 0-based month & day");

// Months: 0=Jan ... 11=Dec
// Days:   0=Sun ... 6=Sat

let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

console.log("Month number:", date.getMonth(), "→", monthNames[date.getMonth()]);  // Jul
console.log("Day number:", date.getDay(), "→", dayNames[date.getDay()]);          // Sat

console.log("");

// Example 3: getTime — timestamp of a date
console.log("Example 3: getTime");

console.log("getTime():", date.getTime());  // ms since epoch

console.log("");

// Example 4: Practical — format a date nicely
console.log("Example 4: Custom format function");

function formatDate(d) {
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return `${dayNames[d.getDay()]}, ${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

console.log(formatDate(date));   // "Sat, Jul 4, 2026"
console.log(formatDate(new Date()));

console.log("");

// Example 5: Practical — 12-hour clock format
console.log("Example 5: 12-hour format");

function formatTime(d) {
    let hours = d.getHours();
    let minutes = String(d.getMinutes()).padStart(2, "0");
    let period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    if (hours === 0) hours = 12;   // 12 AM / 12 PM

    return hours + ":" + minutes + " " + period;
}

console.log("15:45 →", formatTime(date));  // "3:45 PM"
console.log("00:05 →", formatTime(new Date(2026, 0, 1, 0, 5)));  // "12:05 AM"

console.log("");

// Example 6: Practical — days until an event
console.log("Example 6: Day-of-week check");

function isWeekend(d) {
    let day = d.getDay();
    return day === 0 || day === 6;   // Sun or Sat
}

console.log("Is weekend (Jul 4, 2026)?", isWeekend(date));  // true (Saturday)

console.log("");

// Example 7: UTC getters
console.log("Example 7: UTC getters");

console.log("getUTCFullYear():", date.getUTCFullYear());
console.log("getUTCMonth():", date.getUTCMonth());
console.log("getUTCHours():", date.getUTCHours());
// UTC variants return values in UTC (vs local time)

// =============================================
// SUMMARY
// - getFullYear — 4-digit year
// - getMonth — 0-based (0=Jan, 11=Dec)
// - getDay — day of week (0=Sun, 6=Sat)
// - getDate — day of month (1-31)
// - getHours/Minutes/Seconds — time parts
// - getTime — timestamp in ms
// - UTC variants: getUTCMonth etc.
// =============================================
