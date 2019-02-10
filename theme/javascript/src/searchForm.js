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
