/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};*/

const countLetters = function(sentence) {
  const str = sentence.split(" ").join("");
  const count = {};
  count[str[0]] = 0;
  for (const s of str) {
    if (count[s])
      count[s] += 1;
    else
      count[s] = 1;
  }
  return count;
};

console.log(countLetters("lighthouse in the house"));