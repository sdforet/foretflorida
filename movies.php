<?php
require_once "php-lib/Decorator.php";

$page = new DECORATOR('interests/movies.xhtml');
$page->css(
   'stylesheets/default',
   'stylesheets/popupMessage',
   'stylesheets/movies'
);
$page->js(
   'javascript/jquery.cookie',
   'javascript/jquery.slimscroll',
   'javascript/date',
   'javascript/PopupMessage',
   'javascript/isotope-docs.min',
   'javascript/movies'
);
$page->title('Movies');
$page->setVarVal('intHL', true);

echo $page->execute();
