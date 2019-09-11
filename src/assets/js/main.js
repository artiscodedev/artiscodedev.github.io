(function($) {
  "use strict";
  $(window).on({
    load: function() {
      let preloader = new ctmPreloader();
    },
    scroll: function() {
      // FIX HEADER ON SCROLL
      var e = $(window).scrollTop();
      $(window).height();
      e > 1
        ? $(".header").addClass("header-fixed")
        : $(".header").removeClass("header-fixed");

      // BACK TO TOP
      if ($(this).scrollTop() > 100) {
        $("#back-top").fadeIn();
      } else {
        $("#back-top").fadeOut();
      }
    }
  });

  $(document).ready(function() {
    //do something
    let empresas = new compEmpresas();
    _countNumber();
    $("#back-top a").on("click", function() {
      $("body,html")
        .stop(false, false)
        .animate(
          {
            scrollTop: 0
          },
          800
        );
      return false;
    });
  });
  //counter

  function _countNumber() {
    var animation = true,
      $wrapper = $(".fact-badges");
    if ($wrapper.length > 0) {
      $(window).scroll(function() {
        var hT = $wrapper.offset().top,
          hH = $wrapper.outerHeight(),
          wH = $(window).height(),
          wS = $(this).scrollTop();

        if (wS > hT + hH - wH) {
          if (animation) {
            $(".badges-counter").each(function() {
              $(this)
                .prop("Counter", 0)
                .animate(
                  {
                    Counter: $(this).text()
                  },
                  {
                    duration: 4000,
                    easing: "swing",
                    step: function(now) {
                      $(this).text(Math.ceil(now));
                    }
                  }
                );
            });
            animation = false;
          }
        }
      });
    }
  }

  //  Revolution Slider Initialization Starts
  var tpj = jQuery;
  var revapi4;
  tpj(document).ready(function() {
    if (tpj("#rev_slider").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider");
    } else {
      revapi4 = tpj("#rev_slider")
        .show()
        .revolution({
          sliderType: "standard",
          jsFileLocation: "js/plugins/revolution/js/",
          dottedOverlay: "none",
          sliderLayout: "fullscreen",
          delay: 9000,
          navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            touch: {
              touchenabled: "on",
              swipe_threshold: 75,
              swipe_min_touches: 1,
              swipe_direction: "horizontal",
              drag_block_vertical: false
            },
            arrows: {
              style: "zeus",
              enable: true,
              hide_onmobile: true,
              hide_under: 600,
              hide_onleave: true,
              hide_delay: 200,
              hide_delay_mobile: 1200,
              tmp:
                '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
              left: {
                h_align: "left",
                v_align: "center",
                h_offset: 90,
                v_offset: 0
              },
              right: {
                h_align: "right",
                v_align: "center",
                h_offset: 90,
                v_offset: 0
              }
            },
            bullets: {
              enable: false,
              hide_onmobile: true,
              hide_under: 600,
              style: "metis",
              hide_onleave: true,
              hide_delay: 200,
              hide_delay_mobile: 1200,
              direction: "horizontal",
              h_align: "center",
              v_align: "bottom",
              h_offset: 0,
              v_offset: 30,
              space: 5,
              tmp:
                '<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span>'
            }
          },
          viewPort: {
            enable: true,
            outof: "pause",
            visible_area: "70%"
          },
          responsiveLevels: [1240, 1024, 778, 320],
          gridwidth: [1240, 1024, 778, 320],
          gridheight: [600, 600, 500, 400],
          lazyType: "none",
          parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 2000,
            levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50]
          },
          shadow: 0,
          spinner: "off",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          hideThumbsOnMobile: "off",
          autoHeight: "off",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
          }
        });
    }
  });
})(jQuery);
