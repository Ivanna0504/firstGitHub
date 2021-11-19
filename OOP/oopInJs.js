// Наслідування (Inheritance)

function Phone(model){
    this.model = model;

    this.getModel = () => this.model;
    this.sound = () => console.log("Phone sound");

}
const Apple_Iphone = new Phone("Apple Iphone - 10");
const Sumsung = new Phone("Sumsung G 243");

Apple_Iphone.getModel();
Apple_Iphone.sound();

//--------------------------------
//Поліморфізм (Polymorphism)

class Animal {
    constructor(name){
        this.name = name;
    }
    sound() {return "";}
    toString() {
     return Object.getPrototypeOf(this).constructor.name;
    }
}
class Cat extends Animal {
    constructor(name){
    super(name);
}
sound() {
    return "Meow!";
  }
}

class Dog extends Animal {
    constructor(name){
        super(name);
    }
    sound () {
        return " Woof!";
    }
}

class Mouse extends Animal {
    constructor(name){
        super(name);
    }

sound(){
    return "Pi-Pi";
    }
}

class Hourse extends Animal{
    constructor(name){
        super(name);
    }
    sound(){
        return "HHHH!";
    }
}

const Murzik = new Cat("Murzik");
console.log(Murzik.sound());

const Djek = new Dog("Djek");
console.log(Djek.sound());

const Mini = new Mouse("Mini");
console.log(Mini.sound());

const Roza = new Hourse("Roza");
console.log(Roza.sound());

//---------------------------------
//Інкапсуляція (Encapsulation)

const createCounter = () => {
    let count = 0;
    return({
        click: () => count +=1,
        getCount: () => count.toLocaleString()
    });
}

const counter = createCounter();

counter.click();
counter.click();

console.log(counter.getCount());