class Paper
{
	constructor()
	{
		var options={
        restitution:0.8,
        friction:1.0,
        density:1.0,
		 isStatic:false
		
		}
			this.body=Bodies.circle(100,300,10,options);
		World.add(world, this.body);
	}
	display()
	{
	    fill('red')		
		ellipseMode(RADIUS)
		
        ellipse(this.body.position.x,this.body.position.y,10,10)
	}

}