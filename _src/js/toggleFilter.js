

var toggleFilter = (function(){
	var self = {},
		 $toggleFilter = undefined,
		 $filterContainer = undefined,
		 $filter = undefined;
	
	self.init = function() {
		$filter = $("#filter");
		$toggleFilter = $filter.find(".c-btn--filter");
		$filterContainer = 
		$filter.find(".c-filter__container");
		self.bindActions();
	};
	
	self.bindActions = function() {
		$filterContainer.hide("fast");
		$toggleFilter.on("click", function() {
			$filterContainer.slideToggle();
			$toggleFilter.toggleClass("is-open");
		});
		// $navToggle.on("click", function(){
		// 	$siteNav.toggleClass("is-open");
		// 	$headTitle.toggleClass("is-open");
		// });
	};
	
	return self;
})();

$(function() {
	toggleFilter.init();
});