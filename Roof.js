class Roof {
  constructor(x, y, width, height){
    var roof_options = {  
        isStatic: true
  }
   this.body =  Bodies.rectangle(x, y, width, height, roof_options );
    World.add(world, this.body);

    this.width = width;
    this.height = height;
    }
    display(){
    var pos = this.body.position;

        rectMode(CENTER);
        fill("green");
        rect(pos.x, pos.y, this.width, this.height);
    }

}