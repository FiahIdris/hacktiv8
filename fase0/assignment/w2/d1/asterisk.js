// 1. Menyusun Barisan Bintang

let rows1 = 5
for (var i=0; i<rows1; i++){
    console.log("*")
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping

let rows2 = 5
for (var i=0; i<rows2; i++){
    let star1= ""
    for(var j=0; j<rows2; j++)
    star1+="*"
    
    console.log(star1)
}
// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

let rows3 = 5
for(var i=0; i<rows3; i++){
    let star2= ""
    for(var j=0; j<=i; j++){
        star2+= "*"
    } console.log(star2)
}
// 4. Menyusun Barisan Tangga Bintang Terbalik Dengan Nested Looping
let rows4 = 5
for(var i=0; i<rows4; i++){
    let star4= ""
    for (j=i; j<rows4; j++){
        star4+="*"
    } console.log(star4)
}
