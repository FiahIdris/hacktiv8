/*
PSEUDOCODE:
SET 'nama' 
SET 'nilai'
SET 'absen'
IF 'nilai' greater than or equal to 70 and 'absen' less than 5 THEN
    display 'lulus'
    ELSE display 'tidak lulus'
ENDIF
*/    

// var nama = "Fiah"
// var nilai = 95
// var absen = 1

// if (nilai >= 70 && absen < 5){
//     console.log(nama + " = Lulus ");
// } else {
//     console.log(nama + " = Tidak Lulus")
// };

var num= 6
for( var i = 1 ; i<num; i++){
    var star= ""
    for( var l=1; l<=i; l++){
        var star=star + "-"
    } 
    for( var k=num*2; k>=i+1; k-=2){
        var star=star + "*"
    }
   console.log(star) 
}
   
   