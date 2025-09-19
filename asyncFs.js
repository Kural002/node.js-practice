const fs = require("fs");

fs.writeFile("async.txt" , "Get A Job" , (err) => {
    console.log("File written successfully.");
    fs.readFile("async.txt" , {encoding : "utf-8"} , (err , data) =>{
        console.log("File content:" , data);
    });
});
  console.log("This is a message from asyncFs.js");