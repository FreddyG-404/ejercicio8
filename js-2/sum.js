
function sum(array) {
    let suma_array = 0;
    for (let i = 0; i < array.length; i++) {
      suma_array += array[i];
    }
    return suma_array;
  }

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0