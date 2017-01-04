var flowerObj=function()
{
	this.x=[];
	this.len=[];
};;;;;;;;
flowerObj.prototype.num=20;
flowerObj.prototype.init=function()
{
    for(var i=0; i<this.num; i++)
    {
    	this.x[i]= i * 50+Math.random() *  20;
    	this.len[i]= 150 + Math.random() * 100;
    }
};;;;;;;;
flowerObj.prototype.draw=function()
{
    for (var i=0;i<this.num;i++)
    {
    	ctx2.beginPath();
    	ctx2.moveTo(this.x[i],canHeight);
    	ctx2.lineTo(this.x[i],canHeight-this.len[i]);
    	ctx2.lineWidth=5;
    	ctx2.lineCap="round";
    	ctx2.strokeStyle="green";
    	ctx2.stroke();
        ctx2.beginPath();
        ctx2.arc(this.x[i],canHeight-this.len[i],20,0,2*Math.PI);
        ctx2.lineWidth=15;
        ctx2.strokeStyle="red";
        ctx2.stroke();
        ctx2.fillStyle="yellow";
        ctx2.fill();
        ctx2.beginPath();
        ctx2.moveTo(this.x[i],canHeight-this.len[i]+20);
        ctx2.quadraticCurveTo(this.x[i]+25,canHeight-this.len[i]+45,this.x[i]+20,canHeight-this.len[i]);
        ctx2.stroke();
        ctx2.fillStyle="red";
        ctx2.fill();
        ctx2.beginPath();
        ctx2.moveTo(this.x[i],canHeight-this.len[i]-20);
        ctx2.quadraticCurveTo(this.x[i]+25,canHeight-this.len[i]-45,this.x[i]+20,canHeight-this.len[i]);
        ctx2.stroke();
        ctx2.fillStyle="red";
        ctx2.fill();
        ctx2.beginPath();
        ctx2.moveTo(this.x[i]+11,canHeight-this.len[i]-15);
        ctx2.quadraticCurveTo(this.x[i]+55,canHeight-this.len[i],this.x[i]+11,canHeight-this.len[i]+15);
        ctx2.stroke();
        ctx2.fillStyle="red";
        ctx2.fill();

        ctx2.beginPath();
        ctx2.moveTo(this.x[i],canHeight-this.len[i]+20);
        ctx2.quadraticCurveTo(this.x[i]-25,canHeight-this.len[i]+45,this.x[i]-20,canHeight-this.len[i]);
        ctx2.stroke();
        ctx2.fillStyle="red";
        ctx2.fill();
        ctx2.beginPath();
        ctx2.moveTo(this.x[i],canHeight-this.len[i]-20);
        ctx2.quadraticCurveTo(this.x[i]-25,canHeight-this.len[i]-45,this.x[i]-20,canHeight-this.len[i]);
        ctx2.stroke();
        ctx2.fillStyle="red";
        ctx2.fill();
        ctx2.beginPath();
        ctx2.moveTo(this.x[i]-11,canHeight-this.len[i]-15);
        ctx2.quadraticCurveTo(this.x[i]-55,canHeight-this.len[i],this.x[i]-11,canHeight-this.len[i]+15);
        ctx2.stroke();
        ctx2.fillStyle="red";
        ctx2.fill();
        ctx2.globalAlpha=0.7;
    }
};;;;;;;;