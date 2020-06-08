function vocalSeeker(board) {
    let numOfVokal = 0
    let vokal =""
    let completeIndex=[]
    let dictionary="aiueoAIUEO"
    for(var i=0; i<board.length; i++){
        for(var j=0; j<board[i].length; j++){
            completeIndex.push(board[i][j])
        }
    }
    for(var i=0; i<completeIndex.length; i++){
        for(var j=0; j<dictionary.length;j++){
            if(completeIndex[i]===dictionary[j]){
                numOfVokal+=1
                vokal+=completeIndex[i]
            }
        } 
    } 
    return `vokal ditemukan ${numOfVokal} dan kumpulan vokal adalah ${vokal}`;
}

  
  //DRIVER CODE
  
  let board = [
    ['*', '*', '*', 10],
    ['*', '*', -5, -10, '*', 100],
    ['a', 'A', 'o', 'b']
  ]
  
  console.log(vocalSeeker(board)); // vokal ditemukan 3 dan kumpulan vokal adalah aAo