$(document).ready(function() {
  $(".hero").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: !0,
    dots: false,
    // responsive: [
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: !0,
    //       dots: !1
    //     }
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: !0,
    //       dots: !1
    //     }
    //   }
    // ],
    // nextArrow: $(".slide-right-2"),
    // prevArrow: $(".slide-left-2"),
    autoplay: true
  });
  // $(".testimonial-slider").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   infinite: !0,
  //   dots: true,
  //   autoplay: true,
  //   arrows: false
  // });
  // $(".hero-slider").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   infinite: !0,
  //   dots: !1,
  //   autoplay: true,
  //   arrows: false,
  //   autoplaySpeed: 5000
  // });
});
