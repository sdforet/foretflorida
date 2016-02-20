/**
 * Function-Based JavaScript Object to build custom popup messages, with/without cookies.
 *
 * Sample usage within your js page's document.ready()
 *    var message = new PopupMessage();
 *    message.init({
 *       title: 'string',       // required
 *       message: 'string',     // required
 *       button: 'string'       // required
 *       cookie: bool,          // optional, default=false
 *       cookieName: 'string',  // optional, default=popupMessage (use unique name in each multi-instance)
 *       customCss: 'string'    // optional, can add unique class name to each instance for custom css
 *    });
 *
 * Include the following files in addition to this plugin:
 *    jquery-1.11.1.min.js
 *    jquery.cookie.js
 *    popupMessage.css          // overite in your own css to customize the look of the popup
 */

function PopupMessage() {

   var
      popup = '',
      error = false,
      options = {
         title: '',
         message: '',
         button: '',
         cookie: false,
         cookieName: '',
         customCss: ''
      }
   ;

   /**
    * only public function for this object, initializes the object
    *
    * @param object three properties are required, {title:'' message:'' button:''}
    */
   this.init = function(userOptions) {
      options = $.extend(options, userOptions);

      cookie = checkCookie(options);
      if (cookie) {
         return false;
      }

      error = checkProperties(options);
      if (error) {
         return false;
      }

      // build the html, and start the event handler
      buildPopup();
      popupHandler();
   }

   /**
    * if this instance wants a cookie, check for a provided name or use default
    *
    *@return boolean
    */
    function checkCookie(options) {
      if (options.cookie === true) {
         options.cookieName = options.cookieName ? options.cookieName : 'popupMessage';
         return $.cookie(options.cookieName);
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
      $('.popupMessage').fadeToggle('fast');
      $('.popupShader').fadeToggle('slow');

      //center the popup and keep it centered when the user changes the browser size
      $('.popupMessage').center();
      window.onresize = function(event) {
         $('.popupMessage').center();
      };

      //set a cookie, dismiss the popup and destroy the elements
      $('.msgButton').click( function() {
         setPopupMessageCookie(options.cookieName);
         $('.popupMessage').fadeToggle('slow');
         $('.popupShader').fadeToggle('slow', function() {
            $('.popupMessage').empty().remove();
            $('.popupShader').empty().remove();
            options.message = '';
         });
      });
   }

   /**
    * helper function to concatenate the html for the message popup
    *
    * @return string valid html for the popup
    */
   function buildPopup() {
      var
         shdr = $("<div></div>").addClass('popupShader'),
         mTtl = $("<h3></h3>").text(options.title).addClass('msgTitle'),
         mTxt = $("<p></p>").addClass('msgText'),
         mBtn = $("<div></div>").text(options.button).addClass('msgButton'),
         mCbx = (options.cookieName) ? $('<input></input>').attr({type:'checkbox',id:'permDismiss'}) : '',
         mLbl = (options.cookieName) ? $('<label></label>').text('Hide Permanently').attr({for:'permDismiss'}) : '',
         html = $("<div></div>").append(mTtl, mTxt, mBtn, mCbx, mLbl).addClass('popupMessage ' + options.customCss),
         mesg = $.parseHTML(options.message)
      ;
      //display the popup
      $('body').append(shdr, html);
      $('.msgText').append(mesg);
   }

   /**
    * set a 1-year or 12-hour cookie
    */
   function setPopupMessageCookie(cookieName) {
      var
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
 * helper functions to use ajax to load popup content and initialize
 */
function loadRemotePopupContent(popSet) {

   $.ajax({
      url: popSet.url,
      success: function(result){
        popSet.messageHtml = result;
      }
   });

   $(document).ajaxComplete(function(){
      if (!popSet.messageHtml) {
         popSet.messageHtml = 'There was an error fetching content.';
      }
      showPopup(popSet);
      //clear old data and un-bind this ajaxComplete() so it won't interfere with other Ajax requests later
      popSet.messageHtml = '';
      $(document).off('ajaxComplete');
   });
}

function showPopup(popSet){
   var popup = new PopupMessage();
   popup.init({
      title: popSet.title,
      message: popSet.messageHtml,
      button: popSet.button,
      customCss: popSet.cssClass
   });
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