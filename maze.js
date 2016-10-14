window.onload = function() {
		var x = document.getElementById("boundary1");
		x.addEventListener("mouseover", function changecolor(){
		x.setAttribute('class', 'boundary youlose');}); 
		
		glow_Red();
}

function glow_Red(){
	var wb = document.querySelectorAll("div.boundary");
		for(var i = 0; i < wb.length; i++) {
			wb[i].addEventListener('mouseover',function allwall(){
			for (var k = 0; k < wb.length; k++){				
			wb[k].setAttribute('class','boundary youlose');
			}
		});
		}
}