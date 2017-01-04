var pollenObj=function()
{
	this.alive=[];//to live or not to live;bool
	this.x=[];
	this.y=[];
	this.l=[];
	this.spd=[];
	this.pollenType=[];
	this.red=new Image();
	this.yellow=new Image();
}

pollenObj.prototype.num=30;
pollenObj.prototype.init=function()//Initialize
{
	for(var i=0;i<this.num;i++)
	{
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.spd[i]=Math.random()*0.015+0.003;
	}
	this.red.src="./src/redpollen.png";
	this.yellow.src="./src/yellowpollen.png";
}
pollenObj.prototype.draw=function()//draw the pollen
{
	for(var i=0;i<this.num;i++)
	{ 
		//find a flower,grow,fly
		if(this.alive[i])
		{
			if(this.pollenType[i]=="yellow")
			{
				var pic=this.yellow;
			}
			else
			{
				var pic=this.red;
			}
			if(this.l[i]<=10)
			{
				this.l[i]+=this.spd[i]*deltaTime;
			}
			else
			{
				this.y[i]-=this.spd[i]*7*deltaTime;
			}
			ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			if(this.y[i]<10)
			{
				this.alive[i]=false;
			}
		}
	}
}
pollenObj.prototype.born=function(i)
{
	var flowerID=Math.floor(Math.random()*flower.num);
	this.x[i]=flower.x[flowerID];
	this.y[i]=canHeight-flower.len[flowerID];
	this.l[i]=0;
	this.alive[i]=true;
	var ran=Math.random();
	if(ran<0.25)
	{
		this.pollenType[i]="yellow";
	}
	else
	{
		this.pollenType[i]="red";
	}
}

 pollenObj.prototype.dead=function(i)
 {
   this.alive[i]=false;
 }

function pollenMonitor()
{
	var num = 0;
	for(var i=0; i<pollen.num;i++)
	{
		if (pollen.alive[i])num++;
	}
	if (num<15)
	{
		//send pollen
		sendPollen();
		return;
	} 
}
function sendPollen()
{
	for(var i=0;i<pollen.num;i++)
	{
		if(!pollen.alive[i])
		{
			pollen.born(i);
			return;
		}
	}
	
}