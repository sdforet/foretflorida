<?php
require_once "php-lib/Decorator.php";

$page = new DECORATOR('index.xhtml');
$page->body = 'body string';

echo $page->execute();
?>
