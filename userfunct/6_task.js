function divideByTwo(num) {
    let count = 0;
    let result = num;
    
    while(result >= 10) {
        result = result / 2;
        count++;
    }
    
    return {
        iterations: count,
        finalNumber: result
    };
}

let userNumber = prompt("Введите число:");
userNumber = Number(userNumber);

if(!isNaN(userNumber) && userNumber > 0) {
    let result = divideByTwo(userNumber);
    let message = "Исходное число: " + userNumber + "\n";
    message += "Количество делений на 2: " + result.iterations + "\n";
    message += "Конечное число: " + result.finalNumber;
    
    alert(message);
    console.log(message);
} else {
    alert("Ошибка! Введите корректное положительное число");
}