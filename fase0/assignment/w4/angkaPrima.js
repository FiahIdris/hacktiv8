function angkaPrima(angka) {
    var result;
    var counter = 0
    for(var i=1; i<=angka; i++){
        if(angka % i === 0){
            counter += 1
        }
    }
    if(angka === 1){
        result = false
    } else if(counter > 2){
        result = false
    }else{
        result = true
    }
    
    return result ;
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false