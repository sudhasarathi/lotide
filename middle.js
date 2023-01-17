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


const middle = arr => {
  const midIndexArr = Math.floor(arr.length / 2);
  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 === 0) {
    return arr.slice(midIndexArr - 1, midIndexArr + 1);
  } else {
    return arr.slice(midIndexArr, midIndexArr + 1);
  }
};

module.exports = middle;