const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  console.log(arr1);

  if (arr1.length !== arr2.length) {
    return false;    
  }

  if (arr1.length == 0 || arr2.length == 0){
    return false;
  }
  
  for(let key1 of arr1){
    if(typeof object1[key1] !==  typeof object2[key1]){
      return false;
    }else if(Array.isArray(object1[key1]) && Array.isArray(object2[key1])){
      eqArrays(object1[key1], object2[key1]);
    }else{
      if(object1[key1] !== object2[key1]){
        return false;
      }
    }  
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd1 = {};
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd1, cd2)); // => false