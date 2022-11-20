document.addEventListener("DOMContentLoaded", function(event) {
    document.addEventListener("scroll", function(event) {
        const animatedBoxes = document.getElementsByClassName("special-cards");
        const windowOffsetTop = window.innerHeight + window.scrollY;

        Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
            
            const animatedBoxOffsetTop = animatedBox.offsetTop + 400;
            console.log(animatedBoxOffsetTop);
            if (windowOffsetTop >= animatedBoxOffsetTop) {
                addClass(animatedBox, "slider");
            }
        });
    });
});

function addClass(element, className) {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className) === -1) {
        element.className += " " + className;
    }
}

window.onload = function() {
    document.getElementsByTagName("header")[0].classList.add('headerMove');
}
