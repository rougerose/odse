<?php

if (!defined("_ECRIRE_INC_VERSION")) {
  return;
}
// ODSE : délai de péremption des articles en mois
if (!isset($GLOBALS['odse_articles_delai_peremption'])) {
  $GLOBALS['odse_articles_delai_peremption'] = 48;
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


// Debug
// Activer les rapports d’erreurs PHP
// error_reporting(E_ALL^E_NOTICE);
// ini_set ("display_errors", "On");
// Afficher toutes les erreurs dans SPIP
// define('SPIP_ERREUR_REPORT', E_ALL);
// define('_NO_CACHE', -1);
// define('_INTERDIRE_COMPACTE_HEAD_ECRIRE', true);
// define('_LOG_FILELINE',true);
// define('_LOG_FILTRE_GRAVITE',8);
