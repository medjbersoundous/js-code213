// before modifying anything in the page we first need to select the html elements we want to manipulate
// there are several selection methods :
    // getelementbyid(id) => selects an element by its id
    // queryselector(selector) => selects the first element that matches the css selector
    // queryselectorall(...) => selects all elements that match and returns a list
// ════════════════════════════════════════════════════════════

const title = document.getElementById("mainTitle"); // getelementbyid("mainTitle") => searches for the element with id="mainTitle"

// queryselector(".description") => the dot means we are searching for a css class
// it returns the first element that has the class "description"
const description = document.querySelector(".description");

// getelementbyid("list") => gets the list with id="list"
const listeUl = document.getElementById("list");

// get the buttons to use them in events later
const changeBtn = document.getElementById("changeTextBtn");
const addBtn = document.getElementById("addItemBtn");

// get the form and the input field
const form = document.getElementById("myForm");
const input = document.getElementById("nameInput");

// get a section
const section1 = document.getElementById("section1");

// get elements related to scroll and resize
const scrollBox = document.getElementById("scrollBox");
const scrollOutput = document.getElementById("scrollOutput");
const resizeOutput = document.getElementById("resizeOutput");


// modification of content and style
// when the user clicks the changeBtn button we will modify content style and attributes of some elements
// addeventlistener("click", function() { ... })
// we listen to the click on the button
// when the user clicks the function inside executes

changeBtn.addEventListener("click", function () {

  // textcontent modifies only the text of an element any html inserted will be treated as plain text
  title.textContent = "title changed";

  // innerhtml modifies the html content of an element here we insert a strong tag which will be interpreted by the browser so the text appears bold
  description.innerHTML = "<strong>description modified</strong>";

  // element.style.property modifies css directly on the element
  // css properties with dash are written in camelcase in javascript
  // background color becomes backgroundColor
  // font size becomes fontSize
  title.style.color = "purple";

  // setattribute(name value) adds or modifies an html attribute on the element
  // here we add name="soundous" to the title
  // we can create any attribute
  title.setAttribute("name", "soundous");

  // getattribute(name) reads the value of an existing attribute
  // here we get the value of the name attribute we just added
  // result in console is soundous
  console.log(title.getAttribute("name"));

  // classlist.add(classname) adds a css class to the element
  // the element keeps its old classes and adds this new one
  title.classList.add("highlight");

  // classlist.toggle(classname)
  title.classList.toggle("active");   // if the class active is missing it will be added
  // if the class active is present it will be removed
});


// creation of new html elements using javascript

addBtn.addEventListener("click", function () {

  // document.createelement(tag) creates a new html element in memory
  // it exists but is not visible in the page yet
  // we must insert it into the dom to make it appear
  const newItem = document.createElement("li");

  // give text to the new element
  newItem.textContent = "new item";

  // add a css class for styling or targeting later
  newItem.classList.add("box");

  // appendchild(element) inserts the element as the last child of listeUl
  // it appears at the end of the list
  listeUl.appendChild(newItem);

  // prepend(element) inserts the element as the first child of listeUl
  // it appears at the beginning of the list
  listeUl.prepend(newItem);

  // insertbefore(newElement referenceElement)
  // inserts newItem just before listeUl.lastelementchild
  // syntax parent.insertbefore(elementToInsert referenceElement)
  listeUl.insertBefore(newItem, listeUl.lastElementChild);
});


// removing and replacing elements

// select the first li in the page
const firstItem = document.querySelector("li");

if (firstItem) {
  // element.remove removes the element directly from the dom
  firstItem.remove();
}

// create a new li to replace the old one
const newLi = document.createElement("li");
newLi.textContent = "replaced item";

if (listeUl.firstElementChild) {
  // parent.replacechild(newElement oldElement)
  // replaces the first child of the list with newLi
  // the old element is removed and replaced
  listeUl.replaceChild(newLi, listeUl.firstElementChild);
}


// mouse events are triggered when the user interacts with the mouse such as hover click leave etc
// two important properties of the event object e
// e.target is the exact element that triggered the event
// e.currenttarget is the element that has the event listener attached

section1.addEventListener("mouseover", function (e) {
  // e.target is the exact element hovered by the mouse
  // if the mouse is over a p inside section1 then e.target is that p not section1
  console.log("target:", e.target);

  // e.currenttarget is always section1 because it has the listener
  console.log("currenttarget:", e.currentTarget);
});


listeUl.addEventListener("mouseover", function (e) {
  // check that the hovered element has the class box before applying style
  if (e.target.classList.contains("box")) {
    e.target.style.backgroundColor = "yellow";
  }
});

listeUl.addEventListener("mouseout", function (e) {

  // mouseout triggers when the mouse leaves the element
  // we reset background to empty string to return to default css
  if (e.target.classList.contains("box")) {
    e.target.style.backgroundColor = "";
  }
});


form.addEventListener("submit", function (e) {

  // preventdefault prevents the page from reloading on form submission
  // without this line the page would reload and data would be lost
  e.preventDefault();

  // get the value typed in the input
  const valueInput = input.value;

  // trim removes spaces at the beginning and end of the string
  // prevents users from submitting only spaces
  if (valueInput.trim() === "") {
    alert("please enter a name");
  } else {
    alert("hello " + valueInput);
  }
});

// scroll event triggers when the user scrolls inside scrollBox
// it can also be attached to window to detect full page scroll
scrollBox.addEventListener("scroll", function () {
  // update text to inform the user
  scrollOutput.textContent = "you are scrolling";
});


// resize event triggers whenever the browser window size changes
// attached to window because the whole window is resized
window.addEventListener("resize", function () {
  resizeOutput.textContent = "the size is being changed";
});


// load event triggers when the entire page is fully loaded
window.addEventListener("load", function () {
  console.log("page loaded");
});