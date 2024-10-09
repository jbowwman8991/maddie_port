const initApp = () => {
    var year = document.getElementById('year');
    
    year.innerHTML = new Date().getFullYear();

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

    const body = document.getElementById('body')
    const header = document.getElementById('header')

    const toggleWhiteTheme = () => {
        if (!white.classList.contains('bg-slate-900')) {
            white.classList.toggle('bg-slate-900')
            white.classList.toggle('bg-slate-300')
        }
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

        if (!body.classList.contains('bg-slate-50')) {
            body.classList.toggle('bg-slate-50')
        }
        if (body.classList.contains('bg-customizing-pink')) {
            body.classList.toggle('bg-customizing-pink')
        }
        if (body.classList.contains('bg-customizing-green')) {
            body.classList.toggle('bg-customizing-green')
        }
        if (body.classList.contains('bg-customizing-blue')) {
            body.classList.toggle('bg-customizing-blue')
        }
    } 
    white.addEventListener('click', toggleWhiteTheme)

    const togglePinkTheme = () => {
        if (!pink.classList.contains('bg-slate-900')) {
            pink.classList.toggle('bg-slate-900')
            pink.classList.toggle('bg-slate-300')
        }
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

        if (!body.classList.contains('bg-customizing-pink')) {
            body.classList.toggle('bg-customizing-pink')
        }
        if (body.classList.contains('bg-slate-50')) {
            body.classList.toggle('bg-slate-50')
        }
        if (body.classList.contains('bg-customizing-green')) {
            body.classList.toggle('bg-customizing-green')
        }
        if (body.classList.contains('bg-customizing-blue')) {
            body.classList.toggle('bg-customizing-blue')
        }
    } 
    pink.addEventListener('click', togglePinkTheme)

    const toggleGreenTheme = () => {
        if (!green.classList.contains('bg-slate-900')) {
            green.classList.toggle('bg-slate-900')
            green.classList.toggle('bg-slate-300')
        }
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

        if (!body.classList.contains('bg-customizing-green')) {
            body.classList.toggle('bg-customizing-green')
        }
        if (body.classList.contains('bg-customizing-pink')) {
            body.classList.toggle('bg-customizing-pink')
        }
        if (body.classList.contains('bg-slate-50')) {
            body.classList.toggle('bg-slate-50')
        }
        if (body.classList.contains('bg-customizing-blue')) {
            body.classList.toggle('bg-customizing-blue')
        }
    } 
    green.addEventListener('click', toggleGreenTheme)

    const toggleBlueTheme = () => {
        if (!blue.classList.contains('bg-slate-900')) {
            blue.classList.toggle('bg-slate-900')
            blue.classList.toggle('bg-slate-300')
        }
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

        if (!body.classList.contains('bg-customizing-blue')) {
            body.classList.toggle('bg-customizing-blue')
        }
        if (body.classList.contains('bg-customizing-pink')) {
            body.classList.toggle('bg-customizing-pink')
        }
        if (body.classList.contains('bg-customizing-green')) {
            body.classList.toggle('bg-customizing-green')
        }
        if (body.classList.contains('bg-slate-50')) {
            body.classList.toggle('bg-slate-50')
        }
    } 
    blue.addEventListener('click', toggleBlueTheme)












    /** 
     * todo: add contactPage
     * todo: add toggleContactPage
     * todo: add hiding contactPage
     * 
     * todo: modify mobile menu to navigate to homePage, workPage, aboutPage, and contactPage
     * 
     * todo: edit themes so that they modify more than bg
     */

    const homePage = document.getElementById('homePage')
    const workPage = document.getElementById('workPage')
    const aboutPage = document.getElementById('aboutPage')
    
    const toggleHomePage = () => {
        if (homePage.classList.contains('hidden')) { 
            homePage.classList.toggle('hidden')             
        }
        if (!workPage.classList.contains('hidden')) {
            workPage.classList.toggle('hidden')
        }
        if (!aboutPage.classList.contains('hidden')) {
            aboutPage.classList.toggle('hidden')
        }
    }

    const toggleWorkPage = () => {
        if (workPage.classList.contains('hidden')) {
            workPage.classList.toggle('hidden')
        }
        if (!homePage.classList.contains('hidden')) { 
            homePage.classList.toggle('hidden')             
        }
        if (!aboutPage.classList.contains('hidden')) { 
            aboutPage.classList.toggle('hidden')             
        }
    }

    const toggleAboutPage = () => {
        if (aboutPage.classList.contains('hidden')) {
            aboutPage.classList.toggle('hidden')
        }
        if (!homePage.classList.contains('hidden')) { 
            homePage.classList.toggle('hidden')             
        }
        if (!workPage.classList.contains('hidden')) { 
            workPage.classList.toggle('hidden')             
        }
    }

    const homeBtn = document.getElementById('homeBtn')
    homeBtn.addEventListener('click', toggleHomePage)
    
    const workBtn = document.getElementById('workBtn')
    workBtn.addEventListener('click', toggleWorkPage)

    const aboutBtn = document.getElementById('aboutBtn')
    aboutBtn.addEventListener('click', toggleAboutPage)
    const moreAboutBtn = document.getElementById('moreAboutBtn')
    moreAboutBtn.addEventListener('click', toggleAboutPage)

}

document.addEventListener('DOMContentLoaded', initApp)
