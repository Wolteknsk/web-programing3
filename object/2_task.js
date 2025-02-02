const date = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate()
}
const formattedDate = `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`;
alert(`Текущая дата: ${formattedDate}`);
console.log("Текущая дата:", formattedDate);
console.log("Объект date:", date);