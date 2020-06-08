let num = 6
for(var i=0; i<num; i++){
    let space = ""
    let star = "*"
    for(var j=i; j<num; j++){
        space=space+" "
    }
    for(var k=1; k<=i; k++){
        star=star+"o*"
    }let print=space+star
    console.log(print)
}