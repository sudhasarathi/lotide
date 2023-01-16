const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const findKey = function(object, callback) {
  let keysArr = Object.keys(object);
  for (let i = 0; i < keysArr.length; i++) {
    // console.log(keysArr[i], callback(object[keysArr[i]]), object[keysArr[i]].stars);
    if (callback(object[keysArr[i]])) {
      return keysArr[i];
    }
  }
  return undefined;
};
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

let object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
let original1 = findKey(object, x => x.stars === 2);
let output1 = "noma";
assertEqual(original1, output1);

let orginal2 = findKey(object, x => x.stars > 3);
let output2 = "ora";
assertEqual(orginal2, output2);

let orginal3 = findKey(object, x => x.stars === 10);
let output3 = undefined;
assertEqual(orginal3, output3);

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1), 'Blue Hill');



