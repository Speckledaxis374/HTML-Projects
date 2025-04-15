const COST_PER_TILE = 5;
const TAX_RATE = 0.75;
const SHIPPING_RATE = .10;

let greet = 'Howdy and good day '
let user = 'FirstName'
let msg = greet + user + ", verify your order";

let elGreet = document.getElementsByClassName("message");
elGreet[elGreet.length-1].textContent = msg;

//calculations
let sign = "It's ALWAYS Eli's fault!!!!!!!!!";
let tiles = sign.length;
let subtotal = tiles * COST_PER_TILE;
let tax = subtotal * TAX_RATE;
let shipping2 = subtotal * SHIPPING_RATE
let grandTotal = subtotal + shipping2 +tax;

//output
let element = document.getElementById('userSign');
element.textContent = sign;

element.document.getElementById('tiles');
element.textcontent = tiles;

element.document.getElementById('subTotal');
element.textContent = '$'+subtotal;