![ironhack-logo-bcn](imgs\ironhack-img-bcn.jpg)

# Ironhack Course Conforcat November 2022

## Course Structure and Notes

This is the overview of the course content with personal notes.

### **[HTML](section-01-html)**

1. [Basic Layout](section-01-html\01-basic-layout.html) <br>
   In this course we learned the basic html layout.

2. [Meta Tags](section-01-html\02-meta-tags.html)
   <br>

3. [Typography](section-01-html\03-typography.html) <br>
   in this lecture we learned different types of typo tags like `<strong>`, `<p>`, `<del>`, `<b>`, `<i>`, `<em>`, `<mark>`, `<sub>`, `<sub>`

4. [Links](section-01-html\04-Links.html) <br>
   different ways to insert a link: \_blank, \_self, \_parent, \_top

5. [Images](section-01-html\05-images.html) <br>  
   Here we learned how to attach an image, an image as a link to an external page, also how to add a `<figcaption>`-Figure Tag to add a title for the image

6. [Lists](section-01-html\06-List.html) <br>
   Ordered and unordered Lists

7. [Layouts](section-01-html\07-layouts.html) <br>
   how to structure the body inside the html, with header, nav, main, article, div, section, footer

8. [Layout Example](section-01-html\08-layout-example.html) <br>

9. [Tables](section-01-html\09-tables.html)<br>

10. [Inline-vs-Block-Elements](section-01-html\10-inline-vs-block.html)<br>

11. [IDs](section-01-html\11-ids.html)<br>

12. [Classes](section-01-html\12-classes.html)<br>

13. [Semantic-Example](section-01-html\13-semantic-example-consolodated.html)<br>

14. [Forms](section-01-html\14-forms.html)<br>

- Form Elements and Syntax
- Form Attributes
- Input Types
- Input Attributes
- Example

- [Forms-Example](section-01-html\14-forms-exercise.html)<br>
  Registration form with a bit of JavaScript

### **[CSS](section-02-css)**

1. [Basics](section-02-css\01-basic.html) <br>

2. [Selectors](section-02-css\02-selectors.html)<br>

- **Root Selector**: : root{} - to declare global variables
- **Universal Selector**: \* {} - to reset the browsers default styles f.e. padding, margin, font-style...
- **Type Selector**: h1{} - this addresses all h1 ( or so ) tags in the document and gives them the same style.
- **ID Selector**: #id {}
- **Class Selector**: .classname {}
  <br>
  other selectors to direct childs of a parent-element:<br>
  **CSS Specificity**

  **CSS Pseudo selectors**

  2.1 [Basics-Exercise](section-02-css\02-1-exercise.htmlsection-02-css\02-1-exercise.html)<br>

3. [Fonts](section-02-css\03-fonts.html)<br>

4. [Text-Properties](section-02-css\04-text-properties.html)<br>

5. [Colors](section-02-css\05-colors.html)<br>
   different ways how to define a color:

- RGBA(A = Intensity)
- HEX
- Opacity: <br>
  0=Full Opacity, 1 = 0 Opacity

6. [Border-Background](section-02-css\06-border-backgrounds.html)<br>

7. [Box-Model](section-02-css\07-box-model.html)<br>

8. [Float](section-02-css\08-float.html)<br>

9. [Links-and-BUttons] (section-02-css\09-links-buttons.html)<br>

10. Menu Styling <br>

11. Position <br>

- Position absolute: sets the postition absolute to a relative element. only works if the container in which it is inside hast a relative position property.
- Position relative
- Position static (default)
- Position fixed:
- Position sticky: combination of static and fixed

The Position is set with TOP LEFT RIGHT BOTTOM properties.

12. Inline vs Block Elements

13. Media Queries

- to adapt the page for different screen sizes
- it allows to change certain properties to change depending the screen size
- examples:
- @media only screen and (max-width: 500px) {}
- @media (min-width: 501px) and (max-width: 768px) {}
- @media (min-width: 1201px){}
- @media (max-height: 500px{}

16. [Flexbox] (section-02-css\16-flexbox-basics.html)

[**LAB Skype Clone Exercise**] (LABS\HTML-CSS\lab-css-spotify-clone-master)

17. [GRID] (section-02-css\17-grid-basics.html)

- [external Link] (https://css-tricks.com/snippets/css/complete-guide-grid/)

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
