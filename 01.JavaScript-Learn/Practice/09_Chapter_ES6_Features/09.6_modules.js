// =============================================
// Program: MODULES  (ES6)
// =============================================
// ES6 modules split code into files with export/import.
//
// ⚠️ NOTE: To run this as a real module, Node needs
// the .mjs extension (or "type": "module" in package.json).
//
// This file demonstrates the SYNTAX and behavior using
// dynamic import() — which works in regular .js files too.
// =============================================

// Example 1: Export syntax overview (in comments)
console.log("Example 1: Export syntax");
console.log(`
  // math.mjs
  export const PI = 3.14159;
  export function add(a, b) { return a + b; }
  export default class Calculator { ... }

  // Import:
  import { PI, add } from "./math.mjs";
  import Calculator from "./math.mjs";
`);

console.log("");

// Example 2: Dynamic import() — works in .js files
console.log("Example 2: Dynamic import");

// In real projects you'd import your own files:
// const math = await import("./math.mjs");

// Here we import a built-in Node module to demonstrate:
import("node:os").then((os) => {
    console.log("Platform:", os.platform());
    console.log("CPU count:", os.cpus().length);
});

console.log("");

// Example 3: Named vs default exports
console.log("Example 3: Named vs default");

console.log(`
  Named exports (multiple per file):
    export const name = "...";
    export function helper() {}

  Default export (one per file):
    export default function main() {}
    import main from "./file.mjs";

  Mixing:
    import main, { helper } from "./file.mjs";
`);

console.log("");

// Example 4: Renaming imports
console.log("Example 4: Renaming");

console.log(`
  // Rename on import:
  import { add as sum } from "./math.mjs";
  sum(1, 2);   // 3

  // Namespace import — everything under one object:
  import * as math from "./math.mjs";
  math.add(1, 2);
  math.PI;
`);

console.log("");

// Example 5: Real module example (for reference)
console.log("Example 5: Complete example");

console.log(`
  // ---------- math.mjs ----------
  export const PI = 3.14159;

  export function circleArea(r) {
      return PI * r * r;
  }

  export default function greet(name) {
      return "Hello " + name;
  }

  // ---------- app.mjs ----------
  import greet, { PI, circleArea } from "./math.mjs";

  console.log(greet("Alice"));        // "Hello Alice"
  console.log(circleArea(5));         // 78.53975
  console.log(PI);                    // 3.14159
`);

console.log("");

// Example 6: How to run modules
console.log("Example 6: Running modules");

console.log(`
  # Option 1: .mjs extension
  node math.mjs

  # Option 2: package.json with "type": "module"
  {
      "type": "module"
  }

  # Option 3: dynamic import() in any .js file
  const mod = await import("./math.mjs");
`);

// =============================================
// SUMMARY
// - export / import split code across files
// - Named exports: export const/function; import { name }
// - Default export: export default; import name
// - Rename with: import { x as y }
// - Namespace: import * as mod
// - Use .mjs or "type": "module" in Node
// =============================================
