(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).scroll(function(event) {
  
  
  //with after element
  // $("body").each(function() {
  //   var raf = $("#question-1");
  //   var lel = $("#answer-1");
  //   if (lel.visible(true)) {
  //     raf.addClass("visible-answer"); 
  //     raf.removeClass("hidden-answer");
  //   } else {
  //     raf.addClass("hidden-answer");
  //   }
  // });
  // $("body").each(function() {
  //   var raf = $("#question-2");
  //   var lel = $("#answer-2");
  //   if (lel.visible(true)) {
  //     raf.addClass("visible-answer");
  //     raf.removeClass("hidden-answer");
  //   } else {
  //     raf.addClass("hidden-answer");
  //   }
  // });
  // $("body").each(function() {
  //   var raf = $("#question-3");
  //   var lel = $("#answer-3");
  //   if (lel.visible(true)) {
  //     raf.addClass("visible-answer");
  //     raf.removeClass("hidden-answer");
  //   } else {
  //     raf.addClass("hidden-answer");
  //   }
  // });
  // $("body").each(function() {
  //   var raf = $("#question-4");
  //   var lel = $("#answer-4");
  //   if (lel.visible(true)) {
  //     raf.addClass("visible-answer");
  //     raf.removeClass("hidden-answer");
  //   } else {
  //     raf.addClass("hidden-answer");
  //   }
  // });
  // $("body").each(function() {
  //   var raf = $("#question-5");
  //   var lel = $("#answer-5");
  //   if (lel.visible(true)) {
  //     raf.addClass("visible-answer");
  //     raf.removeClass("hidden-answer");
  //   } else {
  //     raf.addClass("hidden-answer");
  //   }
  // });
  // $("body").each(function() {
  //   var raf = $("#question-6");
  //   var lel = $("#answer-6");
  //   if (lel.visible(true)) {
  //     raf.addClass("visible-answer");
  //     raf.removeClass("hidden-answer");
  //   } else {
  //     raf.addClass("hidden-answer");
  //   }
  // });

  //without after element
  $("body").each(function() {
    var raf = $("#question-1");
    var lel = $("#answer-1");
    if (lel.visible(true)) {
      raf.addClass("visible-answer"); 
    } else {
      raf.removeClass("visible-answer");
    }
  });
  $("body").each(function() {
    var raf = $("#question-2");
    var lel = $("#answer-2");
    if (lel.visible(true)) {
      raf.addClass("visible-answer"); 
    } else {
      raf.removeClass("visible-answer");
    }
  });
  $("body").each(function() {
    var raf = $("#question-3");
    var lel = $("#answer-3");
    if (lel.visible(true)) {
      raf.addClass("visible-answer"); 
    } else {
      raf.removeClass("visible-answer");
    }
  });
  $("body").each(function() {
    var raf = $("#question-4");
    var lel = $("#answer-4");
    if (lel.visible(true)) {
      raf.addClass("visible-answer"); 
    } else {
      raf.removeClass("visible-answer");
    }
  });
  $("body").each(function() {
    var raf = $("#question-5");
    var lel = $("#answer-5");
    if (lel.visible(true)) {
      raf.addClass("visible-answer"); 
    } else {
      raf.removeClass("visible-answer");
    }
  });
  $("body").each(function() {
    var raf = $("#question-6");
    var lel = $("#answer-6");
    if (lel.visible(true)) {
      raf.addClass("visible-answer"); 
    } else {
      raf.removeClass("visible-answer");
    }
  });
  
});