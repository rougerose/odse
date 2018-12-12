
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