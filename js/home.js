const pageID = ['welcome-words', 'say-hi', 'welcome-words2', 'my-travel-blog', 'my-live-blog', 'our-products', 'my-first-book-notes', 'the-tech-blog', 'to-be-continued', 'foot']
const colorNum = ['21', '21', '37', '92', '92', '92', '92', '92', '37', '37']
const maxPage = pageID.length
let currentPage = 0

function switch_page(is_next=true) {
    clearTimeout(display_div_running_timer)
    currentPage = (currentPage + (is_next ? 1 : (maxPage-1))) % maxPage
    switch_display(currentPage, is_next)
}

function switch_display(currentPage, is_next=true) {
    bg_border_switch_display(is_next)
    arrow_appear(false)
    display_div_appear(is_next, false)
    window.setTimeout(() => {
        for (const element of document.getElementsByClassName('show')) {
            element.classList.remove('show')
        }
        document.getElementById(pageID[currentPage]).classList.add('show')
        document.getElementById('display-div-wrapper').classList.remove('running')
        document.body.style.setProperty('--background-color', `var(--color${colorNum[currentPage]}-bg-color)`)
        document.body.style.setProperty('--foreground-color', `var(--color${colorNum[currentPage]}-fg-color)`)
        document.body.style.setProperty('--background-color-filter', `var(--color${colorNum[currentPage]}-bg-color-filter)`)
        display_div_appear(is_next)
        arrow_appear()
    }, 1000)
}

// dash switch animation
function bg_border_switch_display(is_forward=true) {
    const ele = document.getElementById('bg-border')
    const style = getComputedStyle(ele)
    const bg_position_x1 = style.backgroundPositionX.split(',')[0]
    const bg_position_x2 = style.backgroundPositionX.split(',')[1]

    if (is_forward) {
        document.body.style.setProperty('--dash-bg-position-x1-from', bg_position_x1)
        document.body.style.setProperty('--dash-bg-position-x2-from', `calc(${bg_position_x2} + min(4vw, 4vh) * 50)`)
        ele.classList.add('forward-switch-display')
        window.setTimeout(() => {
            ele.classList.remove('forward-switch-display')
        }, 2000)
    }
    else {
        document.body.style.setProperty('--dash-bg-position-x1-from', bg_position_x2)
        document.body.style.setProperty('--dash-bg-position-x2-from', `calc(${bg_position_x1} + min(4vw, 4vh) * 50)`)
        ele.classList.add('backward-switch-display')
        window.setTimeout(() => {
            ele.classList.remove('backward-switch-display')
        }, 2000)
    }
}

let display_div_running_timer

function display_div_running() {
    document.getElementById('display-div-wrapper').classList.add('running')
    clearTimeout(display_div_running_timer)
    display_div_running_timer = window.setTimeout(() => switch_page(), 8000)
}

function display_div_appear(is_forward=true, is_appear=true) {
    if (is_appear) {
        const display_div = document.getElementById('display-div')
        display_div.classList.remove('forward_disappear')
        display_div.classList.remove('backward_disappear')
        display_div.classList.add((is_forward ? 'forward_' : 'backward_') + 'appear')
        window.setTimeout(() => {
            display_div_running()
        }, 1000)
    }
    else {
        const display_div = document.getElementById('display-div')
        display_div.classList.add((is_forward ? 'forward_' : 'backward_') + 'disappear')
        display_div.classList.remove('forward_appear')
        display_div.classList.remove('backward_appear')
    }
}

function arrow_appear(is_appear=true) {
    if (is_appear) {
        document.getElementById('right-arrow-wrapper').classList.remove('disappear')
        document.getElementById('left-arrow-wrapper').classList.remove('disappear')
        window.setTimeout(() => {
            if (is_appear) document.getElementById('interaction-div').classList.remove('disabled')
        }, 1000)
    }
    else {
        document.getElementById('right-arrow-wrapper').classList.add('disappear')
        document.getElementById('left-arrow-wrapper').classList.add('disappear')
        document.getElementById('interaction-div').classList.add('disabled')
    }
}

function right_arrow_clicked() {
    switch_page()
}

function left_arrow_clicked() {
    switch_page(false)
}
