/**
 * TARIF PARKIR
 * ============
 * Function tarifParkir bertujuan menghitung biaya parkir pada kendaran mobil dan motor di sebuah gedung.
 * Tarif pada mobil dan motor berbeda, mobil memiliki tarif 4 ribu perjam sementara motor 2 ribu perjam. 
 * Jika kamu parkir hanya 20 menit maka kamu akan mendapatkan tarif 1 jam (pembulatan selalu ke atas). 
 * 
 * Input pada function tarifParkir merupakan object dengan key type, in dan out dan value string. 
 * {
 *   type: (String , tipe kendaraan),
 *   in: (String, jam masuk ke parkiran),
 *   out: (String, jam keluar ke parkiran)
 * }
 * Hitunglah biaya parkirmu berdasarkan infomasi yang kamu dapat dari input!
 * 
 * @param {Object} info
 * 
 * RULES :
 * - Hanya di perbolehkan menggunakan built-in function Math dan built-in function untuk mengubah type data 
 */

function tarifParkir(info) {
    let result = ''
    let durasi= 0
    let start=0
    let finish=0
    let tarif=0

    if(info.type === 'mobil'){
        durasi = parseFloat(info.out) - parseFloat(info.in)
        if(durasi < 1){
            tarif = 4000
        }else{
            tarif = Math.ceil(durasi) * 4000
        }
        
    }
    if(info.type === 'motor'){
        durasi = parseFloat(info.out) - parseFloat(info.in)
        if(durasi < 1){
            tarif = 2000
        }else{
            tarif = Math.ceil(durasi) * 2000
        }
    }
    result= `Tarif terhitung ${Math.ceil(durasi)} jam parkir seharga ${Math.ceil(tarif)}.`
    return result;
}

console.log(tarifParkir({
    type: "motor",
    in: "09.00 WIB",
    out: "12.00 WIB"
})) //Tarif terhitung 3 jam parkir seharga 6000.

console.log(tarifParkir({
    type: "mobil",
    in: "13.00 WIB",
    out: "13.30 WIB"
})) // Tarif terhitung 1 jam parkir seharga 4000.

console.log(tarifParkir({
    type: "motor",
    in: "12.30 WIB",
    out: "17.00 WIB"
})) // Tarif terhitung 5 jam parkir seharga 10000.

console.log(tarifParkir({
    type: "mobil",
    in: "10.30 WIB",
    out: "21.45 WIB"
})) // Tarif terhitung 14 jam parkir seharga 56000.