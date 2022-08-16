// How does NodeJS differ from vanilla JS?
// 1. Node runs on a server - not in the browser
// 2. The console is the terminal window
console.log("Hello World");
// 3. There is a "global" object instead of a "window" object
// console.log(global);
// 4. Has common core modules
// 5. CommonJS modules instead of ES6 modules
// 6. Missing some JS APIs like fetch

const os = require("os");
const path = require("path");
const { add, subtract, multiply, divide } = require("./math");
// if you use const math = require("./math") then each function (add, subtract, etc) would be a method of the math object math.add(a, b)

console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename)); // same as console.log(__dirname)
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// // get all the above 3 values with one command
// console.log(path.parse(__filename));
