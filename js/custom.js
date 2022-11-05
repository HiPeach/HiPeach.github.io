if (document.querySelector('#bber-talk')) {
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical', // 垂直切换选项
      loop: true,
      autoplay: {
      delay: 2500,
      pauseOnMouseEnter: true
    },
    });
  }