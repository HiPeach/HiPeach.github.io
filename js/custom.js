// 即刻短文 参见 https://blog.zhheo.com/p/557c9e72.html
if (document.querySelector('#bber-talk')) {
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical', // 垂直切换选项
      loop: true,
      autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true
    },
    });
  }