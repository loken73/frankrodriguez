
//
$(document).ready(function() {
  // Initialize fullPage.js
  $('#fullpage').fullpage({
    'verticalCentered': false,
    'scrolling': false,
    'autoScrolling': false,
    'css3': true,
    'navigation': true,
    'navigationPosition': 'right',
  });

  // Add a delay to the auto-scrolling between sections
  function delayScroll() {
    // Replace 2000 with the desired delay in milliseconds (e.g., 2000 for 2 seconds)
    setTimeout(function() {
      $.fn.fullpage.moveSectionDown();
      delayScroll(); // Recursive call for continuous scrolling
    }, 2000);
  }

  // Start the delayed scrolling when the document is ready
  delayScroll();

  // Initialize WOW.js and other custom functions
  new WOW().init();
  $(".rotate").textrotator();
  $('.fp-viewing').removeClass('fp-viewing');
});
