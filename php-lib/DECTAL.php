<?php
/**
 * The purpose of this file is to define the DECTAL class, which extends
 * from PHPTAL and serves as a frame for all GHP page templates
 */
require_once "php-lib/PHPTAL.php";
 
abstract class DECTAL extends PHPTAL {
   /**
    * @var PHPTAL template object for use within the decorator
    */
   private $_sub_template = NULL;

   /**
    * @var string the template path
    */
   private $_sub_template_repository = NULL;

   /**
    * @var array stylesheet files
    */
   private $css = array();

   /**
    * @var array javascript files
    */
   private $js = array();

   /**
    * @var array meta tags
    */
   private $meta = array();

   /**
    * @var string page title
    */
   private $title = '';

   /**
    * @var string main content
    */
   protected $body;

   /**
    * @var string id for body tag
    */
   private $body_id = '';

   /**
    * @var - string path to the jquery javascript file
    */
   private $jquery_path = '../assets/javascript/jquery-2.2.0.min.js';

   /**
    * DECTAL Constructor to set up template and inner template repos
    *
    * @param string|NULL If not NULL, this sets the inner template file
    *   to the given filename.  The template repo is set to the  base template repo
    */
   public function __construct($template = NULL) {
      parent::__construct();
      $this->setTemplateRepository('templates/');

      if ($template <> NULL) {
         $this->_sub_template = new PHPTAL($template);
      }

   }

   /**
    * Set the inner template after the GHPTAL object has been constructed
    * @param string template file
    */
   public function setSubTemplate($template) {
      $this->_sub_template = new PHPTAL($template);
      TAL::set_sandbox_repo($this->_sub_template);
   }

   /**
    * Set the repository where the inner template is located
    * @param string|array repository path
    */
   public function setSubTemplateRepository($path) {
      $this->_sub_template_repository = $path;
   }

   /**
    * Magical set extended to be used for the inner template rather than $this.
    *
    * Inner template must be set by GHPTAL constructor.
    * You cannot affect the tal options of the GHPTAL object itself, only the inner template
    * Usage: $this->key = $val -- be consistent
    * @param string
    * @param mixed
    * @throws CannotCreateTemplateException if no inner template is set
    */
   public function __set($key, $val) {
      if (!isset($this->_sub_template)) {
         throw new CannotCreateTemplateException ('No sub template found.  Magical set can only be applied to inner template');
      }
      $this->_sub_template->set($key, $val);
   }

   /**
    * @see __set
    * @uses __set
    * Usage: $this->set('key', $val) -- be consistent
    */
   public function set($key, $val) {
      $this->__set($key, $val);
   }

   /**
    * Set all default data to prepare for execution.
    * This is called automatically when the template is executed
    */
   protected function init() {

      if ($this->_sub_template <> NULL && $this->_sub_template_repository <> NULL) {
         $this->_sub_template->setTemplateRepository((array) $this->_sub_template_repository);
      }

      $this->css = array_unique($this->css);
      $this->js = array_unique($this->js);
   }

   /**
    * Initialize default data and execute the template.
    *
    * This automatically sets object variables not beginning with an
    * underscore as part of the TAL.  This step is necessary or else
    * PHPTAL will not recognize the class variables during its execution
    * If the inner template is set, it is executed as well and its returned HTML
    * composes the body of this template.  Otherwise, the HTML provided by
    * $this->html() does the job.
    *
    * @throws CannotCreateTemplateException if no HTML or inner template is set
    * @return html all template HTML
    */
   public function execute() {
      $this->init();

      if (isset($this->_sub_template)) {
         $this->body = $this->_sub_template->execute();
      }
      else if (empty($this->body)) {
         throw new CannotCreateTemplateException(
            'Error in ' . __METHOD__
            . "\nNo inner template found.  Blank page.
            Please set an inner template file with the constructor or setTemplate() method"
         );
      }
      foreach (get_object_vars($this) as $key => $val) {
         if (strpos($key, '_') !== 0) {
            parent::set($key, $val);
         }
      }

      return parent::execute();
   }

   /**
    * Function that executes and echos inherited from PHPTAL
    */
   public function echoExecute() {
      echo $this->execute();
      return $this;
   }

   /**
    * Include a css (stylesheet) file or files in the header of the page.
    *
    * This will append the file type .css to the end of the
    * filename automagically.  You can include it yourself as
    * well if you wish.
    * This adds another file each time it is called.  Files are not removed.
    *
    * @param string|array css file or files to include
    */
   public function css() {
      foreach (func_get_args() as $file) {
         if (is_array($file)) {
            foreach ($file as $f) {
               $this->css($f);
            }
         }
         else {
            if (substr($file, -4) !== '.css') {
               $file = "$file.css";
            }
         }
      }
   }

   /**
    * Include a js (javascript) file or files in the header of the page.
    *
    * This will append the file type .js to the end of the
    * filename automagically.  You can include it yourself as
    * well if you wish.
    * This adds another file each time it is called.  Files are not removed.
    *
    * @param string|array js file or files to include
    */
   public function js() {
      foreach (func_get_args() as $file) {
         if (is_array($file)) {
            foreach ($file as $f) {
               $this->js($f);
            }
         }
         else {
            if (substr($file, -3) !== '.js') {
               $file = "$file.js";
            }
         }
      }
   }

   /**
    * set the path to the jquery javascript file
    *
    * @param string
    */
   public function set_jquery_path($path) {
      $this->jquery_path = $path;
   }

   /**
    * Set meta tag to be used in the page header.
    *
    * This adds another meta tag to the header each time it is called.
    *
    * @param string tag name
    * @param string tag content
    */
   public function meta($name, $content) {
      $this->meta[] = array(
         'name' => $name
         , 'content' => $content
      );
   }

   /**
    * Set a description meta tag
    * @uses meta
    * @param string
    */
   public function description($content) {
      $content = preg_replace('/\s+/', ' ', trim($content));
      $this->meta('description', $content);
   }

   /**
    * Set a keywords meta tag
    * @uses meta
    * @param string
    */
   public function keywords($content) {
      $content = preg_replace('/\s+/', ' ', trim($content));
      $this->meta('keywords', $content);
   }

   /**
    * Set a robots meta tag
    */
   public function robots($content) {
      $this->meta('robots', $content);
   }

   /**
    * Set title of the page
    * @param string
    * @param bool - whether or not to format the given title using hierarchy.php's makePageTitle()
    */
   public function title($title, $format_title = TRUE) {
      $title = preg_replace('/\s+/', ' ', trim($title));
      $this->title = $title;
      $this->format_title = $format_title;
   }

   /**
    * Set a post filter for the inner template
    */
   public function setSubPostFilter($filter) {
      $this->_sub_template->setPostFilter($filter);
   }

}

/**
 * Exception for forgetting to set an inner template or body HTML
 */
class CannotCreateTemplateException extends Exception {
   public function __construct($message) {
      parent::__construct('Unable to execute template due to missing information: ' . $message);
   }
}
?>
