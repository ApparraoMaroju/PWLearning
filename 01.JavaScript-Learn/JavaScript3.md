# JavaScript3.md — Advanced JavaScript Guide for Automation Testers

> **Version 3.0** — the next step up from `JavaScript2.md`. This guide keeps the
> same beginner-friendly style but goes **deeper**: it explains the "why" behind
> JavaScript's behavior, covers the concepts every intermediate tester gets asked
> about in interviews, and fills every gap left by the previous version.
>
> **What's new in v3 (vs JavaScript2.md):** Hoisting, TDZ (Temporal Dead Zone),
> type coercion, shallow vs deep copy, getters/setters, RegExp (regular
> expressions), `this` binding, `Symbol`/`BigInt`, strict mode, error types,
> `Array.from`/`flat`/`flatMap` details, `for...of` vs `for...in` pitfalls, the
> Event Loop, and more tester-relevant patterns.

---

## 0. How This Guide Relates to JavaScript2.md

| Topic | JavaScript2.md | JavaScript3.md |
|-------|----------------|----------------|
| Variables, operators, conditions, loops | ✅ Covered | ✅ Quick recap + deeper "why" |
| Hoisting | ❌ Missing | ✅ **Chapter 2** |
| TDZ (Temporal Dead Zone) | ❌ Missing | ✅ **Chapter 2** |
| Type coercion | Mentioned in passing | ✅ **Chapter 3** |
| Shallow vs deep copy | ❌ Missing | ✅ **Chapter 9** |
| Getters / setters | ❌ Missing | ✅ **Chapter 8** |
| RegExp | ❌ Missing | ✅ **Chapter 10** |
| `this` binding | ❌ Missing | ✅ **Chapter 8** |
| Symbol / BigInt | ❌ Missing | ✅ **Chapter 12** |
| Strict mode | ❌ Missing | ✅ **Chapter 4** |
| Error types | ❌ Missing | ✅ **Chapter 13** |
| Event Loop | ❌ Missing | ✅ **Chapter 14** |
| `Array.from` / `flat` / `flatMap` | ❌ Missing | ✅ **Chapter 7** |
| `for...of` vs `for...in` | ❌ Missing | ✅ **Chapter 5** |
| `instanceof` / `in` / logical assignment | ❌ Missing | ✅ **Chapter 15** |
| `call` / `apply` / `bind`, `Object.assign`, labeled loops, `arguments` | ❌ Missing | ✅ **Chapter 15** |

---

## 1. Quick Recap of the Essentials (from JavaScript2.md)

**Variables:** `const` by default, `let` when you must reassign, never `var`.
**Types:** string, number, boolean, array, object, null, undefined, function.
**Operators:** always `===`/`!==` (never `==`/`!=`), `&&`/`||`/`!`/`??`.
**Conditions:** `if/else if/else`, `switch`, ternary, truthy/falsy (6 falsy: `false`, `0`, `""`, `null`, `undefined`, `NaN`).
**Loops:** `for`, `while`, `do...while`, `for...of` (values), `for...in` (keys), `break`/`continue`.
**Arrays:** `map`, `filter`, `reduce`, `forEach`, `find`, `some`, `every`, `includes`, `indexOf`, `slice`, `splice`, `sort`, spread `...`.
**Functions:** declarations, expressions, arrows, defaults, rest, closures, IIFE, callbacks, recursion.
**Objects:** dot/bracket access, nesting, methods, `Object.keys/values/entries`, destructuring, spread.
**Async:** Promises, `async/await`, `Promise.all/allSettled/race`, `try/catch/finally`.
**JSON:** `JSON.parse`, `JSON.stringify`.
**Classes & modules:** Page Object pattern, `export`/`import`.

> If any of these are fuzzy, read JavaScript2.md first — this guide builds on it.

---

## 2. Hoisting & the Temporal Dead Zone (TDZ) ⭐ NEW

> **Why testers must know this:** hoisting explains *why* some code works even
> when it looks "out of order," and TDZ explains *why* other code throws a
> confusing `ReferenceError`. You'll hit both when debugging test helper files.

### 2.1 What is hoisting?

**Plain-English:** JavaScript **reads all declarations first, before running any
line of code**. So a variable or function *declared later* in the file is already
"known" at the top. It's like a teacher reading the whole class roster before
calling any student — every name is "known" before the roll call starts.

```js
console.log(sayHello("Ali"));   // ✅ works! "Hello, Ali"

function sayHello(name) {       // function declaration — hoisted fully
    return "Hello, " + name;
}
```

### 2.2 Function declarations hoist — function expressions do NOT

```js
// ✅ Function declaration — fully hoisted (works before definition)
console.log(add(2, 3));   // 5
function add(a, b) { return a + b; }

// ❌ Function expression — NOT hoisted (variable is hoisted, value is not)
console.log(double(4));   // TypeError: double is not a function
const double = function (n) { return n * 2; };
```

**The 3 rules of hoisting:**

| What | Hoisted? | Result |
|------|----------|--------|
| `function` declaration | ✅ Fully (value too) | Callable anywhere in scope |
| `var` declaration | ✅ Name only, value = `undefined` | `undefined` until assigned |
| `let`/`const` declaration | ✅ Name only, but **TDZ** | `ReferenceError` until initialized |

### 2.3 `var` hoisting — why `var` is dangerous

```js
console.log(x);      // undefined  (NOT an error — this is the trap!)
var x = 10;
```
`var` hoists the *name* but not the value, so you get `undefined` instead of an
error — which can silently hide bugs. **This is why testers avoid `var`.**

### 2.4 The Temporal Dead Zone (TDZ) — the real reason to use `let`/`const`

**Plain-English:** the **TDZ** is the period between "JavaScript knows this
variable exists" and "this variable has been given a value." Accessing a
`let`/`const` variable during that period throws a `ReferenceError`.

```js
console.log(count);   // ❌ ReferenceError: Cannot access 'count' before initialization
let count = 5;        // the TDZ ends here
```

```js
// TDZ is scope-based, not just "before the line":
{
    console.log(blockVar);   // ❌ ReferenceError — TDZ!
    let blockVar = "hello";
}
```

**Why this is GOOD for you:** the TDZ turns "silent `undefined` bugs" (with
`var`) into **loud, clear errors**. It catches mistakes early — exactly what you
want in test code.

**The mental model:**
- `var x` → hoisted to `undefined` → silent bugs 🐛
- `let x` / `const x` → hoisted but in TDZ → loud errors 🔔
- `function f(){}` → hoisted with its body → works everywhere ✅

### 2.5 Hoisting with `const` — it's not just about reassignment

```js
console.log(PI);   // ❌ ReferenceError (TDZ)
const PI = 3.14;
```

### 2.6 Tester-friendly summary

```js
// ❌ This fails — greet is a const, still in TDZ when called
// console.log(greet("A"));
// const greet = (n) => "Hi " + n;

// ✅ This works — function declaration hoists
// console.log(greet("A"));
// function greet(n) { return "Hi " + n; }
```

**✏️ Try It Yourself:** uncomment each pair above in Node and watch the errors.

---

## 3. Type Coercion — JavaScript's Hidden Type Changing ⭐ NEW

**Plain-English:** JavaScript often **silently converts types** to make an
operation "work." This is convenient sometimes and a disaster other times.

### 3.1 Why `==` is dangerous (and `===` is safe)

```js
console.log(5 == "5");      // true  ⚠️ "5" converted to number
console.log(5 === "5");     // false ✅ safe — types must match too
console.log(0 == false);    // true  ⚠️ false → 0
console.log(0 === false);   // false ✅
console.log(null == undefined);  // true  ⚠️ special case!
console.log(null === undefined); // false ✅
```

**The rule that saves you:** **never use `==` or `!=` in tests.** Only `===`
and `!==`. Every serious linter flags `==` for a reason.

### 3.2 The `+` operator does double duty

```js
console.log("5" + 5);      // "55"  (string concatenation wins)
console.log(5 + "5");      // "55"  (same — string wins)
console.log("5" - 2);      // 3     (subtraction forces numbers)
console.log("5" * "2");    // 10    (multiplication forces numbers)
```

**The trap:** `+` with a string concatenates, but `-`/`*`/`/` convert to
numbers. So `"5" + 2` is `"52"` but `"5" - 2` is `3`.

### 3.3 Truthy/falsy coercion in conditions

```js
if ("hello") {}       // truthy → runs
if (0) {}             // falsy → skips
if ([]) {}            // ⚠️ EMPTY array is truthy!
if ({}) {}            // ⚠️ EMPTY object is truthy!
```

### 3.4 Implicit coercion in `if` — the tester's guard

```js
let result = apiCall();          // might be null on failure
if (result) {                    // works — null is falsy
    // handle success
}
```

### 3.5 Explicit coercion — do it on purpose

| Goal | Do this |
|------|---------|
| Text → number | `Number("42")`, `parseInt("42px", 10)`, `parseFloat("4.2")` |
| Number → text | `String(42)`, `(42).toString()` |
| Anything → boolean | `Boolean(x)`, `!!x` |

```js
console.log(Number("42"));       // 42
console.log(Number("42px"));     // NaN  ⚠️ parseInt would handle this
console.log(parseInt("42px", 10)); // 42 ✅
console.log(Boolean(""));        // false
console.log(!!"hello");          // true  (!! = "force to boolean")
```

**🔧 In Automation Testing:**
```js
// Text from a price element: "$1,299.99" → number for comparison
let priceText = await page.textContent(".price");   // "$1,299.99"
let price = parseFloat(priceText.replace(/[$,]/g, ""));  // 1299.99
expect(price).toBeGreaterThan(1000);
```

---

## 4. Strict Mode — JavaScript's "Behave Properly" Mode ⭐ NEW

**Plain-English:** strict mode **removes silent errors** and makes JavaScript
fail loudly instead. It's the difference between a careless assistant and one
who double-checks everything.

```js
"use strict";    // put this at the top of a file (or top of a function)

// Without strict mode, these are silent:
undeclaredVar = 10;              // creates a global — silently!

// With strict mode:
// undeclaredVar = 10;           // ❌ ReferenceError: undeclaredVar is not defined
```

**What strict mode catches:**
- Assigning to undeclared variables
- Assigning to read-only properties
- Duplicate parameter names
- Using `with`
- `this` being `undefined` in plain functions (instead of the global object)

**🔧 In Automation Testing:** modern tools (Playwright, Cypress, WebdriverIO,
ES modules) are **strict by default**. But if you write plain `.js` test helpers
or Node scripts, add `"use strict";` at the top — it turns silent bugs into
errors you can actually fix.

---

## 5. `for...of` vs `for...in` — The Difference That Matters ⭐ NEW

Both loops iterate, but they iterate **completely different things**:

| Loop | Iterates over | Best for |
|------|---------------|----------|
| `for...of` | **Values** of an iterable | Arrays, strings, Maps, Sets |
| `for...in` | **Keys** (property names) | Objects |

```js
let colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log(color);       // red, green, blue  (VALUES) ✅
}

for (let index in colors) {
    console.log(index);       // 0, 1, 2  (KEYS — as STRINGS!)
}
```

**The classic tester bug:**
```js
let cart = ["laptop", "mouse"];
for (let item in cart) {
    console.log(item);        // 0, 1  — the indices, not the items!
}
```
You wanted `for...of` for values, but used `for...in`. **Rule: `for...in` is for
objects, `for...of` is for arrays.**

**String gotcha — `for...of` gives characters, `for...in` gives positions:**
```js
for (let ch of "abc") console.log(ch);   // a, b, c
for (let i in "abc") console.log(i);     // 0, 1, 2
```

---

## 6. Arrays — The Deeper Methods Testers Actually Use

### 6.1 `Array.from()` — create arrays from anything

```js
Array.from("hello");                    // ['h','e','l','l','o']
Array.from(new Set([1,1,2,3]));         // [1,2,3]
Array.from({length: 5}, (_, i) => i);   // [0,1,2,3,4]  — custom sequence
```

**🔧 In Automation Testing:** generate test data:
```js
let emails = Array.from({ length: 5 }, (_, i) => `user${i + 1}@test.com`);
// ['user1@test.com', ..., 'user5@test.com']
```

### 6.2 `flat()` and `flatMap()` — flatten nested arrays

```js
let nested = [[1, 2], [3, [4, 5]]];
nested.flat();          // [1,2,3,[4,5]]  — one level by default
nested.flat(2);         // [1,2,3,4,5]    — two levels
nested.flat(Infinity);  // [1,2,3,4,5]    — all levels

["a b", "c d"].flatMap(s => s.split(" "));  // ['a','b','c','d'] (map + flat)
```

### 6.3 `fill()` — pre-fill arrays

```js
new Array(3).fill(0);        // [0, 0, 0]
[1, 2, 3, 4].fill(9, 1, 3);  // [1, 9, 9, 4]
```

### 6.4 Common array task — removing items safely

```js
let arr = [10, 20, 30, 40];
let removed = arr.splice(1, 2);   // removes [20, 30], arr is [10, 40]
let sliced = arr.slice(0, 1);     // copies [10] — original untouched
```

---

## 7. Shallow vs Deep Copy — The Bug That Wastes Hours ⭐ NEW

**Plain-English:** a **shallow copy** copies the *outer* container but shares the
*nested* items. A **deep copy** copies everything, all the way down. If you
shallow-copy an object with a nested object, changing the nested object changes
**both** copies.

```js
let original = { name: "Ali", address: { city: "Hyderabad" } };

// Shallow copy — address is SHARED
let shallow = { ...original };
shallow.address.city = "Mumbai";
console.log(original.address.city);   // "Mumbai"  ⚠️ BOTH changed!

// Deep copy — everything independent
let deep = JSON.parse(JSON.stringify(original));
deep.address.city = "Delhi";
console.log(original.address.city);   // "Hyderabad" ✅ safe
```

### How to make a deep copy

| Method | Works for | Caveat |
|--------|-----------|--------|
| `JSON.parse(JSON.stringify(x))` | Plain objects/arrays | Loses functions, `undefined`, `Date` becomes string |
| `structuredClone(x)` | Most things (Dates, Maps, Sets) | Modern browsers/Node 17+ |
| `_.cloneDeep(x)` (Lodash) | Everything | Adds a dependency |

```js
let deepCopy = structuredClone(original);   // ✅ modern, safe
```

**🔧 In Automation Testing:** always deep-copy **fixture/test data** before
mutating it in a test — otherwise one test's changes leak into the next:
```js
let baseUser = { name: "Ali", prefs: { theme: "dark" } };
let userA = structuredClone(baseUser);   // independent copy
userA.prefs.theme = "light";             // doesn't affect baseUser
```

---

## 8. Objects, `this`, and Prototypes — The Tricky Parts

### 8.1 Getter and setter — controlled access ⭐ NEW

**Plain-English:** a **getter** runs code when you *read* a property; a
**setter** runs code when you *assign* it. They let you validate or transform
values invisibly.

```js
let account = {
    _balance: 100,                       // private by convention (_)

    get balance() {                      // runs on account.balance
        return "$" + this._balance;
    },

    set balance(value) {                 // runs on account.balance = ...
        if (value < 0) throw new Error("Balance can't be negative");
        this._balance = value;
    }
};

console.log(account.balance);   // "$100"  (getter)
account.balance = 250;          // setter runs
account.balance = -5;           // ❌ throws — validation worked
```

**🔧 In Automation Testing:** use getters for page objects to create readable,
safe property access:
```js
class CheckoutPage {
    get totalPrice() {
        return page.locator(".total").textContent();
    }
    get errorMessage() {
        return page.locator(".error").textContent();
    }
}
```

### 8.2 `this` — what it points to depends on HOW you call ⭐ NEW

**Plain-English:** `this` is the "current owner" of the function. The *way* you
call a function changes what `this` is.

| Call style | What `this` is |
|------------|----------------|
| `obj.method()` | `obj` |
| `someFunction()` | global object (or `undefined` in strict mode) |
| Arrow function | **inherits** `this` from where it was defined |
| `fn.call(x)` / `fn.apply(x)` | whatever you pass as `x` |

```js
let user = {
    name: "Ali",
    greet() { console.log("Hi, " + this.name); }
};
user.greet();              // Hi, Ali   (this = user)

let detached = user.greet;
detached();                // Hi, undefined  ⚠️ this = global, no .name!
```

**The arrow-function difference (the classic fix):**
```js
let counter = {
    count: 0,
    start() {
        setInterval(function () {
            this.count++;    // ❌ this is NOT counter (it's global)
        }, 1000);

        setInterval(() => {
            this.count++;    // ✅ arrow inherits this from start() → counter
        }, 1000);
    }
};
```

### 8.3 Prototypes — inheritance's engine ⭐ NEW

**Plain-English:** every object has a hidden **prototype** — a "parent" it can
borrow methods from. `Array.prototype` gives every array its methods; you never
see it, but it's why `[1,2].map(...)` works.

```js
console.log([].map);                 // function — inherited from Array.prototype
console.log(Object.getPrototypeOf([]) === Array.prototype);  // true

// The chain: myArray → Array.prototype → Object.prototype → null
```

**Why testers care:** it explains *where* methods come from, and why you can add
a method to every object of a type (though in modern JS you rarely should).

### 8.4 Class methods & `this` in page objects

```js
class LoginPage {
    constructor(page) { this.page = page; }    // this = the instance
    async login(u, p) {
        await this.page.fill("#username", u);  // this.page = the instance's page
    }
}
```

---

## 9. RegExp (Regular Expressions) — Pattern Matching for Testers ⭐ NEW

**Plain-English:** a **regex** is a pattern that searches, matches, and extracts
text. Like a "wildcard search" on steroids.

### 9.1 The 3 ways to create one

```js
let re1 = /pattern/flags;         // literal (preferred)
let re2 = new RegExp("pattern");  // constructor (for dynamic patterns)
```

### 9.2 The core syntax

| Pattern | Meaning | Matches |
|---------|---------|---------|
| `/abc/` | literal text | "abc" |
| `/[0-9]/` | any digit | "5" |
| `/\d/` | any digit (shorthand) | "5" |
| `/\w/` | any letter/digit/underscore | "a", "9", "_" |
| `/\s/` | any whitespace | " ", tab, newline |
| `/^x/` | starts with x | "x-ray" |
| `/x$/` | ends with x | "fax" |
| `/a|b/` | a OR b | "a", "b" |
| `/a+/` | one or more a's | "a", "aa", "aaa" |
| `/a*/` | zero or more a's | "", "a", "aa" |
| `/a?/` | zero or one a | "", "a" |
| `/{2}/` | exactly 2 | "aa" |
| `/{2,}/` | 2 or more | "aa", "aaa" |
| `/./` | any single char | any char |
| `/(abc)/` | capture group | captures "abc" |

**Flags:** `g` (all matches, not just first), `i` (case-insensitive), `m`
(multi-line).

### 9.3 Methods that use regex

| Method | What it does |
|--------|--------------|
| `str.match(re)` | Find matches |
| `str.matchAll(re)` | Find all matches (with groups) |
| `str.replace(re, x)` | Replace matches |
| `str.search(re)` | Position of first match (or -1) |
| `str.split(re)` | Split on matches |
| `re.test(str)` | Does it match? → boolean |
| `re.exec(str)` | Advanced find |

### 9.4 Tester examples — the 5 you'll use daily

```js
// 1. Email looks right?
let email = "tester@qa.com";
console.log(/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(email));   // true

// 2. Extract a number from text
let text = "Order #1234 confirmed";
console.log(text.match(/\d+/));            // ["1234"]

// 3. Extract a price (capture group)
let priceText = "Total: $1,299.99";
let match = priceText.match(/([\d,.]+)/);  // ["1,299.99", "1,299.99"]
console.log(match[1]);                     // "1,299.99"

// 4. Replace all non-digits
console.log("Order #1234".replace(/\D/g, ""));  // "1234"

// 5. Phone number format
let phone = "123-456-7890";
console.log(/^\d{3}-\d{3}-\d{4}$/.test(phone));  // true
```

**🔧 In Automation Testing:** URL matching in Playwright/Cypress uses regex all
the time:
```js
await expect(page).toHaveURL(/\/checkout\/success$/);
await page.waitForResponse((res) => /\/api\/orders\/\d+/.test(res.url()));
```

**✏️ Try It Yourself:** write a regex that matches a 5-digit ZIP code, then test
it against `"98001"`, `"9800"`, and `"98A01"`.

---

## 10. Numbers — NaN, Infinity, and Precision Traps ⭐ NEW

### 10.1 NaN — "Not a Number" (and the only value not equal to itself)

```js
console.log(NaN === NaN);        // false ⚠️ the ONLY value like this!
console.log(Number.isNaN(NaN));  // true  ✅ use this instead
console.log(isNaN("42"));        // false — "42" converts to 42
console.log(isNaN("hello"));     // true  — cannot convert
```

### 10.2 Infinity and -Infinity

```js
console.log(1 / 0);          // Infinity
console.log(-1 / 0);         // -Infinity
console.log(Number.MAX_VALUE);   // 1.7976931348623157e+308
```

### 10.3 The 0.1 + 0.2 trap (binary floating point)

```js
console.log(0.1 + 0.2);              // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);      // false ⚠️⚠️⚠️

// Safe comparisons for money:
let a = 0.1 + 0.2;
console.log(Math.abs(a - 0.3) < 0.0001);  // true (tolerance check)
console.log((0.1 + 0.2).toFixed(2));      // "0.30"
```

**🔧 In Automation Testing:** price/quantity assertions must round or use
tolerance:
```js
let itemPrice = 19.99;
let qty = 3;
let expected = 59.97;
let actual = +(itemPrice * qty).toFixed(2);
expect(actual).toBe(expected);
```

### 10.4 BigInt — numbers too big for `number` ⭐ NEW

`number` tops out around 9 quadrillion. **BigInt** handles integers of any size:

```js
let big = 123456789012345678901234567890n;   // n suffix = BigInt
console.log(big + 1n);                       // 123456789012345678901234567891n
console.log(typeof big);                     // "bigint"
```

**Caveat:** BigInt and `number` can't mix in operations without conversion.

---

## 11. Symbols — Unique Keys (Advanced but Interview-Favorite) ⭐ NEW

**Plain-English:** a **Symbol** is a unique, unguessable value — no two Symbols
are ever equal, even with the same description.

```js
let key1 = Symbol("id");
let key2 = Symbol("id");
console.log(key1 === key2);    // false — always unique

let user = {
    name: "Ali",
    [key1]: "secret-value"     // Symbol as a property key
};
console.log(user[key1]);       // "secret-value"
console.log(user[key2]);       // undefined — different key!
```

**Why they exist:** they prevent name collisions — library A and library B can
both use `Symbol("internal")` without overwriting each other.

---

## 12. Error Types — Understanding What Actually Failed ⭐ NEW

**Plain-English:** JavaScript has several built-in error types. The type tells
you *what kind of thing* went wrong.

| Error | What it means | Common cause |
|-------|---------------|--------------|
| `SyntaxError` | Code is malformed | Missing `)`, `{`, or `}` |
| `ReferenceError` | Variable doesn't exist | Typo, TDZ, undeclared var |
| `TypeError` | Wrong kind of value | Calling a non-function, reading prop of `undefined` |
| `RangeError` | Number out of allowed range | `Array(1e20)` |
| `URIError` | Bad URL encoding | `decodeURIComponent("%")` |

```js
try {
    somethingThatDoesNotExist();   // ReferenceError
} catch (error) {
    console.log(error.name);       // "ReferenceError"
    console.log(error.message);    // "somethingThatDoesNotExist is not defined"
    console.log(error.stack);      // where it happened (debugging gold)
}
```

**🔧 In Automation Testing:** knowing error types speeds up debugging faster
than anything:
- `TypeError: x is not a function` → you called a non-function (check imports!)
- `ReferenceError: x is not defined` → typo or missing variable
- `SyntaxError` → missing bracket (check your last edit)

---

## 13. The Event Loop — How Async Actually Works ⭐ NEW

**Plain-English:** JavaScript is **single-threaded** — one thing at a time. But
it *appears* to do many things at once. The secret is the **event loop**: a
queue of "waiting tasks" that runs when the current task finishes.

```js
console.log("1");                       // runs first

setTimeout(() => console.log("2"), 0);  // "0ms" — still queued!

Promise.resolve().then(() => console.log("3"));  // microtask — before timeout

console.log("4");                       // runs second
```

**Output order: 1, 4, 3, 2** — this is NOT intuitive. Here's why:

| Category | When it runs |
|----------|--------------|
| **Synchronous code** | Immediately, in order |
| **Microtasks** (Promises, `.then`, `queueMicrotask`) | After sync code, **before** any timers |
| **Macrotasks** (`setTimeout`, `setInterval`, I/O) | After microtasks are drained |

### 13.1 The 3-step mental model

1. **Run** all synchronous code (main script).
2. **Drain** the microtask queue (all pending `.then`/`await` continuations).
3. **Run** the next macrotask (a timer or I/O callback), then go back to step 2.

### 13.2 Why this matters for testers — the "wait" problem

When you `await` something in Playwright/Cypress, the framework uses this
machinery to know when the page is ready:

```js
await page.click("#login");          // sends the click, returns control
await page.waitForSelector(".dashboard");  // event loop keeps running page events
```

**Never do this:**
```js
// ❌ setTimeout as "wait" — unreliable, flaky, slow
await page.waitForTimeout(5000);     // 5s fixed wait — bad practice!

// ✅ Wait for the CONDITION, not the clock
await expect(page.locator(".dashboard")).toBeVisible();
```

**🔧 In Automation Testing:** explicit waits and auto-waiting (Cypress's retry
behavior, Playwright's auto-wait) are built on this event-loop understanding.
Prefer conditions over timeouts, every single time.

---

## 14. Tester-Focused Patterns & Good Practices ⭐ NEW

### 14.1 Fixtures — external test data (deep-copied!)

```js
// test-data/users.json
{
  "admin": { "username": "admin@test.com", "password": "Passw0rd!" },
  "viewer": { "username": "viewer@test.com", "password": "View0nly!" }
}

// test file — ALWAYS deep-copy before mutating
let users = structuredClone(require("./test-data/users.json"));
```

### 14.2 Hooks — setup/teardown per test

| Hook | Runs |
|------|------|
| `beforeAll` / `before` | Once, before all tests |
| `beforeEach` / `beforeEach` | Before **each** test |
| `afterEach` / `after` | After **each** test |
| `afterAll` / `after` | Once, after all tests |

```js
beforeEach(() => {
    cy.visit("/login");           // fresh state per test — no test pollution
});
afterEach(() => {
    cy.screenshot();              // evidence on every test
});
```

### 14.3 Retry patterns (flaky-test rescue)

```js
async function retry(fn, attempts = 3, delayMs = 1000) {
    for (let i = 1; i <= attempts; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === attempts) throw error;
            await new Promise((r) => setTimeout(r, delayMs));
        }
    }
}
```

### 14.4 Avoid these flaky-test killers

| Anti-pattern | Fix |
|--------------|-----|
| Fixed `waitForTimeout(5000)` | Wait for condition / element |
| Asserting on `==` | Use `===` / framework matchers |
| Mutating shared fixtures | `structuredClone` per test |
| `for...in` on arrays | Use `for...of` |
| `setTimeout` as sync wait | Use the framework's wait |
| Testing implementation details | Test user-visible behavior |

---

## 15. More Operators & Tools You'll Meet in Real Test Code ⭐ NEW

A few smaller but very real features that show up in production test suites and
interview questions.

### 15.1 `instanceof` and `in` — type & property checks

```js
// instanceof — "is this object made from this class/constructor?"
console.log([] instanceof Array);       // true
console.log([] instanceof Object);      // true (Array → Object chain)
console.log(new Date() instanceof Date); // true

// in — "does this property exist on this object?"
let user = { name: "Ali" };
console.log("name" in user);      // true
console.log("age" in user);       // false
```

> **Why testers care:** `instanceof` confirms what *kind* of thing an API
> response or error is; `in` checks for optional fields before you read them.

### 15.2 Logical assignment operators (`&&=`, `||=`, `??=`)

These combine a logical check with an assignment — shorthand for very common
test-code patterns:

```js
let config = { retries: 0 };

config.retries ||= 3;     // assign only if current value is falsy → 3
config.retries ??= 3;     // assign only if null/undefined (0 stays 0)
config.timeout ??= 5000;  // 5000 (was undefined)

let user = { admin: true };
user.admin &&= false;     // assign only if truthy → false
```

| Operator | Assigns when current value is… |
|----------|-------------------------------|
| `x \|\|= v` | falsy |
| `x ??= v` | `null`/`undefined` only |
| `x &&= v` | truthy |

> **The tester favorite:** `retries ??= 3` — "set a default if not already set,
> but never overwrite a deliberate `0`."

### 15.3 `typeof` gotchas — the two traps

```js
console.log(typeof null);          // "object"  ⚠️ a historical bug — null is NOT an object
console.log(typeof []);            // "object"  ⚠️ arrays are objects
console.log(typeof function(){});  // "function"

// ✅ Reliable checks:
console.log(Array.isArray([]));          // true — use this for arrays!
console.log(x === null);                 // use this for null!
```

> **Why testers care:** `typeof [] === "object"` is why `Array.isArray` exists.
> Use `Array.isArray(x)` for arrays and `x === null` for null — always.

### 15.4 `call`, `apply`, `bind` — control `this` explicitly

```js
function greet(greeting, punctuation) {
    return greeting + ", " + this.name + punctuation;
}

let user = { name: "Ali" };

greet.call(user, "Hi", "!");     // "Hi, Ali!"   — args one by one
greet.apply(user, ["Hi", "!"]);  // "Hi, Ali!"   — args as an array
let boundGreet = greet.bind(user, "Hello");  // bind creates a new function
boundGreet("!");                 // "Hello, Ali!"  — this is fixed to user
```

| Method | Calls now? | Arguments style | Returns |
|--------|-----------|-----------------|---------|
| `call` | ✅ | one by one | result |
| `apply` | ✅ | as array | result |
| `bind` | ❌ (returns new fn) | any | new function |

**🔧 In Automation Testing:** `bind` is how you fix the `this` problem when
passing a method as a callback — a classic page-object bug:
```js
class CartPage {
    constructor(page) { this.page = page; this.rows = []; }
    async collectRows() { this.rows = await this.page.locator("tr").all(); }
}
// If you pass `cart.collectRows` as a callback, `this` gets lost.
// Fix: `cart.collectRows.bind(cart)` — or just use an arrow function:
// () => cart.collectRows()
```

### 15.5 `Object.assign` — merge (the older sibling of spread)

```js
let defaults = { timeout: 5000, retries: 2 };
let overrides = { retries: 5 };
let merged = Object.assign({}, defaults, overrides);
// { timeout: 5000, retries: 5 }  — later objects win

// Spread does the same, more readably:
let merged2 = { ...defaults, ...overrides };
```

### 15.6 Labeled & nested loops

**Nested loops** — a loop inside a loop (great for tables/grids):
```js
let matrix = [[1, 2], [3, 4]];
for (let row of matrix) {
    for (let cell of row) {
        console.log(cell);   // 1, 2, 3, 4
    }
}
```

**Labeled loops** — name a loop so `break`/`continue` can target it from inside
a nested loop:
```js
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i * j === 4) {
            break outerLoop;    // breaks BOTH loops, not just the inner one
        }
    }
}
```

### 15.7 The `arguments` object (older style — know it, don't need it)

Inside a regular function (not arrow), `arguments` holds all passed values:
```js
function logArgs() {
    console.log(arguments.length);   // 3
    console.log(arguments[0]);       // "a"
}
logArgs("a", "b", "c");
```
Modern code uses rest parameters (`...args`) instead — cleaner and works in
arrows.

### 15.8 `join`/`toString` on arrays

```js
let parts = ["TRANS", "2025", "0042"];
parts.join("-");            // "TRANS-2025-0042"  ✅ readable
parts.toString();           // "TRANS,2025,0042"  (comma-joined)
```

**🔧 In Automation Testing:** build expected filenames, order numbers, or
locator-friendly strings from arrays.

---

## 16. Practice Exercises (Do These!)

1. **Hoisting/TDZ:** write a script that (a) calls a function declaration before
   its definition (works), (b) reads a `let` before its declaration (throws
   ReferenceError), (c) reads a `var` before its assignment (prints undefined).
2. **Coercion:** predict and then verify: `"5" + 2`, `"5" - 2`, `"5" * "2"`,
   `"5" == 5`, `"5" === 5`.
3. **Strict mode:** create a file, assign to an undeclared variable with and
   without `"use strict"`, and observe the difference.
4. **`for...of` vs `for...in`:** loop over `["a","b","c"]` with both and print
   each — note the difference.
5. **Deep copy:** create a nested object, shallow-copy it with `{...o}`, mutate
   the nested part, and confirm the original changed. Repeat with
   `structuredClone`.
6. **Getters/setters:** build an object with a `set` that rejects negative
   values.
7. **RegExp:** write and test regexes for (a) a 5-digit ZIP, (b) extracting the
   number from `"Total: $42.50"`, (c) an email pattern.
8. **Error types:** deliberately cause a `ReferenceError`, a `TypeError`, and a
   `SyntaxError`, and log `error.name` for each.
9. **Event loop:** predict the output of the 1/4/3/2 example, then run it.

---

## 17. Quick Reference Card — The New Stuff (One Screen)

```js
// HOISTING
function f() {}              // fully hoisted — callable anywhere in scope
var x;                       // hoisted as undefined (silent bug risk)
let x;                       // hoisted but in TDZ — error until initialized

// TDZ
console.log(x);              // ReferenceError if x is let/const below
let x = 1;

// COERCION — always strict
5 === "5";    // false ✅    5 == "5";   // true ⚠️
"5" + 2;      // "52" ⚠️    "5" - 2;    // 3
Number("42");  // 42  String(42);  // "42"  Boolean("");  // false

// STRICT MODE
"use strict";   // top of file — turns silent errors into loud errors

// FOR LOOPS
for (const v of arr) {}     // VALUES — for arrays
for (const k in obj) {}     // KEYS — for objects

// ARRAY DEEP-DIVE
Array.from({length: 5}, (_, i) => i);   // [0,1,2,3,4]
nested.flat(Infinity);                  // fully flatten
arr.fill(0);                            // pre-fill

// COPY
{ ...obj };                 // shallow
JSON.parse(JSON.stringify(o));  // deep (plain data)
structuredClone(o);         // deep (modern, safe)

// GETTERS / SETTERS
get x() { return ...; }   set x(v) { ... }   // object/class members

// THIS
obj.method();       // this = obj
arrowFn();          // this = inherited from definition scope
fn.call(x);         // this = x

// REGEXP
/\d+/                // digits     /\w+/   // word chars
/^...$/              // full match /x|y/   // or
str.match(re);  str.replace(re, x);  re.test(str);  str.split(re);

// NUMBERS
Number.isNaN(x);     // true safe NaN check
Math.abs(a - b) < 0.0001;   // tolerance comparison for decimals

// BIGINT
123456789012345678901234567890n;   // any size integer

// SYMBOL
Symbol("id");        // always unique

// ERROR TYPES
error.name;  // SyntaxError | ReferenceError | TypeError | RangeError

// MORE OPERATORS & TOOLS
x instanceof Array;        // true for arrays
"key" in obj;              // true if property exists
x ||= v;    x ??= v;       // assign if falsy / if null-undefined
x &&= v;                   // assign if truthy
typeof x;                  // "object" for null/arrays ⚠️ — use Array.isArray()
Array.isArray(x);          // ✅ reliable array check
fn.call(thisArg, a, b);    // call with explicit this
fn.apply(thisArg, [a, b]); // call with explicit this + array args
fn.bind(thisArg);          // new function with this fixed
Object.assign({}, a, b);   // merge objects (later wins)
outer: for (...) { ... }   // labeled loop — break outer; from nested

// EVENT LOOP ORDER
// 1. sync code → 2. microtasks (.then/await) → 3. macrotasks (setTimeout)

// TESTER RULES
// - wait for conditions, never fixed timeouts
// - deep-copy fixtures before mutating
// - strict === everywhere
// - for...of for arrays
```

---

## 18. What's Next After JavaScript3.md

| Topic | Why it matters for automation |
|-------|-------------------------------|
| **Cypress / Playwright deep dive** | Apply all of this to real E2E tests |
| **API testing with JS** | `fetch`, axios, request intercepts |
| **XPath & CSS locators** | Find elements reliably |
| **TypeScript** | Typed JavaScript — used by Playwright/Cypress |
| **CI/CD for tests** | Run tests automatically on every commit |
| **Design patterns (POM, Factory)** | Scale your test suite cleanly |

> **Final advice:** Hoisting and TDZ will "click" the moment you actually break
> code and read the error message. Same for the event loop and `this`. Run every
> example. Break it. Read the error. That repetition — not memorization — is
> what builds an automation tester.
