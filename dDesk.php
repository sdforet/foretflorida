<?php
require_once "php-lib/Decorator.php";

$page = new DECORATOR('dDesk.xhtml');
$page->css(
    'stylesheets/default',
    'bootstrap-datetimepicker/css/bootstrap-datetimepicker'
);
$page->js(
    'bootstrap-datetimepicker/js/bootstrap-datetimepicker.min',
    'bootstrap-datetimepicker/js/bootstrap-weekpicker'
);
$page->title('Developer Desk');
$page->deskHighlight = true;

echo $page->execute();
