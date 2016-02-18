<?php
require_once "php-lib/Decorator.php";

$page = new DECORATOR('dDesk.xhtml');
$page->css(
    'bootstrap-datetimepicker/css/bootstrap-datetimepicker',
    'stylesheets/jquery-ui/jquery-ui',
    'stylesheets/default',
    'stylesheets/popupMessage'
);
$page->js(
    'javascript/jquery-ui.min',
    'javascript/jquery.cookie',
    'bootstrap-datetimepicker/js/bootstrap-datetimepicker.min',
    'javascript/PopupMessage'
);
$page->title('Developer Desk');
$page->deskHighlight = true;

$codeSampleHtml = <<<HTML
   <div class="form-group">
      <div class='input-group date' id='datetimepicker1'>
          <input type='text' class="form-control" />
          <span class="input-group-addon">
              <span class="glyphicon glyphicon-calendar"></span>
          </span>
      </div>
   </div>
HTML;



$page->codeSampleHtml = $codeSampleHtml;

echo $page->execute();
