// Webp
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

$(document).ready(function () {
  // Burger
  $(".icon-menu").click(function (event) {
    $(".icon-menu,.menu__body").toggleClass("active");
    $("body").toggleClass("lock");
  });
  // Slider
  let mySwiper = new Swiper(".swiper-container", {
    loop: true,
    speed: 350,
    autoHeight: true,
    pagination: {
      el: ".twitter__pagination",
      type: "bullets",
      clickable: true,
    },
  });
  // Scroll to, go to
  $(".goto").click(function () {
    var el = $(this).attr("href").replace("#", "");
    var offset = 0;
    $("body,html").animate(
      { scrollTop: $("." + el).offset().top + offset },
      500,
      function () {}
    );

    if ($(".icon-menu").hasClass("active")) {
      $(".menu__body,.icon-menu").removeClass("active");
      $("body").removeClass("lock");
    }
    return false;
  });
});
