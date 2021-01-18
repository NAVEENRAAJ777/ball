class crumpledpaper
{
 constructor(x,y)
  {
    var options = {
        'isStatic':false,
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5,
        
      }
      this.body = Bodies.circle(x,y, 40, options);
      this.radius = 40;
      World.add(world, this.body);  
  }
 display()
 {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    
    
    rotate(angle);
    strokeWeight(10);
    stroke('red');
    fill('white');
    rectMode(CENTER);
    
    circle(pos.x, pos.y, this.radius);


    pop();
 }

}
