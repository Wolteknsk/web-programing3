let sqrt = Math.sqrt(379);
let roundToInt = Math.round(sqrt);
let roundToTenth = sqrt.toFixed(1);
let roundToHundredth = sqrt.toFixed(2);

console.log("Квадратный корень из 379:", sqrt);
console.log("Округление до целых:", roundToInt);
console.log("Округление до десятых:", roundToTenth);
console.log("Округление до сотых:", roundToHundredth);

let message = "Квадратный корень из 379:\n\n";
message += "Точное значение: " + sqrt + "\n";
message += "До целых: " + roundToInt + "\n";
message += "До десятых: " + roundToTenth + "\n";
message += "До сотых: " + roundToHundredth;
alert(message);