// JavaScript Document original maze game written by James Littin
// version adapted by Sean Foret for Santa Fe College COP2822

var canvas;
var ctx;
var dx = 5;
var dy = 5;
var x = 200;
var y = 3;
var WIDTH = 482;
var HEIGHT = 482;
var img = new Image();
var collision = 0;
var image_source = "_images/mazes/maze.gif";
var select_counter = 0;

function rect(x,y,w,h) {
   ctx.beginPath();
   ctx.rect(x,y,w,h);
   ctx.closePath();
   ctx.fill();
}

function clear() {
   ctx.clearRect(0, 0, WIDTH, HEIGHT);
   ctx.drawImage(img, 0, 0);
}

function init() {
   canvas = document.getElementById("canvas");
   ctx = canvas.getContext("2d");
   img.src = image_source;
   return setInterval(draw, 10);
}

function doKeyDown(evt){
   switch (evt.keyCode) {
   case 104:  /* Up arrow was pressed */
      if (y - dy > 0){
      y -= dy;
      clear();
      checkcollision();
         if (collision == 1){
         y += dy;
         collision = 0;
         }
      }
   break;

   case 98:  /* Down arrow was pressed */
      if (y + dy < HEIGHT ){
      y += dy;
      clear();
      checkcollision();
         if (collision == 1){
         y -= dy;
         collision = 0;
         }
      }
   break;

   case 100:  /* Left arrow was pressed */
      if (x - dx > 0){
      x -= dx;
      clear();
      checkcollision();
         if (collision == 1){
         x += dx;
         collision = 0;
         }
      }
      break;

   case 102:  /* Right arrow was pressed */
      if ((x + dx < WIDTH)){
      x += dx;
      clear();
      checkcollision();
         if (collision == 1){
         x -= dx;
         collision = 0;
         }
      }
      break;
   }
}

function checkcollision() {
   var imgd = ctx.getImageData(x, y, 10, 10);
   var pix = imgd.data;
      for (var i = 0; n = pix.length, i < n; i += 4) {
         if (pix[i] == 0) {
         collision = 1;
         }
      }
}

function up(){
      if (y - dy > 0){
      y -= dy;
      clear();
      checkcollision();
         if (collision == 1){
         y += dy;
         collision = 0;
         }
      }
}
function down(){
      if (y + dy < HEIGHT ){
      y += dy;
      clear();
      checkcollision();
         if (collision == 1){
         y -= dy;
         collision = 0;
         }
      }
}

function left() {
      if (x - dx > 0){
      x -= dx;
      clear();
      checkcollision();
         if (collision == 1){
         x += dx;
         collision = 0;
         }
      }
}

function right() {
      if ((x + dx < WIDTH)){
      x += dx;
      clear();
      checkcollision();
         if (collision == 1){
         x -= dx;
         collision = 0;
         }
      }
}

function startbutton() {
   select_counter = 0;
   window.location.reload();
}


function draw() {
   clear();
   ctx.fillStyle = "green";
   rect(x, y, 10,10);
}

init();
window.addEventListener('keydown',doKeyDown,true);