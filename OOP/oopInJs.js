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

//----------------------------------
//Функція конструктор + методи додані в prototype

function Cars(model, color) {
   this.model = model;
   this.color = color;
}
Cars.prototype.drive = function (){
    console.log("Driving");
}
const Audi = new Cars("Audi", "red");
const porshe = new Cars("Porshe", "black");
console.log(Audi.drive());

//----------------------------------
// this

const person = {
    name:"Ivanka",
    age:22,

sayHi(){
    console.log(this.name); 
  }
}
console.log(person.sayHi());

//-----------------------------------

const arrowFn = () => {
    console.log(this);
}
function Triangle() {
this.a = 10;
this.b = 25;

this.getArea = () => {
    console.log(this);

    return this.a * this.b;
}
}
const tr = new Triangle();
console.log(tr.getArea());

//--------------------------------------
//Область видимості: функції і змінні

const a = 10;

console.log(a);

function test() {
    const c = 300;
    return a + c;
    
}
console.log(test());

//---------------------------
let res = 0;
//console.log(i); // i - is not available

for (let i = 0; i < 10; i++) {
  res += i;
}

//console.log(i); // i - also is not available

//-------------------------------------

const array = [1, 2, 3, 4];
let resItem = 0;

//console.log(d); 

array.forEach(d=> {
  resItem += d;
})

//console.log(d); 

//Контекст виконання (Execution context)

const  x = 20;

function fn1() {
    const y = 50;

    function fn2() {
        z = 15;
        const result = x + y + z;

        return result;
        
    }
    return fn2;
}
console.log(fn1() ()); //85

//------------------------------

function PhoneS (model, price){
    this.model = "Apple";
    this.price = 10000;
}
function sellPhone(model, price) {
    PhoneS.call(this, model, price);
    this.category = "mobile phone";
}
console.log(new sellPhone("Samsung G3", 20000).model);

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  // expected output: "cheese"
  