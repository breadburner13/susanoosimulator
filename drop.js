// var colorList = {
//   Red:"#FF0000",
//   Orange:"#FF7F00",
//   Yellow:"#FFFF00",
//   Green:"#00FF00",
//   Blue:"#0000FF",
//   Indigo:"#2E2B5F",
//   Violet:"#8B00FF",
//   PrincePurple:"#8a2be2",
//   White:"#ffffff",
//   Black:"#000000"
// }
var colorList = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#2E2B5F", "#8B00FF", "#8a2be2", "#ffffff", "#000000"];

function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.color = colorList[7]
  this.yspeed = map(this.z, 0, 20, 1, 20);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  };

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(this.color);
    line(this.x, this.y, this.x, this.y + this.len);
  };
  this.changeColor = function(newColor) {
    this.color = newColor;
  }
}