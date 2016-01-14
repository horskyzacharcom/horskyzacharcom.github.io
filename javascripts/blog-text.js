var adjustBlogTitle = (function() {
  var padding = parseInt($('.blog-title').css('padding-left'), 10);

  var width = $('.blog-title').width()/2;
  $('.blog-title').css('margin-left', -(width + padding + 7));
});

$(document).ready(function(){
  adjustBlogTitle();
});
