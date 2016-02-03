/*
 * Java Script Document Created by Sean Foret
 * for use in COP2822 Santa Fe College,
 * Internet Programming
 *
 */
function getRealName(realname)
   {
      var real = document.getElementById(realname).value;
      document.getElementById('real_name').innerHTML = real;
   }

function getUsername(username)
   {
      var user = document.getElementById(username).value;
      document.getElementById('user_name').innerHTML = user;
   }

function getPoints(points)
   {
      var pts = document.getElementById(points).value;
      document.getElementById('user_points').innerHTML = pts;
   }

function pickAvatar(picked)
   {
      var avatar = document.getElementById(picked).value;
      document.getElementById('myavatar').innerHTML = avatar;
      document.getElementById('avatar_img').innerHTML = ("<img src = '_images/" + avatar + ".jpg' />");
   }

function pickWeapons()
   {
      var i = 0; var j = 0; var k = 0;
      var weapon1 = ""; var weapon2 = ""; var weapon3 = "";
      for (i=0; i <= 9; i++)
         {
            if (document.getElementById('w'+ i).checked == true)
            {
               weapon1 = document.getElementById('w'+ i).value;
               document.getElementById('weapon_one').innerHTML = weapon1;
               break;
            }
         }
      for (j=(i+1); j <=9; j++)
         {
            if (document.getElementById('w'+ j).checked == true)
               {
                  weapon2 = document.getElementById('w'+ j).value;
                  document.getElementById('weapon_two').innerHTML = weapon2;
                  break;
               }
         }
      for (k=(j+1); k <=9; k++)
         {
            if (document.getElementById('w'+ k).checked == true)
               {
                  weapon3 = document.getElementById('w'+ k).value;
                  document.getElementById('weapon_three').innerHTML = weapon3;
               }
         }
   }

function pickSupplies()
   {
      var i = 0; var j = 0; var k = 0; var m = 0; var p = 0;
      var supply1 = ""; var supply2 = ""; var supply3 = "";
      var supply4 = ""; var supply5 = "";
      for (i = 0; i <= 9; i++)
         {
            if (document.getElementById('s'+i).checked == true)
               {
                  supply1 = document.getElementById('s'+i).value;
                  document.getElementById('supply_one').innerHTML = supply1;
                  break;
               }
         }
      for (j = (i+1); j <=9; j++)
         {
            if (document.getElementById('s'+j).checked == true)
               {
                  supply2 = document.getElementById('s'+j).value;
                  document.getElementById('supply_two').innerHTML = supply2;
                  break;
               }
         }
      for (k = (j+1); k <=9; k++)
         {
            if (document.getElementById('s'+k).checked == true)
               {
                  supply3 = document.getElementById('s'+k).value;
                  document.getElementById('supply_three').innerHTML = supply3;
                  break;
               }
         }
      for (m = (k+1); m <=9; m++)
         {
            if (document.getElementById('s'+m).checked == true)
               {
                  supply4 = document.getElementById('s'+m).value;
                  document.getElementById('supply_four').innerHTML = supply4;
                  break;
               }
         }
      for (p = (m+1); p <=9; p++)
         {
            if (document.getElementById('s'+p).checked == true)
               {
                  supply5 = document.getElementById('s'+p).value;
                  document.getElementById('supply_five').innerHTML = supply5;
               }
         }
   }