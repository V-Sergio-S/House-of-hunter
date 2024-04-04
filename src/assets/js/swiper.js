import Swiper from 'swiper/bundle';

const residence = new Swiper(".swiper--residence", {
    slidesPerView: 4,
    spaceBetween: 15,
    navigation: {
        nextEl: ".residence__arrow--next",
        prevEl: ".residence__arrow--prev",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
        },
        "@0.25": {
            slidesPerView: 1,
        },
        "@1.95": {
            slidesPerView: 2,
        },
    },
});
const apartment = new Swiper(".swiper--apartment", {
    slidesPerView: 4,
    spaceBetween: 15,
    navigation: {
        nextEl: ".apartment-arrow--next",
        prevEl: ".apartment-arrow--prev",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
        },
        "@0.95": {
            slidesPerView: 1,
        },
        "@1.25": {
            slidesPerView: 2,
        },
        "@1.75": {
            slidesPerView: 3,
        },
        "@1.95": {
            slidesPerView: 4,
        },
    },
});
const orderCallFauna = new Swiper(".swiper--order-call-fauna", {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
        nextEl: ".fauna-next",
        prevEl: ".fauna-prev",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
        },
    },
});
const orderCallVisio = new Swiper(".swiper--order-call-visio", {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
        nextEl: ".visio-next",
        prevEl: ".visio-prev",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
        },
    },
});