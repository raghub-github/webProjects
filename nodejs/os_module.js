const os = require('os');

console.log("userInfo",os.userInfo());
console.log("platform",os.platform());
console.log("CPU architechture",os.arch());
console.log("logical CPU core",os.cpus());
console.log("free memory", os.freemem());
console.log(os.hostname());
console.log(os.networkInterfaces());
console.log(os.release());
console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.type());
console.log(os.uptime());

