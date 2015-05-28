/**
 * Promise.prototype.then()
 */

function demo1() {
  getJSON("/posts.json").then(function(json) {
    return json.post;
  }).then(function(post) {
    // ...
  });
}

function demo2() {
  getJSON("/post/1.json").then(function(post) {
    return getJSON(post.commentURL);
  }).then(function(comments) {
    // ...
  });
}
