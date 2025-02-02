function getFactorial(n) {
    let factorial = 1;
    for(let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
const number = 5;
console.log(`Факториал числа ${number} (цикл):`, getFactorial(number));
console.log(`Факториал числа ${number} (рекурсия):`, getFactorialRecursive(number));
const numbers = [0, 1, 3, 5, 7];
numbers.forEach(num => {
    alert(`${num}! = ${getFactorial(num)}`);
    console.log(`Факториал числа ${num} равен:`, getFactorial(num));
});