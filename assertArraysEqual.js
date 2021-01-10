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

module.exports = assertArraysEqual;

