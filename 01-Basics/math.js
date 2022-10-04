// ==== exporting modules ====
// both arrow and normal function can be used for exports

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

function complex(a,b,c,d) {
    return a - ( b * (c + d));
}

// or export like this (below), to avoid using module.exports...
// exports.add = (a,b) => a + b;
// exports.subtract = (a,b) => a - b;
// exports.multiply = (a,b) => a * b;
// exports.divide = (a,b) => a / b;

// to export modules

module.exports = { add , subtract, multiply, divide, complex } ;