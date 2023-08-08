class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

const tiltEls = document.querySelectorAll('.tilt')

const tiltMove = (x, y) => `perspective(500px) scale(1.1) rotateX(${x}deg) rotateY(${y}deg)`

tiltEls.forEach(tilt => {
  const height = tilt.clientHeight
  const width = tilt.clientWidth

  tilt.addEventListener('mousemove', (e) => {
      const x = e.layerX
      const y = e.layerY
      const multiplier = 50

      const xRotate = multiplier * ((x - width / 2) / width)
      const yRotate = -multiplier * ((y - height / 2) / height)

      tilt.style.transform = tiltMove(xRotate, yRotate)
  })

  tilt.addEventListener('mouseout', () => tilt.style.transform = tiltMove(0, 0))
})

const menuItens = document.getElementsByClassName('nav-list')
console.log(menuItens)

window.addEventListener("scroll", function() {
  let header = document.getElementById('sticky')
  header.classList.toggle('rolagem', window.scrollY > 0 )
  
})