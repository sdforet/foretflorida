/*
 * Java Script Document Created by Sean Foret
 * for use in COP2822 Santa Fe College, 
 * Internet Programming
 * 
 */
 var WRONG_G = 0;
 var LETTER_G = "";
 var WORD = "";
 var USED_L = "Used Letters:&nbsp";
 var CORRECT_G = 0;

 
 function beginHANG ()
 {
	open_game();
	TURNCOUNT = 0;
	document.getElementById("game_board").style.visibility="visible";	
	document.getElementById("game_board").innerHTML  = (
		"<h1 id='testID'>StarGate (HangMan)</h1>"
		+ "<p class='centerContentT'>To begin, Click on the 'Start the Gate' link. Then click the Guess a letter link to begin gameplay. The goal is to keep the gate open (blue center) until help arrives, With each incorrect guess one of the chevrons will turn off, lose too many of them and the gate will shut down and the earth  will be lost.<br /> You have nine chances to get the word correct. Have Fun!</p>"
//table for picture and in game nav and info
		+ "<table id='SGtable'>"
			+ "<tr><td id='hang_pic' rowspan='4' ><img src='_images/gate/gate1.png' width='390' height='390' align='middle'/></td></tr>"
			+ "<tr><td><p class='centerContentSG' ><a href='javascript:generate_word()' ><span id='SGmenu'>Start the Gate!</span></a></p></td></tr>"
			+ "<tr><td id='start_link'><p class='centerContentSG'><a href='javascript:guess_letter()' ><span id='SGmenu'>Guess a Letter</span></a></p></td></tr>"
			+ "<tr><td id='hint_link'><p class='centerContentSG'><a href='javascript:hint_letter()' ><span id='SGmenu'>Get a Hint</span></a></h2></td></tr>"
			+ "<tr><td id='hint_text' colspan='2'><p>&nbsp;</p></td></tr>"
			+ "<tr><td id='letter_holder' class ='used_letters' colspan='2'>" + USED_L + "</td></tr>"
		+ "</tr></table>"
//table for word letters
			+ "<table id='SGtable'><tr><td colspan='2'>&nbsp;</td></tr>"
			+ "<tr id='word_row' colspan='2'>"
				+ "<td id='mw0' class ='hangman_letters'></td>"
				+ "<td id='mw1' class ='hangman_letters'></td>"
				+ "<td id='mw2' class ='hangman_letters'></td>"
				+ "<td id='mw3' class ='hangman_letters'></td>"
				+ "<td id='mw4' class ='hangman_letters'></td>"
				+ "<td id='mw5' class ='hangman_letters'></td>"
				+ "<td id='mw6' class ='hangman_letters'></td>"
				+ "<td id='mw7' class ='hangman_letters'></td>"
				+ "<td id='mw8' class ='hangman_letters'></td>"
				+ "<td id='mw9' class ='hangman_letters'></td>"			
				+ "<td></td>"	
				+ "<td><h3 class='centerContentSG'><a href='javascript:resetAll()' >Reset all!</a></h3></td>"	
			+ "</tr></table>"
		
		); 		
 }
 
function guess_letter ()
{
	var picked_right = false;
	var used = USED_L;
	letter_guess = prompt("Enter your guess (any letter a-z):"); 
	for (i=0; i<WORD.length; i++)
	{
		if (WORD.charAt(i) == letter_guess)
			{	
				document.getElementById("mw" + i).innerHTML  = ("" + letter_guess);
				picked_right = true;
				var counter = CORRECT_G;
				counter++;
				CORRECT_G = counter;				
				check_win();
			}
	}
		if (picked_right == false)
			{
				var counter = WRONG_G;
				counter++;
				WRONG_G = counter;
				used = used + " " + letter_guess;
				USED_L = used;
				document.getElementById("letter_holder").innerHTML  = ("" + USED_L);
				check_win();
				change_pic();
			}
}	
 
 function generate_word()
 {
	beginHANG();
	var max = 9;
	var min = 0;
	var word_number = Math.floor(Math.random()*(max - min + 1) + min);
	var word_array = new Array ("azguard", "oniel", "daniel", "tealc", "carter", "furlings", "jaffa", "walter", "mitchell", "vala");
	var picked_word = word_array[word_number];
	WORD = picked_word;
	for (i=0; i<WORD.length; i++)
	{
		document.getElementById("mw" + i).innerHTML  = ("?");
	}
	document.getElementById("hint_text").innerHTML  = ("Your Word has " + WORD.length + " letters.");
	document.getElementById("hang_pic").innerHTML  = ("<img src='_images/gate/gate10.png' width='390' height='390' align='middle'/>");
 }

// function test_line()
// {
//	 	document.getElementById("testline").innerHTML  = (
//				"<p id='testline'>Test Line: var WRONG GUESSES = "+ WRONG_G +", var WORD = "+ WORD + " , var CORRECT GUESSES = "+ CORRECT_G +"</p>"
//		);
// }
// 
 function resetAll()
 {
	 CORRECT_G = 0; ROUND = 0; WORD = ""; USED_L = "Used Letters:"; WRONG_G = 0; TEST_C=1;
	 beginHANG();	 
 }
 
 function check_win()
 {
	 if (CORRECT_G == WORD.length){
		 document.getElementById("letter_holder").innerHTML  = ("You Win! <br /> You have saved the world by keeping the gate open!</p>");
		 document.getElementById("hang_pic").innerHTML  = ("<img src='_images/gate/gate10.png' width='390' height='390' align='middle'/>");
		 }
	 if (WRONG_G == 9)
	 	{
			resetAll();
			document.getElementById("letter_holder").innerHTML = ("GAME OVER <br /> The world as you know it is now over");
			document.getElementById("start_link").innerHTML = ("GAME OVER");
			document.getElementById("hint_link").innerHTML = ("GAME OVER");
			document.getElementById("hint_text").innerHTML = ("GAME OVER");			 
			}
 }
 
function change_pic()
{
	var gate = 9;
	for (i=1; i<10; i++)
	{
		if (WRONG_G == i)
		{
			document.getElementById("hang_pic").innerHTML  = ("<img src='_images/gate/gate"+gate+".png' width='390' height='390' align='middle'/>");
		}
		gate--;
	}
}

function hint_letter()
{
	if (WORD == "azguard"){document.getElementById("hint_text").innerHTML  = ("The alien's who protect the inhabitants of the galaxy from the Goa'uld and are from Othala.");}
	if (WORD == "oniel"){document.getElementById("hint_text").innerHTML  = ("Former leader of SG1, and now General in charge of homeworld command.");}
	if (WORD == "tealc"){document.getElementById("hint_text").innerHTML  = ("The Jaffa who defected from the Goa'uld ranks to join SG1 in 'Children of the Gods'");}
	if (WORD == "carter"){document.getElementById("hint_text").innerHTML  = ("The smartest person on the planet, not Rodney.");}
	if (WORD == "furlings"){document.getElementById("hint_text").innerHTML  = ("One of the original members of 'The Alliance of Four Great Races' seen in Episode 200.");}
	if (WORD == "jaffa"){document.getElementById("hint_text").innerHTML  = ("Foot soldiers of the Goa'uld, They carry larvae Goa'uld in their bellys.");}
	if (WORD == "walter"){document.getElementById("hint_text").innerHTML  = ("The lynch-pin for all stargate offworld missions, without him nothing would ever engage.");}
	if (WORD == "mitchell"){document.getElementById("hint_text").innerHTML  = ("Rumored to be Jack O'Niel's son from a time trip back to 1969, and now leader of SG1.");}
	if (WORD == "vala"){document.getElementById("hint_text").innerHTML  = ("She is a former host of the Goa'uld Qetesh a former con-artist and now reformed member of SG-1");}
	if (WORD == "daniel"){document.getElementById("hint_text").innerHTML  = ("On again off again member of SG1, he is an expert in all things archeological, and Ancient");}
}