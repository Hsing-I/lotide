const flatten = function(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === false) {
      result.push(arr[i]);
    } else {
      //result.push(...flatten(arr[i]));
      const flat = flatten(arr[i]);
      for (let j = 0; j < flat.length; j++) {
        result.push(flat[j]);
      }
    }
  }
  return result;
};

console.log(flatten([1, 2, [3, 4, [1,2], 5], 6, [7]]));