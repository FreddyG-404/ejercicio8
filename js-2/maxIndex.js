function maxIndex(array){
    let indice = 0;

    if(array.length > 0){ 
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[indice]) {
            indice = i;
            }
        }
        return indice;
    }

    else{
        return undefined;
    }
}
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1

