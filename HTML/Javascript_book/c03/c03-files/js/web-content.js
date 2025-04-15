let msg = "Hello world!";
let el = document.getElementById("message");

function updateMessage(element, messageString) {
    /*
    Purpose: update the text content in an area on a webpage
    Parameters:
        @element - the element on the page that we are updating 
        @messagestring - the new message for the webpage
    */
    element.textContent = messageString;
}

function calculateArea(length, width) {
    /*
    Purpose: calculate the area of a rectangular shape
    Paramaters:
        @length - one measure of area, typically the x-axis
        @width - second measure of area, typically the y-axis
    Return: product of the two measures (length * width)
    */
    return Math.imul(length, width);
}

function addText(element, messageString) {
    /*
    Purpose: add existing text in an are on a webpage
    Paramaters:
        @element - the element on the page that text is added to 
        @messageString - the text that is addded to the page
    Return: none
    */
    element.innerText += messageString;

}

updateMessage(el, msg);
addText(el, calculateArea(5, 6));

let hotel = {
    //objects properties
    name: "Quay",
    rooms: 45,
    booked: 30,
    gym: true,
    pool: false,
    roomTypes: ["twin", "queen", "king"],
    //object method
    CheckAvailability: function () {
        return this.rooms - this.booked;
    }
};

let hotel2 = new Object();
hotel2.name = "DRUid Hill";
hotel2.rooms = 75;
hotel2.booked = 47;
hotel2.price = 40;
hotel2.price_discount = hotel2.price * .80 ;
hotel2.CheckAvailability = function () {
    return this.rooms - this.booked;
};

//object constructor
function Hotel(name, rooms, booked, price) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.price = price;
    this.CheckAvailability = function () {
        return this.rooms - this.booked;
    }
}

let Hotel_Price = new Object();


//let riverPark = new Hotel("Riverpark", 120, 87);
//let riverFront = new Hotel("River Front", 65, 35);

//let details1 = riverPark.name + 'rooms:' + riverPark.CheckAvailability();
//let detalis2 = riverFront.name + "rooms:" + riverFront.CheckAvailability();

//let el1 = document.getElementById('hotel1');
//el1.innerText = details1;
//let el2 = document.getElementById("hotel2");
//el2.innerText = detalis2;

// hotel2.gym = true;
// hotel2.pool = true;
 let elName = document.getElementById('hotelName');
elName.innerText = hotel2.name
// let el1 = document.getElementById('pool');
// el1.className = "Pool: " + hotel2.pool;
// let el2 = document.getElementById("gym");
// el2.className = "Gym: " + hotel2.gym;
let Dates = new Date().getDate() +7 ;
let elDate = document.getElementById('Date');
let year = new Date().getFullYear();
elDate.innerText = "\n" + "offer expires next friday " + "("+ Dates + " of April " + year + " )";
let elFoot = document.getElementById('footer');
elFoot.innerHTML = "<p>Copyright &copy;" + year + "</p>";
let elprice = document.getElementById('price')
elprice.innerText = "price:$" + hotel2.price;
let elprice_discount = document.getElementById('Discount')
elprice_discount.innerText = "\n" + "$" + hotel2.price_discount;
let elLabel = document.getElementById('Label')
elLabel.innerText = "\n" + "\n" + "room rate when you book two or more nights";
let beginDate = new Date('April 1, 2004');
let difference = new Date() - beginDate;
difference /= (365 * 24 * 60 * 60 * 1000);
msg = Math.floor(difference) + ' years of travel advice! ';
updateMessage(el, msg);
