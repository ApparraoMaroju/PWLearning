// =============================================
// Program: DATE CALCULATIONS
// =============================================
// Dates can be subtracted to get differences.
// The result is in milliseconds — divide to
// get days, hours, minutes, etc.
// =============================================

// Example 1: Subtracting dates (ms difference)
console.log("Example 1: Date difference");

let start = new Date(2026, 0, 1);
let end = new Date(2026, 0, 10);

let diffMs = end - start;
console.log("Difference in ms:", diffMs);

let diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log("Difference in days:", diffDays);  // 9

console.log("");

// Example 2: Convert ms to different units
console.log("Example 2: Unit conversions");

let oneDay = 1000 * 60 * 60 * 24;

console.log("1 day in ms:", oneDay);
console.log("1 hour in ms:", 1000 * 60 * 60);
console.log("1 minute in ms:", 1000 * 60);
console.log("1 second in ms:", 1000);

console.log("");

// Example 3: Age calculation
console.log("Example 3: Age calculator");

function calculateAge(birthDate) {
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();

    // Haven't had a birthday yet this year:
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

console.log("Born 2000-06-15, age:", calculateAge(new Date(2000, 5, 15)));
console.log("Born 2015-12-25, age:", calculateAge(new Date(2015, 11, 25)));

console.log("");

// Example 4: Countdown to an event
console.log("Example 4: Countdown");

function countdown(targetDate) {
    let now = new Date();
    let diffMs = targetDate - now;

    if (diffMs <= 0) return "The event has passed!";

    let days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${days} days, ${hours} hours, ${minutes} minutes`;
}

let newYear = new Date(2027, 0, 1);
console.log("Until New Year 2027:", countdown(newYear));

console.log("");

// Example 5: Comparing dates
console.log("Example 5: Comparing dates");

let earlier = new Date(2026, 0, 1);
let later = new Date(2026, 5, 1);

console.log("earlier < later:", earlier < later);   // true
console.log("later > earlier:", later > earlier);   // true
console.log("earlier === later:", earlier === later);  // false (different objects)

// Compare by timestamp for equality:
let copy1 = new Date(2026, 0, 1);
let copy2 = new Date(2026, 0, 1);
console.log("Same time:", copy1.getTime() === copy2.getTime());  // true

console.log("");

// Example 6: Practical — due date check
console.log("Example 6: Task due check");

function isOverdue(dueDate) {
    return dueDate.getTime() < Date.now();
}

console.log("Yesterday due:", isOverdue(new Date(Date.now() - 86400000)));   // true
console.log("Tomorrow due:", isOverdue(new Date(Date.now() + 86400000)));    // false

console.log("");

// Example 7: Adding months/years
console.log("Example 7: Add months");

function addMonths(date, months) {
    let result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
}

let today = new Date(2026, 6, 4);
console.log("Today:", today.toDateString());
console.log("+6 months:", addMonths(today, 6).toDateString());
console.log("+12 months:", addMonths(today, 12).toDateString());

console.log("");

// Example 8: Elapsed time (performance measure)
console.log("Example 8: Measure elapsed time");

function slowTask() {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        sum += i;
    }
    return sum;
}

let t0 = Date.now();
slowTask();
let elapsed = Date.now() - t0;

console.log("Task took", elapsed, "ms");

// =============================================
// SUMMARY
// - Subtract dates → ms difference
// - Divide by 86,400,000 for days
// - Compare with < > and .getTime() for equality
// - Countdowns: Math.floor(diff / unit)
// - setMonth(n) handles year rollover
// =============================================
