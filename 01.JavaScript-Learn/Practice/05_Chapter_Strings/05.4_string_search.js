// =============================================
// Program: STRING SEARCH METHODS
// =============================================
// Methods that search inside strings:
//   startsWith, endsWith, lastIndexOf, indexOf, includes
// =============================================

// Example 1: startsWith()
console.log("Example 1: startsWith");

let filename = "report_final.pdf";

console.log('startsWith("report"):', filename.startsWith("report"));  // true
console.log('startsWith("final"):', filename.startsWith("final"));    // false
console.log('startsWith("report", 0):', filename.startsWith("report", 0));  // true
console.log('startsWith("final", 7):', filename.startsWith("final", 7));    // true (start at index 7)

console.log("");

// Example 2: endsWith()
console.log("Example 2: endsWith");

console.log('endsWith(".pdf"):', filename.endsWith(".pdf"));    // true
console.log('endsWith("final.pdf"):', filename.endsWith("final.pdf"));  // true
console.log('endsWith(".png"):', filename.endsWith(".png"));    // false

console.log("");

// Example 3: Practical file type check
console.log("Example 3: Practical file type check");

function getFileType(file) {
    if (file.endsWith(".pdf")) return "PDF document";
    if (file.endsWith(".png") || file.endsWith(".jpg")) return "Image";
    if (file.endsWith(".js")) return "JavaScript file";
    return "Unknown";
}

console.log("photo.png:", getFileType("photo.png"));      // "Image"
console.log("app.js:", getFileType("app.js"));            // "JavaScript file"
console.log("notes.txt:", getFileType("notes.txt"));      // "Unknown"

console.log("");

// Example 4: lastIndexOf() — find from the end
console.log("Example 4: lastIndexOf");

let path = "/users/alice/docs/file.js";

console.log('indexOf("/"):', path.indexOf("/"));          // 0
console.log('lastIndexOf("/"):', path.lastIndexOf("/"));  // 21 (last slash)

// Practical — extract the filename from a path:
let fileName = path.slice(path.lastIndexOf("/") + 1);
console.log("Extracted filename:", fileName);  // "file.js"

console.log("");

// Example 5: indexOf vs lastIndexOf
console.log("Example 5: indexOf vs lastIndexOf");

let text = "banana";

console.log('indexOf("a"):', text.indexOf("a"));        // 1 (first)
console.log('lastIndexOf("a"):', text.lastIndexOf("a")); // 5 (last)
console.log('indexOf("n"):', text.indexOf("n"));        // 2
console.log('lastIndexOf("n"):', text.lastIndexOf("n")); // 4

console.log("");

// Example 6: Checking with case-insensitive search
console.log("Example 6: Case-insensitive search");

let userInput = "Hello World";

// Lowercase both sides before searching:
let found = userInput.toLowerCase().includes("world".toLowerCase());
console.log('contains "world":', found);  // true

console.log("");

// Example 7: search() — with a regular expression
console.log("Example 7: search() with regex");

let code = "Error code: 404 Not Found";

console.log('search(/[0-9]+/):', code.search(/[0-9]+/));  // 12 (index of "404")

console.log("");

// Example 8: match() — extract matching parts
console.log("Example 8: match with regex");

let numbers = "Items: 3 apples, 12 oranges, 7 pears";
let matches = numbers.match(/[0-9]+/g);   // g = global (all matches)

console.log("Matches:", matches);  // ['3', '12', '7']

// =============================================
// SUMMARY
// - startsWith / endsWith — check edges (boolean)
// - indexOf — first occurrence (-1 if missing)
// - lastIndexOf — last occurrence
// - search / match — regular expression support
// - Combine with toLowerCase for case-insensitive search
// =============================================
