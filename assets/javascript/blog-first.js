$(document).ready(function() {
  var postId = null;

  $.getJSON("https://www.googleapis.com/blogger/v3/blogs/651190750087447841/posts?key=AIzaSyC2KvolQ8HF1xQfD0hyNnkvWPHJaDeZAwA", function(data) {
    postId = data["items"][0]["id"];

    $.getJSON("https://www.googleapis.com/blogger/v3/blogs/651190750087447841/posts/" + postId + "/?key=AIzaSyC2KvolQ8HF1xQfD0hyNnkvWPHJaDeZAwA", function(data) {
      var content = data["content"].replace(/<a href.*img.*<\/a>/g, "").replace(/<br \/>/g, "");
      if (content.length > 235) {
        content = content.substring(0, 235);
        content = content + "..."
      }
      $(".featured-news").html(content + " <a class='fancy-link' href='post.html?" + postId + "'>read more</a>");
    });
  });
});
