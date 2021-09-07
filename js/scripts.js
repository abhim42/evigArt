$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 30,
  autoSlider: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 5000,
  // },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper(".colorPencilSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoSlider: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 5000,
  // },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

// const setImg = () => {
//   var mainRow = document.getElementById("mainRow");
//   var div = document.createElement("div");
//   div.classList.add("col-md-3");
//   var cardDiv = document.createElement("div");
//   cardDiv.classList.add("card", "bg-transparent", "border-0");
//   cardDiv.innerHTML =
//     "<img src='images/charcol.jpeg' class='card-img-top' width='100%' height='348.09px' style='object-fit: cover;'>";
//   var cardDescDiv = document.createElement("div");
//   cardDescDiv.classList.add("card-body", "custom-padding");
//   cardDescDiv.innerHTML =
//     "<h5 class='card-title text-center' style='color: #ba431d!important;'>Charcol Drawing</h5>";
//   mainRow.appendChild(div);
//   div.appendChild(cardDiv);
//   cardDiv.appendChild(cardDescDiv);
//   console.log(div);
// };

// setImg();

// With jQuery
$(document).on({
  contextmenu: function (e) {
    console.log("ctx menu button:", e.which);

    // Stop the context menu
    e.preventDefault();
  },
  mousedown: function (e) {
    console.log("normal mouse down:", e.which);
  },
  mouseup: function (e) {
    console.log("normal mouse up:", e.which);
  },
});
