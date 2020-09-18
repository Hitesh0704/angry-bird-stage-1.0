class Bird{
    constructor(x,y){
       var options={
          restitution:0.8 ,
          friction:0.3,
          density:1.0
       } 
       this.w=50;
       this.h=50;
       this.body=Bodies.rectangle(x,y,50,50,options);
       World.add(world,this.body);
     }   
    display(){
       rectMode(CENTER);
       fill("red"); 
       var pos=this.body.position;
       pos.x= mouseX;
       pos.y= mouseY;
       var angle=this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       strokeWeight(4);
       stroke("green");
       rect(0,0,this.w,this.h);
       pop();
    }  
    }