var
   popUpSettings = {
      title:'Developer\'s Tools',
      message: '',
      button: 'Dismiss',
      customCss: 'resumeTools',
      url: '',
   }
;

$(document).ready(function() {

   $(".toolLoad").click(function(){
      popUpSettings.url = 'templates/resumeTools/' + $(this).attr('id') + '.html';
      loadRemotePopupContent(popUpSettings);
   });

});