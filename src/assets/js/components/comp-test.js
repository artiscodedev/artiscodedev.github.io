class demoObj {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  sum() {
    return this.x + this.y;
  }

  jqbuild() {
    let $div = $("<div>", {
      class: "divDemo row",
      html: `<div class="my-auto col-12"> ${this.sum()} </div>`
    });

    $("#ak-container").append($div);
  }
}
