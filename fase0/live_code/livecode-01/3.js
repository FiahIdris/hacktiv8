/*
==========
Golddigger
==========

Di program ini kamu membantu golddigger (diwakili simbol 'X') untuk mencari emas (diwakili simbol '$') sampai ke ujung jalan.

Jalanan di antara 'X' dan '$' pasti terhubung dengan 2 tipe jalan yaitu '-', '='. Setiap jalan '-' dihitung satu langkah dan '=' dihitung 2 langkah.
'X' selalu berada di ujung kiri. Serta diasumsikan emas selalu ada.

Tugas kamu adalah menampilkan berapa total langkah yang diambil golddigger untuk mendapatkan emas terdekat.

Beberapa contoh input dan output:

var path = 'X--$---$' // Total langkah: 2.

var path = 'X--=$==' // Total langkah: 4.

var path = 'X-====$' // Total langkah: 9.

var path = 'X---==$$' // Total langkah: 7.


*/

var path = 'X---==$$' // Silahkan ubah isi variabel sesuai keperluan.

var steps = 0;
for(var i=0; i<path.length; i++){
    if (path[i]==="-"){
        steps+= +1
    }else if(path[i]==="="){
        steps+= +2
    }else if(path[i]==="$"){
        break;
    }
}console.log(`Total langkah: ${steps}.`)

