let str1 = 'http://example.com';
let str2 = 'https://example.com';
let str3 = 'www.example.com';

function checkHttp(str) {
    return str.slice(0, 7) === 'http://';
}

let message = "Результаты проверки:\n\n";
message += str1 + ": " + checkHttp(str1) + "\n";
message += str2 + ": " + checkHttp(str2) + "\n";
message += str3 + ": " + checkHttp(str3);

alert(message);