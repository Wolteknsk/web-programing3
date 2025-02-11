function getSquareRoot(num) {
    return Math.sqrt(num);
}

let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");

num1 = Number(num1);
num2 = Number(num2);

if(!isNaN(num1) && !isNaN(num2) && num1 >= 0 && num2 >= 0) {
    let root1 = getSquareRoot(num1);
    let root2 = getSquareRoot(num2);
    let sum = root1 + root2;
    
    let message = "Корень из " + num1 + ": " + root1 + "\n";
    message += "Корень из " + num2 + ": " + root2 + "\n";
    message += "Сумма корней: " + sum;
    
    alert(message);
    console.log(message);
} else {
    alert("Ошибка! Введите корректные положительные числа");
}