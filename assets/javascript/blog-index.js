$(document).ready(function() {
  $.getJSON("https://www.googleapis.com/blogger/v3/blogs/651190750087447841/posts?key=AIzaSyC2KvolQ8HF1xQfD0hyNnkvWPHJaDeZAwA", function(data) {
    var posts = data["items"];
    for (i = 0; i < posts.length; i++) {

      var match = /a href.*img.*src="(.*\.[a-zA-Z]{3})".*<\/a>/.exec(posts[i]["content"])
      if (match) {
        $(".image-"+i).html("<a href='post.html?" + posts[i]["id"] + "'><img src='" + match[1] + "'></a>");
      }

      var content = posts[i]["content"].replace(/<a href.*img.*<\/a>/g, "");
      if (content.length > 1000) {
        content = content.substring(0, 1000);
        content = content + "..."
      }

      $(".post-"+i).html(content + " <a class='fancy-link' href='post.html?" + posts[i]["id"] + "'>read more</a>");
      $("<hr>").insertAfter($(".row:has(.post-"+i+")"));
    }
  });
});
