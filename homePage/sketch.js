
function setup() {
  createCanvas(1920, 1080);
  
}

function draw() {
  background(181,215,168);
  
  fill('white');
  circle(50, 50, 30);
  circle(50, 90, 50);
  
    fill('black');
   textSize(30);
   textFont('Impact');
   text('Welcome again Back!        Get started by playing any of the games below!', 350, 85);
  
  fill('deeppink');
  textFont('Brush Script MT');
  textSize(52);
  text('Featured Games', 226, 250);
  text('Recent Games', 226, 500);
}