// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1 [i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };
// const assertArraysEqual = function(actual, expected) {
//   if (eqArrays(actual, expected) === true) {
//     console.log(`✅ Assertion Passed : ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑 Assertion Failed : ${actual} !== ${expected}`);
//   }
// };


const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1);
  } else {
    let newArray = [];
    let middleNum = Math.round(array.length / 2);
    newArray.push(array[middleNum - 1]);
    return newArray;
  }
};

module.exports = middle;