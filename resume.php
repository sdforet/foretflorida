<?php
require_once "php-lib/Decorator.php";

$page = new DECORATOR('resume.xhtml');
$page->css('stylesheets/default');
$page->title('Resume: Sean Foret');
$page->resume = true;


echo $page->execute();
