function tabelPerkalian(angka) {
    let result=[]
    for(var i=1; i<=10; i++){
        let j=1
        while(j<=i*angka){
            if(i*j===angka){
                if(j<i){
                    break;
                }else{
                    var tmp=`${i}x${j}`
                    result.push(tmp)
                }
            }
            j++
        }
    }
   return result;
  }
  
  // TEST CASES
  console.log(tabelPerkalian(24)); // [ '1x24', '2x12', '3x8', '4x6' ]
  console.log(tabelPerkalian(90)); // [ '1x90', '2x45', '3x30', '5x18', '6x15', '9x10' ]
  console.log(tabelPerkalian(20)); // [ '1x20', '2x10', '4x5']
  console.log(tabelPerkalian(179)); // [ '1x179' ]
  console.log(tabelPerkalian(1)); // [ '1x1' ]