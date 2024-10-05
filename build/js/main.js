var year = document.getElementById('year');

year.innerHTML = new Date().getFullYear();

const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)

    const white = document.getElementById('white')
    const pink = document.getElementById('pink')
    const green = document.getElementById('green')
    const blue = document.getElementById('blue')

    const toggleWhiteTheme = () => {
        white.classList.toggle('bg-slate-900')
        white.classList.toggle('bg-slate-300')

        if (pink.classList.contains('bg-slate-900')) {
            pink.classList.toggle('bg-slate-900')
            pink.classList.toggle('bg-slate-300')
        }
        if (green.classList.contains('bg-slate-900')) {
            green.classList.toggle('bg-slate-900')
            green.classList.toggle('bg-slate-300')
        }
        if (blue.classList.contains('bg-slate-900')) {
            blue.classList.toggle('bg-slate-900')
            blue.classList.toggle('bg-slate-300')
        }
    } 
    white.addEventListener('click', toggleWhiteTheme)

    const togglePinkTheme = () => {
        pink.classList.toggle('bg-slate-900')
        pink.classList.toggle('bg-slate-300')

        if (white.classList.contains('bg-slate-900')) {
            white.classList.toggle('bg-slate-900')
            white.classList.toggle('bg-slate-300')
        }
        if (green.classList.contains('bg-slate-900')) {
            green.classList.toggle('bg-slate-900')
            green.classList.toggle('bg-slate-300')
        }
        if (blue.classList.contains('bg-slate-900')) {
            blue.classList.toggle('bg-slate-900')
            blue.classList.toggle('bg-slate-300')
        }
    } 
    pink.addEventListener('click', togglePinkTheme)

    const toggleGreenTheme = () => {
        green.classList.toggle('bg-slate-900')
        green.classList.toggle('bg-slate-300')

        if (pink.classList.contains('bg-slate-900')) {
            pink.classList.toggle('bg-slate-900')
            pink.classList.toggle('bg-slate-300')
        }
        if (white.classList.contains('bg-slate-900')) {
            white.classList.toggle('bg-slate-900')
            white.classList.toggle('bg-slate-300')
        }
        if (blue.classList.contains('bg-slate-900')) {
            blue.classList.toggle('bg-slate-900')
            blue.classList.toggle('bg-slate-300')
        }
    } 
    green.addEventListener('click', toggleGreenTheme)

    const toggleBlueTheme = () => {
        blue.classList.toggle('bg-slate-900')
        blue.classList.toggle('bg-slate-300')

        if (pink.classList.contains('bg-slate-900')) {
            pink.classList.toggle('bg-slate-900')
            pink.classList.toggle('bg-slate-300')
        }
        if (green.classList.contains('bg-slate-900')) {
            green.classList.toggle('bg-slate-900')
            green.classList.toggle('bg-slate-300')
        }
        if (white.classList.contains('bg-slate-900')) {
            white.classList.toggle('bg-slate-900')
            white.classList.toggle('bg-slate-300')
        }
    } 
    blue.addEventListener('click', toggleBlueTheme)
}

document.addEventListener('DOMContentLoaded', initApp)