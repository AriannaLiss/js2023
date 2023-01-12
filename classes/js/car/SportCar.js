import {Driver, Engine, Car} from './Car.js'

export class SportCar extends Car{
    constructor(peakVelocity, autoBrand, autoClass, weight, driver, engine){
        super(autoBrand, autoClass, weight, driver, engine);
        this.peakVelocity = peakVelocity;
    }
    toString(){
            return super.toString()+`Peak velocity: ${this.peakVelocity}<br>`;
    }
}
