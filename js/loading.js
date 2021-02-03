function loaded() {
    window.setTimeout(function () {
        switch_display()
        window.setTimeout(function () {
            document.body.classList.remove('loading')
            document.getElementById('display-div').classList.add('appear')
        }, 1000)
        window.setTimeout(function () {
            document.getElementById('right-arrow-wrapper').classList.add('appear')
        }, 2000)

    }, 1000)

}

window.onpageshow = loaded;

