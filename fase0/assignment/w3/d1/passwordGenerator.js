//changeVocals
function changeVocals (str) {
    let newStr=''
    for(var i=0; i<str.length; i++){
        switch(str[i]){
            case 'a':
                newStr+='b'
                break;
            case 'i' :
                newStr+='j' 
                break;  
            case 'u':
                newStr+='v'
                break;
            case 'e':
                newStr+='f'
                break;
            case 'o':
                newStr+='p' 
                break;
            case 'A':
                newStr+='B'
                break;
            case 'I':
                newStr+='J'  
                break;
            case 'U':
                newStr+='V'
                break;
            case 'E':
                newStr+='F'
                break;
            case 'O':
                newStr+='P'
                break;
            default :
                newStr+=str[i]   
                break;
            }
    }        

    return newStr;
}


//reverseWord  
function reverseWord (str) {
  let newStr=''
  for(var i=str.length-1; i>=0;i--){
      newStr+=str[i]
  }
  return newStr;
}

//setLowerUpperCase  
function setLowerUpperCase (str) {
    let newStr=''
    for(var i=0; i<str.length; i++){
        if(str[i]===str[i].toUpperCase()){
            newStr+=str[i].toLowerCase()
        }else if(str[i]===str[i].toLowerCase()){
            newStr+=str[i].toUpperCase()
        }
    }
    return newStr;
}

//removeSpace
function removeSpaces (str) {
    let newStr=''
    for(var i=0; i<str.length; i++){
        if(str[i]===' '){
            break;
        }else{
            newStr+=str[i]
        }
    }
    for(var j=i+1; j<str.length;j++){
        newStr+=str[j]
    }
    return newStr;
}

 //set passwordGenerator 
function passwordGenerator (name) {

    if(name.length>=5){
        let changeVokals= changeVocals (name)
        let wordReverse = reverseWord (changeVokals)
        let upperLowerCase = setLowerUpperCase (wordReverse)
        let result= removeSpaces (upperLowerCase)
    
        return result;
    }else{
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
}
  
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'