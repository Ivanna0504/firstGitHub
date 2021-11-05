




// // 03.11---тирнарний оператор---умови

// const radius = 10;
// const MATH_PI = 3.14;

// let result;
// result = radius !== 0 
// ? MATH_PI * (radius * radius)
// : "Radius can not equai to zero";

// console.log(result)
// //
// const userName = "Mark";
// const discount = userName === "Mark"
// ? "30%"
// : "0%";
// //console.log("Vitaemo" + discount);

// // ----------------

// const res = radius !== 0 && MATH_PI == 3.14
// ?  MATH_PI * (radius * radius)
// : "Radius can not equai to zero and Math_pi schould be corect";

// const  chekRadius = radius >=10 || radius < 100 ? "ok": " not ok ";
// console.log(chekRadius);


// const day = 1;
// let WeekD = "";
// switch(day){
//     case 1:
//         { WeekD = "Mon"
//             console.log("Mon");
//             //return "ok";
//         }
//         break; //вже не траба якщо є ретурн
//     case 2:{WeekD = "Tue"
//     console.log("Tue");
// }
//        break;
//     default:{
//             console.error("ERR")
//         }
// }
// console.error("EWeekD", WeekD);



// //---Object---//

// let person = {
//     name: "Ivanna",
//     age: 22,
//     gender:"female",
//     sayHi: function(){
//         return "Hello";
//     }
// }
// // add elements or change elements
// person.age = 25;
// person.userID = 1234567890;

// // console.log(person.name);     // вираз.ідентифікатор
// // console.log(person["age"]);  //вираз[вираз]

// console.log(person); 
// console.log(person.sayHi()); 

// // 2 

// // let object = new Object();
// // object.property = "value";

// // 3
// let object = Object.create({x: 10, y: 20});
// object.x =20;
// console.log(object);
// //delete obj
// delete object.x
// console.log(object);

///
const objWithNewFields = {};

// code here
objWithNewFields.name = "Felix";
objWithNewFields.age = 7;
//console.log(objWithNewFields);

const objWithSum = {
    a: 10,
    b: 10
  };
//   console.log(objWithSum);
 
//   objWithSum.sum = objWithSum.a + objWithSum.b;
//   console.log("Sum of fields a + b =",  objWithSum.sum);
//   console.log(objWithSum);

  const objWithNums = {
    nums: [1]
  };
  
  // code here
  console.log(objWithNums);
  objWithNums.nums = [2,3];
  console.log(objWithNums);