//10  Calculate multiplication and division of two numbers

const num1 = 12;
const num2 = 10;
const multiplication = num1 * num2;
const division = num1/num2;

console.log(multiplication, division);

// Get a random integer from 1 to 10 inclusive
const num = Math.ceil(Math.random() * 10);
console.log(num);


// 149 - JavaScript: Change the capitalization of all letters in a given string


function change_case(words) {
    let string = "";
    for (let i = 0; i < words.length; i++) {
        if (/[A-Z]/.test(words[i])) string += words[i].toLowerCase();
        else string += words[i].toUpperCase();
    }
    return string;
}

console.log(change_case("ivankA"));
console.log(change_case("hUZOVATA"));