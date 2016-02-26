<?php
require_once "php-lib/Decorator.php";

$page = new DECORATOR('interests/gearhead.xhtml');
$page->css(
   'stylesheets/default',
   'stylesheets/popupMessage',
   'fullPage/jquery.fullPage',
   'stylesheets/gearhead'
);
$page->js(
   'javascript/jquery.cookie',
   'javascript/jquery.slimscroll',
   'javascript/PopupMessage',
   'fullPage/jquery.fullPage',
   'javascript/gearhead'
);
$page->title('Gear Head');

echo $page->execute();
