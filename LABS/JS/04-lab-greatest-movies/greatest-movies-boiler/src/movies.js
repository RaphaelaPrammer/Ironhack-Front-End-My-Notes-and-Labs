// const movies = require("./data.js");
// import { movies } from "./data.js";

console.log("hola");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  // Usamos el paramatero para iterar y crear un nuevo copia del array en base al metodo map y segmentamos por algo especifico dentro del map mediante una expresion que se encarga de llamar al director.

  // usamos la variable de arriba en conjunto con el metodo filter que le pasamos 2 parametros, uno para apuntar al nombre del director y el segundo es el numero de# del director en el array y comparamos en base a la primera instancia que aparece el nombre del director con las otras veces que aparece para poder filtrar

  const rawList = moviesArray.map((movie) => movie.director);
  const cleanList = rawList.filter(
    (director, numeroDePocisionDirectorEnElArray) =>
      rawList.indexOf(director) === numeroDePocisionDirectorEnElArray
  );
  return cleanList;
}

//----------------------
//-------------------------------------------------------OK--
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  const moviesStevenDrama = moviesArray.filter(
    (movieItem) =>
      movieItem.director == "Steven Spielberg" &&
      movieItem.genre.includes("Drama")
  );
  return moviesStevenDrama.length;
}
console.table(`Number of Stevens Drama movies is ${howManyMovies(movies)}`);

//------------------------------works in console but not in jasmine------------------
// Iteration 3: All scores average - Get the average of all scores with 2 decimals-
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;

  //  MAP  + Reduce in One!! -- thats neat!!!
  const sum = moviesArray.reduce(
    (total, movie) => (!movie.score ? total : total + movie.score),
    0
  );

  // Map and reduce in two steps! - without condition when movie.score is empty!
  // const scores = moviesArray.map((movie) => parseFloat(movie.score));
  // const sum = scores.reduce((total, movie) => total + movie, 0);

  //// Map and reduce in two steps! - with condition when movie.score is empty!
  // const scores = moviesArray.map((movie) => parseFloat(movie.score));
  // const sum = scores.reduce(
  //   (total, movie) => (!movie ? total : total + movie),
  //   0
  // );

  // instead of Reduce - loop through scores-array with a for loop
  // let totalScore = 0;
  // for(let i=0; i<scores.length; i++){
  // totalScore = scores[i] + totalScore;
  // }

  return parseFloat((sum / moviesArray.length).toFixed(2));
}
console.log(`Average of score of all movies is ${scoresAverage(movies)}`);

//-----------------------------------------------
// Iteration 4: Drama movies - Get the average of Drama Movies
dramaMoviesScore = (moviesArray) => {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (!dramaMovies.length) return null;

  const dramaScores = dramaMovies.map((movie) => movie.score);
  const scoreSumDrama = dramaScores.reduce((total, score) => total + score, 0);

  // MAP + REDUCE in one !!
  //const scoreSumDrama = dramaMovies.reduce((total, movie) => total + movie.score, 0);

  return parseFloat((scoreSumDrama / dramaMovies.length).toFixed(2));
};

console.log(`The average score of Drama movies is ${dramaMoviesScore(movies)}`);

// REUSE OF THE FUNCTION ABOVE !!!!!! -- YEAH!!!
// function dramaMoviesScore(moviesArray) {
//   const dramaMovies = moviesArray.filter(movie => movie.genre.includes ("Drama"));
//   return scoresAverage(dramaMovies);
// };
// console.log(dramaMoviesScore(movies));

//-------------------------year Order OK but Titles with same  year not ?????????--------
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)-----

function orderByYear(moviesArray) {
  let copy = [...moviesArray];
  let copy2 = moviesArray.map((movie) => movie); // other way to create a copy - with map

  const copySortedYear = copy.sort((a, b) => {
    if (a.year > b.year) return a.year - b.year;
    if (a.year < b.year) return a.year - b.year;
    else return a.title.localeCompare(b.title);
  });

  return copySortedYear;
}

console.log(orderByYear(movies));

//-------------------------------------------------------------OK
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (moviesArray) => {
  return moviesArray
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);

  // let copy = [...moviesArray]; // is not necessary!!! array Methods already make a copy!
  // let movieTitlesAscending = copy
  //   .sort((a, b) => (a.title > b.title ? 1 : -1))
  //   .map((movie) => movie.title)
  //   .slice(0, 20);
  // return movieTitlesAscending;
};
console.table(orderAlphabetically(movies));

//-----------------------------------------------
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {}

//--------------------------------------------------
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
