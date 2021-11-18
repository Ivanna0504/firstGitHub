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

const cars1 = [
    "Saab",
    "Volvo",
    "BMW"
  ];

const cars1 = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

//create a new Array

const weekDays = new Array("Mon", "Tuesday", "Wednesday");
let weekDay = weekDays[0];// result Mon
weekDays[0] = "Monday";


// //----------------------------------

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
// //-----------------------------------------------------






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
  





//--------------------------------

// Task 1 - find sum of all number in 2 arrays
const arrayNums1 = [7,101,3,1,9,11,100,111]; // 343
const arrayNums2 = [90,101,3,1,69,11,10,111]; // 396
// // 343 + 396

// function sumNumsInArrays(arrayNums1, arrayNums2) {
// let sum = 0;
// for(let i = 0; i < Math.max(arrayNums1.length,  arrayNums2.lengt); i++){
//     sum.push((arrayNums1[i] || 0) + (arrayNums2[i] || 0));
// }
// return sum;
//  }

// console.log(sumNumsInArrays(arrayNums1, arrayNums2 ));
const nums = [1, 2, 3, 4, 5, 6];
let sum = 0;

// in the loop we will find a sum of nums array items
for (let i = 0; i < nums.length; i++) {
  sum = sum + nums[i];
}

console.log('sum of nums items is ', sum);


 var arr = [3,2,5,6]; 

// function arraySum(array){ 
//     var sum = 0; 
//     for(var i = 0; i < array.length;  i++){
//          sum += array[i]; 
//         } 
// console.log(sum); } 
// arraySum(arr);

// var array1 = [1,2,3,4];
// var array2 = [5,6,7,8];

// var sum    = [6,8,10,12];


// for(var i = 0; i < array1.length; i++){
//    sum.push(array1[i] + array2[i]);
// }

// function sumNumsInArrays(array1, array2) {
//     let sum = 0;
//     for (let i = 0; i < array1.length; i++) {
//       sum = sum + array1[i] + array2[i];
//     }
//     return sum;
//   }
//   console.log(sumNumsInArrays());



// Task 2 - Using a 'for' loop print all even
// numbers up to and including n, as a comma separated string.
// Don’t include 0
// const n = 20;
// Example output:
// "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"

 function printEvenNumbers(n) {}

// Task 3 - Using a 'for' loop output the elements in reverse order
// const arr = [
//   43, "what", 9, true, "cannot", false, "be", 3, true
// ];
const arr1 = [
      43, "what", 9, true, "cannot", false, "be", 3, true
    ];
 function reverseArrayItems(arr1) {
    for (let i = 0; i > arr1.length; i--) {}
 }
console.log(reverseArrayItems());
// Task 4 - Add up each element in the same position and
// create a new array containing the sum of each pair.
// Assume both arrays are of the same length.
// let array1   = [4, 6, 7];
// let array2  = [8, 1, 9];
// Example output:
// [12, 7, 16]
function sumNumsSamePosition(array1, array2) {}

// Task 5 - find sum of all number in array using 'while' loop
function sumNums(array) {}

// Task 6 - filter array of string using 'for' or 'while' loop
// and keep only elements where length > 4 and without the word 'error'
// const strArr = ['error01', 'in a galaxy', 'start-error', far far', 'away', '0994-error']
function filterArrayWithStrings(array) {}

// Task 7 - given a number n calculate the factorial of
// the number using 'for' or 'while' loop
// n! => 1*2*3*4*5
 function factorial(n) {}