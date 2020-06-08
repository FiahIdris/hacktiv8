// //Releaso 0

function sorting(array) {
    for(var i=0; i<array.length; i++){
        for(var j=0; j<array.length; j++){
            if(array[j]>array[j+1]){
                var tmp=array[j+1]
                array[j+1]=array[j]
                array[j]=tmp
            }
        }
    }
    return array;
}
  
  console.log(sorting([ 2, 4, 6, 8, 2, 3 ])); //[ 2, 2, 3, 4, 6, 8 ]

// //Release 1

function sortingByType(array) {
    let num=[]
    let str=[]
    let boolean=[]
    for(var i=0; i<array.length; i++){
        if(typeof array[i] === 'number'){
            num.push(array[i])
        }else if(typeof array[i]=== 'string'){
            str.push(array[i])
        }else{
            boolean.push(array[i])
        }
    }
    for(var i=0; i<num.length;i++){
        for(var j=0; j<num.length; j++){
            if(num[j]>num[j+1]){
                var tmp=num[j+1]
                num[j+1]=num[j]
                num[j]=tmp
            }
        }
    }
    for(var i=0; i<str.length;i++){
        for(var j=0; j<str.length; j++){
            if(str[j]>str[j+1]){
                var tmp=str[j+1]
                str[j+1]=str[j]
                str[j]=tmp
            }
        }
    }
    for(var i=0; i<boolean.length;i++){
        for(var j=0; j<boolean.length; j++){
            if(boolean[j]>boolean[j+1]){
                var tmp=boolean[j+1]
                boolean[j+1]=boolean[j]
                boolean[j]=tmp
            }
        }
    }
    let result= [num,str,boolean]
    return result;
}
  
  console.log(sortingByType([ 1, 3, 'array', -45, true, false, 'big' ]));
  // [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]


// Release 2
function sortAllClean(array) {
    let newArray= []
    let num=[]
    let str=[]
    let boolean=[]
   
    for(var i=0; i<array.length;i++){
        if(array[i] || array[i]===false){
            newArray.push(array[i])
        }else{
            array=== "undefined"
        }
    }
    for(var i=0; i<newArray.length; i++){
       
        if( typeof newArray[i]==='string'){
            str.push(newArray[i])
        }else if (typeof newArray[i]==='boolean'){
            boolean.push(newArray[i])
        }else if(typeof newArray[i]==='number'){
            num.push(newArray[i])
        }
        
    }
    for (var i=0; i<num.length; i++){
        for(var j=0; j<num.length; j++){
            if(num[j]>num[j+1]){
                var tmp=num[j+1]
                num[j+1]=num[j]
                num[j]=tmp
            }
        }
    }
    for (var i=0; i<str.length; i++){
        for(var j=0; j<str.length; j++){
            if(str[j]>str[j+1]){
                var tmp=str[j+1]
                str[j+1]=str[j]
                str[j]=tmp
            }
        }
    }
    for (var i=0; i<boolean.length; i++){
        for(var j=0; j<boolean.length;j++){
            if(boolean[j]>boolean[j+1]){
                var tmp=boolean[j+1]
                boolean[j+1]=boolean[j]
                boolean[j]=tmp
            }
        }
    }
    var result=[]
   
    if(num.length != 0){
        result.push(num)
    }
    if(str.length != 0){
        result.push(str)
    }
    if(boolean.length !=0){
        result.push(boolean)
    }
    
    return result;
}
  
  console.log(sortAllClean([ undefined, null, 456, 'def', NaN, [], true, 123, 'bcd', false]));
  //[ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]
  
  console.log(sortAllClean([ NaN, undefined ])); // []


