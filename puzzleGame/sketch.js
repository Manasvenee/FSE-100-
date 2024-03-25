let puzzleImage, rows, colums, w, h, numberCorrect, solved;
numberCorrect = 0;
solved = false;
let pieces = [];
let bg;
class Piece {
  constructor(myImage, x, y, w, h) {
    this.myImage = myImage;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sx = x;
    this.sy = y;
    this.drag = false;
    this.tx = x + 450;
    this.ty = y + 100;
    this.correct = false;
  }
  show() {
    if (this.drag) {
      fill(0, 100);
      noStroke();
      rect(this.x + 5, this.y + 5, this.w, this.h);
    }
    image(
      this.myImage,
      this.x,
      this.y,
      this.w,
      this.h,
      this.sx,
      this.sy,
      this.w,
      this.h
    );
  }
  clicked(x, y) {
    if (
      x > this.x &&
      x < this.x + this.w &&
      y > this.y &&
      y < this.y + this.h
    ) {
      this.drag = true;
      this.x = x - this.w / 2;
      this.y = y - this.h / 2;
      //get pos of current object
      let myIndexPosition = pieces.indexOf(this);
      pieces.splice(myIndexPosition, 1);
      pieces.push(this);
    }
  }
  active(x, y) {
    cursor("grabbing");
    if (this.drag) {
      this.x = x - this.w / 2;
      this.y = y - this.h / 2;
    }
  }
  check() {
    this.drag = false;
    cursor("grab");
    //check if in target location
    if (abs(this.x - this.tx) < 10 && abs(this.y - this.ty) < 10) {
      print("right spot");
      this.correct = true;
      this.x = this.tx;
      this.y = this.ty;
    } else {
      this.correct = false;
    }
  }
}

function preload() {
  puzzleImage = loadImage("puzzle-image.png");
  
}

function setup() {
  rows = 3;
  columns = 3;
  w = puzzleImage.width / columns;
  h = puzzleImage.height / rows;
  createCanvas(1920, 1080);
  let i = 0;
  for (y = 0; y < rows * h; y += h) {
    for (x = 0; x < columns * w; x += w) {
      pieces[i] = new Piece(puzzleImage, x, y, w, h);
      i++;
    }
  }
  for (let i = 0; i < pieces.length; i++) {
    pieces[i].x = random(5, 330);
    pieces[i].y = random(5, 380);
  }
}

function draw() {
  background(181,215,168);
  //target outline for solution
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(900, 150, 500, 500);

  fill(255);
  noStroke();
  textSize(32);
  text(numberCorrect, 700, 459);
  for (let i = 0; i < pieces.length; i++) {
    if (solved) {
      pieces[i].x += random(-2, 2);
      pieces[i].y += random(-2, 2);
    }
    pieces[i].show();
  }
}

function mousePressed() {
  for (let i = 0; i < pieces.length; i++) {
    pieces[i].clicked(mouseX, mouseY);
  }
}

function mouseDragged() {
  for (let i = 0; i < pieces.length; i++) {
    pieces[i].active(mouseX, mouseY);
  }
}

function mouseReleased() {
  numberCorrect = 0;
  for (let i = 0; i < pieces.length; i++) {
    pieces[i].check();
    if (pieces[i].correct == true) {
      numberCorrect++;
    }
  }
  if (numberCorrect == pieces.length) {
    solved = true;
  }
}
