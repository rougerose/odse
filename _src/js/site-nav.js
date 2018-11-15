// ----- site-nav ----- //
var siteNav = $(".js-site-nav"),
	menuToggle = $(".js-menu-toggle"),
	overlay = $(".c-overlay-sitenav");

menuToggle.on("click", function(){
	siteNav.toggleClass("is-open");
	overlay.toggleClass("is-open");
});
