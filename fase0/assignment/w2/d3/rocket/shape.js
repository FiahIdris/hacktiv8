let num =7
if (num<4 || num>10){
    console.log("invalid number")
}else{
    for(var i=0; i<num; i++){
        var temp=""
        var space=""
        var shape=""
        if(i===num-1 || i===0){
            for(var j=0; j<num; j++){
                temp+="#"
            }
        }else{
            if(num%2===0){
                for(var k=1; k<num/2; k++){
                    space+=" "
                }
                for(var l=0; l<2; l++){
                    shape+="|"
                }temp=space+shape
            }else{
                for (var k=1; k<=(num+1)/2-1; k++ ){
                    space+=" "
                }for (var l=0; l<1; l++){
                    shape+="|"
                }temp=space+shape
            }
        }
        console.log(temp)
    }
        
}