/* 
ALGORITHM Grade Student:
1. Masukkan nama mahasiswa
2. Masukkan nilai mahasiswa
3. Tentukan deskripsi nilai mahasiswa dengan ketentuan sebagai berikut:
    a. Jika nilai mahasiswa lebih besar dari atau sama dengan 80 dan kurang dari atau sama dengan 100 maka beri deskripsi A
    b. Jika nilai mahasiswa lebih besar dari atau sama dengan 65 dan kurang dari atau sama dengan 79 maka beri descrpsi B
    c. Jika nilai mahasiswa lebih besar dari atau sama dengan 50 dan kurang dari 64 atau sama dengan 64 maka beri deskripsi C
    d. Jika nilai mahasiswa lebih besar dari atau sama dengan 35 dan kurang dari atau sama dengan 49 maka beri deskripsi D
    e. Jika nilai mahasiswa lebih besar dari atau sama dengan 0 dan kurang dari atau sama dengan 34 maka beri deskripsi E
    f. Jika nilai mahasiswa selain dari definisi a sampai e di atas maka beri deskripsi Nilai Invalid
4. Tampilkan nama mahasiswa dan deskripsi nilainya.
*/

let name = "fiah";
let score = 80 ;

if(score >= 80 && score <= 100){
    console.log(name + " = " + "A");
} else if(score >= 65 && score <= 79){
    console.log(name + " = " + "B");
} else if(score >= 50 && score <= 64){
    console.log(name + " = " + "C");
} else if(score >= 35 && score <= 49){
    console.log(name + " = " + "D");
} else if(score >= 0 && score <= 34){
    console.log(name + " = " + "E");
} else { 
    console.log("Nilai Invalid");
};







