<?php
/**
 * for now, redirect this page to resume.php
 */
   if (!empty($_SERVER['HTTPS']) && ('on' == $_SERVER['HTTPS'])) {
      $uri = 'https://';
   } else {
      $uri = 'http://';
   }
   $uri .= $_SERVER['HTTP_HOST'];
   header('Location: '.$uri.'/foretflorida/resume.php');
   exit;
/**
 * require_once "php-lib/Decorator.php";
 * 
 * $page = new DECORATOR('index.xhtml');
 * $page->css('stylesheets/default');
 * $page->title('FFL');
 * 
 * echo $page->execute();
 */   
