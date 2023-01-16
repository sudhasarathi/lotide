const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(sentence) {
  let letterCounter = {};
  sentence = sentence.toLowerCase();
  for (let letter of sentence) {
    if (letter !== ' ') {
      if (letterCounter[letter]) {
        letterCounter[letter] += 1;
      } else {
        letterCounter[letter] = 1;
      }
    }
  }
  return letterCounter;
};
countLetters("Sudha Parthasarathi");
console.log(countLetters("Sudha Parthasarathi"));


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

