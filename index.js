
// JS para el header
const btn_menu = document.querySelector(".menu-icon")
const header_nav = document.querySelector(".header-nav")
const blur_1 = document.querySelector(".blur")
const btn_close = document.querySelector(".close-icon")

btn_menu.addEventListener("click", (e) =>{
    blur_1.style.zIndex = "10"
    blur_1.style.opacity = "1"
    blur_1.style.pointerEvents = "auto" 
    header_nav.style.left = "0"
    btn_close.style.display = "block"
})

btn_close.addEventListener("click", (e)=> {
    blur_1.style.zIndex = "0"
    blur_1.style.opacity = "0"
    blur_1.style.pointerEvents = "none"
    header_nav.style.left = "-38rem"
    btn_close.style.display = "none"
})


// JS para el footer
const li_links = document.querySelectorAll(".li-links")
const links_container = document.querySelectorAll(".links-container")

li_links.forEach(li => {
    li.addEventListener("click", e => {
        const hijo = li.children[1]
        const estaAbierto = hijo.style.display === "flex" 

        links_container.forEach(item => {
            item.style.display = "none"
        })

        if (!estaAbierto) {
            hijo.style.display = "flex"
        }
    })
})

// JS para el main
// const search_bar = document.querySelector(".search-bar")
// const search_icon = document.querySelector(".search-bar i")

// search_bar.addEventListener("click", )

