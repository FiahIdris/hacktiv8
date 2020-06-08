var kata = "xoxoxoxoxxo"
var x=""
var o=""
for(var i=0; i<kata.length; i++){
    var xo= kata[i]
    if (xo==="x"){
    x= x+xo
    }else{
    o=o+xo
    }
}
if(x.length===o.length){
    console.log("true");
}else{
    console.log("false")
}



        