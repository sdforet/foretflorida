<?php
/**
 * The purpose of this file is to define a class which will utilize PHPTAL and DECTAL to provide
 * a parent template and a subtemplate as an insert point for pages
 */
require_once "php-lib/DECTAL.php";

class DECORATOR extends DECTAL
{

    public function __construct($template = NULL)
    {
        parent::__construct($template);
        $this->setSubTemplateRepository('templates/');
    }

    /**
     * this will create the parent template specified by setTemplate()
     */
    protected function init()
    {
        parent::init();
        $this->setTemplate("base.xhtml");
        // comment out afer final deployment (this method clears TAL cache)
        $this->cleanUpCache();
    }
}
