var toggleSiteNav = (function(){
  var self = {},
      $body = undefined,
      $siteNav = undefined,
      $navToggle = undefined;

  self.init = function() {
    $body = $("body");
    $siteNav = $(".js-site-nav");
    $navToggle = $(".js-site-nav-toggle");
    self.bindActions();
  };

  self.bindActions = function() {
    $navToggle.on("click", function() {
      $body.toggleClass("js-overlay-is-visible");
      $siteNav.toggleClass("is-open");
    });
  };

  return self;
})();
