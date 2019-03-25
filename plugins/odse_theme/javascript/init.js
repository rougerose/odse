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
