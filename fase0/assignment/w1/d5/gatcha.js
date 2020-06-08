/*
PSEUDOCODE Gatcha Switch-Case:
GET integer random 'number' between 1 to 5
CASE total kupon OF
    1 : Print "coba lagi ya"
    2 : Print "selamat kamu mendapatkan kupon sebanyak 5"
    3 : Print "selamat kamu mendapatkan kupon sebanyak 15"
    4 : Print "selamat kamu mendapatkan kupon sebanyak 50"
    5 : Print "WOW, kamu menang jackpot! Selamat!!"
ENDCASE    
*/

var player = Math.ceil(Math.random()*5);

switch (player){
    case 1 : console.log("coba lagi ya"); break;
    case 2 : console.log("selamat kamu mendapatkan kupon sebanyak 5"); break;
    case 3 : console.log("selamat kamu mendapatkan kupon sebanyak 15");break;
    case 4 : console.log("selamat kamu mendapatkan kupon sebanyak 50");break;
    case 5 : console.log("WOW, kamu menang jackpot! Selamat!!");break;
}
