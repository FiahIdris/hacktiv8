var kata = "i love javascript"
var word = ""
for (var i=0; i<kata.length; i++){
    var ltr= kata[i]
    if(ltr == "a" || ltr == "i" || ltr == "u" || ltr == "e" || ltr =="o") {
        word=word+ "$"
    } else {
        word= word + ltr
    }
} 
console.log(word)

var kata = 'i love javascript'; // 17 chars
var kamus = 'aiueo';
// output : '$ l$v$ j$v$scr$pt'
​
var output = '';
​
for(var i = 0; i < kata.length; i++) {
    //console.log('huruf yang diproses = ' + kata[i]);
​
    var ketemu = false;
    for(var j = 0; j < kamus.length; j++) {
        //console.log('membandingkan ' + kata[i] + ' dengan ' + kamus[j]);
​
        if(kata[i] === kamus[j]) {
            //console.log('ada dalam kamus');
            ketemu = true;
        }
    }
​
    if(ketemu === true) {
        output = output + '$';
    }
    else {
        output = output + kata[i];
    }
}
​
console.log(output);



