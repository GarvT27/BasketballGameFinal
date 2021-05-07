class Ball {
    constructor(x, y ,radius , angle){
        var options  = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        //this.body = Bodies.circle
        this.body = Bodies.Circle(x, y , 30,  options);
        this.radius = 30;
        
        this.image = loadImage('sprites/ball.png');
        World.add(world, this.body);
    }
    display(){
        push();
        //var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius);
        pop();
    }
}