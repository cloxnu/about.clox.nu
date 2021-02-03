const Level = {
    MainMenu: 'MainMenu'
}
const maxPage = {
    'MainMenu': 2
}
let currentLevel = Level.MainMenu
let currentPage = 0

function switch_display() {
    bg_border_switch_display()
    right_arrow_appear(false)
    display_div_appear(false)
    window.setTimeout(() => {
        right_arrow_appear()
        display_div_appear()
    }, 1000)
}

// dash switch animation
function bg_border_switch_display() {
    const ele = document.getElementById('bg-border')
    const style = getComputedStyle(ele)
    const bg_position_x1 = style.backgroundPositionX.split(',')[0]
    const bg_position_x2 = style.backgroundPositionX.split(',')[1]
    document.body.style.setProperty('--dash-bg-position-x1-from', bg_position_x1)
    document.body.style.setProperty('--dash-bg-position-x2-from', `calc(${bg_position_x2} + min(4vw, 4vh) * 20)`)
    // document.body.style.setProperty('--dash-bg-position-x1-to', `calc(${bg_position_x1} + min(4vw, 4vh) * 20)`)
    // document.body.style.setProperty('--dash-bg-position-x2-to', bg_position_x2)

    ele.classList.add('switch-display')
    window.setTimeout(() => {
        ele.classList.remove('switch-display')
    }, 2000)
}

function display_div_appear(is_appear=true) {
    if (is_appear) document.getElementById('display-div').classList.remove('disappear')
    else document.getElementById('display-div').classList.add('disappear')
}

function right_arrow_appear(is_appear=true) {
    if (is_appear) {
        document.getElementById('right-arrow-wrapper').classList.remove('disappear')
        window.setTimeout(() => {
            if (is_appear) document.getElementById('right-arrow').classList.remove('disabled')
        }, 1000)
    }
    else {
        document.getElementById('right-arrow-wrapper').classList.add('disappear')
        document.getElementById('right-arrow').classList.add('disabled')
    }
}

function right_arrow_clicked() {
    console.log("clicked")
    switch_display()
}
