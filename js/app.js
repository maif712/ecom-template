





const mobileMenuBtn = document.querySelectorAll("[data-mobile-menu='button']")
const primaryNav = document.querySelector(".primary-nav")
mobileMenuBtn.forEach(button => {
    button.addEventListener("click", () => {
        const isExpanded = primaryNav.getAttribute("aria-expanded")
        isExpanded == "false" ? primaryNav.setAttribute("aria-expanded", true) : primaryNav.setAttribute("aria-expanded", false)
    })
})


// Show overlay on category hover
const headerOverlay = document.querySelector("[data-id='overlay']")
const overlay = document.querySelector(".overlay")
headerOverlay.addEventListener("mouseenter", () => {
    overlay.style.visibility = "visible"
    overlay.style.opacity = 0.9
})

headerOverlay.addEventListener("mouseleave", () => {
    overlay.style.visibility = "hidden"
    overlay.style.opacity = 0
})
// End

const navliTags = document.querySelectorAll(".nav__li")
const navSubMenuBtn = document.querySelectorAll(".category-btn")
navSubMenuBtn.forEach(button => {
    button.addEventListener("click", (e) => {
        isExpanded = button.getAttribute("aria-expanded", false)
        isExpanded == "false" ? button.setAttribute("aria-expanded", true) : button.setAttribute("aria-expanded", false)
        const parentLi = e.target.closest("span")
        parentLi.classList.toggle("sub-menu-expanded")
    })
})

// Expand user actions
const userProfileBtn = document.querySelector(".user-profile-btn")
const userActionsDiv = document.querySelector(".user-actions")
userProfileBtn.addEventListener("click", () => {
    const isExpanded = userActionsDiv.getAttribute("aria-expanded")
    isExpanded == "false" ? userActionsDiv.setAttribute("aria-expanded", true) : userActionsDiv.setAttribute("aria-expanded", false)
})
// --close the use action tab
userActionsDiv.addEventListener("click", (e) => {
    userActionsDiv.setAttribute("aria-expanded", false)
})
// --end
// End

// Sticky navigation bar
const mainHeader = document.querySelector("header")
// window.addEventListener("scroll", () => {
//     if (window.scrollY > 0) {
//         mainHeader.classList.add("sticky")
//     }
//     else {
//         mainHeader.classList.remove("sticky")
//     }
// })

// __primary nav fadeout animation on scroll
document.addEventListener("DOMContentLoaded", () => {
    let currentScrollPos = window.scrollY
    const topHeader = document.querySelector(".header-nav-top").offsetHeight
    const p = parseInt(primaryNav.getBoundingClientRect().height, 10)
    // __ 130px is the total height of main header, beacause in firefox the topheader height is 4px off then we have to hardcode the height
    const isQuerry = window.matchMedia("(min-width: 900px)")
    if (isQuerry.matches) {
        mainHeader.style.height = "130px"
    }
    const mainHeaderHeight = mainHeader.offsetHeight

    window.addEventListener("scroll", () => {
        const isQuerry = window.matchMedia("(min-width: 900px)")
        if (isQuerry.matches) {
            if (window.scrollY > 30) {
                if (currentScrollPos <= window.scrollY) {
                    primaryNav.classList.add("fadeOut")
                    requestAnimationFrame(() => {
                        mainHeader.style.height = (mainHeaderHeight - p) + "px"
                    })

                }
                else {
                    primaryNav.classList.remove("fadeOut")
                    requestAnimationFrame(() => {
                        mainHeader.style.height = mainHeaderHeight + "px"
                    })
                }
            }
        }
        currentScrollPos = window.scrollY
    })
})
// __end
// End

//Elementor elements section animation
const elementorElemetnCards = document.querySelectorAll(".elementor-card")
multipleElementObserver(elementorElemetnCards, 120, "fadeInRight", "animated")
addAnimationDelay(elementorElemetnCards, 0.13)
// End

// Testimoial section animation
const testimonialCards = document.querySelectorAll(".testimonial-card")
multipleElementObserver(testimonialCards, 120, "fadeInRight", "animated")
addAnimationDelay(testimonialCards, 0.18)
// End

// Member card animation
const memeberCards = document.querySelectorAll(".member-card")
multipleElementObserver(memeberCards, 120, "fadeInRight", "animated")
addAnimationDelay(memeberCards, 0.18)
// End

// Single page active tab panel -- desctiption and comments
const tabBtn = document.querySelectorAll(".single-page__tabs-btn")
const tabs = document.querySelectorAll(".single-page__tab li")
const tabPanels = document.querySelectorAll(".single-page__tabs-panel")
tabBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (e.target.closest("li").classList.contains("active")) {
            return
        }


        tabs.forEach(tab => {

            if (tab.classList.contains("active")) {
                tab.classList.remove("active")
            }
            else {
                tab.classList.add("active")
            }

        })

        const tab = btn.closest("li")
        tabPanels.forEach(panel => {
            if (tab.classList.contains("active") && panel.getAttribute("aria-labelledby") == tab.getAttribute("id")) {
                panel.style.display = "block"
            }
            else {
                panel.style.display = "none"
            }
        })

    })
})
// End


// Add active class for current active navigation
document.addEventListener("DOMContentLoaded", () => {
    const allNavLinks = document.querySelectorAll(".nav__main")
    const currentLocation = window.location.href
    const rootLocation = `${window.location.origin}/`

    allNavLinks.forEach(link => {
        if(link.href == currentLocation || link.href == `${rootLocation}index.html` && currentLocation == rootLocation) {
            link.classList.add("active")
        }
         
    })
})
// End

// Sorting list active nav -- category page
const sorts = document.querySelectorAll(".sorting__span-text")
sorts.forEach(sort => {
    sort.addEventListener("click", (e) => {
        sorts.forEach(q => q.classList.remove("active"))
        e.target.classList.add("active")
    })
})
// End


// Helper functions
function multipleElementObserver(elements, rootMargin, ...className) {
    const observer = new IntersectionObserver(enteries => {
        enteries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(...className)
                observer.unobserve(entry.target)
            }
        })
    }, {
        rootMargin: `-${rootMargin}px`
    })
    //cehck initial view port
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add(...className)
        }
        else {
            observer.observe(el)
        }
    })
}

function addAnimationDelay(elements, delayTime) {
    elements.forEach((el, index) => {
        el.style.animationDelay = `${(index + 1) * delayTime}s`
    })
}
// End


