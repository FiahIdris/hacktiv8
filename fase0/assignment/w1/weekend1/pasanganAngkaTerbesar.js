var angka= 910233
var numString= angka.toString();
var newNum = ""
var maxNum = 0
for (var i=0; i<numString.length-1; ++i ){
    var newNum= Number(numString.substr(i,2));
     if (newNum >= maxNum){
         maxNum=newNum
     }   
}
console.log(maxNum);