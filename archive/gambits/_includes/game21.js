/*
 * Java Script Document Created by Sean Foret
 * for use in COP2822 Santa Fe College,
 * Internet Programming
 *
 */
function begin21() {
    var beginvalue = 5;

      document.getElementById("content").innerHTML = (
   "<h1>Game of 21</h1><br />"
   + "<br />"
   + "<table cellpadding='2' width='50%' height='150px' align='center' border='1'>"
   + "<tr><td align='center' id='player'>" + beginvalue + "</td>"
   + "<td align='center' id='winner'><p>Winner Is?</p></td>"
   + "<td align='center' id='house'>" + beginvalue + "</td>"
   + "</table>"
   + "<br />"
   + "<br />"
   + "<h3 class='centerContentH'><a href='javascript:begin21()' >Deal</a></h3>"
   + "<h3 class='centerContentH'><a href='javascript:hit_me()' >Hit Me</a></h3>"
   + "<h3 class='centerContentH'><a href='javascript:begin21()' >Stand</a></h3>"
   + "<p id='testvar'>This is:</p>"
   );
 }

function hit_me() {
   var player_hand = document.getElementById("player").innerHTML;
   var p_hand = parseInt(player_hand, 10);
   var max = 10;
   var min = 1;
   var card = Math.floor(Math.random()*(max - min + 1) + min);
   var player_card = (p_hand + card);
   var total = player_card.toString();
   document.getElementById("testvar").innerHTML = ("<p id='testvar'>This is: " + p_hand + " , " + card +  " , " + total +" </p>");
   if ( player_card <=21 )
      document.getElementById("player").innerHTML = ("<p>Your hand</p>" + "<h2 id='redText' name='playernum'>" + total + "</h2>");
   else
   {
         document.getElementById("player").innerHTML = ("<p>Your hand</p>" + "<h2 id='redText' name='playernum'>BUST</h2>");
         document.getElementById("winner").innerHTML = ("<h2 id='greenText'>HOUSE</h2>");
   }
 }

function stand()
 {
      var max = 10;
      var min = 1;
      var card = Math.floor(Math.random()*(max - min + 1) + min);

 }