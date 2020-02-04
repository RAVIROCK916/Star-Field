let stars = [];

function setup(){

    createCanvas(600, 600);

    for(let i=0; i<600; i++)
        stars[i] = new star();

}
function draw(){
    background(0);
    translate(width/2, height/2);
    for(let i=0; i<stars.length; i++)
    {
        stars[i].move();
        stars[i].show();
    }
}
