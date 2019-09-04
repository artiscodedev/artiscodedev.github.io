class compEmpresas {
  constructor() {
    let $bxSlider = $("#bxslider");
    $bxSlider.bxSlider({
      minSlides: 1,
      maxSlides: 6,
      slideWidth: 200,
      slideMargin: 30,
      ticker: true,
      speed: 30000
    });
  }
}
