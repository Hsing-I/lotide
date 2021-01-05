const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length){
    return false;
  } else {
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i] !== arr2[i]){
        return false;
        break;
      }      
    }
    return true; 
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [4, 5, 6]), false);
assertEqual(eqArrays(["test1", "test2"], ["test1", "test2"]), true);
assertEqual(eqArrays(["test1", "test2"], ["test1", "test2", "test3"]), true);
