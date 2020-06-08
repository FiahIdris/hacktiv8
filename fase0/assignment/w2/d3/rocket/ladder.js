let kata = "foxie"
let kLength= kata.length 
if(kLength%2 !== 0){
    for (var i=0; i<kLength; i++){
        var space=""
        var palindrome=""
        for(var j=kLength; j>i; j--){
            space+=" "
        }if(i===0 || i%2===0){
            for(var m=i; m>=0; m--){
                palindrome+=kata[kLength-1-m]
            } 
        }else{
            for(var k=0; k<i+1; k++){
                palindrome+=kata[kLength-1-k]
            }  
            
            }console.log(space+palindrome)
        }
} else {
    for (var i=0; i<kLength; i++){
        var space=""
        var palindrome=""
        for(var j=kLength; j>i; j--){
            space+=" "
        }if(i===0 || i%2===0){
            for(var k=0; k<i+1; k++){
                palindrome+=kata[kLength-1-k]
            }  
                
        }else{
            for(var m=i; m>=0; m--){
                palindrome+=kata[kLength-1-m]
            } 
        }console.log(space+palindrome)
        }
}

    
