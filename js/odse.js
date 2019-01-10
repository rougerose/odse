
// ----- site-nav ----- //
	// var siteNav = $(".js-site-nav"),
	// 	 navToggle = $(".js-nav-toggle"),
	// 	 headTitle = $(".c-page-head__title");
	// 
	// navToggle.on("click", function(){
	// 	siteNav.toggleClass("is-open");
	// 	headTitle.toggleClass("is-open");
	// });
	
	var toggleSiteNav = (function(){
		var self = {},
			 $siteNav = undefined,
			 $navToggle = undefined,
			 $headTitle = undefined;
		
		self.init = function() {
			$siteNav = $(".js-site-nav");
			$navToggle = $(".js-nav-toggle");
			$headTitle = $(".c-page-head__title");
			self.bindActions();
		};
		
		self.bindActions = function() {
			$navToggle.on("click", function(){
				$siteNav.toggleClass("is-open");
				$headTitle.toggleClass("is-open");
			});
		};
		
		return self;
	})();
	
	$(function() {
		toggleSiteNav.init();
	});


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
	//toggleFilter.init();
});