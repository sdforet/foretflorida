<?php
require_once "php-lib/Decorator.php";

$page = new DECORATOR('interests/audiophile.xhtml');
$page->css(
   'stylesheets/default',
   'stylesheets/popupMessage',
   'stylesheets/audiophile'
);
$page->js(
   'javascript/jquery.cookie',
   'javascript/jquery.slimscroll',
   'javascript/PopupMessage'
);
$page->title('Audiophile');
$page->setVarVal('intHL', true);

echo $page->execute();
