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
//-----------------------------------------------------

// convert date to string
function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    userDate = new Date(userDate);
    y = userDate.getFullYear().toString();
    m = (userDate.getMonth() + 1).toString();
    d = userDate.getDate().toString();
    if (m.length == 1) m = '0' + m;
    if (d.length == 1) d = '0' + d;
    return y + m + d;
  }
  
  console.log(formatDate("12/31/2014"));

  function removeProperty(obj, prop) {
    if(obj.hasOwnProperty(prop)){
      
       delete obj.prop;
         
       
      
    } else{
      return false;
    }
    return null;
  }


  