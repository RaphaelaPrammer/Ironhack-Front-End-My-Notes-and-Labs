console.log("hello");

// Primitive Data
// - number
// - string
// - booleans
// - Null
// - undefined
// - symbols --- unique

// Example Primitive Data
// Numbers:
console.log(8);
console.log(8.5);

// nan === not a number
let f = "hello";
console.log(8 / f); // NaN

// Strings:
console.log("This is a String"); // with single or double quotes
console.log("8"); // will be parsed as a string and not a number as it is inside the ""

// Boolean: TRUE || FALSE
console.log(true);
console.log(false);

// null
// absence of any object value -- it is a falsy boolean operator
console.log(null);

// undefined:
// let rapha = undefined;
// console.log (rapha);

let rapha = ""; // JS parses this a empty string
console.log(typeof rapha);

// Symbol -- has a unique value!!
let barcelona = Symbol("born");
console.log(barcelona);
console.log(Symbol("born") === Symbol("born"));

// Non Primitive Data
// is a composition of primitive Data
// - Oject
// - Array

//Example No Primitive Data:
//Array:
console.log("This is my table of funk artists");
console.log("Using just strings");
console.table([
  "Daft Punk",
  "Marc Rebillet",
  "Silk Sonic",
  "Los Amigos Invesibles",
]);

console.log("This is a table Mix of primitive dataTypes");
console.table([
  "Daft Punk",
  5,
  "Marc Rebillet",
  false,
  "Silk Sonic",
  undefined,
  "Los Amigos Invesibles",
]);

// Example :
let myFavArtists = [
  "Lettuce",
  "Color Haze",
  "Budos Band",
  "Black Angels",
  "King Gizzard and The Lizard Wizards",
];
console.table(myFavArtists);

console.log(myFavArtists[3]);

// Object
// example: object = {
//     key: "value",
// }

let myBio = {
  firstName: "Raphaela",
  lastName: "Prammer",
  course: "FE-Development Full Time",
  hobbies: ["Concerts", "Cooking", "Eating"],
  skills: {
    HTML: "good",
    CSS: "okay",
    JS: "in progress",
  },
};

console.log("My Bio");
console.table(myBio);

// EXAMPLE ARRAY OF OBJECTS

let movies = [
  {
    movie: "Wolf of Wall Street",
    genre: ["Drama", "Action", "Comedy"],
    director: ["Martin Scorsese"],
    location: "New York City, NY",
    actors: ["Jonah Hill", "Margot Robbie", "Leo Di Caprio"],
    year: 2010,
  },
  {
    movie: "Fight Club",
    genre: ["Drama", "Noir", "Comedy", "Action"],
    director: ["David Fincher"],
    location: "Los Angeles",
    actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    year: 1999,
  },
  {
    movie: "The Neon Deamon",
    genre: ["Aleix", "Thriller"],
    director: ["Nicolas Winding Refn"],
    location: "Copenhagen",
    actors: ["Elle Fanning", "Jenna Malone", "Keanu Reves"],
    year: 2016,
  },
];
console.table(movies);
console.log(movies[0].movie);
console.log(movies[0].actors[1]); // get Margot Robbie

console.log(
  "My Favourite Actor of the WOlf of Wall Street ist" + movies[0].actors[1]
);

// Template Literals -- new Way of getting values of variables --> with Backticks ``
console.log(
  `using template literals: My Favourite Actor of ${movies[0].movie} would be ${movies[0].actors[1]}`
);

// Example:

let myArray = {
  firstName: "Raphaela",
  lastName: "Prammer",
  citiesLivedIn: ["Linz", "Vienna", "Barcelona", "Cadiz"],
  age: 34,
  dob: "15.08.1988",
  drinkAlcohol: true,
};

console.log(`Drinks Alcohol: ${myArray.drinkAlcohol}`);

let myBooks = [
  {
    bookName: "Sapiens - A Brief History of Humankind",
    genre: ["History", "Non Fiction"],
    authors: "Yuval Noah Harari",
    year: 2011,
    ISBN: "978-0062316097",
  },
  {
    bookName: "The Catcher in the Rye",
    genre: ["Novela", "abc"],
    authors: "Miguel Ángel Ruiz Macías",
    year: 1951,
    ISBN: "9784871876193",
  },
  {
    bookName: "The Four Agreements",
    genre: ["SPiritual", "Personal Development"],
    authors: "J.D. Salinger",
    year: 1997,
    ISBN: "9781878424310",
  },
];

console.log(`My Favourite Book is ${myBooks[0].bookName}`);
