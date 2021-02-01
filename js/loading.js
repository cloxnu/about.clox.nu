function loaded() {
    window.setTimeout(function () {
        document.body.classList.remove('loading')
        window.setTimeout(function () {
            document.getElementById('display-div').classList.add('appear')
        }, 1000)

    }, 1000)

}

window.onpageshow = loaded;

