$(document).ready(function(){

  //scroll down animations
  $("button.scroll-to-aboutme").click(function(){
    $('body,html').animate({ scrollTop: $('.resume').offset().top}, 1200);
  });
  $("button.scroll-to-resume").click(function(){
    $('body,html').animate({ scrollTop: $('.resume').offset().top}, 1200);
  });
  $("div.about_me_header").click(function(){
    $('body,html').animate({ scrollTop: $('.about_me').offset().top}, 1200);
  });

  //Links to URLs
  $('div.github_project_box.camera').click(function() {
    window.open("https://github.com/efehoplamaz/CameraClara", '_blank');
  });
  $('div.github_project_box.NLP').click(function() {
    window.open("https://github.com/efehoplamaz/Turkish-NLP-text-classification-with-k-Nearest-Neighbors-algorithm", '_blank');
  });
  $('div.github_project_box.kmeans').click(function() {
    window.open("https://github.com/efehoplamaz/Hierarchical_K-means", '_blank');
  });

  // Hover
  $('div.github_project_box').bind('mouseenter', function() {
    $(this).css('border', '5px solid yellow');
  });
  $('div.github_project_box').bind('mouseleave', function() {
    $(this).css('border', '1px solid #e1e4e8');
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