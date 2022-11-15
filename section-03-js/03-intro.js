// La consola

console.log("hello World");
// .log

console.log(document);
// opens #document in console -- there you can manipulate the document directly

// Dot Notation - to get specific information about the document
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all); // returns all positions semantically !! - but it also shows vulnerable infos
console.log(document.all[8]);

// DOM MANIPULATION

// -- Ways to change the content of H1 Element -- looking for the position of H1 of the document.all - which is 8.

// console.log((document.all[8].textContent = "WU TANG CLAN"));

// console.log((document.all[8].innerText = "WU TANG CLAN"));

console.log((document.all[8].innerHTML = "WU TANG CLAN"));

// Getting Infos about the document:
console.log(document.links);
console.log(document.images);

// Instance Methods -

// Table
//console.table()
console.table(["Barcelona", "Berlin", "Tokyo", "Liverpool"]);
console.log(["Barcelona", "Berlin", "Tokyo", "Liverpool"]);

console.table([
  "Berlin",
  "Hamburg",
  "Vienna",
  "Oporto",
  "London",
  "Budapest",
  "Amsterdam",
  "Prag",
]);
