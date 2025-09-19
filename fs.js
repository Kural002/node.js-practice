const fs = require("fs");

// fs.writeFileSync("output.txt", "Hello, world!");
// console.log("File written successfully.");

const data = fs.readFileSync("output.txt", "utf-8");
console.log("File content:", data);