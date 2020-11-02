var drops = [];
var r, g, b; 
var command;

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
  createElement("h1", "let there be...");
  command = createInput("...");
}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
  // if(keyIsPressed) {
  //   for (drop of drops) {
  //     drop.randomChange();
  //   }
  // }
  if (command.value() == "red") {
    this.r = 255;
    this.g = 0;
    this.b = 0;
    for (drop of drops) {
      drop.changeColor(this.r, this.g, this.b);
    }
  }
}

function mousePressed() {
  this.r = random(1, 255);
  this.g = random(1, 255);
  this.b = random(1, 255);
  for (drop of drops) {
    drop.changeColor(this.r, this.g, this.b);
  }
}