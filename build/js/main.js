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

    /** 
     * todo: edit themes so that they modify more than bg
     */

    const white = document.getElementById('white')
    const pink = document.getElementById('pink')
    const green = document.getElementById('green')
    const blue = document.getElementById('blue')

    const whiteMobile = document.getElementById('whiteMobile')
    const pinkMobile = document.getElementById('pinkMobile')
    const greenMobile = document.getElementById('greenMobile')
    const blueMobile = document.getElementById('blueMobile')
    
    const body = document.getElementById('body')

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

        if (!whiteMobile.classList.contains('bg-slate-900')) {
            whiteMobile.classList.toggle('bg-slate-900')
            whiteMobile.classList.toggle('bg-slate-300')
        }
        if (pinkMobile.classList.contains('bg-slate-900')) {
            pinkMobile.classList.toggle('bg-slate-900')
            pinkMobile.classList.toggle('bg-slate-300')
        }
        if (greenMobile.classList.contains('bg-slate-900')) {
            greenMobile.classList.toggle('bg-slate-900')
            greenMobile.classList.toggle('bg-slate-300')
        }
        if (blueMobile.classList.contains('bg-slate-900')) {
            blueMobile.classList.toggle('bg-slate-900')
            blueMobile.classList.toggle('bg-slate-300')
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

        if (!mobileMenu.classList.contains('bg-slate-50')) {
            mobileMenu.classList.toggle('bg-slate-50')
        }
        if (mobileMenu.classList.contains('bg-customizing-pink')) {
            mobileMenu.classList.toggle('bg-customizing-pink')
        }
        if (mobileMenu.classList.contains('bg-customizing-green')) {
            mobileMenu.classList.toggle('bg-customizing-green')
        }
        if (mobileMenu.classList.contains('bg-customizing-blue')) {
            mobileMenu.classList.toggle('bg-customizing-blue')
        }
    } 
    white.addEventListener('click', toggleWhiteTheme)
    whiteMobile.addEventListener('click', toggleWhiteTheme)

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

        if (!pinkMobile.classList.contains('bg-slate-900')) {
            pinkMobile.classList.toggle('bg-slate-900')
            pinkMobile.classList.toggle('bg-slate-300')
        }
        if (whiteMobile.classList.contains('bg-slate-900')) {
            whiteMobile.classList.toggle('bg-slate-900')
            whiteMobile.classList.toggle('bg-slate-300')
        }
        if (greenMobile.classList.contains('bg-slate-900')) {
            greenMobile.classList.toggle('bg-slate-900')
            greenMobile.classList.toggle('bg-slate-300')
        }
        if (blueMobile.classList.contains('bg-slate-900')) {
            blueMobile.classList.toggle('bg-slate-900')
            blueMobile.classList.toggle('bg-slate-300')
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

        if (!mobileMenu.classList.contains('bg-customizing-pink')) {
            mobileMenu.classList.toggle('bg-customizing-pink')
        }
        if (mobileMenu.classList.contains('bg-slate-50')) {
            mobileMenu.classList.toggle('bg-slate-50')
        }
        if (mobileMenu.classList.contains('bg-customizing-green')) {
            mobileMenu.classList.toggle('bg-customizing-green')
        }
        if (mobileMenu.classList.contains('bg-customizing-blue')) {
            mobileMenu.classList.toggle('bg-customizing-blue')
        }
    } 
    pink.addEventListener('click', togglePinkTheme)
    pinkMobile.addEventListener('click', togglePinkTheme)

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

        if (!greenMobile.classList.contains('bg-slate-900')) {
            greenMobile.classList.toggle('bg-slate-900')
            greenMobile.classList.toggle('bg-slate-300')
        }
        if (pinkMobile.classList.contains('bg-slate-900')) {
            pinkMobile.classList.toggle('bg-slate-900')
            pinkMobile.classList.toggle('bg-slate-300')
        }
        if (whiteMobile.classList.contains('bg-slate-900')) {
            whiteMobile.classList.toggle('bg-slate-900')
            whiteMobile.classList.toggle('bg-slate-300')
        }
        if (blueMobile.classList.contains('bg-slate-900')) {
            blueMobile.classList.toggle('bg-slate-900')
            blueMobile.classList.toggle('bg-slate-300')
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

        if (!mobileMenu.classList.contains('bg-customizing-green')) {
            mobileMenu.classList.toggle('bg-customizing-green')
        }
        if (mobileMenu.classList.contains('bg-customizing-pink')) {
            mobileMenu.classList.toggle('bg-customizing-pink')
        }
        if (mobileMenu.classList.contains('bg-slate-50')) {
            mobileMenu.classList.toggle('bg-slate-50')
        }
        if (mobileMenu.classList.contains('bg-customizing-blue')) {
            mobileMenu.classList.toggle('bg-customizing-blue')
        }
    } 
    green.addEventListener('click', toggleGreenTheme)
    greenMobile.addEventListener('click', toggleGreenTheme)

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

        if (!blueMobile.classList.contains('bg-slate-900')) {
            blueMobile.classList.toggle('bg-slate-900')
            blueMobile.classList.toggle('bg-slate-300')
        }
        if (pinkMobile.classList.contains('bg-slate-900')) {
            pinkMobile.classList.toggle('bg-slate-900')
            pinkMobile.classList.toggle('bg-slate-300')
        }
        if (greenMobile.classList.contains('bg-slate-900')) {
            greenMobile.classList.toggle('bg-slate-900')
            greenMobile.classList.toggle('bg-slate-300')
        }
        if (whiteMobile.classList.contains('bg-slate-900')) {
            whiteMobile.classList.toggle('bg-slate-900')
            whiteMobile.classList.toggle('bg-slate-300')
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

        if (!mobileMenu.classList.contains('bg-customizing-blue')) {
            mobileMenu.classList.toggle('bg-customizing-blue')
        }
        if (mobileMenu.classList.contains('bg-customizing-pink')) {
            mobileMenu.classList.toggle('bg-customizing-pink')
        }
        if (mobileMenu.classList.contains('bg-customizing-green')) {
            mobileMenu.classList.toggle('bg-customizing-green')
        }
        if (mobileMenu.classList.contains('bg-slate-50')) {
            mobileMenu.classList.toggle('bg-slate-50')
        }
    } 
    blue.addEventListener('click', toggleBlueTheme)
    blueMobile.addEventListener('click', toggleBlueTheme)

    const homePage = document.getElementById('homePage')
    const workPage = document.getElementById('workPage')
    const aboutPage = document.getElementById('aboutPage')
    const contactPage = document.getElementById('contactPage')
    
    const toggleHomePage = () => {
        if (homePage.classList.contains('hidden')) { homePage.classList.toggle('hidden') }             
        if (!workPage.classList.contains('hidden')) { workPage.classList.toggle('hidden') }
        if (!aboutPage.classList.contains('hidden')) { aboutPage.classList.toggle('hidden') }
        if (!contactPage.classList.contains('hidden')) { contactPage.classList.toggle('hidden') }

        if (homeBtn.classList.contains('text-slate-900')) {
            homeBtn.classList.toggle('text-slate-900')
            homeBtn.classList.toggle('text-slate-50')
            homeBtn.classList.toggle('bg-slate-600')
        }
        if (!workBtn.classList.contains('text-slate-900')) {
            workBtn.classList.toggle('text-slate-900')
            workBtn.classList.toggle('text-slate-50')
            workBtn.classList.toggle('bg-slate-600')
        }
        if (!aboutBtn.classList.contains('text-slate-900')) {
            aboutBtn.classList.toggle('text-slate-900')
            aboutBtn.classList.toggle('text-slate-50')
            aboutBtn.classList.toggle('bg-slate-600')
        }
        if (!contactBtn.classList.contains('text-slate-900')) {
            contactBtn.classList.toggle('text-slate-900')
            contactBtn.classList.toggle('text-slate-50')
            contactBtn.classList.toggle('bg-slate-600')
        }
    }

    const toggleWorkPage = () => {
        if (workPage.classList.contains('hidden')) { workPage.classList.toggle('hidden') }             
        if (!homePage.classList.contains('hidden')) { homePage.classList.toggle('hidden') }
        if (!aboutPage.classList.contains('hidden')) { aboutPage.classList.toggle('hidden') }
        if (!contactPage.classList.contains('hidden')) { contactPage.classList.toggle('hidden') }

        if (workBtn.classList.contains('text-slate-900')) {
            workBtn.classList.toggle('text-slate-900')
            workBtn.classList.toggle('text-slate-50')
            workBtn.classList.toggle('bg-slate-600')
        }
        if (!homeBtn.classList.contains('text-slate-900')) {
            homeBtn.classList.toggle('text-slate-900')
            homeBtn.classList.toggle('text-slate-50')
            homeBtn.classList.toggle('bg-slate-600')
        }
        if (!aboutBtn.classList.contains('text-slate-900')) {
            aboutBtn.classList.toggle('text-slate-900')
            aboutBtn.classList.toggle('text-slate-50')
            aboutBtn.classList.toggle('bg-slate-600')
        }
        if (!contactBtn.classList.contains('text-slate-900')) {
            contactBtn.classList.toggle('text-slate-900')
            contactBtn.classList.toggle('text-slate-50')
            contactBtn.classList.toggle('bg-slate-600')
        }
    }

    const toggleAboutPage = () => {
        if (aboutPage.classList.contains('hidden')) { aboutPage.classList.toggle('hidden') }             
        if (!workPage.classList.contains('hidden')) { workPage.classList.toggle('hidden') }
        if (!homePage.classList.contains('hidden')) { homePage.classList.toggle('hidden') }
        if (!contactPage.classList.contains('hidden')) { contactPage.classList.toggle('hidden') }

        if (aboutBtn.classList.contains('text-slate-900')) {
            aboutBtn.classList.toggle('text-slate-900')
            aboutBtn.classList.toggle('text-slate-50')
            aboutBtn.classList.toggle('bg-slate-600')
        }
        if (!workBtn.classList.contains('text-slate-900')) {
            workBtn.classList.toggle('text-slate-900')
            workBtn.classList.toggle('text-slate-50')
            workBtn.classList.toggle('bg-slate-600')
        }
        if (!homeBtn.classList.contains('text-slate-900')) {
            homeBtn.classList.toggle('text-slate-900')
            homeBtn.classList.toggle('text-slate-50')
            homeBtn.classList.toggle('bg-slate-600')
        }
        if (!contactBtn.classList.contains('text-slate-900')) {
            contactBtn.classList.toggle('text-slate-900')
            contactBtn.classList.toggle('text-slate-50')
            contactBtn.classList.toggle('bg-slate-600')
        }
    }
    
    const toggleContactPage = () => {
        if (contactPage.classList.contains('hidden')) { contactPage.classList.toggle('hidden') }             
        if (!workPage.classList.contains('hidden')) { workPage.classList.toggle('hidden') }
        if (!aboutPage.classList.contains('hidden')) { aboutPage.classList.toggle('hidden') }
        if (!homePage.classList.contains('hidden')) { homePage.classList.toggle('hidden') }

        if (contactBtn.classList.contains('text-slate-900')) {
            contactBtn.classList.toggle('text-slate-900')
            contactBtn.classList.toggle('text-slate-50')
            contactBtn.classList.toggle('bg-slate-600')
        }
        if (!workBtn.classList.contains('text-slate-900')) {
            workBtn.classList.toggle('text-slate-900')
            workBtn.classList.toggle('text-slate-50')
            workBtn.classList.toggle('bg-slate-600')
        }
        if (!aboutBtn.classList.contains('text-slate-900')) {
            aboutBtn.classList.toggle('text-slate-900')
            aboutBtn.classList.toggle('text-slate-50')
            aboutBtn.classList.toggle('bg-slate-600')
        }
        if (!homeBtn.classList.contains('text-slate-900')) {
            homeBtn.classList.toggle('text-slate-900')
            homeBtn.classList.toggle('text-slate-50')
            homeBtn.classList.toggle('bg-slate-600')
        }
    }

    const homeBtn = document.getElementById('homeBtn')
    homeBtn.addEventListener('click', toggleHomePage)
    const homeMobileBtn = document.getElementById('homeMobileBtn')
    homeMobileBtn.addEventListener('click', toggleHomePage)
    
    const workBtn = document.getElementById('workBtn')
    workBtn.addEventListener('click', toggleWorkPage)
    const workMobileBtn = document.getElementById('workMobileBtn')
    workMobileBtn.addEventListener('click', toggleWorkPage)
    
    const aboutBtn = document.getElementById('aboutBtn')
    aboutBtn.addEventListener('click', toggleAboutPage)
    const moreAboutBtn = document.getElementById('moreAboutBtn')
    moreAboutBtn.addEventListener('click', toggleAboutPage)
    const aboutMobileBtn = document.getElementById('aboutMobileBtn')
    aboutMobileBtn.addEventListener('click', toggleAboutPage)
    
    const contactBtn = document.getElementById('contactBtn')
    contactBtn.addEventListener('click', toggleContactPage)
    const contactMobileBtn = document.getElementById('contactMobileBtn')
    contactMobileBtn.addEventListener('click', toggleContactPage)
}

document.addEventListener('DOMContentLoaded', initApp)
