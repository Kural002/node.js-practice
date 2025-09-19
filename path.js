const path = require('path');

const filePath = "C:\\Users\\kural\\Documents\\file.txt";

console.log("Base Name :" , path.basename(filePath));
console.log("Dir Name :" , path.dirname(filePath));
console.log("Ext Name :" , path.extname(filePath));

console.log(__dirname);

console.log("join Path :", path.join(__dirname , "test" , "hello.html"));