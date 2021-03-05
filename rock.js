class Rock{
    constructor(x,y,width,height){
    var options ={isStatic: false}
    
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.height=height;
    this.width=width;
    this.image=loadImage("images/rock1.png");
    World.add(world,this.body);
    }
    
    display(){
     var pos=this.body.position;

     imageMode(CENTER);
     image(this.image,pos.x,pos.y,this.width,this.height);
    }  
 }