<?php
require_once "php-lib/Decorator.php";

$page = new DECORATOR('dDesk.xhtml');
$page->css(
    'bootstrap-datetimepicker/css/bootstrap-datetimepicker',
    'stylesheets/jquery-ui/jquery-ui',
    'stylesheets/default'
);
$page->js(
    'javascript/jquery-ui.min',
    'bootstrap-datetimepicker/js/bootstrap-datetimepicker.min',
    'javascript/weekpicker'
);
$page->title('Developer Desk');
$page->deskHighlight = true;

echo $page->execute();
