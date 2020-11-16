class Dustbin{

    constructor(x,y){

       this.x = x;
       this.y = y;
       this.dustbinWidth = 200;
       this.dustbinHeight = 100;
       this.wallThickness = 20;
       this.angle = PI;

       this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true});
       this.leftBody = Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2,this.wallThickness, this.dustbinHeight, {isStatic:true});
       Matter.Body.setAngle(this.leftBody, this.angle);

       this.rightBody = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight,{isStatic:true});
       Matter.Body.setAngle(this.rightBody, -1*this.angle);

       this.image = loadImage("dustbingreen.png");
       
        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);


    }

    display(){

        var posBottom = this.bottomBody.position;
        var posLeft = this.leftBody.position;
        var posRight = this.rightBody.position;

        push();
        translate(posBottom.x,posBottom.y);
        angleMode(RADIANS);
        fill(255);
       // rotate(this.angle)

        rectMode(CENTER);
        rect(0, 0, this.dustbinWidth-80, this.wallThickness);
        pop();
        //image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);

        push();
        translate(posLeft.x+50,posLeft.y);
        angleMode(RADIANS);
        fill(255);
        rotate(this.angle);
        rect(0,0,this.wallThickness,this.dustbinHeight);
        pop()

        push();
        translate(posRight.x-50,posRight.y);
        angleMode(RADIANS);
        fill(255);
        rotate(-1*this.angle);
        rect(0,0,this.wallThickness,this.dustbinHeight);
        pop();

        push();
        translate(this.x, this.y-60);
        imageMode(CENTER);
        image(this.image, 0,0, 150,150);
        pop();

    }
}