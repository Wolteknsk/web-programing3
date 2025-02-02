const numbers = [1, 3, 5, 7, 9, 11];
let found = false;
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] === 5) {
        found = true;
        break; 
    }
}
if(found) {
    alert("Число 5 найдено в массиве!");
    console.log("Число 5 найдено в массиве!");
} else {
    alert("Число 5 не найдено в массиве.");
    console.log("Число 5 не найдено в массиве.");
}