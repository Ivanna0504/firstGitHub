
const store = {
    phone: 'Apple',
    memory: "64GB",
    testType: 'mobileTest',
};

function checkMemory(phoneObj = {}) {
    return phoneObj.memory;
}

console.log(checkMemory(store));// 64GB

//-----------------------------------------

function extendConfig(key, value, obj = {}) {
    // looks like that -> obj['test'] = 'done';
    obj[key] = value;
    
    return obj;
}

function printTestResult(testConfig) {
    delete testConfig.counter;

    extendConfig('passed', true, testConfig);
    extendConfig('test', 'done', testConfig);
    extendConfig('success', true, testConfig);  

    return testConfig;
}

const result = printTestResult(store);

 console.info('Config final version: ', store);


// value1, value2, array
const extendArray = (value1, value2, arr = []) => {
    arr.push(value1, value2);

    return arr;
}

//--------------------------------------------------------

const nums = [ 1, 2, 3, 4 ];

const store1 = {
    phone: 'Apple 11',
    memory: "256GB",
    testType: 'mobileTest',
};

function printNums(num) {
    console.log(' Num is ', num);
}

//const [ first, second, third ] = nums;

function runTests(testMob) {
    const { memory, testType, phone  } = testMob;

    console.log('Phone is ', phone);
    console.log(`Tests with type ${testType} and memory is ${memory}`);
}
console.log(runTests(store1));


//---------------------------------------------
function mergeObjectStore(obj1, obj2) {
    // return Object.assign({}, obj1, obj2);
    return {
        ...obj1,
        ...obj2,
    }
}
const newObj = mergeObjectStore(store1, { testStatus: 'done' });

console.log('Phone info ', store1);
console.log(newObj);

//---------------------------------------------

const cakes = {
    nameCake: "Spartak",
    price: 100,
}

function sellCakes(objCake1,objCake2 ){
    return{
        ...objCake1,
        ...objCake2,
    }
}
const NewCake = sellCakes(cakes, { cakeStatus: "Cake selled"});

console.log("Info about cake", cakes);
console.log("Info with status", NewCake);
