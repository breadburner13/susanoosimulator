var drops = [];
var command;
var startrainbutton;
var stoprainbutton;
var changecolorbutton;
var newcolor;

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
  createElement("h1", "let there be...");
  command = createInput("...");
  startrainbutton = createButton("start rain");
  stoprainbutton = createButton("stop rain");
  changecolorbutton = createButton("change color");
}

function draw() {
  background(230, 230, 250);
  startrainbutton.mousePressed(neverEndingRain);
  stoprainbutton.mousePressed(theRainStopped);
  changecolorbutton.mousePressed(showtime);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}

function theRainStopped() {
    drops.length = 0;
}

function neverEndingRain() {
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function showtime () {
  newcolor = random(colorList);
  for (var i = 0; i < drops.length; i++) {
    drops[i].changeColor(newcolor);
  }
}