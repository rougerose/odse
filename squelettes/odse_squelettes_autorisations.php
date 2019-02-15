<?php

if (!defined("_ECRIRE_INC_VERSION")) {
	return;
}


function odse_squelettes_autoriser() {}


function autoriser_odse_squelettes_configurer($faire, $type, $id, $qui, $opt) {
	return autoriser('webmestre');
}
