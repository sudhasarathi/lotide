// const eqArrays = function(array1, array2) {
//   let output = true;
//   if (array1.length !== array2.length) return false;
//   for (let element = 0; element < array1.length; element += 1) {
//     if (Array.isArray(array1[element]) || Array.isArray(array2[element])) {
//       output = output && eqArrays(array1[element], array2[element]);
//     } else if (array1[element] !== array2[element]) {
//       output = output && false;
//     }
//   }
//   return output;
// };
const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;