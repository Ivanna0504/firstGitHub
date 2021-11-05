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

let n1 = 5;
if(n1 > 3){
    n1*=3;
    console.log(n1);
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

// //--- ==vs=== ---//

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
