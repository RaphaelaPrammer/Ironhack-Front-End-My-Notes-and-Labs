// Iteration 1:
console.log("Iteration 1:");

let hacker1 = "Raphaela";
console.log(`The divers name is ${hacker1}`);
let hacker2 = "Raphaela";
console.log(`The navigators name is ${hacker2}`);

console.log("------------------------------");

// Iteration 2: Conditionals
console.log("Iteration 2: First version (traditional)");

// First Version:
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Second version -
console.log("Iteration 2: Second version with Ternary operator");

//Ternary Operator
//condition ? expression 1 : expression 2

hacker1.length > hacker2.length
  ? console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    )
  : console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );

hacker1.length > hacker2.length
  ? console.log("Driver 1 bigger")
  : hacker1.length === hacker2.length
  ? console.log("Both names are equal")
  : console.log("Navigator is bigger");

console.log("------------------------------");

//Iteration 3: Loops
console.log("Iteration 3:");
console.log("3.1 Uppercase and space:");

// first approach spimple and quick:
let upperCaseName = hacker1.toUpperCase();
console.log(upperCaseName.split("").join(" "));
//
// for loop:
let reservedName = "";
for (let i = 0; i < hacker1.length; i++) {
  reservedName += hacker1[i].toUpperCase() + " ";
}
console.log(reservedName);
// below is the same as the above for loop but a bit simpler.
let driverName = "";
for (const char of hacker1) {
  driverName += char.toUpperCase() + " ";
}
console.log(driverName);
//
//
//3.2 Reverse Order:
console.log("3.2 Reverse Order:");
//for loop:
let reversedName = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reversedName += hacker1[i];
}
console.log(reversedName);
//
//Simplified
const reverseNameSimplified = hacker1.split("").reverse().join("");
console.log(reverseNameSimplified);

// 3.3 lexicographic order
console.log("3.3 Lexicographic order");
// conditional simple
if (hacker1 > hacker2) {
  console.log("The drivers name goes first.");
} else if (hacker1 < hacker2) {
  console.log("the navigator goes first");
} else {
  console.log("What you have the same name??");
}
// same condition within a function
function ordenLexicoGrafico(string1, string2) {
  if (string1 > string2) {
    console.log("The drivers name goes first.");
  } else if (string1 < string2) {
    console.log("the navigator goes first");
  } else {
    console.log("What you have the same name??");
  }
}
ordenLexicoGrafico(hacker1, hacker2);

console.log("------------------------------");

// Bonus 1
console.log("Bonus1");
let lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius et blanditiis quod quidem dolor fuga hic saepe modi nisi itaque, non ipsum dolorem quos voluptatibus? Quo ex et nemo ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius et blanditiis quod quidem dolor fuga hic saepe modi nisi itaque, non ipsum dolorem quos voluptatibus? Quo ex et nemo ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius et blanditiis quod quidem dolor fuga hic saepe modi nisi itaque, non ipsum dolorem quos voluptatibus? Quo ex et nemo ea.";

// Counting Words
console.log(lorem.split(" ").length);

// Counting "et"
console.log(lorem.split(" et ").length - 1);

console.log("------------------------------");
//Bonus 2
console.log("Bonus2 Palindrome");
let phraseToCheck = "amor roma";
let phraseToCheckPalindrome = phraseToCheck.split("").reverse().join("");

if (
  phraseToCheck.toLowerCase() == phraseToCheckPalindrome.toLocaleLowerCase()
) {
  console.log("THE STRING IS A PALINDROME");
} else {
  console.log("THE STRING IS NOT A PALINDROME");
}
console.log(phraseToCheckPalindrome);
