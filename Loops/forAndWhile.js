// 12.11.2021
// Task 3 - Using a 'for' loop output the elements in reverse order
//  const arr2 = [
//   43, "what", 9, true, "cannot", false, "be", 3, true
// ];
 function reverseArrayItems(arr2) {
  let sentence = ' ';
  for (let i = arr2.length - 1; i >= 0; i--) {
    sentence += arr2[i] + ' ';
  }
  console.log(sentence);
  
}
console.log(reverseArrayItems());
const array = ['you', 'with', 'be', 'Force', 'the', 'May', 1, true];

const array = ['you', 'with', 'be', 'Force', 'the', 'May', 1, true];
//in the loop we will find a sum of nums array items
function reverse (array){
   
    let sentence = '';
    for (let i = array.length - 1; i >= 0; i--) {
        sentence += array[i] + ' ';
      }
      
      console.log(sentence);
}
console.log(reverse (array));

function reverseArrayItems(array) {
 
    let sentence = " ";
    for (let i = array.length - 1; i >= 0; i--) {
      sentence += array[i] + " ";
    }
    console.log(sentence);
  }

  console.log(reverseArrayItems());



function reverseArrayItems(array) {
  let newArr = " ";

  for (let i = array.length - 1; i >= 0; i--) {
    newArr += array[i] + " ";
  }
  return newArr;
}




const strArr = ['error01', 'in a galaxy', 'start-error', 'far far', 'away', '0994-error'];
 function filterArrayWithStrings(strArr) {
  let = newStrArr = [];
  
  for (let i = 0; i < strArr.length; i++) {
   if( strArr[i].length >= 4 && !strArr[i].includes("error") ){
    newStrArr.push(strArr[i]);
   } 
  }  

  console.log(newStrArr);
  // newStrArr.pop();
  // newStrArr.shift();
  // delete newStrArr[1];
  // console.log(newStrArr);
  
  console.log(newStrArr);
}console.log(filterArrayWithStrings(strArr));

console.log(filterArrayWithStrings(strArr));

array_1 = ["the","quick","brown","fox","jumped","over","the","lazy","dog"]

array_clean = [];
for(var i=0; i<array_1.length; i++){
    if(array_1[i].length > 3) 
        array_clean.push(array_1[i]);
}
console.log(array_clean);


const n = 20;

function printEvenNumbers(n) {

  const res = " ";
  for (let i = 2; n <= i; i++) {
    res = res + i + ", ";
      } 
      return res;
}console.log(printEvenNumbers());

   