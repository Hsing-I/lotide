const tail = function(arr) {
  let result = [];
  if (arr.length === 1) {
    return result;
  } else {
    result = arr.slice(1);
    return result;
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
assertEqual(words[0], "Yo Yo");
assertEqual(words[1], "Test");
assertEqual(words[2], "Labs");