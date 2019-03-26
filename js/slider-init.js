$(document).ready(function() {
  $(".testimonial-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    autoplay: true,
    arrows: false
  });
  $(".hero").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: !0,
    dots: !1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000
  });
});
