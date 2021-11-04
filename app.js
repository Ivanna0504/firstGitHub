console.log("Hello!");
// 03.11---тирнарний оператор

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

// 

const res = radius !== 0 && MATH_PI == 3.14
?  MATH_PI * (radius * radius)
: "Radius can not equai to zero and Math_pi schould be corect";

const  chekRadius = radius >=10 || radius < 100 ? "ok": " not ok ";
console.log(chekRadius);

//
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