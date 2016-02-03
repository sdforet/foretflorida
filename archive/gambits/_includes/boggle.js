/*
 * Java Script Document Created by Sean Foret
 * for use in COP2822 Santa Fe College,
 * Internet Programming
 *
 */
var word = new Array("");
var list_y = new Array ("");
var list_w = new Array ("");
var word_count = 0;
var al = word.length;


function beginBOG() {
   document.getElementById("content").innerHTML = (
      "<h3>Boggle by Hal</h3>"
      +"<p>&nbsp;</p>"
      +"<p>Instructions go Here</p>"
      +"<p>&nbsp;</p>"
      +"<table align='center' cellpadding='5px' bgcolor='#333333' width='65%'>"
      +"<tr><td id='timer_clock' colspan='2' text-align='left' onClick='CreateTimer(\"timer_clock\", 5)'>Begin Timer</td></tr>"
      +"<tr><td id='title' colspan='2'>Boggle.HAL</td></tr>"
      +"<tr><td id='letters'>Boggle Letters</td><td id='ng' onClick='ng()'>New Game</td></tr>"
      +"<tr id='input_row'><td><form><p><label>Your word:<br /></label><input type='text' id='guess_box' size='30' value=''/></p></form></td>"
         +"<td><form><p><label>Your word:<br /></label><input type='button' onclick='sb()' value='Enter Word'/></p></form></td></tr>"
      +"<tr><td id='lc'>list correct</td><td id='lw'>list wrong</td></tr>"
      +"<tr><td id='bottom' colspan='2'>bottom holder</td></tr>"
      +"</table>"
      );
}

// function written by E Drake for the exercise Boggle
function words(x)
{
   switch (x)
   {
   case 1:
      var word = new Array("balte","table","hat","tab","belt","lab","eat","tea","ate","tale","bale","let","bet","teal","late","beat","bat");
      break;
   case 2:
      var word = new Array("atwre","water","wet","wear","tear","war","ret","rate","eat","ate","tea","awe","raw","rat","wart","art","tar");
      break;
   case 3:
      var word = new Array("dclaen","can","cane","and","clan","lane","lean","lend","land","den","dean","dance","lance","clean","deal","ale","dale","candle","clad");
      break;
   case 4:
      var word = new Array("aepinlar","air","airplane","plane","plan","lane","lean","pane","ear","near","nap","nape","lair","pen","pan","ape","leap","ale","peal","nap","rap","par", "pare", "pale", "are", "rail", "ail", "pail", "nail", "pair", "ran", "pin", "pine", "line", "nip", "rip", "ripe", "lip", "earn", "learn", "ire");
      break;
   case 5:
      var word = new Array("redykboa","keyboard","key","board","bored","bore","bark","dark","dork","oar","boar","ark","dare","bare","are","red","rod","road","bode","rode","ode","bread", "read", "bead", "bred", "break", "drey", "day", "boy", "broke", "rake", "bake", "ear", "dear", "bear", "dye", "dyer", "doer", "oak", "boa", "doe", "okay","dab", "bade", "ade", "drake", "bard", "yard", "year", "beak", "beard", "bad", "bed", "bay");
      break;
   }
   return word;
}


// code for the countdown timer CreateTimer function accepts id of the timer element and the number of seconds to count down from
var interval;
var Timer;
var TotalSeconds;
function CreateTimer(TimerID, Time) {
   Timer = document.getElementById(TimerID);
   TotalSeconds = Time;
   UpdateTimer()
   interval = window.setTimeout("Tick()", 1000);
   }
function Tick()  {
      if (TotalSeconds <= 0) {
         game_over();
         //alert("Time's up!");
         return;
      }
      TotalSeconds -= 1;
      UpdateTimer()
      interval = window.setTimeout("Tick()", 1000);
   }
function UpdateTimer() {
   Timer.innerHTML = ("<p id='timer_clock'>Countdown: " + TotalSeconds + "</p>");
   }

// ng is new game
function ng() {
   beginBOG();
   var ir = document.getElementById("input_row");
   ir.style.visibility = 'visible';
   window.clearTimeout(interval);
   var max = 5; var min = 1;
   var word_number = Math.floor(Math.random()*(max - min + 1) + min);
   word = words(word_number);
   document.getElementById("letters").innerHTML = word[0];
   word_count = 0;
   CreateTimer("timer_clock", 59);
   document.getElementById("guess_box").focus();
}

// sb is submit button this is fired by the button on the panel and by the event listeners
function sb() {
   var boggle_word = word;
   var guess = document.getElementById("guess_box").value;
   var flag = 1;

   for (var i=1; i<boggle_word.length; i++)
      {
         if (guess == boggle_word[i])
            {  document.getElementById("lc").innerHTML = document.getElementById("lc").innerHTML + "<br />" + guess;
               flag = 0;
               word_count++;
               document.getElementById("guess_box").value = "";
            }
      }
   if (flag == 1)
         {
            document.getElementById("lw").innerHTML = document.getElementById("lw").innerHTML + "<br />" + guess;
            document.getElementById("guess_box").value = "";
            flag = 1;
            word_count--;
         }
   document.getElementById("guess_box").focus();

}

function game_over()
{
   document.getElementById("timer_clock").innerHTML = ("");
   var ir = document.getElementById("input_row");
   ir.style.visibility = 'hidden';
   document.getElementById("bottom").innerHTML = ("<p>Your total word count is " +word_count+ "<br /></p>")
}
/*
//tried to get this to work, the key events did fire the function but also fired their respective values into the guess box
function keyDown(evt) {
   switch (evt.keyCode)
   {
   case 96:  /* numberpad 0 was pressed
      {
         sb();
         document.getElementById("guess_box").value = "";
      }
   break;

   case 13:  /* enter was pressed
      {
         sb();
         document.getElementById("guess_box").value = "";
      }
   break;
   }
}

window.addEventListener('keydown',keyDown,true);
*/