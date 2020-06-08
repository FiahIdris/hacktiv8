//input = arr && num
//output = arr md
function sittingArrangement(person, column) {
    if(column===0){
        return 'Invalid number'
    }else{
        let result = []
        var i=0
        while(i<person.length){
            var groupOfPeople=[]
            for(var j=i; j<column+i;j++){
                if(person[j]){
                    groupOfPeople.push(person[j])
                }else{
                    groupOfPeople.push('Kursi Kosong')
                }
            }
            result.push(groupOfPeople)
            i+=column
        }
        return result;
    }
}

  
  //DRIVER CODE
  
  console.log(sittingArrangement(['A', 'B', 'C'], 0 )); //Invalid number
  console.log(sittingArrangement([ 'Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji' ], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
  console.log(sittingArrangement([ 'Yosia', 'Asrawi', 'Andru' ], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
  console.log(sittingArrangement([ 'Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion' ], 4));
  // [
  //   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
  //   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
  // ]