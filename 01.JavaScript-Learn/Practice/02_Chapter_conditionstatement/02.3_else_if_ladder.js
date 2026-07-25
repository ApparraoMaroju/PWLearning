// =============================================
// Program: else if LADDER
// =============================================
// The else if ladder checks multiple conditions in sequence.
// It stops at the FIRST condition that is true and skips the rest.
// Syntax:
//   if (condition1) {
//       // runs if condition1 is true
//   } else if (condition2) {
//       // runs if condition1 is false AND condition2 is true
//   } else if (condition3) {
//       // runs if condition1 & condition2 are false AND condition3 is true
//   } else {
//       // runs if ALL conditions are false (optional)
//   }
// =============================================

// Example 1: Grade calculator (most common use case)
let score = 85;

console.log("Example 1: Grade Calculator");
console.log("Score:", score);

if (score >= 90) {
    console.log("Grade: A — Outstanding! 🏆");
} else if (score >= 80) {
    console.log("Grade: B — Great job! ✅");   // this runs (85 >= 80)
} else if (score >= 70) {
    console.log("Grade: C — Good.");
} else if (score >= 60) {
    console.log("Grade: D — Needs improvement.");
} else {
    console.log("Grade: F — Failed. 💔");
}
// Note: Even though 85 >= 70 and >= 60 are also true,
// the ladder stops at the FIRST match (85 >= 80).

console.log("");

// Example 2: Time-of-day greeting
let hour = 14;  // 24-hour format (14 = 2 PM)

console.log("Example 2: Time-based greeting");
console.log("Current hour:", hour + ":00");

if (hour >= 5 && hour < 12) {
    console.log("Good morning! 🌅");
} else if (hour >= 12 && hour < 17) {
    console.log("Good afternoon! ☀️");    // runs: 14 is between 12 and 17
} else if (hour >= 17 && hour < 21) {
    console.log("Good evening! 🌆");
} else {
    console.log("Good night! 🌙");
}

console.log("");

// Example 3: Traffic light action
let lightColor = "yellow";

console.log("Example 3: Traffic Light");
console.log("Light is:", lightColor);

if (lightColor === "red") {
    console.log("STOP! 🛑");
} else if (lightColor === "yellow") {
    console.log("SLOW DOWN — prepare to stop. ⚠️");  // this runs
} else if (lightColor === "green") {
    console.log("GO! 🟢");
} else {
    console.log("Invalid color — treat as stop.");
}

console.log("");

// Example 4: Number classification
let number = 0;

console.log("Example 4: Number Classification");
console.log("Number:", number);

if (number > 0) {
    console.log(number, "is POSITIVE.");
} else if (number < 0) {
    console.log(number, "is NEGATIVE.");
} else {
    console.log(number, "is ZERO.");
}

console.log("");

// Example 5: Admission eligibility
let age = 16;
let hasParentConsent = true;

console.log("Example 5: Admission Eligibility");
console.log("Age:", age, "| Parent consent:", hasParentConsent);

if (age >= 18) {
    console.log("Admitted — you are an adult.");
} else if (age >= 16 && hasParentConsent) {
    console.log("Admitted — with parental consent. ✅");  // this runs
} else if (age >= 16 && !hasParentConsent) {
    console.log("Need parent consent to admit.");
} else {
    console.log("Too young — cannot admit.");
}

console.log("");

// Example 6: BMI Category (range-based)
let weight = 70;  // kg
let height = 1.75;  // meters
let bmi = weight / (height * height);
console.log("Example 6: BMI Category");
console.log("Weight:", weight + "kg, Height:", height + "m");
console.log("BMI:", bmi.toFixed(1));

if (bmi < 18.5) {
    console.log("Category: Underweight");
} else if (bmi >= 18.5 && bmi < 25) {
    console.log("Category: Normal weight ✅");  // likely runs
} else if (bmi >= 25 && bmi < 30) {
    console.log("Category: Overweight");
} else {
    console.log("Category: Obese");
}

console.log("");

// Example 7: Ticket pricing
let visitorAge = 65;
let price;

console.log("Example 7: Ticket Pricing");

if (visitorAge < 5) {
    price = 0;
    console.log("Free entry for toddlers.");
} else if (visitorAge <= 17) {
    price = 10;
    console.log("Child ticket: $" + price);
} else if (visitorAge <= 60) {
    price = 20;
    console.log("Adult ticket: $" + price);
} else {
    price = 12;
    console.log("Senior ticket: $" + price);  // runs: 65 > 60
}

// =============================================
// SUMMARY
// - Conditions checked top to bottom
// - Stops at the FIRST true condition (rest are skipped)
// - Order matters — put most specific conditions first
// - else block is optional (catches anything not matched)
// =============================================
