// 1.

var i = 1;
for(var i=1; i<=100; i=i+3){
    if(i%2===0){
        console.log(i+" - genap")
    } else{
        console.log(i+ " - ganjil")
    }
}

// 2.

var i= 50;
while(i <=200){
    if (i%3 === 0){
        console.log(i+ " - faktor 3")
    }else {
        console.log(i+ " - tidak bisa dibagi 3")
    }
    i=i+5;
}

var i = 100;
while (i<=200){
    if(i % 8 === 0){
        console.log(i)
    }
    i=i+7;
}
