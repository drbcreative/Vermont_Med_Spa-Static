$(document).ready(function() {
  $(".testimonial-container").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    autoplay: true,
    arrows: false
  });
  $(".hero").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: !0,
    dots: false,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000
  });
});
