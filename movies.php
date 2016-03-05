<?php
require_once "php-lib/Decorator.php";

$page = new DECORATOR('interests/movies.xhtml');
$page->css(
   'stylesheets/default',
   'stylesheets/popupMessage'
);
$page->js(
   'javascript/jquery.cookie',
   'javascript/jquery.slimscroll',
   'javascript/PopupMessage'
);
$page->title('Movies');
$page->setVarVal('intHL', true);

echo $page->execute();
