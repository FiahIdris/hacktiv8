function targetTerdekat(arr) {
    let jarak=0
    //find whether the argument has 'x' or 'not'
    for(var i=0; i<arr.length; i++){
        var check=false
        if(arr[i]==='x'){
            check=true
            break;
        }
    }
    if (check===true){
        //execute the argument with 'x' init
        let index_o= 0
        let index_x= 0
        for(var i=0; i<=arr.length; i++){
            //for index 'o'
            if(arr[i]==='o'){
                index_o= i
                var tmp=true
            //for index 'x'    
            }else if(arr[i]==='x'){
                if(tmp !== true){   /*  if 'o' occured after 'x'  */
                    index_x= i
                }else{              /*  if 'x' occured after 'o'  */
                    index_x=i
                    break;
                }
            }
        }
        //compute jarak based on direction(backward/forward)
        if(index_o < index_x){
            jarak = index_x - index_o
        }else{
            jarak = index_o - index_x
        }  
    }else{
        jarak=0
    }
    return jarak;
}
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
