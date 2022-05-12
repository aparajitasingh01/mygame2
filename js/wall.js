class Wall{
    constructor (x,y,height,angle){
        var option = {
            friction:0.5,
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,45,height,option)
        this.width=45;
        this.height=height;
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
    }
    display (){
        var pos =this.body.position;
         var angle = this.body.angle;
          push();
           translate(pos.x, pos.y);
           rotate(angle);
           fill ("white") 
           rectMode(CENTER);
            //strokeWeight(4);
            //stroke("brown");
             fill(255); rect(0, 0, this.width, this.height);
              pop();
    }
}