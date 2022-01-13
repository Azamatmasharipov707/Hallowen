let searchForm = document.querySelector('.search__form');
let searchBtn = document.querySelector('#search__btn');

searchBtn.addEventListener('click', function () {
    searchForm.classList.toggle('active')
    navbar.classList.remove('active')
})

let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu__btn');

menuBtn.addEventListener('click', function () {
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
})

// ---------------- scroll spy -------------- \\
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a')

let header = document.querySelector('.header');

window.onscroll = () => {
    searchForm.classList.remove('active')
    navbar.classList.remove('active')

    if (window.scrollY > 0) {
        header.classList.add('active')
        // document.querySelector('.header').classList.add('active')
    } else {
        header.classList.remove('active')
        // document.querySelector('.header').classList.remove('active')
    }
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.header .navbar a[href*='+id+']').classList.add('active');
            })
        }
    });
}

window.onload = () => {
    if (window.scrollY > 0) {
        header.classList.add('active')
        // document.querySelector('.header').classList.add('active')
    } else {
        header.classList.remove('active')
        // document.querySelector('.header').classList.remove('active')
    }
}

var swiper = new Swiper(".home__slider", {
    spaceBetween: 20,
    effect: "fade",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
});
var swiper = new Swiper(".products__slider", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    grapCursor: true,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
});