<?php
require_once "php-lib/DECTAL.php";

class DECORATOR extends DECTAL {

   public function __construct($template = NULL) {
      parent::__construct($template);
      $this->setSubTemplateRepository('templates/');
   }

   protected function init() {
      parent::init();
      $this->setTemplate("base.xhtml");
      $this->cleanUpCache();
   }
}
?>