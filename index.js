$(document).ready(function(){
  $("button.scroll-to-aboutme").click(function(){
    $('body,html').animate({ scrollTop: $('.about_me').offset().top}, 1200);
  });
  $("button.scroll-to-projects").click(function(){
    $('body,html').animate({ scrollTop: $('.project_section').offset().top}, 1200);
  });
  $("button.scroll-to-aboutme").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
  });
});





var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2200); // Change image every 2 seconds
}