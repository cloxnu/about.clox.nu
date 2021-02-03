function loaded() {
    window.setTimeout(function () {
        switch_display()
        window.setTimeout(function () {
            document.body.classList.remove('loading')
            document.getElementById('display-div').classList.add('appear')
            document.getElementById('right-arrow-wrapper').classList.add('appear')
        }, 1000)

    }, 1000)

}

window.onpageshow = loaded;

