
/**
 * TOTAL PAKAIAN 
 * =============
 * Hitunglah pakaian dengan ukuran tertentu pada lemari menggunakan function totalPakaian. 
 * Function totalPakaian memiliki dua parameter berupa `size` (String) sebagai ukuran 
 * dan `clothes` (Array of String) yaitu lemari/kumpulan pakaian. 
 * 
 * String pada clothes memiliki format "<jenis_pakaian> <ukuran>"
 * jenis_pakaian : Celana, Jaket, Kaos, Kemeja, etc. 
 * ukuran : S , M , L 
 * 
 * RULES :
 * - Wajib menuliskan pseudocode
 * - Dilarang menggunakan built-in function selain .push
 */

/**
 * Pseudocode
 *  BEGIN
 *  SET size
 *  SET clothes
 *  SET variable to number 0
 *  SET start to 0 
 *  FOR end to clothes length
 *      FOR start to 0, end clothes index length
 *          IF index === space
 *              IF index+1 === size THEN
 *                  variable = + 1
 *              ELSE
 *                 DISPLAY `Pakaian berukuran ${size} pada lemari tidak ditemukan`
 *             ENDIF
 *          ENDIF
 *      ENDFOR
 *  ENDFOR
 *  DISPLAY   `Di lemari terdapat (variable) buah pakaian berukuran (size)
 *                  '
 * 
 *      
 */

function totalPakaian(size, clothes) {
    let result =''
    var count = 0

    for(var i=0; i<clothes.length; i++){
        for(var j=0; j<clothes[i].length; j++){
            var check = false
            if(clothes[i][j] === " "){
                if(clothes[i][j+1] === size){
                    check = true
                    count= count+1
                }
            }    
        } 
    }
    if(count === 0){
        result =`Pakaian berukuran ${size} pada lemari tidak ditemukan.`
    }else{
        result= `Di lemari terdapat ${count} buah pakaian berukuran ${size}`
    }
    
    return result;
}

let wardrobe1 = ['Rok M', 'Kaos M', 'Jaket S', 'Kemeja M']
console.log(totalPakaian('L', wardrobe1))
// Pakaian berukuran L pada lemari tidak ditemukan.

let wardrobe2 = ['Celana M', 'Kaos S', 'Rok S', 'Jaket M', 'Kemeja S', 'Jaket L']
console.log(totalPakaian('S', wardrobe2))
// Di lemari terdapat 3 buah pakaian berukuran S.

let wardrobe3 = ['Rok S', 'Kaos S', 'Celana M', 'Jaket M', 'Rok S', 'Jaket S']
console.log(totalPakaian('M', wardrobe3))
// Di lemari terdapat 2 buah pakaian berukuran M.

let wardrobe4 = ['Rok S', 'Kaos S', 'Jaket L', 'Rok S', 'Jaket M']
console.log(totalPakaian('L', wardrobe4))
// Di lemari terdapat 1 buah pakaian berukuran L.