<?php
require_once "../php-lib/Decorator.php";

$page = new DECORATOR('interests/gearhead.xhtml');
$page->css(
   'stylesheets/default',
   'stylesheets/popupMessage'
);
$page->js(
   'javascript/jquery.cookie',
   'javascript/PopupMessage'
);
$page->title('Gear Head');

echo $page->execute();
