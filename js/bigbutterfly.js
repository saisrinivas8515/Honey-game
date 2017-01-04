var bigbutterflyObj=function()
{
	this.x;
	this.y;
	this.angle;
	this.bigbutterflyBody=new Image();

	this.bigbutterflyBodyTimer=0;
	this.bigbutterflyBodyCount=0;
}
bigbutterflyObj.prototype.init=function()
{
this.x=canWidth*0.5;
this.y=canHeight*0.5;
this.angle=0;
}
bigbutterflyObj.prototype.draw=function()
{
	this.x=lerpDistance(mx,this.x,0.93);
	this.y=lerpDistance(my,this.y,0.93);

	//bigbutterflyBody count
	this.bigbutterflyBodyTimer+=deltaTime;
	if(this.bigbutterflyBodyTimer>200)
	{
		this.bigbutterflyBodyCount=(this.bigbutterflyBodyCount+1)%4;
		this.bigbutterflyBodyTimer%=50;
	}

	//delta angle

	var deltaY=my-this.y;
	var deltaX=mx-this.x;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI//-PI PI;

	this.angle=lerpAngle(beta,this.angle,0.99);


	 ctx1.save();
	 ctx1.translate(this.x,this.y);
	 ctx1.rotate(this.angle);
	var bigbutterflyBodyCount=this.bigbutterflyBodyCount;
	ctx1.drawImage(bigbutterflyBody[bigbutterflyBodyCount],-bigbutterflyBody[bigbutterflyBodyCount].width*0.5,-bigbutterflyBody[bigbutterflyBodyCount] .height*0.5);
    
	ctx1.restore();
}