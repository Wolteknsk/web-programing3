let employees = [
    { name: 'name1', salary: 300 },
    { name: 'name2', salary: 400 },
    { name: 'name3', salary: 500 }
];

let message = "Список работников:\n\n";

for(let i = 0; i < employees.length; i++) {
    message += employees[i].name + " - " + employees[i].salary + "\n";
}

alert(message);
console.log(message);