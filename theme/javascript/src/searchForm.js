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
