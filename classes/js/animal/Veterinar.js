import { Cat, Dog, Horse } from './Animal.js'

// Створіть клас Ветеринар, у якому визначте метод void treatAnimal(Animal animal). 
// Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
// У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. 
// У циклі надсилайте їх на прийом до ветеринара.

class Veterinar{
    treatAnimal(animal){
        console.log(`Food: ${animal.food}, location: ${animal.location}`);
    }
    
    main(){
        let animals = [];
        animals.push(new Cat('long', 'milk', 'chair'));
        animals.push(new Dog('loud', 'bones', 'mat'));
        animals.push(new Horse('brown', 'hay', 'back yard'));
        for (let animal of animals){
            this.treatAnimal(animal);
        }
    }
}

let veterinar = new Veterinar();
veterinar.main();