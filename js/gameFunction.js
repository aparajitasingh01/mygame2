function playerControl(){
    if(keyIsDown(LEFT_ARROW)){
        Matter .Body.setPosition(player,{x:player.position.x-5,y:player.position.y})
    }
    if(keyIsDown(RIGHT_ARROW)){
        Matter .Body.setPosition(player,{x:player.position.x+5,y:player.position.y})
    }
}