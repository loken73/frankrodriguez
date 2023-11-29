
//
$(document).ready(function() {
  // Initialize fullPage.js without autoScrolling
  $('#fullpage').fullpage({
    'verticalCentered': false,
    'scrolling': false,
    'autoScrolling': false,
    'css3': true,
    'navigation': true,
    'navigationPosition': 'right',
  });

  // Initialize WOW.js and other custom functions
  new WOW().init();
  $(".rotate").textrotator();
  $('.fp-viewing').removeClass('fp-viewing');
});
