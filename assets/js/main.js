$(document).ready(function () {
  // Menu
  $(".main-nav ul li:has(ul)").addClass("submenu");
  $(".main-nav ul li:has(ul)").append("<i></i>");
  $(".main-nav ul i").click(function () {
    $(this).parent("li").toggleClass("open");
    $(this).parent("li").children("ul").slideToggle();
  });
  $(".mob-btn").click(function () {
    if (!$("body").hasClass("show-menu")) {
      $("body").addClass("show-menu");
    } else {
      $("body").removeClass("show-menu");
    }
  });

  $(".overlay").click(function () {
    if ($("body").hasClass("show-menu")) {
      $("body").removeClass("show-menu");
    }
  });
  function backToScreen() {
    $("body").removeClass("show-menu");
  }

  $("#back-to-screen").click(function () {
    backToScreen();
  });

  //  End Menu

  // Back to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $("#back-to-top").addClass("visible");
    } else {
      $("#back-to-top").removeClass("visible");
    }
  });
  $("#back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
  $("<a href='#' id='back-to-top' title=''></a>").clone().appendTo("body");

  //   Back to top
}); // document ready

// Slick slider
//   $('#exp-itemslide').slick({
//   draggable: false,
//   arrows: false,
//   dots: false,
//   infinite: false,
//   slidesToShow: 6,
//   slidesToScroll: 1,
//   responsive: [
//     {
//         breakpoint: 1450,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 1,

//         }
//       },
//       {
//         breakpoint: 1199,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           arrows:true
//         }
//       },
//       {
//         breakpoint: 991,
//         settings: {
//           centerMode: true,
//         infinite: true,
//         centerPadding: '60px',
//         slidesToShow: 2,
//         speed: 500,
//         variableWidth: false,
//         arrows:true
//         }
//       },{
//         breakpoint: 767,
//         settings: {
//           centerMode: true,
//         infinite: true,
//         centerPadding: '60px',
//         slidesToShow: 1,
//         speed: 500,
//         variableWidth: false,
//         }
//       }]

// });

$(".slic-slide-wrap").slick({
  fade: true,
  centerMode: true,
  centerPadding: "1px",
  cssEase: "linear",
  arrows: false,
  dots: true,
});

$(".client-list").slick({
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
