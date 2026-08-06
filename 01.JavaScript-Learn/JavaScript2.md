# JavaScript2.md — Complete JavaScript Guide for Automation Testers

> **Version 2.0** — an upgraded, beginner-friendly companion to `JavaScript.md`.
> This guide assumes **zero prior programming knowledge**. Every topic is explained
> in plain English, with an analogy, a simple example, and the **automation-testing
> reason you need it**.

---

## How to Use This Guide

- **Start at Chapter 1 and go in order.** Each chapter builds on the previous one.
- Every topic shows a **Practice Program** — run it and experiment:
  ```bash
  node "Practice/03_Chapter_Arrays/03.10_array_map.js"
  ```
- Try the **✏️ Try It Yourself** mini-exercises — they are small on purpose.
- The **🔧 In Automation Testing** boxes show where the concept shows up in
  tools like **Cypress**, **Playwright**, and **WebdriverIO**.

> **Golden Rule for Beginners:** You learn JavaScript by *running* code and
> *breaking* it, not by reading. Change a number, remove a bracket, see what happens.

---

## 0. What Is JavaScript and Why Do Automation Testers Need It?

**Plain-English answer:** JavaScript is the language that makes websites *alive* —
menus that open, buttons that react, forms that validate. When you use an
automation tool to test a website, you write instructions in JavaScript that say
*"open this page, click that button, check this text."*

**The three things a tester writes in JavaScript every day:**

| Task | What you're doing |
|------|-------------------|
| **Find an element** | Tell the tool which button/link/box to act on (locators) |
| **Act on it** | Click, type, hover, select, drag |
| **Verify it** | Check the result — "is the message shown? Is the total correct?" |

Every automation framework (Cypress, Playwright, WebdriverIO) is **JavaScript
under the hood**. The better your JavaScript, the better your tests.

**First things you must have installed:**
- **Node.js** — lets you run JavaScript on your computer (not just in a browser).
  Check with: `node --version`
- **A code editor** — VS Code is the most popular for testers.

---

## 1. Variables — Storing Information (Like Labeled Boxes)

> **Think of it this way:** a variable is a **labeled box**. You put a value inside,
> and you use the label whenever you need that value.

### `let` — a box you can change
```js
let username = "admin";     // put "admin" in the box
username = "tester";        // replace the value — allowed with let
console.log(username);      // tester
```

### `const` — a sealed box (cannot be replaced)
```js
const baseUrl = "https://example.com";
baseUrl = "https://other.com";   // ❌ ERROR — const cannot change
```
> **Rule of thumb:** use `const` by default, use `let` only when you *know* the
> value must change. This makes your tests safer — no accidental overwrites.

### `var` — the old way (avoid it)
`var` was used before `let`/`const` and behaves unpredictably (see scope in
Chapter 4). Modern test frameworks and linters flag it. Just use `let`/`const`.

### Data types — the different kinds of boxes

| Type | Example | What it is |
|------|---------|------------|
| **string** | `"Hello"` | Text — always in quotes |
| **number** | `42`, `3.14` | Numbers (no quotes) |
| **boolean** | `true` / `false` | Yes or no |
| **array** | `[1, 2, 3]` | A list (Chapter 3) |
| **object** | `{ name: "Ali" }` | A record with named fields (Chapter 6) |
| **null** | `null` | Intentionally empty |
| **undefined** | `let x;` | Declared but never given a value |
| **function** | `function go() {}` | Reusable action (Chapter 4) |

Check a value's type with `typeof`:
```js
console.log(typeof "hello");   // string
console.log(typeof 42);        // number
console.log(typeof true);      // boolean
```

**🔧 In Automation Testing:** you store the base URL, login credentials, or an
expected error message in variables so a change is made in **one place**, not
everywhere in your test.

**✏️ Try It Yourself:**
```js
const appUrl = "https://automationpractice.com";
let retries = 3;
retries = retries + 1;          // 4
console.log(appUrl, retries);
```

**📁 Practice Program:** `09_Chapter_ES6_Features/09.1_let_const.js`

---

## 2. Operators — Doing Things With Values

> **Think of it this way:** operators are the **verbs** of JavaScript — they
> perform actions on values.

### 2.1 Arithmetic operators (math)

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `+` | Add | `5 + 3` | `8` |
| `-` | Subtract | `5 - 3` | `2` |
| `*` | Multiply | `5 * 3` | `15` |
| `/` | Divide | `5 / 2` | `2.5` |
| `%` | Remainder (modulus) | `5 % 2` | `1` |
| `**` | Power | `2 ** 3` | `8` |

**Why testers care about `%` (modulus):** it tells you if a number is even or odd
— `n % 2 === 0` means even. Useful for generating test data or checking pricing
rules.

### 2.2 Comparison operators (asking questions)

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `==` | Equal (loose) | `"5" == 5` | `true` ⚠️ |
| `===` | Strict equal | `"5" === 5` | `false` ✅ |
| `!=` | Not equal (loose) | `"5" != 5` | `false` ⚠️ |
| `!==` | Strict not equal | `"5" !== 5` | `true` ✅ |
| `>` / `<` | Greater / less | `10 > 5` | `true` |
| `>=` / `<=` | Greater/less or equal | `10 >= 10` | `true` |

> **⚠️ Always use `===` and `!==` in your tests.** Loose `==` converts types
> behind your back (`"5" == 5` is `true`!), which causes confusing, flaky test
> results. Strict `===` checks value **and** type.

### 2.3 Logical operators (combining conditions)

| Operator | Name | Returns true when… |
|----------|------|--------------------|
| `&&` | AND | **both** sides are true |
| `\|\|` | OR | **at least one** side is true |
| `!` | NOT | the value is false (flips it) |

```js
let age = 25, hasId = true;
console.log(age >= 18 && hasId);   // true  (both true)
console.log(age < 18 || hasId);    // true  (one true)
console.log(!hasId);               // false (flipped)
```

**🔧 In Automation Testing:** the classic multi-condition check:
```js
// Only submit the form when BOTH conditions pass
if (isTermsChecked && isAgeValid) {
    submitButton.click();
}
```

### 2.4 Ternary operator (a short if/else)
```js
// condition ? valueIfTrue : valueIfFalse
let status = isLoggedIn ? "Welcome back!" : "Please log in";
```

### 2.5 Special operators testers use daily

- **Optional chaining `?.`** — safely read a property that might not exist:
  ```js
  let response = { data: null };
  console.log(response?.data?.user?.name);  // undefined — no crash!
  ```
- **Nullish coalescing `??`** — fallback only for `null`/`undefined`:
  ```js
  let retries = config.retries ?? 3;   // 3 if config.retries is null/undefined
  ```
- **`in` operator** — does a property exist?
  ```js
  console.log("status" in response);   // true / false
  ```

**🔧 In Automation Testing:** API responses are *unpredictable* — a field may be
missing. `?.` and `??` keep your assertions from crashing on missing data.

**📁 Practice Program:** `01_Chapter_Operators/01_All_Operators.js`

---

## 3. Conditions — Making Decisions in Your Test

> **Think of it this way:** conditions are the **"if this, then that"** logic of
> your test — like a checklist with rules.

### 3.1 `if` / `else if` / `else`
```js
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C or below");
}
```

### 3.2 `switch` — many fixed choices
```js
let httpStatus = 404;

switch (httpStatus) {
    case 200: console.log("OK");        break;
    case 404: console.log("Not Found"); break;
    case 500: console.log("Server Error"); break;
    default:  console.log("Unknown");
}
```
> `break` stops the check from "falling through" to the next case. `default`
> runs when nothing matches.

**🔧 In Automation Testing:** a test that behaves differently per browser or
environment:
```js
switch (browserName) {
    case "chrome":  launchChrome();  break;
    case "firefox": launchFirefox(); break;
    default: throw new Error("Unsupported browser: " + browserName);
}
```

### 3.3 Truthy & falsy — JavaScript's hidden yes/no

When JavaScript needs a yes/no, **6 values count as "no" (falsy):**

`false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`

**Everything else is "yes" (truthy)** — including `" "` (space), `[]`, `{}`, `"0"`.

```js
let cart = [];                 // empty array is TRUTHY!
if (cart) console.log("truthy");  // prints truthy — careful!
if (cart.length > 0) console.log("has items");  // this is the safe check
```

> **⚠️ Beginner trap:** `if (myArray)` is always true even when empty. Always
> check `myArray.length`. Same for strings: use `str.length` or `str.trim()`.

**📁 Practice Programs:** `02_Chapter_conditionstatement/02_All_conditionstatement.js` and `02.16_http_status_codes.js` (a great tester-themed example!)

---

## 4. Loops — Repeating Actions Automatically

> **Think of it this way:** loops do the boring repetitive work for you — like a
> robot checking every row of a table.

### 4.1 `for` — when you know how many times
```js
for (let i = 1; i <= 5; i++) {
    console.log("Attempt " + i);
}
// Attempt 1, Attempt 2, … Attempt 5
```
Three parts: **start** (`let i = 1`), **condition** (`i <= 5`), **step** (`i++`).

### 4.2 `while` — repeat until a condition is false
```js
let remaining = 3;
while (remaining > 0) {
    console.log("Retrying... " + remaining);
    remaining--;   // ⚠️ must change the condition or you get an infinite loop!
}
```

### 4.3 `do...while` — always runs at least once
```js
let tries = 0;
do {
    tries++;
    console.log("Try #" + tries);
} while (tries < 2);
```

### 4.4 `for...of` — loop over values (arrays, strings) — **most used by testers**
```js
let links = ["Home", "Products", "Contact"];
for (let link of links) {
    console.log("Checking link: " + link);
}
```

### 4.5 `for...in` — loop over object keys
```js
let user = { name: "Ali", role: "QA" };
for (let key in user) {
    console.log(key + " = " + user[key]);
}
```

### 4.6 `break` and `continue` — loop controls
```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;   // skip 3, keep going
    if (i === 5) break;      // stop entirely at 5
    console.log(i);          // 1, 2, 4
}
```

**🔧 In Automation Testing:** retry logic is a loop:
```js
let attempts = 0;
while (attempts < 3) {
    attempts++;
    let success = tryLogin();
    if (success) break;     // stop retrying on success
}
```

**📁 Practice Program:** `02_Chapter_conditionstatement/02_All_loops.js`

---

## 5. Strings — Working With Text

> **Think of it this way:** everything a user sees or types is text. Strings are
> how JavaScript stores and manipulates that text.

### 5.1 Creating and joining strings
```js
let firstName = "Ali";
let lastName = "Khan";
console.log(firstName + " " + lastName);          // Ali Khan (concatenation)
console.log(`${firstName} ${lastName}`);          // Ali Khan (template literal ⭐)
```

### 5.2 Template literals (backticks) — the tester's favorite
Use **backticks `` ` ``**, not quotes, when mixing text with variables:
```js
let item = "laptop", price = 999;
console.log(`The ${item} costs $${price}.`);   // The laptop costs $999.
```
> Readable, and you can even embed expressions: `` `Total: ${2 + 3}` ``.

### 5.3 The string methods testers use constantly

| Method | What it does | Example → Result |
|--------|--------------|------------------|
| `length` | Count characters | `"hello".length` → `5` |
| `toUpperCase()` / `toLowerCase()` | Change case | `"Hello".toLowerCase()` → `"hello"` |
| `trim()` | Remove outer spaces | `"  hi  ".trim()` → `"hi"` |
| `includes(x)` | Contains? (bool) | `"Hello world".includes("world")` → `true` |
| `startsWith(x)` / `endsWith(x)` | Edge check | `"report.pdf".endsWith(".pdf")` → `true` |
| `indexOf(x)` | Position (or -1) | `"hello".indexOf("l")` → `2` |
| `slice(a, b)` | Cut part out | `"hello".slice(1, 3)` → `"el"` |
| `substring(a, b)` | Cut part out | `"hello".substring(1)` → `"ello"` |
| `replace(a, b)` | Swap first match | `"a-b-c".replace("-", "+")` → `"a+b-c"` |
| `replaceAll(a, b)` | Swap all matches | `"a-b-c".replaceAll("-", "+")` → `"a+b+c"` |
| `split(sep)` | Text → array | `"a,b,c".split(",")` → `["a","b","c"]` |
| `repeat(n)` | Repeat text | `"ab".repeat(3)` → `"ababab"` |
| `padStart(n, c)` | Pad at start | `"5".padStart(3, "0")` → `"005"` |
| `charAt(i)` | Character at index | `"abc".charAt(0)` → `"a"` |

### 5.4 Converting text ↔ numbers (very common in tests)
```js
let priceText = "  49.99  ";
let price = parseFloat(priceText);   // 49.99  (number, spaces removed)
let qty = parseInt("7 items", 10);   // 7
let backToText = String(price);      // "49.99"
```
> **Why testers need this:** a website shows `"Price: $49.99"`. To compare prices
> with `>` or `<`, you must first extract the number from the text and convert it.

**🔧 In Automation Testing:**
```js
// Verify a confirmation message contains expected text
let confirmation = await page.textContent(".success-message");
expect(confirmation.trim()).toContain("Order placed");
```

**📁 Practice Program:** `05_Chapter_Strings/05_All_strings.js`

---

## 6. Arrays — Lists of Things

> **Think of it this way:** an array is a **numbered shopping list**. Items are
> stored in order, and you refer to them by position — starting at **0**.

```js
let cart = ["laptop", "mouse", "keyboard"];
console.log(cart[0]);        // laptop  (first item — index 0!)
console.log(cart[2]);        // keyboard
console.log(cart.length);    // 3
cart.push("monitor");        // add to end
cart.pop();                  // remove from end
```

### 6.1 Add / remove items

| Method | Does | Returns |
|--------|------|---------|
| `push(x)` | Add to end | new length |
| `pop()` | Remove from end | removed item |
| `unshift(x)` | Add to front | new length |
| `shift()` | Remove from front | removed item |
| `splice(i, n, ...)` | Insert/remove anywhere | removed items |

### 6.2 The four "super methods" every tester must master

These are the **heart of test data manipulation**:

| Method | Purpose | Example |
|--------|---------|---------|
| `map(fn)` | Transform **every** item → new array | `[1,2,3].map(n => n * 2)` → `[2,4,6]` |
| `filter(fn)` | Keep only items that pass a test | `[1,2,3,4].filter(n => n % 2 === 0)` → `[2,4]` |
| `reduce(fn, init)` | Collapse all items into one value | `[1,2,3].reduce((sum, n) => sum + n, 0)` → `6` |
| `forEach(fn)` | Run code for each item (no return) | `names.forEach(n => console.log(n))` |

**The 30-second explanation of `map`:** "take my list, do this to each item, give
me the new list."
```js
let prices = [10, 20, 30];
let withTax = prices.map(p => p * 1.1);   // [11, 22, 33]
```

**The 30-second explanation of `filter`:** "give me only the items that match."
```js
let users = [{ name: "Ali", active: true }, { name: "Bo", active: false }];
let activeUsers = users.filter(u => u.active);   // only Ali
```

**The 30-second explanation of `reduce`:** "boil this whole list down to a single
answer." (`acc` = accumulated answer so far)
```js
let amounts = [50, 25, 100];
let total = amounts.reduce((acc, n) => acc + n, 0);   // 175
```

### 6.3 Find things in arrays

| Method | Returns |
|--------|---------|
| `indexOf(x)` | index or `-1` |
| `includes(x)` | `true` / `false` |
| `find(fn)` | first matching item or `undefined` |
| `findIndex(fn)` | index of first match or `-1` |
| `some(fn)` | `true` if **any** item passes |
| `every(fn)` | `true` if **all** items pass |

```js
let ids = [101, 205, 301];
console.log(ids.includes(205));            // true
console.log(ids.some(id => id > 300));     // true
console.log(ids.every(id => id > 100));    // true
```

### 6.4 Spread `...` — copy and combine lists
```js
let a = [1, 2], b = [3, 4];
let combined = [...a, ...b];      // [1, 2, 3, 4]
let copy = [...a];                // copy (not the same list!)
let unique = [...new Set([1,1,2,3,3])];   // [1, 2, 3]
```

### 6.5 Sorting — always give a compare function for numbers!
```js
let nums = [10, 2, 33];
nums.sort();                        // ⚠️ [10, 2, 33] — sorts as TEXT!
nums.sort((x, y) => x - y);         // ✅ [2, 10, 33]  ascending
nums.sort((x, y) => y - x);         // ✅ [33, 10, 2]  descending
```

### 6.6 Destructuring — unpack lists in one line
```js
let [first, second] = [10, 20, 30];
console.log(first, second);         // 10 20
let [head, ...rest] = [1, 2, 3, 4]; // head=1, rest=[2,3,4]
```

**🔧 In Automation Testing:** you'll constantly turn **UI text** into arrays and
then verify them:
```js
// Get all product names shown on a page
let names = await page.locator(".product-name").allTextContents();
let expected = ["Laptop", "Mouse", "Keyboard"];
expect(names).toEqual(expected);
```

**📁 Practice Programs:** start with `03.10_array_map.js`, `03.11_array_reduce.js`,
and `03.12_array_forEach.js`; then try `03.21_array_chaining.js` to see them
combined. (There is no single "all arrays" file — each method has its own.)

---

## 7. Functions — Reusable Test Steps

> **Think of it this way:** a function is a **recipe**. Write it once, use it many
> times — like a reusable "login" step in your tests.

### 7.1 Three ways to write a function

**1. Declaration** (hoisted — can be called before its definition):
```js
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));   // 5
```

**2. Expression** (a function stored in a variable):
```js
const multiply = function (a, b) {
    return a * b;
};
```

**3. Arrow function** (modern, concise — **testers use this everywhere**):
```js
const divide = (a, b) => a / b;          // one line, implicit return
const double = (n) => { return n * 2; }; // with block, explicit return
```

**Arrow function cheat-sheet:**
```js
() => ...               // no parameters
x => ...                // one parameter (no brackets needed)
(x, y) => ...           // multiple parameters
```

### 7.2 Parameters, default values, rest

```js
function greet(name = "Guest") {          // default value
    return "Hello, " + name;
}
greet();              // Hello, Guest
greet("Ali");         // Hello, Ali

function sumAll(...nums) {                // rest: collect all args
    return nums.reduce((a, b) => a + b, 0);
}
sumAll(1, 2, 3);      // 6
```

### 7.3 Scope — where a variable lives

- **Global:** declared outside any function — visible everywhere.
- **Local (function):** declared inside a function — visible only there.
- **Block:** declared with `let`/`const` inside `{}` — visible only in that block.

```js
let globalVar = "visible everywhere";

function demo() {
    let localVar = "only inside demo()";
    console.log(globalVar);   // ✅ works
    // console.log(localVar) outside demo() would ERROR
}
```
> `var` ignores block scope (leaks out of `{}`); `let`/`const` respect it. Another
> reason to avoid `var`.

### 7.4 Closures — a function that remembers

```js
function createCounter() {
    let count = 0;                    // "remembered" by the inner function
    return function () {
        count++;
        return count;
    };
}
const counter = createCounter();
counter();  // 1
counter();  // 2
counter();  // 3   <- the count survives between calls
```

### 7.5 IIFE — run immediately, keep things private
```js
(function () {
    console.log("Runs right away, hides its variables");
})();
```

### 7.6 Callbacks — pass a function as an argument
```js
function processItems(items, callback) {
    for (let item of items) callback(item);
}
processItems(["a", "b"], (item) => console.log(item));
```
> Callbacks are the **foundation of asynchronous programming** — the gateway to
> `async/await` in Chapter 12.

### 7.7 Recursion — a function that calls itself
```js
function factorial(n) {
    if (n <= 1) return 1;        // base case — stop!
    return n * factorial(n - 1); // call itself
}
factorial(5);   // 120
```

**🔧 In Automation Testing:** wrap repeatable flows in functions (this becomes the
**Page Object pattern** in test frameworks):
```js
async function login(page, username, password) {
    await page.fill("#username", username);
    await page.fill("#password", password);
    await page.click("#login-btn");
}
// Now any test can "login" in one line:
await login(page, "tester@qa.com", "Passw0rd!");
```

**📁 Practice Program:** `04_Chapter_Functions/04_All_functions.js`

---

## 8. Objects — Real-World Things With Properties

> **Think of it this way:** an object is a **profile card** — a single thing with
> multiple named details. A user object has name, age, email. A product has name,
> price, stock.

### 8.1 Creating and reading objects
```js
let product = {
    name: "Laptop",
    price: 999,
    inStock: true
};

console.log(product.name);        // dot notation
console.log(product["price"]);    // bracket notation
product.inStock = false;          // update a value
```

**Bracket vs dot — when do you need brackets?**
```js
let key = "price";
console.log(product[key]);        // ✅ brackets: variable keys
// console.log(product.key)       // ❌ looks for a key literally named "key"
```

### 8.2 Objects inside objects (nested — very common in API responses)
```js
let user = {
    id: 1,
    profile: {
        name: "Ali",
        address: { city: "Hyderabad" }
    }
};
console.log(user.profile.address.city);   // Hyderabad
```

### 8.3 Methods — functions stored in an object
```js
let calculator = {
    total: 0,
    add(n) { this.total += n; }   // `this` = the object itself
};
calculator.add(5);
calculator.add(3);
console.log(calculator.total);    // 8
```

### 8.4 Useful object tools

```js
let user = { name: "Ali", age: 30 };

Object.keys(user);        // ["name", "age"]
Object.values(user);      // ["Ali", 30]
Object.entries(user);     // [["name","Ali"],["age",30]]

let copy = { ...user };             // spread copy (shallow)
let merged = { ...user, age: 31 };  // copy with an override
```

### 8.5 Destructuring objects (tester favorite)
```js
let { name, age } = user;
console.log(name, age);          // Ali 30

// Rename while extracting:
let { name: fullName } = user;
console.log(fullName);           // Ali
```

**🔧 In Automation Testing:** every API response is a nested object. Reading it
correctly is a core tester skill:
```js
// GET /api/user/1 returns:
// { "id": 1, "profile": { "name": "Ali", "role": "QA" } }

let response = await api.get("/api/user/1");
expect(response.data.profile.role).toBe("QA");
```

**📁 Practice Program:** `06_Chapter_Objects/06_All_objects.js`

---

## 9. Numbers & Math

### 9.1 Number gotchas

```js
console.log(0.1 + 0.2);           // 0.30000000000000004  ⚠️ floating point!
console.log((0.1 + 0.2).toFixed(2));   // "0.30"
console.log(Number.isInteger(5));      // true
console.log(Number.isNaN("abc" / 2));  // true  (NaN = Not a Number)
console.log(parseInt("100px", 10));    // 100  (extract number from text)
```

> **⚠️ Never compare money with `==`!** `0.1 + 0.2 === 0.3` is `false` in
> JavaScript. Round first with `.toFixed(2)` or compare with a small tolerance.

### 9.2 The Math toolbox

| Function | What it does | Example |
|----------|--------------|---------|
| `Math.round(x)` | Round to nearest | `Math.round(4.6)` → `5` |
| `Math.ceil(x)` | Always round up | `Math.ceil(4.1)` → `5` |
| `Math.floor(x)` | Always round down | `Math.floor(4.9)` → `4` |
| `Math.max(...)` / `Math.min(...)` | Biggest / smallest | `Math.max(3, 9, 5)` → `9` |
| `Math.abs(x)` | Drop the minus sign | `Math.abs(-7)` → `7` |
| `Math.pow(x, y)` | Power | `Math.pow(2, 3)` → `8` |
| `Math.sqrt(x)` | Square root | `Math.sqrt(16)` → `4` |
| `Math.random()` | Random 0 → 1 | `Math.random()` → `0.731…` |
| `Math.floor(Math.random() * n)` | Random whole 0 → n-1 | → `3` |

**🔧 In Automation Testing:** generate **random test data**:
```js
let randomUser = "user" + Math.floor(Math.random() * 10000);
// user4371 — unique every run, no "email already exists" failures
```

**📁 Practice Program:** `07_Chapter_Numbers_Math/07_All_numbers_math.js`

---

## 10. Dates & Time

```js
let now = new Date();                    // right now
let specific = new Date(2025, 0, 15);    // Jan 15 2025 (months are 0-based!)
let iso = new Date("2025-01-15T10:30:00");

now.getFullYear();    // 2025
now.getMonth();       // 0-11  (⚠️ January is 0!)
now.getDate();        // day of month 1-31
now.getDay();         // day of week 0-6 (Sunday is 0!)
now.getHours();       // 0-23
now.getTime();        // milliseconds since 1970 (great for math)
```

**Date math made easy with timestamps:**
```js
let start = new Date("2025-01-01").getTime();
let end = new Date("2025-01-10").getTime();
let daysDiff = (end - start) / (1000 * 60 * 60 * 24);   // 9
```

**Formatting:**
```js
now.toISOString();            // "2025-01-15T10:30:00.000Z" (APIs use this)
now.toLocaleDateString();     // "1/15/2025"
```

**🔧 In Automation Testing:** test date-sensitive features — "enter a date of
birth 18+ years ago", "verify an expired coupon is rejected", "check the order
date equals today".

**📁 Practice Program:** `08_Chapter_Dates/08_All_dates.js`

---

## 11. ES6+ Essentials (Modern JavaScript You'll See in Every Test File)

### 11.1 `let` / `const` over `var`
Covered in Chapter 1 — this is the **#1 modern convention**.

### 11.2 Template literals — backticks
Covered in Chapter 5. You will see them in every test framework's docs.

### 11.3 Destructuring — both arrays and objects
Covered in Chapters 6 and 8.

### 11.4 Spread & rest — `...`
Covered in Chapters 6 and 7. One more common tester pattern:
```js
const config = { timeout: 5000, retries: 2 };
const testConfig = { ...config, headless: true };   // add a field
```

### 11.5 Classes — the blueprint for Page Objects
> **Think of it this way:** a class is a **blueprint**. One blueprint can create
> many objects (instances).

```js
class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async enterUsername(username) {
        await this.page.fill("#username", username);
    }

    async enterPassword(password) {
        await this.page.fill("#password", password);
    }

    async clickLogin() {
        await this.page.click("#login-btn");
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}

// Usage in a test:
const loginPage = new LoginPage(page);
await loginPage.login("tester@qa.com", "Passw0rd!");
```
> **This is the Page Object Model (POM)** — the most important design pattern in
> test automation. The class groups all actions for one page in one place.

**Inheritance** (a class that extends another):
```js
class ProductPage extends BasePage {
    // inherits everything from BasePage, adds its own things
}
```

### 11.6 Modules — split code across files
```js
// loginPage.js
export class LoginPage { /* ... */ }

// test file
import { LoginPage } from "./loginPage.js";
```
Each test framework handles imports slightly differently, but the idea is the
same: **share code between test files** instead of duplicating it.

### 11.7 Promises & async/await — the most important concept for testers
Covered in depth in Chapter 12 below.

### 11.8 `Map` and `Set`

**`Set` — a list with no duplicates:**
```js
let uniqueNames = new Set(["a", "b", "a", "c"]);
console.log([...uniqueNames]);          // ["a", "b", "c"]
```

**`Map` — a dictionary with any key type:**
```js
let userRoles = new Map();
userRoles.set("Ali", "admin");
console.log(userRoles.get("Ali"));      // admin
console.log(userRoles.has("Ali"));      // true
```

**📁 Practice Program:** `09_Chapter_ES6_Features/09_All_es6_features.js`

---

## 12. Async JavaScript — Understanding Wait, Promise, and `async/await` ⭐

> **This is the single most important chapter for an automation tester.**
> Browsers and networks are **asynchronous** — things happen in the background.
> Your test must *wait* for those things without freezing.

### 12.1 Why is it "async"?

```js
console.log("1. Start");
setTimeout(() => console.log("2. Timeout done"), 1000);
console.log("3. End");
```
Output order: **1, 3, 2**. The `setTimeout` waits in the background while the
rest of the code continues. JavaScript does **not** block — it keeps moving.

### 12.2 The three states of a Promise

A **Promise** is JavaScript's "I promise to give you the result later."

- **pending** — waiting
- **fulfilled** — succeeded (resolved)
- **rejected** — failed

```js
function loginApi(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "secret") {
                resolve("Login successful");
            } else {
                reject("Invalid credentials");
            }
        }, 1000);   // pretend network delay
    });
}

loginApi("admin", "secret")
    .then((result) => console.log(result))       // success path
    .catch((error) => console.log(error))        // failure path
    .finally(() => console.log("Done (always)")); // cleanup
```

### 12.3 `async/await` — write async code like it's normal code

`await` **pauses the function** until the promise settles. `async` marks a
function so it can use `await`:

```js
async function doLogin() {
    try {
        let result = await loginApi("admin", "secret");
        console.log(result);          // Login successful
        return result;
    } catch (error) {
        console.log("Failed:", error);
    }
}
```

> **The tester's mental model:** `await` = "wait here until this finishes".
> Almost every line of Playwright/Cypress/WebdriverIO test code starts with
> `await`.

### 12.4 The three Promise combinators

```js
// 1. Promise.all — run together, wait for ALL
let [userData, productData] = await Promise.all([
    fetchUser(),
    fetchProducts()
]);

// 2. Promise.allSettled — wait for all, even if some fail
let results = await Promise.allSettled([taskA(), taskB()]);

// 3. Promise.race — first one to finish wins
let winner = await Promise.race([fastApi(), slowApi()]);
```

**🔧 In Automation Testing:**
```js
// Wait for an element to appear (Playwright-style)
await expect(page.locator(".toast-success")).toBeVisible();

// Wait for a network call to complete
await page.waitForResponse((res) => res.url().includes("/api/orders"));
```

**📁 Practice Program:** `09_Chapter_ES6_Features/09.7_promises.js`

---

## 13. Error Handling — `try/catch`/`finally`/`throw`

> **Think of it this way:** `try` = attempt the risky thing, `catch` = what to do
> if it fails, `finally` = cleanup that always runs, `throw` = deliberately
> create an error.

```js
try {
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    console.log("Something failed:", error.message);
} finally {
    console.log("Cleanup — always runs");
}
```

**🔧 In Automation Testing:**
```js
async function testCheckout() {
    try {
        await page.click("#checkout-btn");
        await expect(page).toHaveURL(/\/checkout$/);
    } catch (error) {
        await page.screenshot({ path: "checkout-failure.png" });  // evidence!
        throw error;   // let the test still fail
    }
}
```
> **Pro tip:** screenshots + `try/catch` = debugging superpower. When a test
> fails, you have a picture of exactly what went wrong.

---

## 14. JSON — The Language of APIs (You'll Read It Every Day)

**JSON** (JavaScript Object Notation) is how servers and browsers exchange data.
It looks exactly like a JavaScript object with strings as keys:

```json
{
  "id": 1,
  "name": "Ali",
  "roles": ["QA", "Automation"],
  "active": true,
  "address": {
    "city": "Hyderabad"
  }
}
```

### Converting between JSON text and JavaScript objects

```js
// JSON text -> JavaScript object (for reading)
let jsObject = JSON.parse('{"name": "Ali"}');
console.log(jsObject.name);            // Ali

// JavaScript object -> JSON text (for sending)
let jsonText = JSON.stringify({ name: "Ali" });
console.log(jsonText);                 // {"name":"Ali"}
```

**🔧 In Automation Testing:**
- **API tests** send and receive JSON.
- **Test data** is stored in JSON fixture files (`cypress/fixtures/user.json`).
- **Config files** (`playwright.config.js`) use JSON-like structures.

---

## 15. Pulling It All Together — A Realistic Test Scenario

Here is one automation test that uses **almost everything** you learned. Read it
line by line — you already know every piece:

```js
import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage.js";   // Chapter 11 — class/module

const users = [
    { username: "tester1", password: "Passw0rd!", role: "admin" },
    { username: "tester2", password: "Passw0rd!", role: "viewer" }
];                                                    // Chapter 1/8 — data

test("login with each role and verify dashboard", async ({ page }) => {  // Ch 12
    const loginPage = new LoginPage(page);            // Chapter 11 — class

    for (const user of users) {                       // Chapter 4 — for...of
        await loginPage.login(user.username, user.password);  // Ch 7/11

        const welcome = await page.textContent(".welcome-message");
        expect(welcome.trim().toLowerCase()).toContain("welcome");   // Ch 5

        if (user.role === "admin") {                  // Chapter 3 — condition
            await expect(page.locator(".admin-panel")).toBeVisible();
        }

        await page.click("#logout-btn");
    }
});
```

**Map of concepts used:** objects, arrays, `for...of`, functions, classes,
modules, `async/await`, strings, conditions, template literals — **everything**.
That's the whole point: real tests use all of it together.

---

## 16. Common Automation Testing Patterns (Cheat Sheet)

| Pattern | Why | Snippet |
|---------|-----|---------|
| **Page Object** | One class per page | `new LoginPage(page)` |
| **Explicit wait** | Wait for a condition, not a fixed time | `await expect(el).toBeVisible()` |
| **Retry** | Try again on flaky failure | `while (attempts < 3)` |
| **Data-driven** | Same test, many data sets | `for (const user of users)` |
| **Random data** | Avoid duplicate-key errors | `` `user${Math.floor(Math.random()*9999)}` `` |
| **Soft assertion** | Continue after a failure | collect errors, assert at end |
| **Fixtures** | External test data files | `user.json` loaded with `require`/import |

---

## 17. Practice Exercises (Do These!)

1. **Variables:** create a `const` for your test site URL and a `let` counter.
   Log both. Now try reassigning the `const` — read the error.
2. **Conditions:** write a function `grade(score)` returning A/B/C/F using
   `if/else`. Test it with 5 different scores.
3. **Loops:** print every even number from 1 to 20 using a `for` loop and a
   `continue` statement.
4. **Strings:** take `" Order #1234 Confirmed "`, trim it, extract the number,
   and check it ends with `"Confirmed"`.
5. **Arrays:** given `[12, 5, 8, 130, 44]`, use `filter` to keep numbers > 10,
   `map` to double them, `reduce` to sum the result. (Answer: 304)
6. **Functions + Objects:** write `describeProduct(product)` that returns
   `` `The ${name} costs $${price}` ``. Call it with a product object.
7. **Async:** write a `waitAndLog(ms, message)` function using a Promise and
   `setTimeout`, then call it with `await` inside an `async` function.
8. **Error handling:** write a function that throws if given a negative number,
   and catch it in `try/catch`, logging a friendly message.
9. **JSON:** `JSON.stringify` a user object, then `JSON.parse` it back and
   confirm you can read `user.profile.city`.

---

## 18. Quick Reference Card (One Screen of Everything)

```js
// VARIABLES
const fixed = "can't change";   let changeable = "can change";

// TYPES
typeof x;    // "string" | "number" | "boolean" | "object" | "undefined"

// COMPARISON — always use strict!
x === y;   x !== y;   x > y;   x < y;   x >= y;   x <= y;

// LOGICAL
a && b;   a || b;   !a;   a ?? b;    // ?? = fallback for null/undefined

// CONDITIONS
if (x) { } else if (y) { } else { }
condition ? valueIfTrue : valueIfFalse;
switch (x) { case 1: break; default: }

// FALSY — false, 0, "", null, undefined, NaN  (everything else is truthy)

// LOOPS
for (let i = 0; i < n; i++) { }
while (cond) { }
do { } while (cond);
for (const item of array) { }       // ✅ use this for arrays
for (const key in object) { }
break;   continue;

// STRINGS
`template ${variable}`;   s.length;   s.trim();   s.includes(x);
s.startsWith(x);  s.endsWith(x);  s.toUpperCase();  s.toLowerCase();
s.replace(a, b);  s.replaceAll(a, b);  s.split(sep);  s.slice(a, b);
parseInt(text, 10);   parseFloat(text);   String(num);

// ARRAYS
arr.push(x);  arr.pop();  arr.unshift(x);  arr.shift();
arr.splice(i, n, ...items);
arr.map(fn);   arr.filter(fn);   arr.reduce((acc, v) => ..., init);
arr.forEach(fn);   arr.find(fn);   arr.some(fn);   arr.every(fn);
arr.includes(x);   arr.indexOf(x);
arr.slice(a, b);   arr.join(sep);   [...arr];   arr.sort((a, b) => a - b);

// OBJECTS
obj.key;   obj["key"];   obj.key = value;
Object.keys(o);  Object.values(o);  Object.entries(o);
{ ...obj };   { ...obj, newKey: v };
const { key, key2 } = obj;

// FUNCTIONS
function name(params) { return value; }
const fn = (params) => value;            // arrow
function fn(a = 1, ...rest) { }          // default + rest
(parameters) => { };                     // callback

// CLASSES
class Name extends Other {
    constructor(...) { super(...); }
    method() { }
}

// MODULES
import { x } from "./file.js";   export class Y { }

// ASYNC
async function f() { const r = await something(); }
new Promise((resolve, reject) => { });
.then(success).catch(error).finally(cleanup);
Promise.all([...]);   Promise.allSettled([...]);   Promise.race([...]);

// ERRORS
try { } catch (error) { } finally { }
throw new Error("message");

// JSON
JSON.parse(text);   JSON.stringify(object);
```

---

## 19. What's Next After This Guide

| Topic | Why it matters | Where to go |
|-------|----------------|-------------|
| **Cypress basics** | E2E testing for web apps | cypress.io/docs |
| **Playwright basics** | Fast modern E2E testing | playwright.dev/docs |
| **WebdriverIO** | Selenium-style testing | webdriver.io/docs |
| **API testing (Postman/REST)** | Test backends directly | postman.com/docs |
| **XPath & CSS selectors** | Find elements reliably | MDN web docs |
| **Git & GitHub** | Version-control your tests | git-scm.com/doc |
| **CI/CD basics** | Run tests automatically | GitHub Actions docs |
| **TypeScript** | Typed JavaScript (used by Playwright/Cypress) | typescriptlang.org |

> **Final advice from your trainer:** Don't memorize — **practice**. Write one
> small program a day. Break things on purpose. When a test you write fails,
> celebrate: that's how you learn what the system *really* does. Every expert
> automation tester you admire started exactly where you are now.
