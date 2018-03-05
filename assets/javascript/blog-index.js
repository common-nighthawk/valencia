$(document).ready(function() {
  var year = window.location.href.split("?")[1];

  $.getJSON("https://www.googleapis.com/blogger/v3/blogs/651190750087447841/posts?key=AIzaSyC2KvolQ8HF1xQfD0hyNnkvWPHJaDeZAwA", function(data) {
    var posts = data["items"];
    for (i = 0; i < posts.length; i++) {
      if (year == undefined || year == posts[i]["published"].substring(0, 4)) {

        var content = posts[i]["content"];
        if (content.length > 500) {
          content = content.substring(0, 500);
          content = content + "..."
        }

        var date = posts[i]["published"];
        var title = posts[i]["title"];

        var xyear = date.substring(0, 4);
        var month = parseInt(date.substring(5, 7));
        var day = parseInt(date.substring(8, 10));
        var months = ['January ', 'February ', 'March ', 'April ', 'May ', 'June ', 'July ', 'August ', 'September ', 'October ', 'November ', 'December '];
        var displayDate = "<span class='upper'>" + months[month] + day + ', ' + xyear + " - " + title + "</span>";

        $(".post-"+i).html(displayDate + "<br>" + content + "<br><a class='fancy-link' href='post.html?" + posts[i]["id"] + "'>read more</a>");
        $("<hr>").insertAfter($(".row:has(.post-"+(i-1)+")"));
      }
    }
  });
});
