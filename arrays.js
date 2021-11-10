const cars = [];
cars.push("BMW");
cars[cars.length] = "Opel";//в кінець масиву має додати
cars.push({
    company: "WW",
    y:1920,
})
console.log(cars);

//--------------------------------------------------------
// ways to create Array
const cars1 = ["Saab", "Volvo", "BMW"];

// const cars1 = [
//     "Saab",
//     "Volvo",
//     "BMW"
//   ];

// const cars1 = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";

// create a new Array

const weekDays = new Array("Mon", "Tuesday", "Wednesday");
let weekDay = weekDays[0];// result Mon
weekDays[0] = "Monday";

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;

console.log(length);//4

let fruit = fruits[fruits.lengh - 1];

console.log(fruit);// ????

console.log(fruits.toString());

console.log(fruits.join("*"));
//----------------------------------

const flower =["Rose","Chamomile", "Tulpan", "Mango"];
flower.pop();// Mango is not a flower
flower.push("Red Roze");
flower.shift();//delete "Red Roze"
flower.unshift("white Roze");//add "white Roze"

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let fr = fruits.splice(2, 2, "Lemon", "Kiwi");

console.log(fr);//?????

const arr1 = ["Emil", "Tobias", "Linus"];
const myInfo = arr1.concat("Ivanka"); // add new name

console.log(myInfo);
//-----------------------------------------------------

//sort()
const numbers = [3, 34, 21, 54, 1];
let = sortN = numbers.sort(function(a,b){return a - b});

console.log(sortN);

// return max value
function myArrayMax(arr){
    
    return Math.max.apply(null, arr);
}

console.log("Max valye - ", myArrayMax(numbers));
//------------------------------------------------------

//за спаданням
const numbers1 = [3, 34, 21, 54, 1];
let = sortN1 = numbers1.sort(function(a,b){return b -a });

console.log(sortN1);

const phone = ["Lenovo", "Apple", "Blacbary"];
let p = phone.sort();

console.log(p);
let p1 = phone.reverse();

console.log(p1);
//-----------------------------------------------------

//sort year 
const myCars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  let mC = myCars.sort(function(a, b){return a.year - b.year});
  
 console.log(mC);












//-----Homework-----------

// const nums = [1, 2];
// // write code just down below
// nums.push(3);
// nums.push(4);
// nums.push(5);
// nums.push(6);
// console.log(nums);
//   // Task 2 - add new user Dmytro and his age is 18
// const users = [
//     {
//       name: "Borys",
//       age: 101
//     }
//   ];
//   // write code just down below
//   users.push({
//     name: "Dmytro",
//     age: 18
//   });
//   console.log(users);
//   // Task 3 - remove first 2 elements
// const extraFirstNums = [101, 100, 1, 2, 3, 4];
// // write code just down below
// extraFirstNums.shift();
// extraFirstNums.shift();
// console.log(extraFirstNums);
// // Task 5- add 2 nums 0 and 1 at the start of array
// const extraFirstElements = [2, 3, 4];
// // write code just down below
// extraFirstElements.unshift(1);
// extraFirstElements.unshift(0);
// console.log(extraFirstElements);


// // Task 6 - swap elements, that have indexes 0 and 3

// // write code just down below
// const sortedArray = [4, 2, 3, 1];
// function swap(arr) {
//     // change places of array elements
//     [arr[0], arr[3]] = [arr[3], arr[0]];
//   }
  
 
  
//   swap(sortedArray, 1, 2, 3, 4);
  
//   console.log(sortedArray);
  