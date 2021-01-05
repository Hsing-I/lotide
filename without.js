const without = function(source, removeArr) {
  let result = [];
  for (const s of source) {
    for (const r of removeArr) {
      if (s !== r) {
        result.push(s);
      }
    }
  }
  return result;
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

//test code
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
console.log(without(words, ["lighthouse"]));
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


const greetings = ["good", "morning", "coder"];
without(greetings, ["morning"]);
console.log(without(greetings, ["morning"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(greetings, ["good", "morning", "coder"]);