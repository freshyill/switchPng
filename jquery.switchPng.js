(function ($) {

  $.fn.switchPng = function() {

    var targets = this,
       dotSVG = /\.(svg)($|\?)/;

    if (!Modernizr.svg) {
      for (var i = 0; i !== targets.length; ++i) {
        targets[i].src = targets[i].src.replace(dotSVG, '.png$2');
      }
    }
  };

})(jQuery);
