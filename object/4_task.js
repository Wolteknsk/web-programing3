class User {
    constructor(surname, name, patronymic) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
    }

    getFullName(format = 'full') {
        const parts = {
            surname: this.capitalize(this.surname),
            name: this.capitalize(this.name),
            patronymic: this.capitalize(this.patronymic)
        };
        switch(format) {
            case 'full':
                return `${parts.surname} ${parts.name} ${parts.patronymic}`;
            case 'initials':
                return `${parts.surname} ${parts.name[0]}.${parts.patronymic[0]}.`;
            case 'short':
                return `${parts.surname} ${parts.name}`;
            default:
                return `${parts.surname} ${parts.name} ${parts.patronymic}`;
        }
    }
    capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
}

const user3 = new User("иванов", "иван", "иванович");

console.log("Полное имя:", user3.getFullName('full'));
console.log("Инициалы:", user3.getFullName('initials')); 
console.log("Краткая форма:", user3.getFullName('short')); 