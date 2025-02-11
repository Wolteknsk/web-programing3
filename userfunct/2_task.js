function checkNumber(num) {
    if(num > 0) {
        console.log("+++");
        alert("+++");
    } else if(num < 0) {
        console.log("---");
        alert("---");
    } else {
        console.log("Число равно нулю");
        alert("Число равно нулю");
    }
}
let userNumber = prompt("Введите число:");
userNumber = Number(userNumber);
if(!isNaN(userNumber)) {
    checkNumber(userNumber);
} else {
    alert("Ошибка! Введите корректное число");
    console.log("Ошибка! Введено не число");
}