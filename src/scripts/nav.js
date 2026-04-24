const toggleMenu = document.getElementById('menu-toggle')
const hamburguerMenu = document.querySelector('.main-menu')

toggleMenu.addEventListener('click', ()=>{
    hamburguerMenu.classList.toggle('active')
})

const links = hamburguerMenu.querySelectorAll('.main-menu__link')

links.forEach((link)=>{
    link.addEventListener('click', ()=>{
    hamburguerMenu.classList.remove('active')
    })
} )

