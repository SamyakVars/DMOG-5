var tgroup, collidergroup, obgroup;

var player, panimation, pidle, pjump, pdeath;

var tutorial, gamestate = true;
var GOimg;

var levelState = 1


// Bug 1: Random borders appear     Maybe solved: displayWidth, displayHeight

// kronovi-  --- Dyso
//LuizMelo --- Gyo
// edermunizz -- Forest Bg

function setup() {
  

  tgroup = createGroup()
  collidergroup = createGroup()
  obgroup = createGroup()

  tutorial = new lvl1()

  createCanvas(displayWidth, displayHeight);

}

function draw() {
  background(200); 
  
  if(levelState == 1){
    tutorial.play()
    tutorial.end()
  }else{
    tutorial = null
  }
  

  drawSprites();
  
}

function mousePressed(){
  console.log(mouseX, mouseY)
}

