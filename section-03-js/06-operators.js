// Assignment Operator
// Arithmic Operator
// Comparison Operator
// Logical Operators
// Bitwise Operators
// STring Operators

// JS Assignment Operators

// "+" "-" "*" "/", "++",  "--", "**"

console.log("Assignment Operators");
console.table([
  {
    operator: "=",
    name: "Assignment operator",
    example: "a = 7; // 7",
  },
  {
    operator: "+=",
    name: "Addition operator",
    example: "a += 5; // a = a + 5",
  },
  {
    operator: "-=",
    name: "Subtraction Assignment",
    example: "a -= 2; // a = a - 2",
  },
  {
    operator: "*=",
    name: "Multiplication Assignment",
    example: "a *= 3; // a = a * 3",
  },
  {
    operator: "/=",
    name: "Division Assignment",
    example: "a /= 2; // a = a / 2",
  },
  {
    operator: "%=",
    name: "Remainder Assignment",
    example: "a %= 2; // a = a % 2",
  },
  {
    operator: "**=",
    name: "Exponentiation Assignment",
    example: "a **= 2; // a = a**2",
  },
]);

// Arithmetical Operators

// Comparison Operators
// return either true or false
// "==" "!=" "===" "!==" ">" ">=" "<" "<="
let number1 = 3;
let number2 = 2;
console.log(number1 < number2);
console.log(number1 > number2);
console.log(8 == 8);
console.log(8 != 4);
console.log(8 === "8");
console.log(8 !== "8");
console.log(8 > 2);
console.log(8 < 7);
console.log(8 >= 2);
console.log(8 <= 2);

// Logical Operators
// "&& AND, "|| OR", "! NOT"
const numberA = 5;
const numberB = 3;
console.log(`the comparison of these number is: ${numberA < 6 && numberB < 5}`);

console.log(true && true);

console.log(true || false);

console.log(!true);

// STrings and operators

function addTwoNumbers(number1, number2) {
  return number1 + number2;
}
console.log(addTwoNumbers(2, 8));

let num = 18;
let str = "8";
let Obj;
console.log(num === str);
console.log(num !== str);
console.log(num >= 18);
