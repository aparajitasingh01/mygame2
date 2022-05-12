class Room{
    constructor (x,y){
        this.x=x
        this.y=y
        this.width=159;
        this.height=100;
        this.wallThickness=20;
        this.angle=0;
        this.rightWall=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.wallThickness,this.height,{isStatic:true});
        Matter.Body.setAngle(this.rightWall,-1*this.angle);

        this.bottomWall=Bodies.rectangle(this.x,this.y,this.width,this.wallThickness,{isStatic:true});
        Matter.Body.setAngle(this.bottomWall,this.angle);
        World.add(world,this.rightWall)
        World.add(world,this.bottomWall)

        this.alienSprite=createSprite(this.x,this.y-this.height,this.width,this.wallThickness)  
        this.powerSprite=createSprite(this.x,this.y-40,75,this.wallThickness)
        this.alienSprite.visible=false;
        this.powerSprite.visible=false;

    
        
    }
    display (){
        var posRight =this.rightWall.position;
        var posBottom =this.bottomWall.position;
         //var angle = ;
          push();
           translate(posRight.x, posRight.y);
           angleMode(RADIANS)
           rotate(-1*this.angle);
           fill ("red") 
           rectMode(CENTER);
            //strokeWeight(4);
            //stroke("brown");
            rect(0, 0, this.wallThickness, this.height);
              pop();
            
              push();
              translate(posBottom.x, posBottom.y);
              rotate(this.angle);
              fill ("green") 
              rectMode(CENTER);
               //strokeWeight(4);
               //stroke("brown");
               rect(0, 0, this.width, this.wallThickness);
                 pop();
                 drawSprites();
    }
}