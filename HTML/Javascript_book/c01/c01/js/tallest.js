let buildings = ["eli place", "taj mahal","Hamburger Rd","ECC Palace","Empire State Blvd"];
let heights = [350, 500, 125, 25, 470]
let tallest = 0
//for every height, run calc function on the height
heights.forEach(calc);
function calc(item, index){
    document.getElementById("demo").innerHTML += index + ":" + item + "<br>";

    if(item > tallest){
        tallest = item;
        tallest_index = index;
    }
}
document.write("<h3>Tallest Feet: " + tallest + "</h3>");
document.write("<h3>Tallest index: " + tallest_index + "</h3>")
document.write("<h3>Tallest Building: " + buildings[tallest_index] + "</h3>")
/*buildings[350] = "eli place"
buildings[500] = "taj mahal"
buildings[125] = "Hamburger Rd"
buildings[25] = "ECC Palace"
buildings[470] = "Empire State Blvd"
let text = buildings.toString
document.write(buildings + height)*/