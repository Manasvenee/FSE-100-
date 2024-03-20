function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(181,215,168);
  circle(310, 100, 100);
  rect(40, 250, 70, 100, 20);
  rect(270, 250, 70, 70, 20);
  rect(500,250, 70, 70, 20);

  
  textSize(24);
  textAlign(CENTER, CENTER); 
  text("5", 310, 100);


  textSize(24);
  textAlign(CENTER, CENTER); 
  text("1", 75, 285);

  textSize(24);
  textAlign(CENTER, CENTER); 
  text("2", 215, 285);

  textSize(24);
  textAlign(CENTER, CENTER); 
  text("3", 345, 285);

}
