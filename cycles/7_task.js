const numbers = [2, 4, 6, 8, 10];
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
const average = sum / numbers.length;
alert("Среднее арифметическое: " + average);
console.log("Среднее арифметическое:", average);