let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let searchicon = document.querySelector('#search-icon');
let searchform = document.querySelector('#search-form');
let close = document.querySelector('#close');

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    
    section.forEach(sec => {
        let top = window.scrollY; //Number of pixels the page is scrolled vertically
        let height = sec.offsetHeight; //The height of the current section including padding and borders but not margin
        let offset = sec.offsetTop - 150; //distance from the sections top to the html top (parent element) - 150
        let id = sec.getAttribute('id'); //id of the current section
        
        if (top >= offset && top < offset + height){ //Checks for the condition

            navLinks.forEach(links => {
                links.classList.remove('active');   //Removes active from all the navlinks first   
                let que = document.querySelector('header .navbar a[href="#' + id + '"]'); //Finds the link that matches the current section id
                que.classList.add('active'); //Adds active to that navlink only
            });
        };
    });
    
}

searchicon.onclick = () => {
    searchform.classList.toggle('active');
}

close.onclick = () => {
    searchform.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});


var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints:{
      0:{
          slidesPerView: 1,
      },
      640: {
          slidesPerView: 2,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  },
});