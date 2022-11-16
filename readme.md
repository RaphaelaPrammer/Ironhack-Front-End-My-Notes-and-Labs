![ironhack-logo-bcn](./imgs/ironhack-img-bcn.jpg)

# Ironhack Course Conforcat November 2022

## Course Structure and Notes

This is the overview of the course content with personal notes.

### **[HTML](section-01-html)**

1. [Basic Layout](./section-01-html/01-basic-layout.html) <br>
   In this course we learned the basic html layout.

2. [Meta Tags](./section-01-html\02-meta-tags.html)
   <br>

3. [Typography](./section-01-html\03-typography.html) <br>
   in this lecture we learned different types of typo tags like `<strong>`, `<p>`, `<del>`, `<b>`, `<i>`, `<em>`, `<mark>`, `<sub>`, `<sub>`

4. [Links](./section-01-html\04-Links.html) <br>
   different ways to insert a link: \_blank, \_self, \_parent, \_top

5. [Images](./section-01-html\05-images.html) <br>  
   Here we learned how to attach an image, an image as a link to an external page, also how to add a `<figcaption>`-Figure Tag to add a title for the image

6. [Lists](./section-01-html\06-List.html) <br>
   Ordered and unordered Lists

7. [Layouts](./section-01-html\07-layouts.html) <br>
   how to structure the body inside the html, with header, nav, main, article, div, section, footer

8. [Layout Example](./section-01-html\08-layout-example.html) <br>

9. [Tables](./section-01-html\09-tables.html)<br>

10. [Inline-vs-Block-Elements](./section-01-html\10-inline-vs-block.html)<br>

11. [IDs](./section-01-html\11-ids.html)<br>

12. [Classes](./section-01-html\12-classes.html)<br>

13. [Semantic-Example](./section-01-html\13-semantic-example-consolodated.html)<br>

14. [Forms](./section-01-html\14-forms.html)<br>

- Form Elements and Syntax
- Form Attributes
- Input Types
- Input Attributes
- Example

- [Forms-Example](./section-01-html\14-forms-exercise.html)<br>
  Registration form with a bit of JavaScript

### **[CSS](./section-02-css)**

1. [**Basics**](./section-02-css\01-basic.html) <br>

2. [**Selectors**](./section-02-css\02-selectors.html)<br>

- **Root Selector**: : root{} - to declare global variables
- **Universal Selector**: \* {} - to reset the browsers default styles f.e. padding, margin, font-style...
- **Type Selector**: h1{} - this addresses all h1 ( or so ) tags in the document and gives them the same style.
- **ID Selector**: #id {}
- **Class Selector**: .classname {}
  <br>
  <br>
  **CSS Specificity** <br>
  - p.intro {} -> selects all p elements with the class="intro"
  - div,p {} -> selects all div and p elements
  - div p {} -> selects p elements inside div elements
  - div+p {} -> selects the first p element that is places inmediately after div elements -->"**first sibling**"
  - p~ul {} -> selects every ul that is a **sibling** of a p element
  - div>p {} -> selects p elements wehre the parent is a div element --> "**direct children**"
    <br>
    **CSS Pseudo selectors**<br>
  - a:hover
  - a:visited
  - input:focus
  - input:valid
  - input::placeholder
  - p::first-letter
  - p::first-line
  - p::after | before
  - ::selection
    <br>
    **directing certain elements (eg. p)**:<br>
  - p:first-child --> selects every p that is the first child of its parents
  - p:last-child
  - p:nth-child(n)
  - p:nth-last-child(n)
  - p:last-of-type
  - p:nth-last-of-type(n)
  - p:nth-of-type(n)
  - p:only-child

3. [**Fonts**](./section-02-css\03-fonts.html)<br>

- insert an external font from google fonts with the @import in stylesheet.

4. [**Text-Properties**](./section-02-css\04-text-properties.html)<br>

5. [**Colors**](./section-02-css\05-colors.html)<br>
   different ways how to define a color:

- RGBA(A = Intensity)
- HEX
- Opacity: <br>
  0=Full Opacity, 1 = 0 Opacity

6. [**Border-Background**](./section-02-css\06-border-backgrounds.html)<br>

- different ways to style borders
- how to insert an image in CSS
- background-image: url("...")
- background-size: cover || contain;
- background-repeat: no-repeat;
- background-position: center || top

7. [**Box-Model**](./section-02-css\07-box-model.html)<br>

- padding pushes the content to the inferior
- margin

8. [**Float**](./section-02-css\08-float.html)<br>

- float: left || right ||
- clear: both --> at some point you need to add a div class="clear" .clear {clear:both} to not overwrite content

9. [**Links-and-Buttons**](./section-02-css\09-links-buttons.html)<br>

10. [**Menu Styling**](./section-02-css\10-menu-styling.html) <br>

11. [**Position**](./section-02-css\11-position.html) <br>

- Position absolute: sets the position absolute to a relative element. only works if the container in which it is inside hast a relative position property.
- Position relative
- Position static (default)
- Position fixed:
- Position sticky: combination of static and fixed

The Position is set with TOP LEFT RIGHT BOTTOM properties.

12. [**Inline vs Block Elements**](./section-02-css\12-inline-vs-block.html)

13. [**Media Queries**](./section-02-css\15-media-query-example.html)

- to adapt the page for different screen sizes
- it allows to change certain properties to change depending the screen size
- examples:
- @media only screen and (max-width: 500px) {}
- @media (min-width: 501px) and (max-width: 768px) {}
- @media (min-width: 1201px){}
- @media (max-height: 500px{}

16. [**Flexbox**](./section-02-css\16-flexbox-basics.html)

- display: flex
  **Flex Container Properties** (parent container)<br>
- flex-direction: row || column || column-reserve || row-reserve
- justify-content --> to align items along the x-axis: flex-start || flex-end || center || space-between || space-around || space-evenly
- align-items --> to align items along the Y-axis: flex-start || flex-end || center || baseline || stretch
- align-content --> to align flex lines
- flex-wrap
- Shorthand: flex-flow: flex-direction flex-wrap

**Flex Items Properties** (child elements) <br>

- order: number --> gives a specific order to the flex items
- flex-grow: number -->
- flex-shrink: number --> specifies how much a flex item shrinks relative to the rest.
- flex-basis: px --> specifies the initial length of a flex item
- Shorthand: flex: flex-grow flex-shrink flex-basis
- align-self --> overrides the align-items prop of the flex-container.

17. [**GRID**](./section-02-css\17-grid-basics.html)

- [external Link](https://css-tricks.com/snippets/css/complete-guide-grid/)

- Grid Container - "Parent Container" in which the grd is being applied.
- Grid Item: direct children, but children of children (sub-item) ist not being affected
- Grid Line: vertical or horizontal lines
- Grid Cell: is a single unit of the grid.
- Gid Track: whole column or row
- Gid Area: area of various cells.

**Display Properties for the Parent (Grid Container):** <br>

- display: grid || inline-grid
- grid-template-columns: "size of first column" "size of second column" auto "size of fourth column" "size of fifth column"...
- grid-template-rows: "size of first row" "size of second row"...
- --> can be in px % auto
- **MAX amount of columns is 12!!!**
- "-1" can be used for the last row.
- [first] 40px [line2] 20px... inside the [] you can give the lines a specific name
- a line can also have more than 1 name [name 1 name 2] x px e.g. [row1-end row2-start]
- **Repeat**: repeat(number of columns, fraction(fr)||size(px) [name of column])
- The **fr** --> calculates the size to be evenly spreaded inside the size of the container.
- grid-template-area: adding names to areas/cells which are then referenced to the grid area name of the child child element.
- --> grid-template-area Name has to be defined in the parent-div-class --> makes reference to the grid area Name --> which is defined in the child-div-class
- **Shorthand:** grid-template: [row 1 name] 25% "header header header" [row 2 name] 25% "footer footer footer" / auto auto
-
- column-gap // row-gap // grid-column-gap // grid-row-gap
- gap Shorthand: gap: 10px(row-gap) 20px(column-gap)

**Display Properties for the Children (Grid Items)** <br>

- grid-column-start: number of column || or name of column
- grid-column-end:number of column
- grid-row-start: number of row
- grid-row-end: number of row
- ..> with SPAN it fills out
- Shorthand for this:

  - --> grid-column: 3 / span 2 --> (start at column 2 and expand 2 positions)
  - --> grid-row: third-line / 4 --> (start at third line )

- [Grid Example 1](./section-02-css\17.1-grid-example1.html)
- [Grid Example 2](./section-02-css\18-grid-basic-example.html)
- [Grid Example 3 - layout e-commerce](./section-02-css\18-grid-example-e-commerce-exapmle-.html)

- [Grid Example INSTAGRAM LANDING PAGE CLONE](./section-02-css/exercise-Instagram-Grid/index.html)
  - --> work in progress

[**LABORATORIES**]
<br>
[**LAB Spotify Clone Exercise**](./LABS/HTML-CSS/lab-css-spotify-clone-master/index.html)

[**JAVASCRIPT**]
<br>
Potential Interview questions (each link will take you to external resources, feel free to click them and learn more): JavaScript is a [prototype-based](https://en.wikipedia.org/wiki/Prototype-based_programming), [multi-paradigm](https://en.wikipedia.org/wiki/Programming_paradigm#Support_for_multiple_paradigms), [dynamically typed language](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures), [supporting object-oriented](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS), [imperative and structured](https://en.wikipedia.org/wiki/JavaScript#Imperative_and_structured), and declarative (e.g. [functional programming](https://en.wikipedia.org/wiki/JavaScript#Functional)) styles.
<br>

[**01-JS-basics**](./section-03-js/01-js-basics.html)

- insert JS inside the HTML inside the body in a script tag.
- linking an external file with "<"script scr="link to js file"">"

[**03-JS-Intro**](./section-03-js/03-intro.js)

- Introduction of the console
- console.log(document) --> opens #document in the console and shows the structure and all elements of the document.
- Dot Notation - to get specific information about the document e.g. console.log(document.URL)
- document.all -- returns all posititions sementically
- with innerText / innerHTML this way you can also change the content of the html e.g. console.log(document.all[8].innerText = "WU TANG CLAN IS FOR THE CHILDREN")
- console.table(["Barcelona", "Berlin", "Tokyo", "Liverpool"]) --> shows a table in the console

[**Data Types**](./section-03-js/04-data-types.js)

- Primitive Data: number, string, boolean, Null, undefined, symbol
- Non Primitive Data:
  - Object { key: "value", key: "value"}
  - Array ["text", "text", "text"]
  - usual structure: various objects within an array, in those objects there can be other objects or arrays --> NESTED STRUCTURE
  - arrayName = [ {key: "value" }, {key: ["text", "text"]}]
  - Accessing Objects with .dotNotation
  - Accessing Arrays with []BracketNotation

[**Variables**](./section-03-js/05-variables.js)

- Variable Declaration with let varName , var varName (outdated)
- Variable Initialization varName = 1; varName = "Hello"
- const firstName = "Raphaela"
  - with const you have to declare and initialize at the same time.
- Naming Conventions:
  - variables have to start with letter(lowerCase), \_ (underline), $
  - camelCase !!!!
- let and var variables can be reassigned, const cannot be reassigned.
- TEMPLATE LITERAL `${variable}`

[**Operators**](./section-03-js/06-operators.js)

- Assign Operators:
  - "+" "-" "\*" "/", "++", "--", "\*\*"(exponention)
- Arithmetical Operators:
  - "==" "!=" "===" "!==" ">" ">=" "<" "<="
  - return either true or false
- Logical Operators:
  - "&& AND, "|| OR", "! NOT"

[**Conditionals**](./section-03-js/07-conditionals.js)

- If Statement
  - if (condition) { <br>
    code to execute <br>
    } <br>
- If .. Else Statement:
  - if (condition) { code to execute if condition is true } else { other code if first condition is false}
- Else If Statement .. connection of various if statements
  - if(condition1) {code to execute} else if (condition2) {code to execute} else if (condition 3) {code to execute} else {default code if nothing of the above is true}
- nested conditionals are possible too

- **Ternary Operator**:
- condition ? expr1 : expr2
  - if condition is true, expr 1 will be executed, if condition is false, expr 2 will be executed --> 50/50 Use Cases
- condition1 ? expr1 : condition2 ? expr3 : expr 2

- **Switch Statement**:
  - switch ( variable/expression) {
  - case "x":
  - code to execute;
  - break;
  - case "y":
  - code to execute;
  - break;
  - default:
  - code to execute;
  - }

**Methods**

- .toUpperCase()
- split()
- reverse()
- join()
- parseInt()
- parseFloat()

[**Functions**](./section-03-js/08-functions.js)

- for code which you want to reuse.
- better to make "small" functions instead of "long complex" functions --> divide complex problem in several smaller programs.
- Syntax:
  - function functionName (parameter1, parameter 2, ...) { code }
- Call the function:
  - functionName (argument1, argument);
- Return Statement:
  - indicates the end of a function, code that comes afterwards will not be executed
  - it will be stored and can be used to return the value in a variable,
- A function can be inserted as a value in a variable

- Anonymus Function -

- Function Expression - are anonymus functions without name stored in a variable and it runs alone

- **Arrow Function:**
- let myFunctionName = (param1, param2) => {code return}
  - if only one line of code/ one instance of code -> "return" and {} is not necessary
  - if only one parameter -> () is not necessary

[**LOOPS**](./section-03-js/09-loops.js)

1. For Loop

- for (initial expression; condition; actualized expression) { code }
- [i] .. to loop in arrays
- . .. to get information of an object in an array

2. While Loop:

- while (condition){code; variation of variable}
- the variable inside the condition has to be changed, otherwise it will end in an infitive loop.

[**ARRAY METHODS**](./section-03-js/10-array-methods.js)

1. .map( () => {})

- creates a new array with the results of calling a function provided on each element of this array.

2. .filter( () => {}):

- creates a new array with only the elements that meet the condition inside the function

3. .sort()

- This method is used to sort the array elements in ascending or descending order.
- arr.sort((a,b)=>(a > b ? -1 : 1)) --> ascending
- arr.sort((a,b)=>(a > b ? 1 : -1)) --> descending

4. .forEach( (element) => { } )

- This method helps to loop over an array by executing a callback function provided(CALLBACK) for each element of an array.

5. .concat(array1, array2)

- This method is used to merge two or more arrays [ARRAYS] and returns a new array, without changing the existing arrays.

- combines two or more arrays and returns a new array

6. .every( (element) => { } )

- returns either true or false depending a condition, checks every element of the array

7. .some()

- returns either true or false if at least one of the elements passes the condition

8. .includes()

- checks if there is an element inside the array that passes the condition, returning true or false.

9. .join()

- returns a new string which will be combined by the thing in the () eg. (""),

10. .reduce((total, current)=> { })

- This method applies a function against an accumulator and each element of the array to reduce it to a single value.
- array.reduce((total, current) => total + current) --> SUM OF ARRAY
- array.reduce((total, current) => total.length >= current.length ? total : current) --> LONGEST ELEMENT OF AN ARRAY

11. .find()

- arr.find((element) => condition for the element we want to find)
- returns the value of the first element of an array that passes the test in a check function.

12. .findInIndex()

- returns the index of the first element of an array that passes the test in a check function.

13. .indexOf()

- returns the index of the first occurrence of the specified element ("dog") in the array, or -1 if it is not found.
- .indexOf("dog")

14. .fill()

- fills the elements of an array with a static value and returns the modified array.
- array.fill(["dd", "Hello"])

15. .slice()

- returns a new array with the specified elements from start to end.
- array.slice(beginning index, ending index)

16. .reverse()

- inverts an array instead. The element at the last index will be the first and the element at index 0 will be the last.
- array.reverse()

17. .push()

- **adds** one or more elements to the **end** of the array and returns the new length of the array.
- array.push("Dog")

18. .pop()

- **removes** the last element from the **end** of the array and returns that element.
- array.pop()

19. shift()

- **removes** the **first** element at the beginning of an array and returns the new length of the array.
- array.shift()

20. .unshift()

- **adds** one or more elements to the **beginning** of an array and returns the new length of the array.
- array.unshift("Horse")
  <br>
  <br>
  other Methods within in the Lab <br>

- Math.max(num1, num2)
- true = 1, false = 0

- toFixed() --> rounds a number to a specific number of decimals. --> number.toFixed(number of decimals)

[**DOM MANIPULATION 1**](./section-03-js/11-DOM-Manipulation.js)

- each element of the document is possible to target.. for further use/manipulation
- console.log(document.title)
- console.log(window)

**How to target the elements**

1. getElementById - Method:

- document.getElementById("id-name")

2. getElementByClassName - Method:

- document.getElementByClassName("class-name")
- if there are various classes with the same name - possiblity to target each one by their index [0]

3. getElementByTagName () - Method:

- document.getElementByTagName("h3")[0]
- by [] Notation target specific h3

4. getElementByQuerySelector() - Method:

- uses the same approach and specifity as in CSS
- document.getElementByQuerySelector("#id-name")
- document.getElementByQuerySelector(".class-name")
- document.getElementByQuerySelector("h5") --> targets the first h5 tag!
-
- - document.getElementByQuerySelector("#id-name .class-name .class-name2")

5. querySelectorAll(".className")

6. Selectors for Parent, Children and Siblings

- document.querySelector("#idname").lastElementChild
- document.querySelector("#idname").firstElementChild
- document.querySelector("#idname").children
- document.querySelector("#idname").children[2]
- document.querySelector("#idName").parentNode --> shows the parent id/class
- document.querySelector("#idName").parentElement
- document.querySelector("#idname").nextElementSibling
- document.querySelector("#idname").previousElementSibling

[**Dom Manipulation 2**]<br>

- create Elements via JS:

  - var = document.createElement("div")

- Insert Content via JS:
- .innerText // .innerHTML
-
- .appendChild
  - var = document.createElement("div")
  - var2 = document.querySelector("#parent #firstChild).appendChild(var)
  -
- add new class with JS:

  - createElement.classList.add("")

- assign an element a className
  - var = document.createElement("div")
  - var.className = "example"

---

- insert an element before another one

  - var.insertBefore(new Element, element we want to have above)

- var.replaceChild(newElement, what we want to replace)

- var.removeChild(element we want to remove)

**insert CSS STyles with JS**

- create a variable which targets the button
  - buttonEL = document.querySelector("#master")
- create a function
  - addFunction () => buttonEl.classList.add("classNameCSS") "no dot necessary here as it will insert this classNmeCSS in Html !!!"
- give it an event:

  - addEventListener("type of event eg click", functionName)
  - buttonEl.addEventListener("click", addFunction)

- .classList.add/remove/toggle

- toggle is to alterate between classes

**remove classes**

-
