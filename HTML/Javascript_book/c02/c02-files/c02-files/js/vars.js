let signText = "Programming and Software Lab";
let price =5.00,quantity = signText.length,total = price *quantity

let el = document.getElementById("cost");
el.textContent = "$"+total;

let username = " Howdy Wordlesstrio7", message = username + '\'s ' + "Enjoy 25% off until 3:00PM 3/18";
el = document.getElementById("title");
el.textContent = username;
el = document.getElementById("note");
el.textContent = message;