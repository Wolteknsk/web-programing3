let arr = [[1, 2, 3], [4, 5], [6]];

let sum1 = 0;
for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
        sum1 += arr[i][j];
    }
}
console.log("Сумма элементов (вложенные циклы):", sum1);
alert("Сумма элементов массива: " + sum1);