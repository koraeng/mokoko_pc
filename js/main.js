const swiper = new Swiper('.main_slider', {
    loop:true,   
    autoplay:{
        delay:2500,
        disableOnInteraction:true,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,    // 페이지 버튼 클릭 가능
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


const swiper2 = new Swiper('.slider02', {
    loop:true,   
    autoplay:{
        delay:1500,
        disableOnInteraction:true,
    },


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },


});


var swiperB = new Swiper(".slider_Br", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });



