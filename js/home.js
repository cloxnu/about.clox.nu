// dash switch animation
function switch_display() {
    const ele = document.getElementById('bg-border')
    const style = getComputedStyle(ele)
    const bg_position = style.backgroundPosition
    const bg_position_x1 = style.backgroundPositionX.split(',')[0]
    const bg_position_x2 = style.backgroundPositionX.split(',')[1]
    console.log(bg_position)
    document.body.style.setProperty('--dash-bg-position-x1-from', bg_position_x1)
    document.body.style.setProperty('--dash-bg-position-x2-from', `calc(${bg_position_x2} + min(4vw, 4vh) * 20)`)
    // document.body.style.setProperty('--dash-bg-position-x1-to', `calc(${bg_position_x1} + min(4vw, 4vh) * 20)`)
    // document.body.style.setProperty('--dash-bg-position-x2-to', bg_position_x2)

    ele.classList.add('switch-display')
    window.setTimeout(function () {
        ele.classList.remove('switch-display')
    }, 2000)
    console.log(bg_position)
}
