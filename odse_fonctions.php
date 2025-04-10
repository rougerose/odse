<?php

if (!defined("_ECRIRE_INC_VERSION")) {
  return;
}

include_spip('inc/config');

/**
 * Afficher le délai à partir duquel un article est considéré comme périmé.
 * @return int délai exprimé en mois.
 */
function odse_afficher_delai_peremption_articles() {
	$config = lire_config('odse');
	if ($config) {
		$delai = $config['articles_delai_peremption'];
	} else {
		$delai = $GLOBALS['odse_articles_delai_peremption'];
		ecrire_config('odse/articles_delai_peremption', $delai);
	}
  return $delai;
}


/**
 * Vérifier si un article est périmé.
 *
 * @filtre
 * @param  string $date
 * @return bool
 */
function odse_verifier_peremption_article($date) {
  $delai = odse_afficher_delai_peremption_articles();

  $date_peremption = new DateTime("now - $delai months");

  $date_article = new DateTime($date);

  if ($date_article <= $date_peremption) {
    return true;
  } else {
    return false;
  }
}


/**
 * Suppression des retours à la ligne et tabulations
 * générés par les boucles de SPIP.
 *
 * @filtre
 * @link      http://seenthis.net/messages/391910#message392025
 * @link      http://www.paris-beyrouth.org/tutoriaux-spip/article/objectif-pagespeed-100-100-avec
 * @author    Arno
 * @param     string $html
 * @return    string $html
**/
function mini_html($texte) {
  $texte = preg_replace(",\n[\t\ ]*,", "", $texte);
  $texte = preg_replace(",\n+,", "", $texte);
  return $texte;
}


/**
 * Fonction shuffle de php.
 *
 * Note : Cette fonction est un contournement car
 * #ARRAY|shuffle produit une erreur php.
 *
 * @filtre
 * @param  array $array
 * @return array
 */
function odse_array_shuffle($array) {
  if (is_array($array)) {
    shuffle($array);
  }
  return $array;
}
