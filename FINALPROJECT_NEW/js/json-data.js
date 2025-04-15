// let xhr = new XMLHttpRequest();

// xhr.onload = function () {


//     if (xhr.status === 200) {
//         let responseObject = JSON.parse(xhr.responseText)

//         console.log(responseObject)

//         let newCard = '';

//         for (let i = 0; i < responseObject.open.length; i++) {
//             newCard += "<div class ='restuarants'>"
//             newCard += "<p><b>" + responseObject.open[i].locsation + "<br>"
//             newCard += responseObject.open[i] + "</b></p>"

//             let locs = Object.keys(restaurants)[i]
//             for (let i2 = 0; i2 < restaurants[locs].length; i2++) {
//                 newCard += "<p><b> Open:"
//                 newCard += restaurants[locs][i2].day + "&nbsp;"
//                 newCard += "<li>" + tims[locs][i2].time + "</b></p>"
//                 newCard += "</li>"
//             }

//             newCard += "</div>"
//         }

//         document.getElementById('content').innerHTML = newCard
//     }
//     else {
//         console.log('sorry. The timetable could not be loaded')
//     }
// }

// xhr.open('GET', './js/app.json', true)
// xhr.send(null)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//create an XMLHttpRequest object
let xhr = new XMLHttpRequest();

let xhr2 = new XMLHttpRequest();

let restaurants;


//when state of request changes
xhr.onload = function(){

    //if server response === 'ok', create some HTML
    if(xhr.status ===200){
        //create an object to get the data from the json file
        let responseObject = JSON.parse(xhr.responseText)

        console.log(responseObject)
        //string object to hold "card" info and layout
        let newCard='';

        //loop through responseObject to obtain all elements
        //and data to add to the "card" on the webpage
       
        //add new Card content to the webpage
        document.getElementById('content').innerHTML = newCard
    }
}

xhr2.onload = function(){
    if(xhr2.status===200){
        restaurants = JSON.parse(xhr2.responseText)
    }
    else{
        console.log("Sorry. The timetable could not be loaded")
    }
    
    let locs = Object.keys(restaurants) //gets each restaurant's name
    

    for(let i=0; i < locs.length; i++){
        let newCard = "";
            // newCard += "<div class='event'>"
            // newCard += "<img src='" + responseObject.events[i] + "'"
            // newCard += "alt ='" + responseObject.events[i].locsation + "' />"
            // newCard += "<p><b>" + responseObject.events[i].locsation + "<br>"
            // newCard += responseObject.events[i] + "</b></p>"

            //add session / restaurants to each locsation\

            let loc = locs[i];
            console.log(loc)
            for(let i2 = 0; i2 < restaurants[loc].length; i2++){
                newCard += ""
                newCard += "<li>" + restaurants[loc][i2].title + "&nbsp;"
                newCard += restaurants[loc][i2].time + "</li>"
            }

            //newCard += "</div>"
            let el = document.getElementsByClassName("open_time")[i];
            el.innerHTML = newCard;
        }
}

xhr2.open('GET', '../Data/app.json', true)
xhr2.send(null)

// //prepare the request
// xhr.open('GET', './js/json-data.js', true)
// //send the request
// xhr.send(null)