// A simple weather controller and simulator that changes depending on user input. 
// Uses: JavaScript(obviously), HTML, CSS, WeatherAPI (from https://openweathermap.org/api)
// Credit to TheCodingTrain (https://thecodingtrain.com/) for the inspiration

var drops = [];
var commandprompt;
var splitcommands;
var startRainButton;
var stopRainButton;
var changeColorButton;
var newColor;
var apiURLstart = "http://api.openweathermap.org/data/2.5/weather?q="; 
var cityName;
var apiKey = "&appid=0f3081125572ff5aa911ebe810c0417d";
var weatherData;

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
  createElement("h1", "change color to...");
  commandprompt = createInput("");  
  submitCommandPrompt = createButton("Try");
  submitCommandPrompt.mousePressed(weatherAsk);
  submitCommandPrompt.mousePressed(processCommand);
  //commandprompt.changed(processCommands);
  startRainbutton = createButton("Never Ending Rain");
  stopRainbutton = createButton("The Rain Stopped");
}

function draw() {
  background(230, 230, 250);
  startRainbutton.mousePressed(neverEndingRain);
  stopRainbutton.mousePressed(theRainStopped);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}

function weatherAsk() {
	var url = apiURLstart + commandprompt.value() + apiKey;
	loadJSON(url, gotData, 'jsonp');
}

function gotData(data) {
  weatherData = data;
  print(weatherData.weather[0].main);
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

function processCommand() {
  weatherAsk();
  var command = weatherData.weather[0].main;
  print(command);
  if (command != "Rain") {
    theRainStopped();
  }
  else if(command == "Rain") {
    neverEndingRain();
  }
}

// function processCommands() {
//   splitcommands = split(this.value(), ' ');
//   for (acommand of splitcommands) {
//     print(acommand);
//     if (acommand == "red") {
//       this.newcolor = colorList[0];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//     if (acommand == "orange") {
//       this.newcolor = colorList[1];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//     if (acommand == "yellow") {
//       this.newcolor = colorList[2];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//     if (acommand == "green") {
//       this.newcolor = colorList[3];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//     if (acommand == "blue") {
//       this.newcolor = colorList[4];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//     if (acommand == "indigo") {
//       this.newcolor = colorList[5];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//     if (acommand == "violet") {
//       this.newcolor = colorList[6];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//     if (acommand == "purple") {
//       this.newcolor = colorList[7];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//     if (acommand == "white") {
//       this.newcolor = colorList[8];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//     if (acommand == "black") {
//       this.newcolor = colorList[9];
//       for (var i = 0; i < drops.length; i++) {
//         drops[i].changeColor(this.newcolor);
//       }
//     }
//   }
// }