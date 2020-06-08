var kata= "ada"
var isPalindrome= ""
for(var i=kata.length-1; i>=0; i--){
    isPalindrome+= kata[i]
} 
if (isPalindrome === kata ){
    console.log("true")
}else{
    console.log("false")
}
