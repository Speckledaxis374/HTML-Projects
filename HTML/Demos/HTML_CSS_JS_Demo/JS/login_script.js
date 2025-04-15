const form = document.getElementById('signup');

//strings for error messages
const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter an email address";
const INVALID_EMAIL = "Please enter a valid email address";
const SELECTION_REQUIRED = "Please select an option";
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function hasEntry(input){
    console.log(input.value.trim)
    if(input.value.trim() ===""){
        //return error
       return showMessage(input, NAME_REQUIRED, false);
    }
    //return no error
    return showMessage(input, "", true);
}
function validEmail(input){
    console.log(input.value.trim)
    if(input.value.trim() ===""){
        //return error
        return showMessage(input, EMAIL_REQUIRED,false);
    }
    else if(emailRegex.test(input.value.trim())){
        //return error - email invalid
        return showMessage(input,EMAIL_REQUIRED,false)
    }

    //return no error
    return showMessage(input, "", true);
}

function hasChoice(){
    if((document,getElementById('subcribe').checked) || document.getElementById('unsubscribe').checked){
        return showMessage(subscribe, "", true);
    }

    return showMessage(subscribe,SELECTION_REQUIRED, false);
}

function showMessage(el, message, response){
/*@el - element in the HTML to be styled 
@message - the string that we updated in the HTML
@response - whether the message is blank(true) or error(false) 
*/
    const smallMSG = el.parentNode.querySelector("small");
    smallMSG.textContent = message;

    //ternery op - value being test? value_if_true : value_If_false
    el.className = response ? "success" : "error";
    return response
}

//handle functionality for form submission
form.addEventListener("submit", function(event){
    event.preventDefault();

    let nameValid = hasEntry(form.elements["name"]);
    let emailValid = validEmail(form.elements["email"]);
    let selection = hasChoice();

    if(nameValid && emailValid && selection){
        alert("Demo Only. All fields valid. No POST");
    }
})