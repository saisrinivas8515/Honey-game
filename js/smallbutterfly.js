var smallbutterflyObj=function()
{
	this.x;
	this.y;
	this.angle;
	this.smallbutterflyBody=new Image();
	this.smallbody=new Image();

	this.smallbutterflyBodyTimer=0;
	this.smallbutterflyBodyCount=0;

	this.smallbodyTimer=0;
	this.smallbodyCount=0;

}
 smallbutterflyObj.prototype.init=function()
 {
 	this.x=canWidth*0.5-50;
 	this.y=canHeight*0.5+50;
 	this.angle=0;
 	this.smallbutterflyBody.src="./src/smallbutterflyBody0.png";
 	this.smallbody.src="./src/small0.png";

 	
 }
 smallbutterflyObj.prototype.draw=function()
 {


 	this.x=lerpDistance(bigbutterfly.x,this.x,0.98);
	this.y=lerpDistance(bigbutterfly.y,this.y,0.98);

	this.smallbutterflyBodyTimer+=deltaTime;
	if(this.smallbutterflyBodyTimer>200)
	{
		this.smallbutterflyBodyCount=(this.smallbutterflyBodyCount+1)%4;
		this.smallbutterflyBodyTimer%=50;
	}

    var deltaY=bigbutterfly.y-this.y;
	var deltaX=bigbutterfly.x-this.x;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI//-PI PI;

	this.angle=lerpAngle(beta,this.angle,0.95);
       //small body exchange
	this.smallbodyTimer+=deltaTime;
	if (this.smallbodyTimer>1000)
	 {
        this.smallbodyCount=this.smallbodyCount+1;
        this.smallbodyTimer %= 1000;
        if (this.smallbodyCount>3) 
        {
        	this.smallbodyCount=3;
        	
        	//game over
        	data.gameOver = true; //Score
        
	 }
  }
 	ctx1.save();
 	ctx1.translate(this.x,this.y);
 	ctx1.rotate(this.angle);

 	var smallbodyCount=this.smallbodyCount;

 	var smallbutterflyBodyCount=this.smallbutterflyBodyCount;


    ctx1.drawImage(this.smallbutterflyBody,-this.smallbutterflyBody.width*0.5,-this.smallbutterflyBody.height*0.5);
    ctx1.drawImage(smallbody[smallbodyCount],-smallbody[smallbodyCount].width*0.5,-smallbody[smallbodyCount].height*0.5);

    ctx1.restore();


 }