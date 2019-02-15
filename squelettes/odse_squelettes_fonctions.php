<?php

if (!defined("_ECRIRE_INC_VERSION")) {
	return;
}


function odse_squelettes_afficher_delai_peremption_articles() {
  $config = unserialize($GLOBALS['meta']['odse_squelettes']);
  if (isset($config['articles_delai_peremption'])) {
    $config = $config['articles_delai_peremption'];
  } else {
    $config = $GLOBALS['odse_articles_delai_peremption'];
  }
  return $config;
}

function odse_squelettes_verifier_peremption_article($date) {
  $delai = odse_squelettes_afficher_delai_peremption_articles();

  $date_peremption = new DateTime("now - $delai months");

  $date_article = new DateTime($date);

  if ($date_article <= $date_peremption) {
		return true;
	} else {
		return false;
	}
}
