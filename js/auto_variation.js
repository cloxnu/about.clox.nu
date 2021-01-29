const elements = document.getElementsByClassName("auto_variation")

window.addEventListener('scroll', function (e) {
    for (const ele of elements) {
        const screenHeight = document.documentElement.clientHeight
        const y = ele.getBoundingClientRect().top + ele.offsetHeight / 2.0
        // console.log(y, screenHeight)
        if (screenHeight * 0.25 < y && y < screenHeight * 0.75) {
            ele.style.setProperty("font-variation-settings", '"MONO" 0, "CASL" 1, "wght" 800, "slnt" 0, "CRSV" 0.5')
        } else {
            ele.style.setProperty("font-variation-settings", '"MONO" 0, "CASL" 0, "wght" 200, "slnt" 0, "CRSV" 0.5')
        }
    }
})

