(function ($, window, document, undefined) {
    
    var d = new Date();
    var n = d.getTime();
    var s = document.body || document.documentElement,
        s = s.style,
        prefixTransition = "";

    if (s.WebkitTransition === "") prefixTransition = "-webkit-";
    if (s.MozTransition === "") prefixTransition = "-moz-";
    if (s.OTransition === "") prefixTransition = "-o-";

    $.fn.extend({
        onCSSTransitionEnd: function (callback) {
           
            var $this = $(this).eq(0);
            $this.one("webkitTransitionEnd mozTransitionEnd oTransitionEnd otransitionend transitionend", callback);
            if ((prefixTransition == "" && !("transition" in s)) || $this.css(prefixTransition + "transition-duration") == "0s") {
                callback();
            } else {
                var arr_1 = $this.css(prefixTransition + "transition-duration").split(", ");
                var arr_2 = $this.css(prefixTransition + "transition-delay").split(", ");
                length = 0;
                for (var i = 0; i < arr_1.length; i++) {
                    length = parseFloat(arr_1[i]) + parseFloat(arr_2[i]) > length ? parseFloat(arr_1[i]) + parseFloat(arr_2[i]) : length;
                };
                var d = new Date();
                var l = d.getTime();
                if ((l - n) > length * 1000) {
                    callback();
                }
            }
            return this;
        }
    });
})(jQuery, window, document);