

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,
    // mousewheel: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true
    },
    // If we need navigation
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    // Responsive breakpoints
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});