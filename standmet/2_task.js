let numbers = [4, 2, 5, 19, 13, 0, 10];

let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 3);
}

let result = Math.sqrt(sum);

console.log("Исходный массив:", numbers);
console.log("Сумма кубов элементов:", sum);
console.log("Квадратный корень из суммы кубов:", result);

let message = "Результаты вычислений:\n\n";
message += "Сумма кубов элементов: " + sum + "\n";
message += "Квадратный корень из суммы кубов: " + result;
alert(message);
