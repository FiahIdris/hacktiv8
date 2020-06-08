let detik= 100
let menit = detik/60
let modulo =detik%60
if (modulo === 0){
    console.log(menit)
} else if(detik>60 && modulo > 10 ){
    console.log(Math.trunc(menit) + ":" + modulo)
} else if (detik>60 && modulo <= 10){
    console.log(Math.trunc(menit) + ":0" + modulo)
} else if(detik<60){
    console.log("0:" + detik)
}

