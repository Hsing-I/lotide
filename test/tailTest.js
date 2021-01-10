const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const arr = ['Lighthouse', 'Labs'];
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), arr);
  });
});

/*const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
assertEqual(words[0], "Yo Yo");
assertEqual(words[1], "Test");
assertEqual(words[2], "Labs");*/