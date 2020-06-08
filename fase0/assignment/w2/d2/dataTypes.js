var kata = true
if(kata){
    if(typeof kata == "string" ){
        console.log('username ' + kata)
    }else if(typeof kata === "number"){
        console.log('age '+ kata)
    }else if(kata===true){
            console.log('thank you for agreeing')
        }
}else if(kata===false){
    console.log('cannot proceed without agreement')
}else{
    console.log('invalid data')
}

