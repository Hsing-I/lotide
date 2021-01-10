const assertEqual = require('../assertEqual');
const tail = require('../head');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
assertEqual(words[0], "Yo Yo");
assertEqual(words[1], "Test");
assertEqual(words[2], "Labs");