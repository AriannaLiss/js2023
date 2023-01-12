import {Driver, Engine, Car} from './Car.js'

export class Lorry extends Car{
    constructor(capacity, autoBrand, autoClass, weight, driver, engine){
        super(autoBrand, autoClass, weight, driver, engine);
        this.capacity = capacity;
    }
    toString(){
            return super.toString()+`Capacity: ${this.capacity}<br>`;
    }
}
