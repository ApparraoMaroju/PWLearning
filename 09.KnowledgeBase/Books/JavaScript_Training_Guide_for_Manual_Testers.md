# JavaScript Training Guide for Manual Testers

> **From Zero to Automation-Ready JavaScript**
>
> A complete, beginner-friendly learning path designed specifically for **Manual Testers** who want to become **Automation Test Engineers** using Playwright, Cypress, Selenium, or WebdriverIO.

---

## How to Use This Guide

- **Read in order.** Every module builds on the previous one. Do not skip.
- **Type every example yourself.** Reading code is not learning. Typing is learning.
- **Run the code.** Install Node.js (explained in Module 1) and run examples with `node filename.js`.
- **Do the exercises.** There are exercises at the end of every topic. Do at least the beginner ones.
- **Do the quizzes.** There is a 10-question quiz at the end of every module.
- **Finish with the Final Project.** It combines everything you learned into one real automation-style project.

### What You Will Achieve

By the end of this guide you will be able to:

1. Read and write JavaScript code confidently.
2. Understand every line of code you see in automation frameworks.
3. Write your own test scripts, helper functions, and test data files.
4. Understand locators, assertions, async/await, and Page Object Model.
5. Move into any JavaScript-based automation framework with a strong foundation.

### Prerequisites

| You need | Do you have it? |
|----------|-----------------|
| Windows / macOS / Linux computer | Any is fine |
| A web browser (Chrome, Edge, Firefox) | Yes, you use one every day |
| Testing knowledge (bug reports, test cases, test scenarios) | Yes, you are a manual tester |
| Programming knowledge | **No — and that is OK! This guide starts from zero** |

### The Course Map (20 Modules)

| Module | Topic | What you will learn |
|--------|-------|---------------------|
| 1 | Introduction to Programming | What code is, JavaScript, Node.js, VS Code, first program |
| 2 | Variables | `let`, `const`, `var`, naming rules, scope |
| 3 | Data Types | Strings, numbers, booleans, `typeof`, conversions |
| 4 | Operators | Math, comparisons, logic, optional chaining |
| 5 | Conditional Statements | `if`, `else if`, `switch`, ternary |
| 6 | Loops | `for`, `while`, `do...while`, `break`, `continue` |
| 7 | Functions | Parameters, returns, arrow functions, callbacks |
| 8 | Objects | Properties, methods, `this`, nested objects |
| 9 | Arrays | `push`, `pop`, `map`, `filter`, `reduce` and more |
| 10 | Strings | All string methods for text validation |
| 11 | Numbers | Number methods, formatting, parsing |
| 12 | Dates | Date object, formatting, differences |
| 13 | Error Handling | `try`, `catch`, `finally`, `throw` |
| 14 | DOM Basics | What browsers show, elements, selectors, events |
| 15 | Asynchronous JavaScript | Callbacks, promises, `async`/`await`, Fetch API |
| 16 | Modern JavaScript (ES6+) | Destructuring, spread, modules, classes |
| 17 | File Handling | JSON and CSV for test data |
| 18 | Regular Expressions | Regex for validation and search |
| 19 | Best Practices | Clean code, debugging, console methods |
| 20 | JavaScript for Automation | Playwright, Cypress, Selenium, Page Object Model |

**Final Course Project:** A complete login-automation project with data-driven testing, written line by line.

---

# Module 1 – Introduction to Programming

Welcome to Module 1! This module answers the biggest question every manual tester asks first: **"What is programming, and can I really learn it?"**

The answer to the second question is: **Yes, absolutely.** You already have the most important skill — you think in steps. Writing a test case is thinking in steps. Programming is the same, but you write the steps for a computer.

### Topic 1.1 – What is Programming?

#### Definition

Programming is **giving a computer a list of instructions, in order, so it can do a job for you**.

A computer does not think like a human. It only does exactly what you tell it to do — nothing more, nothing less. Programming is the skill of writing those instructions in a language the computer understands.

#### Why Do We Need It?

Computers are extremely fast but completely dumb. They can repeat a task a million times without getting tired or bored, but they cannot guess what you want. Programming lets us:

- Automate repetitive work (exactly what testers want!).
- Make decisions (if this happens, do that).
- Process large amounts of data quickly.
- Turn our test scenarios into repeatable, reliable tests.

#### Real-Life Analogy

Think of programming like **a recipe for cooking**.

A recipe has steps: "1. Boil water. 2. Add pasta. 3. Cook for 10 minutes. 4. Drain." If you follow the steps in order, you get pasta. If you skip a step or change the order, the food may be ruined.

A program is the same: a recipe of instructions the computer follows in order.

#### Simple JavaScript Example

```javascript
console.log("Hello, I am a Manual Tester!");
console.log("Today I am learning to program.");
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `console.log("...")` | Asks JavaScript to print the text inside the parentheses to the screen |
| `"Hello, I am a Manual Tester!"` | The text we want to print. In programming, text is written inside quotes |
| `;` | The semicolon marks the **end of one instruction** (like a full stop at the end of a sentence) |

#### Automation Testing Example

Every automation test is a program. When you write a Playwright test, you are writing instructions:

```javascript
// Pseudo-code — this is what a test looks like in your head
openBrowser();
goToUrl("https://example.com/login");
typeText("username", "tester01");
clickButton("Login");
verifyText("Welcome");
```

This is programming! Each line is one instruction, and the computer follows them in order.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting quotes around text | Thinking text is like typing in Word | Remember: text (called a *string*) always needs quotes |
| Forgetting the semicolon | It seems unimportant | Most of the time JavaScript still works, but always add it for clean code |
| Expecting the computer to "understand" | We are used to humans understanding us | Be very specific. The computer only does what you literally write |

#### Memory Tip

> **"A program is a recipe. A computer is a very fast, very obedient cook."**

#### Practice Exercises

**Beginner:**
1. Write a program that prints your name.
2. Write a program that prints "I am learning JavaScript" and "I will be an automation engineer" on two lines.
3. Change the text in the example above and run it again. What happens if you remove the quotes?

**Intermediate:**
4. Print your name, your role (Manual Tester), and your goal — three separate lines.
5. Print the same text using three separate `console.log()` calls, then try printing it all in one call. Compare the output.

**Challenge:**
6. Print a small "welcome screen" using `console.log()`, with a `===` border around the text, like a banner.

#### Interview Questions

**Beginner:**
1. What is programming in simple words?
2. What does `console.log()` do?
3. Why does text need quotes in JavaScript?
4. What does the semicolon mean?
5. Is programming hard for someone without a computer science background?

**Intermediate:**
6. Why are instructions in a program executed in order?
7. What happens if you give a computer an instruction it does not understand?
8. How is writing a test case similar to writing a program?

**Scenario-Based:**
9. Your manager asks you to test the same login page with 50 different usernames. Explain how programming would help you do this faster.
10. A new tester says "computers are smart." How would you correct them using what you learned?

#### Quick Recap

- Programming = instructions given to a computer.
- Computers are fast but literal — they do only what you write.
- `console.log()` prints text to the screen.
- Text needs quotes. Instructions end with `;`.
- You already think in steps — programming just makes it formal.

---

### Topic 1.2 – What is JavaScript?

#### Definition

JavaScript is a **programming language** — a set of rules and words we use to write instructions for computers. It is one of the most popular programming languages in the world, and it is the language used by almost every web page you have ever visited.

#### Why Do We Need It?

JavaScript originally made web pages interactive (buttons that change color, popups, forms that check your input). Today it is used for:

- Building websites and web apps.
- Building **automation test frameworks** (Playwright, Cypress, Selenium with JS).
- Writing backend servers (Node.js).
- Automating tasks on your computer.

For testers, JavaScript is special: the tools we use are written in JavaScript, and we write our tests in JavaScript too.

#### Real-Life Analogy

Think of JavaScript as **English** and your computer as a **person from a different country**.

You cannot talk to that person in your own language — they will not understand. So you both agree to speak English. JavaScript is that common language between you (the tester) and the computer (and the browser).

#### Simple JavaScript Example

```javascript
let testResult = "PASS";
console.log("The test result is: " + testResult);
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `let testResult = "PASS";` | Creates a *variable* (a named box) called `testResult` and puts the text `"PASS"` inside it |
| `console.log(...)` | Prints to the screen |
| `"The test result is: " + testResult` | Joins fixed text with the value stored in the variable |

#### Automation Testing Example

Almost every modern automation tool supports JavaScript. In Cypress, your test looks like:

```javascript
cy.visit("https://example.com/login");   // open a page
cy.get("#username").type("tester01");    // find an element and type
```

Those `cy.` commands? They are JavaScript functions. You are already writing JavaScript when you write Cypress tests.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Confusing JavaScript with Java | Both have "Java" in the name | JavaScript = browsers/tests. Java = separate language for apps. See Topic 1.4 |
| Thinking JavaScript only works in browsers | Old knowledge | JavaScript also runs on servers with Node.js |
| Being afraid it is "too hard" | Fear, not fact | It is one of the friendliest languages for beginners |

#### Memory Tip

> **"JavaScript = the language of the web + the language of test automation."**

#### Practice Exercises

**Beginner:**
1. Write a program that prints the name of your favorite testing tool.
2. Print the sentence "JavaScript is used by Playwright, Cypress, and Selenium."
3. Try printing a number without quotes: `console.log(42);`. Then with quotes: `console.log("42");`. Notice the difference? (We explain why in Module 3.)

**Intermediate:**
4. Create a variable called `tool` with value `"Playwright"` and print `"I will learn Playwright"`.
5. Create two variables, `tool` and `company`, and print a sentence using both.

**Challenge:**
6. Write a program that prints three facts about JavaScript, each on its own line, using variables.

#### Interview Questions

**Beginner:**
1. What is JavaScript?
2. Where is JavaScript used?
3. Name two automation tools that use JavaScript.
4. What does `console.log` do?
5. Is JavaScript the same as Java?

**Intermediate:**
6. Why do testers need to learn JavaScript?
7. Can JavaScript run outside the browser? How?
8. Why is JavaScript called the "language of the web"?

**Scenario-Based:**
9. Your team uses Cypress for web automation. Why would learning JavaScript make you more valuable to the team?
10. A developer tells you JavaScript is a "real" programming language and testing is not real programming. How would you respond using what you know?

#### Quick Recap

- JavaScript is a programming language for the web and for test automation.
- Playwright, Cypress, Selenium (JS), and WebdriverIO all use JavaScript.
- Test scripts are JavaScript programs.
- JavaScript also runs outside browsers using Node.js.

---

### Topic 1.3 – Why JavaScript for Automation Testing?

#### Definition

JavaScript became the most popular choice for test automation because it is the **native language of the browser** — every browser already understands it perfectly, with no extra translation needed.

#### Why Do We Need It?

As a manual tester moving to automation, you have a choice of languages: Java, Python, C#, JavaScript. Here is why JavaScript wins for many teams:

- **One language everywhere** — test code, config files, and test data can all be JavaScript.
- **Fast feedback** — JavaScript test frameworks run quickly.
- **Huge community** — Playwright and Cypress are two of the most popular automation tools in the world, and both use JavaScript.
- **No compilation step** — you write a file and run it. No waiting for a build.
- **Same language as the frontend** — you can even test React/Vue/Angular apps more naturally.

#### Real-Life Analogy

Imagine you need a translator to talk to a person. Every translator adds delay and can make mistakes.

JavaScript is like **speaking the person's mother tongue directly** — the browser's mother tongue. No translator needed, so everything is faster and more reliable.

#### Simple JavaScript Example

```javascript
// Same test idea written in JavaScript — short and readable
const url = "https://example.com";
console.log("Opening: " + url);
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `const url = "..."` | Creates a fixed variable (one that cannot change) with the URL |
| `"Opening: " + url` | Joins text and variable value for display |

#### Automation Testing Example

Compare test code in Java vs JavaScript for the same action — "go to a page":

**Java + Selenium:**
```java
WebDriver driver = new ChromeDriver();
driver.get("https://example.com");
```

**JavaScript + Playwright:**
```javascript
await page.goto("https://example.com");
```

JavaScript code is noticeably shorter and reads almost like plain English — great for testers who want to focus on test logic, not boilerplate.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Thinking "more languages = better" | Not knowing the market | JavaScript covers most automation needs today |
| Confusing JavaScript and Node.js | Similar names | Node.js is the *program that runs* JavaScript outside the browser (Topic 1.7) |

#### Memory Tip

> **"JavaScript for automation = speak the browser's own language."**

#### Practice Exercises

**Beginner:**
1. List two automation frameworks that use JavaScript.
2. Write a program that prints "JavaScript makes test automation simpler."
3. Print a URL and the sentence "Opening page now" together.

**Intermediate:**
4. Create a variable `testName` and print it with a prefix "Running test: ".
5. Write a program that stores a username and prints a welcome message with it.

**Challenge:**
6. Write a program that prints a list of five JavaScript automation tools, one per line, using variables.

#### Interview Questions

**Beginner:**
1. Why is JavaScript popular for automation?
2. Name two JS-based automation tools.
3. Does JavaScript need compilation?
4. What is the "native language of the browser"?
5. Can you use JavaScript for API testing?

**Intermediate:**
6. What are the advantages of JavaScript over Java for testing?
7. Why is "no compilation step" an advantage for testers?
8. Where does JavaScript run in a test framework?

**Scenario-Based:**
9. Your company is deciding between a Java-based and a JavaScript-based test framework. What would you say in favor of JavaScript?
10. A developer says the frontend is built in React (a JavaScript framework). Why does that matter for your choice of test tool?

#### Quick Recap

- JavaScript is the browser's native language.
- It means faster, simpler, more readable test automation.
- Playwright, Cypress, Selenium(JS), WebdriverIO are JavaScript tools.
- No compilation = write and run.

---

### Topic 1.4 – JavaScript vs Java

#### Definition

Java and JavaScript are **two completely different programming languages** that only share part of a name. This confuses almost every beginner, so let us clear it up now.

| | Java | JavaScript |
|---|---|---|
| Full name | Java | JavaScript |
| Invented by | Sun Microsystems (James Gosling) | Netscape (Brendan Eich) |
| Runs in | Its own "virtual machine", apps, servers | Browsers and Node.js |
| Used for | Android apps, big enterprise systems | Web pages, web apps, test automation |
| Compilation | Needs compilation (translated first) | Runs directly, no compilation |
| Automation tools | Selenium (Java) | Playwright, Cypress, Selenium (JS) |
| Syntax feel | More formal, more words | Shorter, more relaxed |

#### Why Do We Need It?

You will see job descriptions, team discussions, and tutorials mixing these two words. Knowing the difference means:

- You choose the right tool for your team.
- You do not look confused in an interview.
- You understand documentation better.

#### Real-Life Analogy

Java and JavaScript are like **"Grape" and "Grapefruit"** — related names, but very different things. You would not ask for grapefruit juice when you wanted grape juice!

#### Simple JavaScript Example

```javascript
// JavaScript example
let browser = "Chrome";
console.log("Testing on " + browser);
```

#### Code Breakdown

The example creates a variable, stores a browser name, and prints it. Java would do the same job with more formal syntax:

```java
// Java example (same idea, more formal)
String browser = "Chrome";
System.out.println("Testing on " + browser);
```

Notice Java requires `String` (the data type) in front, and uses `System.out.println`. JavaScript keeps it shorter.

#### Automation Testing Example

In a job interview you may see:

- "Selenium with Java" — an older, very common stack.
- "Playwright with JavaScript/TypeScript" — modern, fast-growing stack.

Both are valid. Many companies are moving to JavaScript because tests are faster to write and maintain.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using Java tutorials to learn JavaScript | Same name | Follow JavaScript-specific tutorials |
| Putting JavaScript code in a Java project | Confusing the two | Check the file extension: `.js` = JavaScript, `.java` = Java |

#### Memory Tip

> **"Java is a grapefruit. JavaScript is a grape. Different fruit, same-sounding name."**

#### Practice Exercises

**Beginner:**
1. Write down two differences between Java and JavaScript.
2. Which one is used by Playwright?
3. Which one runs in the browser natively?

**Intermediate:**
4. Write the same "hello" program in JavaScript and describe how Java's version would look different.
5. Explain to a friend (in writing) why Java and JavaScript are not the same.

**Challenge:**
6. Create a small comparison table in your notes with 5 differences. This is a common interview question — your table is your revision card.

#### Interview Questions

**Beginner:**
1. Are Java and JavaScript the same?
2. Which language do Playwright and Cypress use?
3. Which language runs in browsers natively?
4. What does "compilation" mean, and does JavaScript need it?
5. Name one thing Java is commonly used for.

**Intermediate:**
6. Why might a company choose JavaScript over Java for automation?
7. What does the "virtual machine" of Java do, in simple terms?
8. Why is JavaScript sometimes called "the language of the web"?

**Scenario-Based:**
9. Your team currently uses Selenium with Java. Management asks if switching to Playwright with JavaScript makes sense. What factors would you consider?
10. A junior tester says "I'll learn Java first, then JavaScript will be easy." What is correct and incorrect about this idea?

#### Quick Recap

- Java and JavaScript are different languages with similar names.
- JavaScript: browser, Node.js, no compilation, test automation.
- Java: enterprise apps, Android, needs compilation.
- Playwright/Cypress = JavaScript. Selenium can be either.

---

### Topic 1.5 – How Browsers Execute JavaScript

#### Definition

A browser (Chrome, Edge, Firefox, Safari) is a program that reads web pages and shows them to you. Inside every browser there is a special engine — called a **JavaScript Engine** — whose only job is to read JavaScript code and execute (run) it, line by line.

#### Why Do We Need It?

Understanding this answers the question "where does my code actually run?" When your automation tool opens a browser, the browser runs the web app's JavaScript. When your test framework runs, Node.js runs your test's JavaScript. Knowing this helps you debug issues like "the button works in my browser but not in my test."

#### Real-Life Analogy

The JavaScript engine is like **a chef's assistant who reads recipes out loud**.

The recipe (your code) sits on the table. The assistant reads each line, and the kitchen (the browser) does the action. If a line says "add salt," the kitchen adds salt. If a line is confusing, the assistant stops and complains (that is an error!).

#### Simple JavaScript Example

```javascript
let a = 5;
let b = 3;
let total = a + b;
console.log(total);
```

#### Code Breakdown

| Line | What happens in the engine |
|------|---------------------------|
| `let a = 5;` | Creates variable `a` with value 5 |
| `let b = 3;` | Creates variable `b` with value 3 |
| `let total = a + b;` | Computes 5 + 3 and stores the result (8) |
| `console.log(total);` | Prints 8 to the console |

The engine works top to bottom, one line at a time. That is why the order of your lines matters.

#### Automation Testing Example

When a test fails with "element not found", it is often because the browser engine was still loading the page's JavaScript. The button did not exist *yet* when your test looked for it. This is why frameworks like Playwright have **auto-waiting** — they wait for the page to be ready. This concept connects directly to Module 15 (Asynchronous JavaScript).

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Thinking the browser is "one thing" | It is actually many parts working together | The JavaScript engine is just one part (like the engine in a car) |
| Putting a line before its data | Not realizing order matters | The engine reads top to bottom — define before you use |

#### Memory Tip

> **"The engine reads top to bottom, like a person reading a book."**

#### Practice Exercises

**Beginner:**
1. Write code that creates `x = 10`, `y = 2`, computes `x / y`, and prints the result.
2. Swap the two variable lines from the example — does the output change? Why not?
3. Try printing `total` *before* you define it. What error do you get?

**Intermediate:**
4. Create three variables, compute their sum, and print "The sum is: " plus the result.
5. Write code that uses one variable's value to update another, then prints both.

**Challenge:**
6. Write a program where line order truly matters (e.g., a variable used before definition causes an error). Explain in your own words what the error means.

#### Interview Questions

**Beginner:**
1. What runs JavaScript inside a browser?
2. In what order does JavaScript execute code?
3. What happens when the engine sees a line it cannot understand?
4. Which engine runs JavaScript in your tests? (Hint: it is not the browser!)
5. What does `let total = a + b;` do?

**Intermediate:**
6. Why might an automation test fail with "element not found" even though the button exists?
7. What is a JavaScript engine in simple terms?
8. Why does the order of lines matter in a program?

**Scenario-Based:**
9. A test passes when you run it manually in the browser but fails in automation. How would you explain this using what you learned about how browsers work?
10. Your test fails on the first run but passes on the second. What might be happening in the page's JavaScript execution?

#### Quick Recap

- Browsers contain a JavaScript engine that runs code line by line.
- Order of lines matters.
- Page JavaScript loading causes many "flaky" test failures.
- Frameworks auto-wait to handle this (more in Module 15).

---

### Topic 1.6 – Runtime Environment

#### Definition

A **runtime environment** is the place where your JavaScript code actually runs. It provides the code with useful tools (like the ability to print, read files, or access time) while it runs.

There are two main JavaScript runtimes:

1. **The Browser** — provides things like `document` (the web page) and `window`.
2. **Node.js** — provides things like `fs` (file system) and `process`.

#### Why Do We Need It?

Your automation tests run in **Node.js**, not in a browser. Playwright, Cypress, and WebdriverIO all run on Node.js. Knowing this helps you understand why some code works in the browser but not in Node (and vice versa).

#### Real-Life Analogy

The runtime is like **the building where you work**.

The building provides electricity, water, and desks (the tools). Your work (the code) needs those facilities. If you move to a different building, the facilities change — the browser building has "page access," the Node building has "file access."

#### Simple JavaScript Example

```javascript
// This runs in Node.js — it prints the version of Node you have
console.log(process.version);
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `process` | A special object Node.js gives you (it does not exist in browsers) |
| `process.version` | The Node.js version number as text |

Run this with `node filename.js`. If you tried to run `process` inside a browser, it would fail — browsers do not provide it.

#### Automation Testing Example

Test config files are often JavaScript files that run in Node.js:

```javascript
// playwright.config.js (a real configuration file)
module.exports = {
  use: {
    baseURL: "https://example.com",
    browserName: "chromium",
  },
};
```

Node.js reads this file, understands it, and uses the settings to run your tests.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using browser-only code in Node | Not knowing the two runtimes differ | Remember: browser = `document`, Node = `process`/`fs` |
| Thinking all JavaScript is the same everywhere | It is the language that is the same, not the tools | The language is shared; the runtime tools differ |

#### Memory Tip

> **"Browser is one room. Node.js is another room. JavaScript is the person who works in both."**

#### Practice Exercises

**Beginner:**
1. Run `console.log(process.version);` with Node.js and note the version printed.
2. Print `console.log(typeof process);` — what does it say?
3. Write a program that prints `"Running on Node.js"`.

**Intermediate:**
4. Try using `document` in Node.js (write `console.log(document);`). What error appears? Why?
5. In your own words, write a short note: "What is a runtime environment?"

**Challenge:**
6. Write a program that prints three things: the Node version, your operating system (`process.platform`), and a message "Node.js is running my automation."

#### Interview Questions

**Beginner:**
1. What is a runtime environment?
2. Name the two main JavaScript runtimes.
3. Where do Playwright and Cypress tests run?
4. What does `process.version` tell you?
5. Can you use `document` in Node.js?

**Intermediate:**
6. Why does browser-only code fail in Node.js?
7. What tools does the browser provide that Node does not, and vice versa?
8. Why do automation frameworks need Node.js?

**Scenario-Based:**
9. Your test framework crashes with "`document is not defined`". What is the likely cause and how would you fix it?
10. You want to read a test-data file from a test. Which runtime do you need and why?

#### Quick Recap

- Runtime environment = the place where code runs + the tools it provides.
- Browser runtime gives page tools; Node runtime gives file/system tools.
- Automation runs on Node.js.
- `process` belongs to Node. `document` belongs to browsers.

---

### Topic 1.7 – Node.js

#### Definition

**Node.js** (usually just called **Node**) is a program that lets you run JavaScript outside the browser — on your computer directly. You download it once, and then you can run JavaScript files with a simple command.

#### Why Do We Need It?

Almost every modern JavaScript automation tool needs Node.js:

- Playwright — installed with npm, runs tests with Node.
- Cypress — same.
- WebdriverIO — same.
- Your practice exercises — you will run every example in this guide with Node.

Without Node.js you cannot run a single JavaScript file on your computer.

#### Real-Life Analogy

Think of Node.js as **a small stage for actors (your scripts)**.

The browser is a big theatre. Node.js is a portable stage you can set up anywhere. The actors (JavaScript files) perform the same on either stage — but Node's stage has different props (file access, system access).

#### Simple JavaScript Example

```javascript
// hello.js — save this file, then run: node hello.js
console.log("Hello from Node.js!");
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `hello.js` | The file name. `.js` tells us it is JavaScript |
| `console.log("...")` | Prints text |
| `node hello.js` | The command that tells Node.js to run the file |

#### How to Install Node.js (Windows / macOS / Linux)

1. Go to the official website: `https://nodejs.org`
2. Download the **LTS** version (LTS = Long Term Support — the safe, stable version).
3. Run the installer and click "Next" until it finishes.
4. Open your terminal (Command Prompt on Windows, Terminal on macOS/Linux).
5. Check it worked:
   ```
   node --version
   ```
   You should see something like `v20.x.x`.

#### Automation Testing Example

When you create a Playwright project, the instructions say:

```
npm init playwright@latest
```

That command uses Node.js tooling (`npm`) to install Playwright. After that, you run tests with:

```
npx playwright test
```

Every command here is part of the Node.js world.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Installing the wrong version (non-LTS) | Not reading the site | Always pick LTS |
| Forgetting to check installation | Assuming it worked | Always run `node --version` after installing |
| Opening the wrong terminal folder | Confusion | Navigate to your project folder before running `node` |
| Skipping the installation | Fear of the unknown | It is safe and standard — every automation engineer has it |

#### Memory Tip

> **"Node.js = the engine that runs your JavaScript on your computer."**

#### Practice Exercises

**Beginner:**
1. Install Node.js on your computer.
2. Run `node --version` and write down the version.
3. Create a file `hello.js`, write `console.log("My first Node program!");`, and run `node hello.js`.

**Intermediate:**
4. Create a file that prints your name and your favorite testing tool, then run it.
5. Write a file with three `console.log` lines and run it. Then add a comment (`// this is a comment`) and run again — did the output change?

**Challenge:**
6. Write a Node program that prints the current Node version and a message telling the user "Node.js is working correctly."

#### Interview Questions

**Beginner:**
1. What is Node.js?
2. Why do automation testers need Node.js?
3. What does `node --version` do?
4. What does LTS mean?
5. How do you run a JavaScript file?

**Intermediate:**
6. What is the difference between JavaScript and Node.js?
7. Name three tools in this guide that need Node.js.
8. What is npm, and how is it related to Node.js? (Sneak preview of Topic 1.8)

**Scenario-Based:**
9. You install Node.js but `node --version` shows an error. What are your first three troubleshooting steps?
10. Your company's build machine (CI) needs to run tests. Why must Node.js be installed there too?

#### Quick Recap

- Node.js runs JavaScript on your computer, outside the browser.
- Install the LTS version, verify with `node --version`.
- Run files with `node filename.js`.
- All major JS automation tools run on Node.js.

---

### Topic 1.8 – npm

#### Definition

**npm** stands for **Node Package Manager**. It is a tool that comes with Node.js and lets you **install ready-made JavaScript libraries** (called *packages*) into your project. A package is a collection of code written by someone else that you can reuse.

#### Why Do We Need It?

You do not want to write everything from scratch. Playwright, Cypress, and all testing libraries are *packages*. npm lets you:

- Install them: `npm install playwright`
- Track them: keeps a list in a file called `package.json`
- Update them: `npm update`
- Share them: your whole team installs the same versions

#### Real-Life Analogy

npm is like **an app store for code**.

You do not build a calculator app from scratch on your phone — you download one from the app store. npm is the same: you download code packages (Playwright, Cypress, testing utilities) instead of writing them yourself.

#### Simple JavaScript Example

```javascript
// First, in your terminal, inside your project folder:
//   npm install playwright
// Then your project has Playwright available.
const { chromium } = require("playwright"); // ask Node for Playwright

(async () => {
  const browser = await chromium.launch();   // start a browser
  const page = await browser.newPage();      // open a new tab
  await page.goto("https://example.com");    // go to a URL
  await browser.close();                     // close the browser
})();
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `npm install playwright` | Downloads the Playwright package into your project |
| `require("playwright")` | Tells Node.js: "get me the Playwright code" |
| `chromium.launch()` | Starts a browser (Chromium) |
| `page.newPage()` | Opens a new tab |
| `page.goto(url)` | Navigates to a URL |
| `browser.close()` | Closes the browser |

> Do not worry about the `async/await` parts — that is Module 15. For now, just see the flow.

#### Automation Testing Example

This is how a real automation project starts. The sequence is always:

1. `npm init -y` → creates `package.json` (your project's identity card).
2. `npm install @playwright/test` → installs the test framework.
3. `npx playwright test` → runs your tests.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Running `npm install` in the wrong folder | Not checking location | Always be in the project folder first |
| Confusing `npm` and `npx` | Similar names | `npm` installs, `npx` runs packages quickly |
| Forgetting `package.json` | Not knowing why it exists | `npm init -y` creates it for you |
| Not re-running install after cloning | New machine/folder | After `git clone`, always run `npm install` |

#### Memory Tip

> **"npm = app store for code. npx = quick-run button for code."**

#### Practice Exercises

**Beginner:**
1. Create a folder called `my-first-automation`, go inside it, and run `npm init -y`. Open the `package.json` that appears.
2. Run `npm install playwright` in that folder.
3. Run `npm ls --depth=0` to see the installed packages.

**Intermediate:**
4. Explain in your own words what `package.json` is.
5. Write a small note: the difference between `npm install` and `npx`.

**Challenge:**
6. Install two packages (`playwright` and `lodash`), then uninstall `lodash` with `npm uninstall lodash`. Watch how `package.json` changes. This is exactly how you will manage test dependencies.

#### Interview Questions

**Beginner:**
1. What does npm stand for?
2. What is a package?
3. What file tracks your installed packages?
4. What command installs a package?
5. What does `npm init -y` do?

**Intermediate:**
6. What is the difference between `npm` and `npx`?
7. Why does every team member run `npm install` after pulling code?
8. What is in a `package.json` file?

**Scenario-Based:**
9. A new tester joins your team and their tests fail because of a missing package. What would you tell them to do?
10. Your tests worked yesterday but fail today after a teammate updated a package. What could have happened, and how would you investigate?

#### Quick Recap

- npm = package manager that comes with Node.js.
- Install packages with `npm install <name>`.
- `package.json` lists your project's packages.
- `npx` runs packages without installing them permanently.
- Automation tools are npm packages.

---

### Topic 1.9 – Visual Studio Code (VS Code)

#### Definition

**Visual Studio Code** (VS Code) is a free text editor — a program for writing code. It is the most popular editor among automation engineers because it is free, fast, and has powerful helpers.

#### Why Do We Need It?

You can write code in Notepad, but it would be painful. VS Code gives you:

- **Syntax highlighting** — code words appear in colors, so mistakes are visible.
- **Auto-completion** — it suggests words as you type.
- **Terminal** — run your Node commands without leaving the editor.
- **Extensions** — add features, like JavaScript and Playwright helpers.

#### Real-Life Analogy

Notepad is like **writing by hand**. VS Code is like **a smart word processor for code** — it checks your spelling, suggests words, and lets you run things from one place.

#### Simple Example (How to Use It)

1. Download from the official site: `https://code.visualstudio.com`
2. Install it (click Next until done).
3. Open VS Code.
4. Click **File → Open Folder** and choose your project folder.
5. Create a new file with **File → New File** and save it as `practice.js`.
6. Open the terminal: **Terminal → New Terminal**.
7. Type `node practice.js` and press Enter.

#### Code Breakdown

| Step | What it does |
|------|--------------|
| Open Folder | Connects VS Code to your project |
| `practice.js` | Your JavaScript file (`.js` extension) |
| New Terminal | Opens a command window inside VS Code |
| `node practice.js` | Runs your file |

#### Automation Testing Example

When you install the official **Playwright Test extension** in VS Code, you get a test browser panel: you can run a single test, see it fail or pass, and watch a video of it. This is the professional workflow used in real companies.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting the `.js` extension | Not paying attention to file type | Always save as `something.js` |
| Writing code but never running it | Fear of errors | Run early, run often. Errors are your teachers |
| Installing random extensions | Excitement | Start with just the basics (JavaScript + your test tool) |

#### Memory Tip

> **"VS Code = your code's home. Your terminal is the front door to run it."**

#### Practice Exercises

**Beginner:**
1. Install VS Code.
2. Create a folder, open it in VS Code, and create a file `hello.js`.
3. Run `node hello.js` from the VS Code terminal.

**Intermediate:**
4. Write a program with a deliberate error (e.g., missing a quote). Notice the red squiggly line. Fix it.
5. Use the auto-complete: type `console.` and see what VS Code suggests. What does this tell you?

**Challenge:**
6. Create a small "test log" program that prints three lines (test name, status, time) and run it. Then use the built-in terminal to run it a second time after editing the text.

#### Interview Questions

**Beginner:**
1. What is VS Code?
2. Why do programmers use it instead of Notepad?
3. How do you run a JavaScript file from VS Code?
4. What does syntax highlighting do?
5. Is VS Code free?

**Intermediate:**
6. What is an extension, and why would you install one for testing?
7. Why is the integrated terminal useful?
8. What is the Playwright Test extension used for?

**Scenario-Based:**
9. A teammate shares a project with you. Walk through the steps you would take to open it and run its tests using VS Code.
10. Your code has many small errors. How can VS Code help you find them before you even run the program?

#### Quick Recap

- VS Code = free, popular code editor.
- Gives colors, suggestions, and a built-in terminal.
- Always save files with `.js`.
- Run code with `node filename.js` in the terminal.

---

### Topic 1.10 – Running Your First JavaScript Program

#### Definition

This is your first real moment as a programmer: writing a complete JavaScript file and running it. We will do it together, slowly, step by step.

#### Why Do We Need It?

Every programmer's journey starts with a first running program. It proves the whole chain works: you write code → Node.js reads it → you see output. Once this works, every future example in this guide runs the same way.

#### Real-Life Analogy

This is like **starting a car for the first time** — you know the parts exist, but the first successful start proves everything works together. After that, driving (writing more code) gets easier.

#### Simple JavaScript Example

Create a file called `first-program.js`:

```javascript
// My very first JavaScript program
let name = "Manual Tester";
let goal = "Automation Test Engineer";

console.log("Hello, I am a " + name + ".");
console.log("My goal is to become a " + goal + ".");
```

Then, in the terminal, run:

```
node first-program.js
```

**Expected output:**
```
Hello, I am a Manual Tester.
My goal is to become a Automation Test Engineer.
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `// My very first...` | A comment. The computer ignores it. It is a note for humans |
| `let name = "Manual Tester";` | Creates a variable holding text |
| `let goal = "...";` | Creates a second variable |
| `console.log("Hello... " + name + ".")` | Prints text, joining it with the variable's value |
| `node first-program.js` | The command that runs the file |

> **A tiny detail:** "a Automation" sounds wrong in English. We can fix it by changing the sentence: `"My goal is to become an " + goal + "."` Notice the space before the closing quote — that is how we add spaces when joining text.

#### Automation Testing Example

This same pattern — variables + printing — becomes test logging in automation:

```javascript
let testName = "Login Test";
let result = "PASS";
console.log("Test: " + testName + " | Result: " + result);
```

Output:
```
Test: Login Test | Result: PASS
```

Real frameworks do exactly this internally when they report test results.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Running `node` in the wrong folder | File not found | Check the terminal shows your project folder |
| Missing spaces in joined text | `"a " + name` style thinking | Add spaces inside the quotes: `"a "` and `" "` |
| Getting `Error: Cannot find module` | Wrong file name | Check spelling and the `.js` extension |
| Panicking at errors | Fear of failure | Read the error. It always tells you the file and line |

#### Memory Tip

> **"Variables store. Console shows. Node runs."**

#### Practice Exercises

**Beginner:**
1. Run the first program above. Fix the "a Automation" grammar issue.
2. Change the `goal` value and run again.
3. Add a third variable, `company`, and print it.

**Intermediate:**
4. Write a program that prints your name, role, and company using variables, one per line.
5. Write a program that prints a passing test log: test name, status, and a message.

**Challenge:**
6. Write a "test report" program: three tests with names and results, printed one per line, with a border line of `===` at the top and bottom.

#### Interview Questions

**Beginner:**
1. What command runs a JavaScript file?
2. What is a comment, and does the computer read it?
3. What does `let` do?
4. What is the file extension for JavaScript?
5. What output do you expect from `console.log("Hi " + "there");`?

**Intermediate:**
6. Why do we add spaces inside quotes when joining text?
7. What does "Cannot find module" mean and how do you fix it?
8. Why is it a good habit to run your program after every small change?

**Scenario-Based:**
9. You write a program, save it, but `node` prints nothing. What are the first three things you check?
10. A teammate's program runs fine for them but not for you. What could differ between your machines?

#### Quick Recap

- First program: variables + `console.log`.
- Run with `node filename.js`.
- Comments start with `//` and are ignored by the computer.
- Errors are normal — read them, they guide you.
- This exact workflow powers every automation test you will run.

---

## Module 1 – Module Summary

In this module you learned:

- What programming is and why it is just "instructions for a computer."
- What JavaScript is and why it is perfect for test automation.
- The difference between JavaScript and Java.
- How browsers and Node.js execute JavaScript (via engines and runtimes).
- How to install Node.js, use npm, and set up VS Code.
- How to write and run your very first JavaScript program.

## Key Takeaways

- A program is a list of instructions executed top to bottom.
- JavaScript runs in browsers **and** on your computer via Node.js.
- Playwright, Cypress, and WebdriverIO are all JavaScript tools running on Node.js.
- npm installs packages; `package.json` tracks them.
- The workflow is always: write `.js` file → `node filename.js`.

## Cheat Sheet

| Command / Concept | What it does |
|-------------------|--------------|
| `node --version` | Shows your Node.js version |
| `node filename.js` | Runs a JavaScript file |
| `npm init -y` | Creates a `package.json` file |
| `npm install <package>` | Installs a package |
| `npx <command>` | Runs a package's command |
| `console.log(value)` | Prints a value |
| `// text` | A comment (ignored by computer) |
| `.js` | JavaScript file extension |

## Frequently Asked Questions (FAQs)

**Q1: Do I need a computer science degree to learn this?**
No. This guide starts from zero, and most automation engineers learn on the job.

**Q2: Which is better for testers — Java or JavaScript?**
Both work. JavaScript is easier to start with and is used by the fastest-growing test tools (Playwright, Cypress).

**Q3: Is Node.js the same as JavaScript?**
No. JavaScript is the language. Node.js is the program that runs it outside the browser.

**Q4: Do I need to be good at math?**
No. Automation uses simple math (plus, minus, comparison). If you can count, you can automate.

**Q5: What if my first program has errors?**
Errors are normal and are part of learning. The error message tells you the file and line — read it, fix it, run again.

**Q6: Why does `node` say "Cannot find module"?**
The file name or folder is wrong. Check the spelling and that you are in the right folder.

## Real Automation Examples

In real projects, the concepts from Module 1 appear like this:

```javascript
// 1. Variables store test inputs
const baseUrl = "https://example.com";
const username = "tester01";

// 2. console.log shows progress during test runs
console.log("Starting test on: " + baseUrl);

// 3. Node.js + npm are how the project is installed and run
// (commands, not code):
//   npm install @playwright/test
//   npx playwright test
```

## Mini Project

**Your First Test-Setup Program**

Create a file `project-info.js` that:

1. Stores your name, your tool (Playwright), and your goal in variables.
2. Prints a heading "=== My Automation Project ===".
3. Prints each value on its own line.
4. Prints a closing line of `===`.

Run it and confirm the output. This mirrors what a real project's config prints when tests start.

## Quiz (10 Questions)

**Q1.** What does a computer need to run a program?
- A) A human to guide it
- B) Instructions written in a language it understands
- C) An internet connection
- D) Visual Studio Code

**Q2.** Which of these runs JavaScript on your computer (outside a browser)?
- A) Chrome
- B) Node.js
- C) npm
- D) VS Code

**Q3.** What does `console.log("Hello")` do?
- A) Saves "Hello" to a file
- B) Prints "Hello" to the screen
- C) Asks the user a question
- D) Deletes "Hello"

**Q4.** Java and JavaScript are:
- A) The same language
- B) Two versions of the same language
- C) Different languages that share part of a name
- D) Both browser-only languages

**Q5.** What does npm do?
- A) Compiles JavaScript
- B) Installs and manages packages
- C) Runs tests in the browser
- D) Creates web pages

**Q6.** Which file lists your project's installed packages?
- A) `node.txt`
- B) `package.json`
- C) `settings.md`
- D) `hello.js`

**Q7.** Which command runs a file called `test.js`?
- A) `run test.js`
- B) `node test.js`
- C) `npm test.js`
- D) `js test.js`

**Q8.** A comment in JavaScript starts with:
- A) `##`
- B) `//`
- C) `<!--`
- D) `**`

**Q9.** Inside a browser, which engine runs JavaScript?
- A) The CSS engine
- B) The JavaScript engine
- C) The HTML engine
- D) The network engine

**Q10.** What is a runtime environment?
- A) A programming language
- B) The place where code runs, plus the tools it provides
- C) A type of computer
- D) A debugging tool

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | A computer executes instructions; it does not need humans to guide it step by step |
| 2 | B | Node.js runs JavaScript outside the browser |
| 3 | B | `console.log` prints to the screen |
| 4 | C | Similar names, completely different languages |
| 5 | B | npm = Node Package Manager |
| 6 | B | `package.json` tracks dependencies |
| 7 | B | `node test.js` runs a JS file |
| 8 | B | Comments start with `//` |
| 9 | B | The JavaScript engine executes JS code |
| 10 | B | Runtime = execution environment + provided tools |

---

> **You have completed Module 1. Great progress! In Module 2, you will learn how to store information in variables — the first building block of every program you will write.**

---

# Module 2 – Variables

In Module 1, you used `let` twice without a full explanation. Now we give variables the respect they deserve: they are the boxes where every program stores its information.

### Topic 2.1 – What is a Variable?

#### Definition

A **variable** is a named box in the computer's memory where you store a value (a number, text, true/false, and more). You give the box a name, and later you can read what is inside it or put something new in it.

#### Why Do We Need It?

Without variables, a program could not remember anything. You would have to type the same URL, username, and timeout value everywhere. Variables let you:

- Store test data (URLs, usernames, passwords).
- Change a value in one place and update the whole program.
- Pass information between different parts of a test.

#### Real-Life Analogy

A variable is like **a labeled box on a shelf**.

You write "Username" on the box and put a paper inside with `tester01`. Later, you open the box labeled "Username" and read the paper. If you want a different user, you swap the paper — the label stays the same.

#### Simple JavaScript Example

```javascript
let username = "tester01";
let timeout = 30;
console.log(username);
console.log(timeout);
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `let username = "tester01";` | Creates a box named `username` and puts the text `tester01` inside |
| `let timeout = 30;` | Creates a box named `timeout` and puts the number `30` inside |
| `console.log(username);` | Reads the box and prints its content (`tester01`) |

Notice: `30` has **no quotes** (it is a number), while `"tester01"` has quotes (it is text). We explain why in Module 3.

#### Automation Testing Example

```javascript
let url = "https://example.com/login";
let browserName = "chromium";
let waitTime = 10;

console.log("Testing on: " + browserName);
console.log("Opening: " + url);
console.log("Waiting up to " + waitTime + " seconds");
```

Every value here is something a test needs: where to go, on which browser, and how long to wait.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using a variable before creating it | Not remembering order | Create first, use later |
| Reusing `let` for the same name twice | Copy-paste habits | Use `let` once per name, or use `=` to update |
| Forgetting quotes on text | Mixing text and numbers | Text needs `"..."`. Numbers do not |

#### Memory Tip

> **"Variable = labeled box. `let` makes the box. `=` puts something inside. The name reads the box."**

#### Practice Exercises

**Beginner:**
1. Create a variable `myName` and print it.
2. Create `browser = "Chrome"` and `version = 131`, print both.
3. Create `timeout = 15` and print "Wait time is 15 seconds" using the variable.

**Intermediate:**
4. Create `testName`, `status`, and `duration`; print them in one sentence.
5. Store a URL in a variable, then print it twice (once plain, once with a prefix).

**Challenge:**
6. Create three variables and use them to build and print a sentence that reads naturally, e.g., "Running the Login Test in Chrome with a 15s timeout."

#### Interview Questions

**Beginner:**
1. What is a variable?
2. How do you create a variable?
3. What does the `=` sign do in a variable declaration?
4. Can a variable hold text? Can it hold a number?
5. What does `console.log(username)` print if `username = "tester01"`?

**Intermediate:**
6. Why are variables useful for automation tests?
7. What happens if you use a variable before creating it?
8. Why do we use meaningful names like `username` instead of `x`?

**Scenario-Based:**
9. Your test needs the same URL in 20 places. A teammate hardcoded the URL 20 times. Why is a variable better, and what happens when the URL changes?
10. You see `let waitTime = 10;` in a test. How would you explain it to a junior tester?

#### Quick Recap

- A variable is a named box storing a value.
- `let name = value;` creates a variable.
- Variables make code reusable and easy to update.
- Every automation test uses variables for URLs, credentials, and timeouts.

---

### Topic 2.2 – `let`

#### Definition

`let` is the modern way to create a variable that can **change** its value later. It is the recommended choice for values that change during a program.

#### Why Do We Need It?

Many values in a test change while the test runs: the current step number, a counter, the result so far. `let` gives you a variable you are allowed to update.

#### Real-Life Analogy

`let` is like **a whiteboard**.

You write "step 1" on it. Later you erase it and write "step 2." The board stays the same; the content changes. You are allowed to update it whenever you want.

#### Simple JavaScript Example

```javascript
let step = 1;
console.log("Step " + step);

step = 2;               // update the value — no 'let' this time!
console.log("Step " + step);
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `let step = 1;` | Creates the variable with value 1 |
| `step = 2;` | Updates the value to 2 (notice: no `let` — the box already exists) |
| `console.log("Step " + step);` | Prints the current value each time |

**Key rule:** Use `let` once (to create). Use just the name to update.

#### Automation Testing Example

```javascript
let attempt = 1;

// pretend this is a retry loop
attempt = attempt + 1;  // now 2
console.log("Retry attempt: " + attempt);
```

Retries, counters, and status flags are classic `let` values in automation.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Writing `let step = 2;` again instead of `step = 2;` | Not knowing the rule | `let` only creates. Update without `let` |
| Thinking `let` is required on every line | Copying patterns | Only the first creation needs `let` |

#### Memory Tip

> **"`let` creates the box. The bare name updates the box."**

#### Practice Exercises

**Beginner:**
1. Create `count = 0`, print it, set it to `5`, print again.
2. Create `attempt = 1`, add 1 to it, print "Attempt 2".
3. Create `step` and update it three times, printing each time.

**Intermediate:**
4. Create `retryCount = 0`, then write three lines that each add 1, printing after each.
5. Create `testResult = "PENDING"`, change it to `"PASS"`, and print a sentence with it.

**Challenge:**
6. Write a "counter" that goes 1 → 2 → 3, printing each step, and ends with "Test complete after 3 steps."

#### Interview Questions

**Beginner:**
1. What is `let` used for?
2. How do you update a variable created with `let`?
3. Can you use `let` twice with the same name?
4. What is stored in `step` after `step = 2;`?
5. Why do we call variables "changeable" with `let`?

**Intermediate:**
6. What is the difference between creating and updating a variable?
7. Give three test values that would change during a test run.
8. Why is a variable that changes useful for retry logic?

**Scenario-Based:**
9. A retry test needs to count attempts. Show how you would write it with `let`.
10. A junior tester writes `let x = 1; let x = 2;` and gets an error. Explain why.

#### Quick Recap

- `let` creates changeable variables.
- Create once with `let`, update with just the name.
- Use it for counters, retries, and changing test state.

---

### Topic 2.3 – `const`

#### Definition

`const` creates a variable whose value **cannot be changed** after creation. "const" is short for **constant** — a value that stays the same.

#### Why Do We Need It?

Some values must never change: a base URL, a fixed timeout, a constant like "PASS". Using `const`:

- Protects the value from accidental changes (a huge source of bugs!).
- Tells other people reading your code: "this value is fixed."
- Is the **default choice** in modern JavaScript — use `let` only when you really need to change it.

#### Real-Life Analogy

`const` is like **a printed sign on a door** — "Room 101."

You cannot erase and rewrite a printed sign. It is fixed. A sticky note (`let`) can be changed; the printed sign (`const`) cannot.

#### Simple JavaScript Example

```javascript
const maxTimeout = 60;
const baseUrl = "https://example.com";

console.log("Base URL: " + baseUrl);
console.log("Max timeout: " + maxTimeout + " seconds");
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `const maxTimeout = 60;` | Creates a fixed value |
| `const baseUrl = "...";` | Creates another fixed value |
| `console.log(...)` | Reads them — reading is always allowed |

If you try `baseUrl = "https://other.com";`, JavaScript throws an error: `TypeError: Assignment to constant variable.`

#### Automation Testing Example

```javascript
const baseUrl = "https://example.com";
const username = "tester01";   // fixed for this suite
const password = "Passw0rd!";

console.log("Logging in to " + baseUrl + " as " + username);
```

Test data that stays the same across many tests belongs in `const`.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Trying to update a `const` | Not knowing it is fixed | Ask: "will this change?" If yes → `let`. If no → `const` |
| Using `let` for everything | It feels safer | Best practice: start with `const`, switch to `let` only when needed |

#### Memory Tip

> **"`const` = constant = can't change. Ask 'will it change?' before choosing."**

#### Practice Exercises

**Beginner:**
1. Create a `const` with your name and print it.
2. Create `const appName = "My Test App"` and print it.
3. Try changing a `const` and run the program. Read the error message.

**Intermediate:**
4. Create a `const` URL and a `let` retry counter in the same program.
5. Write a program with three `const` values (url, user, timeout) and print them as a config summary.

**Challenge:**
6. Write a program that proves to yourself that `const` cannot change: try to change it, catch the error message in your notes, and explain the error in your own words.

#### Interview Questions

**Beginner:**
1. What does `const` mean?
2. Can you change a `const` value?
3. When should you use `const`?
4. What error do you get when changing a `const`?
5. Which is the default choice in modern JS: `let` or `const`?

**Intermediate:**
6. Why does using `const` prevent bugs?
7. What is the rule of thumb for choosing `const` vs `let`?
8. Give three automation values that should be `const`.

**Scenario-Based:**
9. A teammate changed a shared `baseUrl` mid-test and everything broke. What would you recommend?
10. You are writing a config file with values that never change. Which keyword do you use and why?

#### Quick Recap

- `const` = fixed value, cannot be reassigned.
- Default choice in modern JavaScript.
- Use `let` only when the value must change.

---

### Topic 2.4 – `var` (and why we avoid it)

#### Definition

`var` was the original way to create variables in JavaScript. It still works, but it has old behavior that causes bugs, so modern code avoids it.

#### Why Do We Need It?

You will see `var` in older tutorials, legacy code, and old projects. You need to recognize it and understand why new code uses `let`/`const` instead. The main problem is **scope** (Topic 2.7) — `var` ignores block scopes, which causes surprising behavior.

#### Real-Life Analogy

Imagine a "private note" (a variable) that is supposed to stay in your room (a block), but `var` is a note that escapes into the whole house. Any room can see and change it, which leads to confusion.

#### Simple JavaScript Example

```javascript
var oldWay = "I still work";
let modernWay = "I am scoped properly";

console.log(oldWay);
console.log(modernWay);
```

#### Code Breakdown

Both print fine. The difference shows when we look inside blocks (Module 5 teaches blocks). For now:

| Keyword | Can change? | Scope (where it lives) | Use it? |
|---------|-------------|------------------------|---------|
| `var` | Yes | Function-wide (too broad) | Legacy only |
| `let` | Yes | Block-wide (just right) | Yes, when changing |
| `const` | No | Block-wide | Yes, default |

#### Automation Testing Example

You will rarely see `var` in modern test frameworks. If you find it in old test code, you can safely change it to `let` or `const`:

```javascript
// Old code:
var driver = "Chrome";
// Modern replacement:
const driver = "Chrome";
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using `var` because a YouTube tutorial did | Following old content | Use `let`/`const` — they are the modern standard |
| Not knowing why `var` is bad | Missing the scope concept | Read Topic 2.7; scope explains it |

#### Memory Tip

> **"`var` = the old boss. `let`/`const` = the new, safer management."**

#### Practice Exercises

**Beginner:**
1. Write the same variable with `var`, `let`, and `const`. Does it run?
2. Change a `var` variable and print the new value.
3. In your own words, write why we prefer `let`/`const`.

**Intermediate:**
4. Convert three `var` examples into modern `const`/`let` code.
5. Search an old tutorial for `var` and rewrite its examples with `let`/`const`.

**Challenge:**
6. Write a short note (5 lines) titled "Why I will use let and const in my tests."

#### Interview Questions

**Beginner:**
1. What is `var`?
2. Is `var` still used today? Where might you see it?
3. What do we prefer instead of `var`?
4. Can you change a `var` value?
5. Is `var` a bug or just old style?

**Intermediate:**
6. Why do modern projects avoid `var`?
7. What is "scope" in one sentence?
8. How would you modernize `var userName = "a";`?

**Scenario-Based:**
9. You inherit old test code full of `var`. What is your plan?
10. A senior says "never use var." Do you agree? Justify with one reason.

#### Quick Recap

- `var` is the old keyword — it still works but has scope problems.
- Modern code uses `let` (changeable) and `const` (fixed).
- Recognize `var` when you see it; do not use it in new code.

---

### Topic 2.5 – Naming Rules

#### Definition

JavaScript has **rules** for what a variable name can be. It also has **conventions** (agreed habits) that make code readable.

#### Why Do We Need It?

A name like `x` means nothing. A name like `timeoutValue` tells everyone — including future you — exactly what is stored. Following rules prevents errors; following conventions prevents confusion.

#### Real-Life Analogy

Naming rules are like **license plate rules** — you cannot use any symbol. Conventions are like **readable street names** — "Maple Street" is better than "M1" for finding your way.

#### Simple JavaScript Example

```javascript
// GOOD names
let firstName = "Ravi";
let waitTime = 30;
let isLoginSuccessful = true;

// BAD names (these would be confusing or errors)
// let 2ndName = "x";      // cannot start with a number
// let my-name = "x";      // hyphen is not allowed
// let class = "x";        // reserved word, not allowed
```

#### Code Breakdown

**The rules:**

| Rule | Example of OK | Example of NOT OK |
|------|---------------|-------------------|
| Letters, digits, `$`, `_` allowed | `user1`, `$id`, `_temp` | `user-name` |
| Cannot start with a digit | `user1` | `1user` |
| No spaces | `fullName` | `full Name` |
| Cannot use reserved words | `myClass` | `class` |
| Case-sensitive | `Name` and `name` are different | `Name` ≠ `name` |

**The conventions (habits):**

- Use **camelCase**: first word lowercase, next words capitalized — `myTestName`, `timeoutValue`.
- Start with a letter.
- Use descriptive names: `waitTime`, not `w`.

#### Automation Testing Example

```javascript
const loginButtonSelector = "#login-btn";
const maxRetryCount = 3;
const isElementVisible = false;
```

These names read like sentences — perfect for test maintainability.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Starting a name with a number | Not knowing the rule | Start with a letter |
| Using hyphens | Habit from file names | Use camelCase or underscores |
| Using `Name` and `name` interchangeably | Not realizing case matters | Pick one spelling and be consistent |
| Short names like `a`, `x`, `y` | Speed | Use meaningful names — future you will thank you |

#### Memory Tip

> **"camelCase names that say what they store: `firstName`, `maxTimeout`, `isLoggedIn`."**

#### Practice Exercises

**Beginner:**
1. Write five good variable names for test data (e.g., username, password, url...).
2. Fix these bad names: `1stTest`, `my-test`, `class`, `first name`.
3. Create variables with your fixed names and print them.

**Intermediate:**
4. Write a program with five well-named variables describing a login test.
5. Rewrite a program that uses `a`, `b`, `c` into one with meaningful names.

**Challenge:**
6. Write a "naming checklist" — 5 rules + 3 conventions — and apply all of them to a new program you write.

#### Interview Questions

**Beginner:**
1. Can a variable name start with a number?
2. What is camelCase?
3. Are `Name` and `name` the same?
4. What characters are allowed in names?
5. Why do we avoid reserved words?

**Intermediate:**
6. Why is `maxRetryCount` better than `m`?
7. What is the difference between a rule and a convention?
8. Give three bad names and their good replacements.

**Scenario-Based:**
9. You find `let d = 30;` in a test. Why is this a maintainability problem?
10. Your test uses `let waitTime` and `let wait_time` for different values. Why is this risky?

#### Quick Recap

- Rules: letters/digits/`$`/`_`, no digit start, no spaces, no reserved words, case-sensitive.
- Convention: camelCase, descriptive names.
- Good names make tests readable and maintainable.

---

### Topic 2.6 – Best Practices for Variables

#### Definition

Best practices are **habits** experienced developers follow so that code stays clean, correct, and easy to change.

#### Why Do We Need It?

Tests are read far more often than they are written. A teammate (or future you) will read your test code to understand "what is this test checking?" Clear variable habits make that instant.

#### Real-Life Analogy

Think of your test code as **a handover document** when you leave for vacation. You want the next tester to understand everything without calling you. Clean variables = clear handover.

#### Simple JavaScript Example

```javascript
// Not so good
let x = 30;
let y = "abc";
let z = 5;

// Good practice
const defaultTimeout = 30;
const loginPageUrl = "https://example.com/login";
let maxRetryCount = 5;
```

#### Code Breakdown

**The habits:**

| Habit | Why |
|-------|-----|
| Use `const` by default | Prevents accidental changes |
| Use `let` only when changing | Signals "this will change" |
| Never use `var` | Old scope behavior |
| Declare at the top of the block | Easy to find all values |
| One variable per line | Readable, easier diffs |
| Meaningful names | Self-documenting code |
| Group related variables | e.g., all selectors together |

#### Automation Testing Example

```javascript
// Configuration block — clean and grouped
const baseUrl = "https://example.com";
const selectors = {
  loginButton: "#login-btn",
  usernameInput: "#username",
};

let retryCount = 0;
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Mixed naming styles | Copying from different sources | Stick to camelCase |
| Declaring far from use | Quick edits | Group declarations at the top |
| `let` everywhere | Fear of errors with `const` | `const` only fails when you try to change it — which you should not |

#### Memory Tip

> **"Default `const`. Change with `let`. Never `var`. Always meaningful."**

#### Practice Exercises

**Beginner:**
1. Review your last program. Which variables could be `const`?
2. Rename any short names (`x`, `y`) to meaningful ones.
3. Write a config block with three `const` values.

**Intermediate:**
4. Convert a messy program into a clean one using all five habits.
5. Write a note: "My 5 variable habits" and stick to them.

**Challenge:**
6. Take any example from this module and refactor it to perfect style. Explain each change in one line.

#### Interview Questions

**Beginner:**
1. What keyword should you use by default?
2. Why one variable per line?
3. What is a "self-documenting" name?
4. Where should declarations go?
5. Why group related variables?

**Intermediate:**
6. Why does "const by default" prevent bugs?
7. How does clean variable style help a team?
8. What is the cost of bad variable names?

**Scenario-Based:**
9. Your test fails and the only clue is a variable named `d`. What is the problem, and how do you prevent it next time?
10. Review this code and improve it: `let t = 10; let u = "user@example.com"; let p = "secret";`

#### Quick Recap

- `const` default, `let` for changes, no `var`.
- Meaningful camelCase names.
- Group and place declarations at the top.
- Clean variables = maintainable tests.

---

### Topic 2.7 – Variable Scope

#### Definition

**Scope** is the area of your program where a variable can be seen and used. A variable declared with `let`/`const` is only visible inside the **block** (the `{ }`) where it was created.

#### Why Do We Need It?

If every variable were visible everywhere, two parts of a program could accidentally change each other's values — causing impossible-to-find bugs. Scope keeps variables private to the place they belong.

#### Real-Life Analogy

Scope is like **a locker room key**.

Your key (variable) opens only your locker (block). Other people's keys cannot open your locker. Variables created inside a room stay inside that room.

#### Simple JavaScript Example

```javascript
{
  // this is a block
  let inside = "I am inside the block";
  console.log(inside);   // works
}
// console.log(inside);  // ERROR: inside is not defined
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `{ ... }` | Creates a block — a private room |
| `let inside = ...` | Creates a variable inside the block |
| `console.log(inside)` inside the block | Works — same room |
| `console.log(inside)` outside the block | **Error** — the variable does not exist there |

#### Automation Testing Example

In Playwright tests, each test is a block. Variables declared inside one test are not visible in another:

```javascript
test("first test", async () => {
  let pageTitle = "Login";
  // pageTitle is only valid here
});

test("second test", async () => {
  // pageTitle is NOT available here
});
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using a variable outside its block | Not knowing scope rules | Declare at the level where you need it |
| Thinking `var` is the same | `var` ignores blocks | Remember `var`'s old behavior — one more reason to avoid it |
| Declaring inside a loop, using after it | Misunderstanding loops | Declare outside the loop if needed after |

#### Memory Tip

> **"`{ }` is a room. `let`/`const` variables stay in their room. `var` walks through walls."**

#### Practice Exercises

**Beginner:**
1. Create a block with a variable and print it inside the block.
2. Try printing it after the block — read the error.
3. Create two blocks with the same variable name. Does that work? Why?

**Intermediate:**
4. Write a program with a variable outside a block and another inside — print both where valid.
5. Explain in writing: "What would happen if there were no scope?"

**Challenge:**
6. Write a program that deliberately uses a variable out of scope, note the exact error message, and fix it.

#### Interview Questions

**Beginner:**
1. What is scope?
2. Where is a `let` variable visible?
3. What is a block?
4. Can two blocks have a variable with the same name?
5. What error appears when using a variable out of scope?

**Intermediate:**
6. Why does scope prevent bugs?
7. How is `var` different in scope?
8. Why is a Playwright test like a block?

**Scenario-Based:**
9. A test declares a helper variable inside a `for` loop and then uses it after the loop — it fails. Explain why and fix it.
10. Two tests both use `let url` with different values. Is that a problem? Why or why not?

#### Quick Recap

- Scope = where a variable is visible.
- `let`/`const` are block-scoped (`{ }`).
- `var` ignores blocks (old behavior).
- Declare variables where you need them.

---

## Module 2 – Module Summary

You learned what variables are, how to create and update them, the difference between `let`, `const`, and `var`, how to name them well, and how scope controls where they live.

## Key Takeaways

- A variable is a named box storing a value.
- `const` by default; `let` when the value changes; never `var` in new code.
- Use descriptive camelCase names.
- `let`/`const` are block-scoped.
- Good variable habits make tests readable and maintainable.

## Cheat Sheet

| Concept | Syntax | Notes |
|---------|--------|-------|
| Create (changeable) | `let x = 1;` | Update with `x = 2;` |
| Create (fixed) | `const x = 1;` | Cannot reassign |
| Update | `x = 2;` | No `let`/`const` again |
| Old style | `var x = 1;` | Avoid in new code |
| Scope | `{ let x }` | Visible inside `{ }` only |
| Rules | camelCase, no digit start | Descriptive names |

## Frequently Asked Questions (FAQs)

**Q1: Can I use the same variable name twice?**
You can use `let` once per scope. Reusing the same name in a different block is allowed.

**Q2: What happens if I change a `const`?**
JavaScript throws `TypeError: Assignment to constant variable.`

**Q3: Why is `var` bad?**
Its scope ignores blocks, which causes surprising behavior. `let`/`const` fix this.

**Q4: Should variables be in English?**
Team-dependent, but English is the norm in code.

**Q5: What if I forget a semicolon?**
JavaScript often tolerates it, but add them for clean, predictable code.

**Q6: Can a variable name be `let`?**
No — reserved words cannot be names.

## Real Automation Examples

```javascript
const baseUrl = "https://example.com";
const adminUser = { username: "admin", password: "Admin@123" };

let retryCount = 0;
let isLoggedIn = false;

// typical test flow uses all of these
console.log("Opening " + baseUrl + " as " + adminUser.username);
```

## Mini Project

**Test Configuration Builder**

Write a program that:

1. Declares `const` values: base URL, browser name, default timeout.
2. Declares `let` values: retry count (0), current test name.
3. Prints a "configuration report" with all values.
4. Updates `retryCount` to 3 and prints the report again.

## Quiz (10 Questions)

**Q1.** Which keyword creates a changeable variable?
- A) `const`
- B) `let`
- C) `var`
- D) `fixed`

**Q2.** Which keyword creates a value that cannot change?
- A) `let`
- B) `change`
- C) `const`
- D) `static`

**Q3.** What happens when you reassign a `const`?
- A) Nothing
- B) The value updates
- C) An error is thrown
- D) A warning is printed

**Q4.** Which is the modern default choice?
- A) `const`
- B) `var`
- C) `let` always
- D) No keyword

**Q5.** Which name is NOT valid?
- A) `firstName`
- B) `1stName`
- C) `$name`
- D) `_temp`

**Q6.** What is camelCase for "max timeout"?
- A) `max_timeout`
- B) `maxtimeout`
- C) `maxTimeout`
- D) `MaxTimeout`

**Q7.** `var` is avoided because:
- A) It is slow
- B) Its scope ignores blocks
- C) It cannot change
- D) It cannot be printed

**Q8.** A variable declared inside `{ }` is visible:
- A) Everywhere
- B) Only inside that block
- C) Only in the browser
- D) Nowhere

**Q9.** How do you update `let count = 1;` to 2?
- A) `let count = 2;`
- B) `const count = 2;`
- C) `count = 2;`
- D) `var count = 2;`

**Q10.** Why use descriptive names?
- A) They run faster
- B) They make code readable
- C) They are required by Node
- D) They use less memory

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | `let` variables can change |
| 2 | C | `const` = constant, cannot change |
| 3 | C | Reassigning `const` throws an error |
| 4 | A | Modern default is `const` |
| 5 | B | Names cannot start with a digit |
| 6 | C | camelCase: `maxTimeout` |
| 7 | B | `var` ignores block scope |
| 8 | B | Block-scoped variables stay in their block |
| 9 | C | Update uses the bare name |
| 10 | B | Descriptive names = readable, maintainable code |

---

> **Module 2 done! Next up: Data Types — the kinds of values you can store in your variables.**

---

# Module 3 – Data Types

Every value in JavaScript has a **type**. A type tells JavaScript what kind of thing the value is — text, number, yes/no, or "nothing". Understanding types explains a huge number of "why is my test doing this?" moments.

### Topic 3.1 – What is a Data Type?

#### Definition

A **data type** is the kind of value stored in a variable. JavaScript has seven basic (primitive) types. The type decides what you can do with the value — for example, you can add numbers, but you cannot "add" two strings the same way.

#### Why Do We Need It?

- It explains why `"10" + 5` behaves differently from `10 + 5`.
- It helps you catch bugs: `"PASS"` is not the same as `true`.
- Automation tools constantly compare values — types matter in assertions.

#### Real-Life Analogy

Data types are like **containers of different shapes**.

A bottle holds liquid; a box holds objects; an envelope holds paper. Each container has a purpose. If you try to pour water into an envelope, it fails. JavaScript has different "containers" for different kinds of values.

#### Simple JavaScript Example

```javascript
let text = "Hello";        // string  (text)
let count = 42;            // number
let passed = true;         // boolean (true/false)
let nothing = undefined;   // undefined
let empty = null;          // null (empty)
console.log(text, count, passed, nothing, empty);
```

#### Code Breakdown

| Value | Type | What it stores |
|-------|------|----------------|
| `"Hello"` | string | Text |
| `42` | number | A number (no quotes!) |
| `true` | boolean | Yes/no |
| `undefined` | undefined | "No value was set" |
| `null` | null | "Intentionally empty" |

#### Automation Testing Example

```javascript
let elementText = "Submit";       // string — locator text
let waitTime = 10;                // number — wait seconds
let isVisible = false;            // boolean — element state
```

Assertions compare these values — "is the button text equal to 'Submit'?" — so types must match.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Putting numbers in quotes | Habit from typing | Numbers = no quotes |
| Thinking `"10"` and `10` are the same | They look the same | One is text, one is a number — see `typeof` (Topic 3.8) |
| Confusing `null` and `undefined` | Both mean "nothing" | `undefined` = not set; `null` = deliberately empty |

#### Memory Tip

> **"Quotes = text. No quotes = number or true/false."**

#### Practice Exercises

**Beginner:**
1. Create one variable of each basic type and print them.
2. Print the types of `"hi"`, `5`, and `true`.
3. Guess: what type is `5.5`? What type is `"5"`?

**Intermediate:**
4. Write a program with variables for element text, wait time, and visibility, and print a sentence using all three.
5. Explain in writing the difference between `"10"` and `10`.

**Challenge:**
6. Write a "test data card" program that stores and prints a test's name (string), duration (number), and status (boolean) together.

#### Interview Questions

**Beginner:**
1. What is a data type?
2. Name three basic data types.
3. Do numbers need quotes?
4. What type is `true`?
5. What is the difference between `null` and `undefined`?

**Intermediate:**
6. Why does type matter in automation assertions?
7. What happens if you add `"10" + 5`? (Hint: it is not 15!)
8. Why is `"42"` different from `42`?

**Scenario-Based:**
9. Your assertion compares the text "100" on the page with the number 100, and it fails. What is likely happening?
10. A test reads a value from an input field and tries to add 1 to it, getting "101" instead of 101. Explain the bug.

#### Quick Recap

- Data types describe what a value is.
- Main types: string, number, boolean, undefined, null (+ BigInt, Symbol).
- Quotes make text; no quotes makes numbers/booleans.
- Type mismatches cause confusing test failures.

---

### Topic 3.2 – String

#### Definition

A **string** is a sequence of characters (letters, numbers, symbols, spaces) wrapped in quotes. It represents **text**.

#### Why Do We Need It?

Test automation is mostly text: URLs, usernames, button labels, error messages, XPath strings, and CSS selectors are all strings. Almost everything you assert on is a string.

#### Real-Life Analogy

A string is like **a sentence written on a paper slip**.

The paper (the string) holds words exactly as written, including spaces and punctuation. You can read it, cut it, join it with other slips — but the content is always "text."

#### Simple JavaScript Example

```javascript
let firstName = "Ravi";
let message = 'Welcome to automation!';
let template = `Hello ${firstName}`;   // template literal — Module 3.10

console.log(message);
console.log(template);
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `let firstName = "Ravi";` | String with double quotes |
| `let message = 'Welcome...';` | String with single quotes (both are fine) |
| `let template = \`Hello ${firstName}\`;` | Backtick string that can insert variables with `${}` |
| `console.log(template);` | Prints `Hello Ravi` |

#### Automation Testing Example

```javascript
const url = "https://example.com/login";
const buttonText = "Login";
const xpath = "//button[contains(text(),'Login')]";

console.log("Button label is: " + buttonText);
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Mixing quote styles `"text'` | Not being careful | Pick one style and finish it |
| Forgetting to close a quote | Speed | Watch for syntax color changes in VS Code |
| Writing numbers as strings by mistake | Not thinking about type | Ask: "will I do math with this?" If yes, no quotes |

#### Memory Tip

> **"Anything in quotes is a string. Strings are text."**

#### Practice Exercises

**Beginner:**
1. Create three strings (double, single, backtick) and print them.
2. Print your name, your role, and a quote.
3. Create a string with a space and punctuation inside.

**Intermediate:**
4. Build a sentence by joining three strings with `+`.
5. Use a backtick template with `${}` to insert a variable.

**Challenge:**
6. Write a program that prints a multi-line message using a template literal (backticks allow real line breaks).

#### Interview Questions

**Beginner:**
1. What is a string?
2. Which quote styles can make a string?
3. What is a template literal?
4. Is `"123"` a number?
5. How do you join strings?

**Intermediate:**
6. Why are most automation values strings?
7. What is the difference between `"5" + 5` and `5 + 5`? (Preview of Topic 3.9.)
8. When would you use backticks over quotes?

**Scenario-Based:**
9. A page shows "Item count: 3". Is that a string or a number? How would you check?
10. Your locator needs a dynamic ID like `user_123` where 123 changes. How would you build it with a template literal?

#### Quick Recap

- Strings = text in quotes.
- Single, double, or backtick quotes.
- Backticks allow `${variable}` insertion.
- Most test values (URLs, labels, selectors) are strings.

---

### Topic 3.3 – Number

#### Definition

A **number** is a numeric value — whole numbers, decimals, negative values. In JavaScript, all numbers (including decimals) share one type called `number`.

#### Why Do We Need It?

Tests need numbers constantly: wait times in seconds, retry counts, page sizes, response status codes (200, 404), coordinates for screenshots.

#### Real-Life Analogy

Numbers are like **marks on a ruler**.

They measure things: 10 seconds, 3 retries, 200 (HTTP OK). Unlike text, you can do math with them.

#### Simple JavaScript Example

```javascript
let waitTime = 10;
let retryCount = 3;
let timeoutInSeconds = 30.5;   // decimal is fine
let temperature = -5;          // negative is fine

console.log(waitTime + retryCount);       // 13
console.log(timeoutInSeconds * 2);        // 61
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `let waitTime = 10;` | Whole number |
| `let timeoutInSeconds = 30.5;` | Decimal number |
| `let temperature = -5;` | Negative number |
| `waitTime + retryCount` | 10 + 3 = 13 — numbers can do math |

#### Automation Testing Example

```javascript
let httpStatus = 200;
let retryCount = 3;
let elementCount = 0;

console.log("API returned status " + httpStatus);
console.log("Retrying... attempts left: " + (retryCount - 1));
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Quoting numbers | "Everything needs quotes" | Numbers only in quotes when they are part of text |
| Doing math on quoted numbers | `"3" + 1` gives `"31"` | Convert first (Topic 3.9) |
| Expecting exact decimals | JavaScript float behavior | `0.1 + 0.2` is `0.30000000000000004` — it is normal, not a bug in your code |

#### Memory Tip

> **"Numbers think in math. Strings think in text. `"3" + 1` = `"31"`, not 4."**

#### Practice Exercises

**Beginner:**
1. Create a whole number, a decimal, and a negative number; print them.
2. Add two numbers and print the result.
3. Multiply `timeout * 2` and print it.

**Intermediate:**
4. Compute the total retry time: `retries * waitSeconds` and print it.
5. Print the result of `10 / 4` and `10 % 4`. What is `%`? (Preview of Module 4.)

**Challenge:**
6. Write a program that computes how many tests can run in 60 minutes if each takes 2.5 minutes.

#### Interview Questions

**Beginner:**
1. What is a number in JavaScript?
2. Can numbers be negative?
3. Can numbers have decimals?
4. What is `10 + 5`?
5. Do numbers need quotes?

**Intermediate:**
6. What is the difference between `3` and `"3"`?
7. What happens with `"5" * 2`? (Fun fact: JavaScript converts it to 10 — we cover this in 3.9.)
8. Why is `0.1 + 0.2` not exactly 0.3?

**Scenario-Based:**
9. Your retry logic has `let attempts = "3";` and subtracts 1, getting "31". Diagnose the bug.
10. An API returns status as a string `"200"`. Your assertion expects number 200. What could you do? (Answer after 3.9.)

#### Quick Recap

- Numbers = math-capable values, no quotes.
- Whole, decimal, negative all supported.
- Never quote a value you will do math on.
- Watch for JavaScript's floating-point quirk.

---

### Topic 3.4 – Boolean

#### Definition

A **boolean** is a value that is only ever one of two things: `true` or `false`. It represents a yes/no answer.

#### Why Do We Need It?

Tests are full of yes/no questions: Is the element visible? Did login succeed? Is the popup open? Booleans store these answers and drive decisions (Module 5).

#### Real-Life Analogy

A boolean is **a light switch**: on (`true`) or off (`false`). There is no third option. That is what makes booleans so clean and predictable.

#### Simple JavaScript Example

```javascript
let isLoggedIn = true;
let isElementVisible = false;

console.log(isLoggedIn);      // true
console.log(isElementVisible); // false
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `let isLoggedIn = true;` | Stores the answer "yes" |
| `let isElementVisible = false;` | Stores the answer "no" |
| `console.log(isLoggedIn);` | Prints `true` |

**Naming convention:** booleans usually start with `is`, `has`, `can`, or `should` — `isVisible`, `hasError`, `canRetry`.

#### Automation Testing Example

```javascript
let isLoginSuccess = true;
let hasErrorMessage = false;

if (isLoginSuccess) {
  console.log("Test step passed");
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Writing `true` with quotes | `"true"` is a string! | No quotes for booleans |
| Using 1/0 instead of true/false | Old habits | JavaScript allows it, but `true`/`false` is clearer |
| Naming without `is`/`has` | Not following convention | Prefix boolean names with `is`/`has`/`can` |

#### Memory Tip

> **"Boolean = light switch. Only `true` or `false`. Name it with `is`/`has`."**

#### Practice Exercises

**Beginner:**
1. Create `isVisible = true` and `isEnabled = false`, print both.
2. Print `typeof true`.
3. Change `isVisible` to `false` and print again.

**Intermediate:**
4. Create three booleans describing a test (isLoggedIn, hasError, canRetry) and print a summary.
5. Write a program that prints "Login successful" when `isLoggedIn` is true (using `if` — preview of Module 5).

**Challenge:**
6. Write a boolean "state machine": start with `isRunning = true`, then flip it to false, printing the state after each change.

#### Interview Questions

**Beginner:**
1. What is a boolean?
2. What are the two boolean values?
3. What type is `true`?
4. What is `"true"` — a string or a boolean?
5. How do we usually name booleans?

**Intermediate:**
6. Why do we use `is`/`has` prefixes?
7. Where are booleans used in automation?
8. What is the difference between `true` and `"true"`?

**Scenario-Based:**
9. You need to check if a popup is open before clicking. What boolean would you use?
10. A test uses `1` and `0` instead of true/false. Why is that less readable?

#### Quick Recap

- Boolean = `true` or `false` only.
- No quotes.
- Name with `is`/`has`/`can`.
- Booleans drive test decisions.

---

### Topic 3.5 – Undefined

#### Definition

`undefined` is the value JavaScript gives a variable that was **declared but never given a value**. It means "not set yet."

#### Why Do We Need It?

JavaScript automatically sets variables to `undefined` when you create them without a value. Knowing this helps you understand why some test data "is empty" and why comparisons fail unexpectedly.

#### Real-Life Analogy

`undefined` is like **an empty box with a label but no contents**.

The box exists (the variable), but nobody has put anything inside it yet. It is not "zero" and not "empty text" — it is "nothing has been put here."

#### Simple JavaScript Example

```javascript
let result;                    // declared, no value
console.log(result);           // prints: undefined
console.log(typeof result);    // prints: undefined
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `let result;` | Creates a variable with no value — JavaScript sets it to `undefined` |
| `console.log(result);` | Prints `undefined` |
| `console.log(typeof result);` | The type is also `undefined` |

#### Automation Testing Example

If a test reads a config value that was never set, you get `undefined`:

```javascript
let screenshotFolder;          // forgot to set it!
console.log("Saving to: " + screenshotFolder);
// prints: Saving to: undefined
```

This "undefined in my text" symptom is very common and now you know its cause.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Confusing `undefined` with `null` | Both "empty" | `undefined` = never set; `null` = set to empty on purpose (3.6) |
| Forgetting to assign a value | Rushing | Always set a value when declaring |
| Testing `=== undefined` instead of checking the value | Wrong comparison | Check what you actually need |

#### Memory Tip

> **"`undefined` = a labeled box with nothing put inside yet."**

#### Practice Exercises

**Beginner:**
1. Declare a variable without a value and print it.
2. Print `typeof` of that variable.
3. Now give it a value and print again.

**Intermediate:**
4. Write a program where a variable stays `undefined`, and print a sentence showing "value: undefined".
5. Explain in writing the difference between `undefined` and `0`.

**Challenge:**
6. Write a program that intentionally produces `undefined` and then fixes it by assigning a value, printing both states.

#### Interview Questions

**Beginner:**
1. What is `undefined`?
2. When does a variable become `undefined`?
3. What does `console.log(undefined)` print?
4. Is `undefined` the same as `null`?
5. What is the type of `undefined`?

**Intermediate:**
6. Why do you sometimes see "undefined" inside printed text?
7. How would you avoid an accidental `undefined` config value?
8. What does `typeof result` return for an unset variable?

**Scenario-Based:**
9. A test prints "Config value: undefined". What happened and how do you fix it?
10. A teammate says "I'll use null and undefined the same way." What do you tell them?

#### Quick Recap

- `undefined` = variable declared but not assigned.
- It is a real value and a real type.
- Symptoms: "undefined" appears in your output.
- Fix: assign a value.

---

### Topic 3.6 – Null

#### Definition

`null` is a value that means **"intentionally empty"**. A developer sets a variable to `null` on purpose to say "this has no value right now."

#### Why Do We Need It?

Sometimes a test has no value to store yet: no screenshot path, no error message. Setting `null` is an honest, explicit way to say "empty on purpose," unlike `undefined`, which means "was never set."

#### Real-Life Analogy

`null` is like **an empty carton labeled "Milk — empty"**.

Someone deliberately marked it empty. `undefined`, by contrast, is a carton with no label at all. Both hold no milk, but the intent is different.

#### Simple JavaScript Example

```javascript
let errorMessage = null;       // no error yet — intentionally empty
console.log(errorMessage);     // prints: null
console.log(typeof errorMessage); // prints: object (a historical quirk!)
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `let errorMessage = null;` | Sets an explicitly empty value |
| `console.log(errorMessage);` | Prints `null` |
| `console.log(typeof errorMessage);` | Prints `object` — this is an old JavaScript quirk, just remember it |

#### Automation Testing Example

```javascript
let screenshotPath = null;     // no screenshot taken yet
// ... later in the test ...
screenshotPath = "shots/login-01.png";
console.log("Saved to " + screenshotPath);
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using `null` when you mean `undefined` | Confusing both "empties" | `null` = deliberate; `undefined` = never set |
| Checking `null` with `==` vs `===` | Loose vs strict comparison | Use `===` (Module 4 explains) |
| Expecting `typeof null` to be `null` | It is a quirk | It returns `object` — memorize it |

#### Memory Tip

> **"`null` = deliberately empty box. `undefined` = box nobody touched."**

#### Practice Exercises

**Beginner:**
1. Create `let message = null;` and print it.
2. Print `typeof null`.
3. Set `message = "Error: login failed"` and print again.

**Intermediate:**
4. Write a program that starts `screenshotPath = null` and fills it later.
5. Compare in writing: `null` vs `undefined`.

**Challenge:**
6. Write a program that prints both `null` and `undefined` and their types, and add a comment explaining the difference.

#### Interview Questions

**Beginner:**
1. What is `null`?
2. What is the difference between `null` and `undefined`?
3. What does `typeof null` return?
4. When would you set a value to `null`?
5. Is `null` the same as an empty string `""`?

**Intermediate:**
6. Why is `null` described as "intentional"?
7. What is the historical quirk of `typeof null`?
8. Why might a test initialize a path to `null`?

**Scenario-Based:**
9. A test initializes `errorMessage = null`. Explain the intent to a junior tester.
10. A bug report says a field "shows null." Could that be a string `"null"` instead? How would you check?

#### Quick Recap

- `null` = intentionally empty.
- `undefined` = never assigned.
- `typeof null` returns `object` (quirk — memorize it).
- Both are falsy values (more in Module 5).

---

### Topic 3.7 – BigInt and Symbol

#### Definition

**BigInt** is a type for numbers too big for the regular `number` type (larger than 2^53). **Symbol** is a type for creating unique, un-repeatable values (like unique IDs).

#### Why Do We Need It?

These two are less common in daily test automation, but you should recognize them:

- **BigInt:** when APIs return very large IDs (like social security numbers or order numbers) that exceed safe number limits.
- **Symbol:** mostly used internally by libraries to create unique keys. You will rarely create Symbols yourself.

#### Real-Life Analogy

- **BigInt** is like a **very long ruler** for measuring distances a normal ruler cannot.
- **Symbol** is like a **unique serial number** — no two identical ones exist in the world.

#### Simple JavaScript Example

```javascript
let bigNumber = 123456789012345678901234567890n;  // note the n
let uniqueId = Symbol("order");

console.log(typeof bigNumber);   // bigint
console.log(typeof uniqueId);    // symbol
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `123...890n` | A BigInt — the `n` at the end marks it |
| `Symbol("order")` | Creates a unique symbol with a description |
| `typeof` | Confirms the types |

#### Automation Testing Example

```javascript
// API returns very large order IDs — BigInt keeps them exact
let orderId = 987654321098765432109876543210n;
console.log("Order ID: " + orderId);
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting the `n` | Not knowing BigInt syntax | BigInt literals end with `n` |
| Mixing BigInt and number in math | `1n + 1` fails | Convert explicitly (Module 3.9) |
| Trying to create two equal Symbols | Misunderstanding | `Symbol("a") !== Symbol("a")` — always unique |

#### Memory Tip

> **"BigInt = big numbers with an `n`. Symbol = unique stamp, never duplicated."**

#### Practice Exercises

**Beginner:**
1. Create a BigInt and print its type.
2. Create two Symbols and compare them with `===` (print the result).
3. Print `typeof 123n`.

**Intermediate:**
4. Write a note: when would you use BigInt?
5. Add a BigInt and a regular number — what error appears? (Then read 3.9 for the fix.)

**Challenge:**
6. Write a program that prints a large order ID with BigInt and explains why a normal number would lose precision.

#### Interview Questions

**Beginner:**
1. What is BigInt for?
2. How do you write a BigInt?
3. What is Symbol for?
4. Are two Symbols with the same description equal?
5. What are the two "extra" primitive types?

**Intermediate:**
6. Why does `12345678901234567890` lose precision as a normal number?
7. When would you meet Symbols in real code?
8. Can BigInt and number be added directly?

**Scenario-Based:**
9. An API returns an order ID of 30 digits. Why would you choose BigInt?
10. A library uses Symbols for internal keys. Why do you think that is useful?

#### Quick Recap

- BigInt = huge numbers, written with `n`.
- Symbol = unique values, never equal to each other.
- Both are rare in day-to-day automation but good to recognize.

---

### Topic 3.8 – The `typeof` Operator

#### Definition

`typeof` is an operator that tells you **what type** a value has. You hand it a value, and it returns a string naming the type.

#### Why Do We Need It?

- Debugging: "why is my assertion failing?" → check the type.
- Validation: "is this value a string or a number?"
- Understanding APIs: "what did the server actually return?"

#### Real-Life Analogy

`typeof` is like **a label checker** in a warehouse.

You point at a box and it prints the label: "String", "Number", "Boolean"... You never open the box — you just read its label.

#### Simple JavaScript Example

```javascript
console.log(typeof "hello");   // string
console.log(typeof 42);        // number
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object  (quirk!)
console.log(typeof 10n);       // bigint
console.log(typeof Symbol());  // symbol
console.log(typeof [1, 2, 3]); // object (arrays — Module 9)
```

#### Code Breakdown

| Line | Returns |
|------|---------|
| `typeof "hello"` | `"string"` |
| `typeof 42` | `"number"` |
| `typeof true` | `"boolean"` |
| `typeof null` | `"object"` — the famous quirk |
| `typeof [1,2,3]` | `"object"` — arrays are objects internally |

#### Automation Testing Example

```javascript
let valueFromPage = "3";           // element text is always a string
if (typeof valueFromPage === "string") {
  console.log("Yes, it's text. I must convert before math.");
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Expecting `typeof null` to be `"null"` | Not knowing the quirk | It returns `"object"` |
| Forgetting that arrays are "object" | Intuition says "array" | Use `Array.isArray()` (Module 9) |
| Checking types with `==` | Loose comparison | Use `=== "string"` etc. |

#### Memory Tip

> **"`typeof` reads the label. Remember the two surprises: `null` → `object`, arrays → `object`."**

#### Practice Exercises

**Beginner:**
1. Print the type of: your name, 25, true, undefined, null.
2. Print the type of `"25"` and explain the result.
3. Print `typeof typeof 5` — a fun trick. What do you get?

**Intermediate:**
4. Write a program that checks if a value is a string and prints an appropriate message.
5. Write a mini "type report" that prints five values and their types.

**Challenge:**
6. Write a program that logs the types of all seven primitive values, with comments predicting each result first.

#### Interview Questions

**Beginner:**
1. What does `typeof` do?
2. What does `typeof "abc"` return?
3. What does `typeof null` return?
4. What does `typeof [1,2]` return?
5. How do you check a type in JS?

**Intermediate:**
6. Why is `typeof null` `"object"`?
7. How would you detect an array, given `typeof` says "object"?
8. Why does type checking matter before doing math on page text?

**Scenario-Based:**
9. A value from an API has `typeof` "string" but you expected a number. What do you do?
10. An assertion fails mysteriously. How can `typeof` help your debugging?

#### Quick Recap

- `typeof` returns the type name as a string.
- Surprises: `null` → "object", arrays → "object".
- Use it for debugging and validation.

---

### Topic 3.9 – Type Conversion

#### Definition

**Type conversion** is changing a value from one type to another — for example, turning the string `"3"` into the number `3`, or the number `3` into the string `"3"`.

#### Why Do We Need It?

This is one of the most practical topics for testers:

- Page text is always a string — you convert it to do math.
- You print numbers — which converts them to strings automatically.
- APIs return strings even for numbers — you convert before comparing with `===`.

#### Real-Life Analogy

Type conversion is like **exchanging currency**.

You have dollars (number) but the shop only takes euros (string). You exchange at the bank. JavaScript has exchange counters: `Number()`, `String()`, `Boolean()`.

#### Simple JavaScript Example

```javascript
let price = "42";                    // string
let priceNumber = Number(price);     // now a real number 42
let priceText = String(priceNumber); // back to "42"

console.log(priceNumber + 8);        // 50  (math!)
console.log(priceText + 8);          // "428" (text join!)
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `Number(price)` | Converts `"42"` → `42` |
| `String(priceNumber)` | Converts `42` → `"42"` |
| `priceNumber + 8` | 42 + 8 = **50** (numbers add) |
| `priceText + 8` | `"42" + 8` = **"428"** (string joins) |

Other common conversions:

| Convert | Syntax | Example |
|---------|--------|---------|
| To number | `Number(value)` | `Number("10")` → 10 |
| To integer | `parseInt(value)` | `parseInt("10px")` → 10 |
| To decimal | `parseFloat(value)` | `parseFloat("3.14")` → 3.14 |
| To string | `String(value)` | `String(10)` → `"10"` |
| To boolean | `Boolean(value)` | `Boolean(0)` → false |

#### Automation Testing Example

```javascript
let countText = await page.textContent("#cart-count"); // "3" (string!)
let count = Number(countText);                          // 3 (number)
if (count > 0) {
  console.log("Cart is not empty");
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Doing math on page text | Text is a string | `Number(text)` first |
| Using `+` to convert | `+"3"` works but confuses | Use explicit `Number()` |
| Converting `"abc"` to number | It fails | `Number("abc")` → `NaN` (Not a Number — Module 4) |

#### Memory Tip

> **"`Number()` for math, `String()` for text, `Boolean()` for truth. Page text is always a string."**

#### Practice Exercises

**Beginner:**
1. Convert `"10"` to a number and add 5. Print the result.
2. Convert `10` to a string and add `"5"`. Print the result.
3. Print `Number("abc")` — what do you get?

**Intermediate:**
4. Write a program that reads a "price" as text, converts it, and calculates a 10% discount.
5. Convert `true` to a string and to a number. Print both.

**Challenge:**
6. Write a "conversion table" program that shows `Number()`, `parseInt()`, `parseFloat()`, and `String()` on the same input, one per line.

#### Interview Questions

**Beginner:**
1. What is type conversion?
2. How do you convert a string to a number?
3. What does `Number("10")` return?
4. What does `"10" + 5` return, and why?
5. What is `parseInt`?

**Intermediate:**
6. Why is page text always a string in automation?
7. What is the difference between `parseInt` and `parseFloat`?
8. What does `Number("hello")` return?

**Scenario-Based:**
9. A cart count reads "3" but your check `count === 3` fails. Fix it.
10. An API returns "200" as a string. You must assert `status === 200`. What are your options?

#### Quick Recap

- Convert with `Number()`, `String()`, `Boolean()`.
- `parseInt`/`parseFloat` for parsing.
- Math on strings → string-join surprises.
- Convert before strict comparison.

---

### Topic 3.10 – Template Literals

#### Definition

**Template literals** are strings written with **backticks** (`` ` ``) that let you insert variables directly using `${}` — no `+` needed. They also allow real multi-line text.

#### Why Do We Need It?

- Cleaner, more readable strings.
- Easy dynamic values (IDs, URLs, messages).
- Multi-line text without `\n` tricks.
- This is the **modern standard** — you will see it in all test framework examples.

#### Real-Life Analogy

Template literals are like **a fill-in-the-blank form**.

The form says: "Hello, ____!" and you fill the blank with your name. `${name}` is the blank; the variable fills it.

#### Simple JavaScript Example

```javascript
let name = "Ravi";
let testName = "Login Test";

console.log(`Hello ${name}, running: ${testName}`);
// Hello Ravi, running: Login Test
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `` ` `` | Backtick — starts/ends a template literal |
| `${name}` | Inserts the value of `name` |
| Anything else | Plain text, kept as-is |

**Multi-line example:**

```javascript
let report = `Test: ${testName}
Status: PASS
Time: 3.2s`;
console.log(report);
```

#### Automation Testing Example

```javascript
const username = "tester01";
const orderId = 1042;

// Dynamic locator — the classic automation use case
const locator = `#order-${orderId}`;
console.log(`Clicking on ${locator}`);
console.log(`Logged in as ${username}`);
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using quotes with `${}` | Mixing styles | `${}` only works inside backticks |
| Forgetting the backtick | Typing `'` by habit | Check the character — it is on the key left of 1 |
| Escaping `$` wrongly | Rare, but confusing | If you need a literal `${`, that is a special case — most beginners never need it |

#### Memory Tip

> **"Backticks + `${}` = fill in the blank. If you see `${}`, look for backticks."**

#### Practice Exercises

**Beginner:**
1. Print `My name is ${name}` using a template literal.
2. Create a multi-line template literal with three lines.
3. Insert two variables into one template literal.

**Intermediate:**
4. Build a dynamic CSS locator with a changing order ID.
5. Write a test-log template: test name, status, duration — each on its own line.

**Challenge:**
6. Write a program that builds a full "Test Summary" report using template literals with at least five variables and multiple lines.

#### Interview Questions

**Beginner:**
1. What are template literals?
2. Which character starts a template literal?
3. How do you insert a variable?
4. Can template literals span multiple lines?
5. What is the difference between `"Hello " + name` and `` `Hello ${name}` ``?

**Intermediate:**
6. Why are template literals preferred in modern code?
7. How would you build a dynamic locator with a variable ID?
8. Why does `${}` fail inside normal quotes?

**Scenario-Based:**
9. Your locator is `#user_123` where 123 changes each run. Show how you would build it.
10. A teammate uses `"Order: " + id + " Status: " + status`. Rewrite it with template literals and explain the benefit.

#### Quick Recap

- Template literals use backticks.
- `${variable}` inserts values.
- Multi-line support built in.
- The modern, standard way to build strings — especially locators.

---

## Module 3 – Module Summary

You learned about the seven data types, the `typeof` operator, how to convert between types, and how to build strings with template literals.

## Key Takeaways

- Types: string, number, boolean, undefined, null, bigint, symbol.
- Quotes → string; no quotes → number/boolean.
- `typeof` tells you the type (`null` → "object" quirk!).
- Convert with `Number()`, `String()`, `parseInt`, etc.
- Template literals (backticks + `${}`) build clean strings.
- Page text is always a string — convert before math.

## Cheat Sheet

| Type | Example | typeof |
|------|---------|--------|
| string | `"hello"` | `"string"` |
| number | `42`, `3.14` | `"number"` |
| boolean | `true` | `"boolean"` |
| undefined | `let x;` | `"undefined"` |
| null | `null` | `"object"` (quirk) |
| bigint | `123n` | `"bigint"` |
| symbol | `Symbol()` | `"symbol"` |

| Convert | Code | Result |
|---------|------|--------|
| To number | `Number("10")` | `10` |
| To integer | `parseInt("10px")` | `10` |
| To decimal | `parseFloat("3.14")` | `3.14` |
| To string | `String(10)` | `"10"` |

## Frequently Asked Questions (FAQs)

**Q1: Why is `typeof null` "object"?**
A historical bug kept for compatibility. Just remember it.

**Q2: Why is page text always a string?**
Because the browser's DOM stores text as strings.

**Q3: What is `NaN`?**
"Not a Number" — the result of invalid math like `Number("abc")`. It is of type number.

**Q4: Should I use `""` or `` `` ``?**
Both are strings. Use template literals when you need `${}` or multi-line.

**Q5: Why is `0.1 + 0.2` weird?**
Binary floating-point. Use rounding (Module 11) when precision matters.

**Q6: What is the difference between `null` and `undefined`?**
`undefined` = never assigned. `null` = deliberately assigned empty.

## Real Automation Examples

```javascript
// Text from a page is a string — convert before comparing
const cartText = await page.textContent("#cart-count"); // "3"
const cartCount = Number(cartText);

// Template literal for dynamic locators
const id = 1042;
await page.click(`#order-${id}`);

// Boolean from a visibility check
const isVisible = await page.isVisible(".modal");
console.log(`Modal visible: ${isVisible}`);
```

## Mini Project

**Test Data Type Inspector**

Write a program that:

1. Creates one value of each type (string, number, boolean, undefined, null, bigint).
2. Prints `value` and `typeof value` for each, aligned in a small report.
3. Converts a string `"42"` to a number and back, printing both results.
4. Builds a final summary line with a template literal.

## Quiz (10 Questions)

**Q1.** What type is `"Hello"`?
- A) number
- B) string
- C) boolean
- D) object

**Q2.** What type is `42`?
- A) string
- B) boolean
- C) number
- D) bigint

**Q3.** Which is a valid boolean?
- A) `"true"`
- B) `true`
- C) `1`
- D) `yes`

**Q4.** A variable declared but not assigned has value:
- A) `null`
- B) `0`
- C) `undefined`
- D) `""`

**Q5.** Which means "intentionally empty"?
- A) `undefined`
- B) `null`
- C) `NaN`
- D) `0`

**Q6.** `typeof null` returns:
- A) `"null"`
- B) `"undefined"`
- C) `"object"`
- D) `"string"`

**Q7.** `Number("25")` returns:
- A) `"25"`
- B) `25`
- C) `NaN`
- D) error

**Q8.** `"10" + 5` results in:
- A) `15`
- B) `"105"`
- C) `"15"`
- D) error

**Q9.** Which builds a string with a variable inside?
- A) `'Hello $name'`
- B) `` `Hello ${name}` ``
- C) `"Hello {name}"`
- D) `"Hello name"`

**Q10.** A BigInt literal ends with:
- A) `b`
- B) `n`
- C) `L`
- D) `#`

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | Text in quotes is a string |
| 2 | C | Numbers without quotes |
| 3 | B | Booleans are `true`/`false`, no quotes |
| 4 | C | Unassigned variables are `undefined` |
| 5 | B | `null` = intentional emptiness |
| 6 | C | The famous `typeof null` quirk |
| 7 | B | `Number()` converts to a real number |
| 8 | B | String + anything = string-join |
| 9 | B | Template literals use backticks and `${}` |
| 10 | B | BigInt literals end with `n` |

---

> **Module 3 complete! Now that you understand types, Module 4 shows you how to combine and compare values with operators.**

---

# Module 4 – Operators

Operators are the "action words" of programming. They do math, compare values, and combine decisions. If variables are nouns, operators are verbs.

### Topic 4.1 – Arithmetic Operators

#### Definition

Arithmetic operators do math: add, subtract, multiply, divide, and more. They work on numbers (and sometimes strings in special ways).

#### Why Do We Need It?

Tests need math all the time: counting elements, calculating totals, splitting retry time, converting units (MB to KB), computing expected values for assertions.

#### Real-Life Analogy

Arithmetic operators are **the buttons on a calculator**: `+`, `-`, `×`, `÷`. You press buttons, the calculator computes. JavaScript has the same buttons, plus a few extra.

#### Simple JavaScript Example

```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13  addition
console.log(a - b);  // 7   subtraction
console.log(a * b);  // 30  multiplication
console.log(a / b);  // 3.333...  division
console.log(a % b);  // 1   remainder (10 ÷ 3 = 3, remainder 1)
console.log(a ** b); // 1000  power (10³)
```

#### Code Breakdown

| Operator | Name | 10 with 3 |
|----------|------|-----------|
| `+` | Addition | 13 |
| `-` | Subtraction | 7 |
| `*` | Multiplication | 30 |
| `/` | Division | 3.33 |
| `%` | Modulus (remainder) | 1 |
| `**` | Exponentiation (power) | 1000 |

**A tester's favorite:** `%` (modulus) is used to check "is a number even?" → `number % 2 === 0`.

#### Automation Testing Example

```javascript
let totalItems = 12;
let itemsPerPage = 5;
let totalPages = Math.ceil(totalItems / itemsPerPage); // 3

console.log(`Expected pages: ${totalPages}`);

// Even/odd check for alternating row colors
let rowIndex = 3;
console.log(rowIndex % 2 === 0 ? "Even row" : "Odd row");
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Expecting `10 / 3` to be an integer | School math habits | In JS it is `3.3333...`. Use `Math.floor/ceil` (Module 11) if you need whole numbers |
| String vs number: `"10" + 3` = `"103"` | The `+` joins strings | Convert with `Number()` first |
| Confusing `%` with percent | Naming | `%` = remainder, not percent. `10 % 3` is 1, not 10% |

#### Memory Tip

> **"`+ - * /` are your calculator. `%` = remainder. `**` = power. Watch `+` with strings!"**

#### Practice Exercises

**Beginner:**
1. Print the result of 7 + 8, 20 - 5, 6 * 7, 81 / 9.
2. Print `17 % 5` and check by hand.
3. Print `2 ** 10`.

**Intermediate:**
4. Compute total test time: 5 tests × 4 minutes each. Print it.
5. Check if 10 is even using `% 2 === 0`.

**Challenge:**
6. Write a program that computes the number of full pages needed for 47 items with 10 per page (use `Math.ceil`).

#### Interview Questions

**Beginner:**
1. Name the six arithmetic operators.
2. What does `%` do?
3. What is `2 ** 3`?
4. What is `10 / 4` in JavaScript?
5. What happens with `"5" + 5`?

**Intermediate:**
6. Why would a tester use `%`?
7. How do you compute "pages needed" for pagination assertions?
8. Why is `"5" * 5` equal to 25 but `"5" + 5` equal to "55"?

**Scenario-Based:**
9. The app shows pagination "3 pages" for 25 items at 10/page. Should it be 3? What would you assert?
10. A cart total shows 105.0 but you expect 105. How do you compare them safely?

#### Quick Recap

- `+ - * /` do math; `%` gives remainder; `**` is power.
- Division gives decimals.
- Watch out: `+` joins strings; `%` is not percent.

---

### Topic 4.2 – Comparison Operators

#### Definition

Comparison operators **compare two values** and return a boolean: `true` or `false`. They answer questions like "is A equal to B?" or "is A greater than B?"

#### Why Do We Need It?

Assertions are comparisons. "Does the page title equal 'Login'?" is a comparison. Every pass/fail decision in automation depends on these operators.

#### Real-Life Analogy

Comparison operators are like **a referee's flag**.

The referee compares two things and decides: "equal!" or "not equal!" The decision is always yes or no — exactly like a boolean.

#### Simple JavaScript Example

```javascript
console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 >= 10);  // true
console.log(10 == "10");  // true  (loose — value only)
console.log(10 === "10"); // false (strict — value AND type)
console.log(10 != "10");  // false (loose not-equal)
console.log(10 !== "10"); // true  (strict not-equal)
```

#### Code Breakdown

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `>` | Greater than | `10 > 5` | true |
| `<` | Less than | `10 < 5` | false |
| `>=` | Greater or equal | `10 >= 10` | true |
| `<=` | Less or equal | `5 <= 10` | true |
| `==` | Equal (loose) | `10 == "10"` | true |
| `===` | Equal (strict) | `10 === "10"` | false |
| `!=` | Not equal (loose) | `10 != "10"` | false |
| `!==` | Not equal (strict) | `10 !== "10"` | true |

**Golden rule for testers: always use `===` and `!==`.**

#### Automation Testing Example

```javascript
let actualTitle = "Login";      // from the page
let expectedTitle = "Login";    // from the test

if (actualTitle === expectedTitle) {
  console.log("Title assertion PASSED");
} else {
  console.log("Title assertion FAILED");
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using `=` to compare | Confusing with math | `=` assigns. `==`/`===` compare. `if (x = 5)` assigns 5 (always true!) |
| Using `==` for everything | It seems easier | `==` converts types silently → surprise bugs. Always `===` |
| Writing `>=` backwards | Typo | It is always `>=` (greater OR equal), never `=>` (that is an arrow function!) |

#### Memory Tip

> **"`===` is the strict referee. `==` is the lazy referee. Use the strict one."**

#### Practice Exercises

**Beginner:**
1. Print the result of `5 > 3`, `3 > 5`, `5 >= 5`.
2. Print `10 == "10"` and `10 === "10"` and explain the difference.
3. Print `7 !== "7"`.

**Intermediate:**
4. Write a program comparing a page title with an expected title using `===`, printing PASS/FAIL.
5. Compare a response status (number 200) with a string "200" using both `==` and `===`, print both results.

**Challenge:**
6. Write a program that tests six comparison results and prints each with its expected boolean, like a mini assertion table.

#### Interview Questions

**Beginner:**
1. What do comparison operators return?
2. What is the difference between `==` and `===`?
3. What does `10 === "10"` return?
4. What is `!==`?
5. Which comparison should automation code use?

**Intermediate:**
6. Why is `==` dangerous in tests?
7. What happens if you write `if (x = 5)` by mistake?
8. Why does `>=` look similar to an arrow but is different?

**Scenario-Based:**
9. Your assertion `expect(title).toBe("Login")` fails, but the page clearly shows "Login". What type issue could it be?
10. A teammate uses `==` because "it's more forgiving". How do you convince them to use `===`?

#### Quick Recap

- Comparisons return booleans.
- `===` checks value AND type; `==` checks value only.
- Always use `===`/`!==` in tests.
- `=` assigns; never confuse it with comparison.

---

### Topic 4.3 – Logical Operators

#### Definition

Logical operators combine booleans to make bigger decisions: **AND** (`&&`), **OR** (`||`), **NOT** (`!`).

#### Why Do We Need It?

Real test conditions are multi-part: "element is visible AND its text is 'Login'", "either browser is Chrome OR it is Edge", "NOT logged out". Logical operators express these.

#### Real-Life Analogy

Logical operators are **a security guard's rules**:

- **AND (`&&`)** — "You need an ID **and** a badge to enter." Both must be true.
- **OR (`||`)** — "You may use the stairs **or** the elevator." At least one true.
- **NOT (`!`)** — "No entry without a mask." Reverses the rule.

#### Simple JavaScript Example

```javascript
let hasUsername = true;
let hasPassword = true;
let isLocked = false;

console.log(hasUsername && hasPassword); // true — both true
console.log(hasUsername || hasPassword); // true — at least one true
console.log(!hasUsername);               // false — reverses true
console.log(!isLocked);                  // true — reverses false
```

#### Code Breakdown

| Operator | Name | Returns true when |
|----------|------|-------------------|
| `&&` | AND | **Both** sides are true |
| `||` | OR | **At least one** side is true |
| `!` | NOT | Reverses the value |

**Truth table:**

| A | B | A && B | A \|\| B |
|---|---|--------|----------|
| true | true | true | true |
| true | false | false | true |
| false | true | false | true |
| false | false | false | false |

#### Automation Testing Example

```javascript
let isElementVisible = true;
let isElementEnabled = false;

// Login button clickable only when visible AND enabled
if (isElementVisible && isElementEnabled) {
  console.log("Button is clickable");
} else {
  console.log("Button is NOT clickable");
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using `and` / `or` words | English habits | JavaScript uses `&&`, `||`, `!` |
| Writing single `&` or `|` | Typo | `&` is bitwise AND (rarely used) — double it: `&&`, `||` |
| Confusing `||` with `??` | Both pick a value | `||` picks the first *truthy*; `??` picks the first *not null/undefined* (Topic 4.8) |

#### Memory Tip

> **"`&&` both. `\|\|` one. `!` flips. Double the symbol, not single!"**

#### Practice Exercises

**Beginner:**
1. Print `true && true`, `true && false`, `false || true`.
2. Print `!true` and `!false`.
3. Create two booleans and print `a && b`, `a || b`.

**Intermediate:**
4. Write a condition: click allowed if visible AND enabled. Print the decision for all four combinations.
5. Write a condition: test continues if (browser is Chrome OR Edge) AND NOT offline.

**Challenge:**
6. Build a mini "rule table" program that prints the AND and OR truth tables for all combinations of two booleans.

#### Interview Questions

**Beginner:**
1. What do `&&`, `||`, `!` mean?
2. When is `&&` true?
3. When is `||` true?
4. What does `!` do?
5. What do logical operators return?

**Intermediate:**
6. Why can't you write `if (a and b)`?
7. What is short-circuit evaluation? (Hint: `false && anything` — read 4.3 challenge above.)
8. Where do logical operators appear in automation?

**Scenario-Based:**
9. Write the condition: "retry if the API call failed OR the response took longer than 10 seconds".
10. A test passes on Chrome but fails on Firefox. Which logical operator would help you branch the test?

#### Quick Recap

- `&&` = both true. `||` = at least one true. `!` = reverse.
- Always double symbols: `&&`, `||`.
- Builds complex test conditions cleanly.

---

### Topic 4.4 – Assignment Operators

#### Definition

Assignment operators are shorthand for "change a variable's value with math": `+=`, `-=`, `*=`, `/=`, `%=`.

#### Why Do We Need It?

Instead of writing `count = count + 1`, you write `count += 1`. It is shorter, clearer, and impossible to typo the variable name twice.

#### Real-Life Analogy

Assignment operators are like **a tally counter**.

You don't write the full total each time — you just click "+1". `count += 1` is that click: "add 1 to whatever is there."

#### Simple JavaScript Example

```javascript
let score = 10;
score += 5;   // score = 15
console.log(score);

score -= 3;   // score = 12
console.log(score);

score *= 2;   // score = 24
console.log(score);
```

#### Code Breakdown

| Operator | Means | Example |
|----------|-------|---------|
| `+=` | `x = x + value` | `x += 5` |
| `-=` | `x = x - value` | `x -= 3` |
| `*=` | `x = x * value` | `x *= 2` |
| `/=` | `x = x / value` | `x /= 4` |
| `%=` | `x = x % value` | `x %= 2` |

#### Automation Testing Example

```javascript
let passedCount = 0;
let failedCount = 0;

passedCount += 1;   // a test passed
passedCount += 1;   // another passed
failedCount += 1;   // one failed

console.log(`Passed: ${passedCount}, Failed: ${failedCount}`);
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Writing `x = x + 1` everywhere | Not knowing shorthand | Use `+= 1` |
| Typing `x + = 1` with a space | Typo | No space: `+=` |
| Using `=` when you mean `==` | Assignment vs comparison | `=` sets; `==` compares |

#### Memory Tip

> **"`+=` says: add to myself. It always modifies the same variable."**

#### Practice Exercises

**Beginner:**
1. Create `x = 5`, apply `+= 3`, print.
2. Create `total = 100`, apply `-= 25`, print.
3. Create `n = 4`, apply `*= 3`, print.

**Intermediate:**
4. Write a scorekeeper: start at 0, add 10 twice, subtract 5, print the final.
5. Use `+=` to build a string: start with `"Test: "` and add results to it.

**Challenge:**
6. Write a program that counts passes and failures for five imaginary tests using `+=`, then prints a summary line.

#### Interview Questions

**Beginner:**
1. What does `+=` do?
2. Give the long form of `x *= 2`.
3. What is `count -= 1` equivalent to?
4. Can assignment operators work with strings?
5. What is the difference between `=` and `+=`?

**Intermediate:**
6. Why is `+=` preferred over `x = x + ...`?
7. How would you count passing tests with assignment operators?
8. What happens with `x += 1` when `x` is a string?

**Scenario-Based:**
9. Your test summary needs a running total of passed/failed tests. Show the code.
10. A teammate writes `total = total + value` everywhere. Why might you suggest `+=`?

#### Quick Recap

- `+= -= *= /= %=` are shorthand assignments.
- `x += 5` means `x = x + 5`.
- Great for counters and running totals in tests.

---

### Topic 4.5 – Increment and Decrement

#### Definition

`++` adds 1 to a number; `--` subtracts 1. They are the most compact way to count.

#### Why Do We Need It?

Loops (Module 6) and counters are everywhere in automation: "repeat 3 times", "count elements", "track retry attempts". `++` is the natural way to count.

#### Real-Life Analogy

`++` is the **click of a tally counter**. Each click adds exactly one. `--` is the undo click.

#### Simple JavaScript Example

```javascript
let count = 0;
count++;        // count = 1
console.log(count);
count++;        // count = 2
console.log(count);
count--;        // count = 1
console.log(count);
```

#### Code Breakdown

| Code | Meaning |
|------|---------|
| `count++` | Add 1 to `count` |
| `count--` | Subtract 1 from `count` |
| `++count` | Add 1 (returning new value) |
| `count++` | Add 1 (returning old value) |

**The subtle difference (post vs pre):**

```javascript
let a = 5;
console.log(a++);   // prints 5, then a becomes 6
let b = 5;
console.log(++b);   // b becomes 6, prints 6
```

For loops and counters, this rarely matters — but interviews love it.

#### Automation Testing Example

```javascript
let retryCount = 0;
retryCount++;      // first retry
retryCount++;      // second retry
console.log(`Retries used: ${retryCount}`);
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using `++` on a `const` | Forgetting const is fixed | Counters must be `let` |
| Confusing pre/post results | Not testing it | Run the example above and memorize the output |
| Writing `+++` or `--+` | Typo | It is always exactly `++` or `--` |

#### Memory Tip

> **"`++` clicks up, `--` clicks down. Post returns old, pre returns new."**

#### Practice Exercises

**Beginner:**
1. Start `n = 0`, `n++` twice, print.
2. Start `n = 10`, `n--` three times, print.
3. Print the difference between `a++` and `++a` with two variables.

**Intermediate:**
4. Write a retry counter that increments three times and prints "Attempt 1", "Attempt 2", "Attempt 3".
5. Use `++` inside a template literal to log each attempt number.

**Challenge:**
6. Write a program that demonstrates pre-increment vs post-increment with a clear explanation comment for each output.

#### Interview Questions

**Beginner:**
1. What does `++` do?
2. What does `--` do?
3. What is the difference between `x++` and `++x`?
4. Can you increment a `const`?
5. What type must a variable be to use `++`?

**Intermediate:**
6. Why do testers use `++`?
7. What is the value of `x` after `let x = 3; x++; x--;`?
8. When might the pre/post difference actually matter?

**Scenario-Based:**
9. Show how you would count retries in a retry loop.
10. A teammate's counter always prints 0 on the first attempt. What might they have used, and why?

#### Quick Recap

- `++` adds 1, `--` subtracts 1.
- Pre (`++x`) returns new; post (`x++`) returns old.
- Ideal for counters, loops, and retries.

---

### Topic 4.6 – String Concatenation and Comparison

#### Definition

**Concatenation** is joining strings together with `+`. Strings can also be compared with `===` and friends.

#### Why Do We Need It?

- Building messages and locators (though template literals are preferred).
- Comparing page text, error messages, and URLs.
- Understanding why `"10" + 5` behaves differently from `10 + 5`.

#### Real-Life Analogy

Concatenation is like **linking paperclips**: each new piece of text clips onto the chain. Comparisons are like **weighing two boxes**: are they the same or different?

#### Simple JavaScript Example

```javascript
let part1 = "Login ";
let part2 = "Test";
let full = part1 + part2;   // "Login Test"

console.log(full);
console.log("Login" === "Login");    // true
console.log("Login" === "login");    // false — case matters!
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `part1 + part2` | Joins the strings → `"Login Test"` |
| `"Login" === "Login"` | true — identical text |
| `"Login" === "login"` | false — case is different |

#### Automation Testing Example

```javascript
const expectedError = "Invalid credentials";
const actualError = await page.textContent(".error-msg");

if (actualError.trim() === expectedError) {
  console.log("Error message verified");
}
```

(We cover `.trim()` and string methods in Module 10.)

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Comparing with case differences | Page shows "LOGIN", test says "login" | Normalize case with `.toLowerCase()` (Module 10) |
| Forgetting trailing spaces | `"Login" + "Test"` → `"LoginTest"` | Add spaces inside quotes |
| Using `+` where template literals are cleaner | Old habit | Prefer backticks: `` `${a}-${b}` `` |

#### Memory Tip

> **"`+` links text. `===` compares text exactly — including case and spaces."**

#### Practice Exercises

**Beginner:**
1. Join three strings with `+` and print.
2. Compare `"Test"` with `"Test"` and `"Test"` with `"test"`, print both.
3. Join a string and a number — what type is the result?

**Intermediate:**
4. Build a URL from parts: `"https://" + domain + "/login"`.
5. Write a program that checks if an actual error message equals the expected one, printing PASS/FAIL.

**Challenge:**
6. Write a program that builds a dynamic greeting using `+`, then rewrite it with a template literal, and print both results side by side.

#### Interview Questions

**Beginner:**
1. What is concatenation?
2. What operator joins strings?
3. Is `"A" === "a"` true or false?
4. What is `"1" + 2`?
5. How do you add a space when joining?

**Intermediate:**
6. Why is `===` preferred for comparing page text?
7. What is the result of `"Hello " + "World"` (note the space)?
8. When do you use template literals over `+`?

**Scenario-Based:**
9. Page text shows "Login" but your assertion expects "login" — it fails. What are your options?
10. A dynamic locator `#user_` + id needs to become `#user_1042`. Show two ways to build it.

#### Quick Recap

- `+` joins strings (concatenation).
- `===` compares strings exactly (case and spaces matter).
- Template literals are the modern way to build strings.

---

### Topic 4.7 – Nullish Coalescing Operator (`??`)

#### Definition

`??` returns the **right-side value only if the left side is `null` or `undefined`**. Otherwise it returns the left side.

#### Why Do We Need It?

When test configs or API responses have missing values, you want a safe fallback: "if no screenshot folder is set, use 'screenshots'". `??` gives a default without the traps of `||`.

#### Real-Life Analogy

`??` is like **a spare key holder**.

You check the drawer (left side). If the drawer is empty (`null`/`undefined`), you grab the spare key (right side). But if the drawer has *anything* — even a zero or an empty string — you use what is there.

#### Simple JavaScript Example

```javascript
let timeout = null;
let defaultTimeout = timeout ?? 30;   // 30 — because left was null
console.log(defaultTimeout);

let timeout2 = 0;
let defaultTimeout2 = timeout2 ?? 30; // 0 — because left was 0, NOT null
console.log(defaultTimeout2);
```

#### Code Breakdown

| Expression | Result | Why |
|-----------|--------|-----|
| `null ?? 30` | 30 | Left is null → use fallback |
| `undefined ?? 30` | 30 | Left is undefined → use fallback |
| `0 ?? 30` | 0 | Left is a real value (0) → keep it |
| `"" ?? 30` | `""` | Left is empty string → keep it |

**Key difference from `||`:**

```javascript
let a = 0;
console.log(a || 10);   // 10  — 0 is "falsy", so || jumps to 10
console.log(a ?? 10);   // 0   — 0 is NOT null/undefined, so ?? keeps it
```

#### Automation Testing Example

```javascript
let envTimeout = process.env.TEST_TIMEOUT;   // may be undefined
const timeout = Number(envTimeout ?? 5000);  // safe default 5000
console.log(`Timeout set to ${timeout}`);
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using `||` when `0` is a valid value | `||` skips all falsy | Use `??` when only null/undefined should trigger the fallback |
| Mixing `??` with `&&`/`\|\|` without parentheses | Syntax error | Wrap: `(a ?? b) && c` |

#### Memory Tip

> **"`??` cares only about null/undefined. Everything else is a real value."**

#### Practice Exercises

**Beginner:**
1. Print `null ?? "fallback"`.
2. Print `0 ?? "fallback"`.
3. Print `"" ?? "fallback"`.

**Intermediate:**
4. Compare `0 || 10` vs `0 ?? 10` and print both with a comment.
5. Write a config reader: if a value is missing, use a default — with `??`.

**Challenge:**
6. Write a program that demonstrates `??` with five left-side values (null, undefined, 0, "", false) and prints the result for each.

#### Interview Questions

**Beginner:**
1. What does `??` do?
2. When does `??` use the right side?
3. What does `0 ?? 5` return?
4. What does `null ?? 5` return?
5. How is `??` different from `||`?

**Intermediate:**
6. Why would you use `??` for config defaults?
7. When is `||` the wrong tool?
8. What happens if you mix `??` and `||` without parentheses?

**Scenario-Based:**
9. A config value can legitimately be `0` (a timeout of 0 means "no wait"). Which operator keeps `0`? Why does that matter?
10. An API may not return a "retry" field. Show how you would default it to 3 safely.

#### Quick Recap

- `??` gives a fallback only for `null`/`undefined`.
- Unlike `||`, it keeps `0`, `""`, and `false`.
- Perfect for config defaults.

---

### Topic 4.8 – Optional Chaining (`?.`)

#### Definition

**Optional chaining** (`?.`) lets you safely access nested properties **without crashing** if an intermediate value is `null` or `undefined`. If anything in the chain is missing, the whole expression returns `undefined`.

#### Why Do We Need It?

APIs and configs often have optional fields. Without `?.`, `user.address.city` crashes if `address` is missing. Optional chaining returns `undefined` gracefully — a huge win for test data handling.

#### Real-Life Analogy

Optional chaining is like **checking each step of a ladder before you step**.

You check: does step 1 exist? If yes, step 2? If any step is missing, you stop safely instead of falling (crashing).

#### Simple JavaScript Example

```javascript
let user = {
  name: "Ravi",
  address: null
};

console.log(user.name);              // "Ravi"
console.log(user.address?.city);     // undefined — no crash!
// console.log(user.address.city);   // would CRASH (address is null)
```

#### Code Breakdown

| Expression | Result | Why |
|-----------|--------|-----|
| `user.name` | `"Ravi"` | Field exists |
| `user.address?.city` | `undefined` | `address` is null → stop safely |
| `user.address.city` | **Crash** | No `?.` → tries to access city of null |

You can also use `?.` for method calls and array items:

```javascript
user.getAddress?.();   // call only if it exists
users?.[0]?.name;      // safe array access
```

#### Automation Testing Example

```javascript
const response = { data: { user: { profile: null } } };
const city = response?.data?.user?.profile?.city ?? "Unknown";
console.log(`City: ${city}`);   // "Unknown" — safe and clean
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using `?.` everywhere | Over-enthusiasm | Use it only where values might be missing |
| Forgetting the `?` | Typo | `user.address.city` vs `user.address?.city` — one `?` changes everything |
| Combining `?.` and `??` without thought | Copy-paste | They work great together: `x?.y ?? "default"` |

#### Memory Tip

> **"`?.` = 'if it exists, continue'. Read it as: does this exist? → yes → go on → no → stop."**

#### Practice Exercises

**Beginner:**
1. Create an object with a `null` field and safely access a nested property.
2. Print the result of `{}.name?.first` (what is it?).
3. Compare a crash vs safe access with comments.

**Intermediate:**
4. Write `response?.data?.user?.name ?? "Guest"` and test with three different response shapes.
5. Use `?.` to safely call a method that may not exist.

**Challenge:**
6. Write a "safe data reader" that prints a user's city from three nested levels, falling back to "Unknown" without ever crashing.

#### Interview Questions

**Beginner:**
1. What does `?.` do?
2. What happens if the chain hits null with `?.`?
3. Does `?.` work on methods?
4. What does `a?.b ?? "x"` mean?
5. Why is this better than crashing?

**Intermediate:**
6. Where do you see optional chaining in test code?
7. When should you NOT use `?.`?
8. How do `?.` and `??` work together?

**Scenario-Based:**
9. An API response may omit `data.user.profile`. Show how to read `profile.city` safely.
10. A test crashes with "Cannot read properties of null". Which line would you suspect, and how would you fix it with `?.`?

#### Quick Recap

- `?.` safely reads nested values.
- Missing value → `undefined`, not a crash.
- Combines beautifully with `??` for defaults.

---

## Module 4 – Module Summary

You learned arithmetic, comparison, logical, assignment, increment/decrement, string operations, nullish coalescing, and optional chaining — the full toolkit for making decisions and doing math in tests.

## Key Takeaways

- Arithmetic: `+ - * / % **`.
- Comparisons: always use `===`/`!==`.
- Logic: `&&` (both), `||` (one), `!` (flip).
- Assignment: `+=`, `-=`, etc. for counters.
- `??` for null/undefined defaults; `?.` for safe nested access.
- `+` on strings concatenates — use template literals for clarity.

## Cheat Sheet

| Operator | Meaning |
|----------|---------|
| `+ - * /` | Math |
| `%` | Remainder |
| `**` | Power |
| `===` / `!==` | Strict equality (use these!) |
| `>` `<` `>=` `<=` | Order comparisons |
| `&&` `\|\|` `!` | AND, OR, NOT |
| `+=` `-=` `*=` `/=` | Short assignment |
| `++` `--` | Add/subtract 1 |
| `??` | Default for null/undefined |
| `?.` | Safe nested access |

## Frequently Asked Questions (FAQs)

**Q1: Should I ever use `==`?**
Almost never. `===` is predictable. There are rare legacy cases; ignore them for now.

**Q2: What is `NaN`?**
"Not a Number" — `Number("abc")` returns it. `NaN === NaN` is false (weird but true!).

**Q3: What is the difference between `||` and `??`?**
`||` uses the first *truthy* value; `??` uses the first value that is not null/undefined.

**Q4: Why does `"5" + 5` give "55"?**
`+` concatenates when either side is a string.

**Q5: What is short-circuiting?**
`false && anything` → false immediately; `true || anything` → true immediately. The rest is not evaluated.

**Q6: Can I chain `?.` and `??`?**
Yes — `a?.b ?? "default"` is a common, powerful pattern.

## Real Automation Examples

```javascript
// Compare values strictly
if (statusCode === 200) { /* pass */ }

// Safe config reading with defaults
const timeout = config?.timeout ?? 5000;

// Counting with assignment + increment
let retries = 0;
retries += 1;

// Multiple conditions
if (isVisible && isEnabled && !isLocked) { /* click */ }
```

## Mini Project

**Retry-Decision Calculator**

Write a program that:

1. Has `const` values: `maxRetries = 3`, `defaultWait = 5` seconds.
2. Uses `let` for `retryCount` and a boolean `isSuccess`.
3. Simulates a retry: each retry increments the counter and prints "Retry N".
4. Prints "Success" or "Need more retries" using `===`, `&&`, and `??` (if a config wait value is null, default to 5).

## Quiz (10 Questions)

**Q1.** What is `10 % 3`?
- A) 3
- B) 1
- C) 3.33
- D) 0

**Q2.** What is `2 ** 5`?
- A) 10
- B) 25
- C) 32
- D) 7

**Q3.** `10 === "10"` is:
- A) true
- B) false
- C) error
- D) "10"

**Q4.** Which operator means AND?
- A) `||`
- B) `&&`
- C) `!`
- D) `??`

**Q5.** What does `count += 2` do?
- A) Sets count to 2
- B) Adds 2 to count
- C) Doubles count
- D) Compares count to 2

**Q6.** What is `x` after `let x = 3; x++;`?
- A) 3
- B) 4
- C) 5
- D) error

**Q7.** `null ?? "fallback"` returns:
- A) null
- B) "fallback"
- C) undefined
- D) true

**Q8.** `0 ?? 10` returns:
- A) 10
- B) 0
- C) undefined
- D) error

**Q9.** `user.address?.city` when `address` is null returns:
- A) crash
- B) undefined
- C) null
- D) 0

**Q10.** Which is the strict equality operator?
- A) `=`
- B) `==`
- C) `===`
- D) `=>`

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | 10 ÷ 3 = 3 remainder 1 |
| 2 | C | 2 × 2 × 2 × 2 × 2 = 32 |
| 3 | B | Different types → strict false |
| 4 | B | `&&` = AND |
| 5 | B | `+=` adds to the variable |
| 6 | B | 3 + 1 = 4 |
| 7 | B | null triggers the fallback |
| 8 | B | 0 is not null/undefined, so kept |
| 9 | B | `?.` stops safely at null |
| 10 | C | `===` checks value and type |

---

> **Module 4 done! Now that you can compare and combine values, Module 5 teaches you to make decisions with conditional statements — the heart of test logic.**

---

# Module 5 – Conditional Statements

A program that only runs top-to-bottom is limited. Conditional statements let code make decisions: "if login fails, take a screenshot; otherwise continue." This module makes your programs smart.

### Topic 5.1 – The `if` Statement

#### Definition

`if` runs a block of code **only when a condition is true**. The condition is written inside parentheses, and the code to run is inside `{ }`.

#### Why Do We Need It?

Every test decision uses `if`: "if the element exists, continue; if login succeeded, assert; if a popup appears, close it."

#### Real-Life Analogy

`if` is like **a bouncer at a club**: "If you have an ID, you enter." No ID → no entry. The rule is checked, and only the approved pass through.

#### Simple JavaScript Example

```javascript
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back!");
}
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `if (isLoggedIn)` | Checks the condition — is it true? |
| `{ ... }` | The block — runs only if true |
| `console.log(...)` | Executes only when logged in |

If `isLoggedIn` were `false`, nothing inside the block would print.

#### Automation Testing Example

```javascript
let isElementVisible = true;

if (isElementVisible) {
  console.log("Element is present — test can continue");
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting the parentheses | `if x > 5` | Always `if (condition)` |
| Forgetting the braces | Single-line habits | Always use `{ }` — even for one line |
| Using `=` instead of `===` | Assignment vs comparison | `if (x === 5)`, never `if (x = 5)` |

#### Memory Tip

> **"`if (condition) { do it }` — condition in parens, action in braces."**

#### Practice Exercises

**Beginner:**
1. Write an `if` that prints "Time to retry" when `retries < 3`.
2. Write an `if` that prints when a boolean is true.
3. Change the boolean to false and run again.

**Intermediate:**
4. Write an `if` checking `actualTitle === expectedTitle`.
5. Write an `if` with two conditions using `&&`.

**Challenge:**
6. Write a program with three independent `if` statements, each printing a different message when its condition is true.

#### Interview Questions

**Beginner:**
1. What does `if` do?
2. What happens if the condition is false?
3. What does `if` need around the condition?
4. Why use braces?
5. What is a boolean condition?

**Intermediate:**
6. What happens with `if (x = 5)`?
7. Why is a block important?
8. Give three test scenarios using `if`.

**Scenario-Based:**
9. Write an `if` that captures a screenshot only when a test fails.
10. A test always runs its "if" block even when the condition is false. What is likely wrong?

#### Quick Recap

- `if (condition) { code }` runs code when true.
- Condition in parentheses, action in braces.
- The foundation of all test branching.

---

### Topic 5.2 – `if` / `else`

#### Definition

`else` provides the code to run **when the `if` condition is false**. Together they cover both sides of a decision.

#### Why Do We Need It?

Tests always have two outcomes: pass or fail, element found or not found. `if/else` handles both branches cleanly.

#### Real-Life Analogy

`if/else` is like **a traffic light**: "If green, go. Else, stop." Exactly two options, always one chosen.

#### Simple JavaScript Example

```javascript
let testPassed = false;

if (testPassed) {
  console.log("Test PASSED");
} else {
  console.log("Test FAILED");
}
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `if (testPassed)` | Checks the condition |
| first `{ }` | Runs when true → prints PASSED |
| `else` | The "otherwise" keyword |
| second `{ }` | Runs when false → prints FAILED |

Exactly one block always runs. Never both.

#### Automation Testing Example

```javascript
let isPopupVisible = true;

if (isPopupVisible) {
  console.log("Closing popup...");
  // closePopup() would be called here
} else {
  console.log("No popup — continuing");
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Putting code between `}` and `else` | Forgetting the structure | `else` must directly follow the closing brace |
| Using `else` when you only need `if` | Over-thinking | Only add `else` when there is a real second branch |
| Semi-colon after `if (...)` | Typo | `if (x) { }` — no semicolon after the condition |

#### Memory Tip

> **"`if` = this path. `else` = the other path. Exactly one runs."**

#### Practice Exercises

**Beginner:**
1. Write if/else printing "PASS" or "FAIL" from a boolean.
2. Change the boolean and rerun.
3. Write if/else for `age >= 18` ("adult"/"minor").

**Intermediate:**
4. Write if/else that checks element visibility and prints the correct action for each case.
5. Write if/else comparing an actual and expected value.

**Challenge:**
6. Write a program with two if/else blocks that run in sequence, producing four possible output combinations.

#### Interview Questions

**Beginner:**
1. What does `else` do?
2. Can both blocks run?
3. Where must `else` be placed?
4. What happens if there is no `else` and the condition is false?
5. Why is if/else good for PASS/FAIL?

**Intermediate:**
6. Why must `else` directly follow the `}`?
7. Give two automation uses of if/else.
8. What is a "branch" in a program?

**Scenario-Based:**
9. Write if/else: if login succeeded → navigate to dashboard; else → show error.
10. A test prints both "PASSED" and "FAILED". What is wrong?

#### Quick Recap

- `if` runs on true, `else` runs on false.
- Exactly one branch executes.
- Structure: `if () { } else { }`.

---

### Topic 5.3 – `else if` (Multiple Conditions)

#### Definition

`else if` chains several conditions together, checking them **in order**. The first condition that is true wins; the rest are skipped.

#### Why Do We Need It?

Real decisions have more than two options: response code 200 vs 404 vs 500; grade A/B/C; browser Chrome/Edge/Firefox. `else if` handles this.

#### Real-Life Analogy

`else if` is like **a queue at a help desk**:

"Are you here for refunds?" → No. "Are you here for returns?" → Yes. Each question is asked only if the previous ones were answered "no."

#### Simple JavaScript Example

```javascript
let statusCode = 404;

if (statusCode === 200) {
  console.log("OK");
} else if (statusCode === 404) {
  console.log("Not Found");
} else if (statusCode === 500) {
  console.log("Server Error");
} else {
  console.log("Unknown status");
}
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `if (statusCode === 200)` | First check |
| `else if (statusCode === 404)` | Second check — only if first was false |
| `else if (statusCode === 500)` | Third check — only if both were false |
| `else` | Runs if all conditions were false |

**Order matters:** checks run top to bottom; the first true one stops the chain.

#### Automation Testing Example

```javascript
let browser = "Firefox";

if (browser === "Chrome") {
  console.log("Run Chrome tests");
} else if (browser === "Firefox") {
  console.log("Run Firefox tests");
} else if (browser === "Edge") {
  console.log("Run Edge tests");
} else {
  console.log("Unsupported browser");
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Writing `else if` as `elseif` | Typo | There is a space: `else if` |
| Reordering conditions that overlap | Logic error | Order narrow → broad (specific first) |
| Using `=` inside conditions | Assignment vs comparison | Always `===` |

#### Memory Tip

> **"`if → else if → else`: first true wins, then stop."**

#### Practice Exercises

**Beginner:**
1. Write else-if for status codes 200/404/500/default.
2. Write else-if for a score: A (≥90), B (≥80), else C.
3. Add a fourth case to your browser selector.

**Intermediate:**
4. Write a grade calculator with five branches.
5. Write a browser selector that also prints which test suite to run.

**Challenge:**
6. Write a program that maps a day number (1-7) to a day name using else-if, with a default for invalid input.

#### Interview Questions

**Beginner:**
1. What does `else if` allow?
2. What order do conditions run in?
3. What happens after one condition is true?
4. Can you have multiple `else if`?
5. What does the final `else` do?

**Intermediate:**
6. Why does order matter in else-if chains?
7. When would you choose else-if over switch?
8. Why use `===` in each condition?

**Scenario-Based:**
9. Write logic: response 200 → pass; 404 → fail with "not found"; 500 → fail with "server error".
10. Two conditions in your else-if chain both could be true, but only one branch should run. How do you fix it?

#### Quick Recap

- `else if` checks conditions in order.
- First true condition wins; chain stops.
- Final `else` catches everything else.

---

### Topic 5.4 – `switch`

#### Definition

`switch` compares one value against many **cases** and runs the matching one. It is a cleaner alternative to a long `else if` chain when comparing the same value.

#### Why Do We Need It?

When you test one variable against many fixed values (status codes, browsers, environments: dev/qa/prod), `switch` is more readable and runs faster in intent.

#### Real-Life Analogy

`switch` is like **a train platform board**:

"Train to Hyderabad: platform 1. Train to Chennai: platform 2." You look up your destination and go to one platform — no long list of questions.

#### Simple JavaScript Example

```javascript
let env = "qa";

switch (env) {
  case "dev":
    console.log("Development environment");
    break;
  case "qa":
    console.log("QA environment");
    break;
  case "prod":
    console.log("Production environment");
    break;
  default:
    console.log("Unknown environment");
}
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `switch (env)` | The value to compare |
| `case "qa":` | If `env === "qa"`, run this block |
| `break;` | **Crucial** — stops the switch; without it, code "falls through" to the next case |
| `default:` | Runs if no case matched |

**The `break` rule:** forgetting `break` is the #1 switch mistake. Without it, all following cases run.

#### Automation Testing Example

```javascript
let browser = "chromium";

switch (browser) {
  case "chromium":
    console.log("Using Chromium");
    break;
  case "firefox":
    console.log("Using Firefox");
    break;
  case "webkit":
    console.log("Using WebKit");
    break;
  default:
    console.log("Browser not supported");
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting `break` | Not understanding fall-through | Every case ends with `break` |
| Using `case x == 5:` | Wrong syntax | Cases are values: `case 5:` |
| Forgetting `default` | Edge cases | Always add a `default` |

#### Memory Tip

> **"`switch` = lookup table. `break` = the exit door. Default = the catch-all."**

#### Practice Exercises

**Beginner:**
1. Write a switch for days 1-7 → day names.
2. Write a switch for status codes 200/404/500.
3. Remove a `break` and run — observe fall-through.

**Intermediate:**
4. Write a switch for browsers that also sets a boolean `isSupported`.
5. Rewrite a 5-branch else-if as a switch and compare readability.

**Challenge:**
6. Write a switch that maps environment names to base URLs, with a default that prints "Unknown environment — using default URL".

#### Interview Questions

**Beginner:**
1. What is `switch` used for?
2. What is `case`?
3. What does `break` do?
4. What does `default` do?
5. What kind of comparison does switch use?

**Intermediate:**
6. Why is switch good for browsers/environments?
7. What happens without `break`?
8. When would you use switch over else-if?

**Scenario-Based:**
9. Your test framework needs a helper that returns a URL for dev/qa/prod. Show the switch.
10. A switch with no `break` prints three messages. Diagnose it.

#### Quick Recap

- `switch (value) { case x: ... break; default: ... }`.
- Cases compare with strict equality.
- Never forget `break`; always add `default`.

---

### Topic 5.5 – Nested Conditions

#### Definition

A **nested condition** is an `if` inside another `if`. The inner condition is only checked when the outer one is true.

#### Why Do We Need It?

Some decisions have two levels: "If logged in, then check if the user is admin." Nesting expresses "this AND then that" with clear structure.

#### Real-Life Analogy

Nested conditions are like **two doors in a row**.

You must pass through door 1 (logged in). Only then do you reach door 2 (is admin?). Door 2 is never checked if door 1 is locked.

#### Simple JavaScript Example

```javascript
let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, Admin");
  } else {
    console.log("Welcome, User");
  }
} else {
  console.log("Please log in");
}
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| Outer `if (isLoggedIn)` | First gate |
| Inner `if (isAdmin)` | Only reached if logged in |
| Inner `else` | Logged in but not admin |
| Outer `else` | Not logged in at all |

**Alternative:** you can often flatten nesting with `&&`:

```javascript
if (isLoggedIn && isAdmin) {
  console.log("Welcome, Admin");
}
```

#### Automation Testing Example

```javascript
if (isLoginSuccessful) {
  if (isDashboardLoaded) {
    console.log("Login flow verified end-to-end");
  } else {
    console.log("Dashboard did not load");
  }
} else {
  console.log("Login failed");
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Nesting too deep (3+ levels) | Complex logic | Flatten with `&&` when possible |
| Forgetting a closing brace | Deep nesting | Use indentation and let VS Code auto-format |
| Checking inner condition when outer fails | Misunderstanding | Inner code only runs if outer is true |

#### Memory Tip

> **"Nesting = doors in a row. Deep nesting = a maze — flatten with `&&`."**

#### Practice Exercises

**Beginner:**
1. Write a two-level if: isLoggedIn → isAdmin.
2. Write a nested if for "element visible → text matches".
3. Add the flatten-with-`&&` version of the same logic.

**Intermediate:**
4. Write a three-level nested decision (logged in → admin → has permission).
5. Rewrite a nested condition as a single `&&` condition and compare readability.

**Challenge:**
6. Write a login validation with two levels and both `else` branches, then write the equivalent flattened version with `&&`.

#### Interview Questions

**Beginner:**
1. What is a nested condition?
2. When is the inner condition checked?
3. How do you flatten nesting?
4. Why is deep nesting bad?
5. What does indentation tell you?

**Intermediate:**
6. When would you prefer nesting over `&&`?
7. What is the maximum reasonable nesting depth?
8. How do nested conditions map to real test flows?

**Scenario-Based:**
9. Write the logic: "If login works, then if the user is admin, show admin panel; else show dashboard."
10. A teammate nests 5 levels deep. What advice do you give and why?

#### Quick Recap

- Nested = `if` inside `if`.
- Inner only runs when outer is true.
- Flatten with `&&` for readability.

---

### Topic 5.6 – Ternary Operator

#### Definition

The **ternary operator** is a one-line `if/else`: `condition ? valueIfTrue : valueIfFalse`. It *returns* a value, so you can assign it.

#### Why Do We Need It?

When you need to pick one of two values ("PASS" or "FAIL", this URL or that URL), the ternary is short and readable — perfect for assignments and template literals.

#### Real-Life Analogy

The ternary is like **a vending machine choice**: "Coke or Pepsi?" — one coin (the condition), two options, exactly one comes out.

#### Simple JavaScript Example

```javascript
let score = 75;
let result = score >= 60 ? "PASS" : "FAIL";
console.log(result);   // PASS
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `score >= 60` | The condition |
| `? "PASS"` | Value if true |
| `: "FAIL"` | Value if false |
| `let result = ...` | The chosen value is stored |

**Same logic with if/else:**

```javascript
let result2;
if (score >= 60) {
  result2 = "PASS";
} else {
  result2 = "FAIL";
}
```

The ternary is the shorter twin of this.

#### Automation Testing Example

```javascript
let elementCount = 0;
let message = elementCount > 0 ? "Elements found" : "No elements found";
console.log(message);
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting the colon | Missing a part | Structure is always `? :` |
| Nesting ternaries | Over-complexity | If it needs nesting, use if/else |
| Using ternary as a statement | Wrong mental model | It returns a value — assign or print it |

#### Memory Tip

> **"`condition ? yes : no` — question mark asks, colon splits the answers."**

#### Practice Exercises

**Beginner:**
1. Ternary for age ≥ 18 → "Adult" : "Minor".
2. Ternary for element count > 0 → "Found" : "Missing".
3. Print a ternary result directly inside `console.log`.

**Intermediate:**
4. Use a ternary inside a template literal.
5. Use a ternary to pick between two URLs based on an environment boolean.

**Challenge:**
6. Write a program with three ternary assignments (result, message, URL) and print them all.

#### Interview Questions

**Beginner:**
1. What is the ternary operator?
2. What are its three parts?
3. What does `x > 5 ? "big" : "small"` return when x=10?
4. Can you assign a ternary result?
5. When should you NOT use a ternary?

**Intermediate:**
6. Why is the ternary good for PASS/FAIL values?
7. What is the long form of a ternary?
8. Why avoid nested ternaries?

**Scenario-Based:**
9. Write one line that sets `status` to "PASS" or "FAIL" from a boolean.
10. A ternary is getting hard to read. What should you replace it with?

#### Quick Recap

- Ternary = one-line if/else that returns a value.
- Structure: `condition ? yes : no`.
- Great for assignments; avoid nesting.

---

## Module 5 – Module Summary

You learned how to make decisions: `if`, `else`, `else if`, `switch`, nested conditions, and the ternary operator.

## Key Takeaways

- `if (cond) { }` runs when true.
- `else` covers the false side; `else if` chains options.
- `switch` = clean lookup table for one value; never forget `break`.
- Nesting expresses layered rules; flatten with `&&`.
- Ternary = one-line value choice.

## Cheat Sheet

| Construct | Syntax |
|-----------|--------|
| if | `if (c) { }` |
| if/else | `if (c) { } else { }` |
| else if | `if (c1) { } else if (c2) { }` |
| switch | `switch (v) { case a: ... break; default: }` |
| nested | `if (c1) { if (c2) { } }` |
| ternary | `let x = c ? a : b;` |

## Frequently Asked Questions (FAQs)

**Q1: `else if` or `switch`?**
For many fixed values of one variable → switch. For ranges or complex conditions → else if.

**Q2: Do I always need `else`?**
No. Use `else` only when the false case needs different handling.

**Q3: What is fall-through in switch?**
Running cases after the matching one because `break` is missing.

**Q4: Can a condition be a number?**
Yes — 0 is falsy, any non-zero is truthy. But prefer real booleans for clarity.

**Q5: What are truthy and falsy?**
Falsy: `false, 0, "", null, undefined, NaN`. Everything else is truthy.

**Q6: Why does my `if` always run?**
You probably used `=` instead of `===`. Check it!

## Real Automation Examples

```javascript
// Login outcome
if (isLoginSuccess) {
  console.log("Proceeding to dashboard");
} else {
  console.log("Login failed — capturing screenshot");
}

// Environment switch
const url = env === "prod" ? "https://app.com" : "https://staging.app.com";

// Multi-browser
switch (browser) {
  case "chromium": runChromium(); break;
  case "firefox": runFirefox(); break;
  default: throw new Error("Unsupported browser");
}
```

## Mini Project

**Login Result Decider**

Write a program that:

1. Stores `isLoginSuccess`, `isUserAdmin`, and a `statusCode`.
2. Uses if/else to print the correct login message.
3. Uses a nested if for admin vs regular user.
4. Uses a switch to map `statusCode` (200/401/500) to a message.
5. Uses a ternary to set a `testStatus` ("PASS"/"FAIL").

## Quiz (10 Questions)

**Q1.** `if (true) { console.log("A"); }` prints:
- A) Nothing
- B) A
- C) error
- D) undefined

**Q2.** In if/else, when the condition is false:
- A) Both run
- B) if block runs
- C) else block runs
- D) nothing runs

**Q3.** Which keyword chains another condition?
- A) `elseif`
- B) `else if`
- C) `elseif()`
- D) `then if`

**Q4.** What stops switch fall-through?
- A) `stop`
- B) `exit`
- C) `break`
- D) `end`

**Q5.** `switch` compares with:
- A) `==`
- B) `=`
- C) `===`
- D) `equals()`

**Q6.** `let r = true ? "A" : "B";` → r is:
- A) "B"
- B) "A"
- C) true
- D) error

**Q7.** Nested conditions mean:
- A) `if` inside `if`
- B) `if` after loop
- C) two `else`s
- D) switch inside if

**Q8.** Which is falsy?
- A) `"false"`
- B) `0`
- C) `-1`
- D) `[]`

**Q9.** The default case in switch runs when:
- A) Always
- B) No case matched
- C) Break is missing
- D) The value is true

**Q10.** For many fixed values of one variable, prefer:
- A) nested if
- B) ternary
- C) switch
- D) while

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | true → block runs |
| 2 | C | else handles the false side |
| 3 | B | `else if` (with a space) |
| 4 | C | `break` exits the switch |
| 5 | C | Cases use strict equality |
| 6 | B | true → first value "A" |
| 7 | A | One if inside another |
| 8 | B | 0 is falsy; `"false"` is a string (truthy!) |
| 9 | B | default = catch-all |
| 10 | C | switch suits fixed values |

---

> **Module 5 finished! Module 6 brings repetition: loops let you run the same test logic many times with different data.**

---

# Module 6 – Loops

Loops let a program **repeat** a block of code. This is where automation truly shines: the same test, run 50 times with 50 different usernames, is just a loop.

### Topic 6.1 – Why Loops Matter

#### Definition

A **loop** is a block of code that runs **more than once**, controlled by a condition. The loop keeps repeating while its condition is true.

#### Why Do We Need It?

- Run the same test steps with many data rows (data-driven testing).
- Validate every row of a table.
- Check every option in a dropdown.
- Retry flaky actions a fixed number of times.

Without loops, you would copy-paste code — which is exactly what automation is meant to avoid.

#### Real-Life Analogy

A loop is like **a delivery driver's route**: keep delivering while there are more packages. Check the list → deliver one → check again → deliver again... until the list is empty.

#### Simple JavaScript Example

```javascript
for (let i = 1; i <= 3; i++) {
  console.log("Delivery number " + i);
}
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `let i = 1` | Start: create counter at 1 |
| `i <= 3` | Condition: keep going while true |
| `i++` | Update: add 1 each time |
| `{ ... }` | Body: runs each repetition |

**Output:** Delivery number 1 / 2 / 3. (We detail `for` in Topic 6.2.)

#### Automation Testing Example

```javascript
const usernames = ["user1", "user2", "user3"];

for (let i = 0; i < usernames.length; i++) {
  console.log("Logging in as " + usernames[i]);
}
```

Same test steps, three different users — a preview of data-driven testing.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Infinite loop (condition never false) | Wrong condition/update | Ensure the counter changes toward the end condition |
| Off-by-one (runs 2 or 4 times) | Misunderstanding bounds | Test small loops and print the counter |
| Copy-pasting instead of looping | Old habit | If you see repetition, think loop |

#### Memory Tip

> **"Loop = repeat while true. Always make sure it can stop."**

#### Practice Exercises

**Beginner:**
1. Write a loop that prints numbers 1 to 5.
2. Write a loop that prints "Retry" three times.
3. Change the condition to print 1 to 10.

**Intermediate:**
4. Write a loop that prints "Test case N" for N = 1..5.
5. Write a loop over an array of three usernames, printing a login message for each.

**Challenge:**
6. Write a loop that prints numbers 10 down to 1 (hint: `i--`).

#### Interview Questions

**Beginner:**
1. What is a loop?
2. What are the three parts of a for loop?
3. What happens if the condition is always true?
4. What is the counter for?
5. Why do testers use loops?

**Intermediate:**
6. What is an off-by-one error?
7. How do loops enable data-driven testing?
8. What is an infinite loop and how do you avoid it?

**Scenario-Based:**
9. You have 50 login test cases. How would a loop help, and what would you change in each iteration?
10. A loop runs forever in a test. What do you check first?

#### Quick Recap

- Loops repeat code while a condition is true.
- Three parts: start, condition, update.
- Perfect for multiple test data and retries.
- Always ensure the loop can end.

---

### Topic 6.2 – The `for` Loop

#### Definition

The `for` loop is the most common loop. It has three parts in one line: **start**, **condition**, **update**. The body repeats while the condition is true.

#### Why Do We Need It?

Use `for` when you know in advance how many times to repeat: 5 retries, 10 rows, 3 browsers.

#### Real-Life Analogy

`for` is like **a flight of stairs with numbered steps**: "For step 1 to step 10, climb one step." You know the count before you start.

#### Simple JavaScript Example

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteration " + i);
}
```

#### Code Breakdown

| Part | Example | Runs |
|------|---------|------|
| Start | `let i = 0` | Once, before the loop |
| Condition | `i < 5` | Checked before each repeat |
| Update | `i++` | Runs after each body |
| Body | `console.log(...)` | Repeats while condition true |

**Trace (what really happens):**
1. `i = 0`, check `0 < 5` → true → print "Iteration 0", `i` → 1
2. `i = 1`, check `1 < 5` → true → print "Iteration 1", `i` → 2
3. ... continues ...
4. `i = 5`, check `5 < 5` → **false** → loop ends

**Note:** in automation, loops usually start at `0` because arrays start at index 0 (Module 9).

#### Automation Testing Example

```javascript
const testData = ["valid-user", "invalid-user", "locked-user"];
for (let i = 0; i < testData.length; i++) {
  console.log("Running login scenario: " + testData[i]);
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using `<=` instead of `<` with arrays | Off-by-one | With arrays, always `< array.length` |
| Forgetting `i++` | Infinite loop | The update part is mandatory |
| Using a `const` counter | Syntax error | Counters must be `let` |

#### Memory Tip

> **"`for (start; condition; update)` — three rooms, one line."**

#### Practice Exercises

**Beginner:**
1. Print 1 to 5 with a for loop.
2. Print "Attempt" 1 to 3.
3. Print 0 to 4 and note the difference from 1 to 5.

**Intermediate:**
4. Loop over a 4-element array with `< length`.
5. Write a loop that prints only even numbers from 0 to 10 (use `% 2 === 0` inside).

**Challenge:**
6. Write a loop that prints a countdown from 10 to 0, then prints "Liftoff!".

#### Interview Questions

**Beginner:**
1. What are the three parts of a for loop?
2. What does `i++` do in a for loop?
3. When does the loop stop?
4. Why start at 0 for arrays?
5. What happens if the condition is false at the start?

**Intermediate:**
6. What is the trace of `for (let i = 0; i < 3; i++)`?
7. Why `i < length` instead of `i <= length`?
8. What is an infinite for loop?

**Scenario-Based:**
9. Write a for loop that prints "Checking row " + i for 5 table rows.
10. A for loop prints 6 items for a 5-item array. Diagnose it.

#### Quick Recap

- `for (start; condition; update)`.
- Condition checked before each iteration.
- Start at 0, use `< length` for arrays.
- Never forget the update.

---

### Topic 6.3 – The `while` Loop

#### Definition

The `while` loop repeats **while a condition is true**. Unlike `for`, there is no built-in counter — you manage the change yourself.

#### Why Do We Need It?

Use `while` when you do **not** know how many times you will repeat: "keep retrying until success", "keep waiting until the element appears".

#### Real-Life Analogy

`while` is like **waiting for your tea to cool**: while the tea is too hot, wait. You do not know how many minutes — you just keep checking until it cools.

#### Simple JavaScript Example

```javascript
let retryCount = 0;

while (retryCount < 3) {
  console.log("Attempt " + (retryCount + 1));
  retryCount++;   // CRITICAL — must change the condition
}
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `while (retryCount < 3)` | Check before each repeat |
| `console.log(...)` | Runs while true |
| `retryCount++` | Changes the value so the loop can end |

**If you forget `retryCount++`**, the condition never changes → infinite loop.

#### Automation Testing Example

```javascript
let attempts = 0;
let success = false;

while (!success && attempts < 5) {
  attempts++;
  console.log("Retry attempt " + attempts);
  success = Math.random() > 0.5;   // pretend a real action result
}
console.log(success ? "Succeeded" : "Gave up after 5 attempts");
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Infinite loop | Forgetting to update the condition variable | Always change something inside the body |
| Using `while` when you know the count | Wrong tool | Known count → `for` |
| Condition never true initially | Body never runs | `while` checks *before* running — use `do...while` if you need at least one run |

#### Memory Tip

> **"`while` = check first, then act. Whatever makes the condition false must change inside."**

#### Practice Exercises

**Beginner:**
1. Write a while loop printing 1 to 5.
2. Write a while loop that prints "Waiting..." 3 times.
3. Remove the update line and run — observe the infinite loop (press Ctrl+C to stop!).

**Intermediate:**
4. Write a while loop that doubles a number until it exceeds 100.
5. Write a retry loop that stops early on success.

**Challenge:**
6. Write a while loop simulating "wait for element": print "checking..." up to 5 times, stopping early if a boolean becomes true.

#### Interview Questions

**Beginner:**
1. What is a while loop?
2. When do you use while instead of for?
3. What happens if the condition is false at the start?
4. Why can while loop forever?
5. Where is the condition checked?

**Intermediate:**
6. Why is updating the condition variable critical?
7. How would you write a retry-until-success loop?
8. What is the difference in timing between while and do...while?

**Scenario-Based:**
9. Write a "wait for element" loop with a max of 5 seconds.
10. A test hangs forever. Which loop construct would you inspect first and why?

#### Quick Recap

- `while (cond) { ... }` — checks before each run.
- Change the condition inside or it never stops.
- Perfect for retry/wait logic.

---

### Topic 6.4 – The `do...while` Loop

#### Definition

`do...while` runs the body **at least once**, then repeats while the condition is true. The condition is checked **after** each run.

#### Why Do We Need It?

When the first run must happen no matter what — "try the action once; if it fails, retry" — `do...while` fits perfectly.

#### Real-Life Analogy

`do...while` is like **a first bite of food**: you taste once, then decide if you want more. The first taste always happens.

#### Simple JavaScript Example

```javascript
let attempts = 0;

do {
  attempts++;
  console.log("Attempt " + attempts);
} while (attempts < 3);
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `do { ... }` | Runs first, no condition checked |
| `while (attempts < 3);` | Checked after each run — note the semicolon |

Even if the condition were `false` from the start, the body would run once.

#### Automation Testing Example

```javascript
let tries = 0;
let done = false;

do {
  tries++;
  console.log("Trying action, attempt " + tries);
  done = Math.random() > 0.7;
} while (!done && tries < 3);

console.log(done ? "Action succeeded" : "Action failed after " + tries + " tries");
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting the semicolon after `while` | Structure confusion | `do {...} while (cond);` — semicolon at the end |
| Thinking the condition is checked first | Confusing with while | In `do...while` it runs first, checks later |
| Not knowing the difference | Skipping the topic | Memorize: while = check-then-run; do...while = run-then-check |

#### Memory Tip

> **"`do` = act first, ask later. `while` = ask first, act later."**

#### Practice Exercises

**Beginner:**
1. Write a do...while printing 1 to 5.
2. Write a do...while with a false condition from the start — how many times does it run?
3. Print the result of that experiment.

**Intermediate:**
4. Write a do...while retry that runs at least once even if success is true immediately.
5. Compare while vs do...while output for the same condition with a comment.

**Challenge:**
6. Write a program that shows the difference: a `while` with a false condition prints nothing, but the `do...while` version prints once. Print both outcomes.

#### Interview Questions

**Beginner:**
1. What does do...while guarantee?
2. Where is the condition checked?
3. What ends a do...while statement?
4. How is it different from while?
5. When would you use it?

**Intermediate:**
6. Why is "run at least once" useful in retries?
7. What happens if the condition is false initially in do...while?
8. Which loop would you use for "click, then check if modal appeared"?

**Scenario-Based:**
9. Write a "try the payment once; if it fails, retry twice" loop with do...while.
10. A tester argues while and do...while are the same. Give the counter-example.

#### Quick Recap

- `do { body } while (cond);`
- Runs at least once — condition checked after.
- Semicolon at the end.
- Great for at-least-once actions.

---

### Topic 6.5 – The `for...of` Loop

#### Definition

`for...of` loops **over the values** of a list (an array or string) directly — no index needed. It is the cleanest loop for arrays.

#### Why Do We Need It?

Most of the time you loop over test data — usernames, URLs, options. `for...of` removes the `i`, the `[i]`, and the length check. Less code, fewer mistakes.

#### Real-Life Analogy

`for...of` is like **going through a stack of papers one by one**: you take each paper in turn without counting them or numbering them first.

#### Simple JavaScript Example

```javascript
const browsers = ["Chrome", "Firefox", "Edge"];

for (const browser of browsers) {
  console.log("Testing on " + browser);
}
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `for (const browser of browsers)` | Take each value from `browsers`, one at a time, naming it `browser` |
| `{ ... }` | Runs once per value |

**Output:**
```
Testing on Chrome
Testing on Firefox
Testing on Edge
```

Compare with the older `for` version — much less typing.

#### Automation Testing Example

```javascript
const testUsers = ["admin", "tester01", "guest"];

for (const user of testUsers) {
  console.log(`Running login test for: ${user}`);
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using `in` instead of `of` | Confusing the two loops | `for...of` = values. `for...in` = keys (Topic 6.6) |
| Forgetting it only works on iterables | Using it on objects | Objects need `for...in` or `Object.keys()` |
| Using `const` in the loop variable | It works! | The loop variable can be `const` — it is fresh each iteration |

#### Memory Tip

> **"`for...of` = 'of each value, do this'. Values, not indexes."**

#### Practice Exercises

**Beginner:**
1. Loop over `["a", "b", "c"]` and print each value.
2. Loop over an array of three URLs and print "Opening URL".
3. Loop over a string (`for (const ch of "hi")`) and print each character.

**Intermediate:**
4. Loop over test users and print a login message for each.
5. Loop over a list and count how many items are longer than 4 characters.

**Challenge:**
6. Write a program that loops over an array of test names and builds a report line for each, then prints all lines at the end.

#### Interview Questions

**Beginner:**
1. What does for...of iterate over?
2. Do you need an index with for...of?
3. What does the loop variable hold?
4. Can for...of work on strings?
5. What is the syntax?

**Intermediate:**
6. Why is for...of preferred for arrays?
7. What is the difference between for...of and for...in?
8. When would you still use a classic for loop?

**Scenario-Based:**
9. Rewrite a for loop over test data using for...of and explain why it is cleaner.
10. You need both the value and its position. Which loop do you use?

#### Quick Recap

- `for...of` = loop over values.
- No index, no length — cleaner code.
- Works on arrays and strings.
- For objects, use `for...in`.

---

### Topic 6.6 – The `for...in` Loop

#### Definition

`for...in` loops over the **keys** (property names) of an object — and the indexes of an array (which are also keys).

#### Why Do We Need It?

When you need the *names* of properties — "what settings are in this config?" — `for...in` lists them. It is the natural partner to `for...of`.

#### Real-Life Analogy

`for...in` is like **reading the labels on jars in a pantry**: you go jar by jar and read the label (the key), not the contents.

#### Simple JavaScript Example

```javascript
const config = {
  browser: "chrome",
  headless: true,
  timeout: 30,
};

for (const key in config) {
  console.log(key + " = " + config[key]);
}
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `for (const key in config)` | For each property name in `config` |
| `key` | The name, as a string: `"browser"`, `"headless"`, `"timeout"` |
| `config[key]` | The value for that key (bracket access) |

**Output:**
```
browser = chrome
headless = true
timeout = 30
```

#### Automation Testing Example

```javascript
const environment = { url: "https://qa.app.com", browser: "firefox", retries: 2 };

for (const setting in environment) {
  console.log(`${setting}: ${environment[setting]}`);
}
```

This prints all config values — handy for a "config dump" when debugging.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using `in` when you want values | Confusion | Values → `for...of`. Keys → `for...in` |
| Using `config.key` with a variable | Syntax error | Variables need brackets: `config[key]` |
| Looping arrays with `for...in` | It works but is discouraged | Use `for...of` for arrays |

#### Memory Tip

> **"`in` = inside = keys. `of` = values. In-a-key, of-a-value."**

#### Practice Exercises

**Beginner:**
1. Create a config object and print each key with `for...in`.
2. Print only the keys, not the values.
3. Print only the values using `config[key]`.

**Intermediate:**
4. Use `for...in` to print all environment settings with a template literal.
5. Loop an object and count its properties.

**Challenge:**
6. Write a program that uses `for...in` on an object and `for...of` on its values (`Object.values` — preview of Module 8) and prints both.

#### Interview Questions

**Beginner:**
1. What does for...in loop over?
2. What does the variable hold?
3. How do you get the value for a key?
4. Is for...in good for arrays?
5. What is the difference between in and of?

**Intermediate:**
6. Why use brackets `config[key]` instead of `config.key`?
7. When would you dump an object's settings?
8. What does `Object.values(config)` do?

**Scenario-Based:**
9. Your config file has 10 settings. Show how to print them all without writing 10 lines.
10. A teammate uses for...in on an array and gets surprising output. What do you recommend?

#### Quick Recap

- `for...in` = loop over keys.
- Access values with `object[key]`.
- Arrays → `for...of`. Objects → `for...in`.

---

### Topic 6.7 – `break` and `continue`

#### Definition

- `break` **stops the loop completely**.
- `continue` **skips the rest of the current iteration** and jumps to the next one.

#### Why Do We Need It?

- `break`: "stop searching once found" — saves time in big loops.
- `continue`: "skip this item, keep going" — e.g., skip disabled tests.

#### Real-Life Analogy

- `break` is like **leaving the queue** once you find your friend — no need to see everyone else.
- `continue` is like **skipping a boring song** on a playlist — the playlist keeps playing.

#### Simple JavaScript Example

```javascript
// break — stop at 3
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);            // prints 1, 2
}

// continue — skip 3
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);            // prints 1, 2, 4, 5
}
```

#### Code Breakdown

| Keyword | Effect | Example output |
|---------|--------|----------------|
| `break` | Ends the whole loop | 1, 2 (then stops) |
| `continue` | Skips one iteration | 1, 2, 4, 5 (3 skipped) |

#### Automation Testing Example

```javascript
const tests = ["login", "logout", "regression", "performance"];
const onlyRun = "regression";

for (const test of tests) {
  if (test !== onlyRun) continue;   // skip others
  console.log("Running " + test);   // only "regression"
  break;                            // stop after finding it
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using `break` when you meant `continue` | Swapping meanings | `break` = exit. `continue` = skip this one |
| `break` outside a loop | Syntax error | Only use inside loops (or switch) |
| Overusing `break`/`continue` | Confusing flow | They are useful but use them sparingly |

#### Memory Tip

> **"`break` = break out of the loop. `continue` = continue with the next item."**

#### Practice Exercises

**Beginner:**
1. Write a loop 1-10 that breaks at 5.
2. Write a loop 1-10 that continues (skips) at 5.
3. Print both outputs and compare.

**Intermediate:**
4. Loop over an array and break when you find "target".
5. Loop over test names and skip names starting with "skip_".

**Challenge:**
6. Write a loop that prints 1-10 but skips multiples of 3 (use `continue`), then breaks after printing 7 numbers.

#### Interview Questions

**Beginner:**
1. What does break do?
2. What does continue do?
3. What is the difference?
4. Can you use break in a switch?
5. What happens after continue?

**Intermediate:**
6. Why is break useful for searching?
7. When would you use continue in tests?
8. What is the risk of too many breaks?

**Scenario-Based:**
9. Write a search loop that stops as soon as a matching test name is found.
10. A test list includes disabled tests. Show how continue skips them.

#### Quick Recap

- `break` exits the loop.
- `continue` skips to the next iteration.
- Both live inside loops (and `break` in switch).

---

### Topic 6.8 – Nested Loops

#### Definition

A **nested loop** is a loop inside another loop. The inner loop runs completely for **every** iteration of the outer loop.

#### Why Do We Need It?

- Validate a table: for each row (outer), check each cell (inner).
- Check every browser × every environment combination.
- Build grids and matrices.

#### Real-Life Analogy

Nested loops are like **a school timetable**: for each day of the week (outer loop), you go through each period (inner loop). 5 days × 7 periods = 35 cells.

#### Simple JavaScript Example

```javascript
for (let row = 1; row <= 3; row++) {
  for (let col = 1; col <= 2; col++) {
    console.log("Row " + row + ", Col " + col);
  }
}
```

#### Code Breakdown

| Part | Runs |
|------|------|
| Outer `row` loop | 3 times |
| Inner `col` loop | 2 times *per row* |
| Total prints | 3 × 2 = 6 |

**Output:**
```
Row 1, Col 1
Row 1, Col 2
Row 2, Col 1
Row 2, Col 2
Row 3, Col 1
Row 3, Col 2
```

#### Automation Testing Example

```javascript
const browsers = ["chrome", "firefox"];
const envs = ["qa", "prod"];

for (const browser of browsers) {
  for (const env of envs) {
    console.log(`Testing ${browser} on ${env}`);
  }
}
```

4 combinations — the classic matrix testing pattern.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting which loop controls what | Confusion | Outer = slow, inner = fast |
| Wrong brace pairing | Deep nesting | Indent properly; VS Code helps |
| Huge matrices (10×10 = 100 runs) | No thought about cost | Keep combinations realistic |

#### Memory Tip

> **"Inner loop finishes entirely before outer moves on. Outer = days, inner = periods."**

#### Practice Exercises

**Beginner:**
1. Print a 3×2 grid with nested loops.
2. Print a 2×2 table of row/col.
3. Multiply: outer 1-3, inner 1-3 → print the product.

**Intermediate:**
4. Print a 3×3 multiplication table.
5. Loop over browsers × environments and print each combination.

**Challenge:**
6. Write a program that prints a 4×4 pattern of `*` (a square), then a triangle of `*` using nested loops.

#### Interview Questions

**Beginner:**
1. What is a nested loop?
2. How many times does the inner loop run?
3. What does the outer loop control?
4. How many total iterations for 3×2?
5. What is a common use in testing?

**Intermediate:**
6. Why is the inner loop "faster" than the outer?
7. What is matrix testing with nested loops?
8. What is the cost of deeply nested loops?

**Scenario-Based:**
9. Write a table validator: for each row, check each column.
10. You need to test 3 browsers × 4 environments. Write the nested loop that prints all 12 combinations.

#### Quick Recap

- Nested loop = loop inside a loop.
- Inner completes fully per outer iteration.
- Total = outer count × inner count.
- Perfect for tables and matrix testing.

---

## Module 6 – Module Summary

You learned every loop JavaScript offers — `for`, `while`, `do...while`, `for...of`, `for...in` — plus `break`, `continue`, and nested loops.

## Key Takeaways

- `for`: known count; `while`: unknown count; `do...while`: at least once.
- `for...of`: array values; `for...in`: object keys.
- `break` exits; `continue` skips.
- Nested loops = matrix testing (browsers × environments).
- Always ensure loops can end (avoid infinite loops).

## Cheat Sheet

| Loop | Use when | Syntax |
|------|----------|--------|
| `for` | Known count | `for (let i = 0; i < n; i++) {}` |
| `while` | Condition-controlled | `while (cond) {}` |
| `do...while` | At least one run | `do {} while (cond);` |
| `for...of` | Array values | `for (const v of arr) {}` |
| `for...in` | Object keys | `for (const k in obj) {}` |
| `break` | Stop loop | inside loop |
| `continue` | Skip iteration | inside loop |

## Frequently Asked Questions (FAQs)

**Q1: Which loop should I use most?**
`for...of` for arrays (cleanest), `for` when you need the index, `while` for wait/retry logic.

**Q2: What if my loop never ends?**
The condition never becomes false. Check the update part. Press Ctrl+C to stop a runaway program.

**Q3: Why start at 0?**
Arrays are zero-indexed (Module 9). Start at 0 and use `< length`.

**Q4: Is `for...in` ever the right choice for arrays?**
Rarely. Use `for...of` for arrays; `for...in` for objects.

**Q5: Can I break out of nested loops?**
`break` exits only the innermost loop. Use a flag or a labeled statement for outer breaks.

**Q6: Do loops slow down tests?**
Large nested loops can. Keep test matrices realistic.

## Real Automation Examples

```javascript
// Data-driven test loop
const users = ["user1@x.com", "user2@x.com", "user3@x.com"];
for (const user of users) {
  console.log(`Testing login for ${user}`);
}

// Wait loop (retry)
let ready = false;
let attempts = 0;
while (!ready && attempts < 5) {
  attempts++;
  ready = checkElementReady();   // pretend helper
}

// Matrix testing
for (const browser of ["chrome", "firefox"]) {
  for (const env of ["qa", "staging"]) {
    console.log(`${browser} / ${env}`);
  }
}
```

## Mini Project

**Data-Driven Test Runner Simulation**

Write a program that:

1. Has an array of 4 test usernames.
2. Uses `for...of` to "run" each user's login.
3. Uses `while` to retry a flaky step up to 3 times.
4. Uses `continue` to skip users whose name starts with "skip_".
5. Prints a summary line after the loop with the total count.

## Quiz (10 Questions)

**Q1.** Which loop runs at least once?
- A) `while`
- B) `for`
- C) `do...while`
- D) `for...of`

**Q2.** Which loop is best for array values?
- A) `for...in`
- B) `for...of`
- C) `while`
- D) `do...while`

**Q3.** What does `break` do?
- A) Skips one iteration
- B) Ends the loop
- C) Restarts the loop
- D) Pauses the loop

**Q4.** What does `continue` do?
- A) Ends the loop
- B) Skips to the next iteration
- C) Repeats forever
- D) Prints the loop

**Q5.** `for (let i = 0; i < 3; i++)` runs how many times?
- A) 2
- B) 3
- C) 4
- D) infinite

**Q6.** `for...in` loops over:
- A) values
- B) keys
- C) numbers
- D) strings

**Q7.** An infinite loop is caused by:
- A) using `const`
- B) a condition that never becomes false
- C) too few iterations
- D) `for...of`

**Q8.** How many total prints in a 3×2 nested loop?
- A) 3
- B) 2
- C) 6
- D) 5

**Q9.** The update part `i++` in a for loop:
- A) Runs once
- B) Runs each iteration
- C) Never runs
- D) Runs before the loop

**Q10.** Which loop checks the condition after the body?
- A) `while`
- B) `for`
- C) `do...while`
- D) `for...in`

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | C | do...while always runs once |
| 2 | B | for...of iterates values |
| 3 | B | break exits the loop |
| 4 | B | continue skips the rest of this iteration |
| 5 | B | i = 0, 1, 2 → three runs |
| 6 | B | for...in gives keys |
| 7 | B | Condition never false = infinite |
| 8 | C | 3 × 2 = 6 |
| 9 | B | Update runs after each iteration |
| 10 | C | do...while checks after |

---

> **Module 6 complete! Loops without reusable logic would still be messy — Module 7 introduces functions, the way to package logic and reuse it everywhere.**

---

# Module 7 – Functions

Functions are the heart of maintainable automation. A function is a **named block of reusable code**. Write it once, call it anywhere, pass different data each time.

### Topic 7.1 – What is a Function?

#### Definition

A **function** is a reusable block of code with a name. You **define** it once and **call** it whenever you need that behavior.

#### Why Do We Need It?

- Write a login step once, reuse it in 50 tests.
- Keep tests short and readable.
- Fix a bug in one place instead of 50.
- This is how Page Object Model works (Module 20).

#### Real-Life Analogy

A function is like **a recipe card**.

The card says "how to make tea" (the definition). Whenever you want tea, you follow the card — you do not rewrite the recipe every time. You can also make it with variations (parameters — Topic 7.3).

#### Simple JavaScript Example

```javascript
function sayHello() {
  console.log("Hello, tester!");
}

sayHello();   // call it
sayHello();   // call it again
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `function` | Keyword that starts a definition |
| `sayHello` | The function's name |
| `() ` | Empty parentheses = no inputs |
| `{ ... }` | The body — runs when called |
| `sayHello();` | Calling the function (runs the body) |

#### Automation Testing Example

```javascript
function openLoginPage() {
  console.log("Opening https://example.com/login");
  console.log("Waiting for page load");
}

openLoginPage();
```

A helper like this can be reused by every login test.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting the `()` when calling | Confusing definition with call | Calls always have `()`: `sayHello()` |
| Forgetting to call at all | Nothing prints | Defining is not running. Call it! |
| Naming functions vaguely | `function doThing()` | Use verb names: `openLoginPage`, `submitForm` |

#### Memory Tip

> **"Define with `function name() {}`. Run with `name()`."**

#### Practice Exercises

**Beginner:**
1. Define a function that prints your name, then call it.
2. Define a function that prints "Starting test", call it twice.
3. Call a function that does not exist — read the error.

**Intermediate:**
4. Define two functions and call them in order.
5. Write a function that prints a test header (name + line of `=`).

**Challenge:**
6. Write a program with three functions that together print a mini test report.

#### Interview Questions

**Beginner:**
1. What is a function?
2. How do you define one?
3. How do you call one?
4. What happens if you never call it?
5. Why are functions reusable?

**Intermediate:**
6. Why are functions important for test maintainability?
7. What is the difference between defining and calling?
8. What is a good function name?

**Scenario-Based:**
9. You have 50 tests that all need a login step. How do functions help?
10. A teammate writes the same 5 lines in 10 tests. What advice do you give?

#### Quick Recap

- Functions = named, reusable code blocks.
- Define once, call many times.
- Verb names: `openLoginPage`.

---

### Topic 7.2 – Function Declarations and Expressions

#### Definition

A **function declaration** is the classic `function name() {}` form. A **function expression** stores a function inside a variable: `const myFunc = function() {};`.

#### Why Do We Need It?

Expressions are handy when you want to pass functions around (callbacks, Module 7.7). Both are everywhere in automation frameworks.

#### Real-Life Analogy

- Declaration = **a named worker on staff** — always available.
- Expression = **a temporary worker hired on the spot** — assigned to a task when needed.

#### Simple JavaScript Example

```javascript
// Declaration
function add(a, b) {
  return a + b;
}

// Expression
const multiply = function (a, b) {
  return a * b;
};

console.log(add(2, 3));       // 5
console.log(multiply(2, 3));  // 6
```

#### Code Breakdown

| Form | Syntax | Notes |
|------|--------|-------|
| Declaration | `function name() {}` | Can be called before its line (hoisting, Topic 7.8) |
| Expression | `const name = function() {};` | Must be defined before calling |

#### Automation Testing Example

```javascript
// Declaration — a helper available anywhere
function takeScreenshot(name) {
  console.log("Saved screenshot: " + name + ".png");
}

// Expression — a config callback
const onTestStart = function (testName) {
  console.log("Starting: " + testName);
};

takeScreenshot("login-page");
onTestStart("Login Test");
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Calling an expression before its line | Hoisting confusion | Expressions must be defined first |
| Forgetting the `=` and `;` in expressions | Mixed syntax | `const f = function() {};` |
| Thinking they behave differently | Misunderstanding | Both are functions; timing differs |

#### Memory Tip

> **"Declaration = named. Expression = stored in a variable. Both are functions."**

#### Practice Exercises

**Beginner:**
1. Write the same function both ways and call both.
2. Print the expression function — what does it show?
3. Call an expression before defining it — what error appears?

**Intermediate:**
4. Create an expression that checks if a number is even.
5. Write a declaration and an expression for "print test status" and use both.

**Challenge:**
6. Write a program demonstrating the hoisting difference: call the declaration before its line (works) and the expression before its line (fails).

#### Interview Questions

**Beginner:**
1. What is a function declaration?
2. What is a function expression?
3. What is the syntax difference?
4. Can you call a declaration before its line?
5. Can you call an expression before its line?

**Intermediate:**
6. What is hoisting?
7. Why use an expression over a declaration?
8. What does a stored function enable?

**Scenario-Based:**
9. A test helper is used before its definition and works. Which form is it?
10. You want to pass a function into another function. Which form is convenient? Why?

#### Quick Recap

- Declaration: `function name() {}` — hoisted.
- Expression: `const name = function() {};` — not hoisted.
- Both are widely used in frameworks.

---

### Topic 7.3 – Parameters and Arguments

#### Definition

**Parameters** are the named placeholders in a function's definition. **Arguments** are the actual values you pass when calling it.

#### Why Do We Need It?

Functions become powerful when they accept input: `login("tester01", "pass123")` can log in *any* user. Parameters make one function serve many cases.

#### Real-Life Analogy

Parameters are **slots on a vending machine** (Snack, Drink). Arguments are **what you put in each slot**. One machine, many different snacks.

#### Simple JavaScript Example

```javascript
function greet(name) {          // name = parameter
  console.log("Hello, " + name);
}

greet("Ravi");                   // "Ravi" = argument
greet("Priya");
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `function greet(name)` | `name` is the parameter — a placeholder |
| `greet("Ravi")` | `"Ravi"` is the argument — the real value |
| `greet("Priya")` | Same function, different argument |

**Multiple parameters:**

```javascript
function logIn(username, password) {
  console.log("Logging in as " + username);
  console.log("Password length: " + password.length);
}

logIn("tester01", "Passw0rd!");
```

#### Automation Testing Example

```javascript
function openPage(url) {
  console.log("Opening: " + url);
}

function fillField(locator, value) {
  console.log("Filling " + locator + " with " + value);
}

openPage("https://example.com/login");
fillField("#username", "tester01");
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Confusing parameters and arguments | New vocabulary | Parameters = definition; arguments = call |
| Missing arguments | Calling `greet()` with none | Result: `undefined` in output |
| Wrong order of arguments | Mixing up | Order matters: `logIn(user, pass)` |

#### Memory Tip

> **"Parameters are parking spaces. Arguments are the cars that park in them."**

#### Practice Exercises

**Beginner:**
1. Write `greet(name)` and call it with 3 names.
2. Write `add(a, b)` that prints the sum.
3. Call `add` with only one argument — what prints?

**Intermediate:**
4. Write `login(username, password)` and call with two sets of credentials.
5. Write `fillField(locator, value)` and use it for username and password fields.

**Challenge:**
6. Write a function `assertText(actual, expected)` that prints PASS or FAIL, and call it with three test cases.

#### Interview Questions

**Beginner:**
1. What is a parameter?
2. What is an argument?
3. Do parameters and arguments always match in count?
4. What happens with a missing argument?
5. Does order matter?

**Intermediate:**
6. Why are parameters essential for data-driven tests?
7. What is `undefined` when an argument is missing?
8. How would you make a reusable login function?

**Scenario-Based:**
9. Write a helper `assertElementText(locator, expected)`.
10. A function `add(a, b)` returns NaN when called with one argument. Explain why.

#### Quick Recap

- Parameters = placeholders in the definition.
- Arguments = real values at the call.
- Order and count matter.

---

### Topic 7.4 – Return Values

#### Definition

The `return` keyword **sends a value back** from a function to wherever it was called. The function then stops.

#### Why Do We Need It?

Functions that just print are limited. Real helpers **compute and give back** values: "calculate total", "get retry count", "build a URL". The caller uses the returned value.

#### Real-Life Analogy

`return` is like **a vending machine giving you your item**: you put in coins (arguments), press the button (call), and the machine hands you a product (the return value).

#### Simple JavaScript Example

```javascript
function add(a, b) {
  return a + b;         // sends the result back
}

let sum = add(3, 4);    // sum becomes 7
console.log(sum);
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `return a + b;` | Computes and hands back 7, then stops the function |
| `let sum = add(3, 4)` | The call *becomes* 7, stored in `sum` |

**Remember:** code after `return` never runs.

```javascript
function check(x) {
  return x > 5;
  console.log("This never prints");   // unreachable
}
```

#### Automation Testing Example

```javascript
function buildUrl(base, path) {
  return base + path;
}

function isSuccess(status) {
  return status === 200;
}

const url = buildUrl("https://example.com", "/login");
console.log(url);                     // https://example.com/login
console.log(isSuccess(200) ? "OK" : "Error");
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting `return` | Function prints but returns nothing | If you assign a call, make sure it returns |
| Code after `return` | Misunderstanding | It is unreachable — remove it |
| Confusing print with return | `console.log` vs `return` | Print shows output; return gives a value |

#### Memory Tip

> **"`return` = hand back the result and leave the function."**

#### Practice Exercises

**Beginner:**
1. Write `multiply(a, b)` returning the product; print the result.
2. Write `isEven(n)` returning a boolean.
3. Call a function that prints but does not return — assign it. What is the value?

**Intermediate:**
4. Write `getFullName(first, last)` that returns a joined name.
5. Write `checkStatus(code)` returning "OK" or "Error".

**Challenge:**
6. Write `calculateTotal(items, price)` that multiplies and returns, then print a summary with the returned value.

#### Interview Questions

**Beginner:**
1. What does return do?
2. What happens after return?
3. Can a function return a boolean?
4. What does a function with no return give?
5. How do you capture a return value?

**Intermediate:**
6. Why is return better than printing for helpers?
7. What is `undefined` from a no-return function?
8. Give a test helper that returns a value.

**Scenario-Based:**
9. Write `getRetryDelay(attempt)` returning seconds that grow with each attempt.
10. A helper prints the result but the caller gets `undefined`. What is wrong?

#### Quick Recap

- `return` sends a value back and stops the function.
- Capture it: `let x = fn();`.
- No return → `undefined`.

---

### Topic 7.5 – Arrow Functions

#### Definition

**Arrow functions** are a shorter way to write functions: `(a, b) => a + b`. They are the modern standard in test frameworks.

#### Why Do We Need It?

- Less typing for small functions.
- Required style in Playwright/Cypress test bodies.
- Cleaner callbacks (Module 7.7).

#### Real-Life Analogy

An arrow function is like **a text message instead of a formal letter** — same information, fewer words.

#### Simple JavaScript Example

```javascript
// Declaration
function addOld(a, b) { return a + b; }

// Arrow
const addNew = (a, b) => a + b;

// One parameter — parentheses optional
const double = n => n * 2;

console.log(addNew(2, 3));  // 5
console.log(double(4));     // 8
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `(a, b)` | Parameters |
| `=>` | The arrow — "goes to" |
| `a + b` | Returned value (implicit return, no `return` needed) |

**With a block body:**

```javascript
const login = (user, pass) => {
  console.log("Logging in " + user);
  return true;
};
```

#### Automation Testing Example

```javascript
// Cypress style
cy.get("#login").click(() => {
  console.log("Clicked");
});

// Playwright style — arrow function as the test body
test("Login works", async () => {
  console.log("Running login test");
});
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting parentheses with 2+ params | `a, b =>` is invalid | `(a, b) =>` |
| Thinking `=>` is `>=` | Typo | Arrow = `=>`. Greater-equal = `>=` |
| Mixing arrow with `this` confusion | Advanced topic | Arrow functions handle `this` differently — Module 8.5 |

#### Memory Tip

> **"`=>` = the arrow of 'goes to'. `(x) => x * 2` = x goes to x doubled."**

#### Practice Exercises

**Beginner:**
1. Convert `function add(a, b) { return a + b; }` to an arrow.
2. Write `const square = n => n * n;` and call it.
3. Write an arrow with a block body.

**Intermediate:**
4. Write an arrow that checks if a string is longer than 5 characters.
5. Rewrite three declarations from earlier modules as arrows.

**Challenge:**
6. Write a program that defines and uses five arrow functions, each with a comment on what it does.

#### Interview Questions

**Beginner:**
1. What is an arrow function?
2. How do you write one?
3. What is implicit return?
4. When are parentheses optional?
5. Where are arrows used in test frameworks?

**Intermediate:**
6. What is the difference between `=>` and `>=`?
7. When do you need `{ }` in an arrow function?
8. Why do frameworks prefer arrows?

**Scenario-Based:**
9. Rewrite `function isVisible(e) { return e; }` as an arrow.
10. A teammate writes `test(() => { ... })`. Explain what the arrow is.

#### Quick Recap

- Arrow functions: `(params) => value`.
- Implicit return for single expressions.
- The modern style in Playwright and Cypress.

---

### Topic 7.6 – Anonymous Functions

#### Definition

An **anonymous function** is a function **without a name**. It is usually passed directly to another function or stored in a variable.

#### Why Do We Need It?

Event handlers and callbacks often need a function "on the spot": `button.addEventListener("click", function() {...})`. No name needed — it is used once, right there.

#### Real-Life Analogy

An anonymous function is like **a one-time guest speaker** — you do not need their name on the door; they just come, speak, and go.

#### Simple JavaScript Example

```javascript
// Anonymous function stored in a variable
const greet = function () {
  console.log("Hello from an anonymous function");
};

greet();

// Anonymous function passed directly
[1, 2, 3].forEach(function (n) {
  console.log(n * 2);
});
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `function () {}` | A function with no name |
| Stored as `greet` | The variable gives it a handle |
| `.forEach(function (n) {...})` | Passed inline as a callback |

#### Automation Testing Example

```javascript
// Playwright-style: anonymous function as test body
test("Anonymous example", function () {
  console.log("No name needed here");
});
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting you cannot call it by name | No name exists | Store it in a variable if you need to reuse it |
| Confusing anonymous with arrow | Related but different | Arrows are a shorter anonymous form |

#### Memory Tip

> **"Anonymous = no name. Use it on the spot, don't plan to reuse."**

#### Practice Exercises

**Beginner:**
1. Store an anonymous function in a variable and call it.
2. Pass an anonymous function to `forEach` (preview of arrays).
3. Print what the function's `name` property shows (fun fact: it is empty).

**Intermediate:**
4. Write an anonymous function that checks if a value is > 10, and use it with `filter` (preview of Module 9).
5. Compare an anonymous function and its arrow version side by side.

**Challenge:**
6. Write a program using three anonymous functions (forEach, filter, direct pass) with comments.

#### Interview Questions

**Beginner:**
1. What is an anonymous function?
2. How do you reuse one?
3. Where are they commonly passed?
4. What is its name?
5. How is it different from a declaration?

**Intermediate:**
6. Why pass functions inline?
7. What is the relationship between anonymous and arrow functions?
8. Why does an anonymous function need a name in stack traces?

**Scenario-Based:**
9. Show an anonymous function used as an event handler (preview of Module 14).
10. A debugger shows "anonymous function" in the stack. What does that mean?

#### Quick Recap

- Anonymous = no name.
- Passed inline or stored in variables.
- Arrows are the shorter anonymous style.

---

### Topic 7.7 – Callback Functions

#### Definition

A **callback** is a function **passed into another function** to be called later — when an event happens, when a task finishes, or when each item of a list is processed.

#### Why Do We Need It?

- `forEach`, `map`, `filter` (Module 9) all take callbacks.
- Async operations (Module 15) use callbacks to say "when done, do this."
- Test frameworks use callbacks for test bodies and hooks.

#### Real-Life Analogy

A callback is like **leaving a message with a receptionist**: "When the manager arrives, tell them I called." You leave the instruction (function) and the receptionist runs it at the right time.

#### Simple JavaScript Example

```javascript
function processTest(testName, callback) {
  console.log("Processing: " + testName);
  callback(testName);      // call the callback
}

function onComplete(name) {
  console.log("Finished " + name);
}

processTest("Login Test", onComplete);
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `processTest(testName, callback)` | Accepts a function as a parameter |
| `callback(testName)` | Runs the passed function, with data |
| `onComplete` | The callback — passed without `()` (we are not calling it now) |

**Output:**
```
Processing: Login Test
Finished Login Test
```

#### Automation Testing Example

```javascript
const testNames = ["Login", "Logout", "Register"];

testNames.forEach((name) => {
  console.log("Running test: " + name);
});
```

`forEach` runs our arrow callback for each item — a callback in action.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Passing `onComplete()` with parens | Calling instead of passing | Pass the name: `onComplete`, no `()` |
| Forgetting the callback is called later | Timing confusion | The outer function decides when to call it |
| Not calling the callback inside | Nothing happens | Your function must invoke `callback()` |

#### Memory Tip

> **"Callback = 'here is what to do when it happens.' Pass the recipe, not the meal."**

#### Practice Exercises

**Beginner:**
1. Write `run(name, cb)` that calls `cb(name)`.
2. Pass an arrow function as the callback.
3. Try passing `cb()` with parens — what happens?

**Intermediate:**
4. Write a callback that prints "PASS" or "FAIL" based on a value.
5. Use `forEach` with an arrow callback to print test names.

**Challenge:**
6. Write a function `retry(action, attempts)` that calls `action` up to `attempts` times until it returns true.

#### Interview Questions

**Beginner:**
1. What is a callback?
2. How do you pass a function as an argument?
3. Why no parentheses when passing?
4. Who calls the callback?
5. Where are callbacks common in automation?

**Intermediate:**
6. Why do async operations need callbacks?
7. What is "callback hell" (why arrow functions + promises help)?
8. How does `forEach` use a callback?

**Scenario-Based:**
9. Show how you would run a callback after a login completes.
10. A callback never runs. What are possible reasons?

#### Quick Recap

- Callback = function passed to run later.
- Pass without `()`.
- The receiving function calls it.

---

### Topic 7.8 – Scope and Hoisting

#### Definition

**Scope** (review from Module 2) is where a variable is visible. **Hoisting** is JavaScript moving function *declarations* (and `var` variables) to the top of their scope before running.

#### Why Do We Need It?

- Understanding scope explains "why can't my helper see this variable?"
- Hoisting explains "why can I call this function before its line?"

#### Real-Life Analogy

- Scope: **room keys** — each key only opens its own room.
- Hoisting: **a chef who memorizes all recipes before cooking** — every recipe (declaration) is ready before the first dish is made.

#### Simple JavaScript Example

```javascript
console.log(greet());          // works — hoisted!

function greet() {
  return "Hello from hoisting";
}

// Scope example
function outer() {
  let secret = "inside only";
  function inner() {
    console.log(secret);       // works — inner sees outer
  }
  inner();
}
outer();
// console.log(secret);        // ERROR — outside scope
```

#### Code Breakdown

| Behavior | Why |
|----------|-----|
| `greet()` before its line | Function declarations are hoisted (moved up) |
| `secret` inside `outer` | Only `outer` and its children can see it |
| `secret` outside | Not visible — block/function scope |

**Important:** arrow functions and expressions are **not** hoisted — define before use.

#### Automation Testing Example

```javascript
// Common pattern: helper functions declared later, used in tests above
runLoginTest();

function runLoginTest() {
  console.log("Login test ran");
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Expecting arrows to hoist | Misunderstanding | Only declarations hoist |
| Accessing block variables outside | Scope rules | Declare at the level you need |
| Overusing hoisting | Reliance on magic | Define before use — clearer |

#### Memory Tip

> **"Declarations hoist. Expressions and arrows don't. Scope = visibility."**

#### Practice Exercises

**Beginner:**
1. Call a declaration before its line — it works. Note it.
2. Call an arrow before its line — it fails. Note the difference.
3. Print a variable from inside a nested function.

**Intermediate:**
4. Write outer/inner scope example and try accessing the inner variable outside.
5. Write a program with a hoisted function and an un-hoisted arrow, and label each behavior with a comment.

**Challenge:**
6. Write a note (5 lines) titled "Hoisting in my own words" with the two rules.

#### Interview Questions

**Beginner:**
1. What is hoisting?
2. What gets hoisted?
3. Do arrows hoist?
4. What is scope?
5. Can a child see a parent's variable?

**Intermediate:**
6. Why does hoisting exist?
7. Why are expressions safer to rely on?
8. What is the difference between function and block scope?

**Scenario-Based:**
9. A helper works in one test file but not another. What scope question do you ask?
10. A teammate calls an arrow function before its line and it fails. Explain why.

#### Quick Recap

- Hoisting: declarations move to the top; arrows/expressions do not.
- Scope: where variables are visible.
- Define before use — safest habit.

---

## Module 7 – Module Summary

You learned functions inside out: declarations, expressions, parameters, returns, arrows, anonymous functions, callbacks, scope, and hoisting.

## Key Takeaways

- Functions = reusable logic, the basis of Page Object Model.
- Parameters in, return values out.
- Arrows `=>` are the modern shorthand.
- Callbacks = functions passed to run later.
- Declarations hoist; arrows/expressions do not.

## Cheat Sheet

| Form | Syntax |
|------|--------|
| Declaration | `function name(p) { return x; }` |
| Expression | `const name = function(p) { return x; };` |
| Arrow | `const name = (p) => x;` |
| Anonymous | `function (p) { }` / `(p) => { }` |
| Call | `name(args)` |
| Return | `return value;` |

## Frequently Asked Questions (FAQs)

**Q1: Function or arrow?**
Modern code: arrows. They are shorter and used by frameworks.

**Q2: When do I need `{ }` in an arrow?**
When the body has more than one statement or you need `return` explicitly.

**Q3: What if a function has no return?**
It returns `undefined`.

**Q4: Can functions be values?**
Yes — that is what callbacks and expressions are all about.

**Q5: What is "callback hell"?**
Deeply nested callbacks. Promises/async solve it (Module 15).

**Q6: Why do my test helpers "not exist"?**
Scope or hoisting issue — check where you defined them and how you are calling them.

## Real Automation Examples

```javascript
// Page Object style helper
function login(username, password) {
  console.log(`Logging in ${username}`);
  return isLoginSuccessful(username, password);
}

// Callback with array
const results = ["PASS", "FAIL", "PASS"];
results.forEach((r) => console.log("Result: " + r));

// Arrow + return
const getBaseUrl = (env) => env === "prod" ? "https://app.com" : "https://qa.app.com";
```

## Mini Project

**Login Helper Library**

Write a program that:

1. Defines `login(username, password)` — returns a boolean.
2. Defines an arrow `getWelcomeMessage(user)` returning a template-literal message.
3. Defines `runTestWithRetry(action, maxAttempts)` using a callback.
4. Uses all three to simulate two users logging in with retry.

## Quiz (10 Questions)

**Q1.** What runs a function named `run()`?
- A) `run`
- B) `run()`
- C) `run;`
- D) `function run()`

**Q2.** A parameter is:
- A) The real value passed
- B) A placeholder in the definition
- C) A return value
- D) A loop counter

**Q3.** What does `return` do?
- A) Prints a value
- B) Sends a value back and stops
- C) Restarts the function
- D) Loops

**Q4.** Which is an arrow function?
- A) `function f() {}`
- B) `const f = () => 5;`
- C) `const f = function() {};`
- D) `f -> 5`

**Q5.** What is a callback?
- A) A loop
- B) A function passed to run later
- C) A variable
- D) An object

**Q6.** Function declarations are:
- A) hoisted
- B) not hoisted
- C) deleted
- D) ignored

**Q7.** `const add = (a, b) => a + b;` — calling `add(2,3)` returns:
- A) "23"
- B) 5
- C) undefined
- D) 6

**Q8.** A function with no `return` gives:
- A) 0
- B) null
- C) undefined
- D) false

**Q9.** Which function form is NOT hoisted?
- A) Declaration
- B) Arrow function
- C) Both
- D) Neither

**Q10.** Passing a callback means:
- A) `run(cb())`
- B) `run(cb)`
- C) `run(cb;)`
- D) `run = cb`

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | Calls use `()` |
| 2 | B | Parameters are placeholders |
| 3 | B | return hands back a value |
| 4 | B | Arrow syntax: `=>` |
| 5 | B | Callback runs later |
| 6 | A | Declarations are hoisted |
| 7 | B | 2 + 3 = 5 |
| 8 | C | No return → undefined |
| 9 | B | Arrows/expressions are not hoisted |
| 10 | B | Pass the function itself, no parens |

---

> **Module 7 complete! Functions give you reusable logic. Module 8 introduces objects — the way JavaScript groups related data and behavior together, exactly like a real test record.**

---

# Module 8 – Objects

An **object** is a collection of named values. Think of it as a real-world "thing" — a user, a browser, a test result — with properties describing it and methods it can do.

### Topic 8.1 – What is an Object?

#### Definition

An object stores data as **key-value pairs** inside `{ }`. The key (property name) identifies the value: `{ username: "tester01" }`.

#### Why Do We Need It?

- Group related test data: a user's username, password, role.
- Config objects: `{ browser: "chrome", headless: true }`.
- API responses are objects in JavaScript.

#### Real-Life Analogy

An object is like **a passport**.

It has labeled fields: Name, Passport Number, Country. You look up "Country" and get the value. The passport is one thing containing many labeled values.

#### Simple JavaScript Example

```javascript
const user = {
  username: "tester01",
  role: "admin",
  isActive: true,
};

console.log(user.username);   // tester01
console.log(user.role);       // admin
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `{ }` | Creates an object |
| `username: "tester01"` | A property: key `username`, value `"tester01"` |
| `user.username` | Dot notation — read a property by its key |

#### Automation Testing Example

```javascript
const testConfig = {
  browser: "chromium",
  baseUrl: "https://example.com",
  headless: true,
};

console.log(`Testing ${testConfig.browser} against ${testConfig.baseUrl}`);
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using `=` instead of `:` inside objects | Mixing with variables | Inside `{ }`, it is `key: value` |
| Forgetting commas between properties | Syntax error | Every property except the last needs a comma |
| Using quotes on keys | Unnecessary | Keys are usually plain words |

#### Memory Tip

> **"Object = passport. `{ key: value }` = labeled fields, dot = lookup."**

#### Practice Exercises

**Beginner:**
1. Create an object with your name and role; print both with dot notation.
2. Create a `testConfig` object with three properties.
3. Print `typeof` of an object.

**Intermediate:**
4. Create a `browser` object (name, version, headless) and print a sentence.
5. Add a property after creation: `user.country = "IN";` and print it.

**Challenge:**
6. Create a `testResult` object (name, status, duration) and print a full report line using template literals.

#### Interview Questions

**Beginner:**
1. What is an object?
2. What is a key-value pair?
3. How do you read a property?
4. What symbols wrap an object?
5. Can an object hold different value types?

**Intermediate:**
6. Why are objects good for test data?
7. What is dot notation?
8. How do API responses relate to objects?

**Scenario-Based:**
9. Show a config object for a test suite.
10. A user object should hold username, password, and role. Write it.

#### Quick Recap

- Objects = key-value collections in `{ }`.
- Read with `obj.key`.
- Perfect for test data and configs.

---

### Topic 8.2 – Object Properties

#### Definition

**Properties** are the key-value pairs inside an object. You can read, add, update, and delete them.

#### Why Do We Need It?

Test data changes: a user's status flips from active to inactive; a test's result updates from PENDING to PASS. Property operations handle this.

#### Real-Life Analogy

Properties are like **fields on a form**. You can read a field, fill a blank field, correct a wrong field, or cross out a field entirely.

#### Simple JavaScript Example

```javascript
const car = { brand: "Toyota" };

car.model = "Corolla";     // ADD a property
car.brand = "Honda";       // UPDATE a property
console.log(car.brand);    // Honda
console.log(car.model);    // Corolla

delete car.model;          // DELETE a property
console.log(car.model);    // undefined
```

#### Code Breakdown

| Operation | Code | Result |
|-----------|------|--------|
| Read | `car.brand` | `"Toyota"` |
| Add | `car.model = "Corolla"` | New property |
| Update | `car.brand = "Honda"` | Changed value |
| Delete | `delete car.model` | Removed |

**Bracket notation** for dynamic keys:

```javascript
const key = "username";
console.log(user[key]);   // works — bracket with a variable
```

#### Automation Testing Example

```javascript
const test = { name: "Login", status: "PENDING" };
test.status = "PASS";          // update as the test runs
console.log(`${test.name}: ${test.status}`);
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using dot with a variable key | `user.key` looks up "key", not the variable | Use brackets: `user[key]` |
| `delete` misuse | Expecting a value back | `delete` returns true/false; it does not return the value |
| Trying to update a property that does not exist | It adds instead | That is normal — JS adds it for you |

#### Memory Tip

> **"Dot for fixed keys. Brackets for variable keys. `delete` removes."**

#### Practice Exercises

**Beginner:**
1. Add, update, and delete a property on an object; print after each.
2. Read a property with bracket notation.
3. Print `car.model` after `delete` — what do you get?

**Intermediate:**
4. Update a test result object from PENDING to PASS.
5. Use a variable with bracket notation to read a property.

**Challenge:**
6. Write a program that reads properties both ways (dot and bracket) and explains when each is needed.

#### Interview Questions

**Beginner:**
1. What is a property?
2. How do you add one?
3. How do you update one?
4. How do you delete one?
5. When do you use brackets instead of dots?

**Intermediate:**
6. Why is bracket notation needed for dynamic keys?
7. What does `delete` return?
8. What happens updating a missing property?

**Scenario-Based:**
9. Show how you would flip a test status to PASS mid-run.
10. A config lookup needs a key from a variable. Show dot vs bracket and which works.

#### Quick Recap

- Read/add/update/delete properties freely.
- Dot for fixed, brackets for dynamic keys.
- Objects are mutable — that is their power.

---

### Topic 8.3 – Object Methods

#### Definition

A **method** is a function stored as a property of an object. It describes what the object **can do**.

#### Why Do We Need It?

Objects that carry both data and behavior model real things: a `user` object that can `login()`, a `browser` object that can `open()`. Frameworks expose methods everywhere (`page.goto()`, `page.click()`).

#### Real-Life Analogy

A method is like **the buttons on a washing machine**: the machine (object) has settings (properties) and actions (methods) like "start", "pause", "spin".

#### Simple JavaScript Example

```javascript
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(5, 3)); // 2
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `add(a, b) { ... }` | Shorthand method syntax — a function in the object |
| `calculator.add(5, 3)` | Calling the method with arguments |

#### Automation Testing Example

```javascript
const browser = {
  name: "chromium",
  open() {
    console.log("Opening " + this.name);   // 'this' = the object itself
  },
  close() {
    console.log("Closing " + this.name);
  },
};

browser.open();    // Opening chromium
browser.close();   // Closing chromium
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting `this` inside methods | Method cannot find object data | Use `this` to access the object's own properties |
| Adding commas after methods | Same as properties | Yes, methods need commas too |
| Calling a method without `()` | `browser.open` returns the function | `browser.open()` runs it |

#### Memory Tip

> **"Methods = the object's actions. `this` = 'me, the object'."**

#### Practice Exercises

**Beginner:**
1. Create a `dog` object with a `bark()` method.
2. Create a `calculator` with add and multiply methods.
3. Call a method without `()` — what prints?

**Intermediate:**
4. Create a `user` object with a `login()` method using `this.username`.
5. Create a `browser` object with open/close methods.

**Challenge:**
6. Create a `testRunner` object with properties (name, passed) and methods (run(), summary()) that print a report.

#### Interview Questions

**Beginner:**
1. What is a method?
2. How is it written in an object?
3. How do you call one?
4. What is `this`?
5. Are methods just functions?

**Intermediate:**
6. Why are methods powerful for modeling test objects?
7. What happens calling a method without `()`?
8. Why do framework commands look like `page.goto()`?

**Scenario-Based:**
9. Model a `loginPage` object with `enterUsername()`, `enterPassword()`, `submit()`.
10. A method cannot see its object's data. What is missing?

#### Quick Recap

- Methods = object functions.
- Call with `object.method()`.
- `this` refers to the object itself.

---

### Topic 8.4 – Nested Objects

#### Definition

A **nested object** is an object inside another object. Objects can contain other objects (and arrays — Module 9) as property values.

#### Why Do We Need It?

Real data is hierarchical: a `user` has an `address`, which has a `city`. API responses are deeply nested. Reading nested data is a core automation skill.

#### Real-Life Analogy

Nested objects are like **a filing cabinet in a room in a building**. To reach a document, you go building → room → cabinet → drawer.

#### Simple JavaScript Example

```javascript
const user = {
  name: "Ravi",
  address: {
    city: "Hyderabad",
    zip: "500001",
  },
  contact: {
    email: "ravi@example.com",
    phone: "1234567890",
  },
};

console.log(user.address.city);    // Hyderabad
console.log(user.contact.email);   // ravi@example.com
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `address: { ... }` | A nested object |
| `user.address` | Gets the inner object |
| `user.address.city` | Chains down to the innermost value |

#### Automation Testing Example

```javascript
const apiResponse = {
  status: 200,
  data: {
    user: {
      profile: { firstName: "Ravi", role: "admin" },
    },
  },
};

console.log(apiResponse.data.user.profile.role);  // admin
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting a level in the chain | `user.city` when city is under address | Chain all levels: `user.address.city` |
| Crashes on missing levels | `null` in the chain | Use `?.` (Module 4.8) |
| Getting lost in deep nesting | Complex data | Print the object with `console.log(obj)` to inspect |

#### Memory Tip

> **"Nested = chains of dots: `a.b.c.d`. Missing a link? Use `?.`."**

#### Practice Exercises

**Beginner:**
1. Create a `user` with a nested `address`; print the city.
2. Add a nested `contact` object and print the email.
3. Print the whole object to inspect it.

**Intermediate:**
4. Create a nested `apiResponse` and read `data.user.profile.role`.
5. Use optional chaining to safely read a deeply nested value.

**Challenge:**
6. Write a program that models a `testCase` with nested `metadata` (author, priority, tags) and prints a full report from it.

#### Interview Questions

**Beginner:**
1. What is a nested object?
2. How do you read a nested value?
3. What is a chain of dots?
4. Can objects contain arrays?
5. Why is nesting common in APIs?

**Intermediate:**
6. What does `?.` do in a nested chain?
7. How do you inspect a deep object?
8. What is the risk of long chains?

**Scenario-Based:**
9. An API returns `{ data: { user: { name } } }`. How do you get the name safely?
10. A test crashes reading `response.data.user.name` when user is null. Fix it.

#### Quick Recap

- Objects can nest inside objects.
- Read with chained dots.
- Use `?.` for safety on optional levels.

---

### Topic 8.5 – The `this` Keyword

#### Definition

Inside a method, `this` refers to **the object that owns the method**. It is how a method accesses its own data.

#### Why Do We Need It?

Without `this`, a method could not read the object's properties: `login()` needs `this.username`.

#### Real-Life Analogy

`this` is like **saying "my"** in a conversation: "my name", "my address". When the user object speaks (runs a method), "my" means the user's own data.

#### Simple JavaScript Example

```javascript
const user = {
  username: "tester01",
  greet() {
    console.log("Hello, I am " + this.username);
  },
};

user.greet();   // Hello, I am tester01
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `this.username` | "My username" — from the current object |
| `user.greet()` | Calls greet on `user`, so `this` = `user` |

#### Automation Testing Example

```javascript
const loginPage = {
  url: "https://example.com/login",
  open() {
    console.log("Navigating to " + this.url);
  },
};

loginPage.open();   // Navigating to https://example.com/login
```

**Important for arrow functions:** arrows do **not** have their own `this`. Inside an arrow, `this` means the surrounding scope. Methods should use regular function syntax.

```javascript
const bad = {
  name: "X",
  show: () => console.log(this.name),   // undefined or global — wrong!
};
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using `this` outside an object | It means something global | Only use `this` inside methods |
| Using arrows for methods | Arrow `this` behavior | Use `method() { }` shorthand for methods |
| Forgetting `this` entirely | Reference error | Methods need `this` to see object data |

#### Memory Tip

> **"`this` = 'my'. Arrow functions don't have a 'my' — use regular methods."**

#### Practice Exercises

**Beginner:**
1. Create an object with a method using `this`, call it.
2. Add a second method using `this`.
3. Remove `this` and observe the error.

**Intermediate:**
4. Create a `counter` object with `count` and an `increment()` method using `this`.
5. Create a `browser` object whose `info()` prints its name and version with `this`.

**Challenge:**
6. Write a program demonstrating the arrow-function `this` difference: a working method and a broken arrow version, with comments explaining both.

#### Interview Questions

**Beginner:**
1. What does `this` mean in a method?
2. How do you access an object's data in a method?
3. Do arrow functions have `this`?
4. What happens without `this`?
5. When should you use `this`?

**Intermediate:**
6. Why don't arrows have their own `this`?
7. What is "method shorthand"?
8. Why would `this` be wrong inside an arrow method?

**Scenario-Based:**
9. A `loginPage` method needs its own URL. Show the correct code.
10. A method prints undefined for `this.username`. What happened?

#### Quick Recap

- `this` = the owning object inside a method.
- Methods use regular syntax, not arrows, for `this`.
- Essential for objects with behavior.

---

### Topic 8.6 – Object Destructuring (Preview)

#### Definition

**Destructuring** extracts properties into separate variables in one line: `const { username, role } = user;`.

#### Why Do We Need It?

- Short, readable data access.
- Very common in automation configs and test data.
- Full coverage in Module 16.

#### Real-Life Analogy

Destructuring is like **unpacking a suitcase into separate drawers** — instead of always opening the suitcase (object), each item (property) gets its own drawer (variable).

#### Simple JavaScript Example

```javascript
const user = { username: "tester01", role: "admin" };

const { username, role } = user;
console.log(username);   // tester01
console.log(role);       // admin
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `const { username, role } = user;` | Creates `username` and `role` variables from the matching keys |
| `console.log(username)` | Uses the new variables directly |

#### Automation Testing Example

```javascript
const config = { browser: "chrome", headless: true, timeout: 30 };
const { browser, timeout } = config;

console.log(`Browser ${browser}, timeout ${timeout}s`);
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Wrong braces: `[ ]` vs `{ }` | Mixing array/object syntax | Objects destructure with `{ }` |
| Key names must match | `const { name } = user` needs key `name` | Use the exact property names |
| Forgetting the source object | `const { a } = something` | Always destructure from an object |

#### Memory Tip

> **"`const { key1, key2 } = obj` — pull keys out into variables of the same name."**

#### Practice Exercises

**Beginner:**
1. Destructure two properties from a user object.
2. Destructure a config object.
3. Print the new variables.

**Intermediate:**
4. Destructure with a different variable name: `{ username: name }`.
5. Destructure nested properties (if you are ready — full coverage in Module 16).

**Challenge:**
6. Write a program that destructures a test-case object and prints a report using only the new variables.

#### Interview Questions

**Beginner:**
1. What is destructuring?
2. What syntax does it use for objects?
3. Do the variable names need to match?
4. What is the benefit?
5. Can you rename during destructuring?

**Intermediate:**
6. Where is destructuring used in automation?
7. What happens if a key is missing? (It becomes undefined.)
8. How does destructuring improve readability?

**Scenario-Based:**
9. Show destructuring of a config in a test file.
10. A teammate accesses `config.timeout` five times. Suggest a cleaner way.

#### Quick Recap

- Destructuring pulls object properties into variables.
- `{ a, b } = obj` — names must match.
- Full details in Module 16.

---

## Module 8 – Module Summary

You learned objects: creation, properties, methods, nesting, the `this` keyword, and a preview of destructuring.

## Key Takeaways

- Objects = `{ key: value }` collections.
- Dot/bracket access; methods are object functions.
- `this` = "my" inside methods.
- Nested objects model real, hierarchical data.
- Destructuring (Module 16) makes access cleaner.

## Cheat Sheet

| Operation | Code |
|-----------|------|
| Create | `const obj = { a: 1, b: "x" };` |
| Read | `obj.a` or `obj["a"]` |
| Add/Update | `obj.c = 3;` |
| Delete | `delete obj.c;` |
| Method | `m() { }` then `obj.m()` |
| Nested read | `obj.inner.deep` |
| this | `this.prop` in methods |
| Destructure | `const { a } = obj;` |

## Frequently Asked Questions (FAQs)

**Q1: Are arrays objects?**
Yes — `typeof []` is `"object"`. Arrays are a special kind of object (Module 9).

**Q2: Do property keys need quotes?**
Usually not. Quotes are for special keys like `"first-name"`.

**Q3: Can I use methods with arrow functions?**
Avoid it — arrows change `this`. Use method shorthand.

**Q4: What is `Object.keys()`?**
Returns an array of the keys. Great for loops.

**Q5: Why do API responses look like objects?**
Because JSON (Module 17) is based on object syntax.

**Q6: What happens if I read a missing property?**
You get `undefined` — no crash (unless you then access deeper levels without `?.`).

## Real Automation Examples

```javascript
// Config object
const config = { browser: "chromium", headless: true, timeout: 30000 };

// User data object with a method
const user = {
  username: "tester01",
  password: "Passw0rd!",
  login() {
    console.log(`Logging in as ${this.username}`);
  },
};

// Nested API-style data
const api = { data: { status: "ok", items: [] } };
```

## Mini Project

**User Profile Model**

Write a program that:

1. Creates a `user` object with nested `profile` and `settings`.
2. Adds a method `welcome()` that uses `this` and template literals.
3. Updates a setting at runtime.
4. Destructures `{ username }` and prints it.
5. Prints the full object at the end.

## Quiz (10 Questions)

**Q1.** Which creates an object?
- A) `[1, 2]`
- B) `{ a: 1 }`
- C) `(1, 2)`
- D) `<a>1</a>`

**Q2.** How do you read property `a` of `obj`?
- A) `obj->a`
- B) `obj[a]`
- C) `obj.a`
- D) `a.obj`

**Q3.** A function inside an object is called a:
- A) loop
- B) method
- C) property
- D) callback

**Q4.** Inside a method, `this` refers to:
- A) the global object
- B) the owning object
- C) the function itself
- D) undefined

**Q5.** How do you add property `x` to `obj`?
- A) `obj + x = 5`
- B) `obj.x = 5`
- C) `x.obj = 5`
- D) `add obj.x 5`

**Q6.** `user.address.city` — `address` is:
- A) an array
- B) a nested object
- C) a string
- D) a method

**Q7.** Which reads `name` from `user` into a variable?
- A) `const name = user[0]`
- B) `const { name } = user`
- C) `const name = user.name()`
- D) `const name = [user]`

**Q8.** `delete obj.x`:
- A) clears the value, keeps key
- B) removes the property
- C) deletes the object
- D) errors

**Q9.** `typeof { }` returns:
- A) "object"
- B) "array"
- C) "function"
- D) "null"

**Q10.** To avoid crashes on missing nested data, use:
- A) `?`
- B) `?.`
- C) `!`
- D) `??`

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | `{ }` with key:value creates objects |
| 2 | C | Dot notation reads properties |
| 3 | B | Methods are object functions |
| 4 | B | `this` = the owning object |
| 5 | B | Assign with dot to add/update |
| 6 | B | Nested object in the chain |
| 7 | B | Destructuring pulls the key out |
| 8 | B | `delete` removes the property |
| 9 | A | Objects are "object" type |
| 10 | B | Optional chaining prevents crashes |

---

> **Module 8 complete! Objects store named data; arrays store ordered lists. Module 9 covers arrays and their powerful methods — essential for handling test data collections.**

---

# Module 9 – Arrays

An **array** is an ordered list of values: `["login", "logout", "register"]`. Arrays hold multiple values in one variable, and their methods are the workhorses of test data handling.

### Topic 9.1 – What is an Array?

#### Definition

An array is an ordered collection of values, written with square brackets `[ ]`, separated by commas. Each value sits at an **index** starting from **0**.

#### Why Do We Need It?

- Lists of test data (usernames, URLs, expected values).
- Collections of test results.
- Iteration with loops (Module 6) and methods.

#### Real-Life Analogy

An array is like **a numbered row of lockers**: locker 0, locker 1, locker 2... Each locker holds one item, and you find items by their number.

#### Simple JavaScript Example

```javascript
const browsers = ["Chrome", "Firefox", "Edge"];

console.log(browsers[0]);   // Chrome — index 0
console.log(browsers[1]);   // Firefox
console.log(browsers[2]);   // Edge
console.log(browsers.length); // 3
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `[ ]` | Array literal |
| `browsers[0]` | Access by index — starts at 0 |
| `browsers.length` | Number of items (3) |

**Index mapping:**

| Index | 0 | 1 | 2 |
|-------|---|---|---|
| Value | Chrome | Firefox | Edge |

#### Automation Testing Example

```javascript
const testData = ["tester01", "tester02", "tester03"];
for (let i = 0; i < testData.length; i++) {
  console.log("Testing user: " + testData[i]);
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Starting at index 1 | Counting like a human | Arrays start at 0 |
| Using `length` as an index | `arr[arr.length]` is out of bounds | Last item is `arr[length - 1]` |
| Mixing `{ }` and `[ ]` | Syntax confusion | Objects `{ }`, arrays `[ ]` |

#### Memory Tip

> **"Arrays start counting at 0. Lockers, not humans."**

#### Practice Exercises

**Beginner:**
1. Create an array of three test names and print each by index.
2. Print the length.
3. Print the last item using `length - 1`.

**Intermediate:**
4. Loop over an array with a for loop and print each item with its index.
5. Create an array of URLs and print each in a template literal.

**Challenge:**
6. Write a program that prints the first and last item of an array of five browsers.

#### Interview Questions

**Beginner:**
1. What is an array?
2. What is an index?
3. Where does indexing start?
4. What does `length` return?
5. What brackets make an array?

**Intermediate:**
6. Why start at 0 in loops?
7. How do you get the last item?
8. Why are arrays perfect for test data lists?

**Scenario-Based:**
9. A loop over a 5-item array prints 6 items. Diagnose it.
10. Show how you would iterate test usernames and print each.

#### Quick Recap

- Arrays = ordered lists in `[ ]`.
- Index from 0; `length` = count.
- Last item: `arr[length - 1]`.

---

### Topic 9.2 – `push`, `pop`, `shift`, `unshift`

#### Definition

These four methods change an array's ends:

- `push(item)` — add to the **end**.
- `pop()` — remove from the **end**.
- `shift()` — remove from the **front**.
- `unshift(item)` — add to the **front**.

#### Why Do We Need It?

- Collect test results as they happen (`push`).
- Process a queue of actions (FIFO with `shift`).
- Manage dynamic lists of test data.

#### Real-Life Analogy

Imagine a **queue at a ticket counter**:

- `push` = someone joins at the back.
- `pop` = the last person leaves (maybe impatient!).
- `shift` = the first person buys a ticket and leaves.
- `unshift` = a VIP cuts in at the front.

#### Simple JavaScript Example

```javascript
const queue = [];

queue.push("test1");        // ["test1"]
queue.push("test2");        // ["test1", "test2"]
console.log(queue);

queue.unshift("test0");     // ["test0", "test1", "test2"]
console.log(queue);

const first = queue.shift(); // removes "test0"
const last = queue.pop();    // removes "test2"
console.log(first, last);    // test0 test2
console.log(queue);          // ["test1"]
```

#### Code Breakdown

| Method | Where | Returns | Example result |
|--------|-------|---------|----------------|
| `push(x)` | End | New length | adds x at the back |
| `pop()` | End | Removed item | removes back |
| `shift()` | Front | Removed item | removes front |
| `unshift(x)` | Front | New length | adds x at the front |

#### Automation Testing Example

```javascript
const results = [];
results.push("PASS");    // first test
results.push("FAIL");    // second test
results.push("PASS");    // third test
console.log(results);    // ["PASS", "FAIL", "PASS"]
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting `push` returns length, not the array | Misreading docs | Usually ignore the return and check the array |
| Using `pop` on an empty array | Returns undefined | Check length first if it matters |
| Confusing `shift` and `unshift` | Similar names | `sh**i**ft` removes first; `unshift` adds first |

#### Memory Tip

> **"push/pop = back door. shift/unshift = front door. pop & shift take out, push & unshift put in."**

#### Practice Exercises

**Beginner:**
1. `push` three items and print.
2. `pop` once and print.
3. `unshift` an item and print.

**Intermediate:**
4. Use `shift` to process items one by one until empty.
5. Build a results array with push during a loop.

**Challenge:**
6. Write a "queue processor": push 4 tasks, then `shift` them one at a time, printing "Processing: X".

#### Interview Questions

**Beginner:**
1. What does `push` do?
2. What does `pop` do?
3. What is the difference between `shift` and `pop`?
4. What does `unshift` do?
5. What does `pop` return?

**Intermediate:**
6. What does `push` return?
7. Which pair models a queue?
8. When would you collect results with `push`?

**Scenario-Based:**
9. Build a test results collector with `push`.
10. A queue of tests should run first-in-first-out. Which methods do you use?

#### Quick Recap

- push/pop = end; shift/unshift = front.
- pop/shift return the removed item.
- Perfect for queues and result collection.

---

### Topic 9.3 – `splice` and `slice`

#### Definition

- `splice(start, count, items...)` — **changes** the array: removes and/or inserts.
- `slice(start, end)` — **copies** part of the array without changing the original.

#### Why Do We Need It?

- Remove a failed test from a list (`splice`).
- Take a "page" of data or a safe copy (`slice`).

#### Real-Life Analogy

- `splice` = **cutting a page out of a notebook** — the notebook changes.
- `slice` = **photocopying a few pages** — the original stays.

#### Simple JavaScript Example

```javascript
const tests = ["A", "B", "C", "D", "E"];

const removed = tests.splice(1, 2);   // remove 2 items from index 1
console.log(removed);   // ["B", "C"]
console.log(tests);     // ["A", "D", "E"]

const copy = tests.slice(0, 2);       // copy indexes 0..1
console.log(copy);      // ["A", "D"]
console.log(tests);     // ["A", "D", "E"] — unchanged!
```

#### Code Breakdown

| Method | Changes original? | Parameters |
|--------|-------------------|------------|
| `splice(start, count)` | Yes — removes/inserts | start index, how many |
| `slice(start, end)` | No — copies | start index, end (not included) |

**`splice` can also insert:**

```javascript
tests.splice(1, 0, "NEW");   // at index 1, remove 0, insert "NEW"
```

#### Automation Testing Example

```javascript
const testList = ["login", "logout", "regression", "performance"];

// remove the flaky test
testList.splice(testList.indexOf("regression"), 1);
console.log(testList);   // ["login", "logout", "performance"]

// safe copy of first 2 for a quick smoke run
const smoke = testList.slice(0, 2);
console.log(smoke);
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Confusing splice/slice | One letter apart | `spl**i**ce` changes the array; `sl**i**ce` copies |
| Wrong slice end | `slice(0, 2)` gives 2 items, not indexes 0-2 | End index is exclusive |
| Expecting slice to mutate | Copy semantics | slice never changes the original |

#### Memory Tip

> **"Splice = surgery (changes). Slice = scissors on a photocopy (doesn't change)."**

#### Practice Exercises

**Beginner:**
1. Splice out 2 items from an array and print both results.
2. Slice the first 3 items of an array.
3. Verify the original is unchanged after slice.

**Intermediate:**
4. Use splice to insert an item at index 2.
5. Build a "smoke test" subset with slice.

**Challenge:**
6. Write a program that removes a test by name (find its index with `indexOf`, then splice) and prints the new list.

#### Interview Questions

**Beginner:**
1. What does splice do?
2. What does slice do?
3. Does slice change the original?
4. What is the start/end meaning in slice?
5. Can splice insert?

**Intermediate:**
6. What are the parameters of splice?
7. Why is slice safe for copying?
8. When would you splice a flaky test out?

**Scenario-Based:**
9. Remove "flakyTest" from a list by name.
10. You need the first 10 of 50 rows without touching the original. Which method?

#### Quick Recap

- `splice` mutates (remove/insert).
- `slice` copies (non-mutating).
- Slice's end index is exclusive.

---

### Topic 9.4 – `map`, `filter`, `find`

#### Definition

These are the "transform and search" trio — the most important array methods for automation:

- `map(fn)` — transform every item into a new array.
- `filter(fn)` — keep items matching a condition.
- `find(fn)` — return the first item matching a condition.

#### Why Do We Need It?

- `map`: extract all texts, transform data.
- `filter`: keep only failed tests.
- `find`: locate one test by name.

#### Real-Life Analogy

- `map` = **a factory line**: every raw item becomes a finished product.
- `filter` = **a sieve**: only the pieces that fit pass through.
- `find` = **a lost-and-found search**: you stop at the first match.

#### Simple JavaScript Example

```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(n => n * 2);     // [2, 4, 6, 8]
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
const firstBig = numbers.find(n => n > 2);   // 3

console.log(doubled, evens, firstBig);
```

#### Code Breakdown

| Method | Returns | Callback returns | Result for example |
|--------|---------|------------------|--------------------|
| `map` | New array (same length) | The transformed value | [2,4,6,8] |
| `filter` | New array (subset) | true/false | [2,4] |
| `find` | One value or `undefined` | true/false | 3 |

#### Automation Testing Example

```javascript
const results = [
  { name: "Login", status: "PASS" },
  { name: "Logout", status: "FAIL" },
  { name: "Register", status: "PASS" },
];

const names = results.map(r => r.name);              // ["Login", "Logout", "Register"]
const failed = results.filter(r => r.status === "FAIL"); // [Logout]
const logoutTest = results.find(r => r.name === "Logout");

console.log(names);
console.log(failed);
console.log(logoutTest);
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting to use the result | map/filter return new arrays | Assign or use the return value |
| Confusing map with forEach | map builds, forEach just runs | Use map when you need a new array |
| Expecting find to return an array | find returns one item | Use filter for all matches |

#### Memory Tip

> **"map = transform all. filter = keep some. find = first match."**

#### Practice Exercises

**Beginner:**
1. Map `[1,2,3]` to `[2,4,6]`.
2. Filter numbers > 2.
3. Find the first even number.

**Intermediate:**
4. Map an array of test objects to just their names.
5. Filter results to failed tests and print them.

**Challenge:**
6. Write a program with a results array: use map (names), filter (failed), find (a specific test) and print all three outputs.

#### Interview Questions

**Beginner:**
1. What does map return?
2. What does filter return?
3. What does find return?
4. What does the callback return for filter?
5. How is map different from forEach?

**Intermediate:**
6. When would you chain map and filter?
7. What does find return when nothing matches?
8. Why are these preferred over manual loops?

**Scenario-Based:**
9. Extract all test names from a results array with map.
10. Show how to get only failed tests with filter.

#### Quick Recap

- `map` transforms every item.
- `filter` keeps matches.
- `find` returns the first match or undefined.

---

### Topic 9.5 – `reduce`

#### Definition

`reduce(fn, initial)` **combines all items into one value** — a total, a count, a joined string. The callback receives an accumulator and the current item.

#### Why Do We Need It?

- Sum up durations, counts, prices.
- Count items matching a condition.
- Build summaries for reports.

#### Real-Life Analogy

`reduce` is like **a donation box being passed around**: each person adds their contribution to the box. When the box returns, it holds the total.

#### Simple JavaScript Example

```javascript
const durations = [3, 5, 2, 4];

const total = durations.reduce((sum, d) => sum + d, 0);
console.log(total);   // 14
```

#### Code Breakdown

| Parameter | Meaning | Example trace |
|-----------|---------|---------------|
| `sum` | Accumulator (starts at initial) | starts 0 |
| `d` | Current item | 3, then 5, ... |
| `0` | Initial value | first `sum` |

**Trace:**
1. sum=0 + 3 → 3
2. sum=3 + 5 → 8
3. sum=8 + 2 → 10
4. sum=10 + 4 → 14

#### Automation Testing Example

```javascript
const results = [
  { name: "A", status: "PASS" },
  { name: "B", status: "FAIL" },
  { name: "C", status: "PASS" },
];

const passedCount = results.reduce((count, r) => {
  return r.status === "PASS" ? count + 1 : count;
}, 0);

console.log("Passed: " + passedCount);   // 2
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting the initial value | Result may be wrong type | Always pass the initial value (0, "", []) |
| Forgetting to return the accumulator | `undefined` propagates | Always `return sum` (or implicit return) |
| Confusing parameter order | accumulator vs item | First param = accumulator |

#### Memory Tip

> **"reduce = pass the box around. Always start the box with an initial value."**

#### Practice Exercises

**Beginner:**
1. Sum `[1,2,3,4,5]` with reduce.
2. Sum with initial value 100.
3. Count how many items are > 2 with reduce.

**Intermediate:**
4. Compute total duration from a results array.
5. Count PASS statuses with reduce.

**Challenge:**
6. Write a program that reduces a list of test durations into a total and prints "Total time: Xs".

#### Interview Questions

**Beginner:**
1. What does reduce do?
2. What is the accumulator?
3. What is the initial value for?
4. What does reduce return?
5. How is reduce different from map?

**Intermediate:**
6. Why must you return the accumulator?
7. What happens without an initial value?
8. When is reduce better than a loop?

**Scenario-Based:**
9. Sum the durations of five tests with reduce.
10. Count passed/failed with reduce and print both.

#### Quick Recap

- `reduce` folds the array into one value.
- Parameters: accumulator, item; plus initial value.
- Always return the accumulator.

---

### Topic 9.6 – `includes`, `indexOf`, `forEach`

#### Definition

- `includes(x)` — does the array contain x? Returns boolean.
- `indexOf(x)` — index of x, or -1 if missing.
- `forEach(fn)` — run code for every item (no new array).

#### Why Do We Need It?

- Check a browser is in the supported list (`includes`).
- Find a position for slicing/splicing (`indexOf`).
- Run an action per item without building a result (`forEach`).

#### Real-Life Analogy

- `includes` = **checking the guest list** — yes/no.
- `indexOf` = **finding your seat row number**.
- `forEach` = **greeting every guest** — action for each, nothing collected.

#### Simple JavaScript Example

```javascript
const browsers = ["Chrome", "Firefox", "Edge"];

console.log(browsers.includes("Firefox"));   // true
console.log(browsers.includes("Safari"));    // false

console.log(browsers.indexOf("Edge"));       // 2
console.log(browsers.indexOf("Safari"));     // -1

browsers.forEach((b) => console.log("Browser: " + b));
```

#### Code Breakdown

| Method | Returns | Notes |
|--------|---------|-------|
| `includes(x)` | boolean | true if present |
| `indexOf(x)` | number | index, or -1 |
| `forEach(fn)` | nothing (undefined) | side-effect loop |

#### Automation Testing Example

```javascript
const supportedBrowsers = ["chromium", "firefox", "webkit"];
const target = "firefox";

if (supportedBrowsers.includes(target)) {
  console.log(target + " is supported");
}

const results = ["PASS", "FAIL", "PASS"];
results.forEach((r, i) => console.log(`Result ${i + 1}: ${r}`));
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using `== -1` instead of `=== -1` | Consistency | Use `===` |
| Forgetting `indexOf` returns -1 | Assuming 0 | Always check for -1 |
| Using forEach when you need a result | Wrong method | map/filter/reduce build results; forEach just runs |

#### Memory Tip

> **"includes = yes/no. indexOf = seat number (-1 = no seat). forEach = act on each."**

#### Practice Exercises

**Beginner:**
1. Check `includes` on your browsers array.
2. Find `indexOf` for an item and for a missing item.
3. Use forEach to print every item.

**Intermediate:**
4. Print index with each item in forEach.
5. Guard a message with `includes` (only print if supported).

**Challenge:**
6. Write a program that checks five browsers with `includes`, prints each index with `indexOf`, then greets each with forEach.

#### Interview Questions

**Beginner:**
1. What does includes return?
2. What does indexOf return when missing?
3. What does forEach do?
4. What does forEach return?
5. How is forEach different from map?

**Intermediate:**
6. Why use includes instead of indexOf for a yes/no check?
7. What is the "-1" convention?
8. When would you not use forEach?

**Scenario-Based:**
9. Verify the test browser is in the supported list with includes.
10. Remove an item by name using indexOf + splice.

#### Quick Recap

- `includes` → boolean presence check.
- `indexOf` → position or -1.
- `forEach` → run for each, returns nothing.

---

### Topic 9.7 – `sort` and Chaining

#### Definition

- `sort()` orders array items (careful: it sorts strings alphabetically by default, and mutates).
- **Chaining** calls methods one after another: `arr.map(...).filter(...).reduce(...)`.

#### Why Do We Need It?

- Sort test names or results for reports.
- Chain operations for readable, powerful one-liners.

#### Real-Life Analogy

Chaining is like **an assembly line with multiple stations**: each station transforms the item and passes it to the next station.

#### Simple JavaScript Example

```javascript
const names = ["Zara", "Anil", "Meera"];
const sorted = [...names].sort();          // copy then sort
console.log(sorted);   // ["Anil", "Meera", "Zara"]

// Chaining
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
  .filter(n => n % 2 === 0)   // [2, 4, 6]
  .map(n => n * 10)           // [20, 40, 60]
  .reduce((sum, n) => sum + n, 0);  // 120
console.log(result);   // 120
```

#### Code Breakdown

| Step | After |
|------|-------|
| `filter(even)` | [2, 4, 6] |
| `map(n*10)` | [20, 40, 60] |
| `reduce(sum)` | 120 |

**Sorting numbers correctly:**

```javascript
[10, 2, 1].sort();                    // [1, 10, 2] — string sort!
[10, 2, 1].sort((a, b) => a - b);     // [1, 2, 10] — numeric sort
```

#### Automation Testing Example

```javascript
const results = [
  { name: "Logout", status: "FAIL" },
  { name: "Login", status: "PASS" },
  { name: "Register", status: "PASS" },
];

const summary = results
  .filter(r => r.status === "PASS")
  .map(r => r.name)
  .sort();

console.log(summary);   // ["Login", "Register"]
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Sorting numbers with default sort | String comparison | Use `(a, b) => a - b` |
| Forgetting sort mutates | Unexpected changes | Copy first: `[...arr].sort()` |
| Breaking chains with statements | Mixing styles | Keep chains as expressions |

#### Memory Tip

> **"Chaining = stations on a line. Sort numbers with `a - b`. Copy before sort."**

#### Practice Exercises

**Beginner:**
1. Sort an array of names alphabetically.
2. Sort numbers with `a - b`.
3. Chain filter → map on numbers.

**Intermediate:**
4. Sort a copy of an array without mutating the original.
5. Chain filter → map → reduce to get a meaningful summary.

**Challenge:**
6. Write a program that takes test results, filters PASS, maps names, sorts them, and prints the final list — all in one chain.

#### Interview Questions

**Beginner:**
1. What does sort do by default?
2. How do you sort numbers correctly?
3. Does sort mutate?
4. What is chaining?
5. What are the stations in `filter().map().reduce()`?

**Intermediate:**
6. Why copy before sorting?
7. How do you read a chain top to bottom?
8. When is chaining better than separate steps?

**Scenario-Based:**
9. Produce a sorted list of passed test names with one chain.
10. A number sort gives [1, 10, 2]. Diagnose and fix it.

#### Quick Recap

- `sort()` defaults to string order — use `(a, b) => a - b` for numbers.
- `sort` mutates — copy first if needed.
- Chaining composes operations readably.

---

## Module 9 – Module Summary

You mastered arrays: creation, index access, push/pop/shift/unshift, splice/slice, map/filter/find, reduce, includes/indexOf/forEach, sorting, and chaining.

## Key Takeaways

- Arrays = ordered lists, index from 0.
- Mutation methods: push/pop/shift/unshift/splice/sort.
- Non-mutating: slice/map/filter/find/reduce/includes.
- `forEach` runs; `map` builds; `filter` keeps; `reduce` folds.
- Chaining composes powerful pipelines.

## Cheat Sheet

| Method | Action | Mutates? |
|--------|--------|----------|
| `push` | add end | yes |
| `pop` | remove end | yes |
| `shift` | remove front | yes |
| `unshift` | add front | yes |
| `splice` | remove/insert | yes |
| `sort` | order | yes |
| `slice` | copy part | no |
| `map` | transform all | no |
| `filter` | keep matches | no |
| `find` | first match | no |
| `reduce` | fold to value | no |
| `includes` | contains? | no |
| `indexOf` | position | no |
| `forEach` | run per item | no |

## Frequently Asked Questions (FAQs)

**Q1: map or forEach?**
Use `map` to build a new array; `forEach` for side effects only.

**Q2: Why is `sort()` weird with numbers?**
It sorts as strings by default. Pass `(a, b) => a - b`.

**Q3: What does find return when nothing matches?**
`undefined`.

**Q4: Do I always need an initial value for reduce?**
Pass one — it avoids edge-case surprises.

**Q5: Can arrays hold mixed types?**
Yes, but keep them consistent for clarity.

**Q6: How do I copy an array?**
`const copy = [...arr];` (spread — Module 16) or `arr.slice()`.

## Real Automation Examples

```javascript
// Collect results
const results = [];
results.push("PASS", "FAIL", "PASS");

// Extract names of failed tests
const failed = results.filter((r) => r.status === "FAIL").map((r) => r.name);

// Verify a value is in a list
if (supportedBrowsers.includes(browser)) { /* ok */ }

// Summary
const totalPassed = results.reduce((n, r) => (r === "PASS" ? n + 1 : n), 0);
```

## Mini Project

**Test Results Analyzer**

Write a program that:

1. Has an array of result objects (name + status).
2. Uses `push` to add three results at runtime.
3. Uses `filter` to get failed tests.
4. Uses `map` to extract names of passed tests.
5. Uses `reduce` to count passes.
6. Prints a sorted summary and the total pass count.

## Quiz (10 Questions)

**Q1.** What is the index of "b" in `["a","b","c"]`?
- A) 0
- B) 1
- C) 2
- D) 3

**Q2.** Which adds to the end of an array?
- A) `shift`
- B) `push`
- C) `pop`
- D) `unshift`

**Q3.** Which removes the first item?
- A) `pop`
- B) `shift`
- C) `splice`
- D) `slice`

**Q4.** Which copies part of an array without mutating?
- A) `splice`
- B) `slice`
- C) `sort`
- D) `push`

**Q5.** `[1,2,3].map(n => n * 2)` gives:
- A) [1,2,3]
- B) [2,4,6]
- C) [1,4,9]
- D) 6

**Q6.** `[1,2,3,4].filter(n => n > 2)` gives:
- A) [3,4]
- B) [1,2]
- C) [2,4]
- D) [4]

**Q7.** `[10,20,30].find(n => n > 15)` gives:
- A) [20,30]
- B) 20
- C) 30
- D) undefined

**Q8.** `[1,2,3].reduce((a,b) => a + b, 0)` gives:
- A) [1,2,3]
- B) 6
- C) 123
- D) 3

**Q9.** `indexOf` returns -1 when:
- A) the item is first
- B) the item is missing
- C) the array is empty of numbers
- D) sort fails

**Q10.** `[3,1,2].sort((a,b) => a - b)` gives:
- A) [3,1,2]
- B) [1,2,3]
- C) [1,3,2]
- D) [2,1,3]

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | Indexes start at 0 |
| 2 | B | push adds to the end |
| 3 | B | shift removes the front |
| 4 | B | slice copies; splice mutates |
| 5 | B | Each item doubled |
| 6 | A | Items greater than 2 |
| 7 | B | First match is 20 |
| 8 | B | 1+2+3 = 6 |
| 9 | B | -1 means not found |
| 10 | B | Numeric sort ascending |

---

> **Module 9 complete! Arrays handle lists. Module 10 focuses on strings — the text you validate every day: labels, URLs, messages, and selectors.**

---

# Module 10 – Strings

Strings are the most-tested data in web automation: page titles, button labels, error messages, URLs, XPath, CSS selectors. This module teaches every string method you will actually use.

### Topic 10.1 – String Basics and Length

#### Definition

A string is text wrapped in quotes. `length` tells you how many characters it has (spaces count!).

#### Why Do We Need It?

- Verify a title's length, a message's format.
- Trim and compare page text.
- Every text assertion starts with understanding the string.

#### Real-Life Analogy

`length` is like **counting letters on a signboard** — including every space and punctuation mark.

#### Simple JavaScript Example

```javascript
const title = "Login Page";
console.log(title.length);          // 10 (space counts)
console.log("abc".length);          // 3
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `title.length` | Counts characters: `Login` (5) + space (1) + `Page` (4) = 10 |

#### Automation Testing Example

```javascript
const pageTitle = "Dashboard";
console.log(`Page title has ${pageTitle.length} characters`);

if (pageTitle.length > 0) {
  console.log("Title is not empty");
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting spaces count | Visual counting | Count every character |
| Using `length()` with parens | Array habit | `length` is a property — no parens |

#### Memory Tip

> **"`length` counts characters, spaces included, no parentheses."**

#### Practice Exercises

**Beginner:**
1. Print the length of your name.
2. Print the length of "Hello World!".
3. Print the length of an empty string `""`.

**Intermediate:**
4. Check if a string is longer than 10 characters and print a message.
5. Build a report line with the length of a page title.

**Challenge:**
6. Write a program that prints each character of "TEST" with its index, using a loop and `length`.

#### Interview Questions

**Beginner:**
1. What is a string?
2. What does `length` return?
3. Do spaces count?
4. Is `length` a method or a property?
5. What is the length of `""`?

**Intermediate:**
6. Why is length useful for empty-text checks?
7. What is the length of `" a "` (spaces around a)?
8. How do you loop over string characters?

**Scenario-Based:**
9. A field must not exceed 50 characters. Show the check.
10. A page title seems empty but length is 3. What could it contain? (Spaces!)

#### Quick Recap

- `length` = character count including spaces.
- Property, not a method.

---

### Topic 10.2 – `toUpperCase`, `toLowerCase`, `trim`

#### Definition

- `toUpperCase()` — all caps.
- `toLowerCase()` — all lowercase.
- `trim()` — removes whitespace at both ends.

#### Why Do We Need It?

Real-world text is messy: "  LOGIN  " vs "login". For reliable assertions, **normalize** text first with these methods.

#### Real-Life Analogy

These are like **cleaning tools for text**: trim = dusting off the edges; uppercase/lowercase = making all clothes the same style.

#### Simple JavaScript Example

```javascript
const messy = "  Hello World  ";

console.log(messy.trim());        // "Hello World"
console.log(messy.toLowerCase()); // "  hello world  "
console.log(messy.toUpperCase()); // "  HELLO WORLD  "
console.log(messy.trim().toLowerCase()); // "hello world"
```

#### Code Breakdown

| Method | Result |
|--------|--------|
| `trim()` | Removes spaces at both ends |
| `toLowerCase()` | All lowercase |
| `toUpperCase()` | All uppercase |
| Chained | `trim().toLowerCase()` — clean and normalized |

#### Automation Testing Example

```javascript
const actualText = "  Welcome, Tester  ";
const expectedText = "welcome, tester";

if (actualText.trim().toLowerCase() === expectedText) {
  console.log("Text matches (case-insensitive)");
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting `()` — these are methods | Property habit | `trim()`, `toLowerCase()` need parens |
| Not reassigning | Methods return new strings | `str = str.trim()` if you want to keep it |
| Expecting trim to remove inner spaces | Misunderstanding | Trim removes only edges |

#### Memory Tip

> **"Trim the edges, then compare in one case: `text.trim().toLowerCase()`."**

#### Practice Exercises

**Beginner:**
1. Trim `"  hi  "` and print.
2. Convert `"Hello"` to lowercase and uppercase.
3. Print the length before and after trim.

**Intermediate:**
4. Compare two differently-cased strings after normalization.
5. Write a "clean text" helper that trims and lowercases.

**Challenge:**
6. Write a program that takes five messy inputs and prints each cleaned (trim + lowercase).

#### Interview Questions

**Beginner:**
1. What does trim do?
2. What does toLowerCase do?
3. Are these methods or properties?
4. Do they change the original string?
5. Why normalize before comparing?

**Intermediate:**
6. Why is trim essential for page-text assertions?
7. What does the chain `trim().toLowerCase()` do?
8. Why do methods return new strings?

**Scenario-Based:**
9. Page text has extra spaces and different case than expected. Show the fix.
10. A button label assertion keeps failing. What normalization would you try?

#### Quick Recap

- `trim()` removes edge whitespace.
- `toLowerCase()`/`toUpperCase()` change case.
- Chain them to normalize before comparing.

---

### Topic 10.3 – `includes`, `startsWith`, `endsWith`

#### Definition

- `includes(text)` — contains the text? → boolean.
- `startsWith(text)` — begins with it? → boolean.
- `endsWith(text)` — ends with it? → boolean.

#### Why Do We Need It?

- Check a URL contains a path.
- Verify a message starts with "Error".
- Confirm a filename ends with ".png".

#### Real-Life Analogy

These are like **searching a sentence**:

- includes = "does this sentence contain the word 'test'?"
- startsWith = "does it begin with 'The'?"
- endsWith = "does it end with '.'?"

#### Simple JavaScript Example

```javascript
const message = "Login failed: invalid password";

console.log(message.includes("invalid"));   // true
console.log(message.startsWith("Login"));   // true
console.log(message.endsWith("password"));  // true
console.log(message.includes("success"));   // false
```

#### Code Breakdown

| Method | Question | Example result |
|--------|----------|----------------|
| `includes(x)` | Contains x? | true |
| `startsWith(x)` | Begins with x? | true |
| `endsWith(x)` | Ends with x? | true |

#### Automation Testing Example

```javascript
const url = "https://example.com/cart";
const screenshotName = "login-page.png";

console.log(url.includes("/cart"));            // true
console.log(screenshotName.endsWith(".png"));  // true
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting case-sensitivity | `"LOGIN".includes("login")` is false | Normalize case first |
| Expecting endsWith to ignore trailing spaces | Exact matching | Trim first |
| Confusing startsWith/endsWith | Both similar | start = beginning, end = ending |

#### Memory Tip

> **"includes = anywhere. startsWith = front. endsWith = back."**

#### Practice Exercises

**Beginner:**
1. Check if a URL includes "/login".
2. Check if a name startsWith "test".
3. Check if a file endsWith ".json".

**Intermediate:**
4. Write a case-insensitive includes check.
5. Verify an error message starts with "Error" and ends with "!" — print both results.

**Challenge:**
6. Write a program that validates: URL starts with "https://", contains "/api", and ends with nothing — print a combined verdict.

#### Interview Questions

**Beginner:**
1. What does includes return?
2. What does startsWith check?
3. What does endsWith check?
4. Are these case-sensitive?
5. What do all three return?

**Intermediate:**
6. Why normalize case for includes?
7. How would you check a filename extension?
8. Why are these useful for URL validation?

**Scenario-Based:**
9. Verify the current URL contains "/cart".
10. A screenshot name must end with ".png". Show the assertion.

#### Quick Recap

- `includes` = contains anywhere.
- `startsWith` / `endsWith` = edges.
- Case-sensitive — normalize first.

---

### Topic 10.4 – `indexOf`, `slice`, `substring`

#### Definition

- `indexOf(x)` — position of the first occurrence, or -1.
- `slice(start, end)` — extract part of a string (end exclusive).
- `substring(start, end)` — like slice, but no negative indexes.

#### Why Do We Need It?

- Find a position in text ("where does 'Error' start?").
- Extract parts: "order-1042" → the number.
- Parse filenames and URLs.

#### Real-Life Analogy

These are like **reading a page of a book**: indexOf finds the line number of a word; slice copies lines 5 to 10.

#### Simple JavaScript Example

```javascript
const text = "order-1042";

console.log(text.indexOf("-"));      // 5
console.log(text.slice(6));          // "1042" — from index 6 to end
console.log(text.slice(0, 5));       // "order"
console.log(text.substring(6));      // "1042"
```

#### Code Breakdown

| Method | Result | Explanation |
|--------|--------|-------------|
| `indexOf("-")` | 5 | Position of the hyphen |
| `slice(6)` | "1042" | From index 6 to the end |
| `slice(0, 5)` | "order" | Indexes 0-4 (end exclusive) |
| `substring(6)` | "1042" | Same as slice here |

#### Automation Testing Example

```javascript
const elementId = "user_1042";
const separatorIndex = elementId.indexOf("_");
const id = elementId.slice(separatorIndex + 1);   // "1042"
console.log(`Extracted ID: ${id}`);
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Off-by-one with slice end | End is exclusive | `slice(0, 5)` gives 5 characters, not through index 5 |
| Using negative indexes with substring | It treats them as 0 | Use `slice` for negative indexes |
| Forgetting indexOf returns -1 | Missing text | Always check for -1 |

#### Memory Tip

> **"slice = copy a section. end is not included. indexOf finds the marker."**

#### Practice Exercises

**Beginner:**
1. Find the index of "@" in an email.
2. Slice the part after "@".
3. Slice the first 5 characters.

**Intermediate:**
4. Extract the number from "item-42" using indexOf + slice.
5. Extract the domain from "user@example.com".

**Challenge:**
6. Write a program that extracts the ID from "order_1042_2026" using indexOf and slice, and prints it.

#### Interview Questions

**Beginner:**
1. What does indexOf return?
2. What does slice do?
3. Is slice's end inclusive?
4. How is substring different?
5. What does indexOf return when missing?

**Intermediate:**
6. Why is slicing useful for parsing?
7. What is an off-by-one risk with slice?
8. When would you prefer substring over slice?

**Scenario-Based:**
9. Extract the numeric ID from "user_9876".
10. A slice returns one fewer characters than expected. Why?

#### Quick Recap

- `indexOf` = position or -1.
- `slice(start, end)` = extract (end exclusive).
- Perfect for parsing IDs, emails, URLs.

---

### Topic 10.5 – `replace`, `split`, `join`

#### Definition

- `replace(old, new)` — replaces the **first** occurrence.
- `split(separator)` — breaks a string into an array.
- `join(separator)` — (an array method) joins array items into a string.

#### Why Do We Need It?

- Clean up dynamic text ("user 123" → "user-123").
- Parse CSV lines into columns (`split(",")`).
- Build strings from lists (`join`).

#### Real-Life Analogy

- `replace` = **correcting a typo**.
- `split` = **cutting a rope into pieces** at every knot.
- `join` = **tying pieces back together** with a knot of your choice.

#### Simple JavaScript Example

```javascript
const message = "Welcome user 123";
console.log(message.replace("123", "456"));  // Welcome user 456

const csv = "ravi,30,QA";
const columns = csv.split(",");
console.log(columns);   // ["ravi", "30", "QA"]

const words = ["Login", "Test"];
console.log(words.join(" "));   // "Login Test"
```

#### Code Breakdown

| Method | Input → Output |
|--------|----------------|
| `replace("123", "456")` | "Welcome user 456" (first match only) |
| `split(",")` | ["ravi", "30", "QA"] |
| `join(" ")` | "Login Test" |

**Global replace with regex (Module 18):**

```javascript
message.replace(/user/g, "customer");
```

#### Automation Testing Example

```javascript
const csvLine = "tester01,Passw0rd!,admin";
const [user, pass, role] = csvLine.split(",");
console.log(`User: ${user}, Role: ${role}`);

const title = "  Login  Page  ";
const clean = title.replace(/  +/g, " ").trim();
console.log(clean);   // "Login Page"
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Expecting replace to replace all | It replaces the first | Use regex with `/g` for all |
| Forgetting split returns an array | Natural assumption | It returns `[ ]` |
| Forgetting join is an array method | String confusion | `array.join(...)`, not `string.join(...)` |

#### Memory Tip

> **"split = string → array. join = array → string. replace = fix the first."**

#### Practice Exercises

**Beginner:**
1. Replace "cat" with "dog" in a sentence.
2. Split "a,b,c" into an array and print it.
3. Join `["x","y"]` with "-".

**Intermediate:**
4. Parse a CSV line into variables with split + destructuring.
5. Replace all spaces with "-" using regex `/ /g`.

**Challenge:**
6. Write a program that reads a CSV-ish line, splits it, maps types (string/number), and joins a clean summary.

#### Interview Questions

**Beginner:**
1. What does replace do?
2. Does replace change all matches?
3. What does split return?
4. What does join do?
5. Which method is on arrays, not strings?

**Intermediate:**
6. How do you replace all occurrences?
7. How do you parse a CSV line?
8. What is the opposite of split?

**Scenario-Based:**
9. Parse "ravi@example.com" into user and domain with split.
10. Build a slug "Login Page" → "Login-Page" with replace/join.

#### Quick Recap

- `replace` fixes the first match; `/g` regex fixes all.
- `split` string → array; `join` array → string.
- Essential for parsing CSV and building strings.

---

### Topic 10.6 – `charAt`, `charCodeAt`, `padStart`

#### Definition

- `charAt(i)` — character at index i.
- `padStart(n, ch)` — pad the start until length n.
- `padEnd(n, ch)` — pad the end.

#### Why Do We Need It?

- Read a specific character (first letter of a code).
- Format numbers like "007" for filenames (padStart).
- Build consistent report formats.

#### Real-Life Analogy

- `charAt` = **reading one letter on a marquee**.
- `padStart` = **adding leading zeros to a scoreboard**: "7" → "007".

#### Simple JavaScript Example

```javascript
const code = "JS101";
console.log(code.charAt(0));       // "J"
console.log(code.charAt(2));       // "1"

const num = "7";
console.log(num.padStart(3, "0")); // "007"
console.log(num.padEnd(3, "."));   // "7.."
```

#### Code Breakdown

| Method | Example | Result |
|--------|---------|--------|
| `charAt(0)` | "JS101" | "J" |
| `padStart(3, "0")` | "7" | "007" |
| `padEnd(3, ".")` | "7" | "7.." |

#### Automation Testing Example

```javascript
const attemptNumber = 2;
const filename = `screenshot-${String(attemptNumber).padStart(3, "0")}.png`;
console.log(filename);   // screenshot-002.png
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting charAt is 0-indexed | Counting habit | `charAt(0)` is the first character |
| Padding already-long strings | It does nothing | padStart only adds until length is reached |
| Padding a number directly | padStart is a string method | Convert with `String(n)` first |

#### Memory Tip

> **"charAt picks a letter. padStart/End pad to a width — convert numbers first."**

#### Practice Exercises

**Beginner:**
1. Print `charAt(1)` of your name.
2. Pad "5" to 4 characters with "0".
3. Pad "hello" to 10 with "*".

**Intermediate:**
4. Build a zero-padded screenshot name from a counter.
5. Check the first character of a code with charAt.

**Challenge:**
6. Write a program that pads three attempt numbers (1, 2, 10) to "001","002","010" and prints filenames.

#### Interview Questions

**Beginner:**
1. What does charAt do?
2. What is the index of the first character?
3. What does padStart do?
4. What happens if the string is already long enough?
5. Why convert numbers before padding?

**Intermediate:**
6. How do you build "screenshot-007.png"?
7. When would you use padEnd?
8. What does charAt return past the end?

**Scenario-Based:**
9. Generate ordered filenames report-001, report-002...
10. A screenshot is named "1.png" instead of "01.png". Show the fix.

#### Quick Recap

- `charAt(i)` reads one character (0-indexed).
- `padStart`/`padEnd` pad to a width.
- Convert numbers to strings before padding.

---

### Topic 10.7 – `match`, `search`, `repeat`

#### Definition

- `match(regex)` — finds matches (returns array or null).
- `search(regex)` — index of first match, or -1.
- `repeat(n)` — repeats the string n times.

#### Why Do We Need It?

- Search for patterns (Module 18 full regex).
- Build separator lines: `"=".repeat(40)`.
- Extract parts of dynamic text.

#### Real-Life Analogy

- `match` = **finding all words matching a clue**.
- `search` = **finding the page where a word first appears**.
- `repeat` = **photocopying a line 40 times**.

#### Simple JavaScript Example

```javascript
const text = "Errors: 2 warnings: 5";
console.log(text.match(/\d+/g));       // ["2", "5"] — all numbers
console.log(text.search("warnings"));  // 9 — index of first match
console.log("=".repeat(20));           // "===================="
```

#### Code Breakdown

| Method | Example | Result |
|--------|---------|--------|
| `match(/\d+/g)` | "Errors: 2 warnings: 5" | ["2", "5"] |
| `search("warnings")` | same | 9 |
| `repeat(20)` | "=" | 20 equals signs |

#### Automation Testing Example

```javascript
const orderText = "Order total: $49.99";
const amount = orderText.match(/\d+\.\d+/);
console.log(amount ? amount[0] : "no amount");   // 49.99

console.log("-".repeat(30));   // separator for logs
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting `match` returns an array | Expecting a string | Access `[0]` for the first match |
| Forgetting `/g` for all matches | Only first returned | Add `g` flag |
| match returning null | No match | Guard: `if (result) {...}` |

#### Memory Tip

> **"match = find all → array. search = first index or -1. repeat = photocopy."**

#### Practice Exercises

**Beginner:**
1. Match all digits in "Room 101, Floor 3".
2. Search for the index of "test" in a sentence.
3. Print "=" repeated 50 times.

**Intermediate:**
4. Extract the price from "Total: $12.50" with match.
5. Guard a match result before printing.

**Challenge:**
6. Write a program that extracts all numbers from a log line and prints their sum.

#### Interview Questions

**Beginner:**
1. What does match return?
2. What does search return?
3. What does the `g` flag do?
4. What does repeat do?
5. What does match return if nothing matches?

**Intermediate:**
6. Why guard match results?
7. How do you extract a price from text?
8. When would you use repeat in reports?

**Scenario-Based:**
9. Extract the order ID digits from "Order #1042".
10. Print a 40-character separator with repeat.

#### Quick Recap

- `match` → array (regex); `search` → index.
- `repeat(n)` repeats a string.
- Guard `match` results against null.

---

## Module 10 – Module Summary

You learned the essential string toolkit: length, case/trim, includes/startsWith/endsWith, indexOf/slice/substring, replace/split/join, charAt/padStart, and match/search/repeat.

## Key Takeaways

- Normalize text (`trim().toLowerCase()`) before comparing.
- `includes/startsWith/endsWith` for presence checks.
- `split`/`join` convert between strings and arrays.
- `slice` extracts; `replace` fixes.
- `padStart` builds consistent filenames.
- `match` extracts with regex (Module 18 deep-dives).

## Cheat Sheet

| Method | Purpose |
|--------|---------|
| `length` | Character count |
| `trim()` | Remove edge spaces |
| `toLowerCase()` / `toUpperCase()` | Change case |
| `includes(x)` | Contains? |
| `startsWith(x)` / `endsWith(x)` | Edge check |
| `indexOf(x)` | Position or -1 |
| `slice(a, b)` | Extract part |
| `replace(a, b)` | Replace first match |
| `split(sep)` | String → array |
| `join(sep)` | Array → string |
| `charAt(i)` | Character at index |
| `padStart(n, ch)` | Pad start |
| `match(re)` | Array of matches |
| `repeat(n)` | Repeat string |

## Frequently Asked Questions (FAQs)

**Q1: Which string methods mutate?**
None. Strings are immutable — methods return new strings.

**Q2: Why compare after trim/lowercase?**
Page text often has extra spaces or case differences.

**Q3: How do I replace all occurrences?**
Use a regex with `/g`: `str.replace(/a/g, "b")`.

**Q4: Is there a `contains()` method?**
No — it is `includes()`.

**Q5: How do I check if a string is empty?**
`str.trim() === ""` is the robust check.

**Q6: Can I index strings like arrays?**
Yes: `"abc"[0]` gives "a", but `charAt` is more explicit.

## Real Automation Examples

```javascript
// Compare page text robustly
const visible = (await page.textContent("#title")).trim().toLowerCase();
expect(visible).toBe("welcome");

// URL check
if (page.url().includes("/cart")) { /* on cart page */ }

// Build filenames
const name = `shot-${String(n).padStart(3, "0")}.png`;

// Parse CSV-ish test data
const [user, pass] = "tester01,Passw0rd!".split(",");
```

## Mini Project

**Text Normalizer & Extractor**

Write a program that:

1. Takes a raw text like `"  Order #1042 Total: $49.99  "`.
2. Trims it and lowercases it.
3. Checks it `includes("order")`.
4. Extracts the digits after `#` (id) and the price with `match`.
5. Splits it by spaces and rejoins with "-" as a slug.
6. Prints each result.

## Quiz (10 Questions)

**Q1.** `"hello".length` is:
- A) 4
- B) 5
- C) 6
- D) error

**Q2.** `"  hi  ".trim()` gives:
- A) `"  hi  "`
- B) `"hi"`
- C) `"hi  "`
- D) `"  hi"`

**Q3.** `"Test".toLowerCase()` gives:
- A) "TEST"
- B) "test"
- C) "Test"
- D) "tesT"

**Q4.** `"Login Test".includes("Test")` is:
- A) true
- B) false
- C) -1
- D) error

**Q5.** `"abc".startsWith("b")` is:
- A) true
- B) false
- C) -1
- D) undefined

**Q6.** `"order-1042".slice(6)` gives:
- A) "order"
- B) "-1042"
- C) "1042"
- D) "42"

**Q7.** `"a,b,c".split(",")` gives:
- A) "abc"
- B) ["a","b","c"]
- C) ["abc"]
- D) "a, b, c"

**Q8.** `["x","y"].join("-")` gives:
- A) ["x-y"]
- B) "x-y"
- C) "xy"
- D) "x, y"

**Q9.** `"7".padStart(3, "0")` gives:
- A) "7"
- B) "700"
- C) "007"
- D) "070"

**Q10.** `"A1B2".match(/\d/g)` gives:
- A) "12"
- B) ["1","2"]
- C) 1
- D) ["A","B"]

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | 5 characters |
| 2 | B | Trim removes edge spaces |
| 3 | B | All lowercase |
| 4 | A | Contains "Test" |
| 5 | B | Starts with "a", not "b" |
| 6 | C | From index 6 to end |
| 7 | B | Split returns an array |
| 8 | B | Join returns a string |
| 9 | C | Pad to width 3 with zeros |
| 10 | B | Match returns an array of matches |

---

> **Module 10 complete! Text is handled. Module 11 covers numbers: formatting, parsing, and Math helpers — useful for assertions on prices, counts, and timings.**

---

# Module 11 – Numbers

Testers work with numbers daily: prices, counts, percentages, timeouts, HTTP codes. This module teaches number methods, formatting, parsing, and the Math object.

### Topic 11.1 – Number Methods

#### Definition

Numbers have methods like `toFixed()` (fix decimals), `toPrecision()`, and `toString()`. You can also use `Number.isInteger()` and friends.

#### Why Do We Need It?

- Format prices: `49.5` → `49.50`.
- Round for display.
- Validate that a value is a number or integer.

#### Real-Life Analogy

Number methods are like **a cash register's buttons**: one button rounds to two decimals, another tells you if the amount is a whole number.

#### Simple JavaScript Example

```javascript
const price = 49.5;
console.log(price.toFixed(2));       // "49.50" (string)
console.log(price.toFixed(0));       // "50"

console.log(Number.isInteger(5));    // true
console.log(Number.isInteger(5.5));  // false
console.log(Number.isNaN(NaN));      // true
```

#### Code Breakdown

| Method | Returns | Example |
|--------|---------|---------|
| `num.toFixed(d)` | string | `49.5.toFixed(2)` → "49.50" |
| `Number.isInteger(n)` | boolean | `5` → true |
| `Number.isNaN(n)` | boolean | `NaN` → true |

#### Automation Testing Example

```javascript
const rawPrice = 49.5;
const formatted = rawPrice.toFixed(2);
console.log("Displayed price: $" + formatted);   // $49.50
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting toFixed returns a string | Natural assumption | Convert with `Number()` if you need math after |
| Using `isNaN` (global) vs `Number.isNaN` | Old habit | Prefer `Number.isNaN` |
| Rounding the original by mistake | toFixed is non-mutating | It returns a new value — assign it |

#### Memory Tip

> **"toFixed = format for display. Number.isInteger = the bouncer."**

#### Practice Exercises

**Beginner:**
1. Print `3.14159.toFixed(2)`.
2. Check if 10 and 10.5 are integers.
3. Print `Number.isNaN(Number("abc"))`.

**Intermediate:**
4. Format a price to 2 decimals and print with a $ sign.
5. Write a helper `formatPrice(n)` returning a currency string.

**Challenge:**
6. Write a program that formats three prices (10, 10.5, 99.999) to two decimals and prints them aligned.

#### Interview Questions

**Beginner:**
1. What does toFixed do?
2. What type does toFixed return?
3. What does Number.isInteger do?
4. What is Number.isNaN for?
5. Are these methods on every number?

**Intermediate:**
6. Why is toFixed's string return important?
7. What is the difference between isNaN and Number.isNaN?
8. When would you format a price in a test?

**Scenario-Based:**
9. The page shows "$49.50" but your computed value is 49.5. How do you compare them?
10. A total needs exactly two decimals for a report. Show the code.

#### Quick Recap

- `toFixed(n)` formats decimals (returns string).
- `Number.isInteger` / `Number.isNaN` validate.

---

### Topic 11.2 – Formatting Numbers

#### Definition

Formatting is turning a number into a human-friendly string: thousands separators, currency, percentages. JavaScript offers `toLocaleString()` and `Intl.NumberFormat`.

#### Why Do We Need It?

Pages display formatted numbers ("1,000.50"). Your assertions may need to match that format or parse it back.

#### Real-Life Analogy

Formatting is like **writing amounts on a check**: "1000.5" becomes "1,000.50" — clearer for humans.

#### Simple JavaScript Example

```javascript
const big = 1234567.891;
console.log(big.toLocaleString("en-US"));   // "1,234,567.891"

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
console.log(money.format(49.5));   // "$49.50"
```

#### Code Breakdown

| API | Example output |
|-----|----------------|
| `toLocaleString()` | "1,234,567.891" |
| `Intl.NumberFormat` + currency | "$49.50" |

#### Automation Testing Example

```javascript
const count = 12500;
const displayed = count.toLocaleString();
console.log("Items shown: " + displayed);   // "Items shown: 12,500"
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Locale surprises | Formats differ per locale | Pass a locale explicitly |
| Comparing formatted strings with raw numbers | Type/format mismatch | Format the expected value the same way |
| Expecting currency to be math-friendly | It is a display string | Parse back for math |

#### Memory Tip

> **"Format for the page. Parse for the math."**

#### Practice Exercises

**Beginner:**
1. Print `1234567.toLocaleString()`.
2. Format 99.9 as USD currency.
3. Format as EUR and compare the symbol.

**Intermediate:**
4. Format a big number with 2 decimals using `toLocaleString`.
5. Print the same number in two locales (en-US, de-DE) and compare.

**Challenge:**
6. Write a program that formats a count (12500) and a price (49.5) like a real report page would.

#### Interview Questions

**Beginner:**
1. What does toLocaleString do?
2. What does Intl.NumberFormat do?
3. Why pass a locale?
4. Are formatted values strings?
5. Why format numbers at all?

**Intermediate:**
6. How do you match a page's formatted price?
7. What is the risk of locale differences in CI?
8. How do you parse "$1,200.50" back to a number?

**Scenario-Based:**
9. A page shows "1,234" but your test expects 1234. How do you assert correctly?
10. A report needs "€49.50" format. Show the code.

#### Quick Recap

- `toLocaleString()` / `Intl.NumberFormat` format nicely.
- Locale matters; results are strings.
- Format to compare, parse to compute.

---

### Topic 11.3 – Parsing Numbers

#### Definition

Parsing converts text into numbers: `parseInt()` (whole), `parseFloat()` (decimal), `Number()` (strict).

#### Why Do We Need It?

Page text and API values are strings. To do math or compare strictly, parse them first.

#### Real-Life Analogy

Parsing is like **reading a price tag and entering it into a calculator**: the tag text ("$12.50") becomes a number you can compute with.

#### Simple JavaScript Example

```javascript
console.log(parseInt("42px"));       // 42  — stops at non-digit
console.log(parseFloat("3.14abc"));  // 3.14
console.log(Number("42"));           // 42  — strict, whole string
console.log(Number("42px"));         // NaN — fails
```

#### Code Breakdown

| Function | Handles | Example |
|----------|---------|---------|
| `parseInt(s)` | Reads leading integer | "42px" → 42 |
| `parseFloat(s)` | Reads leading decimal | "3.14abc" → 3.14 |
| `Number(s)` | Strict whole-string | "42px" → NaN |

#### Automation Testing Example

```javascript
const countText = "  3 items  ";
const count = parseInt(countText, 10);
console.log(count + 1);   // 4 — real math

const priceText = "$12.50";
const price = parseFloat(priceText.replace("$", ""));
console.log(price * 2);   // 25
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting the radix | `parseInt("08")` old quirks | Always pass 10: `parseInt(s, 10)` |
| Using parseInt on decimals | It truncates! | `parseInt("3.9")` → 3. Use parseFloat |
| Using Number on mixed text | NaN | Use parseInt/parseFloat for loose text |

#### Memory Tip

> **"parseInt = whole. parseFloat = decimal. Number = strict. Always `, 10` with parseInt."**

#### Practice Exercises

**Beginner:**
1. Parse "100px" with parseInt.
2. Parse "2.5kg" with parseFloat.
3. Parse "12abc" with Number — what do you get?

**Intermediate:**
4. Parse "  5 items  " and add 1.
5. Parse "$99.99" (strip $, parseFloat) and apply a 10% discount.

**Challenge:**
6. Write a program that reads three strings ("10px", "3.5s", "$5") and computes their total in numbers.

#### Interview Questions

**Beginner:**
1. What does parseInt do?
2. What does parseFloat do?
3. How is Number different?
4. What is the radix?
5. What does parseInt("3.9") give?

**Intermediate:**
6. Why parse before math?
7. When would parseInt be wrong for prices?
8. What is NaN and how do you check it?

**Scenario-Based:**
9. A cart count "3" needs comparison with 3. Show parsing.
10. A price "$12.50" needs doubling. Show the full parse.

#### Quick Recap

- `parseInt` whole, `parseFloat` decimal, `Number` strict.
- Radix 10 with parseInt.
- Parse page text before math.

---

### Topic 11.4 – The Math Object

#### Definition

`Math` is a built-in object of math helpers: `Math.round`, `Math.ceil`, `Math.floor`, `Math.random`, `Math.max`, `Math.min`, `Math.pow`, `Math.abs`.

#### Why Do We Need It?

- Round expected values for assertions.
- Generate random test data (`Math.random`).
- Compare values (`Math.max`/`min`).
- Handle negatives (`Math.abs`).

#### Real-Life Analogy

`Math` is like **a pocket calculator that comes with the phone**: always available, with every button you need.

#### Simple JavaScript Example

```javascript
console.log(Math.round(4.5));   // 5
console.log(Math.floor(4.9));   // 4 — round down
console.log(Math.ceil(4.1));    // 5 — round up
console.log(Math.max(3, 9, 5)); // 9
console.log(Math.min(3, 9, 5)); // 3
console.log(Math.abs(-7));      // 7
console.log(Math.random());     // random 0..1
```

#### Code Breakdown

| Method | Meaning | Example |
|--------|---------|---------|
| `Math.round(n)` | Nearest integer | 4.5 → 5 |
| `Math.floor(n)` | Round down | 4.9 → 4 |
| `Math.ceil(n)` | Round up | 4.1 → 5 |
| `Math.max(...)` | Largest | 9 |
| `Math.min(...)` | Smallest | 3 |
| `Math.abs(n)` | Remove sign | -7 → 7 |
| `Math.random()` | 0..1 | varies |

#### Automation Testing Example

```javascript
const totalPages = Math.ceil(47 / 10);   // 5 — pagination assertion
console.log("Expected pages: " + totalPages);

// Random test data
const randomCode = Math.floor(Math.random() * 1000);  // 0..999
console.log("Random code: " + randomCode);
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using round when you need ceil/floor | Wrong rounding mode | Think: up, down, or nearest? |
| Random range confusion | `Math.random()` is 0..1 | Multiply then floor |
| Math as a constructor | `new Math()` fails | Math is an object, not a class |

#### Memory Tip

> **"floor = down (low). ceil = up (ceiling!). round = nearest. random = 0..1."**

#### Practice Exercises

**Beginner:**
1. Round, floor, and ceil `4.6` and print all three.
2. Print max/min of `[10, 3, 8]` with Math.max(...arr).
3. Print `Math.abs(-42)`.

**Intermediate:**
4. Generate a random integer 1-100.
5. Compute pages needed for 87 items at 10/page with ceil.

**Challenge:**
6. Write a program that prints a "pagination plan": items (87), per page (10), pages (ceil), and the last page's item count.

#### Interview Questions

**Beginner:**
1. What does Math.floor do?
2. What does Math.ceil do?
3. What does Math.random return?
4. What is Math.abs?
5. Is Math a class?

**Intermediate:**
6. When would a tester use ceil?
7. How do you get a random integer in a range?
8. Why is random data useful in testing?

**Scenario-Based:**
9. Assert pagination pages for 47 items, 10 per page.
10. Generate a random 4-digit code for a test input.

#### Quick Recap

- `round/floor/ceil` = rounding modes.
- `max/min/abs` = comparisons and magnitudes.
- `random` = random data.
- Math is a built-in object.

---

## Module 11 – Module Summary

You learned number methods, formatting, parsing, and the Math object — everything needed for numeric assertions and test data.

## Key Takeaways

- `toFixed` formats decimals (string).
- `toLocaleString` / `Intl.NumberFormat` for human formats.
- `parseInt` / `parseFloat` / `Number` parse text.
- `Math.round/floor/ceil` handle rounding.
- `Math.random` generates data; `max/min/abs` compare.

## Cheat Sheet

| Tool | Purpose |
|------|---------|
| `n.toFixed(2)` | Fix decimals → string |
| `Number.isInteger(n)` | Integer check |
| `parseInt(s, 10)` | Whole number from text |
| `parseFloat(s)` | Decimal from text |
| `Number(s)` | Strict conversion |
| `Math.round(n)` | Nearest |
| `Math.floor(n)` | Down |
| `Math.ceil(n)` | Up |
| `Math.random()` | 0..1 |
| `Math.max/min(...)` | Compare |
| `Math.abs(n)` | Remove sign |

## Frequently Asked Questions (FAQs)

**Q1: Why is `0.1 + 0.2` not 0.3?**
Binary floating-point. Fix with `Math.round((a+b) * 100) / 100` or toFixed.

**Q2: parseInt or Number?**
Loose text (with units) → parseInt/parseFloat. Clean strings → Number.

**Q3: How do I round to 2 decimals?**
`Math.round(n * 100) / 100` or `Number(n.toFixed(2))`.

**Q4: What is NaN?**
Not a Number — from invalid conversions. Check with `Number.isNaN()`.

**Q5: How do I generate a random username?**
`"user" + Math.floor(Math.random() * 10000)`.

**Q6: Why does my price assertion fail with "$49.50"?**
Format/type mismatch. Parse the page text or format your expected value identically.

## Real Automation Examples

```javascript
// Pagination
const pages = Math.ceil(totalItems / perPage);

// Price assertion
const shown = "$49.50";
const price = parseFloat(shown.replace("$", ""));
expect(price).toBeCloseTo(49.5);

// Random test data
const code = Math.floor(Math.random() * 9000) + 1000;

// Count from text
const count = parseInt(await page.textContent("#count"), 10);
```

## Mini Project

**Cart Total Calculator**

Write a program that:

1. Has item prices in an array (`[12.5, 99.99, 5]`).
2. Sums them with reduce.
3. Rounds the total to 2 decimals.
4. Parses a displayed total string `"$117.49"` back to a number.
5. Compares parsed vs computed, printing PASS/FAIL.

## Quiz (10 Questions)

**Q1.** `(3.14159).toFixed(2)` gives:
- A) 3.14
- B) "3.14"
- C) 3.15
- D) 3

**Q2.** `parseInt("42px", 10)` gives:
- A) "42"
- B) 42
- C) NaN
- D) 42px

**Q3.** `parseFloat("2.5kg")` gives:
- A) 2
- B) 2.5
- C) "2.5kg"
- D) NaN

**Q4.** `Number("12abc")` gives:
- A) 12
- B) "12abc"
- C) NaN
- D) error

**Q5.** `Math.ceil(4.1)` gives:
- A) 4
- B) 5
- C) 4.1
- D) 4.5

**Q6.** `Math.floor(4.9)` gives:
- A) 5
- B) 4
- C) 4.9
- D) 0

**Q7.** `Math.round(4.5)` gives:
- A) 4
- B) 5
- C) 4.5
- D) 4.4

**Q8.** `Math.max(3, 9, 5)` gives:
- A) 3
- B) 5
- C) 9
- D) 17

**Q9.** `Math.abs(-7)` gives:
- A) -7
- B) 7
- C) 0
- D) NaN

**Q10.** `Math.random()` returns:
- A) always 1
- B) a number between 0 and 1
- C) an integer
- D) a string

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | toFixed returns a string |
| 2 | B | Stops at non-digit → 42 |
| 3 | B | Reads the leading decimal |
| 4 | C | Number is strict → NaN |
| 5 | B | ceil rounds up |
| 6 | B | floor rounds down |
| 7 | B | Round to nearest |
| 8 | C | Largest value |
| 9 | B | Removes the sign |
| 10 | B | Random between 0 (inclusive) and 1 (exclusive) |

---

> **Module 11 done! Numbers and math are covered. Module 12 introduces dates — timestamps for reports, screenshots, and logs.**

---

# Module 12 – Dates

Dates power test reporting: timestamps on screenshots, log file names, report headers, and assertions on "today", "expiry", or "last updated" values.

### Topic 12.1 – The Date Object

#### Definition

The **Date object** represents a moment in time. `new Date()` creates one for the current date and time.

#### Why Do We Need It?

- Timestamp filenames: `screenshot-2026-08-07.png`.
- Log lines with time.
- Test data with dates (birthdays, expiry dates).

#### Real-Life Analogy

The Date object is like **a digital clock with a calendar**: it knows the current moment, and you can also set it to any other moment.

#### Simple JavaScript Example

```javascript
const now = new Date();
console.log(now);
console.log(now.toString());
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `new Date()` | Creates a Date for now |
| `console.log(now)` | Prints the full date/time |

**Creating specific dates:**

```javascript
const specific = new Date(2026, 7, 7);   // Aug 7, 2026 (month is 0-based!)
console.log(specific.toString());
```

> **Important quirk:** months are 0-based. January = 0, December = 11. `new Date(2026, 7, 7)` is August 7, not July 7!

#### Automation Testing Example

```javascript
const runStarted = new Date();
console.log("Test run started at: " + runStarted.toString());
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| 0-based months | Forgetting the quirk | `new Date(2026, 0, 1)` = January 1 |
| Forgetting `new` | `Date()` without new gives a string | Always `new Date()` |
| Expecting a clean format | Default output is verbose | Format it (Topic 12.3) |

#### Memory Tip

> **"`new Date()` = right now. Month 0 = January. Always say `new`."**

#### Practice Exercises

**Beginner:**
1. Print `new Date()`.
2. Create a date for your birthday (be careful with months!).
3. Print the type of `new Date()` — what is it? (It is an object.)

**Intermediate:**
4. Create a date for Jan 1, 2025 and print it.
5. Create `new Date(2026, 11, 31)` — what date is that?

**Challenge:**
6. Write a program that creates five dates (including leap-year Feb 29) and prints them all.

#### Interview Questions

**Beginner:**
1. How do you create the current date?
2. How do you create a specific date?
3. Are months 0-based?
4. What does `new Date()` return?
5. What happens without `new`?

**Intermediate:**
6. Why does the default output look odd?
7. What does the Date object store under the hood? (Milliseconds since 1970.)
8. Why is date formatting needed?

**Scenario-Based:**
9. Your screenshot needs today's date in the filename. How do you get it?
10. A test needs a date exactly 30 days from now. How would you create it? (Topic 12.5.)

#### Quick Recap

- `new Date()` = current moment.
- Months are 0-based.
- Default output is verbose — format it.

---

### Topic 12.2 – Getting Parts of a Date

#### Definition

Getters pull individual values from a Date: year, month, day, hours, minutes, seconds, day-of-week.

#### Why Do We Need It?

- Build custom strings: "2026-08-07".
- Compare day-of-week for business logic.
- Extract the year for report headers.

#### Real-Life Analogy

Getters are like **asking a person for their parts**: "What year were you born?" → 1990. "What month?" → July. Each question returns one piece.

#### Simple JavaScript Example

```javascript
const now = new Date();

console.log(now.getFullYear());   // 2026
console.log(now.getMonth());      // 7 (August — 0-based!)
console.log(now.getDate());       // 7 (day of month)
console.log(now.getDay());        // 5 (weekday: 0=Sun ... 6=Sat)
console.log(now.getHours());      // hour 0-23
console.log(now.getMinutes());    // minutes
console.log(now.getSeconds());    // seconds
```

#### Code Breakdown

| Getter | Returns | Notes |
|--------|---------|-------|
| `getFullYear()` | 2026 | 4-digit year |
| `getMonth()` | 0-11 | 0 = January |
| `getDate()` | 1-31 | Day of month |
| `getDay()` | 0-6 | 0 = Sunday |
| `getHours()` | 0-23 | 24-hour |
| `getMinutes()` | 0-59 | — |
| `getSeconds()` | 0-59 | — |

#### Automation Testing Example

```javascript
const now = new Date();
const timestamp = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
console.log("Report date: " + timestamp);   // 2026-8-7
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using `getMonth()` without +1 | 0-based quirk | Always `getMonth() + 1` for human months |
| Using `getYear()` | Old/deprecated | Use `getFullYear()` |
| Confusing `getDate` and `getDay` | Similar names | `getDate` = day of month; `getDay` = weekday |

#### Memory Tip

> **"Month +1, always. `getDate` = calendar day, `getDay` = weekday."**

#### Practice Exercises

**Beginner:**
1. Print each getter for today.
2. Print the month with +1.
3. Print the weekday number.

**Intermediate:**
4. Build "YYYY-MM-DD" from getters.
5. Build "HH:MM:SS" from getters.

**Challenge:**
6. Write a program that prints a full "2026-08-07 14:30:05" style timestamp using all the getters.

#### Interview Questions

**Beginner:**
1. Which getter returns the year?
2. Why add 1 to getMonth?
3. What does getDay return?
4. What does getDate return?
5. What are the hour ranges?

**Intermediate:**
6. How do you build a file-safe timestamp?
7. What is the difference between getDate and getDay?
8. Why are getters useful for report headers?

**Scenario-Based:**
9. Build a date string for a screenshot filename.
10. A report shows month 7 for August. Diagnose it.

#### Quick Recap

- Getters extract each part.
- `getMonth() + 1` for human months.
- `getDate` = day of month; `getDay` = weekday.

---

### Topic 12.3 – Formatting Dates

#### Definition

Formatting turns a Date into a readable string. Options: `toDateString()`, `toISOString()`, `toLocaleString()`, or manual getter strings.

#### Why Do We Need It?

- Filenames need safe characters (`2026-08-07`, not spaces/slashes).
- Logs need readable timestamps.
- Reports need locale-friendly dates.

#### Real-Life Analogy

Formatting is like **writing the date on a letter**: you could write "Fri Aug 7 2026", "07/08/2026", or "August 7, 2026". Same moment, different presentations.

#### Simple JavaScript Example

```javascript
const now = new Date();

console.log(now.toDateString());       // Fri Aug 07 2026
console.log(now.toISOString());        // 2026-08-07T...Z
console.log(now.toLocaleDateString()); // 8/7/2026 (locale-dependent)
console.log(now.toLocaleTimeString()); // 2:30:05 PM
```

#### Code Breakdown

| Method | Example output |
|--------|----------------|
| `toDateString()` | "Fri Aug 07 2026" |
| `toISOString()` | "2026-08-07T09:30:00.000Z" |
| `toLocaleDateString()` | "8/7/2026" |
| `toLocaleTimeString()` | "2:30:05 PM" |

**File-safe custom format:**

```javascript
const ts = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
console.log(ts);   // 2026-08-07
```

#### Automation Testing Example

```javascript
const now = new Date();
const filename = `screenshot-${now.toISOString().split("T")[0]}.png`;
console.log(filename);   // screenshot-2026-08-07.png
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using toLocaleDateString in filenames | Slashes break paths | Use ISO or custom "YYYY-MM-DD" |
| Forgetting padStart | "2026-8-7" looks inconsistent | Pad month/day to 2 digits |
| Timezone surprises with toISOString | UTC vs local | Be explicit about which you want |

#### Memory Tip

> **"toISOString = file-safe. toLocale = human. Custom getters = full control."**

#### Practice Exercises

**Beginner:**
1. Print all four formatting methods for today.
2. Print `toISOString().split("T")[0]`.
3. Print a custom "YYYY-MM-DD" with padding.

**Intermediate:**
4. Build "HH-MM-SS" (file-safe time).
5. Combine date + time into one file-safe timestamp.

**Challenge:**
6. Write a program that produces a full "2026-08-07_14-30-05" timestamp and prints it.

#### Interview Questions

**Beginner:**
1. What does toISOString give?
2. Why is ISO good for filenames?
3. What does toLocaleDateString do?
4. How do you pad the month?
5. What is a file-safe character set?

**Intermediate:**
6. Why avoid slashes in filenames?
7. What is the timezone concern with toISOString?
8. When would you use a custom format?

**Scenario-Based:**
9. Generate "screenshot-2026-08-07.png".
10. A log timestamp shows UTC but tests run in IST. How do you handle it?

#### Quick Recap

- `toISOString` = file-safe; `toLocale*` = human.
- Custom formats with getters + padStart.
- Mind timezones with ISO.

---

### Topic 12.4 – Setting Dates

#### Definition

Setters change parts of a Date: `setFullYear()`, `setMonth()`, `setDate()`, `setHours()`, etc.

#### Why Do We Need It?

- Test data: "an order from 30 days ago".
- Expiry dates, future dates, backdating reports.

#### Real-Life Analogy

Setters are like **adjusting a clock and calendar**: change the hour, change the day — the device updates.

#### Simple JavaScript Example

```javascript
const date = new Date();

date.setFullYear(2030);
date.setMonth(0);        // January
date.setDate(15);
console.log(date.toString());
```

#### Code Breakdown

| Setter | Effect |
|--------|--------|
| `setFullYear(2030)` | Year → 2030 |
| `setMonth(0)` | Month → January (0-based!) |
| `setDate(15)` | Day → 15 |

**Smart overflow:**

```javascript
const d = new Date(2026, 0, 31);
d.setDate(d.getDate() + 1);   // Jan 31 + 1 day
console.log(d.toString());    // Feb 1 — JavaScript handles it!
```

#### Automation Testing Example

```javascript
const startDate = new Date();
const expiryDate = new Date();
expiryDate.setDate(startDate.getDate() + 30);
console.log("Expires: " + expiryDate.toDateString());
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| 0-based months in setters | Same quirk | `setMonth(11)` = December |
| Forgetting setDate with +days | Trying to add manually | `setDate(getDate() + n)` handles month rollover |
| Expecting setters to return the date | They return ms | Usually ignore the return |

#### Memory Tip

> **"Add days: `setDate(getDate() + n)` — let JS handle the calendar."**

#### Practice Exercises

**Beginner:**
1. Set a date to year 2030 and print.
2. Set month to December (11) and print.
3. Add 1 day to Jan 31 and print.

**Intermediate:**
4. Create an expiry date 30 days from now.
5. Create a date 7 days ago.

**Challenge:**
6. Write a program that prints today, +30 days, and -7 days, each with toDateString.

#### Interview Questions

**Beginner:**
1. What do setters do?
2. How do you set the year?
3. How do you add days?
4. Are setters 0-based for months?
5. What do setters return?

**Intermediate:**
6. Why does setDate(getDate()+n) handle month rollover?
7. When would a tester need future dates?
8. Why create expiry test data with setters?

**Scenario-Based:**
9. Create an order date 30 days ago for a report test.
10. Show how to get "next month" with setters.

#### Quick Recap

- Setters change date parts.
- Add days with `setDate(getDate() + n)`.
- Months stay 0-based.

---

### Topic 12.5 – Calculating Date Differences

#### Definition

Subtract two Dates to get a **millisecond difference**, then convert to seconds, minutes, hours, or days.

#### Why Do We Need It?

- Measure test duration.
- Assert "this order is 3 days old".
- Timeout calculations.

#### Real-Life Analogy

Date difference is like **measuring the distance between two appointments on a calendar**: the gap between them is the difference.

#### Simple JavaScript Example

```javascript
const start = new Date(2026, 7, 1);
const end = new Date(2026, 7, 8);

const diffMs = end - start;                    // 604800000 ms
const diffDays = diffMs / (1000 * 60 * 60 * 24);  // 7
console.log(diffDays);
```

#### Code Breakdown

| Step | Value |
|------|-------|
| `end - start` | Milliseconds between dates |
| ÷ 1000 | seconds |
| ÷ 60 | minutes |
| ÷ 60 | hours |
| ÷ 24 | days |

**Timing a test:**

```javascript
const t0 = Date.now();
// ... pretend test runs ...
const t1 = Date.now();
const seconds = (t1 - t0) / 1000;
console.log("Test took " + seconds + "s");
```

#### Automation Testing Example

```javascript
const created = new Date(2026, 7, 1);
const now = new Date();
const ageDays = Math.floor((now - created) / (1000 * 60 * 60 * 24));
console.log("Order age (days): " + ageDays);
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting the divisor chain | Getting ms instead of days | Remember: 1000·60·60·24 |
| Mixing up date order | Negative difference | Always `later - earlier` |
| Expecting exact integer days | Time-of-day offsets | Use Math.floor/round |

#### Memory Tip

> **"ms → /1000 → seconds → /60 → minutes → /60 → hours → /24 → days."**

#### Practice Exercises

**Beginner:**
1. Compute the days between two dates a week apart.
2. Print the millisecond difference.
3. Time a fake operation with Date.now().

**Intermediate:**
4. Compute the age of an "order" created 10 days ago.
5. Compute the hours between two dates.

**Challenge:**
6. Write a program that times a small loop (say, 1,000,000 iterations) and prints the duration in seconds.

#### Interview Questions

**Beginner:**
1. What do you get when subtracting dates?
2. How do you convert ms to days?
3. What is Date.now()?
4. Why use Math.floor for day counts?
5. What does (t1 - t0) measure?

**Intermediate:**
6. How do you measure test duration?
7. What are the pitfalls of day-difference math?
8. Why is millisecond precision useful?

**Scenario-Based:**
9. Assert that an order is exactly 3 days old.
10. A performance test needs the load time of a page. Show the timing code.

#### Quick Recap

- Subtract dates → milliseconds.
- Divide by 1000·60·60·24 for days.
- `Date.now()` is a quick timestamp.

---

## Module 12 – Module Summary

You learned the Date object: creating dates, getters, setters, formatting, and calculating differences.

## Key Takeaways

- `new Date()` = now; months are 0-based.
- Getters extract parts; setters change them.
- `toISOString()` is file-safe; `toLocale*` is human-friendly.
- Add days with `setDate(getDate() + n)`.
- Differences are milliseconds → divide to get days.

## Cheat Sheet

| Task | Code |
|------|------|
| Now | `new Date()` |
| Timestamp | `Date.now()` |
| Year | `d.getFullYear()` |
| Month (human) | `d.getMonth() + 1` |
| Day of month | `d.getDate()` |
| Weekday | `d.getDay()` |
| File-safe | `d.toISOString().split("T")[0]` |
| Add 30 days | `d.setDate(d.getDate() + 30)` |
| Difference (days) | `(b - a) / (86400000)` |

## Frequently Asked Questions (FAQs)

**Q1: Why is the month 0-based?**
Historical design. Always `getMonth() + 1` for humans.

**Q2: Should I use toISOString for filenames?**
Yes — safe characters and a consistent format.

**Q3: How do I get "next month"?**
`d.setMonth(d.getMonth() + 1)`.

**Q4: What is the difference between new Date() and Date.now()?**
`new Date()` is an object; `Date.now()` is a number (ms).

**Q5: Why is my day-difference off by one?**
Time-of-day components — floor/round deliberately.

**Q6: What timezone does toISOString use?**
UTC. Use getters for local time.

## Real Automation Examples

```javascript
// Screenshot filename
const name = `shot-${new Date().toISOString().split("T")[0]}.png`;

// Log timestamp
console.log(`[${new Date().toLocaleTimeString()}] Starting test`);

// Test duration
const t0 = Date.now();
// ... actions ...
console.log(`Took ${((Date.now() - t0) / 1000).toFixed(2)}s`);

// Expiry check
const expiry = new Date();
expiry.setDate(expiry.getDate() + 30);
```

## Mini Project

**Test Run Logger**

Write a program that:

1. Records `startTime = Date.now()`.
2. Builds a file-safe "YYYY-MM-DD" timestamp.
3. Prints a log line with the timestamp and a fake test name.
4. Simulates work with a loop, then prints duration in seconds (toFixed 2).
5. Computes the age in days between a fixed past date and today.

## Quiz (10 Questions)

**Q1.** `new Date()` creates:
- A) a string
- B) the current date and time
- C) a number
- D) an array

**Q2.** Month values start at:
- A) 1
- B) 0
- C) 12
- D) -1

**Q3.** Which getter returns the year?
- A) `getYear()`
- B) `getFullYear()`
- C) `year()`
- D) `getDateYear()`

**Q4.** `getDate()` returns:
- A) weekday
- B) day of month
- C) milliseconds
- D) year

**Q5.** `getDay()` returns:
- A) day of month
- B) weekday (0-6)
- C) day of year
- D) hours

**Q6.** Which is file-safe?
- A) `toLocaleDateString()`
- B) `toISOString()`
- C) `toString()`
- D) `toDateString()`

**Q7.** Add 30 days with:
- A) `d.setDays(30)`
- B) `d.setDate(d.getDate() + 30)`
- C) `d.add(30)`
- D) `d += 30`

**Q8.** Subtracting two dates gives:
- A) days
- B) milliseconds
- C) seconds
- D) hours

**Q9.** Milliseconds per day:
- A) 1000
- B) 86400000
- C) 60000
- D) 3600000

**Q10.** `Date.now()` returns:
- A) a Date object
- B) milliseconds since 1970
- C) a string
- D) an array

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | Current moment as an object |
| 2 | B | Months are 0-based |
| 3 | B | getFullYear is correct |
| 4 | B | Day of the month |
| 5 | B | Weekday, 0=Sunday |
| 6 | B | ISO has safe characters |
| 7 | B | setDate with getDate() + n |
| 8 | B | Date math is in milliseconds |
| 9 | B | 1000·60·60·24 = 86400000 |
| 10 | B | Number of milliseconds |

---

> **Module 12 complete! Date handling is in your toolkit. Module 13 teaches error handling — making your tests fail gracefully instead of crashing mysteriously.**

---

# Module 13 – Error Handling

Tests fail. The difference between a good test and a fragile one is how failures are handled. Error handling (`try`/`catch`/`finally`/`throw`) makes failures clear, controlled, and diagnosable.

### Topic 13.1 – What are Errors?

#### Definition

An **error** is a problem that stops your program: a missing element, a failed assertion, bad data. JavaScript "throws" an error, and the program stops unless you handle it.

#### Why Do We Need It?

- A test should fail with a **clear message**, not a confusing crash.
- Flaky steps (network, popups) can be retried when caught.
- Unexpected situations should be logged, not silently swallowed.

#### Real-Life Analogy

An error is like **a roadblock on your drive**: the GPS says "cannot go this way." Without handling, the trip stops. With handling, you take a detour or report the problem clearly.

#### Simple JavaScript Example

```javascript
console.log("Before");
throw new Error("Something went wrong!");
console.log("After");   // NEVER runs
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `throw new Error("...")` | Creates and throws an error with a message |
| `console.log("After")` | Skipped — the program stopped |

#### Automation Testing Example

Frameworks do this internally: when an assertion fails, they `throw` an error with a helpful message like `expect(...).toBe(...)` failing with actual vs expected values.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Panicking at errors | Fear of failure | Errors are information — read the message |
| Swallowing errors silently | `catch {}` with nothing | Always log the error |
| Throwing plain strings | `throw "oops"` | Use `new Error("message")` for stack traces |

#### Memory Tip

> **"An error is a roadblock. `throw` puts up the block; `catch` builds the detour."**

#### Practice Exercises

**Beginner:**
1. Throw an error and run — read the message.
2. Add a message that describes a fake test failure.
3. Note what happens to the line after `throw`.

**Intermediate:**
4. Write a function that throws when an argument is invalid.
5. Throw an error with a dynamic message using a template literal.

**Challenge:**
6. Write a program that throws when a "login" result is false, with a descriptive message, and run it.

#### Interview Questions

**Beginner:**
1. What is an error?
2. How do you create one?
3. What happens after a throw?
4. Why do errors matter in testing?
5. What is in an error object?

**Intermediate:**
6. Why use `new Error` instead of a string?
7. What is a stack trace?
8. Why is a clear error message important?

**Scenario-Based:**
9. A test fails with "Cannot read properties of undefined". What does that tell you?
10. How would you make a login failure produce a helpful message?

#### Quick Recap

- Errors stop programs unless handled.
- `throw new Error("message")`.
- Read error messages — they guide fixes.

---

### Topic 13.2 – `try` and `catch`

#### Definition

- `try { }` — wrap code that might fail.
- `catch (error) { }` — handle the failure if it happens.

The program keeps running after `catch`, instead of crashing.

#### Why Do We Need It?

- Catch flaky actions and retry.
- Convert technical crashes into readable failures.
- Keep the rest of the test suite running after one failure.

#### Real-Life Analogy

`try/catch` is like **a safety net under a tightrope walker**: if the walker falls (error), the net (catch) catches them, and life goes on.

#### Simple JavaScript Example

```javascript
try {
  console.log("Trying risky code...");
  throw new Error("Boom!");
} catch (error) {
  console.log("Caught: " + error.message);
}
console.log("Program continues");
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `try { }` | Runs the risky code |
| `throw` | Simulates a failure |
| `catch (error)` | Runs only if an error was thrown |
| `error.message` | The error's text |
| After the block | Always continues (no crash) |

#### Automation Testing Example

```javascript
try {
  await page.click("#submit");
} catch (error) {
  console.log("Submit failed — retrying...");
  await page.click("#submit");
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Empty catch | Hiding bugs | Always log: `console.log(error)` |
| Catching everything | Masking real failures | Let truly unexpected errors propagate |
| Forgetting `catch` parameter | `catch {}` loses info | Use `catch (error)` |

#### Memory Tip

> **"try = attempt. catch = the net. Never leave the net empty."**

#### Practice Exercises

**Beginner:**
1. Wrap a throw in try/catch and log the message.
2. Put a real error (like calling a missing function) in try/catch.
3. Print `error.message` and `error.stack`.

**Intermediate:**
4. Write a retry: try an action, catch it, retry once.
5. Convert a thrown error into a friendly log line.

**Challenge:**
6. Write a program with try/catch around a fake login that may fail randomly, retrying up to 3 times before giving up.

#### Interview Questions

**Beginner:**
1. What does try do?
2. What does catch do?
3. Does the program continue after catch?
4. What is in the error parameter?
5. Why log inside catch?

**Intermediate:**
6. When would a tester use try/catch?
7. What is the risk of an empty catch?
8. How does catch help retries?

**Scenario-Based:**
9. Wrap a flaky click in try/catch with one retry.
10. A test crashes on a popup that appears only sometimes. How would you handle it?

#### Quick Recap

- `try` runs risky code; `catch` handles failures.
- Program continues after catch.
- Always log the error.

---

### Topic 13.3 – `finally`

#### Definition

`finally { }` runs **always** — whether the try succeeded, failed, or threw. It is for cleanup.

#### Why Do We Need It?

- Close browsers, close files, release resources.
- Take a final screenshot whether a test passed or failed.
- Reset state so the next test starts clean.

#### Real-Life Analogy

`finally` is like **locking the office door when you leave** — no matter how the day went (good or bad), the door gets locked.

#### Simple JavaScript Example

```javascript
try {
  console.log("Running test");
  throw new Error("Test failed");
} catch (error) {
  console.log("Caught: " + error.message);
} finally {
  console.log("Cleanup: closing browser");
}
console.log("Done");
```

#### Code Breakdown

| Part | Runs when |
|------|-----------|
| `try` | Always (first) |
| `catch` | Only on error |
| `finally` | **Always** — after try or catch |

#### Automation Testing Example

```javascript
try {
  await page.goto(url);
  await page.click("#submit");
} catch (error) {
  console.log("Test failed: " + error.message);
} finally {
  console.log("Taking final screenshot...");
  await browser.close();
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Putting cleanup only in catch | Misses success path | Use `finally` |
| Thinking finally needs catch | It does not | `try/finally` alone is valid |
| Returning inside try | finally still runs | Remember: finally wins over return |

#### Memory Tip

> **"finally = the janitor. Works every shift, no matter what."**

#### Practice Exercises

**Beginner:**
1. Write try/catch/finally with a throw — observe order.
2. Write try/finally without catch — does it run?
3. Put a `return` in try and see if finally still runs.

**Intermediate:**
4. Simulate a test with finally that always logs "Cleanup done".
5. Write try/catch/finally that prints three ordered lines.

**Challenge:**
6. Write a program that always closes a "browser" (console log) in finally, whether the fake test passed or failed.

#### Interview Questions

**Beginner:**
1. What does finally do?
2. When does finally run?
3. Can finally exist without catch?
4. What is finally used for in tests?
5. Does return stop finally?

**Intermediate:**
6. Why is cleanup important in automation?
7. What runs first: finally or code after the block?
8. Why might a leaked browser hurt the next test?

**Scenario-Based:**
9. Show finally closing a browser after a test.
10. A test leaves browsers open, slowing the suite. What do you add?

#### Quick Recap

- `finally` always runs — success or failure.
- Perfect for cleanup: close browsers, save screenshots.

---

### Topic 13.4 – `throw`

#### Definition

`throw` **creates your own error** on purpose, stopping execution unless caught. You choose the message.

#### Why Do We Need It?

- Validate inputs: "username cannot be empty".
- Fail fast when preconditions are missing.
- Give clear messages instead of confusing crashes later.

#### Real-Life Analogy

`throw` is like **a supervisor stopping a machine** when a safety rule is broken, shouting the reason. Better to stop early with a clear reason than break the machine later.

#### Simple JavaScript Example

```javascript
function login(username) {
  if (!username) {
    throw new Error("Username is required!");
  }
  console.log("Logging in " + username);
}

login("tester01");   // works
login("");           // throws!
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `if (!username)` | Checks the invalid case |
| `throw new Error("...")` | Stops with a clear message |
| `console.log(...)` | Only reached when valid |

#### Automation Testing Example

```javascript
function validateTestData(user) {
  if (!user.username) throw new Error("Test data missing: username");
  if (!user.password) throw new Error("Test data missing: password");
  return true;
}

try {
  validateTestData({ username: "tester01" });   // missing password!
} catch (error) {
  console.log("Validation error: " + error.message);
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Throwing strings | Loses stack info | `throw new Error(...)` |
| Throwing after the problem | Wrong placement | Validate *before* using data |
| Not catching your own throw | Crashes | Wrap callers in try/catch |

#### Memory Tip

> **"throw = fail fast with a clear reason. Validate before you use."**

#### Practice Exercises

**Beginner:**
1. Write a function that throws for an empty argument.
2. Catch it and print the message.
3. Throw with a template-literal message.

**Intermediate:**
4. Validate a test-data object (username + password) and throw clear errors.
5. Write a helper that throws if a value is not a number.

**Challenge:**
6. Write a full validation flow: validate, throw, catch, and log — with a descriptive message for each rule.

#### Interview Questions

**Beginner:**
1. What does throw do?
2. What do you throw?
3. Why validate early?
4. What happens if nobody catches?
5. What is fail-fast?

**Intermediate:**
6. Why throw before using data?
7. What is a good error message?
8. How does throw improve test data validation?

**Scenario-Based:**
9. A test data file is missing a field. Show how you would fail fast.
10. A teammate uses `return false` instead of throw. When is throw better?

#### Quick Recap

- `throw` = create your own error.
- Fail fast with clear messages.
- Use `new Error(...)`; catch where called.

---

### Topic 13.5 – Error Handling in Practice

#### Definition

Putting it together: a robust pattern wraps risky operations, retries on failure, always cleans up, and produces readable results.

#### Why Do We Need It?

Production tests combine all four keywords. A good pattern looks like this:

```javascript
let attempts = 0;
let success = false;

while (attempts < 3 && !success) {
  attempts++;
  try {
    console.log(`Attempt ${attempts}`);
    if (Math.random() > 0.4) {
      throw new Error("Flaky action failed");
    }
    success = true;
  } catch (error) {
    console.log(`Retrying: ${error.message}`);
  } finally {
    console.log("Attempt finished");
  }
}
console.log(success ? "Test passed" : "Test failed after retries");
```

#### Code Breakdown

| Element | Role |
|---------|------|
| `while` | Retry loop |
| `try` | The risky action |
| `catch` | Log and retry |
| `finally` | Log each attempt's end |
| `success` flag | Stops the loop on success |

#### Automation Testing Example

```javascript
async function clickWithRetry(page, selector, maxTries = 3) {
  for (let i = 1; i <= maxTries; i++) {
    try {
      await page.click(selector);
      return true;
    } catch (error) {
      console.log(`Click failed (try ${i}): ${error.message}`);
    }
  }
  throw new Error(`Could not click ${selector} after ${maxTries} tries`);
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Infinite retries | No max | Always cap attempts |
| Swallowing the final error | Loop hides it | Throw after exhausting retries |
| Mixing retry with assertions | Retrying real bugs | Only retry flaky infrastructure, not logic failures |

#### Memory Tip

> **"Retry capped, errors logged, finally cleanup, throw the last failure."**

#### Practice Exercises

**Beginner:**
1. Run the combined pattern and watch the attempts.
2. Change the random threshold and observe more/fewer retries.
3. Add a log line inside finally.

**Intermediate:**
4. Write `retry(action, max)` that retries an action up to 3 times.
5. Make the retry throw after exhausting attempts.

**Challenge:**
6. Write a mini "flaky button" simulator: retry clicking up to 4 times, log each attempt, and report success or failure.

#### Interview Questions

**Beginner:**
1. Why combine while with try/catch?
2. Why cap retries?
3. What happens after max retries?
4. What role does finally play?
5. What is the success flag for?

**Intermediate:**
6. What should you never retry?
7. How do you avoid hiding real bugs with retries?
8. Why throw after exhausting retries?

**Scenario-Based:**
9. Design a retry for a flaky network call in a test.
10. A test passes after retries but the app actually has a bug. How do you avoid this trap?

#### Quick Recap

- Retry only flaky steps, capped.
- Log every attempt; cleanup in finally.
- Throw after exhausting retries.

---

## Module 13 – Module Summary

You learned the complete error-handling toolkit: errors, try/catch, finally, throw, and the combined retry pattern.

## Key Takeaways

- `try/catch` prevents crashes and enables retries.
- `finally` always runs — perfect for cleanup.
- `throw` creates clear, early failures.
- Retries must be capped and logged.
- Empty catches hide bugs — always log.

## Cheat Sheet

| Keyword | Purpose |
|---------|---------|
| `try { }` | Run risky code |
| `catch (err) { }` | Handle failures |
| `finally { }` | Always-run cleanup |
| `throw new Error(msg)` | Create a failure |
| `err.message` | Read the message |
| `err.stack` | Read the trace |

## Frequently Asked Questions (FAQs)

**Q1: Should I catch every error?**
No. Catch what you can meaningfully handle; let the rest surface.

**Q2: What is the difference between an error and an exception?**
Same thing in JavaScript — "exception" is just the formal word.

**Q3: Can I nest try/catch?**
Yes, but keep it readable — prefer helper functions.

**Q4: Why is my catch not running?**
Async errors need `async/await` or `.catch()` — Module 15!

**Q5: What is the best error message?**
What happened + what was expected + where (context values).

**Q6: Do frameworks need my try/catch?**
Frameworks handle their own failures. Use try/catch for custom logic and retries.

## Real Automation Examples

```javascript
// Retry a flaky click
async function clickIfPossible(page, sel) {
  try {
    await page.click(sel);
  } catch {
    console.log(`Element ${sel} not clickable — continuing`);
  }
}

// Always clean up
try {
  await testFlow();
} finally {
  await browser.close();
}

// Fail fast on bad data
if (!testUser.password) {
  throw new Error("Test data missing password for " + testUser.username);
}
```

## Mini Project

**Robust Login Retry**

Write a program that:

1. Defines a fake `login()` that randomly throws.
2. Wraps it in a capped retry loop (3 attempts).
3. Logs each attempt in catch.
4. Uses finally to log "Attempt finished".
5. Reports "Logged in" or "Login failed after 3 attempts" (throwing a final error).

## Quiz (10 Questions)

**Q1.** Which keyword runs risky code?
- A) `catch`
- B) `try`
- C) `finally`
- D) `throw`

**Q2.** Which handles errors?
- A) `try`
- B) `catch`
- C) `finally`
- D) `throw`

**Q3.** Which always runs?
- A) `try`
- B) `catch`
- C) `finally`
- D) `throw`

**Q4.** How do you create an error?
- A) `error("x")`
- B) `throw new Error("x")`
- C) `new throw("x")`
- D) `Error.throw("x")`

**Q5.** What is `error.message`?
- A) The stack
- B) The error's text
- C) The line number
- D) The file name

**Q6.** What happens if nobody catches a throw?
- A) Nothing
- B) The program crashes/stops
- C) It retries
- D) It logs a warning

**Q7.** A retry loop should always:
- A) be infinite
- B) have a max attempts
- C) sleep for an hour
- D) be silent

**Q8.** Cleanup code belongs in:
- A) try
- B) catch
- C) finally
- D) throw

**Q9.** An empty catch is risky because:
- A) it is slow
- B) it hides bugs
- C) it crashes
- D) it loops

**Q10.** Retry should target:
- A) flaky infrastructure
- B) real logic bugs
- C) assertion failures
- D) everything

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | try wraps risky code |
| 2 | B | catch handles failures |
| 3 | C | finally always runs |
| 4 | B | throw + new Error |
| 5 | B | The human-readable message |
| 6 | B | Uncaught errors stop the program |
| 7 | B | Capped retries prevent loops |
| 8 | C | finally = cleanup |
| 9 | B | Empty catches swallow problems |
| 10 | A | Only retry flaky infrastructure |

---

> **Module 13 complete! With error handling, your tests fail gracefully. Module 14 bridges to the browser: the DOM — what your selectors actually target.**

---

# Module 14 – DOM Basics

Every locator in your automation — `#login-btn`, `.modal`, `input[name="email"]` — points at something inside the **DOM**. Understanding the DOM turns locator guessing into locator expertise.

### Topic 14.1 – What is the DOM?

#### Definition

The **DOM** (Document Object Model) is the browser's structured representation of a web page. The browser reads the HTML and builds a **tree** of objects — every element becomes a node you can find and interact with.

#### Why Do We Need It?

- Your automation locators target DOM elements.
- "Element not found" errors are DOM problems.
- Understanding the tree explains parent/child relationships in selectors.

#### Real-Life Analogy

The DOM is like **a restaurant menu tree**:

- The page (document) = the menu cover.
- Sections = categories (Appetizers, Mains).
- Items = the actual elements (buttons, inputs, images).

To order (interact), you find the item in the tree first.

#### Simple ASCII Diagram

```
Document
 └── <html>
      ├── <head>
      │    └── <title>Login</title>
      └── <body>
           ├── <header>
           │    └── <h1 id="main-title">Welcome</h1>
           ├── <form id="login-form">
           │    ├── <input id="username" />
           │    ├── <input id="password" />
           │    └── <button id="login-btn">Login</button>
           └── <footer>
```

Each `<>` tag is a **node**. Automation looks up nodes by id, class, or attribute.

#### Simple JavaScript Example (in a browser)

```javascript
console.log(document.title);            // "Login"
const title = document.getElementById("main-title");
console.log(title.textContent);         // "Welcome"
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `document` | The entry point to the DOM |
| `document.title` | The page title |
| `getElementById("main-title")` | Finds one element by id |
| `title.textContent` | The element's visible text |

#### Automation Testing Example

Playwright/Cypress do the same lookup under the hood:

```javascript
// Playwright
await page.click("#login-btn");

// Cypress
cy.get("#login-btn").click();
```

`#login-btn` is the DOM id of the button in the tree above.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Thinking DOM = HTML source | HTML is the text; DOM is the live tree | The DOM changes as scripts run; HTML source is static |
| Confusing element and node | Similar words | Every element is a node; not every node is an element (text nodes exist) |
| Using browser-only `document` in Node | Runtime confusion | `document` only exists in browsers (Module 1.6) |

#### Memory Tip

> **"DOM = the live family tree of the page. Locators point at members of the tree."**

#### Practice Exercises

**Beginner:**
1. Open any page in Chrome and press F12. Click the Elements tab — you are looking at the DOM.
2. Identify five elements: one h1, one button, one input, one link, one image.
3. Note their ids and classes.

**Intermediate:**
4. In DevTools, right-click an element → Inspect, and find its parent and children.
5. Draw the DOM tree of a simple login page.

**Challenge:**
6. Explain in writing: "The DOM is why automation locators work."

#### Interview Questions

**Beginner:**
1. What is the DOM?
2. What does the browser build from HTML?
3. What is a node?
4. How do automation tools find elements?
5. Is the DOM the same as HTML?

**Intermediate:**
6. Why can the DOM differ from the source HTML?
7. What is the relationship between DOM and locators?
8. What is the document object?

**Scenario-Based:**
9. A locator works in DevTools but fails in automation. What could differ? (Page timing/scripts.)
10. Explain to a junior tester what "element not found" means in DOM terms.

#### Quick Recap

- DOM = live tree of the page.
- Nodes = elements, text, attributes.
- Locators point at nodes.

---

### Topic 14.2 – Elements and Selectors

#### Definition

An **element** is a node from a tag: `<button>`, `<input>`, `<div>`. A **selector** is the pattern used to find it: `#id`, `.class`, `[attribute]`, `tag`.

#### Why Do We Need It?

Selectors are the locators of automation. Knowing how they map to the DOM means you can write stable selectors instead of copying fragile ones.

#### Real-Life Analogy

Selectors are like **addresses**: "Apartment 4B (id)", "The blue house (class)", "The building with the red door (attribute)". Different ways to find the same place.

#### Simple JavaScript Example

```javascript
// Selecting elements (browser JS)
const byId = document.getElementById("login-btn");       // id
const byClass = document.getElementsByClassName("modal"); // class
const byTag = document.getElementsByTagName("button");    // tag
const bySelector = document.querySelector("#login-btn");  // any CSS
```

#### Code Breakdown

| Selector | Matches | Example |
|----------|---------|---------|
| `#id` | One element by id | `#login-btn` |
| `.class` | Elements with class | `.modal` |
| `tag` | Elements by tag | `button` |
| `[attr]` | By attribute | `[name="email"]` |
| `parent > child` | Direct child | `form > button` |
| `a b` | Descendant | `div span` |

#### Automation Testing Example

```javascript
// Playwright
await page.click("#login-btn");                  // id
await page.click(".submit-button");              // class
await page.fill('input[name="username"]', "ravi"); // attribute

// Cypress
cy.get("#login-btn").click();
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting the `#` or `.` | Wrong symbol | `#` id, `.` class |
| Duplicate ids | Invalid HTML | ids must be unique — use class if duplicated |
| Overly long selectors | Copy-paste | Prefer ids and simple attribute selectors |

#### Memory Tip

> **"`#` id, `.` class, `[ ]` attribute — the address book of the DOM."**

#### Practice Exercises

**Beginner:**
1. In DevTools, practice `document.querySelector("#main-title")` in the console.
2. Select a button by class and by tag.
3. Select an input by attribute.

**Intermediate:**
4. Write selectors for: login button, username input, error message div.
5. Draw a form and write three different selectors that reach the submit button.

**Challenge:**
6. Write a mini "selector guide" listing 6 selector types with a real example for each.

#### Interview Questions

**Beginner:**
1. What is an element?
2. What is a selector?
3. What does `#` mean in a selector?
4. What does `.` mean?
5. How do you select by attribute?

**Intermediate:**
6. Why prefer ids for automation?
7. What happens if an id is duplicated?
8. What is the difference between `form button` and `form > button`?

**Scenario-Based:**
9. A page has two buttons with class "btn". How do you target the second one?
10. Convert a DevTools "Copy selector" string into a cleaner one.

#### Quick Recap

- Elements = tags; selectors = addresses.
- `#id`, `.class`, `[attr]`, `tag`.
- Stable selectors → stable tests.

---

### Topic 14.3 – Text Content and Attributes

#### Definition

Elements carry **text** (`textContent`) and **attributes** (`getAttribute("href")`, `.value` for inputs). Tests read these to assert.

#### Why Do We Need It?

Assertions are often text comparisons: button labels, error messages, link URLs, input values.

#### Real-Life Analogy

The element is like **a name tag on a person**: the tag has text (the name) and attributes (the company logo, the lanyard color).

#### Simple JavaScript Example

```javascript
const btn = document.getElementById("login-btn");
console.log(btn.textContent);      // "Login"
console.log(btn.getAttribute("id")); // "login-btn"
console.log(btn.className);        // "primary"
```

#### Code Breakdown

| Property | Gets |
|----------|------|
| `textContent` | Visible text |
| `getAttribute(name)` | Any attribute value |
| `.className` | The class attribute |
| `.value` | Input value (for inputs) |

#### Automation Testing Example

```javascript
// Playwright reads text for assertions
const label = await page.textContent("#login-btn");
console.log("Button says: " + label);

// Cypress
cy.get("#login-btn").should("have.text", "Login");
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using `value` on a div | `value` is for inputs | Use `textContent` for text |
| Forgetting text may have whitespace | Copy-paste assertions | `.trim()` first |
| Confusing `innerHTML` and `textContent` | Similar | `textContent` = visible text (safer) |

#### Memory Tip

> **"textContent = what you see. value = what's typed in inputs."**

#### Practice Exercises

**Beginner:**
1. In DevTools, read `textContent` of a button.
2. Read `getAttribute("href")` of a link.
3. Read the value of an input.

**Intermediate:**
4. Assert (console log PASS/FAIL) that a button's text equals "Login".
5. Read an input value and trim it.

**Challenge:**
6. Write a "DOM inspector" snippet in DevTools that prints text + attributes of three elements.

#### Interview Questions

**Beginner:**
1. What is textContent?
2. How do you read an attribute?
3. What is the value property for?
4. What is innerHTML?
5. Why trim text?

**Intermediate:**
6. Why is textContent safer than innerHTML?
7. What does `.value` return for an empty input?
8. How do you assert a link's href?

**Scenario-Based:**
9. Assert the error message text after a failed login.
10. A button label assertion fails due to whitespace. Fix it.

#### Quick Recap

- `textContent` = visible text.
- `getAttribute()` = attributes.
- `.value` = input contents.

---

### Topic 14.4 – Events

#### Definition

**Events** are things that happen to elements: `click`, `input`, `change`, `submit`, `mouseover`. Code can **listen** for events and react.

#### Why Do We Need It?

Automation triggers events: clicking a button fires a `click` event that the app's JavaScript handles. Understanding events explains what happens *behind the scenes* of `page.click()`.

#### Real-Life Analogy

Events are like **a doorbell**: when someone rings (event), the homeowner (event listener) reacts — opens the door.

#### Simple JavaScript Example (browser)

```javascript
const btn = document.getElementById("login-btn");

btn.addEventListener("click", function () {
  console.log("Button was clicked!");
});
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `addEventListener("click", ...)` | Listens for the click event |
| the function | Runs when the event fires |
| `"click"` | The event name |

#### Automation Testing Example

```javascript
// Playwright triggers a real click event
await page.click("#login-btn");

// Cypress
cy.get("#login-btn").click();
```

If a test clicks but nothing happens, the app's event listener may not be attached yet (a classic timing issue → auto-wait, Module 15).

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Typing event names wrong | `"click"` vs `"Click"` | Event names are lowercase |
| Thinking `page.click` is magic | It fires real events | It dispatches a real click |
| Forgetting listener timing | Scripts load late | Wait for the element to be ready |

#### Memory Tip

> **"Events = doorbells. Listeners = homeowners. Automation rings the bell."**

#### Practice Exercises

**Beginner:**
1. In DevTools, add a click listener to a button and click it.
2. Listen to `input` on a text field and type.
3. Listen to `mouseover` on a div.

**Intermediate:**
4. Write a listener that prints the event type.
5. Add two listeners for the same event — do both run?

**Challenge:**
6. Write a note mapping 5 events (click, input, change, submit, load) to automation actions.

#### Interview Questions

**Beginner:**
1. What is an event?
2. What is a listener?
3. Name three events.
4. What does page.click() do at the DOM level?
5. Are event names case-sensitive?

**Intermediate:**
6. Why might a click listener not fire?
7. What is event-driven behavior?
8. How do events relate to flaky tests?

**Scenario-Based:**
9. A button does nothing when clicked in the test but works manually. Hypothesize why.
10. What event fires when a form is submitted?

#### Quick Recap

- Events = clicks, inputs, changes.
- Listeners react to events.
- Automation triggers the same events as users.

---

### Topic 14.5 – DOM and Automation Testing

#### Definition

Putting it together: automation tools drive the DOM — finding nodes, reading text/attributes, firing events, and waiting for changes.

#### Why Do We Need It?

- Choose robust locators by understanding the DOM.
- Debug "element not found" with DOM knowledge.
- Read dynamic values (text, attributes, state) for assertions.

#### Real-Life Analogy

The DOM is the **stage**; your test is the **director**: it tells elements (actors) what to do, reads their lines (text), and checks the scenery (attributes).

#### Simple JavaScript Example (Playwright-style flow)

```javascript
// 1. Find the element (selector)
const button = page.locator("#login-btn");

// 2. Check it is visible (state)
const visible = await button.isVisible();

// 3. Act (fire an event)
await button.click();

// 4. Read (text/attribute) and assert
const label = await button.textContent();
console.log(label === "Login" ? "PASS" : "FAIL");
```

#### Code Breakdown

| Step | DOM concept |
|------|-------------|
| `locator("#login-btn")` | Selector → node lookup |
| `isVisible()` | Node state check |
| `click()` | Fire the click event |
| `textContent()` | Read node text |

#### Automation Testing Example

```javascript
// Real Playwright test
const title = await page.title();
console.log("Page title: " + title);

await page.fill("#username", "tester01");
await page.click("#login-btn");

const error = await page.textContent(".error-msg");
console.log(error ? "Error shown" : "No error");
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Locators that match multiple nodes | Vague selectors | Use ids or unique attributes |
| Reading text before it updates | Timing | Use assertions with auto-wait |
| Forgetting elements can be hidden | Visibility != presence | Check `isVisible()` not just existence |

#### Memory Tip

> **"Find → check → act → read. The four steps of every DOM interaction."**

#### Practice Exercises

**Beginner:**
1. Write the four-step flow for a login button in plain English.
2. List three selectors you would use for a real page.
3. Explain "visible vs present" in your own words.

**Intermediate:**
4. Write a Playwright-style pseudocode flow for filling a form.
5. Write a flow that reads an error message and asserts it contains "invalid".

**Challenge:**
6. Create a mini reference: "DOM → Automation mapping" (selector, element, event, text, attribute → tool API).

#### Interview Questions

**Beginner:**
1. How does automation find elements?
2. What is the four-step flow?
3. Why do locators fail?
4. What is the difference between presence and visibility?
5. How do you read text in automation?

**Intermediate:**
6. Why are ids preferred as locators?
7. What causes flaky selectors?
8. How does DOM knowledge help debugging?

**Scenario-Based:**
9. A locator finds 5 elements instead of 1. What do you change?
10. The error message text changes from run to run. How do you assert it robustly?

#### Quick Recap

- Automation = find → check → act → read.
- Selectors target DOM nodes.
- DOM knowledge = stable, debuggable tests.

---

## Module 14 – Module Summary

You learned the DOM: the tree, elements and selectors, text/attributes, events, and how automation maps to it all.

## Key Takeaways

- DOM = live tree of the page.
- Selectors: `#id`, `.class`, `[attr]`, `tag`.
- `textContent` reads text; `getAttribute` reads attributes.
- Events (click, input) power interactions.
- Stable selectors come from DOM understanding.

## Cheat Sheet

| Concept | Tool |
|---------|------|
| Element | `<tag>` node |
| Selector | `#id`, `.class`, `[attr]` |
| Text | `textContent` |
| Attribute | `getAttribute(name)` |
| Input value | `.value` |
| Event | `click`, `input`, `submit` |
| Listen | `addEventListener(type, fn)` |
| Find | `querySelector(css)` |

## Frequently Asked Questions (FAQs)

**Q1: What is the difference between `#a` and `.a`?**
`#` = id (unique), `.` = class (repeatable).

**Q2: Why is my element "found" but "not visible"?**
It exists in the DOM but is hidden by CSS or a script.

**Q3: What is the best locator?**
An id or a unique data-testid attribute.

**Q4: Can I use text in a selector?**
Yes — Playwright has `getByText()`, but prefer stable attributes.

**Q5: Why does a locator work in DevTools but not the test?**
Timing — the element appears later. Auto-wait handles it.

**Q6: What is a shadow DOM?**
Encapsulated subtrees (like embedded components) — tools support piercing them.

## Real Automation Examples

```javascript
// Playwright: DOM-driven test
await page.goto("https://example.com/login");
await page.fill("#username", "tester01");
await page.click("#login-btn");
const msg = (await page.textContent(".error-msg")).trim();
if (msg.includes("invalid")) console.log("Error verified");

// Cypress
cy.get("#username").type("tester01");
cy.get("#login-btn").click();
cy.get(".error-msg").should("contain", "invalid");
```

## Mini Project

**Login Page DOM Analyzer**

Write a Playwright-style pseudocode program that:

1. Opens a login page.
2. Prints the page title.
3. Checks the login button is visible.
4. Fills username and password.
5. Clicks login.
6. Reads and asserts the error message contains "invalid" (PASS/FAIL).
7. Adds comments mapping each step to a DOM concept.

## Quiz (10 Questions)

**Q1.** The DOM is:
- A) the HTML file on disk
- B) the live tree of the page
- C) a CSS file
- D) a script

**Q2.** Which selector targets an id?
- A) `.login`
- B) `#login`
- C) `login`
- D) `[login]`

**Q3.** Which targets a class?
- A) `#btn`
- B) `.btn`
- C) `btn`
- D) `<btn>`

**Q4.** What reads an element's visible text?
- A) `.value`
- B) `.textContent`
- C) `.href`
- D) `.id`

**Q5.** What reads an input's typed content?
- A) `textContent`
- B) `.value`
- C) `.innerHTML`
- D) `.text`

**Q6.** Which is a real event?
- A) `Click`
- B) `click`
- C) `clicked`
- D) `onclickevent`

**Q7.** How do you listen for an event?
- A) `listen("click")`
- B) `addEventListener("click", fn)`
- C) `on("click")`
- D) `watch("click")`

**Q8.** What does `page.click("#x")` do?
- A) edits HTML
- B) fires a click event on the element
- C) deletes the element
- D) prints the element

**Q9.** The best locator is:
- A) a long nested CSS path
- B) a unique id / data-testid
- C) an index like `[2]`
- D) page text

**Q10.** A locator works in DevTools but not the test. Likely cause:
- A) wrong browser
- B) timing — element not ready
- C) the id changed spelling
- D) Node version

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | The DOM is the live tree |
| 2 | B | `#` = id |
| 3 | B | `.` = class |
| 4 | B | textContent = visible text |
| 5 | B | value = input content |
| 6 | B | Event names are lowercase |
| 7 | B | addEventListener |
| 8 | B | Fires the click event |
| 9 | B | Unique attributes are stable |
| 10 | B | Auto-wait handles timing |

---

> **Module 14 complete! You now understand the stage. Module 15 is the most important module for testers: asynchronous JavaScript — how waiting, timing, and network calls really work.**

---

# Module 15 – Asynchronous JavaScript

"Async" is the #1 confusion point for testers moving into automation. Why does a test need to `await`? Why are tests "flaky"? Why do `cy.*` commands chain? This module answers all of it.

### Topic 15.1 – Synchronous vs Asynchronous

#### Definition

- **Synchronous** code runs one line at a time, each finishing before the next starts.
- **Asynchronous** code lets some tasks run "in the background" and continues; it handles the result later.

#### Why Do We Need It?

The web is async by nature: loading a page, calling an API, waiting for a network response — none finish instantly. Tests must **wait** for these. Understanding async = understanding why tests need `await`.

#### Real-Life Analogy

- Synchronous = **ordering at a counter**: you wait until your food is handed to you before doing anything else.
- Asynchronous = **ordering with a number ticket**: you take a ticket, sit down, and they call you when your food is ready. You do other things in the meantime.

#### Simple JavaScript Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Inside timeout (2s later)");
}, 2000);

console.log("End");
```

**Output order:**
```
Start
End
Inside timeout (2s later)
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `console.log("Start")` | Runs immediately |
| `setTimeout(fn, 2000)` | Schedules `fn` for 2 seconds later — does not block! |
| `console.log("End")` | Runs immediately, before the timeout fires |

#### Automation Testing Example

Page loads are async:

```javascript
console.log("Test started");
await page.goto("https://example.com");   // async — waits
console.log("Page loaded");               // only after goto resolves
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Expecting async code in order | Missing the "later" concept | Order is not guaranteed without await |
| Using `setTimeout` to fix tests | Hacky waits | Prefer explicit/auto waits (Topic 15.7) |
| Blocking with loops instead of waiting | Old habit | Never busy-wait — use proper waits |

#### Memory Tip

> **"Sync = counter order. Async = ticket number. `await` = 'call me when ready'."**

#### Practice Exercises

**Beginner:**
1. Run the setTimeout example — observe the order.
2. Change the delay to 0ms. Does it still print last? (Yes — async!)
3. Log the current time before and after setTimeout.

**Intermediate:**
4. Write a program with two setTimeouts (1s and 500ms) — which prints first?
5. Explain in writing: why "End" prints before "Inside timeout".

**Challenge:**
6. Write a program that demonstrates three async tasks finishing out of order, with comments explaining each.

#### Interview Questions

**Beginner:**
1. What is synchronous code?
2. What is asynchronous code?
3. What does setTimeout do?
4. Why is the web async?
5. What does `await` hint at?

**Intermediate:**
6. Why can't tests just "sleep"?
7. What is non-blocking?
8. Why do page loads need waiting?

**Scenario-Based:**
9. A test checks an element right after navigation and it fails. Explain why.
10. Why are fixed `sleep(5s)` waits bad practice?

#### Quick Recap

- Sync = one line at a time.
- Async = tasks finish later; handle when ready.
- `await` = wait for an async task.

---

### Topic 15.2 – The Call Stack and Event Loop

#### Definition

- **Call stack**: the list of currently-running function calls (LIFO — last in, first out).
- **Event loop**: the manager that takes finished async tasks and runs their callbacks when the stack is empty.

#### Why Do We Need It?

It explains *why* JavaScript can "do other things" while waiting and *why* async callbacks run after the current code finishes.

#### Real-Life Analogy

The call stack is like **a stack of plates** — you wash the top plate first. The event loop is like **a waiter with a tray of orders**: he delivers each finished dish when the kitchen (main code) is free.

#### Simple JavaScript Example

```javascript
console.log("1");                     // stack: main
setTimeout(() => console.log("2"), 0); // queued
console.log("3");                     // stack: main

// Output: 1, 3, 2
```

#### Code Breakdown

| Step | What happens |
|------|--------------|
| `console.log("1")` | Runs now |
| `setTimeout(..., 0)` | Callback queued — even at 0ms! |
| `console.log("3")` | Runs now |
| Stack empties → event loop | Runs the queued "2" |

The event loop only runs queued callbacks when the stack is empty. That is why "2" always prints last.

#### Automation Testing Example

Playwright's auto-wait is built on the event loop: actions are queued and executed when the page's JavaScript is idle — which is why `await page.click()` reliably works after navigation.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Thinking 0ms timeout runs immediately | Missing the event loop | Even 0ms callbacks wait for the stack |
| Blocking the stack with infinite loops | Freezes everything | Never block; async exists for a reason |
| Confusing stack and queue | Order words | Stack = LIFO; queue = FIFO |

#### Memory Tip

> **"Stack = plates (LIFO). Event loop = waiter (delivers when the counter is free)."**

#### Practice Exercises

**Beginner:**
1. Run the "1, 3, 2" example and verify.
2. Add a 0ms timeout and a 100ms timeout — observe order.
3. Draw the stack/queue for the example.

**Intermediate:**
4. Write three setTimeouts and predict the order before running.
5. Explain "the event loop runs when the stack is empty" in your own words.

**Challenge:**
6. Write a program that logs the sequence of five operations (mix of sync and async) and then draw the full sequence diagram.

#### Interview Questions

**Beginner:**
1. What is the call stack?
2. What is the event loop?
3. Why does a 0ms timeout run last?
4. What is LIFO?
5. What happens if the stack never empties?

**Intermediate:**
6. Why is JavaScript called single-threaded yet responsive?
7. What would block the event loop?
8. How does the event loop power auto-wait?

**Scenario-Based:**
9. A test's infinite while loop freezes the page. Explain using the stack.
10. Why does a console.log after a setTimeout print first?

#### Quick Recap

- Stack = running calls; event loop = queued callbacks.
- Async callbacks run after the stack empties.
- Never block the event loop.

---

### Topic 15.3 – Callbacks and Callback Hell

#### Definition

A **callback** (review 7.7) handles async results: "when this finishes, run this." Nested callbacks get unreadable — that's **callback hell**.

#### Why Do We Need It?

Callbacks were the original async pattern. You'll see them in legacy code and some APIs. Modern code uses promises, but understanding callbacks clarifies why promises exist.

#### Real-Life Analogy

Callback hell is like **instructions that keep deferring**: "After you finish step 1, ask Bob. After Bob answers, ask Carol. After Carol answers..." — deeply nested and hard to follow.

#### Simple JavaScript Example

```javascript
// Callback
doTask((result) => {
  console.log("Done: " + result);
});

// Callback hell (nested)
getUser((user) => {
  getPosts(user, (posts) => {
    getComments(posts[0], (comments) => {
      console.log(comments);
    });
  });
});
```

#### Code Breakdown

| Pattern | Problem |
|---------|---------|
| One callback | Clear |
| Nested callbacks | Deep indentation, hard errors, hard to read |

#### Automation Testing Example

Older Selenium-style JS code used callbacks:

```javascript
driver.get(url, () => {
  driver.findElement(By.id("x"), (el) => {
    el.click(() => {
      console.log("Clicked");
    });
  });
});
```

Modern tools (Playwright, Cypress) replaced this with promises and `async/await` — the topic of 15.5.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Writing deeply nested callbacks | Following old tutorials | Use promises/async/await |
| Errors in callbacks being lost | Async error flow | Use `.catch()` or try/catch with await |

#### Memory Tip

> **"Callbacks = 'then do this'. Too many = the pyramid of doom. Promises flatten it."**

#### Practice Exercises

**Beginner:**
1. Write a simple function that takes a callback and calls it.
2. Call it with an arrow.
3. Write a two-level nested callback.

**Intermediate:**
4. Write the "pyramid of doom" (three levels) and count the indentation.
5. Explain why the pyramid is hard to debug.

**Challenge:**
6. Write a small note: "Three reasons promises were invented."

#### Interview Questions

**Beginner:**
1. What is a callback?
2. What is callback hell?
3. Why are callbacks used for async?
4. What is the pyramid of doom?
5. How do modern tools avoid it?

**Intermediate:**
6. What are the downsides of nested callbacks?
7. Why are errors tricky in callbacks?
8. What replaced callbacks in modern JS?

**Scenario-Based:**
9. Rewrite a nested callback flow in plain English steps.
10. A legacy test is full of nested callbacks. What modernization do you suggest?

#### Quick Recap

- Callbacks handle async results.
- Nested callbacks = callback hell.
- Promises/async/await solve it.

---

### Topic 15.4 – Promises

#### Definition

A **Promise** is an object representing a future value. It is in one of three states: **pending** (waiting), **fulfilled** (success), or **rejected** (failure). You handle the result with `.then()` and `.catch()`.

#### Why Do We Need It?

Promises make async code readable and chainable. Every modern framework method that returns "a future value" returns a promise.

#### Real-Life Analogy

A promise is like **an online order receipt**: "Your order is pending." Later, either "Delivered" (fulfilled) or "Canceled" (rejected). The receipt is your handle on the future result.

#### Simple JavaScript Example

```javascript
const order = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Order delivered");
  } else {
    reject("Order failed");
  }
});

order
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `new Promise((resolve, reject) => ...)` | Create a promise |
| `resolve(value)` | Mark fulfilled with a value |
| `reject(error)` | Mark rejected |
| `.then(fn)` | Runs on fulfillment |
| `.catch(fn)` | Runs on rejection |

#### Automation Testing Example

```javascript
// A real promise — page.goto returns one
page.goto(url)
  .then(() => console.log("Page loaded"))
  .catch((err) => console.log("Failed: " + err));
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting .catch | Unhandled rejections | Always chain .catch |
| Thinking promises are synchronous | Future values | They resolve later |
| Returning inside .then but not using it | Chaining confusion | Return values for the next .then |

#### Memory Tip

> **"Promise = receipt for a future result. `.then` for success, `.catch` for failure."**

#### Practice Exercises

**Beginner:**
1. Create a promise that resolves "Hello".
2. Handle it with .then and .catch.
3. Create one that rejects and handle it.

**Intermediate:**
4. Chain two .then steps.
5. Add .catch to a promise chain and log the error.

**Challenge:**
6. Write a function that returns a promise which resolves after 1 second (setTimeout + resolve), then use it.

#### Interview Questions

**Beginner:**
1. What is a promise?
2. Name its three states.
3. What does resolve do?
4. What does reject do?
5. What does .then do?

**Intermediate:**
6. Why do frameworks return promises?
7. What happens without .catch?
8. How do you chain promises?

**Scenario-Based:**
9. A test logs "Promise { <pending> }" instead of the value. Explain why.
10. Why is `await page.goto()` the modern equivalent of `.then`?

#### Quick Recap

- Promise = future value (pending → fulfilled/rejected).
- `.then` success, `.catch` failure.
- Framework methods return promises.

---

### Topic 15.5 – `async` and `await`

#### Definition

- `async` marks a function as asynchronous — it returns a promise.
- `await` pauses the function until a promise settles, then gives you the value directly.

#### Why Do We Need It?

`async/await` makes async code look like normal top-to-bottom code — the single most important feature for writing readable automation tests.

#### Real-Life Analogy

`await` is like **waiting at the baggage carousel**: you stand at the belt (pause) until your bag (result) arrives, then continue walking with it. No nested callbacks, no ticket numbers — just wait, then go.

#### Simple JavaScript Example

```javascript
async function getMessage() {
  const result = await somePromise();   // waits, then gives the value
  console.log(result);
}
```

**Realistic version:**

```javascript
function waitASecond() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

async function demo() {
  console.log("Waiting...");
  await waitASecond();
  console.log("Done waiting!");
}

demo();
```

#### Code Breakdown

| Keyword | Effect |
|---------|--------|
| `async function` | Function returns a promise automatically |
| `await somePromise()` | Pauses until settled; yields the value |

**Rules:**
- `await` only works inside `async` functions.
- `await` unwraps the promise — no `.then` needed.

#### Automation Testing Example

```javascript
test("Login test", async () => {
  await page.goto("https://example.com/login");
  await page.fill("#username", "tester01");
  await page.click("#login-btn");
  await expect(page).toHaveURL(/dashboard/);
});
```

Every `await` waits for an async action — this is the Playwright style you will see daily.

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| `await` outside async function | Syntax error | Enclose in `async () => {}` |
| Forgetting `await` | Race conditions | The action may not finish before the next step |
| Marking test body sync | Missing async | Test callbacks must be `async` to await |

#### Memory Tip

> **"`async` = the function is async-aware. `await` = pause here, take the value."**

#### Practice Exercises

**Beginner:**
1. Write an async function that awaits a 1s timeout.
2. Call it and log before/after.
3. Try `await` outside async — read the error.

**Intermediate:**
4. Rewrite a .then/.catch chain with async/await + try/catch.
5. Write an async helper that fetches fake data after a delay.

**Challenge:**
6. Write an async login simulation: await a delay, check a fake result, return it — then use try/catch around it.

#### Interview Questions

**Beginner:**
1. What does async do?
2. What does await do?
3. Where can await be used?
4. Why do test callbacks need async?
5. What does async return?

**Intermediate:**
6. How is async/await better than .then?
7. What happens without await on an async call?
8. How do you handle errors with async/await?

**Scenario-Based:**
9. A test without await fails intermittently. Explain why.
10. Write a Playwright-style login flow with awaits.

#### Quick Recap

- `async` marks async functions.
- `await` waits for promises, unwraps values.
- The standard for readable automation tests.

---

### Topic 15.6 – The Fetch API

#### Definition

`fetch(url)` is the modern browser/Node API for **making network requests** (HTTP calls) — like GET, POST. It returns a promise.

#### Why Do We Need It?

- API testing without a full UI.
- Intercepting/mocking network in tests.
- Getting auth tokens, checking response status.

#### Real-Life Analogy

`fetch` is like **sending a courier**: you send a request (the courier), and a promise (receipt) tracks when the package (response) arrives.

#### Simple JavaScript Example

```javascript
async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  console.log(data.name);
}

getUser();
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `fetch(url)` | Sends a GET request → promise |
| `await fetch(...)` | Waits for the response |
| `response.json()` | Parses the body → promise |
| `data.name` | The parsed JSON value |

#### Automation Testing Example

```javascript
async function checkApi() {
  const res = await fetch("https://api.example.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: "ravi", pass: "123" }),
  });

  console.log("Status: " + res.status);
  const body = await res.json();
  console.log("Token: " + body.token);
}

checkApi();
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting to await fetch | Getting a pending promise | Always await |
| Forgetting to parse with .json() | Response body is raw | `await response.json()` |
| Not checking res.status | Silent failures | Check `res.ok` / `res.status` first |

#### Memory Tip

> **"fetch = request → promise. Always `await`, always check status, parse with `.json()`."**

#### Practice Exercises

**Beginner:**
1. Fetch a public API and print the status.
2. Parse the JSON and print a field.
3. Log `res.ok`.

**Intermediate:**
4. Write a POST helper that sends JSON and returns the body.
5. Handle a failed fetch with try/catch.

**Challenge:**
6. Write a small "API smoke test": GET an endpoint, assert status 200, print a field, catch errors.

#### Interview Questions

**Beginner:**
1. What does fetch do?
2. What does fetch return?
3. How do you parse JSON from a response?
4. What is res.ok?
5. How do you send a POST?

**Intermediate:**
6. Why await fetch?
7. What is JSON.stringify for in a POST body?
8. How would you test an API with fetch?

**Scenario-Based:**
9. Write an API health check with fetch.
10. A fetch fails silently. What checks are you missing?

#### Quick Recap

- `fetch` makes HTTP requests, returns a promise.
- `await` it; check status; parse `.json()`.
- Great for API testing and mocks.

---

### Topic 15.7 – Waits and Auto-Waiting

#### Definition

**Auto-wait** is when a framework automatically waits for an element to be ready (visible, attached, enabled) before acting. Explicit waits are when you wait for a specific condition.

#### Why Do We Need It?

This is the practical payoff of async: flaky tests are usually timing problems. Auto-wait fixes most of them; explicit waits handle the rest.

#### Real-Life Analogy

Auto-wait is like **a train that waits for passengers to board**: it does not leave until everyone is ready. Explicit wait is like **checking your watch for a specific time**.

#### Simple JavaScript Example

```javascript
// Playwright auto-waits for the button to be actionable:
await page.click("#submit");

// Explicit wait for a condition:
await expect(page.locator("#success")).toBeVisible({ timeout: 10000 });
```

#### Code Breakdown

| Wait type | Example | When |
|-----------|---------|------|
| Auto-wait | `page.click(sel)` | Framework waits for actionability |
| Explicit | `expect(...).toBeVisible()` | You name the condition |
| Fixed sleep | `setTimeout` | Avoid — fragile |

#### Automation Testing Example

```javascript
test("Shows success message", async ({ page }) => {
  await page.goto(url);
  await page.click("#submit");
  // auto-wait: waits for the message to appear
  await expect(page.locator("#success")).toBeVisible();
});
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using fixed sleeps | Learned habit | Use framework waits |
| Long timeouts everywhere | Masking slow tests | Keep timeouts reasonable |
| Waiting after acting instead of before | Wrong order | Wait for conditions, then assert |

#### Memory Tip

> **"Auto-wait = the framework's patience. Fixed sleep = a guess. Prefer patience."**

#### Practice Exercises

**Beginner:**
1. Identify all auto-waits in a Playwright example.
2. Write an explicit wait for a success message.
3. Explain why sleeps are fragile.

**Intermediate:**
4. Write a test that waits for an element, then asserts its text.
5. Compare auto-wait vs sleep in terms of reliability.

**Challenge:**
6. Write a mini reference: "5 timing problems and their wait-based fixes."

#### Interview Questions

**Beginner:**
1. What is auto-wait?
2. What is an explicit wait?
3. Why avoid fixed sleeps?
4. What does toBeVisible do?
5. When does a click wait?

**Intermediate:**
6. Why does auto-wait reduce flakiness?
7. What is actionability?
8. How do timeouts relate to waits?

**Scenario-Based:**
9. A test fails randomly on slow CI. What do you recommend?
10. An element takes 8s to appear. Default 5s timeout fails. Fix it.

#### Quick Recap

- Auto-wait = framework waits for readiness.
- Explicit waits name conditions.
- Fixed sleeps are fragile — avoid.

---

## Module 15 – Module Summary

You learned async JavaScript end to end: sync vs async, the call stack and event loop, callbacks, promises, async/await, fetch, and waits.

## Key Takeaways

- Async tasks finish later; `await` waits for them.
- Event loop runs queued callbacks after the stack empties.
- Promises → `.then`/`.catch`; modern code → `async/await`.
- `fetch` does HTTP; always check status and parse JSON.
- Auto-wait beats fixed sleeps for reliability.

## Cheat Sheet

| Concept | Key idea |
|---------|----------|
| Sync | One line at a time |
| Async | Tasks finish later |
| Call stack | Running calls (LIFO) |
| Event loop | Runs queued callbacks when free |
| Callback | "When done, do this" |
| Promise | Future value (pending/fulfilled/rejected) |
| `async` | Function returns a promise |
| `await` | Pause until settled |
| `fetch(url)` | HTTP request → promise |
| Auto-wait | Framework waits for readiness |

## Frequently Asked Questions (FAQs)

**Q1: Why do Playwright tests need `async`?**
Almost every action returns a promise — `await` is required.

**Q2: Is `setTimeout` a good wait?**
No. Use framework waits with conditions.

**Q3: What is the difference between `await` and `.then`?**
`await` is sugar over `.then` — same result, cleaner code.

**Q4: Why is my test "flaky"?**
Usually timing: elements not ready. Auto-wait + explicit waits fix it.

**Q5: What is the event loop in one sentence?**
The mechanism that runs queued async callbacks when the call stack is free.

**Q6: Do I need to learn callbacks deeply?**
Understand them, but write modern `async/await` code.

## Real Automation Examples

```javascript
// Playwright test — async everywhere
test("login flow", async ({ page }) => {
  await page.goto("https://example.com/login");
  await page.fill("#username", "tester01");
  await page.click("#login-btn");
  await expect(page.locator(".welcome")).toBeVisible();
});

// API check with fetch
const res = await fetch("https://api.example.com/health");
if (res.ok) console.log("API healthy");
```

## Mini Project

**Async Login Flow**

Write a Node program that:

1. Defines `fakeLogin(user, pass)` returning a promise (setTimeout 1s, resolves if user === "admin").
2. Uses `async/await` to call it.
3. Wraps it in try/catch.
4. Uses `fetch` (if available) or a fake request to print a status.
5. Logs "Start", the result, and "End" — and explains the order.

## Quiz (10 Questions)

**Q1.** Async means:
- A) faster code
- B) tasks finish later
- C) no functions
- D) only browsers

**Q2.** What is the call stack?
- A) a queue of timers
- B) currently running calls
- C) an array method
- D) an object

**Q3.** A 0ms setTimeout runs:
- A) immediately
- B) after the current code finishes
- C) never
- D) twice

**Q4.** A promise's success state:
- A) rejected
- B) fulfilled
- C) pending forever
- D) done

**Q5.** Which handles promise failures?
- A) `.then`
- B) `.catch`
- C) `.finally` only
- D) `.map`

**Q6.** `await` can only be used inside:
- A) any function
- B) async functions
- C) loops
- D) classes only

**Q7.** What does `async` make a function return?
- A) a string
- B) a promise
- C) an array
- D) a boolean

**Q8.** `fetch(url)` returns:
- A) a string
- B) a promise
- C) an array
- D) a DOM element

**Q9.** To read a JSON response body:
- A) `response.text()`
- B) `response.json()`
- C) `JSON(response)`
- D) `response.body()`

**Q10.** The best way to handle timing in tests:
- A) fixed sleeps
- B) auto-wait + explicit waits
- C) longer timeouts on everything
- D) retry the whole suite

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | Async tasks complete later |
| 2 | B | Stack holds running calls |
| 3 | B | Event loop runs it after |
| 4 | B | Fulfilled = success |
| 5 | B | .catch handles rejections |
| 6 | B | Only inside async functions |
| 7 | B | async returns a promise |
| 8 | B | fetch returns a promise |
| 9 | B | response.json() parses JSON |
| 10 | B | Condition-based waits beat sleeps |

---

> **Module 15 complete — the hardest module is behind you! Module 16 covers modern ES6+ features: the syntax you will see in every framework example.**

---

# Module 16 – Modern JavaScript (ES6+)

ES6 (ECMAScript 2015) and later versions modernized JavaScript. Every Playwright/Cypress example you will read uses these features. This module covers them all.

### Topic 16.1 – `let`, `const`, and Template Literals (Refresher)

#### Definition

Quick recap of modern basics you already know: `let`/`const` instead of `var`, and backtick template literals instead of `+` concatenation.

#### Why Do We Need It?

These three are the "everywhere" features — they appear in literally every modern code sample.

#### Real-Life Analogy

Think of them as **the new standard office supplies**: everyone uses them, they replace the old tools, and they are simply better.

#### Simple JavaScript Example

```javascript
const appName = "Test App";           // const default
let retryCount = 0;                   // let for changing

console.log(`App: ${appName}, retries: ${retryCount}`);
```

#### Code Breakdown

| Feature | Why modern |
|---------|------------|
| `const` / `let` | Block-scoped, safer than `var` |
| Template literals | Clean `${}` insertion, multi-line |

#### Automation Testing Example

```javascript
const baseUrl = "https://example.com";
let attempts = 0;
console.log(`Starting tests against ${baseUrl}`);
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using `var` | Old tutorials | Modern code: `const`/`let` |
| Concatenation everywhere | Old habit | Use template literals |

#### Memory Tip

> **"`const` default, `let` for change, backticks for strings."**

#### Practice Exercises

**Beginner:**
1. Write a const, a let, and a template literal in one program.
2. Update the let and reprint.
3. Multi-line template literal with three variables.

**Intermediate:**
4. Convert a string-concatenation program to template literals.
5. Convert var declarations to let/const appropriately.

**Challenge:**
6. Write a small config printer using only modern syntax.

#### Interview Questions

**Beginner:**
1. Why const/let over var?
2. What do template literals replace?
3. Can const values be changed?
4. What syntax inserts a variable?
5. Why block scope?

**Intermediate:**
6. When do you choose let over const?
7. Why are template literals preferred?
8. What is the modern style for strings?

**Scenario-Based:**
9. Modernize a legacy test snippet.
10. Explain to a junior why `var` is avoided.

#### Quick Recap

- const/let + template literals = modern baseline.
- Default const; backticks for strings.

---

### Topic 16.2 – Destructuring

#### Definition

**Destructuring** unpacks arrays (`const [a, b] = arr`) and objects (`const { x, y } = obj`) into variables in one line.

#### Why Do We Need It?

- Read config values directly.
- Parse API data cleanly.
- Swap values without a temp variable.

#### Real-Life Analogy

Destructuring is like **unpacking a lunchbox**: instead of opening the box and grabbing each item, you empty it straight into labeled containers in one motion.

#### Simple JavaScript Example

```javascript
// Array destructuring
const [first, second] = ["login", "logout"];
console.log(first, second);   // login logout

// Object destructuring
const user = { name: "Ravi", role: "admin" };
const { name, role } = user;
console.log(name, role);      // Ravi admin

// Renaming during destructure
const { name: fullName } = user;
console.log(fullName);        // Ravi
```

#### Code Breakdown

| Pattern | Syntax | Result |
|---------|--------|--------|
| Array | `const [a, b] = arr` | a=arr[0], b=arr[1] |
| Object | `const {x, y} = obj` | x=obj.x, y=obj.y |
| Rename | `{x: newName}` | newName=obj.x |
| Default | `{x = 5}` | 5 if missing |

#### Automation Testing Example

```javascript
const config = { browser: "chromium", timeout: 30 };
const { browser, timeout } = config;
console.log(`Using ${browser} with ${timeout}s timeout`);

const [user, pass] = "tester01,Passw0rd!".split(",");
console.log(user, pass);
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| `{ }` for arrays / `[ ]` for objects | Reversed | Arrays `[ ]`, objects `{ }` |
| Names must match object keys | Forgetting | Use renaming for different names |
| Missing defaults | undefined results | Use `= default` |

#### Memory Tip

> **"Brackets match the source: `[ ]` for arrays, `{ }` for objects."**

#### Practice Exercises

**Beginner:**
1. Destructure `["a","b","c"]` into three variables.
2. Destructure `{x: 1, y: 2}`.
3. Destructure with a default value.

**Intermediate:**
4. Destructure a CSV line with split.
5. Swap two variables using array destructuring.

**Challenge:**
6. Write a program that destructures a nested object (`const { data: { user } } = response`) and prints the user.

#### Interview Questions

**Beginner:**
1. What is destructuring?
2. What brackets for arrays?
3. What brackets for objects?
4. How do you rename?
5. What is a default value?

**Intermediate:**
6. How do you destructure nested objects?
7. How does destructuring parse CSV?
8. How do you swap without a temp?

**Scenario-Based:**
9. Extract browser and timeout from a config object.
10. Parse "ravi,admin" into two variables.

#### Quick Recap

- Arrays `[a, b]`, objects `{x, y}`.
- Rename with `{x: name}`, default with `= value`.
- Great for configs and parsing.

---

### Topic 16.3 – Spread and Rest Operators

#### Definition

- **Spread (`...`)** — expands an array/object into individual items.
- **Rest (`...`)** — collects remaining items into an array.

Same syntax `...`, different position decides the meaning.

#### Why Do We Need It?

- Copy arrays/objects without mutating.
- Combine arrays: `[...a, ...b]`.
- Functions with any number of arguments (rest).

#### Real-Life Analogy

- Spread = **unpacking a bag onto a table** — contents spread out.
- Rest = **scooping the remaining toys into a basket** — everything left over.

#### Simple JavaScript Example

```javascript
// Spread: copy & combine
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b];   // [1, 2, 3, 4]
const copy = [...a];             // [1, 2] — safe copy

// Spread objects
const base = { url: "https://example.com", retries: 2 };
const full = { ...base, retries: 5 };   // override retries
console.log(full);

// Rest: collect arguments
function sum(...numbers) {
  return numbers.reduce((t, n) => t + n, 0);
}
console.log(sum(1, 2, 3));   // 6
```

#### Code Breakdown

| Usage | Example | Result |
|-------|---------|--------|
| Spread array | `[...a, ...b]` | Combined array |
| Copy array | `[...a]` | Safe copy |
| Spread object | `{...base, x: 1}` | Merged object |
| Rest params | `(...nums)` | Array of all args |

#### Automation Testing Example

```javascript
const defaultOptions = { timeout: 30, retries: 3 };
const testOptions = { ...defaultOptions, browser: "chromium" };

function logTest(name, ...tags) {
  console.log(name + " tags: " + tags.join(", "));
}
logTest("Login", "smoke", "regression");
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using rest in the middle of params | Syntax error | Rest must be the last parameter |
| Thinking spread mutates | It copies | `[...a]` leaves `a` unchanged |
| Forgetting `...` | Combining becomes nested | `[a, b]` vs `[...a, ...b]` |

#### Memory Tip

> **"Spread = unpack (right side-ish). Rest = collect (parameters). Same dots, two jobs."**

#### Practice Exercises

**Beginner:**
1. Combine two arrays with spread.
2. Copy an array and verify the original is unchanged.
3. Write a function with rest params and call with 4 values.

**Intermediate:**
4. Merge two objects with spread and override one key.
5. Use spread to pass an array to Math.max.

**Challenge:**
6. Write a function `logAll(name, ...values)` and a config merger using spread — print both results.

#### Interview Questions

**Beginner:**
1. What does spread do?
2. What does rest do?
3. How do you copy an array?
4. How do you combine arrays?
5. Where must rest appear?

**Intermediate:**
6. What is the difference between spread and rest?
7. Why spread for safe copies?
8. How do you override an object key with spread?

**Scenario-Based:**
9. Merge default config with per-test overrides using spread.
10. Write a function that accepts unlimited tags and joins them.

#### Quick Recap

- Spread unpacks; rest collects.
- Copy/combine arrays and objects safely.
- Rest params = unlimited arguments.

---

### Topic 16.4 – Default Parameters

#### Definition

**Default parameters** give a parameter a value when the argument is missing or `undefined`: `function f(x = 10) {}`.

#### Why Do We Need It?

- Timeouts, retries, and URLs with sensible defaults.
- No more manual `if (x === undefined)` checks.

#### Real-Life Analogy

Default parameters are like **a form's pre-filled fields**: if you leave a field empty, the default value is used.

#### Simple JavaScript Example

```javascript
function setWaitTime(seconds = 5) {
  console.log("Waiting " + seconds + "s");
}

setWaitTime(10);   // Waiting 10s
setWaitTime();     // Waiting 5s (default)
setWaitTime(undefined); // Waiting 5s
```

#### Code Breakdown

| Call | seconds | Result |
|------|---------|--------|
| `setWaitTime(10)` | 10 | 10s |
| `setWaitTime()` | 5 (default) | 5s |
| `setWaitTime(undefined)` | 5 (default) | 5s |

**Note:** `null` does **not** trigger the default (it stays null).

#### Automation Testing Example

```javascript
async function openPage(page, url, waitUntil = "load") {
  console.log(`Opening ${url}, waiting for ${waitUntil}`);
}

openPage(page, "https://example.com");       // waitUntil = "load"
openPage(page, "https://example.com", "networkidle");
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Passing `null` expecting default | Defaults only cover undefined | Use `??` or check null |
| Defaults before required params | Style confusion | Put required params first |
| Forgetting defaults only apply to undefined | Edge case | Test with undefined vs null |

#### Memory Tip

> **"`= value` in the signature = the pre-filled field. Only undefined uses it."**

#### Practice Exercises

**Beginner:**
1. Write a function with one default parameter.
2. Call it with a value, with nothing, and with undefined.
3. Call with null — what happens?

**Intermediate:**
4. Write `createUser(name, role = "user")`.
5. Write `wait(seconds = 5)` and use it in a fake async flow.

**Challenge:**
6. Write a config helper with three defaults and test all combinations.

#### Interview Questions

**Beginner:**
1. What are default parameters?
2. When is the default used?
3. Does null trigger the default?
4. Where do defaults go?
5. Why are they useful for timeouts?

**Intermediate:**
6. How are defaults better than manual checks?
7. What is the undefined vs null behavior?
8. How do defaults reduce config duplication?

**Scenario-Based:**
9. Write `get(url, timeout = 30)`.
10. A default never applies because callers pass null. Fix it.

#### Quick Recap

- Defaults apply when argument is undefined.
- Great for timeouts/retries/URLs.
- `null` does not trigger defaults.

---

### Topic 16.5 – Classes and Inheritance

#### Definition

**Classes** are blueprints for objects: `class User { constructor(...) {...} }`. **Inheritance** lets one class extend another: `class Admin extends User`.

#### Why Do We Need It?

- Organize helpers (Page Object classes).
- Reuse common test logic (base page, base test).
- Clean, real-world modeling.

#### Real-Life Analogy

A class is like **a house blueprint**: the blueprint itself builds nothing, but every house built from it is an instance. Inheritance is like **an apartment building extending the house blueprint** — same basics, plus extras.

#### Simple JavaScript Example

```javascript
class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  describe() {
    return `${this.name} (${this.role})`;
  }
}

const ravi = new User("Ravi", "admin");
console.log(ravi.describe());   // Ravi (admin)

class AdminUser extends User {
  constructor(name) {
    super(name, "admin");       // call the parent constructor
  }
  manage() {
    return `${this.name} can manage the system`;
  }
}

const admin = new AdminUser("Priya");
console.log(admin.describe());  // Priya (admin)
console.log(admin.manage());    // Priya can manage the system
```

#### Code Breakdown

| Keyword | Purpose |
|---------|---------|
| `class User` | Blueprint |
| `constructor(...)` | Runs on `new` |
| `this.name` | Instance property |
| `method() {}` | Instance method |
| `extends User` | Inheritance |
| `super(...)` | Call the parent constructor |
| `new User(...)` | Create an instance |

#### Automation Testing Example

Page Object Model (Module 20) uses classes:

```javascript
class LoginPage {
  constructor(page) {
    this.page = page;
  }
  async open() {
    await this.page.goto("https://example.com/login");
  }
  async login(username, password) {
    await this.page.fill("#username", username);
    await this.page.click("#login-btn");
  }
}

const loginPage = new LoginPage(page);
await loginPage.open();
await loginPage.login("tester01", "Passw0rd!");
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting `new` | `User(...)` fails without new | Always `new User(...)` |
| Forgetting `super()` in extends | Reference error | Call super first in the child constructor |
| Confusing class (blueprint) with instance | Vocabulary | Class defines; `new` creates |
| Forgetting `this` | Property errors | Use `this.` for instance data |

#### Memory Tip

> **"Class = blueprint. `new` = build. extends = blueprint with extras. super = the parent's constructor."**

#### Practice Exercises

**Beginner:**
1. Create a `Test` class with name and status properties.
2. Add a method that prints "Name: status".
3. Instantiate it with `new`.

**Intermediate:**
4. Create `BaseTest` and `LoginTest extends BaseTest`.
5. Add an overridden method in the child class.

**Challenge:**
6. Build a `Page` base class and a `LoginPage extends Page` with `open()` and `login()` methods — the skeleton of Page Object Model.

#### Interview Questions

**Beginner:**
1. What is a class?
2. What does constructor do?
3. How do you create an instance?
4. What is inheritance?
5. What does super do?

**Intermediate:**
6. What is Page Object Model?
7. Why use classes for page objects?
8. What happens without super?

**Scenario-Based:**
9. Design a LoginPage class for Playwright.
10. Explain class vs instance to a junior tester.

#### Quick Recap

- Classes = blueprints with constructor + methods.
- `extends` + `super` = inheritance.
- `new` creates instances.
- Foundation of Page Object Model.

---

### Topic 16.6 – Modules: Import and Export

#### Definition

**Modules** split code into files. `export` shares a value; `import` brings it in. Modern JS uses `import`/`export` (ESM); Node also supports `require`/`module.exports` (CommonJS).

#### Why Do We Need It?

- Separate helpers, page objects, and configs into files.
- Reuse code across tests.
- Keep files small and maintainable.

#### Real-Life Analogy

Modules are like **department files in an office**: each department has its own file (module), and other departments request copies (imports) of what they need.

#### Simple JavaScript Example

**File: `helpers.js`**
```javascript
export function add(a, b) {
  return a + b;
}

export const defaultTimeout = 30;
```

**File: `test.js`**
```javascript
import { add, defaultTimeout } from "./helpers.js";

console.log(add(2, 3));            // 5
console.log(defaultTimeout);       // 30
```

#### Code Breakdown

| Syntax | What it does |
|--------|--------------|
| `export function f()` | Share a function |
| `export const x = 1` | Share a value |
| `import { f, x } from "./file.js"` | Bring in specific items |
| `import x from "./file.js"` | Default import |

**CommonJS (Node, older style):**

```javascript
// helpers.js
module.exports = { add, defaultTimeout };
// test.js
const { add } = require("./helpers.js");
```

#### Automation Testing Example

**`pages/login.js`**
```javascript
export class LoginPage {
  constructor(page) { this.page = page; }
  async login(user, pass) { /* ... */ }
}
```

**`tests/login.spec.js`**
```javascript
import { LoginPage } from "../pages/login.js";

test("login works", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login("tester01", "Passw0rd!");
});
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Missing `./` in import paths | Module not found | Relative imports start with `./` |
| Forgetting `{}` for named exports | Import error | Named: `{ add }`; default: no braces |
| Mixing import and require styles | Confusion | Pick one per project (check package.json `"type"`) |

#### Memory Tip

> **"export = put on the shelf. import = take from the shelf. Named items go in `{ }`."**

#### Practice Exercises

**Beginner:**
1. Create `helpers.js` with two exports.
2. Create `main.js` that imports and uses them.
3. Run with Node (`node main.js`).

**Intermediate:**
4. Export a class and import it.
5. Add a default export and import it.

**Challenge:**
6. Split a small test flow into three modules (config, page, test) and wire them with imports.

#### Interview Questions

**Beginner:**
1. What is a module?
2. What does export do?
3. What does import do?
4. What are named exports?
5. What is a default export?

**Intermediate:**
6. Why separate code into modules?
7. What is the difference between ESM and CommonJS?
8. Why do page objects live in their own module?

**Scenario-Based:**
9. Show how you would split helpers, config, and tests into modules.
10. An import fails with "cannot find module". What do you check?

#### Quick Recap

- `export` shares; `import` brings in.
- Named `{ }`, default without braces.
- Modules = maintainable, reusable test code.

---

### Topic 16.7 – Modern Feature Quick Tour

#### Definition

Other modern conveniences you will encounter: `Object.keys/values/entries`, optional chaining + nullish (Module 4), arrow functions (Module 7), and `Array.from`.

#### Why Do We Need It?

These fill in the gaps when reading framework code and writing helpers.

#### Simple JavaScript Example

```javascript
const config = { browser: "chrome", headless: true };

console.log(Object.keys(config));    // ["browser", "headless"]
console.log(Object.values(config));  // ["chrome", true]
console.log(Object.entries(config)); // [["browser","chrome"],["headless",true]]

// Convert array-like to array
const chars = Array.from("abc");
console.log(chars);   // ["a", "b", "c"]
```

#### Code Breakdown

| Feature | Returns |
|---------|---------|
| `Object.keys(obj)` | Array of keys |
| `Object.values(obj)` | Array of values |
| `Object.entries(obj)` | Array of [key, value] pairs |
| `Array.from(x)` | Array from iterable |

#### Automation Testing Example

```javascript
const env = { qa: "https://qa.app.com", prod: "https://app.com" };

for (const [name, url] of Object.entries(env)) {
  console.log(`${name} → ${url}`);
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using for...in when entries is cleaner | Habit | `Object.entries` + destructuring is tidy |
| Forgetting keys are strings | Object keys | All object keys are strings |

#### Memory Tip

> **"keys, values, entries — the three ways to see inside an object."**

#### Practice Exercises

**Beginner:**
1. Print keys, values, and entries of a config object.
2. Use Array.from on a string.
3. Loop entries with destructuring.

**Intermediate:**
4. Use entries + for...of to print a config dump.
5. Convert Object.values to a string with join.

**Challenge:**
6. Write a program that prints a full config report using keys, values, and entries.

#### Interview Questions

**Beginner:**
1. What do Object.keys return?
2. What do Object.values return?
3. What do Object.entries return?
4. What does Array.from do?
5. Are keys strings?

**Intermediate:**
6. Why use entries in loops?
7. How do you dump a config object?
8. When would you use Array.from?

**Scenario-Based:**
9. Print every environment URL with its name.
10. Convert an object's values into a CSV line.

#### Quick Recap

- `Object.keys/values/entries` inspect objects.
- `Array.from` converts iterables.
- Pairs with for...of + destructuring.

---

## Module 16 – Module Summary

You learned the modern JavaScript toolkit: let/const, template literals, destructuring, spread/rest, default parameters, classes, inheritance, and modules.

## Key Takeaways

- Modern baseline: `const`/`let`, backticks.
- Destructuring + spread/rest make data handling clean.
- Defaults simplify optional parameters.
- Classes + inheritance = Page Object Model foundation.
- `import`/`export` keep test code modular.

## Cheat Sheet

| Feature | Syntax |
|---------|--------|
| Template literal | `` `Hi ${name}` `` |
| Array destructure | `const [a, b] = arr` |
| Object destructure | `const {x, y} = obj` |
| Spread | `[...a, ...b]` |
| Rest | `function f(...args)` |
| Default param | `function f(x = 5)` |
| Class | `class X { constructor() {} }` |
| Extend | `class Y extends X` |
| Export | `export const x` |
| Import | `import { x } from "./f.js"` |

## Frequently Asked Questions (FAQs)

**Q1: What is the difference between ESM and CommonJS?**
ESM (`import`/`export`) is modern; CommonJS (`require`) is the older Node style. Check the project's `package.json` `"type"` field.

**Q2: Why do I see `export default`?**
It exports one main thing per file; import it without braces.

**Q3: Are classes the same as Java classes?**
Conceptually similar, but JavaScript classes are syntactic sugar over prototypes.

**Q4: Do I need classes for automation?**
Not strictly, but Page Object Model usually uses them for clean structure.

**Q5: What is `super`?**
The call to the parent class's constructor.

**Q6: Can I mix spread and rest?**
Yes — they are the same syntax with different roles by position.

## Real Automation Examples

```javascript
// Config + page object + test (modular)
import { LoginPage } from "./pages/login.js";
import { config } from "./config.js";

const { baseUrl, timeout } = config;

test("login", async ({ page }) => {
  const loginPage = new LoginPage(page, baseUrl);
  await loginPage.open();
  await loginPage.login("tester01", "Passw0rd!");
});
```

## Mini Project

**Modular Test Kit**

Create three files:

1. `config.js` — exports a config object (baseUrl, timeout, browser).
2. `pages/login.js` — exports a `LoginPage` class (open + login methods) using defaults.
3. `tests/run.js` — imports both, destructures config, instantiates the page, and prints the flow.

Run `node tests/run.js` and confirm output.

## Quiz (10 Questions)

**Q1.** Which destructures an array?
- A) `const {a} = arr`
- B) `const [a] = arr`
- C) `const (a) = arr`
- D) `const a = arr[0]` only

**Q2.** Which combines arrays?
- A) `[a] + [b]`
- B) `[...a, ...b]`
- C) `a.concat2(b)`
- D) `merge(a, b)`

**Q3.** Rest parameters must be:
- A) first
- B) last
- C) in the middle
- D) alone

**Q4.** `function f(x = 5) {}` — `f(undefined)` gives x:
- A) undefined
- B) 5
- C) null
- D) 0

**Q5.** Which creates an instance?
- A) `User()`
- B) `new User()`
- C) `class User()`
- D) `instance User()`

**Q6.** What does `super()` do?
- A) deletes the parent
- B) calls the parent constructor
- C) copies the class
- D) creates a module

**Q7.** Which shares a value with other files?
- A) `import`
- B) `export`
- C) `require` only
- D) `module` only

**Q8.** Named imports use:
- A) no brackets
- B) `{ }`
- C) `[ ]`
- D) quotes

**Q9.** `Object.keys({a: 1, b: 2})` gives:
- A) [1, 2]
- B) ["a", "b"]
- C) [["a",1],["b",2]]
- D) ["a","b",1,2]

**Q10.** Template literals use:
- A) quotes
- B) backticks
- C) brackets
- D) parentheses

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | Arrays destructure with `[ ]` |
| 2 | B | Spread combines |
| 3 | B | Rest must be last |
| 4 | B | Defaults apply to undefined |
| 5 | B | `new` creates instances |
| 6 | B | super calls the parent constructor |
| 7 | B | export shares values |
| 8 | B | Named imports use `{ }` |
| 9 | B | keys returns property names |
| 10 | B | Backticks make template literals |

---

> **Module 16 complete! Your JS is now modern and modular. Module 17 covers files: JSON and CSV — how test data is stored and loaded.**

---

# Module 17 – File Handling

Real test data lives in files: JSON configs, CSV datasets, log outputs. This module teaches reading and writing files with Node.js.

### Topic 17.1 – What is JSON?

#### Definition

**JSON** (JavaScript Object Notation) is a text format for data that looks exactly like JavaScript objects and arrays. It is the standard for API responses and test data.

#### Why Do We Need It?

- Config files (`playwright.config.json`-style data).
- Test data files (users, orders).
- API request/response bodies.

#### Real-Life Analogy

JSON is like **a standardized form**: everyone fills it in the same way, so any system can read anyone's form. It is the universal "data form" of the web.

#### Simple JSON Example

```json
{
  "username": "tester01",
  "password": "Passw0rd!",
  "role": "admin",
  "tags": ["smoke", "regression"]
}
```

#### Code Breakdown

| JSON rule | Example |
|-----------|---------|
| Keys in double quotes | `"username"` |
| Values: strings, numbers, booleans, arrays, objects, null | — |
| No comments, no functions | data only |
| Valid with `JSON.parse` | — |

#### Automation Testing Example

```javascript
// Parsing JSON text into an object
const jsonText = '{"username": "tester01", "role": "admin"}';
const user = JSON.parse(jsonText);
console.log(user.username);   // tester01
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Single quotes for keys | JS habit | JSON requires double quotes |
| Trailing commas | JS habit | JSON forbids them |
| Comments in JSON | Habit | Use a `.jsonc` file or remove comments |

#### Memory Tip

> **"JSON = data with double quotes, no comments, no functions."**

#### Practice Exercises

**Beginner:**
1. Write a JSON object for a user by hand.
2. Parse it with JSON.parse and print a field.
3. Stringify it with JSON.stringify and print.

**Intermediate:**
4. Create a JSON test-data file and read it (Topic 17.2).
5. Explain the difference between JSON and a JS object.

**Challenge:**
6. Write a mini JSON validator: try parsing valid and invalid JSON, catching errors.

#### Interview Questions

**Beginner:**
1. What does JSON stand for?
2. What quotes do keys use?
3. Can JSON have functions?
4. What is JSON.parse?
5. What is JSON.stringify?

**Intermediate:**
6. Why is JSON used for test data?
7. What happens parsing invalid JSON?
8. How is JSON related to API testing?

**Scenario-Based:**
9. Show a JSON file with three test users.
10. A JSON.parse throws — what do you check?

#### Quick Recap

- JSON = data format like JS objects.
- Double-quoted keys, no comments/functions.
- `JSON.parse` / `JSON.stringify` convert.

---

### Topic 17.2 – Reading JSON Files

#### Definition

Node.js reads files with the **`fs`** (file system) module. JSON files are read, then parsed.

#### Why Do We Need It?

- Load test data: `users.json` → array of users.
- Load configs at test start.
- Keep data separate from code (data-driven testing).

#### Real-Life Analogy

Reading a JSON file is like **opening a folder and reading the forms inside**: the folder is the file system; the forms are the JSON records.

#### Simple JavaScript Example

**`users.json`**
```json
[
  { "username": "tester01", "password": "Passw0rd!", "role": "admin" },
  { "username": "tester02", "password": "Test@123", "role": "user" }
]
```

**`read.js`**
```javascript
const fs = require("fs");

const data = fs.readFileSync("users.json", "utf8");
const users = JSON.parse(data);
console.log(users[0].username);   // tester01
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `require("fs")` | Get the file system module |
| `readFileSync("users.json", "utf8")` | Read the file as text |
| `JSON.parse(data)` | Convert text → JS array |
| `users[0].username` | Access the data |

**Async version (preferred):**

```javascript
const fs = require("fs/promises");

async function loadUsers() {
  const data = await fs.readFile("users.json", "utf8");
  return JSON.parse(data);
}
```

#### Automation Testing Example

```javascript
const users = JSON.parse(fs.readFileSync("test-data/users.json", "utf8"));

for (const user of users) {
  console.log(`Testing login for ${user.username} (${user.role})`);
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Wrong file path | File not found | Use relative paths from the project root |
| Forgetting "utf8" | Garbage output | Always pass `"utf8"` |
| Not parsing | Using raw text | `JSON.parse` the read text |

#### Memory Tip

> **"fs reads text → JSON.parse makes it data. Always 'utf8'."**

#### Practice Exercises

**Beginner:**
1. Create `users.json` and read it with readFileSync.
2. Print every username.
3. Read with the async fs/promises version.

**Intermediate:**
4. Load a config.json and print its values.
5. Handle a missing file with try/catch.

**Challenge:**
6. Write a program that loads `users.json`, filters admin users, and prints them.

#### Interview Questions

**Beginner:**
1. What module reads files?
2. What does readFileSync return?
3. Why pass "utf8"?
4. Why JSON.parse after reading?
5. What is fs/promises?

**Intermediate:**
6. Sync vs async file reading?
7. How does file-based test data enable data-driven tests?
8. What errors can reading a file throw?

**Scenario-Based:**
9. Load test users from a JSON file in a data-driven test.
10. A test cannot find "test-data/users.json". What do you check?

#### Quick Recap

- `fs` reads files; pass "utf8".
- `JSON.parse` converts to objects.
- JSON files = data-driven testing foundation.

---

### Topic 17.3 – Writing JSON Files

#### Definition

Node writes files with `fs.writeFileSync` (or async `fs.writeFile`). Objects become JSON text with `JSON.stringify`.

#### Why Do We Need It?

- Save test results to files.
- Generate reports (`results.json`).
- Create test data dynamically.

#### Real-Life Analogy

Writing a file is like **filing a completed form**: you take your results (object), fill the form (stringify), and put it in the folder (write).

#### Simple JavaScript Example

```javascript
const fs = require("fs");

const results = [
  { name: "Login", status: "PASS", time: 3.2 },
  { name: "Logout", status: "FAIL", time: 5.1 },
];

const jsonText = JSON.stringify(results, null, 2);
fs.writeFileSync("results.json", jsonText);
console.log("Saved results.json");
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `JSON.stringify(results, null, 2)` | Convert to pretty JSON (2-space indent) |
| `writeFileSync("results.json", jsonText)` | Write the text to a file |
| The file | Now exists with the JSON |

#### Automation Testing Example

```javascript
function saveReport(results, filePath) {
  const json = JSON.stringify(results, null, 2);
  fs.writeFileSync(filePath, json);
  console.log(`Report saved to ${filePath}`);
}

saveReport(results, "reports/summary.json");
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting stringify | "object Object" in file | Always stringify |
| No indent argument | One long line | `JSON.stringify(data, null, 2)` |
| Writing to a missing folder | ENOENT error | Create the folder first |

#### Memory Tip

> **"stringify then write — that is how objects become files."**

#### Practice Exercises

**Beginner:**
1. Write a small object to `test.json` and open it.
2. Add `null, 2` for pretty printing.
3. Write an array of results.

**Intermediate:**
4. Write a report with timestamps.
5. Wrap writing in try/catch and log errors.

**Challenge:**
6. Write a program that reads `users.json`, adds a new user, and writes it back (read-modify-write).

#### Interview Questions

**Beginner:**
1. What writes a file in Node?
2. Why stringify before writing?
3. What is the third argument of stringify?
4. What error occurs with a missing folder?
5. What is writeFileSync?

**Intermediate:**
6. Why pretty-print JSON?
7. How would you append results to an existing file?
8. Why separate test data from code?

**Scenario-Based:**
9. Save test results to `results.json` at the end of a run.
10. A write fails with ENOENT. Diagnose it.

#### Quick Recap

- `JSON.stringify(data, null, 2)` → pretty text.
- `fs.writeFileSync(path, text)` → file.
- Results/reports/test data live in JSON.

---

### Topic 17.4 – CSV Basics

#### Definition

**CSV** (Comma-Separated Values) is a simple text format: one record per line, values separated by commas. It is common for test data spreadsheets.

#### Why Do We Need It?

- Import test data from Excel/Google Sheets (export as CSV).
- Lightweight data tables for data-driven tests.

#### Real-Life Analogy

CSV is like **a spreadsheet printed as text**: each row is a line; commas separate the columns.

#### Simple CSV Example

```csv
username,password,role
tester01,Passw0rd!,admin
tester02,Test@123,user
```

#### Parsing CSV in JavaScript

```javascript
const csvText = `username,password,role
tester01,Passw0rd!,admin
tester02,Test@123,user`;

const lines = csvText.trim().split("\n");
const headers = lines[0].split(",");

const rows = lines.slice(1).map((line) => {
  const values = line.split(",");
  return {
    [headers[0]]: values[0],
    [headers[1]]: values[1],
    [headers[2]]: values[2],
  };
});

console.log(rows[0].username);   // tester01
```

#### Code Breakdown

| Step | What it does |
|------|--------------|
| `split("\n")` | Split rows |
| `lines[0]` | Header row |
| `split(",")` | Split columns |
| `.slice(1)` | Skip headers |
| `.map(...)` | Build objects per row |

#### Automation Testing Example

```javascript
const rows = parseCsv("test-data/users.csv");   // pretend helper
for (const row of rows) {
  console.log(`Login as ${row.username}`);
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Values containing commas | CSV edge case | Use quotes or a CSV library for real files |
| Blank lines | split produces empty rows | Filter empty lines |
| Header mismatch | Wrong column order | Keep headers consistent |

#### Memory Tip

> **"CSV = text spreadsheet. Split by newline for rows, comma for columns."**

#### Practice Exercises

**Beginner:**
1. Write a 3-row CSV by hand.
2. Split it into lines and columns.
3. Print each username.

**Intermediate:**
4. Parse CSV into objects with headers.
5. Read a real CSV file with fs and parse it.

**Challenge:**
6. Write a small CSV parser function that returns an array of objects, and test it with two data files.

#### Interview Questions

**Beginner:**
1. What is CSV?
2. How are rows separated?
3. How are columns separated?
4. What is the header row?
5. Why is CSV used for test data?

**Intermediate:**
6. What are CSV parsing edge cases?
7. When would you choose CSV over JSON?
8. How do you convert CSV to objects?

**Scenario-Based:**
9. Load test data from a CSV exported from Excel.
10. A CSV parse produces an extra empty row. Fix it.

#### Quick Recap

- CSV = lines of comma-separated values.
- Split by newline, then comma.
- Perfect for spreadsheet-driven test data.

---

## Module 17 – Module Summary

You learned file handling: JSON format, reading/writing JSON files with fs, and CSV basics.

## Key Takeaways

- JSON = double-quoted data format; `JSON.parse`/`stringify`.
- `fs` reads (`readFileSync`) and writes (`writeFileSync`); always pass "utf8".
- Pretty-print with `JSON.stringify(data, null, 2)`.
- CSV = split by newline/commas; great for spreadsheet data.
- Files make tests truly data-driven.

## Cheat Sheet

| Task | Code |
|------|------|
| Parse JSON | `JSON.parse(text)` |
| Stringify | `JSON.stringify(obj, null, 2)` |
| Read file | `fs.readFileSync(path, "utf8")` |
| Write file | `fs.writeFileSync(path, text)` |
| Async read | `fs.promises.readFile(path, "utf8")` |
| Split rows | `text.split("\n")` |
| Split columns | `row.split(",")` |

## Frequently Asked Questions (FAQs)

**Q1: JSON or CSV for test data?**
JSON for nested/complex data; CSV for tabular data from spreadsheets.

**Q2: Why "utf8"?**
It tells Node the text encoding — without it you get buffers/garbage.

**Q3: What is ENOENT?**
Error No ENTry — the file/folder does not exist.

**Q4: Can JSON have comments?**
No. Use `.jsonc` or separate config format for comments.

**Q5: Why keep test data in files?**
Separation of data and code = data-driven testing and easier maintenance.

**Q6: What is `__dirname`?**
The current file's folder — useful for reliable relative paths.

## Real Automation Examples

```javascript
const fs = require("fs");

// Load test data
const users = JSON.parse(fs.readFileSync("test-data/users.json", "utf8"));

// Save results
fs.writeFileSync("reports/results.json", JSON.stringify(results, null, 2));

// Data-driven loop
for (const user of users) {
  console.log(`Running login for ${user.username}`);
}
```

## Mini Project

**Data-Driven Login Runner**

Write a program that:

1. Creates `test-data/users.json` with three users (username, password, role).
2. Reads it with fs (handle errors with try/catch).
3. Loops through users, printing "Testing login for X (role)".
4. Collects results (PASS/FAIL) into an array.
5. Writes `reports/results.json` with the results and a timestamp.

## Quiz (10 Questions)

**Q1.** JSON keys must use:
- A) single quotes
- B) double quotes
- C) no quotes
- D) backticks

**Q2.** What converts JSON text to an object?
- A) `JSON.toObject`
- B) `JSON.parse`
- C) `JSON.stringify`
- D) `JSON.read`

**Q3.** What converts an object to JSON text?
- A) `JSON.parse`
- B) `JSON.stringify`
- C) `JSON.write`
- D) `JSON.format`

**Q4.** Which Node module reads files?
- A) `http`
- B) `fs`
- C) `path`
- D) `util`

**Q5.** `fs.readFileSync(path, "utf8")` returns:
- A) an object
- B) a string
- C) a buffer only
- D) a promise

**Q6.** Which writes a file?
- A) `fs.writeFileSync`
- B) `fs.readFileSync`
- C) `fs.openSync`
- D) `JSON.save`

**Q7.** Can JSON contain functions?
- A) Yes
- B) No
- C) Only in Node
- D) Only strings

**Q8.** In CSV, rows are separated by:
- A) commas
- B) newlines
- C) semicolons
- D) tabs

**Q9.** In CSV, columns are separated by:
- A) newlines
- B) commas
- C) spaces
- D) pipes

**Q10.** Pretty-printing uses:
- A) `JSON.stringify(d, null, 2)`
- B) `JSON.stringify(d)`
- C) `JSON.pretty(d)`
- D) `JSON.format(d, 2)`

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | JSON requires double quotes |
| 2 | B | JSON.parse converts text → data |
| 3 | B | JSON.stringify converts data → text |
| 4 | B | fs = file system |
| 5 | B | Returns the file content as a string |
| 6 | A | writeFileSync writes |
| 7 | B | JSON is data only |
| 8 | B | Rows = lines (newlines) |
| 9 | B | Columns = commas |
| 10 | A | null, 2 = pretty indent |

---

> **Module 17 complete! Data is now portable. Module 18 covers regular expressions — pattern matching for validation and text extraction.**

---

# Module 18 – Regular Expressions (Regex)

A **regular expression** (regex) is a pattern that matches text. One pattern can validate emails, extract prices, or find all numbers in a log. Regex is a superpower for testers — and far easier than it looks.

### Topic 18.1 – Regex Basics

#### Definition

A regex is written between slashes: `/pattern/`. It describes text to find, like "any number" (`\d+`) or "the word error" (`error`).

#### Why Do We Need It?

- Validate formats (email, phone, date).
- Extract parts of text (IDs, prices, codes).
- Find patterns in logs and page text.

#### Real-Life Analogy

A regex is like **a search filter**: instead of searching one exact word, you search "any word starting with E" or "any 5-digit number." The pattern is your filter.

#### Simple JavaScript Example

```javascript
const text = "Order #1042 is ready";

console.log(/Order/.test(text));   // true — contains "Order"
console.log(/#\d+/.test(text));    // true — a # followed by digits
console.log(text.match(/\d+/));    // ["1042"]
```

#### Code Breakdown

| Pattern | Meaning |
|---------|---------|
| `Order` | The literal text "Order" |
| `\d` | Any digit (0-9) |
| `+` | One or more of the previous |
| `#\d+` | A `#` then digits |
| `.test(text)` | Does it match? → boolean |
| `.match(regex)` | The matched text(s) → array |

#### Automation Testing Example

```javascript
const errorLog = "ERROR: timeout (attempt 2)";
if (/ERROR/.test(errorLog)) {
  console.log("Log contains an error");
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting slashes | Using quotes | Regex lives in `/ /`, not `" "` |
| Confusing `test` and `match` | Similar names | `test` → boolean; `match` → array |
| Escaping nothing | Backslash confusion | `\d` is a class; `\.` is a literal dot |

#### Memory Tip

> **"Slash the pattern, test for true/false, match for the text."**

#### Practice Exercises

**Beginner:**
1. Test if a string contains "test".
2. Test if it contains a digit.
3. Match the first number in a string.

**Intermediate:**
4. Write a pattern for "#" followed by digits.
5. Test patterns on three different strings and print booleans.

**Challenge:**
6. Write a program that tests five strings against one pattern and prints which matched.

#### Interview Questions

**Beginner:**
1. What is a regex?
2. How are regexes written?
3. What does `\d` mean?
4. What does `+` mean?
5. What does .test return?

**Intermediate:**
6. What does match return?
7. Why are patterns better than exact text?
8. Where do testers use regex?

**Scenario-Based:**
9. Check if a log line contains a number.
10. Match the ID in "user_123".

#### Quick Recap

- Regex = `/pattern/`.
- `\d` digit, `+` one-or-more.
- `.test` boolean, `.match` text.

---

### Topic 18.2 – Common Regex Patterns

#### Definition

The core building blocks: character classes, quantifiers, anchors, and groups.

#### Why Do We Need It?

You combine these blocks to build almost any pattern: emails, phone numbers, dates, order IDs.

#### Real-Life Analogy

These are like **Lego pieces**: a small set of blocks combines into infinite structures.

#### Simple JavaScript Example

```javascript
const patterns = {
  digits: /\d+/,
  word: /\w+/,
  space: /\s/,
  start: /^Hello/,
  end: /world$/,
  anyChar: /h.llo/,
  optional: /colou?r/,        // colour or color
  group: /(ab)+/,             // ab, abab, ...
};

console.log(patterns.digits.test("abc123"));   // true
console.log(patterns.start.test("Hello there")); // true
console.log(patterns.end.test("hello world"));   // true
console.log(patterns.optional.test("color"));    // true
```

#### Code Breakdown

| Pattern | Meaning |
|---------|---------|
| `\d` | digit |
| `\w` | word character (letter/digit/_) |
| `\s` | whitespace |
| `^` | start of string |
| `$` | end of string |
| `.` | any character |
| `?` | optional (0 or 1) |
| `*` | 0 or more |
| `+` | 1 or more |
| `{n}` | exactly n |
| `[abc]` | one of a/b/c |
| `(ab)` | group |

#### Automation Testing Example

```javascript
const emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/;
console.log(emailPattern.test("ravi@example.com"));   // true
console.log(emailPattern.test("not-an-email"));       // false

const phonePattern = /^\+?[0-9]{10,15}$/;
console.log(phonePattern.test("+919876543210"));      // true
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting `^` and `$` for full match | Partial matches pass | Anchor when validating whole strings |
| Dot matching anything incl. no char | `.` means one any-char | Use `\.` for a literal dot |
| Over-escaping | Backslash panic | Only escape special chars |

#### Memory Tip

> **"Digits `\d`, words `\w`, space `\s`. `^` start, `$` end, `+` many, `?` maybe."**

#### Practice Exercises

**Beginner:**
1. Test `/\d+/` on "abc123".
2. Test `/^A/` and `/A$/` on "Apple".
3. Test `/colou?r/` on "color" and "colour".

**Intermediate:**
4. Write a pattern matching a 5-digit ZIP code.
5. Write an email pattern and test three emails.

**Challenge:**
6. Build a pattern for dates like "2026-08-07" and test valid/invalid inputs.

#### Interview Questions

**Beginner:**
1. What does `\d` mean?
2. What do `^` and `$` do?
3. What does `+` mean?
4. What does `?` mean?
5. What is a character class `[ ]`?

**Intermediate:**
6. Why anchor full-string validation?
7. What is the difference between `*` and `+`?
8. How do you match a literal dot?

**Scenario-Based:**
9. Validate a phone number format.
10. Validate an email format in a test.

#### Quick Recap

- Building blocks: `\d \w \s ^ $ . ? * + {n} [ ] ( )`.
- Anchor `^...$` for full validation.
- Compose blocks into formats.

---

### Topic 18.3 – Using Regex for Validation

#### Definition

Validation = checking that text **fully matches** a format: email, phone, date, code. Anchor with `^` and `$`, then `test()`.

#### Why Do We Need It?

- Test form validation logic.
- Verify error messages for bad input.
- Confirm generated data has the right shape.

#### Real-Life Analogy

Validation is like **a customs officer checking passports**: the document must match the full format — stamps, numbers, dates — or it is rejected.

#### Simple JavaScript Example

```javascript
function isValidEmail(email) {
  return /^[\w.-]+@[\w.-]+\.\w+$/.test(email);
}

console.log(isValidEmail("ravi@example.com"));  // true
console.log(isValidEmail("ravi@example"));      // false
console.log(isValidEmail("@example.com"));      // false
```

#### Code Breakdown

| Step | What it does |
|------|--------------|
| `^...$` | Require the whole string to match |
| `[\w.-]+` | Username part |
| `@` | Literal @ |
| `[\w.-]+\.\w+` | Domain and extension |
| `.test(email)` | boolean result |

#### Automation Testing Example

```javascript
const validUsers = ["ravi@example.com", "priya@x.io"];
const invalidUsers = ["bad", "no@", "@x.com"];

for (const u of validUsers) {
  console.log(`${u}: ${isValidEmail(u) ? "VALID" : "INVALID"}`);
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| No anchors → partial pass | "x@x.com.fake.fake" passes | Always `^` + `$` for validation |
| Regex too strict | Real emails rejected | Test with realistic samples |
| Not testing edge cases | Missed bugs | Test empty, missing @, multiple dots |

#### Memory Tip

> **"Validate = anchor it (`^...$`), then `.test()` it."**

#### Practice Exercises

**Beginner:**
1. Write `isValidPhone` for 10 digits.
2. Write `isValidDate` for "YYYY-MM-DD".
3. Test with valid and invalid inputs.

**Intermediate:**
4. Write a validator for order codes like "ORD-1234".
5. Create a validation helper object with three format checks.

**Challenge:**
6. Write a program that validates five emails against one pattern and prints a VALID/INVALID table.

#### Interview Questions

**Beginner:**
1. Why anchor validation regexes?
2. What does .test return?
3. What is the email pattern's main parts?
4. What happens without `$`?
5. What are edge cases in validation?

**Intermediate:**
6. Why is regex validation common in tests?
7. How do you make a pattern reusable?
8. What is the risk of over-strict patterns?

**Scenario-Based:**
9. Validate a form's email input in a test.
10. A valid email "a.b@c.d.co" is rejected. What is likely wrong?

#### Quick Recap

- Validate with `^...$` + `.test()`.
- Test edge cases.
- Keep patterns realistic.

---

### Topic 18.4 – Searching and Replacing with Regex

#### Definition

- **Search**: `match()` with `/g` finds all matches; `search()` finds an index.
- **Replace**: `replace(/pattern/g, newText)` replaces all matches.

#### Why Do We Need It?

- Extract all numbers/prices from a page.
- Clean text: collapse spaces, remove tags.
- Normalize data before assertions.

#### Real-Life Analogy

Search-and-replace is like **a find-and-replace in a document**: find every match of the pattern and swap them.

#### Simple JavaScript Example

```javascript
const text = "Items: 3, in cart: 5, total: 8";

console.log(text.match(/\d+/g));   // ["3", "5", "8"]
console.log(text.search(/\d+/));   // 7 — index of first number

const messy = "A  B   C";
console.log(messy.replace(/\s+/g, " "));   // "A B C"

const slug = "Login Page";
console.log(slug.replace(/ /g, "-"));      // "Login-Page"
```

#### Code Breakdown

| Method | Pattern flag | Result |
|--------|--------------|--------|
| `match(/\d+/g)` | `g` = all | ["3", "5", "8"] |
| `search(/\d+/)` | — | first index |
| `replace(/\s+/g, " ")` | `g` | collapsed spaces |
| `replace(/ /g, "-")` | `g` | slug |

#### Automation Testing Example

```javascript
const pageText = "Total: $12.50 | Tax: $1.25";
const amounts = pageText.match(/\$[\d.]+/g);
console.log(amounts);   // ["$12.50", "$1.25"]

const sum = amounts
  .map(a => parseFloat(a.slice(1)))
  .reduce((t, n) => t + n, 0);
console.log(sum);   // 13.75
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting `/g` | Only first match | Add `g` for all |
| Using replace without g | Same issue | `/pattern/g` |
| Forgetting match returns null | Crash on `[0]` | Guard the result |

#### Memory Tip

> **"`g` = get them all. Match to collect, replace to swap."**

#### Practice Exercises

**Beginner:**
1. Match all digits in "Room 1, Floor 2, Door 3".
2. Replace spaces with "-".
3. Search for the index of the first digit.

**Intermediate:**
4. Extract all prices from "Total: $10, Tax: $2".
5. Collapse multiple spaces in a string.

**Challenge:**
6. Write a program that extracts all numbers from a log, sums them, and prints the total.

#### Interview Questions

**Beginner:**
1. What does the `g` flag do?
2. What does match return with g?
3. What does search return?
4. How do you replace all matches?
5. What does match return on no match?

**Intermediate:**
6. How do you extract prices with regex?
7. Why guard match results?
8. How does regex replace improve text cleanup?

**Scenario-Based:**
9. Extract every number from a receipt page.
10. Normalize a messy title into a slug.

#### Quick Recap

- `g` flag = all matches.
- `match` collects, `replace` swaps, `search` finds index.
- Guard against null.

---

### Topic 18.5 – Regex in Automation

#### Definition

Frameworks use regex for **pattern-based assertions**: "URL matches this pattern", "text matches this format".

#### Why Do We Need It?

- Assert URL patterns (`/dashboard/`).
- Assert text formats (dates, IDs).
- Filter logs and data with regex.

#### Real-Life Analogy

Regex assertions are like **a border agent with a format checklist**: "Is this a valid ID format?" — the pattern is the checklist.

#### Simple JavaScript Example (Playwright-style)

```javascript
// Playwright: URL assertion with regex
await expect(page).toHaveURL(/dashboard/);

// Text match
const text = await page.textContent("#order-id");
if (/^ORD-\d{4}$/.test(text)) {
  console.log("Order ID format is valid");
}
```

#### Code Breakdown

| Assertion | Pattern | Checks |
|-----------|---------|--------|
| `toHaveURL(/dashboard/)` | `/dashboard/` | URL contains dashboard |
| `/^ORD-\d{4}$/` | full format | exactly ORD-1234 |

#### Automation Testing Example

```javascript
const orderText = "ORD-1042";
const pattern = /^ORD-\d{4}$/;

if (pattern.test(orderText)) {
  console.log("Order format valid");
} else {
  console.log("Order format invalid");
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Pattern too loose | `/\d/` matches any digit | Anchor and quantify |
| Forgetting framework regex support | `toHaveURL` accepts regex | Pass `/pattern/` directly |
| Testing patterns only on happy path | Missed negatives | Always test invalid inputs too |

#### Memory Tip

> **"Frameworks love regex: URLs, formats, and text patterns are one `/pattern/` away."**

#### Practice Exercises

**Beginner:**
1. Write a regex assertion for a dashboard URL.
2. Validate an "ORD-1234" format.
3. Test three valid and three invalid codes.

**Intermediate:**
4. Assert a date format in text with regex.
5. Write a helper `isOrderCode(text)` and reuse it.

**Challenge:**
6. Write a mini "format validator" for three codes (order, email, phone) and test a data file.

#### Interview Questions

**Beginner:**
1. Where do frameworks use regex?
2. What does toHaveURL(/x/) do?
3. Why anchor formats?
4. What is a happy path?
5. Why test invalid inputs too?

**Intermediate:**
6. When is regex better than exact text?
7. What are the risks of loose patterns?
8. How do you validate dynamic IDs?

**Scenario-Based:**
9. Assert the URL contains "/checkout" after clicking buy.
10. A dynamic order ID changes each run. How do you assert its format?

#### Quick Recap

- Frameworks accept regex in assertions.
- Validate formats with anchored patterns.
- Test valid and invalid inputs.

---

## Module 18 – Module Summary

You learned regex: basics, building blocks, validation, search/replace, and framework usage.

## Key Takeaways

- Patterns live in `/ /`.
- `\d`, `\w`, `\s`, `^`, `$`, `+`, `?`, `[ ]`, `( )` are the blocks.
- Validate with `^...$` + `.test()`.
- `g` flag finds/replaces all.
- Frameworks accept regex in URL/text assertions.

## Cheat Sheet

| Pattern | Meaning |
|---------|---------|
| `\d` | digit |
| `\w` | word char |
| `\s` | whitespace |
| `.` | any char |
| `^` / `$` | start / end |
| `+` / `*` / `?` | 1+ / 0+ / 0-1 |
| `{n}` | exactly n |
| `[abc]` | one of |
| `(ab)` | group |
| `/g` | all matches |

## Frequently Asked Questions (FAQs)

**Q1: Do I need to master regex?**
The basics above cover 90% of test needs. Master these patterns first.

**Q2: What is the difference between `\d+` and `\d`?**
`\d` matches one digit; `\d+` matches one or more.

**Q3: Why is my email regex rejecting valid emails?**
Emails are complex. Use a pragmatic pattern and realistic samples.

**Q4: What is a greedy match?**
`.*` grabs as much as possible. Use `.*?` for lazy if needed.

**Q5: Can regex be tested online?**
Yes — sites like regex101 help visualize matches.

**Q6: What does `i` flag do?**
Case-insensitive matching: `/error/i` matches "ERROR".

## Real Automation Examples

```javascript
// URL pattern assertion
await expect(page).toHaveURL(/\/checkout/);

// Extract price
const price = (await page.textContent("#price")).match(/\$[\d.]+/)?.[0];

// Validate a code
if (!/^ORD-\d{4}$/.test(orderCode)) {
  throw new Error("Invalid order code: " + orderCode);
}

// Case-insensitive error check
if (/error/i.test(pageText)) console.log("Error found");
```

## Mini Project

**Receipt Parser**

Write a program that:

1. Takes a fake receipt text with prices and an order code.
2. Extracts all prices with a regex (`/\$[\d.]+/g`).
3. Sums them with reduce.
4. Validates the order code against `/^ORD-\d{4}$/`.
5. Prints the total and the validation result.

## Quiz (10 Questions)

**Q1.** How are regexes written?
- A) `"pattern"`
- B) `/pattern/`
- C) `<pattern>`
- D) `#pattern`

**Q2.** What does `\d` match?
- A) a letter
- B) a digit
- C) a space
- D) a dot

**Q3.** What does `+` mean?
- A) zero or one
- B) one or more
- C) zero or more
- D) exactly one

**Q4.** What do `^` and `$` do?
- A) quote and slash
- B) start and end anchors
- C) plus and minus
- D) group

**Q5.** `/\d+/.test("abc123")` is:
- A) false
- B) true
- C) error
- D) 123

**Q6.** `"a1b2".match(/\d/g)` gives:
- A) "12"
- B) ["1","2"]
- C) 1
- D) ["a","b"]

**Q7.** The `g` flag means:
- A) global — all matches
- B) greedy
- C) group
- D) guess

**Q8.** Which pattern matches "color" and "colour"?
- A) `colou?r`
- B) `colou+r`
- C) `colour*`
- D) `colou.r`

**Q9.** To validate a full string, anchor with:
- A) `^...$`
- B) `[...]`
- C) `(...)`
- D) `\d...\w`

**Q10.** Which matches any digit repeatedly?
- A) `\d`
- B) `\d+`
- C) `\d?`
- D) `d\d`

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | Regex uses slashes |
| 2 | B | \d = digit |
| 3 | B | + = one or more |
| 4 | B | Anchors for start/end |
| 5 | B | Contains digits |
| 6 | B | match with g returns array |
| 7 | A | g = global/all |
| 8 | A | ? makes "u" optional |
| 9 | A | ^...$ anchors the whole string |
| 10 | B | \d+ = one or more digits |

---

> **Module 18 complete! You can now match anything. Module 19 covers best practices — writing clean, maintainable tests like a professional.**

---

# Module 19 – JavaScript Best Practices

Knowledge is only half the journey. The other half is writing code that is clean, readable, and easy to maintain — the difference between a script that "works" and a professional test suite.

### Topic 19.1 – Coding Standards and Naming

#### Definition

**Coding standards** are agreed rules for how code looks: naming, spacing, structure. Consistent style makes any file readable by anyone.

#### Why Do We Need It?

- Teams read each other's code daily.
- Consistent names = fewer misunderstandings.
- Clean style = fewer bugs.

#### Real-Life Analogy

Standards are like **office dress code**: it does not make you a better worker, but it makes the whole office easier to navigate and professional.

#### Simple JavaScript Example

```javascript
// Consistent, readable
const defaultTimeout = 30;
let retryCount = 0;

function waitForElement(locator) {
  // ...
}
```

#### Code Breakdown

| Rule | Example |
|------|---------|
| camelCase for variables/functions | `defaultTimeout` |
| PascalCase for classes | `LoginPage` |
| UPPER_SNAKE for constants | `MAX_RETRIES` |
| Verbs for functions | `getTitle`, `clickLogin` |
| is/has for booleans | `isVisible` |

#### Automation Testing Example

```javascript
const MAX_RETRIES = 3;           // constant
let attempts = 0;                 // changing
const loginPage = new LoginPage(page);  // instance, camelCase

async function clickSubmit() { /* ... */ }
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Mixed styles | Copying from many sources | Pick one standard, stay consistent |
| `x`, `y`, `temp` names | Speed | Meaningful names always |
| Inconsistent quotes | Habit | Pick single or double, be consistent |

#### Memory Tip

> **"Names tell the story: camelCase vars, PascalCase classes, UPPER constants."**

#### Practice Exercises

**Beginner:**
1. List the four naming styles.
2. Fix five badly named variables.
3. Write a constant in UPPER_SNAKE.

**Intermediate:**
4. Review a past program and rewrite it with clean naming.
5. Write a mini "team standard" list for a test project.

**Challenge:**
6. Refactor a messy snippet: names, spacing, and const/let usage — then explain each change.

#### Interview Questions

**Beginner:**
1. What is camelCase?
2. What is PascalCase?
3. Why consistent naming?
4. What are UPPER_SNAKE constants?
5. Why verbs for functions?

**Intermediate:**
6. Why do standards matter in teams?
7. What is the cost of bad naming?
8. How do names act as documentation?

**Scenario-Based:**
9. A teammate's tests are full of `a`, `b`, `c`. What do you suggest?
10. Create a 5-rule naming standard for your team.

#### Quick Recap

- camelCase vars/functions, PascalCase classes, UPPER constants.
- Meaningful, consistent names.
- Standards = team readability.

---

### Topic 19.2 – Comments and Clean Code

#### Definition

**Comments** explain *why*, not *what*. **Clean code** is self-explanatory — names and structure carry the meaning.

#### Why Do We Need It?

- Future you (and teammates) must understand your intent.
- Comments that repeat the code add noise.
- Clean code reduces the need for comments.

#### Real-Life Analogy

A good comment is like **a sticky note explaining WHY you chose a detour** — not a note that says "you turned the steering wheel." That would be useless.

#### Simple JavaScript Example

```javascript
// GOOD: explains why
const waitTime = 30;   // this env is slow on CI — keep generous

// BAD: repeats what
let count = 0;         // sets count to 0
count++;               // increments count
```

#### Code Breakdown

| Type | Example | Value |
|------|---------|-------|
| Why comment | `// slow CI needs generous wait` | High |
| What comment | `// increment count` | Low (noise) |
| Section header | `// ---- Selectors ----` | Medium |

#### Automation Testing Example

```javascript
// Retry only network flakiness, not assertion failures
async function clickWithRetry(page, sel) {
  for (let i = 0; i < 3; i++) {
    try {
      await page.click(sel);
      return;
    } catch {
      await page.waitForTimeout(500);
    }
  }
  throw new Error(`Could not click ${sel}`);
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Commenting the obvious | Nervousness | Let names explain; comment the why |
| Stale comments | Forgetting to update | Keep comments with the code |
| No comments on tricky logic | Oversight | Explain non-obvious decisions |

#### Memory Tip

> **"Comment the why, not the what. If you must explain what, rename instead."**

#### Practice Exercises

**Beginner:**
1. Rewrite three "what" comments as "why" comments.
2. Comment a tricky line in one of your programs.
3. Delete useless comments from a sample.

**Intermediate:**
4. Add a section header to a multi-part program.
5. Refactor a code block so comments become unnecessary (better names).

**Challenge:**
6. Write a small program and comment only the non-obvious parts — justify each comment.

#### Interview Questions

**Beginner:**
1. What should comments explain?
2. What is a "what" comment?
3. What is clean code?
4. When are comments useful?
5. Why avoid obvious comments?

**Intermediate:**
6. How do names replace comments?
7. What is stale comment risk?
8. How do section headers help?

**Scenario-Based:**
9. Review a comment block in your suite and improve it.
10. A teammate comments every line. What advice do you give?

#### Quick Recap

- Comment why, not what.
- Clean names replace comments.
- Section headers organize.

---

### Topic 19.3 – Reusable Code

#### Definition

**Reusability** means writing logic once and using it many times: helpers, functions, page objects, config modules.

#### Why Do We Need It?

- A change in one helper fixes every test using it.
- Less code = fewer bugs = faster maintenance.
- Test cases become short and readable.

#### Real-Life Analogy

Reusability is like **a shared toolbox in the office**: instead of every person owning the same wrench, one quality wrench is shared by all.

#### Simple JavaScript Example

```javascript
// Reusable helper
function formatResult(name, status) {
  return `${name}: ${status}`;
}

// Used everywhere
console.log(formatResult("Login", "PASS"));
console.log(formatResult("Logout", "FAIL"));
```

#### Code Breakdown

| Principle | Example |
|-----------|---------|
| One function, one job | `formatResult` only formats |
| Parameterized | Pass values in |
| Named well | Reads like a sentence |
| Placed in shared modules | `helpers.js` |

#### Automation Testing Example

```javascript
// helpers.js
export function takeScreenshot(page, name) {
  return page.screenshot({ path: `shots/${name}.png` });
}

// any test
await takeScreenshot(page, "login-failure");
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Copy-pasting logic | Speed | Extract a helper |
| Over-generalizing | Future-proofing too early | Extract when you see 3+ repeats |
| Helpers doing too much | Multi-purpose | One job per function |

#### Memory Tip

> **"Three repetitions = time to extract. One job per function."**

#### Practice Exercises

**Beginner:**
1. Extract a repeated print into a function.
2. Move a helper to a module and import it.
3. Write a function used by three different "tests".

**Intermediate:**
4. Refactor a 5-step repeated block into a helper.
5. Create `helpers.js` with three utilities.

**Challenge:**
6. Take a past program, extract 3 reusable functions, and rewrite using them.

#### Interview Questions

**Beginner:**
1. What is reusable code?
2. Why reuse logic?
3. What is one-job-per-function?
4. Where do shared helpers live?
5. When should you extract a helper?

**Intermediate:**
6. What are the maintenance benefits?
7. What is premature abstraction?
8. How do page objects reuse code?

**Scenario-Based:**
9. A login helper change needs to fix 40 tests. How? (It is shared.)
10. A teammate has 3 copies of the same 6 lines. What do you suggest?

#### Quick Recap

- Extract repeated logic into helpers.
- One job per function.
- Shared modules = fix once, fix everywhere.

---

### Topic 19.4 – Debugging Techniques

#### Definition

**Debugging** is finding why code does not work. The toolkit: reading errors, `console.log`, breakpoints, and the browser's DevTools.

#### Why Do We Need It?

Test failures will happen. Debugging is the skill that turns "it fails" into "here is exactly why."

#### Real-Life Analogy

Debugging is like **a plumber finding a leak**: you check the obvious spots (the error message), trace the pipes (the code flow), and inspect each joint (log points) until the leak is found.

#### Simple JavaScript Example

```javascript
function calculateTotal(items) {
  console.log("Items received:", items);   // inspect input
  const total = items.reduce((s, n) => s + n, 0);
  console.log("Total:", total);            // inspect output
  return total;
}
```

#### Code Breakdown

| Technique | When |
|-----------|------|
| Read the error | Always first — it names file + line |
| `console.log` values | Trace flow step by step |
| Breakpoints (VS Code) | Pause and inspect live |
| DevTools console | Test browser code interactively |
| Comment out sections | Isolate the broken part |

#### Automation Testing Example

```javascript
try {
  await page.click("#submit");
} catch (error) {
  console.log("Click failed. Page URL:", page.url());   // context!
  console.log("Error:", error.message);
}
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Ignoring the error message | Panic | Read it — it has the answer |
| Logging without context | "3" printed, meaning unknown | Log labels: `"Count:", count` |
| Guessing fixes randomly | Frustration | Change one thing, re-run, observe |

#### Memory Tip

> **"Read the error, log with labels, change one thing at a time."**

#### Practice Exercises

**Beginner:**
1. Introduce a bug and debug it with console.log.
2. Add context labels to your logs.
3. Read a full error message and find the line number.

**Intermediate:**
4. Use a breakpoint in VS Code to pause a loop.
5. Debug a function that returns a wrong value.

**Challenge:**
6. Write a program with a hidden bug, then document your debugging process step by step.

#### Interview Questions

**Beginner:**
1. What is the first debugging step?
2. Why label console logs?
3. What is a breakpoint?
4. What does an error message contain?
5. Why change one thing at a time?

**Intermediate:**
6. How do you isolate a bug?
7. What is the DevTools console for?
8. How do you debug async code?

**Scenario-Based:**
9. A test fails only in CI. How do you debug it?
10. A function returns undefined. What do you log first?

#### Quick Recap

- Read the error first.
- Log with labels; change one thing at a time.
- Breakpoints and DevTools speed it up.

---

### Topic 19.5 – Console Methods and DevTools

#### Definition

`console` has more than `log`: `table`, `warn`, `error`, `info`, and grouping. Browser **DevTools** gives you live inspection.

#### Why Do We Need It?

- Better logs: tables for data, errors for failures.
- Faster investigation of page state.

#### Real-Life Analogy

Console methods are like **different report formats**: a table for structured data, a warning light for warnings, a red light for errors.

#### Simple JavaScript Example

```javascript
const users = [
  { name: "Ravi", status: "PASS" },
  { name: "Priya", status: "FAIL" },
];

console.table(users);          // a nice table
console.warn("Watch out!");    // yellow warning
console.error("It failed!");   // red error
console.log("Group:", "begin"); // plain log
```

#### Code Breakdown

| Method | Use |
|--------|-----|
| `console.log` | Normal output |
| `console.table(arr)` | Table of objects |
| `console.warn(msg)` | Warnings (yellow) |
| `console.error(msg)` | Errors (red) |
| `console.info(msg)` | Informational |

#### Automation Testing Example

```javascript
const results = resultsArray.map(r => ({ name: r.name, status: r.status }));
console.table(results);   // readable summary at the end of a run
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Using log for errors | No differentiation | Use `console.error` |
| Not opening DevTools | Missing the tool | F12 → Console |
| Leaving debug logs everywhere | Messy output | Remove or gate debug logs |

#### Memory Tip

> **"log = talk, warn = caution, error = red flag, table = spreadsheets."**

#### Practice Exercises

**Beginner:**
1. Print an array of objects with console.table.
2. Print a warning and an error.
3. Open DevTools on any page and run `console.log(1 + 1)`.

**Intermediate:**
4. Log a config object with table.
5. Use DevTools console to inspect a page element.

**Challenge:**
6. Write a program that prints a table, a warning, and an error — and note the visual differences.

#### Interview Questions

**Beginner:**
1. Name four console methods.
2. What is console.table for?
3. What is DevTools?
4. Why use console.error?
5. How do you open DevTools?

**Intermediate:**
6. Why differentiate log levels?
7. How does console.table help reports?
8. What can DevTools show beyond console?

**Scenario-Based:**
9. Print a test summary as a table.
10. A teammate uses log for everything. What do you suggest?

#### Quick Recap

- `table/warn/error/info` for better logs.
- DevTools = live page inspection.
- Differentiate log levels.

---

### Topic 19.6 – Test-Driven Mindset for Clean Tests

#### Definition

Clean test practices: small tests, clear names, arrange-act-assert structure, and independent tests.

#### Why Do We Need It?

- A failing test should instantly tell you *what* broke.
- Small tests are easy to debug and maintain.

#### Real-Life Analogy

Clean tests are like **a well-organized kitchen**: everything labeled, each tool (test) does one thing, and cleaning up (teardown) is part of the routine.

#### Simple Example (Structure)

```javascript
// Arrange — set up data
const user = { username: "tester01", password: "Passw0rd!" };

// Act — do the thing
const result = login(user);

// Assert — verify
if (result) console.log("PASS");
```

#### Code Breakdown

| Phase | Role |
|-------|------|
| Arrange | Prepare inputs/state |
| Act | Perform the action |
| Assert | Verify the outcome |

#### Automation Testing Example

```javascript
test("logs in with valid credentials", async ({ page }) => {
  // Arrange
  await page.goto("https://example.com/login");

  // Act
  await page.fill("#username", "tester01");
  await page.click("#login-btn");

  // Assert
  await expect(page).toHaveURL(/dashboard/);
});
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Giant tests | Doing too much | Split into focused tests |
| Vague names | `test1` | Name the behavior: `logs in with valid credentials` |
| Dependent tests | Order coupling | Each test should stand alone |

#### Memory Tip

> **"Arrange, Act, Assert — set up, do, verify. Name tests by behavior."**

#### Practice Exercises

**Beginner:**
1. Write a test with the three phases commented.
2. Rename three vague tests.
3. Split a long "test" into two.

**Intermediate:**
4. Write an independent test that needs no other test first.
5. Refactor a test to follow arrange-act-assert.

**Challenge:**
6. Write a small "test plan" for a login flow following these best practices.

#### Interview Questions

**Beginner:**
1. What are the three test phases?
2. Why small tests?
3. Why behavior-based names?
4. Why independent tests?
5. What is arrange-act-assert?

**Intermediate:**
6. How does structure help debugging?
7. What makes a test "clean"?
8. Why avoid test order dependency?

**Scenario-Based:**
9. Refactor a 30-line test into two clean ones.
10. A test named "test2" fails. What is the problem?

#### Quick Recap

- Arrange → Act → Assert.
- Small, focused, independent tests.
- Name by behavior.

---

## Module 19 – Module Summary

You learned professional practices: standards and naming, comments, reusable code, debugging, console methods, and clean test structure.

## Key Takeaways

- camelCase vars, PascalCase classes, UPPER constants.
- Comment why, not what.
- Extract repeats into helpers.
- Read errors, log with labels, change one thing at a time.
- Use console.table/warn/error.
- Arrange, Act, Assert with behavior names.

## Cheat Sheet

| Practice | Rule |
|----------|------|
| Variables | camelCase |
| Classes | PascalCase |
| Constants | UPPER_SNAKE |
| Booleans | is/has prefix |
| Comments | explain why |
| Reuse | one job per function |
| Debug | read error → log → isolate |
| Test | Arrange, Act, Assert |

## Frequently Asked Questions (FAQs)

**Q1: How much should I comment?**
Comment why and non-obvious logic. Let names explain the what.

**Q2: What is the biggest clean-code win?**
Meaningful names. They document the code for free.

**Q3: How do I know when to extract a helper?**
Rule of three: if you copy logic three times, extract it.

**Q4: What if a test is hard to debug?**
Add context logs (URL, state, inputs) at the failure point.

**Q5: Is console.log in tests acceptable?**
For debugging — yes. For permanent suites, prefer proper reporting.

**Q6: What is the most important habit?**
Run small changes often. Errors stay small when changes are small.

## Real Automation Examples

```javascript
// helpers.js — reusable and named well
export function waitAndClick(page, selector) {
  return page.locator(selector).click();
}

// test — arrange/act/assert with behavior name
test("logs in with valid credentials", async ({ page }) => {
  await page.goto(url);                          // arrange
  await page.fill("#username", "tester01");      // act
  await page.click("#login-btn");
  await expect(page).toHaveURL(/dashboard/);     // assert
});
```

## Mini Project

**Refactor Challenge**

Take any earlier program from this course and:

1. Rename all variables/functions to follow the standards.
2. Replace "what" comments with "why" comments.
3. Extract one repeated block into a helper.
4. Add console.table output for any array.
5. Structure the final output with the three test phases commented.

## Quiz (10 Questions)

**Q1.** Variables use:
- A) PascalCase
- B) camelCase
- C) UPPER_SNAKE
- D) kebab-case

**Q2.** Classes use:
- A) camelCase
- B) PascalCase
- C) snake_case
- D) lowercase

**Q3.** Constants often use:
- A) camelCase
- B) UPPER_SNAKE
- C) PascalCase
- D) mixedCase

**Q4.** Comments should explain:
- A) what
- B) why
- C) everything
- D) nothing

**Q5.** When do you extract a helper?
- A) once
- B) three repetitions
- C) never
- D) always

**Q6.** The first debugging step:
- A) rewrite everything
- B) read the error
- C) add sleeps
- D) restart

**Q7.** Which prints a table?
- A) console.log
- B) console.table
- C) console.warn
- D) console.error

**Q8.** The three test phases:
- A) do, redo, undo
- B) arrange, act, assert
- C) start, run, stop
- D) plan, write, delete

**Q9.** Good test names describe:
- A) the file
- B) the behavior
- C) the line number
- D) the author

**Q10.** Logging with labels means:
- A) `console.log(count)`
- B) `console.log("Count:", count)`
- C) `console.log("count")`
- D) no logs

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | Variables are camelCase |
| 2 | B | Classes are PascalCase |
| 3 | B | Constants are UPPER_SNAKE |
| 4 | B | Comments explain why |
| 5 | B | Rule of three |
| 6 | B | Read the error message first |
| 7 | B | console.table formats tables |
| 8 | B | Arrange, Act, Assert |
| 9 | B | Behavior-based names |
| 10 | B | Labels give logs context |

---

> **Module 19 complete! You write like a professional now. Module 20 — the final module — shows exactly how JavaScript powers real automation frameworks.**

---

# Module 20 – JavaScript for Automation Testing

This is the module you have been working toward. Everything you learned comes together here: how JavaScript drives Playwright, Selenium, Cypress, and WebdriverIO — and the professional concepts behind every test suite.

### Topic 20.1 – The Big Picture: How JS Powers Automation

#### Definition

Automation frameworks are JavaScript libraries that control browsers through the **browser's debugging protocol**. Your test code (JS) calls framework methods; the framework drives the real browser.

#### Why Do We Need It?

Understanding the layers explains why async/await is everywhere, why selectors work, and why all frameworks share the same concepts.

#### Real-Life Analogy

Think of the framework as **a remote-control car kit**: your code (the remote) sends signals (framework commands) to the car (browser). The kit translates your button presses into the car's wheels.

#### Simple ASCII Diagram

```
Your test (JS)
    │  await page.click("#x")
    ▼
Framework (Playwright/Cypress/Selenium/WDIO)
    │  browser automation protocol
    ▼
Real browser (Chromium/Firefox/WebKit)
    ▼
Your app
```

#### Code Breakdown

| Layer | Role |
|-------|------|
| Your test code | Describes the scenario |
| Framework | Translates to browser commands |
| Protocol | The "language" between them |
| Browser | Performs real clicks, typing, navigation |

#### Automation Testing Example

```javascript
// All frameworks do the same four things
await page.goto(url);        // navigate
await page.fill(sel, value); // interact
await page.click(sel);       // interact
await expect(page).toBeVisible(sel);  // assert
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Thinking tests run "in" the app | They control it from outside | The framework drives the browser |
| Expecting frameworks to differ hugely | Marketing | Core concepts are identical |
| Skipping JS fundamentals | Rushing to tools | Fundamentals = debugging power |

#### Memory Tip

> **"Test code → framework → protocol → browser. Four layers, one flow."**

#### Practice Exercises

**Beginner:**
1. Draw the four-layer diagram from memory.
2. List the four basic actions every framework does.
3. Explain "the framework drives the browser" in your own words.

**Intermediate:**
4. Write the same "login" flow in plain English for Playwright and Cypress.
5. Compare how two frameworks achieve navigation.

**Challenge:**
6. Write a one-page "how automation works" summary for a junior tester.

#### Interview Questions

**Beginner:**
1. What drives the browser in automation?
2. Name the four layers.
3. Do frameworks control real browsers?
4. Why async in frameworks?
5. What is the protocol?

**Intermediate:**
6. Why do all frameworks share concepts?
7. What is the benefit of protocol-level control?
8. Why do we still need JS fundamentals?

**Scenario-Based:**
9. Explain to a manager how a test "clicks" a button.
10. Why does a framework need the browser installed?

#### Quick Recap

- Test code → framework → protocol → browser.
- Real browsers, real events.
- Concepts are shared across frameworks.

---

### Topic 20.2 – Playwright

#### Definition

**Playwright** is a modern, Microsoft-maintained framework. It is **async-first** (`await` everywhere), auto-waits, and supports Chromium, Firefox, and WebKit.

#### Why Do We Need It?

Playwright is one of the most popular frameworks today — fast, reliable, with excellent tooling (trace viewer, codegen, screenshots).

#### Real-Life Analogy

Playwright is like **a modern delivery service**: reliable tracking (auto-wait), multiple vehicles (browsers), and a dashboard (trace viewer).

#### Simple JavaScript Example

```javascript
const { test, expect } = require("@playwright/test");

test("login flow", async ({ page }) => {
  await page.goto("https://example.com/login");
  await page.fill("#username", "tester01");
  await page.click("#login-btn");
  await expect(page).toHaveURL(/dashboard/);
});
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `test("name", async ({ page }) => {...})` | Defines a test; Playwright injects `page` |
| `page.goto(url)` | Navigate (auto-waits for load) |
| `page.fill(sel, value)` | Type into an input |
| `page.click(sel)` | Click (auto-waits for actionability) |
| `expect(page).toHaveURL(/regex/)` | Built-in assertion |

#### Automation Testing Example

```javascript
test("shows error for invalid login", async ({ page }) => {
  await page.goto("https://example.com/login");
  await page.fill("#username", "bad");
  await page.click("#login-btn");
  await expect(page.locator(".error-msg")).toBeVisible();
});
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting `await` | Race conditions | Every async call needs await |
| No `test` import | Reference error | Import from `@playwright/test` |
| Hardcoded waits | Fragility | Use auto-wait + expect |

#### Memory Tip

> **"Playwright = async + auto-wait + real browsers. Await everything."**

#### Practice Exercises

**Beginner:**
1. Install Playwright in a project.
2. Write a test that opens a page and checks the title.
3. Run it with `npx playwright test`.

**Intermediate:**
4. Write a login test with a visible error assertion.
5. Add a screenshot on failure.

**Challenge:**
6. Use `npx playwright codegen` to record a login flow, then read the generated code.

#### Interview Questions

**Beginner:**
1. What is Playwright?
2. Which browsers does it support?
3. Why is it async?
4. What is auto-wait?
5. How do you define a test?

**Intermediate:**
6. What does `page` represent?
7. What is the trace viewer?
8. How does Playwright compare to Cypress?

**Scenario-Based:**
9. Write a Playwright login test with a URL assertion.
10. A test fails on slow CI. What Playwright features help?

#### Quick Recap

- Async-first, auto-wait, multi-browser.
- `test`, `expect`, `page` API.
- `npx playwright test` runs suites.

---

### Topic 20.3 – Selenium with JavaScript

#### Definition

**Selenium WebDriver** is the classic automation standard. With JavaScript, you use the `selenium-webdriver` npm package. It is synchronous-looking in older style but modern usage supports promises/async.

#### Why Do We Need It?

Many enterprises still run Selenium. Knowing it means you can work with legacy suites and its huge ecosystem.

#### Real-Life Analogy

Selenium is like **the trusty old company car**: not the newest, but reliable, everywhere, and everyone knows how to use it.

#### Simple JavaScript Example

```javascript
const { Builder, By, until } = require("selenium-webdriver");

async function loginTest() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://example.com/login");
    await driver.findElement(By.id("username")).sendKeys("tester01");
    await driver.findElement(By.id("login-btn")).click();
    await driver.wait(until.urlContains("dashboard"), 10000);
    console.log("PASS");
  } finally {
    await driver.quit();
  }
}

loginTest();
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `Builder().forBrowser("chrome").build()` | Starts a Chrome session |
| `By.id("username")` | Locator strategy |
| `findElement(...).sendKeys(...)` | Type text |
| `.click()` | Click |
| `until.urlContains("dashboard")` | Explicit wait |
| `driver.quit()` | Close the session (always!) |

#### Automation Testing Example

```javascript
const errorVisible = await driver.findElement(By.css(".error-msg")).isDisplayed();
console.log(errorVisible ? "Error shown" : "No error");
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting `driver.quit()` | Leaked sessions | Use try/finally |
| No waits | Flaky tests | Use `until` conditions |
| Using old sync examples | Outdated docs | Modern Selenium supports await |

#### Memory Tip

> **"Selenium = Builder + By + until. Quit the driver, always."**

#### Practice Exercises

**Beginner:**
1. Install `selenium-webdriver` and start a Chrome session.
2. Navigate to a URL and print the title.
3. Close the driver in a finally.

**Intermediate:**
4. Write a login test with By.id locators.
5. Add an explicit wait with `until`.

**Challenge:**
6. Write a small Selenium script that checks an error message is displayed after a bad login.

#### Interview Questions

**Beginner:**
1. What is Selenium WebDriver?
2. What is a driver?
3. What is `By`?
4. Why quit the driver?
5. What is an explicit wait?

**Intermediate:**
6. Why does Selenium need waits?
7. How does Selenium compare to Playwright?
8. What is the W3C protocol?

**Scenario-Based:**
9. Write a Selenium login with try/finally quit.
10. A Selenium test is flaky. What do you add?

#### Quick Recap

- Classic standard: `Builder`, `By`, `until`.
- Explicit waits required.
- Always quit the driver.

---

### Topic 20.4 – Cypress

#### Definition

**Cypress** runs tests **inside the browser** with a chainable command API (`cy.get().click()`). It auto-queues commands and retries assertions.

#### Why Do We Need It?

Cypress is beloved for its developer experience: time travel debugging, automatic screenshots/videos, and a friendly chainable API.

#### Real-Life Analogy

Cypress is like **a guided tour bus**: everything is inside one vehicle (browser), the guide (command queue) tells you the order, and the tour replays (time travel) let you revisit stops.

#### Simple JavaScript Example

```javascript
describe("Login", () => {
  it("logs in successfully", () => {
    cy.visit("https://example.com/login");
    cy.get("#username").type("tester01");
    cy.get("#login-btn").click();
    cy.url().should("include", "/dashboard");
  });
});
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `describe("Login", () => {...})` | Groups tests |
| `it("...", () => {...})` | A test |
| `cy.visit(url)` | Navigate |
| `cy.get(sel)` | Find element |
| `.type(...)` / `.click()` | Actions (chained) |
| `cy.url().should("include", ...)` | Assertion (auto-retries) |

**Note:** Cypress commands are **queued**, not awaited — no `await` needed. That is why chains work.

#### Automation Testing Example

```javascript
it("shows an error for bad credentials", () => {
  cy.visit("https://example.com/login");
  cy.get("#username").type("bad");
  cy.get("#login-btn").click();
  cy.get(".error-msg").should("be.visible");
});
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Mixing await with Cypress | Queued model | Cypress chains, no await |
| Assigning `cy.get` to a variable | It is a command, not a value | Use `.then()` or aliases |
| Breaking chains | Style | Keep commands chained |

#### Memory Tip

> **"Cypress = chain + queue + retry. `cy.get().click().should()` — one flow."**

#### Practice Exercises

**Beginner:**
1. Scaffold a Cypress project (`npx cypress open`).
2. Write a test that visits a URL and checks a title.
3. Chain type + click + assert.

**Intermediate:**
4. Write a login test with an error-message assertion.
5. Use `.should("contain", "text")`.

**Challenge:**
6. Write a data-driven Cypress test looping over three users.

#### Interview Questions

**Beginner:**
1. What is Cypress?
2. Where do Cypress tests run?
3. What does cy.get do?
4. Why no await?
5. What is chaining?

**Intermediate:**
6. What is the command queue?
7. How does Cypress retry assertions?
8. How does Cypress differ from Playwright?

**Scenario-Based:**
9. Write a Cypress login with URL assertion.
10. A Cypress assertion fails on first render but passes later. Why? (Auto-retry!)

#### Quick Recap

- Runs in the browser; chainable `cy` commands.
- Queued commands, no await.
- `.should()` auto-retries.

---

### Topic 20.5 – WebdriverIO

#### Definition

**WebdriverIO** (WDIO) is a flexible framework built on WebDriver (like Selenium) with a modern test-runner experience. It supports both sync-style and async styles.

#### Why Do We Need It?

WDIO is popular in companies already using Selenium infrastructure, offering better tooling and a TestRunner built in.

#### Real-Life Analogy

WebdriverIO is like **a modern engine fitted into a classic car**: same trusted chassis (WebDriver), upgraded dashboard (test runner, reporters).

#### Simple JavaScript Example

```javascript
describe("Login", () => {
  it("logs in", async () => {
    await browser.url("https://example.com/login");
    await $("#username").setValue("tester01");
    await $("#login-btn").click();
    await expect(browser).toHaveUrl(/dashboard/);
  });
});
```

#### Code Breakdown

| Line | What it does |
|------|--------------|
| `browser.url(...)` | Navigate |
| `$("#username")` | Element by CSS selector |
| `.setValue(...)` | Type |
| `.click()` | Click |
| `expect(browser).toHaveUrl(...)` | Assertion |

#### Automation Testing Example

```javascript
it("shows an error", async () => {
  await browser.url("https://example.com/login");
  await $("#username").setValue("bad");
  await $("#login-btn").click();
  const error = await $(".error-msg");
  await expect(error).toBeDisplayed();
});
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Forgetting `await` | Race conditions | WDIO commands return promises |
| Using `browser` without setup | Framework confusion | WDIO injects `browser` |
| Mixing `$` and `$$` | Selecting one vs many | `$` = one, `$$` = many |

#### Memory Tip

> **"WDIO = WebDriver + modern runner. `$` one element, `$$` many."**

#### Practice Exercises

**Beginner:**
1. Set up a WDIO project.
2. Write a test that visits a URL.
3. Use `$` and `setValue`.

**Intermediate:**
4. Write a login test with toHaveUrl.
5. Assert an element is displayed.

**Challenge:**
6. Write a WDIO data-driven test over an array of users.

#### Interview Questions

**Beginner:**
1. What is WebdriverIO?
2. What does `$` do?
3. What does `$$` do?
4. How do you navigate?
5. What is `browser`?

**Intermediate:**
6. How is WDIO different from Selenium?
7. What does toHaveUrl do?
8. Why await in WDIO?

**Scenario-Based:**
9. Write a WDIO login test.
10. A teammate uses `$$` where `$` is needed. Explain the difference.

#### Quick Recap

- WDIO = WebDriver-based modern framework.
- `browser`, `$`, `expect` core API.
- Await commands.

---

### Topic 20.6 – Locators (Best Practices)

#### Definition

**Locators** are how you find elements. Best practice: use **user-facing and stable** locators — roles, labels, test ids — over fragile CSS paths.

#### Why Do We Need It?

- Stable tests that survive UI changes.
- Readable tests ("the Login button" beats "div#app > form > button").

#### Real-Life Analogy

Locators are like **directions to a person's house**: "the house with the red door on Maple Street" (stable feature) beats "third house after the blue mailbox" (fragile position).

#### Simple JavaScript Example

```javascript
// Playwright: prefer roles and test ids
await page.getByRole("button", { name: "Login" }).click();
await page.getByTestId("username-input").fill("tester01");

// vs fragile CSS
await page.click("#app > div > form > button.btn-primary");
```

#### Code Breakdown

| Locator | Stability | Example |
|---------|-----------|---------|
| `getByRole(name)` | High | button "Login" |
| `getByLabel(text)` | High | input "Email" |
| `getByTestId` | High (needs app support) | `data-testid` |
| `#id` | Medium | unique ids |
| `.class` | Medium | stable classes |
| Long CSS path | Low | avoid |

#### Automation Testing Example

```javascript
// Cypress data-cy convention
cy.get("[data-cy=login-btn]").click();

// Playwright role-based
await page.getByRole("button", { name: "Submit" }).click();
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Copying full CSS paths | DevTools convenience | Simplify to ids/test-ids |
| Index-based locators | `nth(2)` fragility | Use unique attributes |
| Text-only locators on dynamic text | Brittle | Combine role + name |

#### Memory Tip

> **"Role, label, test-id — then id, then class. Full CSS paths last."**

#### Practice Exercises

**Beginner:**
1. List the locator priority order.
2. Convert a CSS path to a getByRole call.
3. Add a data-testid to a sample element.

**Intermediate:**
4. Rewrite three fragile locators as stable ones.
5. Write a locator cheat sheet for your team.

**Challenge:**
6. Audit a fake test: rank its locators by stability and suggest improvements.

#### Interview Questions

**Beginner:**
1. What is a locator?
2. What makes a locator stable?
3. What is getByRole?
4. What is a test id?
5. Why avoid long CSS paths?

**Intermediate:**
6. What is the locator priority order?
7. How do you handle dynamic ids?
8. Why prefer user-facing locators?

**Scenario-Based:**
9. A button's class changes on every release. What locator do you use?
10. Two elements share the same role/name. How do you disambiguate?

#### Quick Recap

- Stable locators: role, label, test-id.
- Avoid index and long CSS paths.
- User-facing beats implementation-detail.

---

### Topic 20.7 – Assertions

#### Definition

**Assertions** verify that reality matches expectations. If an assertion fails, the test fails. Frameworks provide fluent assertion APIs.

#### Why Do We Need It?

- Turn "the page loaded" into a verifiable fact.
- Provide clear failure messages.

#### Real-Life Analogy

Assertions are like **a checklist at the end of a QC pass**: you tick each check; any unchecked box (failed assertion) fails the whole pass.

#### Simple JavaScript Example

```javascript
// Playwright
await expect(page).toHaveTitle("Login");
await expect(page.locator("#user")).toContainText("Ravi");

// Cypress
cy.title().should("eq", "Login");
cy.get("#user").should("contain", "Ravi");
```

#### Code Breakdown

| Assertion | Checks |
|-----------|--------|
| `toHaveTitle` | Page title |
| `toHaveURL` | Current URL |
| `toBeVisible` | Element visibility |
| `toContainText` | Text contains |
| `toHaveValue` | Input value |
| `toHaveCount` | Number of matches |

#### Automation Testing Example

```javascript
await expect(page.locator(".error-msg")).toBeVisible();
await expect(page.locator("#cart-count")).toHaveText("3");
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Asserting too little | False confidence | Assert the outcome, not just no-error |
| Asserting too much | Brittle tests | Assert what matters for the scenario |
| Wrong assertion type | API confusion | Learn the framework's assertion list |

#### Memory Tip

> **"Assert = prove it. Visible, text, URL, title — prove what matters."**

#### Practice Exercises

**Beginner:**
1. Write three Playwright assertions.
2. Write the same three in Cypress.
3. Make one fail on purpose and read the message.

**Intermediate:**
4. Assert an input has a specific value.
5. Assert an element has a specific count.

**Challenge:**
6. Write a "positive and negative" test pair: assert success for valid input and an error for invalid.

#### Interview Questions

**Beginner:**
1. What is an assertion?
2. What happens when one fails?
3. Name four assertion types.
4. Why assert visible elements?
5. What is the failure message?

**Intermediate:**
6. Why assert outcomes, not just no-error?
7. What is over-asserting?
8. How do assertions differ between frameworks?

**Scenario-Based:**
9. Write the assertions for a successful login.
10. A test passes but the UI is wrong. What assertion is missing?

#### Quick Recap

- Assertions prove outcomes.
- Match the framework's API.
- Assert what matters.

---

### Topic 20.8 – Page Object Model (POM)

#### Definition

**Page Object Model** is a pattern: each page (or component) becomes a **class** that wraps its locators and actions. Tests call page methods, not raw selectors.

#### Why Do We Need It?

- One place to fix a locator when the UI changes.
- Readable tests: `loginPage.login()` instead of five selector lines.
- Reuse across tests.

#### Real-Life Analogy

POM is like **a self-service kiosk**: customers (tests) press labeled buttons ("Login") instead of rewiring the machine. When the machine changes internally, the buttons stay the same.

#### Simple JavaScript Example

```javascript
// pages/login.js
export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto("https://example.com/login");
  }

  async login(username, password) {
    await this.page.fill("#username", username);
    await this.page.fill("#password", password);
    await this.page.click("#login-btn");
  }
}
```

#### Code Breakdown

| Part | What it does |
|------|--------------|
| `class LoginPage` | The page abstraction |
| `constructor(page)` | Receives the framework's page object |
| `open()` | Navigate |
| `login(user, pass)` | The action with locators hidden |

#### Automation Testing Example

```javascript
// tests/login.spec.js
import { LoginPage } from "../pages/login.js";

test("login works", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login("tester01", "Passw0rd!");
  await expect(page).toHaveURL(/dashboard/);
});
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Raw selectors in tests | Skipping the pattern | Move locators into page objects |
| One giant page class | Overgrowth | Split by page/component |
| Page objects with assertions | Mixing roles | Page = actions; tests = assertions |

#### Memory Tip

> **"Page object = the kiosk. Tests press buttons; locators live inside the kiosk."**

#### Practice Exercises

**Beginner:**
1. Create a LoginPage class with open and login.
2. Use it from a test file.
3. Move three raw selectors into the page object.

**Intermediate:**
4. Add a `getErrorMessage()` method to the page.
5. Create a DashboardPage and navigate from login to it.

**Challenge:**
6. Build a small POM project: LoginPage + DashboardPage + two tests using only page methods.

#### Interview Questions

**Beginner:**
1. What is POM?
2. Why hide locators in page objects?
3. What goes in a page class?
4. What stays in tests?
5. What is the maintenance benefit?

**Intermediate:**
6. How does POM reduce duplication?
7. What is the role separation?
8. When is POM overkill?

**Scenario-Based:**
9. The login button's id changes. What do you update with POM?
10. A teammate writes selectors in 10 tests. Refactor with POM.

#### Quick Recap

- POM = pages as classes.
- Locators and actions live in the page object.
- Tests stay short and readable.

---

### Topic 20.9 – Test Data Management

#### Definition

**Test data management** separates data from tests: JSON/CSV files, environment variables, and factories. Tests stay clean and data is reusable.

#### Why Do We Need It?

- Run the same test with many datasets (data-driven).
- Change environments without editing tests.
- Keep credentials out of the code.

#### Real-Life Analogy

Test data is like **a restaurant's recipe cards vs ingredients**: the recipe (test) stays the same; the ingredients (data) change per order (run).

#### Simple JavaScript Example

```javascript
// test-data/users.json
const users = [
  { username: "tester01", password: "Passw0rd!", role: "admin" },
  { username: "tester02", password: "Test@123", role: "user" },
];

// test
for (const user of users) {
  console.log(`Running login for ${user.username}`);
}
```

#### Code Breakdown

| Source | Use for |
|--------|---------|
| JSON/CSV files | Large datasets |
| Env variables (`process.env`) | Secrets, URLs |
| Fixtures | Per-test setup |
| Factories | Generated data |

#### Automation Testing Example

```javascript
// config.js
const config = {
  baseUrl: process.env.BASE_URL ?? "https://example.com",
  timeout: Number(process.env.TIMEOUT ?? 30),
};
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Hardcoding data in tests | Speed | Move to files/config |
| Committing passwords to git | Bad hygiene | Use env vars |
| One giant data file | Chaos | Organize by suite |

#### Memory Tip

> **"Data in files, secrets in env vars, tests stay clean."**

#### Practice Exercises

**Beginner:**
1. Move three hardcoded values into a JSON file.
2. Read and loop them.
3. Use `process.env` for a URL.

**Intermediate:**
4. Create a data-driven loop with users.json.
5. Write a config module using env vars with `??` defaults.

**Challenge:**
6. Build a data-driven login runner: JSON data + config + a loop printing results.

#### Interview Questions

**Beginner:**
1. Why separate data from tests?
2. What is data-driven testing?
3. Where do secrets live?
4. What are fixtures?
5. Why env vars for URLs?

**Intermediate:**
6. What are the benefits of JSON test data?
7. How do you avoid data duplication?
8. What is a factory?

**Scenario-Based:**
9. Design test data for a 3-environment suite.
10. A password is hardcoded in tests. What do you recommend?

#### Quick Recap

- Data in files; secrets in env vars.
- Data-driven = loop over datasets.
- Keeps tests clean and flexible.

---

### Topic 20.10 – Reports, Screenshots, and API Testing

#### Definition

Professional suites capture: **reports** (who ran what, when, pass/fail), **screenshots/videos** (evidence on failure), and **API tests** (backend verification without UI).

#### Why Do We Need It?

- Debug failures from CI.
- Share evidence with teams.
- Test backend logic fast and reliably.

#### Real-Life Analogy

Reports are like **the daily handover email**: results, screenshots, and timings, all in one place — so anyone can understand what happened.

#### Simple JavaScript Example

```javascript
// Screenshot on failure
test("login", async ({ page }, testInfo) => {
  await page.goto(url);
  await page.click("#login-btn");
  // on failure, Playwright captures automatically;
  // manual capture:
  await page.screenshot({ path: "shots/login.png" });
});
```

#### Code Breakdown

| Feature | Tool |
|---------|------|
| HTML report | `npx playwright show-report` |
| Screenshot | `page.screenshot()` / auto on failure |
| Video | `recordVideo` option |
| API testing | `request` context / fetch |

#### Automation Testing Example

```javascript
// API test with Playwright's request context
const api = await request.newContext();
const res = await api.get("https://api.example.com/health");
console.log("API status:", res.status());

// Screenshot evidence
await page.screenshot({ path: `shots/${Date.now()}.png` });
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| No failure evidence | Missed screenshots | Enable auto screenshots/videos |
| Ignoring reports | "It works on my machine" | Review CI reports |
| Testing only UI | Missing backend bugs | Add API-level tests |

#### Memory Tip

> **"Evidence on failure, reports for the team, API tests for the backend."**

#### Practice Exercises

**Beginner:**
1. Run a Playwright test and open the report.
2. Take a manual screenshot.
3. Make an API call with fetch and print the status.

**Intermediate:**
4. Enable video recording for a test.
5. Write an API health-check test.

**Challenge:**
6. Build a mini "evidence kit": run a failing test, capture screenshot + report, and summarize.

#### Interview Questions

**Beginner:**
1. Why reports?
2. Why screenshots?
3. What is API testing?
4. How do you capture a screenshot?
5. What is show-report?

**Intermediate:**
6. When is API testing better than UI testing?
7. What does recordVideo do?
8. How do reports help CI debugging?

**Scenario-Based:**
9. A test fails at 3am in CI. What artifacts help you?
10. Design a test pyramid for your app (UI vs API vs unit).

#### Quick Recap

- Reports + screenshots = evidence.
- API tests = fast backend checks.
- Set them up early in a suite.

---

### Topic 20.11 – A Complete Framework Tour

#### Definition

A realistic mini-framework combining everything: config, page objects, data, assertions, and reports.

#### Why Do We Need It?

This is the "putting it all together" moment — a template you can grow into a real project.

#### Complete Example (Playwright-style, pseudocode)

```javascript
// config.js
import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/login.js";
import users from "./data/users.json";

for (const user of users) {
  test(`login as ${user.role}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(user.username, user.password);

    await expect(page).toHaveURL(/dashboard/);
    await page.screenshot({ path: `shots/${user.role}.png` });
  });
}
```

#### Code Breakdown

| Piece | Where it came from |
|-------|--------------------|
| Data loop | Module 6 (loops) + Module 17 (JSON) |
| Page object | Module 16 (classes) + 20.8 (POM) |
| Async/await | Module 15 |
| Assertions | Module 20.7 |
| Screenshot | Module 20.10 |
| Template literals | Module 16 |

#### Automation Testing Example

```javascript
// data/users.json
[
  { "username": "admin", "password": "Admin@123", "role": "admin" },
  { "username": "user", "password": "User@123", "role": "user" }
]
```

#### Common Beginner Mistakes

| Mistake | Why it happens | How to avoid it |
|---------|----------------|-----------------|
| Learning tools before basics | Impatience | You now have the basics — tools are easy |
| Copying without understanding | Tutorial-itis | Type and modify every example |
| Skipping data separation | Messy suites | Files for data from day one |

#### Memory Tip

> **"Basics → pages → data → assertions → reports. That is the whole stack."**

#### Practice Exercises

**Beginner:**
1. List every module that contributes to the example.
2. Write the data file for two users.
3. Draw the file structure of the mini-framework.

**Intermediate:**
4. Add a second page object and a cross-page test.
5. Add error handling for the login call.

**Challenge:**
6. Build the complete mini-framework in a folder and run it against any public login page.

#### Interview Questions

**Beginner:**
1. What is a test framework?
2. What is the file structure?
3. Why page objects?
4. Why JSON data?
5. What do reports add?

**Intermediate:**
6. How do all 20 modules combine?
7. What is the role of config?
8. How do you grow a mini-framework?

**Scenario-Based:**
9. Design a suite structure for a 5-page app.
10. A teammate wants to skip the basics and only learn Playwright. Advise them.

#### Quick Recap

- A suite = config + pages + data + assertions + reports.
- Everything you learned combines here.
- You are automation-ready.

---

## Module 20 – Module Summary

You learned how JavaScript powers real automation: the framework layers, Playwright, Selenium, Cypress, WebdriverIO, locators, assertions, POM, test data, and reporting.

## Key Takeaways

- Test code → framework → protocol → browser.
- All frameworks share concepts: locators, actions, waits, assertions.
- Playwright: async + auto-wait. Cypress: chained + queued. Selenium/WDIO: driver-based.
- Locators: role, label, test-id > id > class > CSS paths.
- POM keeps locators and actions in page classes.
- Data in files, secrets in env vars.
- Evidence (screenshots/reports) on failure.

## Cheat Sheet

| Concept | One-liner |
|---------|-----------|
| Playwright | `test`, `page`, `expect`, async, auto-wait |
| Cypress | `cy.` chains, queued, auto-retry |
| Selenium | `Builder`, `By`, `until`, `driver.quit()` |
| WDIO | `browser`, `$`, `expect`, await |
| Locators | role/label/test-id first |
| Assertions | visible, text, URL, title, value |
| POM | page = class; test = story |
| Data | JSON/CSV files + env vars |
| Evidence | screenshots, videos, reports |

## Frequently Asked Questions (FAQs)

**Q1: Which framework should I learn first?**
Playwright is the most popular choice today; Cypress is also excellent. The concepts transfer.

**Q2: Do I need to know all four?**
No — master one; the rest are variations.

**Q3: Why does Playwright use await but Cypress doesn't?**
Playwright returns promises; Cypress queues commands internally.

**Q4: What is the most important automation skill?**
Debugging + the JS basics you now have.

**Q5: When should I use API tests over UI tests?**
For speed and stability of backend logic; UI for user flows.

**Q6: Am I ready for an automation role?**
With this course completed and practice, yes — build the Final Project and keep going.

## Real Automation Examples

```javascript
// Playwright + POM + data
import { LoginPage } from "./pages/login.js";
import users from "./data/users.json";

for (const user of users) {
  test(`login as ${user.username}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(user.username, user.password);
    await expect(page).toHaveURL(/dashboard/);
  });
}
```

## Mini Project

**Framework Selection Brief**

Write a short "brief" document (in code comments or a text file) that:

1. Compares Playwright, Cypress, Selenium, WDIO for a fictional team.
2. Recommends one with three reasons.
3. Lists the five most important practices from this module (locators, POM, data, assertions, reports).
4. Includes the file structure for the recommended framework.

## Quiz (10 Questions)

**Q1.** Which framework is async-first with auto-wait?
- A) Cypress
- B) Playwright
- C) Selenium
- D) WDIO

**Q2.** Which runs inside the browser?
- A) Playwright
- B) Cypress
- C) Selenium
- D) WDIO

**Q3.** Which is the classic WebDriver standard?
- A) Cypress
- B) Playwright
- C) Selenium
- D) none

**Q4.** What does `page.goto()` do?
- A) closes the page
- B) navigates to a URL
- C) clicks an element
- D) takes a screenshot

**Q5.** The best locator is:
- A) long CSS path
- B) role/label/test-id
- C) index number
- D) page text only

**Q6.** Assertions:
- A) navigate pages
- B) verify outcomes
- C) take screenshots
- D) manage data

**Q7.** POM stands for:
- A) Page Object Model
- B) Process Object Manager
- C) Page Order Method
- D) Program Object Mode

**Q8.** Secrets should live in:
- A) test files
- B) environment variables
- C) git
- D) console logs

**Q9.** Cypress commands are:
- A) awaited
- B) queued and chained
- C) synchronous only
- D) never run

**Q10.** Why quit the Selenium driver?
- A) to save memory
- B) to close the browser session
- C) to fail tests
- D) to take screenshots

### Answers

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | B | Playwright is async-first with auto-wait |
| 2 | B | Cypress runs inside the browser |
| 3 | C | Selenium is the classic standard |
| 4 | B | goto navigates |
| 5 | B | User-facing stable locators |
| 6 | B | Assertions verify outcomes |
| 7 | A | Page Object Model |
| 8 | B | Env vars hold secrets |
| 9 | B | Cypress queues commands |
| 10 | B | quit ends the browser session |

---

> **Module 20 complete — and with it, the full course! The only thing left is the Final Course Project, where you combine everything into one complete automation-style program.**

---

# Final Course Project – Login Automation Runner

This is your graduation project. You will build a **complete login-automation-style program** using only plain JavaScript and Node.js — no framework required — that proves you understand every concept in this course.

The project includes:

- Login Automation
- Navigation
- Data-Driven Testing
- Loops
- Functions
- Objects
- Arrays
- JSON Test Data
- Error Handling
- Assertions
- Modular Code

We will explain **every single line**.

## Project Files

```
final-project/
├── data/
│   └── users.json          # test data (JSON)
├── helpers/
│   ├── assertions.js       # assertion helpers
│   └── logger.js           # logging helpers
└── runner.js               # the main program
```

## Step 1 – The Test Data File

**`data/users.json`**

```json
[
  { "username": "admin", "password": "Admin@123", "role": "admin", "expected": "pass" },
  { "username": "tester01", "password": "Passw0rd!", "role": "user", "expected": "pass" },
  { "username": "locked", "password": "Wrong!123", "role": "user", "expected": "fail" }
]
```

### Code Breakdown

| Line | What it does |
|------|--------------|
| `[ { ... }, { ... } ]` | An array of user objects — our data-driven dataset (Modules 8, 9, 17) |
| `"username"` / `"password"` | Credentials for the fake login |
| `"role"` | Extra metadata about the user |
| `"expected": "pass"` | What we predict: this user SHOULD log in |

Each object is one test case. The same program will run all three.

## Step 2 – The Assertion Helper

**`helpers/assertions.js`**

```javascript
// ============ ASSERTION HELPERS ============
// One job: compare values and report PASS/FAIL (Module 7, 19, 20.7)

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`PASS | ${testName}`);
    return true;
  } else {
    console.log(`FAIL | ${testName} | Expected: ${expected} | Actual: ${actual}`);
    return false;
  }
}

function assertTrue(condition, testName) {
  return assertEqual(condition, true, testName);
}

module.exports = { assertEqual, assertTrue };
```

### Code Breakdown

| Line | What it does |
|------|--------------|
| `function assertEqual(actual, expected, testName)` | A reusable function: compare two values with a test name (Modules 7, 4) |
| `if (actual === expected)` | Strict comparison — our golden rule (Module 4.2) |
| `` `PASS | ${testName}` `` | Template literal for a clean log line (Module 16.1) |
| `return true / false` | Lets the caller count results (Module 7.4) |
| `assertTrue(condition, testName)` | A convenience wrapper reusing assertEqual |
| `module.exports = { ... }` | Shares the helpers with other files (Module 16.6, 17.2) |

## Step 3 – The Logger Helper

**`helpers/logger.js`**

```javascript
// ============ LOGGER ============
// Adds timestamps to log lines (Modules 12, 19.5)

function log(message) {
  const now = new Date();
  const time = now.toLocaleTimeString();
  console.log(`[${time}] ${message}`);
}

module.exports = { log };
```

### Code Breakdown

| Line | What it does |
|------|--------------|
| `function log(message)` | Takes any message |
| `new Date()` | Current moment (Module 12.1) |
| `now.toLocaleTimeString()` | Human-readable time (Module 12.3) |
| `` `[${time}] ${message}` `` | A timestamped log line |
| `module.exports` | Makes it importable |

## Step 4 – The Fake Login Function

Now the core logic. This simulates a real login endpoint without a browser (so it runs anywhere).

**Add to `runner.js`:**

```javascript
// ============ FAKE LOGIN ENGINE ============
// Simulates a server login (Modules 7, 13, 15)

function fakeLogin(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!username || !password) {
        reject(new Error("Username and password are required"));
        return;
      }
      if (username === "locked") {
        reject(new Error("Account is locked"));
        return;
      }
      if (username === "admin" && password === "Admin@123") {
        resolve({ token: "admin-token-123", role: "admin" });
        return;
      }
      if (password === "Passw0rd!") {
        resolve({ token: "user-token-456", role: "user" });
        return;
      }
      reject(new Error("Invalid credentials"));
    }, 1000);
  });
}
```

### Code Breakdown

| Line | What it does |
|------|--------------|
| `function fakeLogin(username, password)` | The "endpoint" (Module 7) |
| `return new Promise((resolve, reject) => ...)` | Async — returns a future result (Module 15.4) |
| `setTimeout(() => {...}, 1000)` | Simulates network delay (Module 15.1) |
| `if (!username || !password)` | Guard with logical operators (Module 4.3) |
| `reject(new Error("..."))` | Fail the promise with a clear message (Module 13.4) |
| `resolve({ token, role })` | Succeed with a response object (Modules 8, 15.4) |

## Step 5 – The Retry Helper

**Add to `runner.js`:**

```javascript
// ============ RETRY HELPER ============
// Calls an async action up to maxAttempts times (Modules 6, 13, 15)

async function withRetry(action, maxAttempts) {
  let attempts = 0;

  while (attempts < maxAttempts) {
    attempts++;
    try {
      return await action();          // success → stop
    } catch (error) {
      console.log(`  Retry ${attempts}/${maxAttempts}: ${error.message}`);
    }
  }

  throw new Error(`Action failed after ${maxAttempts} attempts`);
}
```

### Code Breakdown

| Line | What it does |
|------|--------------|
| `async function withRetry(action, maxAttempts)` | Takes a callback + attempt cap (Modules 7.7, 15.5) |
| `let attempts = 0;` | A changing counter → `let` (Module 2) |
| `while (attempts < maxAttempts)` | Loop while under the cap (Module 6.3) |
| `try { return await action(); }` | Run the risky action; success returns immediately (Modules 13.2, 15.5) |
| `catch (error)` | Log and retry (Module 13.2) |
| `throw new Error(...)` | Give up loudly after max attempts (Module 13.4) |

## Step 6 – The Test Runner

**Add to `runner.js`:**

```javascript
// ============ TEST RUNNER ============
// Runs one test case against the fake login (Modules 5, 7, 9)

async function runLoginTest(user) {
  const testName = `Login as ${user.username}`;
  log(`Starting: ${testName}`);

  try {
    const result = await withRetry(() => fakeLogin(user.username, user.password), 3);

    const isExpectedPass = user.expected === "pass";
    assertTrue(isExpectedPass, `${testName} (expected success)`);

    console.log(`  Token: ${result.token}`);
    return isExpectedPass;
  } catch (error) {
    const isExpectedFail = user.expected === "fail";
    assertTrue(isExpectedFail, `${testName} (expected failure)`);

    console.log(`  Error: ${error.message}`);
    return isExpectedFail;
  }
}
```

### Code Breakdown

| Line | What it does |
|------|--------------|
| `async function runLoginTest(user)` | One test per user object (Module 7) |
| `` `Login as ${user.username}` `` | Dynamic test name (Module 16.1) |
| `log(...)` | Timestamped start line (Module 12/19) |
| `try { ... } catch (error) { ... }` | Handle success and failure paths (Module 13) |
| `withRetry(..., 3)` | Retry flaky login up to 3 times (Modules 6, 13) |
| `user.expected === "pass"` | Compare data prediction (Module 4.2) |
| `assertTrue(...)` | Assert the outcome (Module 20.7) |
| `return true/false` | Feeds the summary counters (Module 7.4) |

## Step 7 – The Summary and Main

**Add to `runner.js`:**

```javascript
// ============ SUMMARY & MAIN ============
// Data-driven loop + final report (Modules 6, 9, 17)

async function main() {
  const fs = require("fs");
  const { assertEqual, assertTrue } = require("./helpers/assertions");
  const { log } = require("./helpers/logger");

  const users = JSON.parse(fs.readFileSync("data/users.json", "utf8"));
  const results = [];

  log("=== Login Automation Run ===");

  for (const user of users) {
    const passed = await runLoginTest(user);
    results.push({ username: user.username, passed });
  }

  const passedCount = results.filter((r) => r.passed).length;

  log(`Summary: ${passedCount}/${results.length} tests passed`);
  console.table(results);

  assertEqual(passedCount, results.length, "All tests passed");
}

main().catch((error) => console.error("Runner crashed:", error.message));
```

### Code Breakdown

| Line | What it does |
|------|--------------|
| `async function main()` | The entry point (Module 15.5) |
| `require("fs")` | File system (Module 17.2) |
| `require("./helpers/...")` | Import our modules (Module 16.6) |
| `JSON.parse(fs.readFileSync("data/users.json", "utf8"))` | Load test data (Module 17.2) |
| `const results = []` | Array for collecting results (Module 9) |
| `for (const user of users)` | The data-driven loop (Module 6.5) |
| `await runLoginTest(user)` | Run each case (Module 15.5) |
| `results.push({ username, passed })` | Collect results (Module 9.2) |
| `results.filter((r) => r.passed).length` | Count passes with filter (Module 9.4) |
| `console.table(results)` | Pretty result table (Module 19.5) |
| `assertEqual(passedCount, results.length, ...)` | Final assertion (Module 20.7) |
| `main().catch(...)` | Handle top-level errors (Module 13) |

## Expected Output (approximately)

```
[2:30:05 PM] === Login Automation Run ===
[2:30:05 PM] Starting: Login as admin
PASS | Login as admin (expected success)
  Token: admin-token-123
[2:30:06 PM] Starting: Login as tester01
PASS | Login as tester01 (expected success)
  Token: user-token-456
[2:30:07 PM] Starting: Login as locked
  Retry 1/3: Account is locked
  Retry 2/3: Account is locked
  Retry 3/3: Account is locked
PASS | Login as locked (expected failure)
  Error: Account is locked
[2:30:08 PM] Summary: 3/3 tests passed
┌─────────┬──────────┬────────┐
│ (index) │ username │ passed │
├─────────┼──────────┼────────┤
│ 0       │ 'admin'  │ true   │
│ 1       │ 'tester01'│ true  │
│ 2       │ 'locked' │ true   │
└─────────┴──────────┴────────┘
```

## How to Run It

1. Create the three files exactly as above.
2. Open a terminal in `final-project/`.
3. Run:

```
node runner.js
```

4. Read the output. Every concept from the course is in there.

## What You Just Built (Concept Map)

| Feature | Concepts used |
|---------|---------------|
| Login Automation | Functions, objects, promises |
| Navigation | `fakeLogin` flow (simulated) |
| Data-Driven Testing | JSON file + `for...of` loop |
| Loops | `while` retry, `for...of` data |
| Functions | `fakeLogin`, `withRetry`, `runLoginTest` |
| Objects | User objects, response objects |
| Arrays | `results`, `filter`, `push` |
| JSON Test Data | `readFileSync` + `JSON.parse` |
| Error Handling | `try/catch`, `throw`, `reject` |
| Assertions | `assertEqual`, `assertTrue` |
| Modular Code | Separate `helpers/` modules |

## Challenge Extensions (After the Project Works)

1. **Add a CSV mode** — load the same data from a CSV file (Module 17.4).
2. **Write results to JSON** — save `results` to `reports/results.json` (Module 17.3).
3. **Add a timestamp to the report filename** (Module 12).
4. **Add a third retry scenario** — a user that succeeds on the second attempt.
5. **Validate the data file** — throw a clear error if a user is missing `username` (Module 13.4).

---

# Course Completion

## What You Learned

| Area | Modules |
|------|---------|
| Programming fundamentals | 1-4 |
| Control flow | 5-6 |
| Functions & data structures | 7-9 |
| Strings, numbers, dates | 10-12 |
| Errors, DOM, async | 13-15 |
| Modern JS, files, regex | 16-18 |
| Professional practices | 19 |
| Automation frameworks | 20 |

## Your Next Steps

1. **Practice daily** — 30 minutes of typing and running code.
2. **Build the Final Project** — make it run, then add the extensions.
3. **Install Playwright** — write your first real browser test with the skills from Module 20.
4. **Learn your framework's docs** — you can now read them with understanding.
5. **Join a community** — share, ask, and review others' tests.
6. **Automate something real** — take one repetitive manual test and automate it.

## Final Words

You started with "I have never written code" and you now understand variables, functions, objects, async, the DOM, and how real frameworks work. That is a complete foundation for an Automation Test Engineer.

Remember the recipe: **a program is instructions a computer follows.** You now write those instructions. Go build your tests.

**Congratulations — you made it! 🎉**

---

*End of the JavaScript Training Guide for Manual Testers.*
