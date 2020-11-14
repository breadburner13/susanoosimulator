// A simple weather controller and simulator that changes depending on user input. 
// Uses: JavaScript(obviously), HTML, CSS, WeatherAPI (from https://openweathermap.org/api)
// Credit to TheCodingTrain (https://thecodingtrain.com/) for the inspiration

var drops = [];
var clouds = [];
var newColor;
var apiURLstart = "http://api.openweathermap.org/data/2.5/weather?q="; 
var apiKey = "&appid=0f3081125572ff5aa911ebe810c0417d&units=imperial";
var weatherData;
var commandprompt;
var splitcommands;

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
  for (var i = 0; i < 8; i++) {
    clouds[i] = new Cloud();
  }
  var button = select('#Try');
  button.mousePressed(weatherAsk);
  //button.mousePressed(processCommands);
  commandprompt = select('#command');
}

function draw() {
  background(230, 230, 250);
  if(drops.length > 0) {
    for (var i = 0; i < drops.length; i++) {
      drops[i].fall();
      drops[i].show();
    }
  }
  if(clouds.length > 0) {
    for (var i = 0; i < clouds.length; i++) {
      clouds[i].move();
      clouds[i].display();
    }
  }
}

function weatherAsk() {
	var url = apiURLstart + commandprompt.value() + apiKey;
	loadJSON(url, gotData, 'jsonp');
}

function gotData(data) {
  weatherData = data;
  var command = weatherData.weather[0].main;
  if(command == "Rain") {
    neverEndingRain();
    neverEndingClouds();
  }
  else if(command == "Clear"){
    theRainStopped();
    theCloudsStopped();
  }
  else if(command == "Clouds") {
    theRainStopped();
    neverEndingClouds();
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

function theCloudsStopped() {
  clouds.length = 0;
}

function neverEndingClouds() {
  for (var i = 0; i < 8; i++) {
    clouds[i] = new Cloud();
  }
}

function showtime () {
  newcolor = random(colorList);
  for (var i = 0; i < drops.length; i++) {
    drops[i].changeColor(newcolor);
  }
}

function Cloud() {
  this.x = random(0, width);
  this.y = random(0, height / 3);
  
  this.display = function() {
   stroke(255);
    strokeWeight(1);
    fill(255);
    ellipse(this.x, this.y, 24, 24);
    ellipse(this.x+10,this.y+10,24,24);
    ellipse(this.x+30,this.y+10,24,24);
    ellipse(this.x+30,this.y-10,24,24);
    ellipse(this.x+20,this.y-10,24,24);
    ellipse(this.x+40,this.y,24,24);
  }
  
  this.move = function() {
    this.x = this.x += 1 ;
    this.y = this.y + random(-1, 1);
    
    if(this.x >= width){
    this.x = 0;
    }
  }
}

// function processCommands() {
//   splitcommands = split(commandprompt.value(), ' ');
//   for (acommand of splitcommands) {
//     print(acommand);
//     if (acommand.toLowerCase() == "red") {
//       this.newcolor = colorList[0];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//     if (acommand.toLowerCase() == "orange") {
//       this.newcolor = colorList[1];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//     if (acommand.toLowerCase() == "yellow") {
//       this.newcolor = colorList[2];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//     if (acommand.toLowerCase() == "green") {
//       this.newcolor = colorList[3];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//     if (acommand.toLowerCase() == "blue") {
//       this.newcolor = colorList[4];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//     if (acommand.toLowerCase() == "indigo") {
//       this.newcolor = colorList[5];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//     if (acommand.toLowerCase() == "violet") {
//       this.newcolor = colorList[6];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//     if (acommand.toLowerCase() == "purple") {
//       this.newcolor = colorList[7];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//     if (acommand.toLowerCase() == "white") {
//       this.newcolor = colorList[8];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//     if (acommand.toLowerCase() == "black") {
//       this.newcolor = colorList[9];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//   }
// }