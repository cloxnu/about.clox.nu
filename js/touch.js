add_touch();

function add_touch() {
    for (let element of document.getElementsByClassName("touch")) {
        element.addEventListener("touchstart", function (e) {
            e.stopPropagation();
            element.classList.add("on-touch");
        });
        element.addEventListener("touchend", touchend)
        element.addEventListener("touchcancel", touchend)
    }

    function touchend(e) {
        e.stopPropagation();
        for (let element of document.getElementsByClassName("on-touch")) {
            element.classList.remove("on-touch");
        }
    }
}
