/**
 * Simple plugin to allow custom popup messages to be used with/without a 12hr cookie.
 *
 * Sample usage within your js page's document.ready()
 *    var message = new PopupMessage();
 *    message.init({
 *       cookie: bool, (uses a 12hr by default)
 *       cookieName: 'string' (if you are using more than one, give each a unique name)
 *       title: 'string',
 *       message: 'string',
 *       button: 'string'
 *    });
 *
 * Requires the following:
 *    jquery-1.11.1.min.js
 *    jquery.cookie.js
 *    popupMessage.css
 */

function PopupMessage() {

   var
      title = '',
      message = '',
      button = '',
      popup = '',
      cookie = false,
      cookieName = '',
      error = false
   ;

   /**
    * only public function for this object, initializes the object
    *
    * @param object three properties are required, {title:'' message:'' button:''}
    */
   this.init = function(options) {

      cookie = checkCookie(options);
      if (cookie) {
         return false;
      }

      error = checkProperties(options);
      if (error) {
         return false;
      }

      // set the required properties for popupMessage
      title = options.title;
      message = options.message;
      button = options.button;

      // build the html, and start the event handler
      popup = buildPopup();
      popupHandler();
   }

   /**
    * if this instance wants a cookie, check for the provided/default name
    *
    *@return boolean
    */
    function checkCookie(options) {
      if (options.cookie === true) {
         cookieName = options.cookieName ? options.cookieName : 'popupMessage';
         return $.cookie(cookieName);
      }
      return false;
    }

   /**
    * check the basic required properties
    *
    *@return boolean
    */
   function checkProperties(options) {
      if (!options.title || !options.message || !options.button) {
         var errorMessage =
            "Missing properties in your instance of PopupMessage." +
            "Please consult popupMessage.js for required properties"
         ;
         return true;
      }
      return false;
    }

   /**
    * set event handlers for the popup message
    */
   function popupHandler() {
      //display the popup
      $('body').append(popup);
      $('.popupMessage').fadeToggle('fast');
      $('.popupShader').fadeToggle('slow');
      //center the popup and keep it centered when the user changes the browser size
      $('.popupMessage').center();
      window.onresize = function(event) {
         $('.popupMessage').center();
      };
      //dismiss the popup and set a cookie
      $('.msgButton').click( function() {
         $('.popupMessage').fadeToggle('slow');
         $('.popupShader').fadeToggle('slow');
         setPopupMessageCookie(cookieName);
      });
   }

   /**
    * helper function to concatenate the html for the message popup
    *
    * @return string valid html for the popup
    */
   function buildPopup() {
      var h = makeTag('div', {class: 'popupShader'});
      h += '<div class="popupMessage">';
      h += makeTag('h3', title, {class: 'msgTitle'});
      h += makeTag('p', message, {class: 'msgText'});
      h += makeTag('div', button, {class: 'msgButton'});
      h += makeTag('input', {type: 'checkbox', id: 'permDismiss'});
      h += makeTag('label', 'Permanently Dismiss', {for: 'permDismiss'})
      h += '</div>';
      return h;
   }

   /**
    * helper function to build individual html tags with attributes and text
    *
    * @param string valid html tag
    * @param string text to be included between tags
    * @param object attributes with values to be included in the html tag
    * @return string valid html element
    */
   function makeTag(tag, html, attrs) {
      if (typeof(html) != 'string') {
         attrs = html;
         html = null;
      }
      var h = '<' + tag;
      for (attr in attrs) {
         if(attrs[attr] === false) continue;
         h += ' ' + attr + '="' + attrs[attr] + '"';
      }
      return h += html ? ">" + html + "</" + tag + ">" : "/>";
   }

   /**
    * set a permanent or 12hr cookie
    */
   function setPopupMessageCookie(cookieName) {
      var
         cookieName = cookieName+'=',
         now = new Date(),
         time = now.getTime()
      ;
      if ($('#permDismiss').is(':checked')) {
         // one year
         time += 3600 * 1000 * 24 * 365 * 1;
      }
      else {
         //12 hours
         time += 3600 * 1000 * 12;
      }
      now.setTime(time);
      document.cookie = cookieName + '=' + true + '; expires=' + now.toUTCString() + '; path=/';
   }
}

/**
 * helper function to keep whatever centered in the browser window
 */
jQuery.fn.center = function () {
   this.css("position","absolute");
   this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
   this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
   return this;
}

//test code
$(document).ready(function() {
   popup = new PopupMessage();
   popup.init({
      cookie: true,
      cookieName: 'fflPopupMessage',
      title: 'Heed my Warning',
      message: 'Testing the execution of a notification system<br />using the custom made plugin "PopupMessage"! ',
      button: 'Pop Off'
   });
});