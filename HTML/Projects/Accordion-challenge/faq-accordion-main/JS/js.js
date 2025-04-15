let acc = document.getElementsByClassName("plus-minus-icon");
let i;
let toggle = true;
for(i = 0; i< acc.length; i++) {
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");

        let panel = this.parentElement.nextElementSibling;
        if (panel.style.display == "block") {
            this.src = "./assets/images/icon-plus.svg"; //change
            panel.style.display = "none";
        } else {
            this.src = "./assets/images/icon-minus.svg"; //change
            panel.style.display = "block";
        }
    });
}