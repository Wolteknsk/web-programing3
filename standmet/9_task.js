let arr = [1, 2, 3, 4, 5];
let hasThree3 = false;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 3) {
        hasThree3 = true;
        break;
    }
}
console.log("Проверка через цикл for:", hasThree3);
let message = "Проверка наличия числа 3 в массиве [" + arr + "]:\n\n";
message += hasThree1 ? "Число 3 найдено в массиве" : "Число 3 не найдено в массиве";
alert(message);