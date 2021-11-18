//---17.11.2021---//
//Конкатенація або об'єднання рядків

const customers ={
   userName:"Ivan",
   age: 20,
   hasCard:true,
 };
 const infoCustomer = "Name - "  + customers.userName + ", " + "Age - "  + customers.age  + ", " +" HasCard - " + customers.hasCard;
 console.log(infoCustomer);

 //Конкатенація рядка із іншим типом даних - з використанням деструктиризації

 const employee = {
    firstName: "Ivanna",
    lastName: "Huzovata",
    position: "Trainee Test Engineer",
    wExperience: 2,
 }
 const { firstName,lastName, position, wExperience } = employee;

 const infoAboutEmployee = "As" + " " + position + " " + firstName + " " + lastName + " has work experience " + wExperience + " " + "months";
 console.log(infoAboutEmployee);

 //----------------------------------------------------------

 const a = 2 + 10 + "5";
 console.log(a);//125

 const b = "3" + 56;
 console.log(b);//356

 //-----------------------------------------------------------

 //Template literals (Template strings)

 const customer1 ={
   userName1:"Ivanka",
   age1: 22,
   
 };
 const infoCustomer1 = `Name - ${customer1.userName1} Age - ${customer1.age1} `;
 console.log(infoCustomer1);
 //----------------------------------------------------------

 const discount = "50%";
 const price = 3000;

 const sumWithDiscount = `Price = ${price > 2000 ? price: "zero"} - discount = ${discount}`;
 console.log( sumWithDiscount);

 //---Methods-------

 const myString = 'Ivanna Huzovata works at GlobalLogic';
 myString.split('');
 const index = 5;
 const char = myString.charAt(index);
 console.log(char);

const sentence = "Surround SCM is a software configuration management application";
console.log(sentence.includes("Surround"));// true
const word = "SCM"
console.log(`The word "${word}" ${sentence ? 'is': 'is not'} in sentence`);

const test = "It is used to store all versions of Automated Test Scripts, Environment Configuration files, any type of Project Documentation."
console.log(test.indexOf("Test"));
const changed = test.toUpperCase();
console.log(changed);
console.log("------------------------------");
console.log(changed.slice(20));


const str1 = "Getting latest version of the Test Script";

const wordsStr = str1.split(' ');
console.log(wordsStr[3]);

//----------------------------------------------------

const text = "Surround SCM is a software configuration management application.It is used to store all versions of Automated Test Scripts, Environment Configuration files, any type of Project Documentation.";

const regex = /[A-Z]/g;

const findUpper = text.match(regex);
console.log(findUpper);

const regex1 = /is/i;
console.log(text.replace(regex1, "system"));

//---------------------------------------------------

const inFo = "             Info!          ";
console.log(inFo.trim());

//---substring()---

let fruits = "Apple, Banana, Kiwi";
let part = fruits.substring(7, 13);
console.log(part);

//---padStart()/End()---
let textNum = "5";
let padded = textNum.padStart(4,0);
console.log(padded);
let padded1 = textNum.padEnd(4,0);
console.log(padded1);

//------------------------------------

const paragraph = `Main features:
- Getting latest version of the Test Script
- Check differences between Test Script versions
- Checking Out/In files before/after update`;

console.log(paragraph);