import A11yDialog from "a11y-dialog";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

/*
A11yDialog
Nav version mobile et Formulaire de recherche version desktop
*/
let siteNavDialog = document.getElementById("dialogSiteNav"),
  searchBoxDialog = document.getElementById("dialogSearchBox"),
  dialogSiteNav,
  dialogSearch;

if (siteNavDialog) {
  dialogSiteNav = new A11yDialog(siteNavDialog);
  dialogSiteNav.on("show", () => disableBodyScroll(siteNavDialog));
  dialogSiteNav.on("hide", () => enableBodyScroll(siteNavDialog));
}

if (searchBoxDialog) {
  dialogSearch = new A11yDialog(searchBoxDialog);
  dialogSearch.on("show", () => disableBodyScroll(searchBoxDialog));
  dialogSearch.on("hide", () => enableBodyScroll(searchBoxDialog));
}
