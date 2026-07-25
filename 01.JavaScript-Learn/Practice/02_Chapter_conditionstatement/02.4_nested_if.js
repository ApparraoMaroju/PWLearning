// =============================================
// Program: NESTED if STATEMENTS
// =============================================
// A nested if is an if statement INSIDE another if statement.
// Useful when you need to check a sub-condition only after
// the outer condition is true.
// =============================================

// Example 1: Login system (username → password)
let username = "admin";
let password = "secret123";

console.log("Example 1: Login System");
console.log("Username:", username);

if (username === "admin") {
    console.log("Username found. Checking password...");

    // Nested if — runs ONLY if outer condition is true
    if (password === "secret123") {
        console.log("Password correct! Login successful. 🔓");
    } else {
        console.log("Wrong password. 🔒");
    }
} else {
    console.log("Unknown user.");
}

console.log("");

// Example 2: Driving eligibility (age → license)
let age = 25;
let hasLicense = true;

console.log("Example 2: Can you rent a car?");
console.log("Age:", age, "| Has license:", hasLicense);

if (age >= 18) {
    console.log("You are old enough to drive.");

    if (hasLicense) {
        console.log("You can rent a car. 🚗");  // this runs
    } else {
        console.log("Get a driver's license first.");
    }
} else {
    console.log("Too young to drive.");
}

console.log("");

// Example 3: Online shopping discount
let isMember = true;
let purchaseAmount = 200;
let hasCoupon = false;

console.log("Example 3: Discount Calculator");

if (isMember) {
    console.log("Member discount applied: 10% off");

    if (purchaseAmount >= 100) {
        console.log("Additional bulk discount: $5 off");

        if (hasCoupon) {
            console.log("Coupon applied: extra $10 off! 🎉");
        } else {
            console.log("No coupon — that's fine.");
        }

        console.log("Total discount: 10% + $5");
    } else {
        console.log("Spend $100+ for bulk discount.");
    }
} else {
    console.log("Not a member — no discounts available.");
}

console.log("");

// Example 4: Exam results with nested conditions
let examScore = 78;
let hasSubmittedProject = true;

console.log("Example 4: Exam Result Analysis");
console.log("Score:", examScore, "| Project submitted:", hasSubmittedProject);

if (examScore >= 40) {
    console.log("You passed the exam! ✅");

    if (hasSubmittedProject) {
        console.log("Project submitted. ✅");

        if (examScore >= 75) {
            console.log("Excellent! You qualify for the advanced course. 🎓");
        } else if (examScore >= 60) {
            console.log("Good score — you qualify for the standard course.");
        } else {
            console.log("You passed — enrolled in the foundational course.");
        }
    } else {
        console.log("You need to submit the project to pass the course.");
    }
} else {
    console.log("You failed the exam. Better luck next time. ❌");
}

console.log("");

// Example 5: Restaurant order system
let orderType = "veg";
let hasAllergy = true;

console.log("Example 5: Restaurant Order System");

if (orderType === "veg") {
    console.log("Preparing vegetarian meal...");

    if (hasAllergy) {
        console.log("Allergy alert: checking ingredients...");
        console.log("✓ Using nut-free oil");
        console.log("✓ No dairy products");
        console.log("✓ Cross-contamination check done");
        console.log("Meal is safe to serve. ✅");
    } else {
        console.log("No allergies on record. Serving regular veg meal.");
    }
} else {
    console.log("Preparing non-veg meal...");
}

console.log("");

// Example 6: Nested else if (deep nesting)
let x = 10;
let y = 20;

console.log("Example 6: Deep Comparison of Two Numbers");

if (x > y) {
    console.log(x, "is greater than", y);
    if (x % y === 0) {
        console.log(x, "is a multiple of", y);
    }
} else if (x < y) {
    console.log(x, "is less than", y);
    if (y % x === 0) {
        console.log(y, "is a multiple of", x);  // 20 % 10 === 0 → true
    }
} else {
    console.log(x, "and", y, "are equal");
}

// =============================================
// SUMMARY
// - Nested if = if inside another if
// - Inner conditions are checked ONLY if outer condition is true
// - Can nest multiple levels deep
// - Each level adds more specific filtering
// - Keep nesting to 3-4 levels max for readability
// =============================================
