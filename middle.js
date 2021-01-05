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

const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑 The two arrays are not equal [${arr1}] !== [${arr2}]`);
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(`🛑🛑🛑 The two arrays are not equal [${arr1}] !== [${arr2}]`);
        break;
      }
    }
    console.log(`✅✅✅ The two arrays are equal [${arr1}] === [${arr2}]`);
  }
};

const middle = function(arr){
  let result = [];
  if (arr.length === 0 || arr.length === 1 || arr.length === 2){
    return result;
  } else if(arr.length % 2 === 0){
    result.push(arr[arr.length/2-1]);
    result.push(arr[arr.length/2]);
    return result;
  } else{
    result.push(arr[(arr.length-1)/2]);
    return result;
  }
}

assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);