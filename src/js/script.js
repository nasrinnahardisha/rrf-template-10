
$(document).ready(function () {
  $(".testimonial-content").slick({
    arrows: true,
    prevArrow: '<button class="slick-prev">&#10094;</button>',
    nextArrow: '<button class="slick-next">&#10095;</button>',
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});



$(document).ready(function () {
  $(".tab-btn").on("click", function () {
    var tabId = $(this).data("tab");

    $(".tab-btn").removeClass("active-tab");

    $(this).addClass("active-tab");

    $(".tab-content").addClass("hidden");

    $("#" + tabId).removeClass("hidden");
  });
});





document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      }
  });

  
});