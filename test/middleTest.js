const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEquals');
const middle = require('../middle');
eqArrays(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3, 8, 9]));