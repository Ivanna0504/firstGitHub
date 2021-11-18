// objects

const customer1 = {
    firstName: "Ivanna",
    lastName: "Huzovata",
    age: 22,
    hasIDcard: true
}
const customer2 = {
    firstName: "Dmytro",
    lastName: "Huzovatyi",
    age: 28,
    hasIDcard: false
}
//console.log("Customer1 - ", customer1, "Customer2 - ", customer2);

customer1.city = "Lviv";
customer2.city = "Varash";
// Add new field = city
//console.log("Customer1 - ", customer1, "Customer2 - ", customer2);

//if
if(customer1.hasIDcard === true ){
    console.log("Customer1 has ID-card");
} else {
    console.log("Customer1 does not has ID-card");
}

if(customer2.hasIDcard === true ){
    console.log("Customer2 has ID-card");
} else {
    console.log("Customer2 does not has ID-card");
}

//----Hardware store---------------------------------------------------

const personalComputer = {
    OS: "windows",
    memoryPC: "32GB",
    mark: "Samsung",
    price: 00
}
const personalComputer1 = {}
const personalComputer2 = {}
console.log("Store have PC:", personalComputer)
// I buy 2 new personalComputer
personalComputer1.OS = "Windows";
personalComputer1.memoryPC = "64GB";
personalComputer1.mark = "HP";
//----------------------------------
personalComputer2.OS = "Mac";
personalComputer2.memoryPC = "256GB";
personalComputer2.mark = "Apple";
console.log("Store have 3 PC:", personalComputer, personalComputer1, personalComputer2 )

// I decide change personalComputer -->  memoryPC: "32GB" to "64GB" 
personalComputer.memoryPC = "64GB";
console.log("PersonalComputer now has memoryPC:", personalComputer.memoryPC);

// removing a property
delete personalComputer.price;
console.log("Without price", personalComputer);

//Використання методів для роботи з об*єктами
personalComputer.hasOwnProperty("OS");
personalComputer1.valueOf();
personalComputer2.toString();
console.log(personalComputer);
console.log(personalComputer1);
console.log(personalComputer2);

//Object.assign()
const phone = { 
    mark: "Apple"
    };
const apple_10 = Object.assign({}, phone);
apple_10.price = "2000$";
const apple_11 = Object.assign({}, phone);
apple_11.price = "3000$";
console.log("Store sells mark of phone: ", phone);
console.log("Apple_10", apple_10);
console.log("Apple_11",apple_11);


const  person = {
        name: "Ivanna",
        age: 22,
        gender:"female"
        
    }
    // add elements or change elements
    person.age = 25;
    person.userID = 1234567890;
    
    // console.log(person.name);     // вираз.ідентифікатор
    console.log(person["age"]);  //вираз[вираз]
    
    console.log(person); 

//Object.create()
    const person1 = Object.create(person);
    person1.name = "Ivan";
    person1.gender = "male";
    console.log(person1); 

//Object.entries()
const company = {
    nameofCompany: "GlobalLogic",
    workers: 7000
};
for(const [key, value] of Object.entries(company)){
    console.log(`${key}: ${value}`);
}
//Object.freeze()
const me = {
    firstName:"Ivanka"
}
Object.freeze(me);
me.age = 22;
console.log("Age not added ", me);

//Object.keys()
console.log(Object.keys(me));
//-------------------------------------

const client = {
    amountOfPurchases: 10000,
    ID: 02
};
// const fName = "Name:";
// if (!client.hasOwnProperty('fName')) {
//     client[fName] = "Ivanna Huzovata";
// }
//console.log(client);

const nextDiscount = {
    a: "30%",
    b: "50%"
}

if (client.amountOfPurchases === 10000){
    console.log("Ваша знижка на наступні покупки - ", nextDiscount.b);
} else{
    console.log("Ваша знижка на наступні покупки - ", nextDiscount.a);
}
//------------------------------------------------------------------------