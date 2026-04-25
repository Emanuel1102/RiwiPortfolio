// Select DOM elements for the mobile menu
const toggleMenu = document.getElementById('menu-toggle')
const hamburguerMenu = document.querySelector('.main-menu')

// Toggle the 'active' class when the hamburger button is clicked
toggleMenu.addEventListener('click', ()=>{
    hamburguerMenu.classList.toggle('active')
})

// Select all navigation links within the menu
const links = hamburguerMenu.querySelectorAll('.main-menu__link')

// Close the menu automatically when a link is clicked
links.forEach((link)=>{
    link.addEventListener('click', ()=>{
    hamburguerMenu.classList.remove('active')
    })
} )

