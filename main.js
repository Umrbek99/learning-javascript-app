document.getElementById("demo").innerHTML = "Hello Javascriptq";

/* this is function */
function changeFontSize(){
    document.getElementById("demo").style.fontSize = "35px";
}


// MOSTLY used
let letVariable =5;

// NEVER changes
const constVariable = 44;

// UNDEFINED variable
let undefinedVariable;

// ADDING UNDEFINED VRAIBLE TO ANOTHER VARIABLES RETUNS `NAN`
console.log(letVariable + constVariable + undefinedVariable); // retuns NAN

//  STING ADDED AS STRING NUMBER AS NUMBER
console.log("5" + 4 + 3.2); //  543.2

// VARIABLE NAMES CAN START WITH `$`
let $masterName = "hello, ";
let _masterName = "master"
console.log($masterName + _masterName);


// LET VARIABLE 
let masterNumber = 12;
masterNumber = 32;
console.log("let variable "  + masterNumber);

// CONST VARIABLE
const masterArray = ["one","two","three"];
const masterCars = {type:"mercedes",model:"500",color:"white"};
masterCars.type = "BMW";
masterCars.price = 250000;
console.log(masterCars);
// masterArray = ["one","two","three"]; // ERROR we cant resign const array
console.log(masterArray);
masterArray[0] = "first";
masterArray.push("Fourth");
console.log(masterArray);


//  OPERATORS 
let masterVar1 = 4;
let masterVar2 = 2;
let masterVar3 = "String value";
let masterVar4 = true;
masterVar1 **= masterVar2;
console.log(masterVar1,masterVar3===masterVar4,typeof(masterVar4)); // === is checks the type of variable
let masterAsign1 = 32;
let masterAsign2 = 5;
console.log(masterAsign1 >>>= masterAsign2);



// DATA TYPES

let masterX  = 16 + " Volvo";
console.log(masterX);
let master_y = 123e5;      // 12300000
let master_z = 123e-5;     // 0.00123
console.log(master_y,master_z);

// FUNCTIONS
function masterFunction(num1,num2){
    return num1 * num2;
}
console.log("Function returns "+masterFunction(5,5));
console.log("Function returns "+masterFunction);


// OBJECTS
const master_person = {
    name:"john",
    lastname:"Doe",
    id:433,
    fullname: function(){
        return this.name + " " + this.lastname;
    }
};

console.log(master_person.fullname());


// EVENTS 
function displayDate(){
    return document.getElementById('demo').innerHTML = Date();
}



// STRING METHODS
let masterStr = "  Apple, Banana,Orange  ";
let masterNum = 5;
console.log(masterStr.slice(7)); // gets string after 7 th element
console.log(masterStr.substring(0,masterStr.length));
console.log(masterStr.substr(-4)); // can give minus values 
console.log(masterStr.toLowerCase()); // lovers all string elements
console.log(masterStr.trim()) // removes whitespaces
console.log(masterNum.toString().padStart(4,0));
console.log(masterNum.toString().padEnd(4,0));
console.log(masterStr.charAt(2));
console.log(masterStr.charCodeAt(2));
console.log(masterStr[2]);



// STRING SEARCH
let masterName = "John wants bought car";
console.log(masterName.indexOf("c"));
console.log(masterName.lastIndexOf("wants"));
console.log(masterName.search("car"));
console.log(masterName.match("car"));
console.log(masterName.includes("wants"));
console.log(masterName.startsWith("wants"));
console.log(masterName.endsWith("car"));

// STRING TEMPLATES
let masterTemplate = `john wants "car"`;
let temp_name = 'John';
let temp_number1 = 5;
let temp_number2 = 0.25;
let temp_lastname = 'Doe';
let temp_fullName = `Fullname : ${temp_name} ${temp_lastname}`;
let temp_total = `Total ${(temp_number1 * (10+temp_number2))}`
console.log(masterTemplate);
console.log(temp_fullName);
console.log(temp_total);


// HTML TEMPLATES
let header = "Template Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;

console.log(html);


// ARRAYS METHODS
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const vagetables = ["carrot","potato"];
console.log(fruits);
fruits.pop(); // pop() removes the last element
console.log(fruits);
fruits.push("Kiwi"); // adds element to last index 
console.log(fruits);
fruits.shift();  // shift() removes the first element
console.log(fruits);
fruits.unshift("Melon"); // adds element to first index
console.log(fruits);
// delete fruits[0];
console.log(fruits);
console.log(vagetables.concat(fruits)); // concat merges the array

console.log(fruits.splice(2,2,"Lemnon","Cherry"));
console.log(fruits);
fruits.splice(2);
console.log(fruits);


//  ARRAY SORT 

const account = ["c","r","b","a"];
const acc_nums = [12,55,33,22,1];
acc_nums.sort(function(a,b){return a-b});// sorting numbers in array
acc_nums.sort(function(a,b){return b-a}); // decending sort numbers in array
account.sort();// works good for string array
account.reverse();// reversing string array
console.log(account);
console.log(acc_nums);

console.log("Max number is " +Math.max.apply(null,acc_nums));
console.log("Max number is " +Math.min.apply(null,acc_nums));

const sort_cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];

function sortByYear(){
    sort_cars.sort(function(a,b){return a.year - b.year});
    displayCars();
};


function displayCars() {
    document.getElementById("obj").innerHTML =  sort_cars[0].type + " " + sort_cars[0].year + "<br>" + 
    sort_cars[1].type + " " + sort_cars[1].year + "<br>" + 
    sort_cars[2].type + " " + sort_cars[2].year + "<br>"
};
displayCars();




// ARRAY ITERATORS


const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction1); // FOREACH
document.getElementById("iterate").innerHTML = txt;

function myFunction1(value) { // FUNCTION FOR FOREACH
  txt += value + "<br>"; 
}



const num_array = [45, 4, 9, 16, 25];
const over18 = num_array.filter(myFunction2); // FILTER

document.getElementById("filter").innerHTML = over18;

function myFunction2(value) { // FUNCTION FOR FILTER
  return value > 18;
}


const reduce_nums = [45, 4, 9, 16, 25];
let sum = reduce_nums.reduceRight(myFunction); //  REDUCE AND REDUCE RIGHT 
let found = reduce_nums.find(function(a){return 25 == a});
document.getElementById("reduce").innerHTML = "The sum is " + sum;
document.getElementById("found").innerHTML = "The found is " + found;

function myFunction(total, value) { // THIS FUNCTION FINDS SUM OF ALL ELEMENTS GIVEN TO REDUCE 
  return total + value;
}


const cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
console.log(cars);

{
  const cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
  console.log(cars);
}



let text = "";

for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("cars").innerHTML = text;


// LOOP FOR IN 
const loop_person = {
    fname: "John",lname:"Doe",age:25
}

let loop_text  = "";
for(let x in loop_person){
    loop_text  += loop_person[x] + " ";
}

let forOfText = "";
for (const x of cars) {
    forOfText += x + "<br>";
}
document.getElementById("forof").innerHTML = forOfText;
document.getElementById("forin").innerHTML = loop_text;


// SET 

const letters = new Set();
letters.add("A");   
letters.add("B");
letters.remove;
console.log(letters.size,letters.has("A"),letters);

//  TRY CATCH ERRORS


function tryCatchFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("try").value;
    try {
      if(x == "") throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5) throw "too low";
      if(x > 10) throw "too high";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
  }


// ARROW FUNCTION 

let arrowFunction = (a,b) => a * b;
console.log(" arrowFunction returns = "+arrowFunction(4,3));




// CLASSES AND CONSTRUCTOR

class Car {
    constructor(type,year){
        this.type = type;
        this.year = year;
    }

    age(){ 
        let date = new Date();
        return date.getFullYear() - this.year;
    }

}

const car1 = new Car("BMW",1992);
const car2 = new Car("Mercedes",1999);
document.getElementById("class1").innerHTML = car1.type + " " + car1.year + " age = " + car1.age();
document.getElementById("class2").innerHTML = car2.type + " " + car2.year;


// MODULES

// import {name,age,message} from "./person.js";
// document.getElementById("module1").innerHTML = "imported name : "+ name + " age: " + age + " message: " + message();


// JSON PARSE

let personal = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';


const obj = JSON.parse(personal);   
document.getElementById("personal").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;


//  JAVASCRIPT  OBJECTS

let users = {name:"Maxmud",password:"123"};

console.log(users.name);
console.log(users["name"]);


for(let x in users){
  console.log(users[x]);
};


//  CREATING FUNCTION OF OBJECT OUTSIDE 
users.login = function() {
  return (this.name + " " + this.password).toUpperCase();
};

document.getElementById("persons1").innerHTML = JSON.stringify(users); // USING JSON.stringify()
document.getElementById("persons2").innerHTML = Object.values(users); // USING Object.values()

console.log(users.login());


//  JAVASCRIPT ACCESSORS
const computer = {
  model:"MSI",
  processor:"i3 10100f",
  os: "windows",
  ssd:"",
  counter:0,
  get cpu(){
    return this.processor; 
  },
  /**
   * @param {string} ssd
   */
  set makeSsd(ssd){
    return this.ssd = ssd;
  }
  
};

Object.defineProperty(computer,"increment",
{get:function(){this.counter++}}
); // GETTER 

Object.defineProperty(computer,"add",
{set:function(counter){this.counter = counter}}
); // SETTER


computer.makeSsd = "556 gb SSD";
computer.add = 4;
computer.increment;

document.getElementById("comp").innerHTML =
computer.cpu + " " + computer.ssd + " " + computer.counter;



//  JAVASCRIPT OOP

class Father {
  constructor(name){
    this.name = name;
  }
  present(){
    return "fathers son is " + this.name;
  }
}

class Son extends Father {
    constructor(name,surname){
      super(name);
      this.surname = surname;
    }

    show(){
      return this.present() + " " + this.surname;
    }

}

let mySon = new Son("Maxmud","Axmadov")
document.getElementById("son").innerHTML = mySon.show(); 


//  JAVASCRIPT ASYNC

//  JAVASCRIPT CALLBACK
function displayer(something) {
  document.getElementById("async").innerHTML = something;
}

function calculator(num1,num2,callback){
    let sum = num1 + num2;
    callback(sum);
}

function timing(){ 
  document.getElementById("timeout").innerHTML = "I EXECUTED AFTER 3 SECONDS !"
}
calculator(5,5,displayer);
setTimeout(timing,3000);


//  JS PROMISES

function displayPromise(some){
  document.getElementById("promise").innerHTML = some;
}

let promise = new Promise(function(success,error){
let x = 0;
  if(x == 0){
    success("SUCCESS");
  }else {
    error("ERROR");
  }
});

promise.then(
  function(success) {displayPromise(success);},
  function(error) {displayPromise(error);}
);


//  JS ASYNC/AWAIT





// JAVASCRIPT BRAUSER  BOM

setInterval(timer,1000);

function timer(){
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}


