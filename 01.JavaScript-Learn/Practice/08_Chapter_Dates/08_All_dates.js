// =============================================
// Chapter: DATES in JavaScript
// =============================================
// The Date object works with dates and times.
// Run this file to see every concept in action.
// =============================================

// =============================================
// 1.  DATE BASICS
// =============================================
console.log("=== 1. DATE BASICS ===");

let now = new Date();
console.log("now:", now);

let fromParts = new Date(2026, 6, 4);   // Jul 4, 2026 (month 0-based)
console.log("from parts:", fromParts.toDateString());

let ts = Date.now();
console.log("timestamp:", ts);


// =============================================
// 2.  GETTERS
// =============================================
console.log("\n=== 2. GETTERS ===");

let d = new Date(2026, 6, 4, 15, 45, 30);

console.log("Year:", d.getFullYear());       // 2026
console.log("Month:", d.getMonth());         // 6 (July)
console.log("Date:", d.getDate());           // 4
console.log("Day:", d.getDay());             // 6 (Saturday)
console.log("Hours:", d.getHours());         // 15
console.log("Minutes:", d.getMinutes());     // 45


// =============================================
// 3.  SETTERS
// =============================================
console.log("\n=== 3. SETTERS ===");

let e = new Date(2026, 0, 15);

e.setFullYear(2030);
e.setMonth(5);
e.setDate(25);

console.log("After setters:", e.toDateString());  // Jun 25, 2030


// =============================================
// 4.  FORMATTING
// =============================================
console.log("\n=== 4. FORMATTING ===");

console.log("toDateString():", d.toDateString());
console.log("toISOString():", d.toISOString());
console.log("toLocaleDateString():", d.toLocaleDateString());
console.log("Custom:", d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }));


// =============================================
// 5.  CALCULATIONS
// =============================================
console.log("\n=== 5. CALCULATIONS ===");

let start = new Date(2026, 0, 1);
let end = new Date(2026, 0, 10);

let diffDays = (end - start) / (1000 * 60 * 60 * 24);
console.log("Days between Jan 1 and Jan 10:", diffDays);  // 9

function addDays(date, days) {
    let r = new Date(date);
    r.setDate(r.getDate() + days);
    return r;
}

console.log("Jan 1 + 45 days:", addDays(start, 45).toDateString());


// =============================================
// QUICK REFERENCE CHEAT SHEET
// =============================================
//
// new Date()                    → now
// new Date(2026, 0, 15)         → parts (month 0-based)
// new Date("2026-01-15")        → ISO string
// Date.now()                    → ms timestamp
//
// getFullYear / getMonth / getDate / getDay
// getHours / getMinutes / getSeconds
// setFullYear / setMonth / setDate / setHours ...
// getTime / setTime
//
// toDateString / toTimeString / toISOString / toUTCString
// toLocaleString / toLocaleDateString / toLocaleTimeString
//
// dateA - dateB                 → ms difference
// diff / (1000*60*60*24)        → days
// =============================================
