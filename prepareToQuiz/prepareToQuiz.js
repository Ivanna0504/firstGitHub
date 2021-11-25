//зміні
let num = 1;
const firstName = "Ivanka";
const hasCard = true;

//перевірка типів даних
typeof(num);
"Ivanka".constructor;
(num).constructor;

const str = "Some text";
const str2 = "Some text 2";

str == str2;// false

let num1 = 3;
let num2 = 5;
num1 === num2;

//--------------------

function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
  }
  
  console.log(getFee(true));
  // expected output: "$2.00"
  
  console.log(getFee(false));
  // expected output: "$10.00"
  
  console.log(getFee(null));
  // expected output: "$10.00"

  // умовні конструкції
const a = 7;
const b = 8;

if(a > b){
    console.log(a+b);
} else {
    console.log(a - b);
}

const x = 2;
const y = 10;
const z = x + y;

switch(z){
    case x > y:{
        console.log(z);
    }
    break;

    case x === y:{
        console.log("x = y");
    }
    break;
    default: {
        console.log("x != y");
    }

}

// object
const dog1 = { };
 
// with properties
const dog2 = { 
   friendly: true,
   speak: () => console.log("Woof! Woof!"),
};
 
// with constructor
const dog3 = new Object();

const dog = { 
    friendly: true,
    speak: () => console.log("Woof! Woof!"),
    likeCats: false,
 };
  
  // adding new property name
 dog.name = "Rex";
 // adding new method
 dog["run"] = () => console.log("Run");
 
// removing a property
delete dog.likeCats;

const person = {
    name: "Ivan",
    age:22,
    hasCard: true,
}
person.valueOf();
person.hasOwnProperty('age');
person.toString();

/*Object.assign(obj)  - копіює значення всіх перерахованих власних властивостей з одного або декількох вихідних об’єктів на цільовий об’єкт;
 
Object.create(obj) - створює новий об’єкт із зазначеним об’єктом -прототипом та властивостями;
 
Object.entries(obj) - повертає масив, що містить усі пари [ключ, значення] власних перерахованих рядкових властивостей даного об’єкта;
Object.freeze(obj)  - заморожує об’єкт. Інший код не може видалити або змінити його властивості
Object.keys(obj) - повертає масив, що містить імена всіх власних властивостей даного об’єкта;
Object.isFrozen(obj), Object.isExtensible(obj)
...та інші
*/

//function
function fn1(a, b){
   return a*b;
}

/*В JavaScript існують наступні види функцій:

стрілочна функція(arrow function)
задекларована функція (function declaration)
функція вираз (function expression)
анонімна функція (anonymous function) */

//arrow function
const sumElement = (element) =>{
    return element + element;
}
//or
const sumElement1 = (element) => element + element;

//function declaration
function sumElement2 (element){
    return element + element;
}
//function expression
const sumElement3 = function(element){
    return element + element;
}

//anonymous function	
function makeDecision(makeFn) {
    makeFn();
  }
   
  // call the function passing an anonymous function
  makeDecision(function() {
    console.log("Let's dance");
  });
  //IIFE (Immediately invoked function expression)
  (function () {
    // some initiation code
    let firstVariable;
    let secondVariable;
  })();
 
  // ще один варіант
const sum = new Function('a,b', ' return a+b; ');
 
// call the function with params
sum(1, 2); // result 3
 

//class
class Rectangle {
    // needed to initialize a class
    constructor(height, width) {
      // class fields
      this.height = height;
      this.width = width;
    }
   
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
   
  const square = new Rectangle(10, 10);
   
  console.log(square.area); // 100

  
  //myArray.length
  //отримання елемента
  const myArray = [1, 2, 3, 4];
  myArray[0];//1
  
  	
let emptyArray = [];
 
// array with nums
const numsArray = [1, 2, 3, 4];
 
// array with strings
const strArray = ['there', 'can', 'be', 'strings'];
 
// mix of different data types
const mixArray = [1, 'a', { n: 1 }, [1,2,3]];

// create an empty array
const nums = new Array();
 
// add numbers
nums.push(1);
 
nums.push(2);
 
nums.push(3);
 
// print array
//console.log(nums);

//------------------------------
const nums2 = [1, 3, 6, 11, 45];
const nums3 = [356,67];
// add new
nums2[5] = 54;
//change
nums2[0] = 34;
delete nums2[1];

//methods
nums2.push("string");// add new
nums2.pop();// delete last
nums2.unshift("I love JS");// add on the beggining
nums2.shift();// delete first element
//обєднання масивів
const numsConcated = nums2.concat(nums3);

const personTest = [{
    name: "Ivanka",
    age:22,
    hobby: "sport",
}]

console.log(personTest[0].name);

//
	
const data = [];
 
// add data
function add(obj, arr) {
  arr.push(obj);
}

//дефолтне значення
function extendConfig(objExt, config = {}) {
    const newObj = Object.assign({}, config, objExt);
   
    return newObj;
  }
   
  const result = extendConfig(
    { test: true, v: '10.0.3'},
    { module: 'Car'}
  );
  console.log(result);
 
  // spread
  	
function extendConfig(objExt, config = {}) {
    return {
      ...objExt,
      ...config,
    };
  }

  //деструктиризація
  	
const config = {
    name: 'MyTests',
    tests: 'unit',
    version: '10.0.3',
    extra: {
      tests: 'e2e',
    }
  }
   
  const { tests, extra } = config;
   
  console.log(tests, extra);
  
  //деструктиризація масива
  	
const data = [
    'Games',
    {
      tests: 'e2e',
    }
  ]
   
  const [ moduleName, extra ] = data;
   
  console.log(moduleName, extra);
//----------------------------------------
	
function swap(arr, i, j) {
    // change places of array elements
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
   
  const unsortedNums = [1, 3, 2];
   
  swap(unsortedNums, 1, 2);
   
  console.log(unsortedNums);
  
  //loops
  for(let i = 0; i < 10; i++){

  }

  while(n > 6){
      n++;
      // do smth
  }

  	
let n = 5;
let result = 1;
 
// with the loop we will find n!
do {
  result *= n;
  n--;
} while (n >= 1)
  
console.log(result);

//methods in array
const testArray = [1, 2, 5, 6, 7];
testArray.forEach(( index, imem) => {

});

testArray.sort((curr, next) => {
    if(curr < next){
        return -1
    }
});
// for
const nums = [1, 2, 3, 4, 5, 6];
let sum = 0;
 
// in the loop we will find a sum of nums array items
for (let i = 0; i < nums.length; i++) {
  sum = sum + nums[i];
}
 
console.log('sum of nums items is ', sum);
//for each
const nums = [1, 2, 3, 4, 5, 6];
let sum = 0;
 
// in the loop we will find a sum of nums array items
nums.forEach((num, index) => {
  sum += num;
})
 
console.log('sum of nums items is ', sum);

//map по всьому масиві
	
const nums = [1, 2, 3, 4, 5, 6];
 
// in the loop we will increase every element
const updateNums = nums.map(function(num, index) {
  return num + 10;
});
//const updateNums = nums.map(num => num + 10);
 
console.log('updated nums array ', updatedNums);

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
//-------------------------------------


//повторення матеріалу по обєктах

const person = {name: "Ivanna", age: 22};

const person1 = new Object();

const person2 = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }
  
  const x = person2;
  x.age = 10;      // Will change both x.age and person.age

  /*
  objectName.property      // person.age
або
objectName["property"]   // person["age"]
або
objectName[expression]   // x = "age"; person[x]
   */

for (let variable in object) {
    // code to be executed
  }
  const person3 = {
    fname:" John",
    lname:" Doe",
    age: 25
  };
  
  for (let x in person3) {
    txt += person3[x];
  }