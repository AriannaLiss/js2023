/*
Створити клас Car , Engine та Driver.
Клас Driver містить поля - ПІБ, стаж водіння.
Клас Engine містить поля – потужність, виробник.
Клас Car містить поля – марка автомобіля, клас автомобіля, вага, водій типу Driver, мотор типу Engine. 
Методи start(), stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали", "Зупиняємося", "Поворот праворуч" або "Поворот ліворуч". 
А також метод toString(), який виводить повну інформацію про автомобіль, її водія і двигуна.

Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.
*/

class Person{
    constructor (firstname, lastname){
        this.fullName = firstname + ' ' + lastname;
    }
    toString(){
        return this.fullName;
    } 
}

export class Driver extends Person{
    constructor (firstname, lastname, experience = 0){
        super(firstname, lastname);
        this.experience = experience;
    }
    toString(){
        return `Driver: ${super.toString()}, experience is ${this.experience} years<br>`;
    }
}

export class Engine{
    constructor(power, manufacturer){
        this.power = power;
        this.manufacturer = manufacturer;
    }
    toString(){
        return `Engine: ${this.manufacturer}, power is ${this.power}<br>`

    }
}

export class Car{
    constructor(autoBrand, autoClass, weight, driver, engine){
        this.autoBrand = autoBrand;
        this.autoClass = autoClass;
        this.weight = weight;
        this.driver = driver;
        this.engine = engine;
    }

    toString(){
        return `Auto: ${this.autoBrand}<br>
            Class: ${this.autoClass}<br>
            Weight: ${this.weight}<br>` + this.driver + this.engine;
    }

    start(){
        console.info(this.autoBrand + " is going!");
        return this;
    }

    stop(){
        console.info(this.autoBrand + " has stopped.");
        return this;
    }

    turnRight(){
        console.info(this.autoBrand + " is turning right...");
        return this;
    }

    turnLeft(){
        console.info(this.autoBrand + " is turning left...");
        return this;
    }
}
