const tail = function(arr) {
  let result = [];
  if (arr.length === 1) {
    return result;
  } else {
    result = arr.slice(1);
    return result;
  }
};

module.exports = tail;

