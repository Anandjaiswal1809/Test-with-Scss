$(document).ready(function () {
    $('.Find-ticket').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        prevArrow: '<i class="fa fa-angle-left prev-arrow"></i>',
        nextArrow: '<i class="fa fa-angle-right next-arrow"></i>',
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});


$(document).ready(function () {
    $('.Camping').slick({
        infinite: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});



$(document).ready(function () {
    $("#open-drawer").click(function () {
      $("header").toggleClass("open");
    });
  });


  $(".overlay").click(function () {
    $("header").removeClass("open");
    $("body").removeClass("overlay");
  });



  $(".close").click(function () {
    $("header").removeClass("open");
    $("body").removeClass("overlay");
  });



  $(".submenu-title").on("click", function () {
    if ($(this).hasClass('t-open')) {
      $(this).removeClass('t-open');
      $(this).parent().next().slideUp(500);
    } else {
      $(".submenu-title").removeClass('t-open');
      $(".custom-accordion-content").slideUp(350);
      $(this).toggleClass('t-open');
      $(this).parent().next().slideToggle(500);
    }
  });



  var body = document.getElementById('h-menu');
  var openMenu = document.getElementById('menuControlOpen'); // or whatever triggers the toggle
  var closeMenu = document.getElementById('menuControlClose'); // or whatever triggers the toggle
  
  openMenu.addEventListener('click', function (e) {
      body.classList.toggle('menu--active'); // or whatever your active class is
      $('body').addClass('overlayActive')
  });
  
  closeMenu.addEventListener('click', function (e) {
      body.classList.toggle('menu--active'); // or whatever your active class is
      $('body').removeClass('overlayActive')
  });        



  $(".custom-accordion-title").on("click", function () {
      if ($(this).hasClass('t-open')) {
          $(this).removeClass('t-open');
          $(this).parent().next().slideUp(500);
      } else {
          $(".custom-accordion-title").removeClass('t-open');
          $(".custom-accordion-content").slideUp(350);
          $(this).toggleClass('t-open');
          $(this).parent().next().slideToggle(500);
      }
  });
