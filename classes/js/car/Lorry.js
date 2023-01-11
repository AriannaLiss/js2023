// Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.

class Lorry extends Car{
    constructor(capacity, autoBrand, autoClass, weight, driver, engine){
        super(autoBrand, autoClass, weight, driver, engine);
        this.capacity = capacity;
    }
    toString(){
            return super.toString()+`Capacity: ${this.capacity}<br>`;
    }
}

const dima = new Driver('Dima', 'T', 22);
const engine2 = new Engine(5000, 'Power');
let lorry = new Lorry(3, 'Mersedes', 'C', 3, dima, engine2);

lorry.start().turnLeft().start().stop();
document.write('<br><br>' + lorry);
