let obj = {x: 1, y: 2, z: 3};
console.log("Исходный объект:", obj);
for(let key in obj) {
    obj[key] = obj[key] * obj[key];
}
console.log("Объект после возведения в квадрат (способ 1):", obj);
alert("Результат: " + JSON.stringify(obj));