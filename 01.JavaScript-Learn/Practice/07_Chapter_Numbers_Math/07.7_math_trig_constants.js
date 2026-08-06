// =============================================
// Program: MATH CONSTANTS & TRIGONOMETRY
// =============================================
// Math constants:
//   Math.PI, Math.E
// Trig functions (work in RADIANS):
//   Math.sin, Math.cos, Math.tan
//   Math.log, Math.exp, Math.log2, Math.log10
// =============================================

// Example 1: Constants
console.log("Example 1: Math constants");

console.log("Math.PI:", Math.PI);          // 3.141592653589793
console.log("Math.E:", Math.E);            // 2.718281828459045
console.log("Math.SQRT2:", Math.SQRT2);    // 1.4142135623730951

console.log("");

// Example 2: Circle area and circumference
console.log("Example 2: Circle calculations");

let radius = 5;

let area = Math.PI * radius ** 2;
let circumference = 2 * Math.PI * radius;

console.log("Radius:", radius);
console.log("Area:", area.toFixed(2));            // 78.54
console.log("Circumference:", circumference.toFixed(2));  // 31.42

console.log("");

// Example 3: Trig — sin, cos, tan (in radians)
console.log("Example 3: Trig functions");

// 90° in radians = PI/2
console.log("sin(90°):", Math.sin(Math.PI / 2).toFixed(1));  // 1.0
console.log("cos(0°):", Math.cos(0).toFixed(1));             // 1.0
console.log("tan(45°):", Math.tan(Math.PI / 4).toFixed(1));  // 1.0

console.log("");

// Example 4: Converting degrees ↔ radians
console.log("Example 4: Degree conversion");

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

console.log("90° in radians:", toRadians(90).toFixed(4));  // 1.5708
console.log("PI/2 in degrees:", toDegrees(Math.PI / 2).toFixed(0));  // 90

// Practical — sin of 30°:
console.log("sin(30°):", Math.sin(toRadians(30)).toFixed(2));  // 0.50

console.log("");

// Example 5: Math.log — natural logarithm (base e)
console.log("Example 5: Natural log");

console.log("Math.log(Math.E):", Math.log(Math.E));  // 1
console.log("Math.log(1):", Math.log(1));            // 0
console.log("Math.log(10):", Math.log(10).toFixed(4));  // 2.3026

console.log("");

// Example 6: log2 and log10
console.log("Example 6: log2 and log10");

console.log("Math.log2(8):", Math.log2(8));        // 3 (2^3 = 8)
console.log("Math.log10(1000):", Math.log10(1000)); // 3 (10^3 = 1000)

console.log("");

// Example 7: Math.exp — e^x
console.log("Example 7: Math.exp");

console.log("Math.exp(1):", Math.exp(1).toFixed(4));   // 2.7183 (≈ e)
console.log("Math.exp(0):", Math.exp(0));              // 1
console.log("Math.exp(2):", Math.exp(2).toFixed(4));   // 7.3891

console.log("");

// Example 8: Practical — compound interest
console.log("Example 8: Compound interest");

function compoundInterest(principal, rate, years) {
    return principal * Math.pow(1 + rate, years);
}

let result = compoundInterest(1000, 0.05, 10);
console.log("$1000 at 5% for 10 years:", "$" + result.toFixed(2));
// $1628.89

console.log("");

// Example 9: Practical — noise/audio sine wave
console.log("Example 9: Sine wave sample");

for (let i = 0; i <= 360; i += 90) {
    let value = Math.sin(toRadians(i));
    console.log(`sin(${i}°) = ${value.toFixed(2)}`);
}
// sin(0°) = 0.00, sin(90°) = 1.00, sin(180°) = 0.00, sin(270°) = -1.00, sin(360°) = -0.00

// =============================================
// SUMMARY
// - PI and E are the key constants
// - Trig functions use RADIANS — convert degrees with deg * PI/180
// - log = natural log; log2 / log10 for other bases
// - exp(x) = e^x; combine with pow for growth math
// =============================================
