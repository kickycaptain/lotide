const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (let key of keys1) {
      if (eqArrays(object1[key], object2[key]) === true) {
        continue;
      } else if (object1[key] === object2[key]) {
        continue;
      } else {
        return false;
      }
    } return true;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const errmsg = `🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  const passmsg = `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  if (eqObjects(actual, expected) === true) {
    console.log(passmsg);
  } else {
    console.log(errmsg);
  }
};

module.exports = assertObjectsEqual;

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: 1, b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2, c: 3}, { b: 2, a: '1' });