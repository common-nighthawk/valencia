$(document).ready(function() {
  sizeHero();
});

$(window).resize(function() {
  sizeHero();
});

function sizeHero() {
  if ($(window).width() > 1700) {
    var left = ($(window).width() - 1700) / 2
    $('#myCarousel').css('left', left);
    $('#myCarousel').css('width', '1700px');
  } else {
    $('#myCarousel').css('left', '0');
    $('#myCarousel').css('width', '100vw');
  }
}
