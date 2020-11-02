var drops = [];
var commandprompt;
var splitcommands;
var startrainbutton;
var stoprainbutton;
var changecolorbutton;
var newcolor;

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
  createElement("h1", "change color to...");
  commandprompt = createInput("");  
  commandprompt.changed(processCommands);
  // startrainbutton = createButton("start rain");
  // stoprainbutton = createButton("stop rain");
  // changecolorbutton = createButton("change color");
}

function draw() {
  background(230, 230, 250);
  // startrainbutton.mousePressed(neverEndingRain);
  // stoprainbutton.mousePressed(theRainStopped);
  // changecolorbutton.mousePressed(showtime);
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

function processCommands() {
  splitcommands = split(this.value(), ' ');
  for (acommand of splitcommands) {
    print(acommand);
    if (acommand == "red") {
      this.newcolor = colorList[0];
      for (var i = 0; i < drops.length; i++) {
        drops[i].changeColor(this.newcolor);
      }
    }
    if (acommand == "orange") {
      this.newcolor = colorList[1];
      for (var i = 0; i < drops.length; i++) {
        drops[i].changeColor(this.newcolor);
      }
    }
    if (acommand == "yellow") {
      this.newcolor = colorList[2];
      for (var i = 0; i < drops.length; i++) {
        drops[i].changeColor(this.newcolor);
      }
    }
    if (acommand == "green") {
      this.newcolor = colorList[3];
      for (var i = 0; i < drops.length; i++) {
        drops[i].changeColor(this.newcolor);
      }
    }
    if (acommand == "blue") {
      this.newcolor = colorList[4];
      for (var i = 0; i < drops.length; i++) {
        drops[i].changeColor(this.newcolor);
      }
    }
    if (acommand == "indigo") {
      this.newcolor = colorList[5];
      for (var i = 0; i < drops.length; i++) {
        drops[i].changeColor(this.newcolor);
      }
    }
    if (acommand == "violet") {
      this.newcolor = colorList[6];
      for (var i = 0; i < drops.length; i++) {
        drops[i].changeColor(this.newcolor);
      }
    }
    if (acommand == "purple") {
      this.newcolor = colorList[7];
      for (var i = 0; i < drops.length; i++) {
        drops[i].changeColor(this.newcolor);
      }
    }
    if (acommand == "white") {
      this.newcolor = colorList[8];
      for (var i = 0; i < drops.length; i++) {
        drops[i].changeColor(this.newcolor);
      }
    }
    if (acommand == "black") {
      this.newcolor = colorList[9];
      for (var i = 0; i < drops.length; i++) {
        drops[i].changeColor(this.newcolor);
      }
    }
  }
}