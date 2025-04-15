// let hotItems = Array.from(getElementsByClassName("hot"));
// console.log(hotItems.length);
// for(let i=0; i< hotItems.length; ++i){
//     hotItems[i].className = 'cool';
// }
// let hotItems = document.querySelectorAll(".hot");




// document.querySelectorAll(".hot").forEach(function(item){
//     item.className = 'cool';
// })

// let startItem = document.getElementById('two');
// let prevItem = startItem.previousSibling;
// let nextItem = startItem.nextSibling;

// prevItem.className = 'complete';
// nextItem.className = 'cool';

let start = document.getElementsByTagName("ul")[0];
let item1 = start.firstElementChild;
let item2 = start.lastElementChild;

item1.className = 'complete';
item2.className = 'cool';

let list = document.getElementsByTagName("li")[1];
list.textContent = "bananas";
if(list.textContent === "bananas")list.className = 'cool';

list.innerHTML = '<a href=\"http://example.org\">' + list.textContent + '</a>'

if (list.textContent === "bananas")list.className = 'cool';

//create a list item and text
let newItem = document.createElement('li');
let newText = document.createTextNode('https');

//attach text to the list
newItem.appendChild(newText);
//find position to add the new item to our list
start.appendChild(newItem);


//remove a node / element from the DOM tree
let removeEl = Array.from(document.getElementsByTagName("li"))[3]
start.removeChild(removeEl)

let first = document.getElementById('one');
if(first.hasAttribute('class')){
    let attr = first.getAttribute('class')
    let SR = document.getElementById('scriptResults');
    SR.innerHTML = "<p>The first item has a class name: " + attr + "</p>";
} 

//changing attribute and printing to the screen
let fourth = document.querySelectorAll("li")[3];
fourth.setAttribute('class', 'complete')

if(fourth.hasAttribute('class')) {
    let attr = fourth.getAttribute('class')
    let SR = document.getElementById('scriptResults');
    SR.innerHTML = "<p>The fourth item has a class name: " + attr + "</p>";
} 

//changing attribute and printing to the screen
let third = document.querySelectorAll("li")[2];
third.removeAttribute('class')

if(third.hasAttribute('class')) {
    let attr = third.getAttribute('class')
    let SR = document.getElementById('scriptResults');
    SR.innerHTML = "<p>The third item has a class name: " + attr + "</p>";
} 