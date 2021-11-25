//коли є основний обєкт UTILS. UI , АРІ це розділи які містять обєкти . В кожному обєкті є методи - функції
const Utils = {
    UI:{
        unitTest: {
            valide: (val) => console.log(val),
        },
        e2e: {
            validate: (val) => console.log(val),
            utils: {
                match: (val1, pattern) => console.log({ val1, pattern}),
                check: (val) => console.log( 'Check value - ' + val),
            }
        },
    },
    API:{
        unitTest: {
            validate: (val) => console.log(val),
            utils: {
                match: (val, pattern) => console.log({ val, pattern }),
            }
        },
        acceptenceTest: {
            validate: (val) => console.log(val),
            config: {
                version: '1.10.11',
                os: 'Linux',
                ci: 'Jenkins',
            }
        }
    }
}
Utils.UI.e2e.validate("Validate e2e tests...");// коли потрібно якесь значення - звертаємся. отримали доступ до методу
Utils.UI.e2e.utils.check(3);

// щоб достукатись до версії треба створити зміну

//const version = Utils.API.acceptenceTest.config.version;
//console.log(version);

// params - Тег містить ім'я, тип і опис параметра функції.
// задокументувати що робить функція коли на неї наводиш
/**
 * func compare function
 * @param {String} version
 * @returns String
 * 
 */

function compareVersion(version){
    const checVersion = version === Utils.API.acceptenceTest.config.version;
    return checVersion ? 'You have corect version' : " Version is outdated" ;
}
console.log(compareVersion('1.10.11'));


/**
 * 
* @param {Number} a 
* @param {*Number} b 
* @return Number
 */
function comporator(a, b){
if(a<b){
    return -1;
}
else{
    return 1;
}
}
const sortedArr = [1, 3, 67, 89, 12].sort(comporator);//.sort((a,b) => a - b or b -a)
console.log(sortedArr);

//щоб перевіряти текс викор localeCompare
/**
 * 
 * @param {Object} obj1 
 * @param {Object} obj2 
 * @returns Boolean
 */
function NamesComp (obj1, obj2){
return obj1.name.localeCompare(obj2.name, 'en', {sensitivity: 'base'})//приймає всі параметри мову та велику, малу букви
}

const res = [{ name: 'test'}, { name: 'Ivanka'},{ name: 'avanka'}].sort(NamesComp);
console.log(res);

// перевикористання функції
function clickBtn(selector) {
    return document.querySelector(selector);
}

// потрібно вибрати елементи

function selectElements(selector) {
    return document.querySelectorAll(selector);
}

function step1() {
    clickBtn('#submit');
    checkPayload()
}

function step2() {
    clickBtn('.menu');
    selectElements('.menu__item');//checklements(); для юай тестів

}
// код який повторюється - виносити окремо у функцію щоб потім перевикористати

//перевикористання утиліт ...

function step3(value, pattern){
//Utils.e2e.utils.match(value, pattern);
//Utils.e2e.validate(value);

// можна ств зміну і додавати умову
const match = Utils.e2e.utils.match(value, pattern);

if(match){
    Utils.e2e.validate(value);
}
}