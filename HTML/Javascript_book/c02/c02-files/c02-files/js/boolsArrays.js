let inStock = false;
let shipping = true;

let elStock = document.getElementById("stock");
//set class name with value of inStock variable
elStock.className = inStock;

let elShip = document.getElementById('shipping');
//set class name with value of shipping variable
elShip.className = shipping

let colors = ['white', 'black', 'orange', 'Custom'];
colors[2]='green';
colors[1]='beige';
let elColors = document.getElementById('colors');
let index = Math.floor(Math.random() * colors.length);
// elColors.textContent = colors[0]+', '+ colors[1];
elColors.textContent = colors[index];