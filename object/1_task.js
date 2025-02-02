const weekDays = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье"
}
let output = "Дни недели:\n\n";
for(let day in weekDays) {
    output += `${day}-й день: ${weekDays[day]}\n`;
}
alert(output);
console.log(output);