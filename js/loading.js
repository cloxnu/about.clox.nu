function loaded() {
    window.setTimeout(() => {
        bg_border_switch_display()
        window.setTimeout(() => {
            document.body.classList.remove('loading')
            document.getElementById('welcome-words').classList.remove('paused')
            display_div_appear()
        }, 1000)
        window.setTimeout(() => {
            right_arrow_appear()
        }, 2000)

    }, 1000)

}

window.onpageshow = loaded;

