const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [4, 5, 6]);
assertArraysEqual(["test1", "test2"], ["test1", "test2"]);
assertArraysEqual(["test1", "test2"], ["test1", "test2", "test3"]);