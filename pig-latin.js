const pigLatin = function(arr) {
  let word = "";
  for (const a of arr) {   
    for (let i = 1; i < a.length; i++) {
      word += a[i];
    }
    word = word + a[0] + 'ay ';
  }
  console.log(word);
};

const args = process.argv;
//console.log(args.slice(2));
let arrayOfArgs = args.slice(2);
pigLatin(arrayOfArgs);
