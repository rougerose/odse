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

var searchForm = (function() {
  var self = {},
      $searchbox = undefined;

  self.init = function() {
    $searchbox = $('.c-search-box');
    $searchInput = $searchbox.find('input.search');
    self.bindActions();
    console.log($searchbox, $searchInput);
  };

  self.bindActions = function() {
    $searchInput.on('focusout', function() {
      '' !== $(this).val() ? $(this).addClass('is-filled') : $(this).removeClass('is-filled');
    });
  };

  return self;
})();

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

$(function() {
  searchForm.init();
});

(function () {
  document.addEventListener('DOMContentLoaded', function () {

    var htmlEl = document.documentElement,
        siteNavDialog = document.getElementById('dialogSiteNav'),
        searchBoxDialog = document.getElementById('dialogSearchBox');

    if (searchBoxDialog != null) {
      var dialogSearchBox = new A11yDialog(searchBoxDialog, htmlEl);
      dialogSearchBox.on('show', function (searchBoxDialog, triggerEl) {
        bodyScrollLock.disableBodyScroll(searchBoxDialog);
      });
      dialogSearchBox.on('hide', function(searchBoxDialog, triggerEl) {
        bodyScrollLock.enableBodyScroll(searchBoxDialog);
      });
    }

    if (siteNavDialog != null) {
      var dialogSiteNav = new A11yDialog(siteNavDialog, htmlEl);
      dialogSiteNav.on('show', function (siteNavDialog, triggerEl) {
        bodyScrollLock.disableBodyScroll(siteNavDialog);
      });
      dialogSiteNav.on('hide', function(siteNavDialog, triggerEl) {
        bodyScrollLock.enableBodyScroll(siteNavDialog);
      });
    }
  });
}());
