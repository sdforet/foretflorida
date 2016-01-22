<?php
require_once "php-lib/Decorator.php";

$page = new DECORATOR('index.xhtml');
$page->css('stylesheets/default');
$page->title('FFL');

echo $page->execute();
