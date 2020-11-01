function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.r = 138;
  this.g = 43;
  this.b = 226;
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
    stroke(this.r, this.g, this.b);
    line(this.x, this.y, this.x, this.y + this.len);
  };
  this.changeColor = function(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  this.randomChange = function() {
    this.r = random(1, 255);
    this.g = random(1, 255);
    this.b = random(1, 255);
  }
}