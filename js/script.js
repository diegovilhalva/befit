let menu = document.getElementById('menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

let swiper = new Swiper('.home-slider',{
    spaceBetween: 20,
    effect: "fade",
    grabCursor:true,
    centeredSlides:true,
    loop:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        reverseDirection: false,
     } 
    
});

let swiper2 = new Swiper('.review-slider',{
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});


let swiper3 = new Swiper('.blogs-slider',{
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
     pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:2,
        },
    },
});