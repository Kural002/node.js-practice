const os = require('os');

console.log("OS Platform :", os.platform());
console.log("OS CPU Architecture :", os.arch());
console.log("OS Release :", os.release());
console.log("OS Total Memory :", Math.round( os.totalmem()/ (1024 ** 3)) + " GB");
console.log("OS Free Memory :", Math.round( os.freemem()/ (1024 ** 3)) + " GB");
console.log("OS Uptime :", Math.round( os.uptime()/ 60 / 60) + " hours");
console.log("Home :", os.homedir());
console.log("Total CPUs :", os.cpus().length);