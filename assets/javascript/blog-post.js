$(document).ready(function() {
  var id = window.location.href.split("?")[1];
  $.getJSON("https://www.googleapis.com/blogger/v3/blogs/651190750087447841/posts/" + id + "/?key=AIzaSyC2KvolQ8HF1xQfD0hyNnkvWPHJaDeZAwA", function(data) {
    var post = data;
    console.log(post);
    $(".title").html(post["title"]);
    $(".content").html(post["content"].replace(/<a href.*img.*<\/a>/g, ""));
  });
});
