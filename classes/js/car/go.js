import {Driver, Engine, Car} from './Car.js'
import {Lorry} from './Lorry.js'
import {SportCar} from './SportCar.js'

    const dima = new Driver('Dima', 'T', 22);
    const lida = new Driver('Lidia', 'Kalakutska', 2);
    const engine1 = new Engine(5000, 'Power');
    const engine2 = new Engine(2000, 'EngineInc');
    const car = new Car('Subaru', 'A', 1500, lida, engine2)
    const lorry = new Lorry(3, 'Mersedes', 'C', 3, dima, engine1);
    const sportCar = new SportCar(350, 'BMW', 'A', 3, lida, engine2);
    
    car.start().turnRight().start().turnLeft().turnLeft().start().stop();
    lorry.start().turnLeft().start().stop();
    sportCar.start().turnLeft().start().stop();

    document.getElementById('car').innerHTML+='<br><br>' + car;
    document.getElementById('car').innerHTML+='<br><br>' + lorry;
    document.getElementById('car').innerHTML+='<br><br>' + sportCar;
