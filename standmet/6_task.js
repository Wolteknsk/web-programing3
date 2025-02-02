let str = 'я учу javascript!';

let word1 = str.substr(2, 3); 
let word2 = str.substr(6, 10); 
console.log("Через substr:");
console.log("Слово 'учу':", word1);
console.log("Слово 'javascript':", word2);

let message = "Результаты:\n\n";
message += "Через substr:\n";
message += "учу: " + word1 + "\n";
message += "javascript: " + word2 + "\n\n";
message += "Через substring:\n";
message += "учу: " + word3 + "\n";
message += "javascript: " + word4 + "\n\n";
message += "Через slice:\n";
message += "учу: " + word5 + "\n";
message += "javascript: " + word6;

alert(message);