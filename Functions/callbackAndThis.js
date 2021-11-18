// функція щчікує на вході іншу функцію

function fn(callback){

    console.log("fn");
    callback();
}
const sayBye = () => {
console.log("Bye");
}
console.log(fn(sayBye));

// Абстрактне повторення
// function repeat(count) {
// for (let i = 0; i < count; i +=1){
//     console.log("Hello")
// }
// }
// console.log(repeat(5));
//-------------------------------------
// function repeat(count, callback) {
//     for (let i = 0; i < count; i +=1){
//         callback();
//         }
//     }
//     function sayHello(){
//         console.log("Hello");
//     }
//     function sayBye1(){
//         console.log("Bye1");
//     }
//     console.log(repeat(5, sayHello));
//     console.log(repeat(5, sayBye1)); 

    // Фільтрація масивів - ??

    function filter(arr, callback) {
        const result = [];

for( let i = 0; i < arr.lenhth; i += 1){
    if(callback(arr[i])) {
        result.push(arr[i]);
    }
}
        return result;

    }
    const  numbers = [1, 2, 3, 5, 4, 6, 7];

   console.log(filter(numbers, x => x < 4));
  

   const person = [
{
    name: "Ivan",
    age: 20
}, {
    name: "Ivanna",
    age: 22
}, {
    name: "Iryna",
    age: 25
   }];
   console.log(filter(person, ({age}) => age > 22));