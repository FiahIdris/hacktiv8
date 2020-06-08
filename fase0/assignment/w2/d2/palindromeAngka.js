var angka = 175
var angkaStr=angka.toString()
for(var i=angka; i>=10; i++){
    var palindrom=""
    var temp =i.toString()
    for(var j=temp.length-1; j>=0; j--){
        palindrom+=temp[j]
      
    } 
    if (palindrom==i){
        console.log(palindrom)
        break}
 
    } 
    
    