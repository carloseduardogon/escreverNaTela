let cor;
function setup() 
{
  createCanvas(1000, 1000);
  background(220);
  cor=color(random(0,255),random(0,255),random(0,255));
}

function draw() 
{
  rect(5,5,100,100);
  fill(cor);
  stroke("yellow");
  strokeWeight(3);
  
  if(mouseIsPressed)
    {
      cor=color(random(0,255),random(0,255),random(0,255));
    }
  
  if(mouseIsPressed)
    {
      rect(mouseX,mouseY,15,15);
    }
  
}