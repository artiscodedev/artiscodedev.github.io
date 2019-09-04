class ctmPreloader {
  constructor() {
    let $preloader = $("#preloader"),
      $loader = $("#preloader #loader");

    setTimeout(() => { // se rremueve para tomar la carga natural del html
      $preloader.addClass("loading");
      $preloader.addClass("ended");
    }, 1000);

    // $loader.onCSSTransitionEnd(function() {
    //   $preloader.addClass("ended");
    //   console.log("preloader ended");
    // });
  }
}
