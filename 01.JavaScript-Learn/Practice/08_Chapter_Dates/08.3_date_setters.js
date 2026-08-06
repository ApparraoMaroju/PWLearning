// =============================================
// Program: DATE SETTERS
// =============================================
// Methods that MODIFY parts of a date.
//   setFullYear, setMonth, setDate
//   setHours, setMinutes, setSeconds, setMilliseconds
//   setTime (from timestamp)
// =============================================

// Example 1: Setting components
console.log("Example 1: Basic setters");

let date = new Date(2026, 0, 15);   // Jan 15, 2026

date.setFullYear(2030);
console.log("After setFullYear(2030):", date.toDateString());  // Jan 15, 2030

date.setMonth(5);                    // June (0-based)
console.log("After setMonth(5):", date.toDateString());        // Jun 15, 2030

date.setDate(25);
console.log("After setDate(25):", date.toDateString());        // Jun 25, 2030

console.log("");

// Example 2: Setting time components
console.log("Example 2: Time setters");

let meeting = new Date(2026, 0, 15);

meeting.setHours(14);
meeting.setMinutes(30);
meeting.setSeconds(0);

console.log("Meeting time:", meeting.toString());

console.log("");

// Example 3: Setters roll over automatically
console.log("Example 3: Rollover");

let endOfMonth = new Date(2026, 0, 31);   // Jan 31

endOfMonth.setDate(endOfMonth.getDate() + 1);
console.log("Jan 31 + 1 day:", endOfMonth.toDateString());  // Feb 1 (auto-rollover!)

// Adding months rolls into the next year:
let dec15 = new Date(2026, 11, 15);
dec15.setMonth(dec15.getMonth() + 2);
console.log("Dec + 2 months:", dec15.toDateString());  // Feb 2027

console.log("");

// Example 4: Practical — add days to a date
console.log("Example 4: Add days function");

function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

let today = new Date(2026, 6, 4);
console.log("Today:", today.toDateString());
console.log("+7 days:", addDays(today, 7).toDateString());
console.log("-30 days:", addDays(today, -30).toDateString());

console.log("");

// Example 5: Practical — last day of the month
console.log("Example 5: Last day of month");

function lastDayOfMonth(year, month) {
    // Day 0 of the NEXT month = last day of this month
    return new Date(year, month + 1, 0);
}

console.log("Feb 2026 has", lastDayOfMonth(2026, 1).getDate(), "days");   // 28
console.log("Feb 2028 has", lastDayOfMonth(2028, 1).getDate(), "days");   // 29 (leap)
console.log("Apr 2026 has", lastDayOfMonth(2026, 3).getDate(), "days");   // 30

console.log("");

// Example 6: setTime — from a timestamp
console.log("Example 6: setTime");

let timestampDate = new Date();
timestampDate.setTime(0);
console.log("After setTime(0):", timestampDate.toUTCString());  // epoch

console.log("");

// Example 7: Setters return the timestamp
console.log("Example 7: Setter return value");

let d = new Date(2026, 0, 1);
let returned = d.setFullYear(2030);
console.log("Returned value (timestamp):", returned);
console.log("Is a number:", typeof returned);  // "number"

// =============================================
// SUMMARY
// - setFullYear / setMonth / setDate / setHours / ...
// - Months are 0-based in setters too
// - Out-of-range values ROLL OVER (Jan 31 + 1 = Feb 1)
// - Add days: setDate(getDate() + n)
// - Last day of month trick: new Date(y, m+1, 0)
// =============================================
