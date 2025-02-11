function checkEvenNumbers(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}

let userInput = prompt("Введите числа через запятую:");
let numbers = userInput.split(',').map(Number);

if(numbers.some(isNaN)) {
    alert("Ошибка! Введите корректные числа");
} else {
    let result = checkEvenNumbers(numbers);
    let message = "Массив: [" + numbers + "]\n";
    message += "Все числа четные: " + (result ? "Да" : "Нет");
    
    alert(message);
    console.log(message);
}