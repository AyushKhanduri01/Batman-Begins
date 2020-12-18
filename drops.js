class Drop {
    constructor(x,y,radius){
        var options = {

        } 
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        pop();
    }
}