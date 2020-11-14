function Cloud() {
    this.x = random(0, width);
    this.y = random(0, height);
    
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