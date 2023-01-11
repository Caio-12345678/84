canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverwidth = 100;
roverheight = 90;

backgroundImage = "mars.jpg";


roverimage  = "rover.png";
roverX = 10;
roverY = 10;

function add() {

    backgroundimgTag = new Image();
    backgroundimgTag.onload = uploadBackground;
    backgroundimgTag.src = backgroundImage;

    roverimgTag = new Image();
    roverimgTag.onload = uploadrover;
    roverimgTag.src = roverimage;
}

function uploadBackground()
{
    ctx.drawImage(backgroundimgTag, 0, 0, canvas.width, canvas.height);
 }
  function uploadrover() { 
    ctx.drawImage(roverimgTag, roverX, roverY, roverwidth, roverheight);
 }
window.addEventListener("keydown", myKeyDown)

function myKeyDown(e)
    {
    KeyPressed = e.KeyCode;
    console.log(KeyPressed);
    if(KeyPressed == '38') 

    { 
    up();
    console.log("cima"); 
    } 
   
    if(KeyPressed == '40')
    { 
    down();
    console.log("baixo");
    } 
    
    if(KeyPressed == '37') 
    {    
    left(); 
    console.log("esquerda"); 
    } 
    if(KeyPressed == '39') 
    
    {
    right();
    console.log("direita");
    }
 }

 function down() {
    if(roverY <= 500)
    {
       roverY = roverY + 10 
       console.log("Quando direcional baixo for pressionada, x = " + roverX + " | y = " +roverY);
       uploadBackground();
       uploadrover();
    }
 }
 function left()
  {
    if(roverX >= 0)
    { 
    roverX = roverX - 10 
    console.log("Quando direcional esquerda for pressionada, x = " + roverX + " | y = " +roverY);
    uploadBackground();
    uploadrover();
  }
}
function right()
{
    if(roverX <= 700)
    {
        roverX = roverX + 10 
        console.log("Quando direcional direita for pressionada, x = " + roverX + " | y = " +roverY);
        uploadBackground();
        uploadrover();
    }
}
function up() {

   if(roverY >=0)
    { 
      roverY = roverY - 10;
       console.log("Quando direcional cima for pressionada, x = " + roverX + " | y = " +roverY); 
       uploadBackground(); 
       
       uploadrover();
       } 
      }

