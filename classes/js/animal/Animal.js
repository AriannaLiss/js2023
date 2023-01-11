// Створити клас Animal та розширюючі його класи Dog, Cat, Horse.
// Клас Animal містить змінні food, location і методи makeNoise, eat, sleep. Метод makeNoise, наприклад, може виводити на консоль "Така тварина спить".

// Dog, Cat, Horse перевизначають методи makeNoise, eat.
// Додайте змінні до класів Dog, Cat, Horse, що характеризують лише цих тварин.



export class Animal{
    constructor(food, location){
        this.food = food;
        this.location = location;
    }

    makeNoise(){
        console.log(`Making noise in ${this.location}...`);
    }

    eat(){
        console.log(`Eating ${this.food}...`);
    }

    sleep(){
        console.log('Sleeping...');
    }
}

export class Dog extends Animal{
    constructor(voice, food, location){
        super(food, location);
        this.voice = voice;
    }

    makeNoise(){
        console.log(`Woof-woof...`);
    }

    eat(){
        console.log(`wow! food!`);
    }
}

export class Cat extends Animal{
    constructor(wispers, food, location){
        super(food, location);
        this.wispers = wispers;
    }

    makeNoise(){
        console.log(`meow-meow...`);
    }

    eat(){
        console.log(`Where is my milk? Licking milk...`);
    }
}

export class Horse extends Animal{
    constructor(color, food, location){
        super(food, location);
        this.color = color;
    }

    makeNoise(){
        console.log(`yoooke...`);
    }

    eat(){
        console.log(`om-nom-nom...`);
    }
}