/**
 * FILTER MOVIES
 * =============
 * Terdapat sebuah list movie dengan informasi setiap movie yaitu title, profit, genre dan rating.
 * Filter list film dengan menggunakan function filterMovie yang memiliki tiga parameter yaitu:
 * - movies ( Array Multidimensi, kumpulan/list movie)
 * - genre ( String )
 * - star ( Number )
 * 
 * Inner array pada movies memiliki format seperti beriku:
 * [ <title> , <profit> , <genre> , <rating> ]
 * 
 * Function ini akan melakukan filter movies sesuai dengan genre dan movies memiliki rating diatas parameter star. 
 * Function menghasilkan output berupa Array of Object dengan format berikut: 
 * [ 
 *  {
 *    title: <title>,
 *    profit: "Rp. <profit>", 
 *    rating: <rating>
 *  }
 * ]
 * Apabila tidak menemukan movie yang sesuai dengan pencarian maka output []
 * 
 * RULES :
 * - Dilarang menggunakan built-in function selain .push
 */

function filterMovie(movies, genre, star) {
    let result = []
    
    for(var i=0; i<movies.length; i++){  
             
        if(movies[i][3].length > star && genre === movies[i][2]){
            let obj = {} 
            obj.title = movies[i][0]
            obj.profit = movies[i][1]
            obj.rating = movies[i][3].length
            result.push(obj)
        } 
    }
    return result
}

const childrenMovies = [
    ['Balto', 4000000, 'Animation', '***'],
    ['Casper', 9000000, 'Family', '******'],
    ['Lion King', 13000000, 'Animation', '*******'],
    ['Matilda', 7000000, 'Fantasy', '******'],
    ['Toy Story', 15000000, 'Animation', '********']
]
console.log(filterMovie(childrenMovies, 'Animation', 3))
/**
 * [
 *  { title: 'Lion King', profit: 'Rp. 13000000', rating: 7 },
 *  { title: 'Toy Story', profit: 'Rp. 15000000', rating: 8 }
 * ]
 */

const bradPittMovies = [
    ['Seven', 10000000, 'Crime', '********'],
    ['Fight Club', 11000000, 'Action', '********'],
    ['Troy', 45000000, 'Action', '******'],
    ['Megamind', 7000000, 'Animation', '*******'],
    ['Fury', 12500000, 'Action', '********'],
    ['Benjamin Button', 35000000, 'Romance', '**********'],
    ['Allied', 11000000, 'Romance', '*******']
]

console.log(filterMovie(bradPittMovies, 'Action', 5))
/**
 * [
 *  { title: 'Fight Club', profit: 'Rp. 11000000', rating: 8 },
 *  { title: 'Troy', profit: 'Rp. 45000000', rating: 6 },
 *  { title: 'Fury', profit: 'Rp. 12500000', rating: 8 }
 *]
 */


console.log(filterMovie(bradPittMovies, 'Drama', 7))
// []