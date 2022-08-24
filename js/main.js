function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
/**projects**/
/**associations**/
$(document).ready(function(){

  if($('.brands_slider').length)
  {
  var brandsSlider = $('.brands_slider');
  
  brandsSlider.owlCarousel(
  {
  loop:true,
  autoplay:true,
  autoplayTimeout:3000,
  nav:false,
  dots:false,
  autoWidth:true,
  items:4,
  margin:40
  });
  
  if($('.brands_prev').length)
  {
  var prev = $('.brands_prev');
  prev.on('click', function()
  {
  brandsSlider.trigger('prev.owl.carousel');
  });
  }
  
  if($('.brands_next').length)
  {
  var next = $('.brands_next');
  next.on('click', function()
  {
  brandsSlider.trigger('next.owl.carousel');
  });
  }
  }
  
  
  });


/**associations**/
/**projects**/


// Keyboard nav

$('html body').keydown(function(e) {

  if (e.keyCode == 37) {// left

    $('.active').prev().trigger('click');

  }

  else if (e.keyCode == 39) {// right

    $('.active').next().trigger('click');

  }

});
/**backtotop**/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});