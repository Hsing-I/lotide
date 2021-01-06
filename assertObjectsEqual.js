const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } 
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  let arr1 = Object.keys(actual);
  let arr2 = Object.keys(expected);

  if (arr1.length !== arr2.length) {
    return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;   
  }

  if (arr1.length == 0 || arr2.length == 0){
    return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`; 
  }
  
  for(let key1 of arr1){
    if(typeof actual[key1] !==  typeof expected[key1]){
      return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`; 
    }else if(Array.isArray(actual[key1]) && Array.isArray(expected[key1])){
      eqArrays(actual[key1], expected[key1]);
    }else{
      if(actual[key1] !== expected[key1]){
        return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`; 
      }
    }  
  }
  return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`; 
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true


const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd1 = {};
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd1, cd2)); // => false