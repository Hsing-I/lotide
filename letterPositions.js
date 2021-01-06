const letterPositions = function(sentence){
  const results = {};
  for(let i = 0; i < sentence.length; i++){    
    const letter = sentence[i];
    if(letter !== " "){
      if(!results[letter]){
        results[letter] = [i];
      }else{
        results[letter].push(i);
      }
    }
  }
  return results;
}

console.log(letterPositions("lighthouse in the house"));