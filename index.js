
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
function initMobileMenu() {
  const li_links = document.querySelectorAll(".li-links");
  const links_container = document.querySelectorAll(".links-container");

  if (window.innerWidth >= 980) {
    links_container.forEach(item => {
      item.style.display = "";
    })
    return
  }

  li_links.forEach(li => {
    if (li.dataset.menuInit) return;
    li.dataset.menuInit = "true";

    li.addEventListener("click", () => {
      const hijo = li.querySelector(".links-container");
      const estaAbierto = hijo.style.display === "flex";

      links_container.forEach(item => {
        item.style.display = "none";
      });

      if (!estaAbierto) {
        hijo.style.display = "flex";
      }
    })
  })
}

initMobileMenu()
window.addEventListener("resize", initMobileMenu)

