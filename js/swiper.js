var swiper = new Swiper('.swiper-container1', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 5000
    },
    speed: 1000,
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  var mySwiper = document.querySelector('.swiper-container1').swiper

  mySwiper.slideNext(1000, 1000);
  mySwiper.slidePrev(1000, 1000);


  var swiper = new Swiper('.swiper-container2', {
      
      spaceBetween: 10,
      slidesPerGroup: 4,
      loop: false,
      loopFillGroupWithBlank: true,
      pagination: {
          el: '.swiper-pagination2',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next2',
          prevEl: '.swiper-button-prev2',
      },


      breakpoints: {
          // when window width is <= 500px
         

          300:{
              slidesPerView: 2,
              slidesPerGroup: 2,
          },

          500:{
              slidesPerView: 3,
              slidesPerGroup: 3,
          },
          600:{
              slidesPerView: 4,
              slidesPerGroup: 4,
          },
          700:{
              slidesPerView: 5,
              slidesPerGroup: 5,
          },
          900:{
              slidesPerView: 6,
              slidesPerGroup: 6,
          },


          1300:{
              slidesPerView: 7,
              slidesPerGroup: 7,
          },
          1300:{
              slidesPerView: 7,
              slidesPerGroup: 7,
          },
          1500: {
              slidesPerView: 7,
              slidesPerGroup: 7,
          },
          1700: {
              slidesPerView: 9,
              slidesPerGroup: 9,
          },

      }



  });

  
  var swiper = new Swiper('.swiper-container3', {
      slidesPerView: 9,
      spaceBetween: 10,
      slidesPerGroup: 4,
      loop: false,
      loopFillGroupWithBlank: true,
      pagination: {
          el: '.swiper-pagination3',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next3',
          prevEl: '.swiper-button-prev3',
      },
      breakpoints: {
          // when window width is <= 500px
         

          300:{
              slidesPerView: 2,
              slidesPerGroup: 2,
          },

          500:{
              slidesPerView: 3,
              slidesPerGroup: 3,
          },
          600:{
              slidesPerView: 4,
              slidesPerGroup: 4,
          },
          700:{
              slidesPerView: 5,
              slidesPerGroup: 5,
          },
          900:{
              slidesPerView: 6,
              slidesPerGroup: 6,
          },


          1300:{
              slidesPerView: 7,
              slidesPerGroup: 7,
          },
          1300:{
              slidesPerView: 7,
              slidesPerGroup: 7,
          },
          1500: {
              slidesPerView: 7,
              slidesPerGroup: 7,
          },
          1700: {
              slidesPerView: 9,
              slidesPerGroup: 9,
          },

      }
  });