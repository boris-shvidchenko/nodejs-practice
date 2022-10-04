// use 'require' to access node's common core modules

const os = require('os');
const path = require('path');
// math is our custom exported module from math.js
const math = require('./math');

console.log(math.add(1,4));
console.log(os.type());
console.log(path.parse(__filename));
