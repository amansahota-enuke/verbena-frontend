$(document).ready(function() {

    $('.sidebar-menu ul li a').click(function() {
        $('.sidebar-inner-menu').toggleClass('collapsed');
    });

    // if has class

    $('.back a').click(function() {
        if ($(".sidebar-inner-menu").hasClass("opened")) 
      {
        //
      }
      else
      {
        $('.sidebar-inner-menu').toggleClass('collapsed');
      }
    });
    

});



