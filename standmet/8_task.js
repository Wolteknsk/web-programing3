let str = '1-2-3-4-5';
let result1 = str.replaceAll('-', '.');

let message = "Результаты замены:\n\n";
message += "Исходная строка: " + str + "\n";
message += "После замены: " + result1;

alert(message);