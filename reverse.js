const reverse = function(arr) {
  for (const a of arr) {
    let word = "";
    for (let i = a.length - 1; i >= 0; i--) {
      word += a[i];
    }
    console.log(word);
  }
};

const args = process.argv;
//console.log(args.slice(2));
let arrayOfArgs = args.slice(2);
reverse(arrayOfArgs);
