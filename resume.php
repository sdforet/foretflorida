<?php
require_once "php-lib/Decorator.php";

$page = new DECORATOR('resume.xhtml');
$page->css(
   'stylesheets/default',
   'prettify/prettify',
   'stylesheets/popupMessage',
   'stylesheets/resume'

);
$page->js(
   'javascript/jquery.cookie',
   'prettify/prettify',
   'javascript/PopupMessage',
   'javascript/resumeTools'
);
$page->title('Resume: Sean Foret');
$page->setVarVal('resHL', true);

echo $page->execute();
