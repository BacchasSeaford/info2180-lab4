var p = 0;
window.onload = function() {
		var x = document.getElementById("boundary1");
		x.addEventListener("mouseover", function changecolor(){
		x.setAttribute('class', 'boundary youlose');}); 
		glow_Red();
		end();
		start();
		nocheat();
		
}

function glow_Red(){
	var wb = document.querySelectorAll("div.boundary"); 
		for(var i = 0; i < wb.length; i++) {
			wb[i].addEventListener('mouseover',function allwall(){
				for (var k = 0; k < wb.length; k++)
				{				
					wb[k].setAttribute('class','boundary youlose');
					p += 1;
					document.getElementById('status').innerHTML="You lose";
					
				} 
			});
		} 
}

function end(){	
	var end1 = document.getElementById("end");
	 end1.addEventListener('mouseover', function finish(){
		 var result = document.getElementById("status");
		if ( p === 0){ 		   
			result.innerHTML= "You win";
			}
		else {
			result.innerHTML="You lose";
		}
	 });
}

function start(){
	var start= document.getElementById("start");
	var reseet =document.querySelectorAll("div.boundary")
		start.addEventListener('click', function clearwall(){
			for (var k = 0; k < reseet.length; k++)
			{				
				reseet[k].setAttribute('class','boundary');				
			} 
				p = 0;
				document.getElementById('status').innerHTML="Move your mouse over the \"S\" to begin";

			});	
}
 function nocheat(){
		var bounds = document.getElementById('body');
		var sws = document.querySelectorAll("div.boundary"); 
		var x = 0;
		var y = 0;
		bounds.addEventListener('mouseover', function showCoords(){
		x = event.clientX;
	    y = event.clientY;
		if (x < 209 || x > 709 || y < 126 | y > 426)
			{
				for (var i = 0; i < sws.length; i++)
					{
					sws[i].setAttribute('class','boundary youlose');
					}
					document.getElementById("status").innerHTML="You lose";
			}
		});
		
	}