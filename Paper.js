class Paper {

constructor(x,y,r) {

var options = {

isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2


}

this.image = loadImage("ball.png");


this.x = x;
this.y = y;
this.radius = r;
this.body = Bodies.circle(this.x,this.y,r/2,options)
this.radius = r;
World.add(world,this.body);





}

display(){

var pos = this.body.position;
push();
translate(pos.x,pos.y)
rectMode(CENTER)
fill("pink")
ellipse(0,0,this.radius*1.5,this.radius*1.5)
pop()


}





}



