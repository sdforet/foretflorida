// JavaScript Document

var panelWidth = 0;
var startPanel = 1;



$(document).ready(function() {
   /* progressive enhancement */	
   $('.sp .tabs').css('display','block');	
   $('.sp .panel_container .panel').css({'position':'absolute', 'height':'508px'});	
   $('.sp .panel_container .panels').css({'position':'absolute', 'top':'0px'});		
   window.panelWidth = $('.sp').width();	
	
	
   /* Position the panels */	
   $('.panel_container .panel').each(function(index){
$(this).css({'width':window.panelWidth+'px','left':(index*window.panelWidth)});		
   $('.sp .panels').css('width',(index+1)*window.panelWidth+'px');
	});
	
	   
   /* Add click events to tabs */	
   $('.sp .tabs span').each(function(){
$(this).on('click', function(){
changePanels( $(this).index() );
close_game();
   });
});

   /* Add click events to links */	
   $('.footer .footer_link span ').each(function(){
$(this).on('click', function(){
changePanels( $(this).index() );
close_game();
   });
});


/* Trigger the starting panel */	
$('.sp .tabs span:nth-child('+window.startPanel+')').trigger('click');	
});

function changePanels(newIndex){		
var newPanelPosition = ( window.panelWidth * newIndex ) * -1;	
var newPanelHeight = $('.sp .panel:nth-child('+(newIndex+1)+')').find('.panel_content').height() + 15;
$('.sp .tabs span').removeClass('selected');	
$('.sp .tabs span:nth-child('+(newIndex+1)+')').addClass('selected');	
$('.sp .panels').animate({left:newPanelPosition},1000);	
$('.sp .panel_container').animate({height:newPanelHeight},1000);
}

$(document).ready(function(){
	$("a.group1").colorbox({rel:'group1'});
});