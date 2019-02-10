var searchBoxToggle = (function(){
  var self = {},
      $body = undefined,
      $overlay = undefined,
      $searchToggle = undefined,
      $closeBtn = undefined;

  self.init = function() {
    $body = $("body");
    $overlay = $(".c-sn__overlay--searchbox");
    $searchToggle = $(".js-search-box-toggle");
    $closeBtn = $(".js-btn-close");
    self.bindActions();
  };

  self.bindActions = function() {
    $searchToggle.on("click", function() {
      $body.addClass("js-overlay-is-visible");
      $overlay.addClass("is-visible");
    });
    $closeBtn.on("click", function() {
      $body.removeClass("js-overlay-is-visible");
      $overlay.removeClass("is-visible");
    });
  };

  return self;
})();
