//Judge the distance between the big butterfly and the fruit
function bigPollensCollision()
{
      if(!data.gameOver){//Score
	for(var i = 0; i < pollen.num ; i++)
	{
        if (pollen.alive[i])
         {
         	var l= calLength2(pollen.x[i], pollen.y[i], bigbutterfly.x, bigbutterfly.y);
         	if (l<900)
         	{
         		pollen.dead(i);
                       data.pollenNum++; //Score
         	}
         }
	}
  }
}

//big small collision
function bigsmallcollision()
{
        if(data.pollenNum > 0 && !data.gameOver) {  //Score
        var l=calLength2(bigbutterfly.x,bigbutterfly.y,smallbutterfly.x,smallbutterfly.y)
        if (l<900) 
        {
               //small recover
                smallbutterfly.smallbodyCount=0;
                data.addScore(); //Score
               
        }
    }

}