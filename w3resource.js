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