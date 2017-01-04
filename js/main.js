var can1;
var can2;

var ctx1;
var ctx2;

var bigbutterfly;

var mx;
var my; 

var bigbutterflyBody=[];
var smallbutterflyBody=[];
var smallbody=[];
var restartPlay = new Image();     //for restart button at gameover
//var exitBtn = new Image();         //for exit button at gameover
var menuBtn = new Image();     		//for going back to home menu button at gameover
var audioBtnPlay = new Image();			//for audio play and pause
var audioBtnStop = new Image();
var audio = new Audio();

var canWidth;
var canHeight;
//Resolving the interval inconsistencies caused by function requestAnimationFrame 
var lastTime;//The time the previous frame was executed
var deltaTime;//Time interval between two frames

var backgroundpicture=new Image();

var backgroundMenupicture=new Image();

var flower;
var pollen;
var smallbutterfly;

var data; //Score

function gm() //game
{
	play();
}
function play() //game
{
	console.log("playexectured");
//	window.open();                          // opened a empty popup, and exit is still not working
	init();
	
	lastTime=Date.now();
	deltaTime=0;
	gmloop(); //gameloop
}

function init()
{
	//obtain the convas and context
	console.log("init executed");
	can1=document.getElementById("canvas1");//butterflies, dust, UI, circle
	ctx1=can1.getContext('2d');//draw 2D scene
	can2=document.getElementById('canvas2');//background, flowers, pollens
	ctx2=can2.getContext('2d'); 
	
	can1.addEventListener('mousemove', onMouseMove,false);
	can1.addEventListener('mousedown', MouseClick);
	backgroundpicture.src= "./src/background.jpg"
	audioBtnPlay.src = "./src/play.gif"
	audioBtnStop.src = "./src/pause.gif"
	canWidth=can1.width;
	canHeight=can1.height;

	flower=new flowerObj();
	flower.init();

	pollen=new pollenObj();
	pollen.init();

	bigbutterfly=new bigbutterflyObj();
	bigbutterfly.init();

	smallbutterfly=new smallbutterflyObj();
	smallbutterfly.init();

	mx=canWidth*0.5;
	my=canHeight*0.5;

	for(var i=0;i<4;i++)
	{
		bigbutterflyBody[i]=new Image();
		bigbutterflyBody[i].src="./src/bigbutterflyBody"+i+".png";
	}


	for(var i=0;i<4;i++)
	{
		smallbutterflyBody[i]=new Image();
		smallbutterflyBody[i].src="./src/smallbutterflyBody"+i+".png";
	}

    for (var i = 0; i < 4; i++) {
       
       smallbody[i]=new Image();
       smallbody[i].src="./src/small"+i+".png";

    }
    data = new dataObj();
    ctx1.font = "40px";  //Score
	ctx1.textAlign = "center"; //Score
	MusicControl();
}
function gmloop()
{
	window.requestAnimationFrame(gmloop);
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	if(deltaTime>40)deltaTime=49;
	drawbackground();
	flower.draw();
	pollenMonitor();
	pollen.draw();

	ctx1.clearRect(0,0,canWidth,canHeight);
	bigbutterfly.draw();

	bigPollensCollision();

	bigsmallcollision();

	smallbutterfly.draw();
    data.draw(); //Score
	ctx1.drawImage(audioBtnPlay,800,100);
	ctx1.drawImage(audioBtnStop,800,100);
}
function onMouseMove(e)
{
	if(!data.gameOver) {
		if(e.offSetX||e.layerX)
		{
			mx=e.offSetX==undefined?e.layerX:e.offSetX;
			my=e.offSetY==undefined?e.layerY:e.offSetY;
		}
	}
}
function MusicControl()
{
	//audio = new Audio();
	audio.src = "./src/dream.mp3";
	audio.loop = true;
	audio.play();
	ctx1.drawImage(audioBtnPlay,800,100);
	ctx1.drawImage(audioBtnStop,800,100);
}


function MouseClick(e)
{
	if(e.offSetX||e.layerX)
		{
			mx=e.offSetX==undefined?e.layerX:e.offSetX;
			my=e.offSetY==undefined?e.layerY:e.offSetY;
		}
		
	if(mx > 300 && mx < 300+118){						//dimensions of restart button in pixels					
				if(my > 330 && my < 330+56){
					fadeId = setInterval("fadeOut()", 1000/frames);
					clearInterval(timerId);
				}
			}
			
	if(mx > 500 && mx < 500+69){						//dimensions of home button in pixels					
				if(my > 335 && my < 335+39){
					window.location.assign("Honey.html");
				}
			}
/*	if(mx > 660 && mx < 660+57){						//dimensions of exit button in pixels					
				if(my > 330 && my < 330+40){
					window.close();
				}
			}
					
*/
	if(mx > 800 && mx < 800+100){						//dimensions of restart button in pixels					
		if(my > 100 && my < 100+50){
			if(audio.muted)
			{
				audio.muted=false;
				ctx1.audioBtnStop.style.display = "block";
				ctx1.audioBtnPlay.style.display = "none";
				//audioBtnPlay.ctx1.style.display = "none";
				//audioBtnStop.ctx1.style.display = "block";
				//ctx1. drawImage(audioBtnStop,800,100);
			}
			else
			{
				audio.muted = true;
				
				ctx1.audioBtnStop.style.display = "none";
				ctx1.audioBtnPlay.style.display = "block";
				
				//audioBtnStop.ctx1.style.display = "none";
				//audioBtnPlay.ctx1.style.display = "block";
				console.log("elsecase");
				//ctx1.drawImage(audioBtnPlay,800,100);
			}
		}
	}


}
