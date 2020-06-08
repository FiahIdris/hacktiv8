/*
Instruksi
=========
Di negara Agrabah, seseorang akan mengurus perpajakan. Untuk bisa mengurus, seseorang harus memiliki beberapa informasi:
1. name: nama yang tertera di KTP (harus memiliki nama, tidak boleh kosong)
2. age: umur pendaftar. Untuk bisa mengurus, minimal berumur 17 tahun.
3. citizenship: kewarganegaraan pendaftar.
Program akan melakukan tahap-tahap berikut:
Step 1. Jika name kosong, maka tampilkan di console "NAMA ANDA KOSONG! TIDAK BISA DAFTAR!" dan hentikan program.
Step 2. Jika age dibawah 17 tahun, maka tampilkan di console "BELUM CUKUP UMUR!" dan hentikan program.
Step 3. program akan mengenerate Tax ID dengan format:
  AGB-<KODE> => untuk pendaftar yang warga negara 'agrabah'. <KODE> mewakili jumlah karakter dari name ditambah age.
  NAGB-<KODE> => untuk pendaftar yang bukan warga negara 'agrabah'. <KODE> mewakili jumlah karakter dari name ditambah age.
  Contoh:
  Untuk yang citizenship = 'agrabah' dengan name = 'aladdin', age = 27,
  maka ubah taxID menjadi 'AGB-34'.
  Untuk yang citizenship = 'arab' dengan name = 'jasmine', age = 23,
  maka ubah taxID menjadi 'NAGB-30'.

Rules :
- Dilarang menggunakan built-in function kecuali: 
    + bulit-in function untuk mengubah type data (Converter, string -> number / number -> string)
    + built-in function Math
    + .toUpperCase() & .toLowerCase()
- Jangan mengubah penaman variabel yang telah diberikan (name, age, citizenship, dan taxID)
- Dipersilahkan mengganti nilai dari name, age dan citizenship secara manual dan gantilah taxID sesuai dengan ketentuan program.


*/
// SKELETON CODE (Code Sample)
var name = "jasmine"; // silakan berikan nilai bebas
var age = 23; // silakan berikan nilai bebas
var citizenship = "arab"; // silakan berikan nilai bebas
var taxID= '' // nilainya jangan di-assign langsung. gunakan program untuk mengisi ini!
// Buat code disii
var kode = age + (name.length)
 
if(name === "" ){
  console.log('NAMA ANDA KOSONG! TIDAK BISA DAFTAR!')
}else if(age < 17){
  console.log('BELUM CUKUP UMUR!')
}else if(citizenship ==='agrabah'){
  taxID= `AGB-${kode}`
}else if(citizenship==="arab"){
  taxID= `NAGB-${kode}`
}

console.log(taxID)

// `AGB-${kode}`
 
 
 
 


