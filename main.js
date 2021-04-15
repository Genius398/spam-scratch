function lol(){
  var username = document.getElementById("username").value;
  var content = document.getElementbyId("message").value;
  var amount = document.getElementbyId("amount").value;
}







function postComment(content, parent_id, commentee_id, username, i) {
  setTimeout(function() {
    $.ajax({
      type: "POST",
      url: "https://scratch.mit.edu/site-api/comments/user/" + username + "/add/",
      data: JSON.stringify({
        "content": content + " " + new Date,
        "parent_id": parent_id,
        "commentee_id": commentee_id
      })
    });
    console.log(i + 1);
  }, i * 3000);
}

$.ajax({
  url: "https://scratch.mit.edu/site-api/comments/user/" + username,
  success: function(data) {
    var commentparser = new DOMParser();
    var commentdoc = commentparser.parseFromString(data, "text/html");
    var parent_id = commentdoc.getElementsByClassName("comment ")[0].getAttribute("data-comment-id");
    for (var i = 0; i < amount; i++) {
      postComment(content, parent_id, "", username, i);
    }
  }
});
