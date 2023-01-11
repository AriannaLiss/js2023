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

class Driver{
    constructor (firstname, lastname, experience = 0){
        this.firstname = firstname;
        this.lastname = lastname;
        this.experience = experience;
    }
}

class Engine{
    constructor(power, manufacturer){
        this.power = power;
        this.manufacturer = manufacturer;
    }
}

class Car{
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
            Weight: ${this.weight}<br>
            Driver: ${this.driver.firstname} ${this.driver.lastname}, experience is ${this.driver.experience} years<br>
            Engine: ${this.engine.manufacturer}, power is ${this.engine.power}<br>`
    }

    start(){
        console.info("Go!");
        return this;
    }

    stop(){
        console.info("Stop.");
        return this;
    }

    turnRight(){
        console.info("Turn right...");
        return this;
    }

    turnLeft(){
        console.info("Turn left...");
        return this;
    }
}

const lida = new Driver('Lidia', 'Kalakutska', 2);
const engine = new Engine(2000, 'EngineInc');
const car = new Car('Subaru', 'A', 1500, lida, engine)

car.start().turnRight().start().turnLeft().turnLeft().start().stop();

document.write('<br><br>' + car);
