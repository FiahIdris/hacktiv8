/**
 * ===================
 * Get Dominant Number
 * ===================
 * 
 * Telah sediakan sebuah function getDominant yang memiliki input array of numbers.
 * Tugasmu untuk mencari angka dominan (angka paling banyak) dari input apakah angka postif atau negatif? 
 * Apabila bila tidak ditemukan angka yang dominan maka output "No dominant number."
 * Jika input bukan merupakan array maka output "Invalid input"
 * 
 * Rules : 
 * - WAJIB menuliskan pseudocode
 * - Hanya di perbolehkan menggunakan built-in function yang informatif 
 *   (isNaN, isArray, isInteger) , typeof dan push 
 */

/**
 * PSEUDOCODE
 * IF numbers length equal to 0 THEN
 *  RETURN 'No dominant number.'
 * ELSE IF type of numbers not equal to object THEN
 *  RETURN 'Invalid input.'
 * ELSE  
    * SET Display with empty value
    * SET Positif with number 0 
    * SET Negative with number 0
    * FOR each numbers
    *    INCREAMENT 1
    *     IF numbers equal to positif THEN
    *      ADD Positif with 1
    *    ELSE IF numbers equal to negative THEN
    *      ADD Negative with 1
    *    END IF
    * END FOR
    * IF Positif greater than Negative THEN
    *    DISPLAY 'Dominant number is POSITIVE.'
    * ELSE IF Negative greater than Positive THEN
    *    DISPLAY 'Dominant number is NEGATIVE.'
    * ELSE
    *    DISPLAY 'No dominant number.'
    * RETURN DISPLAY
    * END IF
 * END IF 
 * 
 */
function getDominant(numbers) {
  // // your code here
  if (numbers.length === 0) {
    return 'No dominant number'
  } else if (typeof numbers !== 'object') {
    return 'Invalid input.'
  } else {
    let result = ''

    let positive = 0
    let negative = 0
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0) {
        negative++
      } else {
        positive++
      }
    }

    if (positive > negative) {
      result = 'Dominant number is POSITIVE.'
    } else if (positive < negative) {
      result = 'Dominant number is NEGATIVE.'
    } else if (positive === negative) {
      result = 'No dominant number.'
    }
    return result;
  }

}

console.log(getDominant([100, -4, -33, -22])) // Dominant number is NEGATIVE.
console.log(getDominant([10, -22, 1, 2])) // Dominant number is POSITIVE.
console.log(getDominant([33, 0, -1, -2])) // No dominant number.
console.log(getDominant([])) //  No dominant number
console.log(getDominant('1234')) // Invalid input.
console.log(getDominant(100)) // Invalid input.
console.log(getDominant(true)) // Invalid input.