
function setup() {
  createCanvas(1920, 1080);
  
}

function draw() {
  background(181,215,168);
  
  fill('white');
  circle(30, 30, 20);
  circle(30, 55, 30);
  
    fill('black');
   textSize(18);
   textFont('Impact');
   text('Welcome again XYZ ………. Get started by playing any of the games below!', 100, 50);
  
  fill('deeppink');
  textFont('Brush Script MT');
  textSize(26);
  text('Featured Games', 80, 125);
  text('Recent Games', 80, 250);
}