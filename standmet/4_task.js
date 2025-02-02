let numbers = [4, -2, 5, 19, -130, 0, 10];

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log("Массив чисел:", numbers);
console.log("Минимальное число:", min);
console.log("Максимальное число:", max);

let message = "Результаты:\n\n";
message += "Минимальное число: " + min + "\n";
message += "Максимальное число: " + max;
alert(message);

let minNum = numbers[0];
let maxNum = numbers[0];

for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] < minNum) {
        minNum = numbers[i];
    }
    if(numbers[i] > maxNum) {
        maxNum = numbers[i];
    }
}
console.log("\nРезультаты через цикл:");
console.log("Минимальное число:", minNum);
console.log("Максимальное число:", maxNum);