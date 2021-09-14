$(function () {

    createSticky($("#header"));
});
  
function createSticky(sticky) {
  
    if (typeof sticky !== "undefined") {
  
      var pos = sticky.offset().top,
      win = $(window);
  
      win.on("scroll", function () {
        win.scrollTop() >= pos ? sticky.addClass("fixed") : sticky.removeClass("fixed");  //conditional. variablename = (condition) ? value1:value2 

        // var element_position = $('#scroll-to').offset().top;
        // var screen_height = $(window).height();
        // var activation_offset = 0.5;//determines how far up the the page the element needs to be before triggering the function
        // var activation_point = element_position - (screen_height * activation_offset);
        // var max_scroll_height = $('body').height() - screen_height - 5;//-5 for a little bit
        // var y_scroll_pos = window.pageYOffset;

        // var element_in_view = y_scroll_pos > activation_point;
        // var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

        // if(element_in_view || has_reached_bottom_of_page) {
          
        // }
      });
    }
}