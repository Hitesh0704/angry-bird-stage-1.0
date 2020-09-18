class Box{
constructor(x,y,w,h){
   var options={
      restitution:0.8 ,
      friction:0.3,
      density:1.0
   } 
   this.w=w;
   this.h=h;
   this.body=Bodies.rectangle(x,y,w,h,options);
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