// JS Variables

let number = 6;

// Declaration of variables
// 3 different types of variables

// var, let, const --> reserved keywords for variable declaration

var x; // although var is outdated.
let y;
console.log(
  `The old value of x is ${x} because it has only been declared but not initialized yet.`
);
// --> this is the variable declaration of x and y, but they are empty --> undefined.

x = "The Red Hot Chili Peppers";
// --> this is the initialization of the variable.
console.log(`The new value of x is ${x}`);

x = 0;
// The variable can be reassigned .
console.log(`The new value of x is ${x}`);

// NAMING CONVENTIONS:
// variables have to start with: letter(lowerCase), _, $,
let a = "hola";
let _a = "hola";
let $a = "hola";
console.log(a, _a, $a); // use coma to print different variables.

// Case sensitive
// color !== Color

// Words that are not accepted to initialize variables.
// new === reserved word.
// let new = 5;

// use descriptive names
// use "camelcase" for variables with more words eg. firstName, lastName, favBook, favMovies, ...

// VAR Convention
// declaration with var is not used anymore, only use let and const.
// its also possible to reasign values to the var variable

// CONST Convention
// 1. the value of CONST cannot be changed like with let or var.
// 2. more modern approach to use const than let.
const rockGroup = "Led Zeppelin";
console.log(rockGroup);
//rockGroup = "THe Doors"; // this is not possible
// const cannot be declared without initialization . there has always to be a value assigned to the const.
// const rockGroup  // --> this is not possible

// Example.
const myMessage = "Java Script is legit";
console.log(myMessage);

const isTrue = false;
console.log(isTrue);

let myArray = {
  firstName: "Raphaela",
  lastName: "Prammer",
  citiesLivedIn: ["Linz", "Vienna", "Barcelona", "Cadiz"],
  age: 34,
  dob: "15.08.1988",
  drinkAlcohol: true,
  hobby: [
    "concerts",
    "cooking yammie food",
    "eating yummie food",
    "go to have vermuth on saturdays and sundays",
    "drink Craft beer",
  ],
};

let firstName = "Raphaela";
let lastName = "Prammer";
let age = "34";
let hobby = " go to conciertos";

console.log(
  `Hello my name is ${myArray.firstName} ${myArray.lastName}, i am ${myArray.age} years old and i like to ${hobby}`
);

hobby = "cook yummy food";
console.log(
  `Hello my name is ${myArray.firstName} ${myArray.lastName}, i am ${myArray.age} years old and i like to ${hobby}`
);

hobby = "eat yummy food";
console.log(
  `Hello my name is ${myArray.firstName} ${myArray.lastName}, i am ${myArray.age} years old and i like to ${hobby}`
);

hobby = "go and have the Vermut on saturdays and sundays";
console.log(
  `Hello my name is ${myArray.firstName} ${myArray.lastName}, i am ${myArray.age} years old and i like to ${hobby}`
);

hobby = "drink Craft beer ";
console.log(
  `Hello my name is ${myArray.firstName} ${myArray.lastName}, i am ${myArray.age} years old and i like to ${hobby}`
);
