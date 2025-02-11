function sumThreeNumbers(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    console.log("Сумма чисел:", sum);
    alert("Сумма чисел " + num1 + " + " + num2 + " + " + num3 + " = " + sum);
    return sum;
}
let number1 = prompt("Введите первое число:");
let number2 = prompt("Введите второе число:");
let number3 = prompt("Введите третье число:");

number1 = Number(number1);
number2 = Number(number2);
number3 = Number(number3);

if(!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
    sumThreeNumbers(number1, number2, number3);
} else {
    alert("Ошибка! Введите корректные числа");
    console.log("Ошибка! Введены некорректные данные");
}