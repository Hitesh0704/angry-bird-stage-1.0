class Log{
    constructor(x,y,h,angle){
       var options={
          restitution:0.8 ,
          friction:1.5,
          density:1.5
       } 
       this.w=20;
       this.h=h;
       this.body=Bodies.rectangle(x,y,20,h,options);
       Matter.Body.setAngle(this.body,angle);
       World.add(world,this.body);
     }   
    display(){
       rectMode(CENTER);
       fill("white"); 
       var pos=this.body.position;
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