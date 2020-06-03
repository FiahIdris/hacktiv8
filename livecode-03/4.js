/*
===================
Playlist Generator
===================
playlistGenerator adalah sebuah function yang menerima 2 parameter berupa list dan country.
function ini akan menghasilkan sebuah array of string nama penyanyi berdasarkan parameter country yang sudah diurutkan berdasarkan totalSong yang dimiliki penyanyi tersebut.
Function ini wajib menggunakan modular function, silahkan kalian kerjakan sesuai dengan skeleton code yang sudah dibuat.

[EXAMPLE]
INPUT :
list = [
  { name: "IU", country: "Korea", totalSong: 21 },
  { name: "Alun Walker", country: "US", totalSong: 24 },
  { name: "Semmi Simorangkir", country: "Indonesia", totalSong: 18 },
  { name: "Adam Levine", country: "Indonesia", totalSong: 20 }
]
country = 'Indonesia'
PROSES :
1. playlistGenerator akan melakukan filter list bedasarkan country, maka akan menghasilkan:
[
  { name: "Semmi Simorangkir", country: "Indonesia", totalSong: 18 },
  { name: "Adam Levine", country: "Indonesia", totalSong: 20 }
]
2. Kemudian dari hasil tersebut akan di-sort-ing sesuai dengan totalSong yang dimiliki, maka akan menghasilkan:
[
  { name: "Adam Levine", country: "Indonesia", totalSong: 20 },
  { name: "Semmi Simorangkir", country: "Indonesia", totalSong: 18 }
]
3. kemudian dari hasil sorting tersebut, membuat array baru yang berisi nama penyanyi:
['Adam Levine', 'Semmi Simorangkir']
OUTPUT :
['Adam Levine', 'Semmi Simorangkir']

Rules :
- DILARANG menggunakan built in function .sort
- DILARANG menggunakan REGEX
*/

function filterCountry(list, country) {
  // your code here
  let result = []

  for (var i = 0; i < list.length; i++) {
    if (list[i].country === country) {
      result.push(list[i])
    }
  }

  return result;
}


function sortTotalSong(list) {
  // your code here
  var isSorted = false
  while (isSorted === false) {
    var isSwapping = false
    for (var i = 0; i < list.length - 1; i++) {
      if (list[i].totalSong < list[i + 1].totalSong) {
        var tmp = list[i + 1]
        list[i + 1] = list[i]
        list[i] = tmp
        isSwapping = true
      }
    } if (isSwapping === false) {
      isSorted = true
    }
  }
  return list;
}

function extractName(list) {
  // your code here
  let result = []
  for (var i = 0; i < list.length; i++) {
    result.push(list[i].name)
  }
  return result;
}

function playlistGenerator(list, country) {
  let filter = filterCountry(list, country)
  let sort = sortTotalSong(filter)
  let result = extractName(sort)
  return result
}

const singers = [
  { name: "IU", country: "Korea", totalSong: 21 },
  { name: "Alun Walker", country: "US", totalSong: 24 },
  { name: "Dimas Styles", country: "UK", totalSong: 22 },
  { name: "Hatsune Wika", country: "Japan", totalSong: 30 },
  { name: "Semmi Simorangkir", country: "Indonesia", totalSong: 18 },
  { name: "Taylor Swift", country: "US", totalSong: 13 },
  { name: "Taeyon", country: "Korea", totalSong: 21 },
  { name: "Adam Levine", country: "Indonesia", totalSong: 20 },
  { name: "Niall Horan", country: "Japan", totalSong: 22 },
  { name: "Liam Payne", country: "UK", totalSong: 25 },
  { name: "Jennie", country: "Korea", totalSong: 24 },
  { name: "Raisa", country: "Indonesia", totalSong: 25 }
]

console.log(playlistGenerator(singers, "Indonesia"))
// [ 'Raisa', 'Adam Levine', 'Semmi Simorangkir' ]
console.log(playlistGenerator(singers, "Korea"))
// // [ 'Jennie', 'IU', 'Taeyon' ]
console.log(playlistGenerator(singers, "UK"))
//   // [ 'Liam Payne', 'Dimas Styles' ]