function max(array){
    var mayor = 0;
    if(array.length > 0){ 

    for(let i = 0; i < array.length; i++){
        if(array[i] > mayor){
            mayor = array[i];
        }  
    }
    return mayor;
    }
    
    else {
        return undefined;
    } 

   
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined