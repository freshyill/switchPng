(function ($) {

  $.fn.switchPng = function (options) {

    var targets = this,
       dotSVG = /\.(svg)($|\?)/;

    console.log(targets);

    if (Modernizr.svg) {
      for (var i = 0; i !== targets.length; ++i) {
        targets[i].src = targets[i].src.replace(dotSVG, '.png$2');
      }
    }
  };

})(jQuery);
