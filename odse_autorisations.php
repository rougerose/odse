<?php

if (!defined("_ECRIRE_INC_VERSION")) {
	return;
}


function odse_autoriser() {}


function autoriser_odse_configurer($faire, $type, $id, $qui, $opt) {
	return autoriser('webmestre');
}
