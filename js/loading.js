function loaded() {
    bg_border_switch_display()
    window.setTimeout(() => {
        document.body.classList.remove('loading')
        document.getElementById('welcome-words').classList.remove('paused')
        document.getElementById('welcome-words').classList.add('show')
        display_div_appear()
    }, 1000)
    window.setTimeout(() => {
        arrow_appear()
    }, 2000)

}

window.onload = () => {
    loaded()
};

