<?php

require_once "php-lib/PHPTAL.php";

$page = new PHPTAL('templates/index.xhtml');
$page->cleanUpCache();
$page->myvar = "this is my variable";
$page->body = 'body string';

echo $page->execute();
?>
