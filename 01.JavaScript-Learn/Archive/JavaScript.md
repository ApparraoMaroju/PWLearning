# JavaScript Reference Guide

A quick revision guide covering all concepts practiced in the `Practice/` folders.

## Chapter Map

| Chapter | Folder | Topics |
|---------|--------|--------|
| 1 | `01_Chapter_Operators` | Arithmetic, comparison, logical, ternary, optional chaining, nullish, instanceof, `in` |
| 2 | `02_Chapter_conditionstatement` | if/else, switch, truthy/falsy, loops (for/while/do-while/for-of/for-in), break/continue |
| 3 | `03_Chapter_Arrays` | Array methods, map/filter/reduce, destructuring, set operations, chaining |
| 4 | `04_Chapter_Functions` | Declarations, expressions, arrows, params, defaults, scope/closures, IIFE, callbacks, recursion |
| 5 | `05_Chapter_Strings` | String methods, template literals, search, replace/split, parsing, comparison, padding |
| 6 | `06_Chapter_Objects` | Object basics, methods, `this`, constructors, destructuring, keys/values/entries, cloning |
| 7 | `07_Chapter_Numbers_Math` | Number methods, Math.round/random/pow, max/min, trig, constants |
| 8 | `08_Chapter_Dates` | Date creation, getters/setters, formatting, calculations |
| 9 | `09_Chapter_ES6_Features` | let/const, template literals, destructuring, spread/rest, classes, modules, promises |

Each file is standalone — run it with `node <file>` to see the examples.

---

## 1. Operators

### Arithmetic
| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `+` | Addition | `10 + 3` | `13` |
| `-` | Subtraction | `10 - 3` | `7` |
| `*` | Multiplication | `10 * 3` | `30` |
| `/` | Division (quotient) | `10 / 3` | `3.33` |
| `%` | Modulus (remainder) | `10 % 3` | `1` |
| `**` | Exponentiation | `10 ** 3` | `1000` |
| `++` | Increment | `let x=5; x++` | `6` |
| `--` | Decrement | `let y=5; y--` | `4` |

**Pre vs Post Increment:**
- **Post** (`num++`): returns old value first, then increments
- **Pre** (`++num`): increments first, returns new value

### Assignment Shorthand
`+=`, `-=`, `*=`, `/=`, `%=`, `**=` — all operate as `x = x <op> value`

### Comparison
| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `==` | Equal (value only) | `"10" == 10` | `true` |
| `===` | Strict equal (value + type) | `"10" === 10` | `false` |
| `!=` | Not equal (value only) | `"10" != 10` | `false` |
| `!==` | Strict not equal | `"10" !== 10` | `true` |
| `>`, `<`, `>=`, `<=` | Greater/Less than | `10 > 5` | `true` |

### Logical
- `&&` (AND): true only if **both** are true. Short-circuits at first falsy.
- `||` (OR): true if **at least one** is true. Short-circuits at first truthy.
- `!` (NOT): reverses boolean value
- `??` (Nullish Coalescing): returns right side only if left is `null`/`undefined` (not for other falsy values like `0`, `""`, `false`)

### Ternary Operator
`condition ? valueIfTrue : valueIfFalse`
```js
let canVote = age >= 18 ? "Yes" : "No";
```

### Other Operators
- **String**: `+` for concatenation, `` `template ${var}` `` for template literals
- **Type**: `typeof` (returns type string), `instanceof` (checks constructor)
- **Bitwise**: `&`, `|`, `^`, `~`, `<<`, `>>` — work on binary representation
- **Precedence**: Multiplication/division before addition/subtraction. Use parentheses to clarify.

---

## 2. Condition Statements

### if / else if / else
```js
if (score >= 90) {
    // grade A
} else if (score >= 80) {
    // grade B
} else {
    // grade F
}
```

### Nested if
An `if` inside another `if` for checking sub-conditions.
```js
if (username === "admin") {
    if (password === "secret123") {
        // login success
    } else {
        // wrong password
    }
}
```

### switch
Strict comparison (`===`). Use `break` to prevent fall-through.
```js
switch (day) {
    case 1: dayName = "Monday"; break;
    case 2: dayName = "Tuesday"; break;
    default: dayName = "Invalid";
}
```
Trick: `switch(true)` lets you use conditions as cases.

### Truthy & Falsy Values
**Falsy (6 values):** `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`
**Truthy:** Everything else (including `" "`, `[]`, `{}`, `-1`, `Infinity`)

### Optional Chaining (`?.`)
Safely access nested properties without crashing.
```js
user?.address?.zipcode?.length  // returns undefined instead of error
user.greet?.()                  // call only if method exists
```

### Logical Assignment Operators (ES2021)
- `&&=` — assign only if truthy
- `||=` — assign only if falsy
- `??=` — assign only if `null`/`undefined`

---

## 3. Arrays — Core Concepts

### Creating Arrays
```js
let arr = [1, 2, 3];               // literal (preferred)
let arr = new Array(1, 2, 3);       // constructor
let arr = new Array(5);             // 5 empty slots (not [5])
```
- `Array.isArray(arr)` — reliable type check
- `arr.length` — element count (can also truncate)
- Index starts at `0`, last element at `arr.length - 1`

### Mutating Arrays (In-Place)

| Method | What it does | Returns | Example |
|--------|-------------|---------|---------|
| `push(x)` | Add to **end** | New length | `arr.push(4)` |
| `pop()` | Remove from **end** | Removed element | `arr.pop()` |
| `unshift(x)` | Add to **beginning** | New length | `arr.unshift(0)` |
| `shift()` | Remove from **beginning** | Removed element | `arr.shift()` |
| `splice(start, delCount, ...items)` | Add/Remove/Replace **anywhere** | Array of removed items | `arr.splice(1, 2, "x", "y")` |
| `fill(value, start, end)` | Fill with static value | Modified array | `arr.fill(0, 1, 4)` |
| `sort(fn)` | Sort in-place | Sorted array | `arr.sort((a,b) => a - b)` |
| `reverse()` | Reverse in-place | Reversed array | `arr.reverse()` |

**Performance:** `push`/`pop` are O(1), `shift`/`unshift` are O(n) (re-indexes all elements).

**Important:** `sort()` converts elements to strings by default — always provide a compare function for numbers:
```js
arr.sort((a, b) => a - b);   // ascending
arr.sort((a, b) => b - a);   // descending
arr.sort((a, b) => a.name.localeCompare(b.name));  // string sort (locale-aware)
```

### Non-Mutating Methods (Return New Array)

| Method | What it does | Returns |
|--------|-------------|---------|
| `slice(start, end)` | Extract portion (end exclusive) | New array |
| `concat(arr2)` | Join arrays | New array |
| `flat(depth)` | Flatten nested arrays | New array |
| `flatMap(fn)` | Map then flatten (depth 1) | New array |
| `join(sep)` | Convert to string | String |
| `toString()` | Comma-separated string | String |

**slice() key details:**
- `arr.slice()` — full copy
- `arr.slice(-2)` — last 2 elements
- `arr.slice(1, -1)` — all except first and last
- End index is **exclusive** (not included)

### Search Methods

| Method | What it does | Returns |
|--------|-------------|---------|
| `indexOf(x)` | First index of value | Index or `-1` |
| `lastIndexOf(x)` | Last index of value | Index or `-1` |
| `includes(x)` | Check if exists | `true`/`false` |
| `find(fn)` | First element passing test | Element or `undefined` |
| `findIndex(fn)` | Index of first passing test | Index or `-1` |
| `findLast(fn)` (ES2023) | Last element passing test | Element or `undefined` |

All use **strict equality (`===`)**. For objects, this is reference comparison, not value comparison.

### Iteration / Transformation Methods

| Method | Purpose | Returns | Mutates? |
|--------|---------|---------|----------|
| `forEach(fn)` | Perform action (side effect) | `undefined` | No |
| `map(fn)` | Transform every element | New array (same length) | No |
| `filter(fn)` | Keep matching elements | New array (may be shorter) | No |
| `reduce(fn, init)` | Accumulate to single value | Any type | No |
| `some(fn)` | At least one passes? | `true`/`false` | No |
| `every(fn)` | All pass? | `true`/`false` | No |

**forEach vs map:** Use `forEach` for side effects (logging, DOM updates). Use `map` when you need a transformed array back.

**reduce** is the most versatile — can produce numbers, strings, objects, or arrays:
```js
// Sum
arr.reduce((acc, n) => acc + n, 0)
// Group/count
arr.reduce((acc, item) => { acc[item] = (acc[item] || 0) + 1; return acc; }, {})
// Build lookup
arr.reduce((acc, obj) => { acc[obj.id] = obj; return acc; }, {})
```

**some/every** short-circuit: `some` stops at first `true`, `every` stops at first `false`.
- `some` on empty array → `false`
- `every` on empty array → `true` (vacuously true)

### Spread Operator (`...`)
More flexible than `concat` — can insert elements anywhere:
```js
[...arr1, ...arr2]           // combine arrays
[...arr1, 99, ...arr2]       // insert in middle
[...new Set(arr)]             // deduplicate
Math.max(...nums)             // spread into function args
[...string]                   // string to character array
```

### Destructuring
```js
let [a, b, ...rest] = [1, 2, 3, 4];   // a=1, b=2, rest=[3,4]
let [first, , third] = arr;            // skip second element
let [x = 10] = [];                     // default value
[a, b] = [b, a];                       // swap variables
let [min, max] = getMinMax(nums);      // function return values
```

### Multidimensional Arrays
JavaScript uses **arrays of arrays** (no native 2D arrays).
```js
let matrix = [[1,2,3], [4,5,6], [7,8,9]];
matrix[0][1]  // 2 (row 0, col 1)

// Create with Array.from
let grid = Array.from({length: 5}, () => Array(5).fill(0));
```
Can be jagged (rows of different lengths). Flatten with `.flat()` for aggregate operations.

### Set Operations with Arrays

| Operation | Code |
|-----------|------|
| Unique | `[...new Set(arr)]` |
| Union | `[...new Set([...a, ...b])]` |
| Intersection | `a.filter(x => b.includes(x))` |
| Difference | `a.filter(x => !b.includes(x))` |
| Symmetric Diff | `a.filter(x=>!b.includes(x)).concat(b.filter(x=>!a.includes(x)))` |

For objects, compare by property/id using `.some()` or `Map`.

### Array.from() & Array.of()
- `Array.from(iterable, mapFn)` — creates from iterables (string, Set, Map, array-like)
- `Array.of(...args)` — creates from arguments (safe with single number)
- `new Array(n).fill(v)` — creates n copies of v
- `Array.from({length: n}, (_, i) => i + 1)` — computed sequence

### Method Chaining
Combine methods in a pipeline — each passes its result to the next:
```js
arr
  .filter(n => n % 2 === 0)
  .map(n => n * n)
  .sort((a, b) => a - b)
  .reduce((sum, n) => sum + n, 0);
```
Each step creates a new array (memory overhead for large data). Use `reduce` for single-pass alternatives.

---

## Quick Reference Card

```js
// OPERATORS
// Arithmetic: +  -  *  /  %  **  ++  --
// Assignment: =  +=  -=  *=  /=  %=  **=
// Comparison: ==  ===  !=  !==  >  <  >=  <=  ?:
// Logical:    &&  ||  !  ??
// String:     +  +=  `template ${}`
// Type:       typeof  instanceof
// Bitwise:    &  |  ^  ~  <<  >>

// CONDITIONS
// if (c) { ... } else if (c2) { ... } else { ... }
// switch (val) { case x: ... break; default: ... }
// condition ? trueVal : falseVal
// value?.prop      (optional chaining)
// value ?? fallback (nullish coalescing)
// Falsy: false, 0, "", null, undefined, NaN

// ARRAYS — MUTATING
// push/pop      → add/remove at end
// unshift/shift → add/remove at start (O(n))
// splice(i, n, ...items) → add/remove/replace anywhere
// sort(fn)      → sort in-place
// reverse()     → reverse in-place
// fill(v, s, e) → fill with static value

// ARRAYS — NON-MUTATING
// slice(s, e)   → extract portion
// concat(arr)   → combine
// flat(d)       → flatten nested
// join(sep)     → to string
// map(fn)       → transform every element
// filter(fn)    → keep matching elements
// reduce(fn, i) → accumulate to single value
// forEach(fn)   → perform action (returns undefined)
// find/findIndex → search by condition
// some/every    → test conditions (boolean)
// indexOf/lastIndexOf/includes → search by value
// flatMap(fn)   → map then flatten (1 level)

// SET OPERATIONS
// Unique:    [...new Set(arr)]
// Union:     [...new Set([...a, ...b])]
// Intersect: a.filter(x => b.includes(x))
// Diff:      a.filter(x => !b.includes(x))

// DESTRUCTURING
// let [a, b, ...rest] = arr
// [a, b] = [b, a]  // swap
// let [x = default] = arr
```
