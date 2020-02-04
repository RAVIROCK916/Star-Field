function star(){

    this.x = random(-width/2, width/2);
    this.y = random(-height/2, height/2);
    this.z = random(width);
    this.r = 2;

    this.move = function(){
        this.z = this.z - 2;
        this.r = this.r + 0.005;

        if(this.z < 1){
            this.x = random(-width/2, width/2);
            this.y = random(-height/2, height/2);
            this.z = width;
            this.r = 2;
        }
    };

    this.show = function(){

        this.sx = map(this.x/this.z, 0, 1, 0, width);
        this.sy = map(this.y/this.z, 0, 1, 0, height);
        this.sr = map(this.r/this.z, 0, 1, 0, 100);

        fill(255);
        noStroke();
        ellipse(this.sx, this.sy, this.sr, this.sr);
    };
}
