window.addEventListener("scroll", function () {
    var target = document.getElementsByTagName('h1');
    if (window.pageYOffset > 100) {
        target[0].style.color = "transparent";
        target[0].style.transition = ".2s";
    } else if (window.pageYOffset < 150) {
        target[0].style.color = "white";
        target[0].style.transition = ".2s";
    }
}, false);