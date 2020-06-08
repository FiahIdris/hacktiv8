function sorting(arrNumber) {
    let result= []
    let largest= arrNumber
    if(arrNumber.length === 0){
        result.push(0)
    }else{
        for(var i= 0; i<arrNumber.length; i++){
            for(var j=0; j<arrNumber.length; j++){
                if(arrNumber[j] < arrNumber[j+1]){
                   var tmp= arrNumber[j+1]
                   arrNumber[j+1]=arrNumber[j]
                   arrNumber[j]=tmp 
                }
            }
        } 
        for(var i=0; i<largest.length; i++){
            if(largest[i] === largest[0]){
                result.push(largest[i])
            }
        }
    }
   
    return result;
}

function getTotal(arrNumber) {
    let result=''

    if(arrNumber == 0 ){
        result= `''`
    }else{
        let total= arrNumber.length
        result= `angka paling besar adalah ${arrNumber[0]} dan jumlah kemunculan sebanyak ${total} kali`
    }
    return result;
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);

    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''