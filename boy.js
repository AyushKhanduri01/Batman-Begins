class Boy {
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.animation = boyImg;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        animation(this.animation,0,0,this.width,this.height);
        this.animation.scale = 0.5;
        pop();
    }
}