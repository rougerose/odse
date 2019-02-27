var searchForm = (function() {
  var self = {},
      $searchbox = undefined;

  self.init = function() {
    $searchbox = $('.c-search-box');
    $searchInput = $searchbox.find('input.search');
    self.bindActions();
    self.isfilled($searchInput, '');
  };

  self.bindActions = function() {
    $searchInput.on('focusout focus', function() {
      self.isfilled($(this), event);
    });
  };

  self.isfilled = function($el, e) {
    $elParent = $el.parent();

    if ('' !== $el.val()) {
      $el.addClass('is-filled');
      $elParent.addClass('is-filled');
    } else {
      $el.removeClass('is-filled');
      $elParent.removeClass('is-filled');
    }

    if (e.type === 'focus' ) {
      $el.addClass('is-filled');
      $elParent.addClass('is-filled');
    }
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
