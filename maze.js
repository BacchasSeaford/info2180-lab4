var p = 0;
window.onload = function() {
		var x = document.getElementById("boundary1");
		x.addEventListener("mouseover", function changecolor(){
		x.setAttribute('class', 'boundary youlose');}); 
		
		glow_Red();
		end();
		start();
		
}

function glow_Red(){
	var wb = document.querySelectorAll("div.boundary"); 
		for(var i = 0; i < wb.length; i++) {
			wb[i].addEventListener('mouseover',function allwall(){
				for (var k = 0; k < wb.length; k++)
				{				
					wb[k].setAttribute('class','boundary youlose');
					p += 1;
					
				} 
			});
		} 
}

function end(){	
	var end1 = document.getElementById("end");
	console.log(p)
	 end1.addEventListener("mouseover", function finish(){
		if ( p === 0){ 		   
			alert("You won");
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
			});	
}
