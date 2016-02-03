/*
 * Java Script Document Created by Sean Foret
 * for use in COP2822 Santa Fe College,
 * Internet Programming
 *
 */
var navLinks = "<a href='index.html'>Gambits Home</a><br />"
      + "<a href='play_games.html' class='link'>Play Games</a><br />"
      + "<a href='../../index.php' class='link'>Back to Main</a><br />"
;
function navigationFill()
{
   document.getElementById("nav").innerHTML = (navLinks);
}

function footerFill()
{
   document.getElementById("footer").innerHTML = (
   "<p>©2013 Santa Fe College<br />" + "Sean D Foret<br />" + "Internet Programming</p>");
}

function encodeIt()
{
   document.getElementById("message").innerHTML  = ("<h2></h2>");



   var msg = prompt("Enter your Message");
   var newmsg = " ";
   var upCaseCode = 150;
   var newcode = 0;
   var lowCaseCode = 219;
   var specialCode = 3;



   for (var j=0; j<msg.length; j++)
   {
//check for uppercase
      if ((msg.charCodeAt (j)>=65) && (msg.charCodeAt (j)<=90))
      {
         newcode = (upCaseCode - msg.charCodeAt(j));
      }
//check for lower case
      else
         if ((msg.charCodeAt(j)>=97) && (msg.charCodeAt(j)<=122))
         {
            newcode = (lowCaseCode - msg.charCodeAt(j));
         }
//check for numbers and special case
         else
            if ((msg.charCodeAt(j) >90) && (msg.charCodeAt(j) <97) || (msg.charCodeAt(j) < 65))
            {
               newcode = (msg.charCodeAt(j) + specialCode);
            }
// add each new encoded character to the message
      newmsg = newmsg + " " + String.fromCharCode(newcode);

   } //end for loop

//display the encoded message
   document.getElementById("secret").innerHTML = ("<p>encoded message</p>" + "<h2 id='redText'>" + newmsg + "</h2>");

//decide whether or not to display the original message
   var choice = "n";
   var choice = prompt("Do you want to display the original message?")
   if ((choice.charAt(0) == 'y') || (choice.charAt(0) == 'Y'))
   {
      document.getElementById("message").innerHTML = ("<p>original message</p>" + "<h2 id='greenText'>" + msg + "</h2>");
   }
   else
   {
      document.getElementById("message").innerHTML = ("<h2 id='greenText'>Original Message Excluded by User</h2>");
   }

}


function superEncodeIt()
{
   document.getElementById("message2").innerHTML  = ("<h2></h2>");



   var msg = prompt("Enter your Message");
   var newmsg = " ";
   var upCaseCode = 150;
   var newcode = 0;
   var lowCaseCode = 219;
   var specialCode = 3;
   var max = 15;
   var min = 1;
   var decryptKey = Math.floor(Math.random()*(max - min + 1) + min);


   for (var j=0; j<msg.length; j++)
   {
//check for uppercase
      if ((msg.charCodeAt (j)>=65) && (msg.charCodeAt (j)<=90))
      {
         newcode = (upCaseCode - decryptKey - msg.charCodeAt(j));
         if (newcode < 65)
            {
               newcode = newcode + 15;
            }
         if (newcode > 90)
            {
               newcode = newcode - 15;
            }
      }
//check for lower case
      else
         if ((msg.charCodeAt(j)>=97) && (msg.charCodeAt(j)<=122))
         {
            newcode = (lowCaseCode - decryptKey - msg.charCodeAt(j));
            if (newcode < 97)
               {
                  newcode = newcode + 15;
               }
            if (newcode > 122)
               {
                  newcode = newcode - 15;
               }
         }
//check for numbers and special case
         else
            if ((msg.charCodeAt(j) >90) && (msg.charCodeAt(j) <97) || (msg.charCodeAt(j) < 65))
            {
               newcode = (msg.charCodeAt(j) + specialCode);
               if (newcode < 90)
                  {
                     newcode = newcode + 15;
                  }
               if (newcode > 97)
                  {
                     newcode = newcode - 15;
                  }
            }
// add each new encoded character to the message
      newmsg = newmsg + " " + String.fromCharCode(newcode);

   } //end for loop

//display the encoded message
   document.getElementById("secret2").innerHTML = ("<p>encoded message</p>" + "<h2 id='redText'>" + newmsg + "</h2>");

//decide whether or not to display the original message
   var choice = "n";
   var choice2 = "n";
   var choice = prompt("Do you want to display the original message?")
   var choice2 = prompt("Do you want to display the decryption key?")
   if ((choice.charAt(0) == 'y') || (choice.charAt(0) == 'Y'))
      {
         document.getElementById("message2").innerHTML = ("<p>original message</p>" + "<h2 id='greenText'>" + msg + "</h2>");
      }
   else
      {
         document.getElementById("message2").innerHTML = ("<h2 id='greenText'>Original Message Excluded by User</h2>");
      }
      if ((choice2.charAt(0) == 'y') || (choice2.charAt(0) == 'Y'))
         {
            document.getElementById("decryptionKey").innerHTML = ("<p>decryption key</p>" + "<h2 id='yellowText'>" + decryptKey + "</h2>");
         }
      else
         {
            document.getElementById("decryptionKey").innerHTML = ("<h2 id='yellowText'>Decrytion Key Witheld by User</h2>");
         }

}

