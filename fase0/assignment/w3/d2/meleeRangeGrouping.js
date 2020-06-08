function splitting(str) {
    let result=[]

    var tmp=''
    for(var i=0 ; i<str.length; i++){
       tmp+=str[i]
       if(str[i+1] === ',' || str[i] === str[str.length-1] || str[i+1] === '-'){
            i=i+1    
            result.push(tmp)
            tmp=''
        }
    }

   return result;
}

  
function meleeRangedGrouping (str) {
    let result=[]

    if(str.length == 0){
        result = splitting(str)
    }else{
        let str1= splitting(str)
        let name1=[]
        let name2=[]
        for(var i=0; i<str1.length; i+=2){
            if(str1[i+1] === str1[1]){
                name1.push(str1[i])
            }else{
                name2.push(str1[i])
            }
        } 
        result.push(name1,name2)
    }
   
    return result;
}

  // TEST CASE
  
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
//   // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
console.log(meleeRangedGrouping('')); // []