/*
 * Java Script Document Created by Sean Foret
 * for use in COP2822 Santa Fe College,
 * Internet Programming
 *
 */

// global variables to hold the game conditions
var ROUND = 0;
var PLAYER = true;
var b11 = 1; var b12 = 1; var b13 = 1;
var b21 = 1; var b22 = 1; var b23 = 1;
var b31 = 1; var b32 = 1; var b23 = 1;
var TURNCOUNT = 0;
var WINNER = "not determined";
var APPLEWINS = 0;
var WINDOWWINS = 0;
var DRAWWINS = 0;


function beginTTT()
{
   var roundcount = ROUND;
   roundcount++;
   ROUND = roundcount;
   TURNCOUNT = 0;

   document.getElementById("content").innerHTML  = (
      "<h1 id='testID'>Tic Tac Toe (PC vs Mac Version)</h1>"
      + "<p>To begin just click in the game board somewhere and Apple or Windows symbol will appear. First Player is always Apple. Once a winner is decided the computer will diplay the winner's logo.<br /> Have Fun!</p>"
      + "<table width='390' height='390' border='1' align='center'>"
      + "<tr>"
      + "<td id='r11'><a href='javascript:beginLOC(\"r11\")' ><img src='_images/fill_icon.png' width='110' height='110' align='middle'/></a></td>"
      + "<td id='r12'><a href='javascript:beginLOC(\"r12\")' ><img src='_images/fill_icon.png' width='110' height='110' align='middle'/></a></td>"
      + "<td id='r13'><a href='javascript:beginLOC(\"r13\")' ><img src='_images/fill_icon.png' width='110' height='110' align='middle'/></a></td>"
      + "</tr>"
      + "<tr>"
      + "<td id='r21'><a href='javascript:beginLOC(\"r21\")' ><img src='_images/fill_icon.png' width='110' height='110' align='middle'/></a></td>"
      + "<td id='r22'><a href='javascript:beginLOC(\"r22\")' ><img src='_images/fill_icon.png' width='110' height='110' align='middle'/></a></td>"
      + "<td id='r23'><a href='javascript:beginLOC(\"r23\")' ><img src='_images/fill_icon.png' width='110' height='110' align='middle'/></a></td>"
      + "</tr>"
      + "<tr>"
      + "<td id='r31'><a href='javascript:beginLOC(\"r31\")' ><img src='_images/fill_icon.png' width='110' height='110' align='middle'/></a></td>"
      + "<td id='r32'><a href='javascript:beginLOC(\"r32\")' ><img src='_images/fill_icon.png' width='110' height='110' align='middle'/></a></td>"
      + "<td id='r33'><a href='javascript:beginLOC(\"r33\")' ><img src='_images/fill_icon.png' width='110' height='110' align='middle'/></a></td>"
      + "</tr>"
      + "</table>"
      + "<h2 class='centerContentT'><a href='javascript:beginTTT()' >Round: " + ROUND + "</a></h2>"
      + "<p class='centerContentT'>click above for a new round, below to reset the game</p>"
      + "<h3 class='centerContentT'><a href='javascript:resetTTT()' >Reset all!</a></h3>"
      + "<h3 class='centerContentT' id='winner'>Apple Wins: "+ APPLEWINS +  " | Draw Nobody Wins: " + DRAWWINS +  " | Windows Wins: " + WINDOWWINS + "</h3>"
      + "<br />"
      + "<br />"
      + "<p id='testline'>&nbsp;</p>"
      );

}

function beginLOC(testLOC)
 {
   var location = testLOC;
   var turn = TURNCOUNT;
   turn++;
   TURNCOUNT = turn;
   for (var i=0; i<1; i++)
      {

         if(PLAYER)
            {
               document.getElementById(location).innerHTML  = ("<img src='_images/apple_icon.png' width='110' height='110' align='middle' id='MAC'/>");
               PLAYER = false;
               applePlayer(location);
               winornot();
            }
         else
            {
               document.getElementById(location).innerHTML  = ("<img src='_images/window_icon.png' width='110' height='110' align='middle' id='PC'/>");
               PLAYER = true;
               pcPlayer(location);
               winornot();
            }
      }

   if (TURNCOUNT == 9)
   {
      drawTTT();
   }

 }

function resetTTT()
 {
   PLAYER=true;
   ROUND = 0;
   TURNCOUNT = 0;
   APPLEWINS = 0;
   WINDOWWINS = 0;
   DRAWWINS = 0;
   WINNER = "not determined";
   b11 = 1; b12 = 1; b13 = 1;
   b21 = 1; b22 = 1; b23 = 1;
   b31 = 1; b32 = 1; b33 = 1;
   beginTTT();


 }

 function applePlayer (location)
 {
    //blank field = 1
    //apple field = 3
    //pc field = 2
   if (location == "r11"){b11 = 3;}
   if (location == "r12"){b12 = 3;}
   if (location == "r13"){b13 = 3;}
   if (location == "r21"){b21 = 3;}
   if (location == "r22"){b22 = 3;}
   if (location == "r23"){b23 = 3;}
   if (location == "r31"){b31 = 3;}
   if (location == "r32"){b32 = 3;}
   if (location == "r33"){b33 = 3;}
 }

 function pcPlayer (location)
 {
   if (location == "r11"){b11 = 2;}
   if (location == "r12"){b12 = 2;}
   if (location == "r13"){b13 = 2;}
   if (location == "r21"){b21 = 2;}
   if (location == "r22"){b22 = 2;}
   if (location == "r23"){b23 = 2;}
   if (location == "r31"){b31 = 2;}
   if (location == "r32"){b32 = 2;}
   if (location == "r33"){b33 = 2;}
 }

 function winornot()
 {
    if(TURNCOUNT < 3){WINNER = "Not Determined";}
    else
    {
      if((b11 == 3 && b12 == 3 && b13 == 3) || (b21 == 3 && b22 == 3 && b23 == 3) || (b31 == 3 && b32 == 3 && b33 == 3)){WINNER = "APPLE"; appleTTT();}
      if((b11 == 3 && b21 == 3 && b31 == 3) || (b12 == 3 && b22 == 3 && b32 == 3) || (b13 == 3 && b23 == 3 && b33 == 3)){WINNER = "APPLE"; appleTTT();}
      if((b11 == 3 && b22 == 3 && b33 == 3) || (b13 == 3 && b22 == 3 && b31 == 3)){WINNER = "APPLE"; appleTTT();}
      if((b11 == 2 && b12 == 2 && b13 == 2) || (b21 == 2 && b22 == 2 && b23 == 2) || (b31 == 2 && b32 == 2 && b33 == 2)){WINNER = "PC"; pcTTT();}
      if((b11 == 2 && b21 == 2 && b31 == 2) || (b12 == 2 && b22 == 2 && b32 == 2) || (b13 == 2 && b23 == 2 && b33 == 2)){WINNER = "PC"; pcTTT();}
      if((b11 == 2 && b22 == 2 && b33 == 2) || (b13 == 2 && b22 == 2 && b31 == 2)){WINNER = "PC"; pcTTT();}
    }


 }
 function appleTTT()
 {
   PLAYER=true;
   TURNCOUNT = 0;
   WINNER = "not determined";
   APPLEWINS++; var awins = APPLEWINS;
   b11 = 1; b12 = 1; b13 = 1;
   b21 = 1; b22 = 1; b23 = 1;
   b31 = 1; b32 = 1; b33 = 1;

   if (awins == 2) {
      document.getElementById("content").innerHTML  = (
         "<h1 id='testID'>Apple Fun Fact!</h1>"
         + "<p>The original Apple logo had Isaac Newton sitting under an apple tree. It was replaced by the one we are more familiar with. To differentiate the silhouette of the apple from a cherry, the “˜Bite’ was put in.</p>"
         + "<table width='390' height='390' border='0' align='center'>"
         + "<tr>"
         + "<td id='r11'><img src='_images/jobs1984.jpg' width='384' height='369' align='middle'/></td>"
         + "</tr>"
         + "</table>"
         + "<h2 class='centerContentT'><a href='javascript:beginTTT()' >Round: " + ROUND + " goes to Apple!</a></h2>"
         + "<p class='centerContentT'>click above for a new round and continue playing, below to reset the game.</p>"
         + "<h3 class='centerContentT'><a href='javascript:resetTTT()' >Reset all!</a></h3>"
         + "<h3 class='centerContentT' id='winner'>Apple Wins: "+ APPLEWINS +  " | Draw Nobody Wins: " + DRAWWINS +  " | Windows Wins: " + WINDOWWINS + "</h3>"
      );}
   else {
   document.getElementById("content").innerHTML  = (
      "<h1 id='testID'>Apple Wins!</h1>"
      + "<p>Wasn't that fun! Endless hours of playing tic tac toe! What better way for a family to reconnect.</p>"
      + "<table width='390' height='390' border='0' align='center'>"
      + "<tr>"
      + "<td id='r11'><img src='_images/apple_icon.png' width='380' height='380' align='middle'/></td>"
      + "</tr>"
      + "</table>"
      + "<h2 class='centerContentT'><a href='javascript:beginTTT()' >Round: " + ROUND + " goes to Apple!</a></h2>"
      + "<p class='centerContentT'>click above for a new round and continue playing, below to reset the game.</p>"
      + "<h3 class='centerContentT'><a href='javascript:resetTTT()' >Reset all!</a></h3>"
      + "<h3 class='centerContentT' id='winner'>Apple Wins: "+ APPLEWINS +  " | Draw Nobody Wins: " + DRAWWINS +  " | Windows Wins: " + WINDOWWINS + "</h3>"
      );}

 }

 function pcTTT()
 {
   PLAYER=true;
   TURNCOUNT = 0;
   WINNER = "not determined";
   WINDOWWINS++; var wwins = WINDOWWINS;
   b11 = 1; b12 = 1; b13 = 1;
   b21 = 1; b22 = 1; b23 = 1;
   b31 = 1; b32 = 1; b33 = 1;

   if (wwins == 2){
      document.getElementById("content").innerHTML  = (
         "<h1 id='testID'>Windows Fun Fact</h1>"
         + "<p>Bill Gates wrote a class scheduling program for his school. He tweaked the program’s code so that he was placed in classes with mostly female students.</p>"
         + "<table width='390' height='390' border='0' align='center'>"
         + "<tr>"
         + "<td id='r11'><img src='_images/Bill-gates.jpg' width='450' height='314' align='middle'/></td>"
         + "</tr>"
         + "</table>"
         + "<h2 class='centerContentT'><a href='javascript:beginTTT()' >Round: " + ROUND + " goes to Windows!</a></h2>"
         + "<p class='centerContentT'>click above for a new round and continue playing, below to reset the game.</p>"
         + "<h3 class='centerContentT'><a href='javascript:resetTTT()' >Reset all!</a></h3>"
         + "<h3 class='centerContentT' id='winner'>Apple Wins: "+ APPLEWINS +  " | Draw Nobody Wins: " + DRAWWINS +  " | Windows Wins: " + WINDOWWINS + "</h3>"
         );}

   else {
      document.getElementById("content").innerHTML  = (
         "<h1 id='testID'>Windows Wins!</h1>"
         + "<p>Wasn't that fun! Endless hours of playing tic tac toe! What better way for a family to reconnect.</p>"
         + "<table width='390' height='390' border='0' align='center'>"
         + "<tr>"
         + "<td id='r11'><img src='_images/window_icon.png' width='380' height='380' align='middle'/></td>"
         + "</tr>"
         + "</table>"
         + "<h2 class='centerContentT'><a href='javascript:beginTTT()' >Round: " + ROUND + " goes to Windows!</a></h2>"
         + "<p class='centerContentT'>click above for a new round and continue playing, below to reset the game.</p>"
         + "<h3 class='centerContentT'><a href='javascript:resetTTT()' >Reset all!</a></h3>"
         + "<h3 class='centerContentT' id='winner'>Apple Wins: "+ APPLEWINS +  " | Draw Nobody Wins: " + DRAWWINS +  " | Windows Wins: " + WINDOWWINS + "</h3>"
         );}

 }

 function drawTTT()
 {
   PLAYER=true;
   TURNCOUNT = 0;
   WINNER = "not determined";
   DRAWWINS++; var dwins = DRAWWINS;
   b11 = 1; b12 = 1; b13 = 1;
   b21 = 1; b22 = 1; b23 = 1;
   b31 = 1; b32 = 1; b33 = 1;

   if (dwins == 2){
      document.getElementById("content").innerHTML  = (
         "<h1 id='testID'>This round is a Draw!</h1>"
         + "<p>This is a picture of a NYPD police dog facing off against an NYPD horse over some donuts.</p>"
         + "<table width='390' height='390' border='0' align='center'>"
         + "<tr>"
         + "<td id='r11'><img src='_images/standoff.jpg' width='450' height='337' align='middle'/></td>"
         + "</tr>"
         + "</table>"
         + "<h2 class='centerContentT'><a href='javascript:beginTTT()' >Round: " + ROUND + " is a draw!</a></h2>"
         + "<p class='centerContentT'>click above for a new round and continue playing, below to reset the game.</p>"
         + "<h3 class='centerContentT'><a href='javascript:resetTTT()' >Reset all!</a></h3>"
         + "<h3 class='centerContentT' id='winner'>Apple Wins: "+ APPLEWINS +  " | Draw Nobody Wins: " + DRAWWINS +  " | Windows Wins: " + WINDOWWINS + "</h3>"
         );}

   else {
      document.getElementById("content").innerHTML  = (
         "<h1 id='testID'>This round was a Draw!</h1>"
         + "<p>Wasn't that fun! Endless hours of playing tic tac toe! What better way for a family to reconnect.</p>"
         + "<table width='390' height='390' border='0' align='center'>"
         + "<tr>"
         + "<td id='r11'><img src='_images/fill_icon.png' width='380' height='380' align='middle'/></td>"
         + "</tr>"
         + "</table>"
         + "<h2 class='centerContentT'><a href='javascript:beginTTT()' >Round: " + ROUND + " is a draw!</a></h2>"
         + "<p class='centerContentT'>click above for a new round and continue playing, below to reset the game.</p>"
         + "<h3 class='centerContentT'><a href='javascript:resetTTT()' >Reset all!</a></h3>"
         + "<h3 class='centerContentT' id='winner'>Apple Wins: "+ APPLEWINS +  " | Draw Nobody Wins: " + DRAWWINS +  " | Windows Wins: " + WINDOWWINS + "</h3>"
         );}

 }
