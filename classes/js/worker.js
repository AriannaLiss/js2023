// Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище),
// rate (ставка за день роботи), days (кількість відпрацьованих днів).
// Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
// Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days.

function Worker(name, surname, rate, days){
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this. days = days;
}

Worker.prototype.getSalary = function () {
    return this.rate * this.days;
}

const worker = new Worker("Kolja", "Hanik", 1000, 365);
document.write(`${worker.name}'s salary is ${worker.getSalary()}`);