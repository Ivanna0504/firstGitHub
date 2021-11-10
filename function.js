//---05.11.21---//

const customer1 = {
    firstName: "Ivanna",
    lastName: "Huzovata",
    hasIDcard: true
};
//чиста функція
function extendObject(obj, field, value){
const newObj = Object.assign({}, obj);
newObj[field] = value;

return newObj;
}
const newCustomer1 = extendObject(customer1,"age", 22 );
console.log(customer1 );
console.log("with age", newCustomer1 );



//
const square = (a) => a *a;
const square1 = (a) => {
    return a *a
};

function  square2(a){
    return a *a;
}

const square3 = function(a){
    return a *a;
}

const square4 = function(a, cd){
    return cd(a);
}
console.log()

//---------------------------------

//function declartion

function greet(name){
    console.log(arguments);
    return "Hello" + " "+ name;
}
console.log(greet("Ivanka", 22).toUpperCase());

//function expression
const greet2 = function(name){
    console.log("Hello I am", name);
    }
    console.log(greet2(), "Ivanka");


//function declartion
function testFunction(){
    const x = 5;
    const y = 10;
console.log(x + y);
}


// функцію testFunction() визиваємо у функції sayHello()
function sayHello(){
    testFunction();
    console.log("Hello");
}
console.log(sayHello());

//console.log(testFunction());

function unixTime(){
    let time = Math.floor(new Date().getTime());
    console.log(time);
}
console.log(unixTime());

//Функція яка виводить випадкове число
function randINT(){
    const min = 100;
    const max = 300;
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(rand);
}
console.log(randINT());

// allways result = 10
function count (){
   let c =  9;
   c++;
   console.log(c);
}
console.log(count());

//дана функція буде виводити на 1 більше при кожному виклику
let a = 20;
function count1 (){
    
    a ++;
    console.log(a);
 }
 console.log(count1());
 console.log(count1());

 // ARROW FUNCTION

 const arrow = (arFun) => {console.log("Arrow", arFun)}
 console.log(arrow(), "Function");
//-----------------------------------------------------
 const arrow1 = arFun => console.log("Arrow", arFun);
 console.log(arrow1(), "Function");
//-----------------------------------------------------

//Функція приведе число до квадрату
const pow2 = num => {
    return num ** 2;
}
console.log(pow2(5));
// -- або -- 
const pow3 = num => num ** 2;
console.log(pow3(3));
// ---------
const sum = (a = 20, b = a*2) => a + b;
console.log(sum());
//--------------------------------------

//Функція просумує всі числа
function sumAll(...all){
    let result = 0;
    for(let num of all){
        result +=num;
    }
return result;
}
const res = sumAll (1, 2, 3, 4, 5, 6);
console.log(res);
//-----------------------------------------------

const human = {
    name:"Ivanka",

    doTask(){
        console.log(`Hello my name is ${this.name}`);
        //console.log(this.name);
        //console.log("I do Judo");
        this.writeArtikle();
    },

    writeArtikle(){
        console.log("I like write artikle");
    },
};
console.log(human.doTask());

 //----------------------------------------------

// function valueByKeyInObject(key, obj = {}) {
    
//     let result;
//     Object.keys(obj).forEach(item => {
//         if(item === key) {
//             result = obj[key];
//         }
//     })
//     return result;
// }
// const human1 = { name: "Ivanka"};
// console.log(valueByKeyInObject("name", human1));

//---------------------------------------------

// const sayBye = ({name, age}) => {
    
// console.log(`Hello, my name ${name}, I am ${age}`);
// };






