let kalimat = "I love to program"
let wordCount = 0
for(var i=0; i<kalimat.length-1; i++){
    if (kalimat[i] === " "){
        wordCount+= +1
    } 
}
wordCount+=1
console.log(wordCount)
