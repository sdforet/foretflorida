<?php
require_once "php-lib/Decorator.php";

$page = new DECORATOR('interests/movies.xhtml');
$page->css(
   'stylesheets/jquery.jscrollpane',
   'stylesheets/default',
   'stylesheets/popupMessage',
   'stylesheets/movies'
);
$page->js(
   'javascript/jquery.cookie',
   'javascript/jquery.mousewheel',
   'javascript/jquery.jscrollpane',
   'javascript/date',
   'javascript/PopupMessage',
   'javascript/isotope-docs.min',
   'javascript/movies'
);
$page->title('Movies');
$page->setVarVal('intHL', true);
$page->setVarVal('movieSearch', true);

echo $page->execute();
