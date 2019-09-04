(function($) {
  "use strict";
  $(window).on({
    load: function() {
      console.log("preloader");

      let preloader = new ctmPreloader();

      // preloader.init();
      console.log("preloader end");
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
})(jQuery);
