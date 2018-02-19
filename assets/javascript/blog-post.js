$(document).ready(function() {
  var id = window.location.href.split("?")[1];
  $.getJSON("https://www.googleapis.com/blogger/v3/blogs/651190750087447841/posts/" + id + "/?key=AIzaSyC2KvolQ8HF1xQfD0hyNnkvWPHJaDeZAwA", function(data) {
    var post = data;
    var year = data["published"].substring(0, 4);
    var month = parseInt(data["published"].substring(5, 7));
    var day = parseInt(data["published"].substring(8, 10));
    var months = ['January ', 'February ', 'March ', 'April ', 'May ', 'June ', 'July ', 'August ', 'September ', 'October ', 'November ', 'December '];
    $(".title").html("<span class='upper'>" + months[month] + day + ', ' + year + " - " + post["title"] + "</span>");
    $(".content .foo").html(post["content"]);
  });
});
