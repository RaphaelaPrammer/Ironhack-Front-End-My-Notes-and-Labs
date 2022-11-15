console.log("Simple Function");
function greet() {
  console.log("Hola");
}
greet();

console.log("------------------");
console.log("Simple Function with Parameters");

// function greetWithParams(name) {
//   console.log(`Hola ${name}`);
// }
// let userName = prompt("Please Enter your name");
// greetWithParams(userName);

//-----------------------------------------------------
console.log("------------------");
console.log("Simple Function with Two Parameters");

// function add(a, b) {
//   console.log(`The total of the sum is: ${a + b}`);
// }
// add(2, 2);

//--------------------------------------------------
console.log("------------------");
console.log("Simple Function with Two Parameters and Return Statement");

// function addWithReturn(a, b) {
//   return a + b;
// }
// let number1 = parseFloat(prompt("1st Number"));
// let number2 = parseFloat(prompt("2nd Number"));
// let result = addWithReturn(number1, number2);
// alert(`The sum of those numbers is ${result}`)
// console.log(`The sum of those numbers is ${result}`);

// ----------Function Expression------------------------------
console.log("------------------");
console.log("Function Expressions");
let x = function (num) {
  return num * num;
};
console.log(x(2));

let y = x(2);
console.log(y);

//---------ARROW FUNCTIONS--------------
console.log("------------------");
console.log("Arrow Function");

let exampleFunc = function (x, y) {
  return x * y;
};

let exampleArrowFunc1 = (x, y) => x * y;
let exampleArrowFunc2 = (x, y) => {
  return x * y;
};
console.log(exampleArrowFunc2(3, 3));
// all this above is the same

//---------EXAMPLE ARROW FUNCTIONS--------------
console.log("------------------");
console.log("Example Arrow Function 1");
let noParameter = () => console.log("Hello");
noParameter();

console.log("------------------");
console.log("Example Arrow Function 2 with one Parameter");
let oneParameter = (x) => console.log(`Hello ${x}`);
oneParameter("Aleix");

console.log("------------------");
console.log("Arrow Function - Function Expression");
let age = 17;
let welcome =
  age < 15
    ? () => console.log("Wutangclan")
    : () => {
        console.log("C.R.E.A.M");
      };
welcome();

console.log("------------------");
console.log("Arrow Function - multiple parameters - multiple lines of code");
let sum = (a, b) => {
  let result = a + b;
  return result;
};
let resultOfSum = sum(5, 5);
console.log(resultOfSum);

// EJERCICIO #1
// Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn.
// Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown.
//Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera.
//Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad".
//Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.

let livesIn = {
  livesInCity: true,
  livesInTown: false,
};
let firstName = "Raphaela";
age = 34;
const livesWhere = (firstName, age, livesIn) => {
  if (livesIn.livesInCity) {
    return `${firstName} is ${age} years old and lives in the city.`;
  } else {
    return `${firstName} is ${age} years old and lives in the pueblo`;
  }
};
let result = livesWhere(firstName, age, livesIn);
console.log(result);

//-----------Version Ternary ----------------------
const livesWhere2 = (firstName, age, livesIn) => {
  livesIn.livesInCity
    ? `${firstName} is ${age} years old and lives in the city.`
    : `${firstName} is ${age} years old and lives in the pueblo`;
};
let result2 = livesWhere2(firstName, age, livesIn);
console.log(result);

//---------------
const myFunction4 = (firstName, age, livesIn) => {
  let tCity;
  switch (true) {
    case livesIn.livesInCity:
      tCity = "Ciudad";
      break;
    case livesIn.livesInTown:
      tCity = "Pueblo";
      break;
    default:
      break;
  }
  return `${firstName} is ${age} years old and lives in ${tCity}`;
};
console.log(myFunction4(firstName, age, livesIn));
