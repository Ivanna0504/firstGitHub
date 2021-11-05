//---01/11/2021---типи даних---змінні---перевірка типів даних---\\

let firstName = "Ivanna";
let lastName = "Huzovata";

console.log(firstName + " " + lastName);

let num = 1;
let NUM = 1;

let str = "Sone Srring";
str = "Some String";
console.log(typeof str);
console.log(str);

const boo = true;
let n = null;
let un;
const x = {fName: "Ivanna", lName: "Huzovata" };

console.log(typeof num);
console.log(typeof NUM);
console.log(typeof boo);
console.log(typeof n);
console.log(typeof un);
console.log(typeof x);

//--- ==vs=== ---//

const a = 1;
const b = "1";
c = a == b;
c1 = a === b;
/*
c it is true
c1 it is false
*/
console.log(c);
console.log(c1);



// 03.11---тирнарний оператор---умови

const radius = 10;
const MATH_PI = 3.14;

let result;
result = radius !== 0 
? MATH_PI * (radius * radius)
: "Radius can not equai to zero";

console.log(result)
//
const userName = "Mark";
const discount = userName === "Mark"
? "30%"
: "0%";
//console.log("Vitaemo" + discount);

// ----------------

const res = radius !== 0 && MATH_PI == 3.14
?  MATH_PI * (radius * radius)
: "Radius can not equai to zero and Math_pi schould be corect";

const  chekRadius = radius >=10 || radius < 100 ? "ok": " not ok ";
console.log(chekRadius);


const day = 1;
let WeekD = "";
switch(day){
    case 1:
        { WeekD = "Mon"
            console.log("Mon");
            //return "ok";
        }
        break; //вже не траба якщо є ретурн
    case 2:{WeekD = "Tue"
    console.log("Tue");
}
       break;
    default:{
            console.error("ERR")
        }
}
console.error("EWeekD", WeekD);

//---if()---//

let customer1 = "Ivanna";
let customer2 = "Dmytro";
let bYear1 = 1998;
let bYear2 = 1994;

if(customer1 === "Ivanna" && bYear1 === 1998 ){
    console.log("Знижка становить - 30%");
} else if(customer2 === "Dmytro" &&  bYear2 === 1994){
    console.log("Знижка становить - 50%");
} else {
    console.log("Знижка становить - 0%");
}

//---------------- 

let n = 5;
if(n > 3){
    n*=3;
    console.log(n);
}
let m = 5;
if(m < 3){
    m*=3;
    console.log(m);
} else {
    console.log("m is not less than 3")
}

let k = 5;
if(k < 3){
    k*=3;
    console.log(k);
} else if (k>4){
    console.log("k is more than 4")
}

// switch

switch(myName){
  case "Ivanka": homecity = "Lviv"; break;
  case "Dima": homecity = "Rivne"; break;
  case "Vlad": homecity = "Kyiv";
}
console.log(homecity);


//тирнарний оператор

let x = 15;
let text = x > 10 ? "х більше 10" : "х менше 10 або = 10";
console.log(text);

let x = 1;
let text = x > 10 ? "х більше 10" : x < 10 ?  "х менше 10": " x = 10";
console.log(text);

//---Object---//

let person = {
    name: "Ivanna",
    age: 22,
    gender:"female",
    sayHi: function(){
        return "Hello";
    }
}
// add elements or change elements
person.age = 25;
person.userID = 1234567890;

// console.log(person.name);     // вираз.ідентифікатор
// console.log(person["age"]);  //вираз[вираз]

console.log(person); 
console.log(person.sayHi()); 

// 2 

// let object = new Object();
// object.property = "value";

// 3
let object = Object.create({x: 10, y: 20});
object.x =20;
console.log(object);
//delete obj
delete object.x
console.log(object);