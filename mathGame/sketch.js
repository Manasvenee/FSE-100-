function setup() {
  createCanvas(1920,1080);
}

function draw() {
  background(181,215,168);
  circle(910, 300, 300);
  rect(200, 700, 200, 200, 20);
  rect(800, 700, 200,200, 20);
  rect(1400,700, 200, 200, 20);

  
  textSize(100);
  textAlign(CENTER, CENTER); 
  text("5", 930, 300);


  textSize(100);
  textAlign(CENTER, CENTER); 
  text("1", 1450, 800);

  textSize(100);
  textAlign(CENTER, CENTER); 
  text("2", 850, 800);

  textSize(100);
  textAlign(CENTER, CENTER); 
  text("3", 250, 800);

}
