const nums = [1, 2, 3, 4, 5];

const newNums = nums.map((num, index) => {
    //console.log({num, index});
    return num + 10
});
//console.log("new nums", newNums);

const movies = [{
    name: "Too",
    genre: "drama",
},{
    name: "Boo",
    genre: "thirel",
},{
    name: "Mums",
    genre: "drama",
}]

const newMovies = movies.reduce((acc, currentMov, index ) => {
    
if (currentMov = "drama"){
    acc.push({
        ...currentMov,
        y:2000,
    });
}
console.log({acc, currentMov, index});
return acc;
}, []);
console.log("---------------")
console.log(newMovies)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;

console.log(length);//4

let fruit = fruits[fruits.lengh - 1];

console.log(fruit);// ????

console.log(fruits.toString());

console.log(fruits.join("*"));

//----------------------------------------------------------

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
// //-----------------------------------------------------

// //sort()

//sort year 
const myCars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  let mC = myCars.sort(function(a, b){return a.year - b.year});
  
 console.log(mC);








//------------------------------------------------
const arrayNums = [7,101,3,1,9,11,100,111];

 function sortArray(arrayNums) {
    console.log(arrayNums);
  const newArray = arrayNums.sort(function(arrayNums){
    return newArray;
  });
  console.log(newArray);
} 

const numsArray = [ 1, 3, 5, 10, 19, 100, 200, 33,];

  function sumNumbersInArray(numsArray) {

      const newArSum = numsArray.reduce((acc, current) => (acc += current));
    } 

    const nums = [1, 2, 3, 4, 3, 6];

// find sum
function sumS (nums){
    const sum = nums.reduce(
        (acc, current) => acc += current);
      
     
      return sum;
}

console.log('sum nums in array ', sumS(nums));

//Метод map для роботи з масивами з використанням задекларованої функції

	
const nums5 = [0, 1, 2, 3, 4, 5, 6];
const increaseNum = (num, index) => {
  if (num <= 0) {
    return 10;
  }
 
  return num + 10;
}
const updateNums = nums5.map(increaseNum);
console.log('updated nums array ', updatedNums);

//------------------
// Task 1 - sort an array with numbers
// const arrayNums = [7,101,3,1,9,11,100,111]
export function sortArray(array) {
    const newArr = array.sort((curr, next) => {
      if (curr < next) {
        return -1;
      }
    });
    return newArr;
  }
  
  // Task 2 - filter an array of strings and keep only
  // a string, that doesn't contain the word 'test'
  // const stringsArray = [
  //   'one-test', 'cat', 'parrot',
  //   'banana', 'test-dog', 'dog'
  // ]
  export function filterStringsArray(array) {}
  
  // Task 3 - find sum of numbers in array using .reduce()
  // const numsArray = [
  //   1, 3, 5, 10, 19, 100, 200, 33,
  // ]
  export function sumNumbersInArray(array) {
    const sum = array.reduce((acc, current) => (acc += current));
    return sum;
  }
  
  // Task 4 - filter items, where a > 5 and extend with
  // new field *sum* with value a + b
  // const arrayItems = [
  //   { a: 1, b: 3 },
  //   { a: 3, b: 3 },
  //   { a: 6, b: 3 },
  //   { a: 10, b: 10 },
  //   { a: 41, b: 1 },
  //   { a: 0, b: 4 }
  // ];
  export function filterAndExtendArrayItems(array) {}
  
  // Task 5 - merge arrays and remove duplicates
  // const arNum = [1, 2, 3, 4, 5, 6];
  // const arNum2 = [15, 6, 3, 20, 11];
  export function mergeArraysWithoutDuplicates(array1, array2) {
    const concatArr = array1.concat(array2);
    const result = concatArr.filter(
      (item, idx) => concatArr.indexOf(item) === idx
    );
    return result;
  }

  

  //---------------// Task 1 - find sum of all number in 2 arrays
// const arrayNums1 = [7,101,3,1,9,11,100,111] // 343
// const arrayNums2 = [90,101,3,1,69,11,10,111] // 396
// 343 + 396
//passed
export function sumNumsInArrays(array1, array2) {
    let sum = 0;
    for (let i = 0; i < array1.length; i++) {
      sum = sum + array1[i] + array2[i];
    }
    return sum;
  }
  
  // Task 2 - Using a 'for' loop print all even
  // numbers up to and including n, as a comma separated string.
  // Don’t include 0
  // const n = 20;
  // Example output:
  // "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"
  
  export function printEvenNumbers(n) {
    let result = "";
  
    for (let i = 2; i <= n; i += 2) {
      if (i === n) {
        result = result + i;
      } else {
        result = result + i + ", ";
      }
    }
    return result;
  }
  
  // Task 3 - Using a 'for' loop output the elements in reverse order
  // const arr = [
  //   43, "what", 9, true, "cannot", false, "be", 3, true
  // ];
  export function reverseArrayItems(array) {
    let newArr = [];
  
    for (let i = array.length - 1; i >= 0; i--) {
      newArr.push(array[i]);
    }
    return newArr;
  }
  
  // Task 4 - Add up each element in the same position and
  // create a new array containing the sum of each pair.
  // Assume both arrays are of the same length.
  // let array1   = [4, 6, 7];
  // let array2  = [8, 1, 9];
  // Example output:
  // [12, 7, 16]
  //passed
  export function sumNumsSamePosition(array1, array2) {
    let sum = [];
    for (let i = 0; i < array1.length; i++) {
      sum.push(array1[i] + array2[i]);
    }
    return sum;
  }
  
  // Task 5 - find sum of all number in array using 'while' loop
  //passed
  export function sumNums(array) {
    let n = 0;
    let sum = 0;
    while (n < array.length) {
      sum = sum + array[n];
      n++;
    }
    return sum;
  }
  
  // Task 6 - filter array of string using 'for' or 'while' loop
  // and keep only elements where length > 4 and without the word 'error'
  // const strArr = ['error01', 'in a galaxy', 'start-error', far far', 'away', '0994-error']
  export function filterArrayWithStrings(array) {
    let newStrArr = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].length >= 4 && !array[i].includes("error")) {
        newStrArr.push(array[i]);
      }
    }
    return newStrArr;
  }
  
  // Task 7 - given a number n calculate the factorial of
  // the number using 'for' or 'while' loop
  // n! => 1*2*3*4*5
  export function factorial(n) {
    let result = n;
    if (n === 0 || n === 1) {
      return 1;
    }
  
    while (n > 1) {
      n--;
      result = n * result;
    }
    return result;
  }
  // with for loop
  export function factorial1(n) {
    let result = n;
  
    for (let i = 1; n >= result; i++) {
      result = i * result;
    }
    return result;
  }
  