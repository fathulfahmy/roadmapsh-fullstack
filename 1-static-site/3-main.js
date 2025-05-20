// Log
console.log("Hello world");
console.error("This is an error");
console.warn("This is a warning");

// Variable
const name = "John";
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

// Type
console.log(typeof isCool);

// Concat
console.log("My name is " + name + " and I am " + age);

// String func
s = "Hello world";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(""));
const t = "tech, it, code";
console.log(t.split(","));

// Array
const fruits = ["apples", "oranges", "pears"];
console.log(fruits);
console.log(fruits[1]);
fruits[3] = "grapes";
console.log(fruits);
fruits.push("mangos");
console.log(fruits);
fruits.unshift("strawberries");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf("oranges"));

// Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};

console.log(person);
// console.log(firstName); //error
// console.log(city); //error

// Destructure
const {
  firstName,
  lastName,
  address: { city },
} = person;

console.log(person);
console.log(firstName);
console.log(city);

// Object
const users = [
  {
    id: 1,
    name: "John",
    isRegistered: true,
  },
  {
    id: 2,
    name: "Doe",
    isRegistered: false,
  },
  {
    id: 3,
    name: "Lowe",
    isRegistered: true,
  },
];

console.log(users);
const userJSON = JSON.stringify(users);
console.log(userJSON);

// Loop
for (let i = 0; i < 10; i++) {
  console.log(`Loop ${i}`);
  i++;
}

for (let user of users) {
  console.log(`user id: ${user.id}`);
}

users.forEach((user) => {
  console.log(user.name);
});

const userRegistered = users
  .filter((user) => {
    return user.isRegistered === true;
  })
  .map((user) => {
    console.log(user.name);
  });

// Conditional
const v = "10";
if (v == 10) {
  console.log("v has value of 10");
}
if (v === 10) {
  console.log("v has value and type of 10");
}

if (v > 10) {
  console.log("v is greater than 10");
} else if (v <= 10) {
  console.log("v is lower or equal to 10");
} else {
  console.log("v is not a number");
}

const size = x > 10 ? "large" : "small";

switch (size) {
  case "large":
    console.log("v is large");
    break;
  case "small":
    console.log("v is small");
  default:
    break;
}

// Function
function addNum1(num1, num2) {
  return num1 + num2;
}

console.log(addNum1(5, 10));

// Arrow Function (ES6)
const addNum2 = (num1, num2) => {
  return num1 + num2;
};

console.log(addNum2(5, 10));

const addNum3 = (num1, num2) => num1 + num2;

console.log(addNum3(5, 10));

// Constructor
function Owner(name, address) {
  this.name = name;
  this.address = address;
  this.getInfo1 = function () {
    return `${this.name} @ ${this.address}`;
  };
}

Owner.prototype.getInfo2 = function () {
  return `${this.name} @ ${this.address}`;
};

const owner1 = new Owner("John", "Raja Chulan");
const owner2 = new Owner("Doe", "Maharajalela");

console.log(owner1.name);
console.log(owner2.address);
console.log(owner2.getInfo1());
console.log(owner2.getInfo2());
console.log(owner2);

// Class (ES6)
class Renter {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

console.log(window);

// Selector
console.log(document.getElementById("my_form"));
console.log(document.querySelector("h2"));
const items = document.querySelectorAll("li");
console.log(document.getElementsByClassName("blue-text"));

items.forEach((item) => {
  console.log(item);
});

const ol = document.querySelector("ol");
ol.remove();

const ul = document.querySelector("ul");
ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "World";
ul.lastElementChild.innerHTML("<h1>Hello world</h1>");

const btn = document.querySelector("#submit_button");

// CHECKPOINT: Event listener
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
  document.querySelector("#my_form").style.background = "#acc";
});

const btn2 = document.querySelector("#random_button");

// CHECKPOINT: Event listener
btn2.addEventListener("click", (e) => {
  document.querySelector("#my_form").style.background = "#f00";
}); 

const _ = require('lodash');
const numbers = [33,46,76,44,32,5];
_.each(numbers, function(number, i){
  console.log(number);
});