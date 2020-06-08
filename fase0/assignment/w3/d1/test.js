/*
case 3 :
    
    membuat fungsi dengan parameter kalimat, yang akan membagi kalimat, yang ditampung dalam array multidimensi per-kata kemudian dalam setiap kata per-huruf

    function bagiKalimatPerKata(kalimat) {

    }
    
    function bagiKataPerHuruf(kata) {

    }

    function bagiKalimatPerKataPerHuruf(kalimat) {

    }

    console.log(bagiKalimatPerKataPerHuruf('Say Yes To Code'));

    output: 
    [
        ['S', 'a', 'y'],
        ['Y', 'e', 's'],
        ['T', 'o'],
        ['C', 'o', 'd', 'e']
    ]

*/

// input : string 'Say Yes To Code'
// output : array of kata ['Say', 'Yes', 'To', 'Code']
function bagiKalimatPerKata(kalimat) {
    let result = [];

    let tmp = '';
    for(let i = 0; i < kalimat.length; i++) {
        let perHuruf = kalimat[i];
        if(perHuruf === ' ') { // spasi
            result.push(tmp);
            tmp = '';
        }
        else if(i === kalimat.length - 1) // huruf terakhir
        {
            tmp += perHuruf;
            result.push(tmp);
            tmp = '';
        }
        else { // huruf biasa
            tmp += perHuruf;
        }
    }

    return result;
}
console.log(bagiKalimatPerKata('Say Yes To Code'));

// input : string Say
// output : array of huruf ['S', 'a', 'y']
function bagiKataPerHuruf(kata) {
    let result = [];

    for(let i = 0; i < kata.length; i++) {
        let perHuruf = kata[i];
        result.push(perHuruf);
    }

    return result;
}
console.log(bagiKataPerHuruf('Say'));

// input: string
// output: array md
function bagiKalimatPerKataPerHuruf(kalimat) {
    let result = [];

    let kalimatPerKata = bagiKalimatPerKata(kalimat); // ['Say', 'Yes', 'To', 'Code']
    for(let i = 0; i < kalimatPerKata.length; i++) {
        let perKata = kalimatPerKata[i]; // Say
        let perKataPerHuruf = bagiKataPerHuruf(perKata); // ['S', 'a', 'y']
        result.push(perKataPerHuruf);
    }

    return result;
}

console.log(bagiKalimatPerKataPerHuruf('Say Yes To Code'));
// output: 
// [
//     ['S', 'a', 'y'],
//     ['Y', 'e', 's'],
//     ['T', 'o'],
//     ['C', 'o', 'd', 'e']
// ]