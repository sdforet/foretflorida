<?php
require_once "php-lib/Decorator.php";

$page = new DECORATOR('interests/cody.xhtml');
$page->css(
   'stylesheets/jquery.jscrollpane',
   'stylesheets/default',
   'stylesheets/cody'
);
$page->js(
   'javascript/jquery.cookie',
   'javascript/jquery.mousewheel'
);
$page->title('Cody Car');
$page->setVarVal('intHL', true);

echo $page->execute();
