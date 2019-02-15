<?php

if (!defined("_ECRIRE_INC_VERSION")) {
  return;
}
// ODSE
if (!isset($GLOBALS['odse_articles_delai_peremption'])) {
  $GLOBALS['odse_articles_delai_peremption'] = 12*4;
}


// Zcore
if (!isset($GLOBALS['z_blocs'])) {
  $GLOBALS['z_blocs'] = array(
    'content',
    'head',
    'head_js',
    'header',
    'aside',
    'footer'
  );
}


// Intertitres
$GLOBALS['debut_intertitre'] = "\n<h2>";
$GLOBALS['fin_intertitre'] = "</h2>\n";
