//
// const assertEqual = require('./assertEqual');
// // eslint-disable-next-line no-undef, no-const-assign
// assertEqual = function(actual, expected) {
//   if (actual === expected) {
//   // eslint-disable-next-line no-undef
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//   // eslint-disable-next-line no-undef
//     console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
const head = function(array) {
  return array[0];
};
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined);
// assertEqual(head([5]), 5);
module.exports = head;