/*
Створіть клас Phone, який містить змінні number, model і weight.
Створіть три екземпляри цього класу.
Виведіть на консоль значення їх змінних.
Додати в клас Phone методи: receiveCall, має один параметр - ім'я. Виводить на консоль повідомлення "Телефонує {name}". 
Метод getNumber повертає номер телефону. 
Викликати ці методи кожного з об'єктів.
*/

function Phone(number, model, weight){
    this.number = number;
    this.model = model;
    this.weight = weight;
}

function receiveCall(name) {
    console.info(`[${this.number}]: ${name} is calling...`)
}

Phone.prototype.receiveCall = receiveCall;

Phone.prototype.getNumber = function(){
    return this.number;
}

Phone.prototype.toString = function(){
    return `Weight is ${this.weight}, model is ${this.model}, number is ${this.number}`;
}

const phone1 = new Phone('7223847', 'Samsung', 32);
const phone2 = new Phone('7113847', 'Oppo', 22);
const phone3 = new Phone('7223555', 'iPhone', 12);

console.dir(phone1);
console.dir(phone2);
console.dir(phone3);

console.info('Phone 1 number is ' + phone1.getNumber());
phone3.receiveCall('Lesha');
console.info('Phone 2 number is ' + phone2.getNumber());
phone1.receiveCall('Oleg');
console.info('Phone 3 number is ' + phone3.getNumber());
phone2.receiveCall('Dima');


console.info(phone1.toString());