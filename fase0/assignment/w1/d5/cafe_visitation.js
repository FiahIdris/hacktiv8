/*
PSEUDOCODE Cafe Visitation:

GET 'name'
GET 'age'
GET 'money'
IF 'name' equal to true THEN
    IF 'age' less than 17 THEN
        IF 'money' greater than or equal to 50000 THEN
           Display "Anda bisa pesan minum. Sisa uang anda:['money'-50000]"
        ELSE 
           Display "Uang tidak cukup. Anda harus pulang"
    ELSE IF 'age' greater than or equal to 17 THEN
        IF 'money' greater than or equal to 100000 THEN    
           Display "Anda bisa pesan minum. Sisa uang anda:['money'-100000]"
        ELSE 
           Display "Uang tidak cukup. Anda harus pulang"
ELSE "Anda tidak boleh masuk!"   
*/

var name = " "
var age = 18
var money = 50000

if(name){
    if(age < 17){
        if(money>=50000){
            console.log("Anda bisa pesan minum. Sisa uang anda: " + (money-50000));
        }else {
            console.log("Uang tidak cukup. Anda harus pulang")
        }
    } else if(age >= 17){
        if(money>=100000){
            console.log("Anda bisa pesan minum. Sisa uang anda: " + (money-100000));
        } else{
            console.log("Uang tidak cukup, anda harus pulang")
        }
    }
} else {
    console.log("Anda tidak boleh masuk")
};
