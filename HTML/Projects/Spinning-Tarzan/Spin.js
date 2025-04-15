Text.style.position = "absolute"

let a = 0;
let loop = function() {
    a+= 0.2;

    Text.style.transform = "translate(50vw, 50vh) translate(-50%, -50%) rotateZ(" + a + "deg) scale(0.2)"

    window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop)
document.body.style.overflow = "hidden"