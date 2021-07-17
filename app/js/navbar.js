function burgerMenu() {
    let burger = document.querySelector('.burger')
    let menu = document.querySelector('.menu__list')
    let tel = document.querySelector('nav__tel')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        tel.classList.add('active')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        tel.classList.add('active')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
          menu.classList.remove('active')
          burger.classList.remove('active-burger')
          tel.classList.remove('active')
      }
    })
}
burgerMenu()


// function fixedNav() {
//   const nav = document.querySelector('nav')

//   const breakpoint = 500 
//   if ( window.scrollY >= breakpoint) {
//     nav.classList.add('fixed__nav')
//   } else {
//     nav.classList.remove('fixed__nav')
//   }
// }
// window.addEventListener('scroll', fixedNav)
