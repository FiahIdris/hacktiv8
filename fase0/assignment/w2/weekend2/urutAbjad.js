function urutkanAbjad(str) {
    let output=''
    let toArr=[]
    for (var i=0; i<str.length;i++){
        toArr.push(str[i])
    }
    for (var j=0; j<toArr.length; j++){
        for(var i=0; i<toArr.length; i++){
            if(toArr[i]>toArr[i+1]){
                var tmp=toArr[i+1]
                toArr[i+1]=toArr[i]
                toArr[i]=tmp
            }
        }
    }
    for(var i=0; i<toArr.length; i++){
        output+=toArr[i]
    }
    return output;
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'

