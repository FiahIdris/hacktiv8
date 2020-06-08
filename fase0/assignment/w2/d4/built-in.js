//1.Anrtrian
let name= ['fiah', 'nur', 'amel']
function antrian(line,person){
    line.push(person)
   return line;
}
console.log(antrian (name,'idris'));
 

// //2.Panggil Antrian
function panggilAntrian (line){
    line.shift()
    return line;
}
console.log (panggilAntrian(name))

// //3.Tumpukan

function tumpukan(line,title){
    line.unshift(title)
    return line;
}
console.log(tumpukan(name,'muhammad'))

// //4.Ganjil Genap

function ganjilGenap(plat){
    if (plat === undefined){
        return `invalid data`
    }else{
        let ganjil=0
        let genap=0
        for(var i=0; i<plat.length; i++){
            if(plat[i]===';'){
                if(Number(plat[i-1]) % 2===0){
                    genap+=1
                }else{
                  ganjil+=1
                }
            }else if(i === plat.length-1){
                if(Number(plat[i])%2===0){
                   genap+=1
                }else{
                   ganjil+=1
                }
            }
        } 
       if(genap>0 && ganjil>0){
            return `plat genap sebanyak ${genap} dan plat ganjil sebanyak ${ganjil}`
        }else if(ganjil>0 && genap===0){
            return `plat ganjil sebanyak ${ganjil} dan plat genap tidak ditemukan`
        }else if (genap>0 && ganjil === 0){
            return `plat genap sebanyak ${genap} dan plat ganjil tidak ditemukan`
        }else if(plat===''){
            return `plat tidak ditemukan`
        } 

    }
      
}     
console.log (ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')) //plat tidak ditemukan
console.log(ganjilGenap()) //invalid data
