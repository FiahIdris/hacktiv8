/**
 * ===================
 * Kandidat Programmer
 * ===================
 *
 * Buatlah sebuah sistem peneriman calon programmer yang akan menerima dua nilai ( nilai coding dan nilai interview).
 * Untuk penilaain test coding skala penilaian yang diberikan dimulai dari 0 hingga 100 dengan sistem penilaian
 * ketika seseorang mendapatkan nilai lebih dari 80 maka peserta tersebut akan mendapatkan hasil tes LOLOS,
 * ketika sesorang mendapatkan nilai diantara 60 hingga 80 maka peserta tersebut mendapatkan hasil tes DIPERTIMBANGKAN,
 * ketika seseorang mendapatkan nilai dibawah 60 maka peserta tersebut mendapatkan hasil tes GAGAL.
 *
 * Untuk penialian interview ketika nilai yang diberikan kepada seseorang tersebut adalah "A" atau "B" maka peserta tersebut dianggap LOLOS interview,
 * dan selain kedua nilai tersebut maka peserta dianggap GAGAL tes interview.
 *
 * Ketika calon programmer mendapatkan nilai coding LOLOS atau DIPERTIMBANGKAN dan juga LOLOS test interview maka tampilkanlah pesan "Selamat Kamu Berhasil Menjadi Calon Programmer"
 * Jika tidak maka tampilkanlah pesan "Maaf Kamu Belum Berhasil Menjadi Calon Programmer"
 *
 *  ===========
 *  INSTRUKSI
 *  ===========
 *  Buatlah pseudocode dari kasus di atas
 *
 */
/*
SET nilai coding
SET nilai interview
SET nilai ratarata as nilai codding+nilai interview / 2
IF nilai > 80 && nilai <= 100 THEN
    Display 'Selamat Kamu Berhasil Menjadi Calon Programmer'
ELSE IF nilai >= 60 and nilai <= 80 THEN   
    Display 'Selamat Kamu Berhasil Menjadi Calon Programmer'
ELSE IF nilai < 60  && nilai >= 0 THEN
    Display  'Maaf Kamu Belum Berhasil Menjadi Calon Programmer'
ENDIF    
