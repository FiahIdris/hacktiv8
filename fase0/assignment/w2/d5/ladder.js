function ladder(word) {
    let wordToArray =[] 
    let result=[]
    for (let i=0; i<word.length; i++){
        wordToArray.push(word[i])
    }
    for(let i=0;i<wordToArray.length;i++){
        let output=[]
        for(var j=0; j<wordToArray.length-i;j++){
            output.push(wordToArray[j])
        } 
        result.push(output)
    } 
    return result;
  }
  
  
  // DRIVER CODE
  console.log(ladder('hacktiv8'));
//   [
//     [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
//     [ 'h', 'a', 'c', 'k', 't', 'i', 'v' ],
//     [ 'h', 'a', 'c', 'k', 't', 'i' ],
//     [ 'h', 'a', 'c', 'k', 't' ],
//     [ 'h', 'a', 'c', 'k' ],
//     [ 'h', 'a', 'c' ],
//     [ 'h', 'a' ],
//     [ 'h' ]
//   ]