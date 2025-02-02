let arr = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l']
];
console.log("Вариант 1 - прямой доступ:");
console.log("l =", arr[3][2]);
console.log("e =", arr[1][1]);
console.log("g =", arr[2][0]);
console.log("a =", arr[0][0]);
alert(`Элементы массива:
l = ${arr[3][2]}
e = ${arr[1][1]}
g = ${arr[2][0]}
a = ${arr[0][0]}`);