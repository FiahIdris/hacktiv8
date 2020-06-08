/**
 * =============
 * Combine Array
 * =============
 * 
 * Combine Array adalah sebuah fungsi yang akan menerima satu input sebuah array multi dimensi. 
 * Ubahlah array multi dimensi ini menjadi sebuah kalimat.
 *
 * Setiap baris pada array multi dimensi ini adalah sebuah kata dan berikan lah spasi (' ') untuk memisahkan satu kata dengan kata yang lain.
 *
 * Ketika terdapat charater '#', '!', '@', '*' maka karakter tersebut tidak akan dimasukan pada kata yang kita hasilkan.
 *
 * Contoh:
 *
 * Input Array Multi dimensi: [['I'], ['L', 'O', 'V', 'E'], ['C', 'O', 'D', 'I', 'N', 'G']]
 * Output: I LOVE CODING
 *
 * Input Array Multi DImensi:
 * [
 *   ['H', 'A', 'C', 'K', 'T', 'I', 'V', '@', '!', '*', 8],
 *   ['C', 'O', 'D', 'I', 'N', 'G'],
 *   ['B', 'O', 'O', 'T', 'C', 'A', '#', 'M', 'P']
 * ]
 * Output: HACKTIV8 CODING BOOTCAMP (  charater '#', '!', '@', '*' tidak dimasukkan ke dalam hasil akhir )
 *
 * Rules : 
 * - DILARANG menggunakan built-in function selain .push
 */

function combineArray(array) {
  // insert your code here
  let result = ''

  var dict = '#!@*'
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      var isDIct = false
      for (var k = 0; k < dict.length; k++) {
        if (array[i][j] === dict[k]) {
          isDIct = true
          break;
        }
      } if (isDIct === false) {
        result += array[i][j]
      }

    } result += ' '
  }

  return result;
}

console.log(combineArray([['I'], ['L', 'O', 'V', 'E'], ['C', 'O', 'D', 'I', 'N', 'G']])) // I LOVE CODING
console.log(combineArray([
  ['H', 'A', 'C', 'K', 'T', 'I', 'V', '@', '!', '*', 8],
  ['C', 'O', 'D', 'I', 'N', 'G'],
  ['B', 'O', 'O', 'T', 'C', 'A', '#', 'M', 'P']
]))
// // HACKTIV8 CODING BOOTCAMP
console.log(combineArray([['P', 'H', 'A', 'S', 'E'], [0], ['S', 'U', 'K', 'S', 'E', '!', 'S']]))
// // PHASE 0 SUKSES