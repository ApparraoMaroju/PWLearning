# Prompt: Create & Organize JavaScript Practice Chapters

> **Date:** 2026-08-04
> **Scope:** `01.JavaScript-Learn/Practice/`
> **Status:** ✅ Completed

## Purpose

Capture the original prompt and requirements so future changes to the practice-chapter structure have clear context.

---

## Original Prompt (User Request)

> "The same way create one folder `04_Chapter_Functions`, `05_Chapter_String`, etc. and create the respective test cases to easily understand and run each functionality as separate programs. Also review all the chapters and remove in case of any duplicates and organize all the folders with respective programs only."

Plus a follow-up:

> "Create the used prompt in a structured manner in a .md file under a folder `Prompts`, so that can give clear picture in future if required."

---

## Requirements (as interpreted & confirmed)

1. **New chapters** — create standalone practice folders for Functions, Strings, Objects, Numbers/Math, Dates, and ES6+ features.
2. **One file per topic** — each program is self-contained and runnable independently with `node <file>`.
3. **Consistent style** — every file follows the existing convention: header banner, numbered examples with `console.log` output, and a summary footer.
4. **Remove duplicates** — each topic lives in exactly ONE chapter (single home per topic).
5. **Organize folders** — every file sits in its appropriate chapter folder; no stray files.
6. **Reference guide** — update `JavaScript.md` to reflect the full chapter map.

### Decisions (confirmed with user)

| Question | Chosen option |
|----------|---------------|
| How many new chapters? | Broad set: 04 Functions, 05 Strings, 06 Objects, 07 Numbers/Math, 08 Dates, 09 ES6 Features |
| Duplicate policy | Single home per topic (delete duplicate copies) |
| Folder naming | `NN_Chapter_Topic` prefix style |

---

## Chapter Structure

| Chapter | Folder | Files | Topics |
|---------|--------|-------|--------|
| 1 | `01_Chapter_Operators` | 10 | Equality, relational, ternary, logical, logical-assignment, optional-chaining, nullish, instanceof, `in`, All-operators |
| 2 | `02_Chapter_conditionstatement` | 17 | if/if-else/else-if/nested-if, switch, truthy-falsy, for/while/do-while/for-of/for-in, break/continue, labeled, nested, forEach→(moved), HTTP status codes |
| 3 | `03_Chapter_Arrays` | 21 | Basics, push/pop, shift/unshift, splice, slice, concat/spread, indexOf/includes, find/findIndex, filter, map, reduce, forEach, sort, some/every, flat/flatMap, fill/from, join/toString, destructuring, multidimensional, set-operations, chaining |
| 4 | `04_Chapter_Functions` | 11 | Declaration, expression, arrow, parameters, defaults, return, scope/closures, IIFE, callbacks, recursion, All |
| 5 | `05_Chapter_Strings` | 11 | Basics, concatenation, basic methods, search, replace/split, template literals, parse, comparison, padding/repeat, All |
| 6 | `06_Chapter_Objects` | 11 | Basics, methods, `this`, constructors, ES6 enhancements, destructuring, keys/values/entries, spread/assign, cloning, All |
| 7 | `07_Chapter_Numbers_Math` | 8 | Number basics, number methods, rounding, power/sqrt/abs, random, max/min, trig/constants, All |
| 8 | `08_Chapter_Dates` | 6 | Basics, getters, setters, formatting, calculations, All |
| 9 | `09_Chapter_ES6_Features` | 8 | let/const, template literals, destructuring, spread/rest, classes, modules, promises, All |

---

## Duplicates Removed

| Duplicate | Kept at | Removed from |
|-----------|---------|--------------|
| `forEach` | `03_Chapter_Arrays/03.12_array_forEach.js` | `02_Chapter_conditionstatement/02.17_array_forEach.js` |
| `ternary` | `01_Chapter_Operators/01.3_ternary_operator.js` | `02_Chapter_conditionstatement/02.6_ternary_operator.js` |

## Renames / Moves

- `Other/Other.js` → `02_Chapter_conditionstatement/02.16_http_status_codes.js` (switch example → belongs with conditions)
- `01_All_Operators1.js` → `01_Chapter_Operators/01_All_Operators.js` (dropped the "1", consistent with `02_All_*` naming)
- Chapter 2 files renumbered after the two deletions (`02.7_truthy_falsy` → `02.6_truthy_falsy`, loops shifted down)

---

## File Template (every example file)

```js
// =============================================
// Program: <TOPIC NAME>
// =============================================
// <Short explanation of what this program demonstrates>
// =============================================

// Example 1: <Title>
// ... code with console.log output and expected-result comments ...

// =============================================
// SUMMARY
// - <key takeaway 1>
// - <key takeaway 2>
// =============================================
```

### Rules
- Every file is **standalone** — run with `node <file>`
- Numbered examples: `Example N: <title>`
- Each example prints its output and annotates expected results in comments
- Summary footer lists the key takeaways
- ASCII banner separators `// ====...====`
- Blank `console.log("")` between examples for readable output

---

## Verification

- [x] Every file in the `Practice/` tree runs with `node` and exits 0
- [x] No leftover `01_All_Operators1.js`, `Other/` folder, or duplicate forEach/ternary
- [x] `JavaScript.md` chapter map updated with all 9 chapters
- [x] Two syntax errors found during verification and fixed:
  - `05.6_template_literals.js` — invalid backtick/`${` escaping
  - `06.6_object_destructuring.js` — duplicate `id` declaration in example 9

---

## How to Use This Document

- **Running any file:** `node 01.JavaScript-Learn/Practice/<chapter>/<file>.js`
- **Adding a new topic:** create `<NN>_<topic>.js` in the matching chapter using the template above, then run it with node.
- **Adding a new chapter:** create `NN_Chapter_<Topic>/` folder, add topic files plus an `NN_All_<topic>.js` overview, then update the chapter map in `01.JavaScript-Learn/JavaScript.md`.
- **Avoiding duplicates:** check the chapter map and the existing folders before creating a file — every topic belongs to exactly one chapter.
