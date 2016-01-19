<?php

require_once "php-lib/PHPTAL.php";

$page = new PHPTAL('templates/base.xhtml');
$page->cleanUpCache();
//$page->body = 'body string';

echo $page->execute();
?>
