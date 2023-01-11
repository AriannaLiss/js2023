// Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.

class SportCar extends Car{
    constructor(peakVelocity, autoBrand, autoClass, weight, driver, engine){
        super(autoBrand, autoClass, weight, driver, engine);
        this.peakVelocity = peakVelocity;
    }
    toString(){
            return super.toString()+`Peak velocity: ${this.peakVelocity}<br>`;
    }
}

let sportCar = new SportCar(350, 'BMW', 'A', 3, lida, engine);

lorry.start().turnLeft().start().stop();
document.write('<br><br>' + sportCar);
