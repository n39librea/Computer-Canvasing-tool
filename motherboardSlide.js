var clrTime;
var temp=1;
		function processorBgChange()
		{
			clearTimeout(clrTime);
			document.getElementById("slides").src="processor/(1).jpg";
			clearTimeout(clrTime);
			console.log("processorBgChange")
			clrTime=setTimeout(function(){
				next(1);
			},5000)
		}
	
		function next(_counter) {
			counter = parseInt(_counter)	
			clearTimeout(clrTime);
			counter++;
			document.getElementById("slides").src="processor/("+ counter +").jpg";
			clearTimeout(clrTime);
			//console.log("temp value :"+ temp +"");
			//console.log("counter value :"+ counter +"");
			//document.getElementById("circle"+ temp +"").src = "images/DisableCircle.png";
			//document.getElementById("circle"+ counter +"").src = "images/EnableCircle.png";
			temp=counter;
			if(counter>=11)
			{
				counter=0;
				temp=11;
			}

			clrTime=setTimeout(function(){
				next(counter);
			},5000)

		}
		
		
		
		
		
		function harddiskBgChange()
		{
			console.log("harddiskBgChange")
			//clearTimeout(clrTime);
			document.getElementById("slides").src="hardDisk Drive/(1).jpg";
			clrTime=setTimeout(function(){
				nextHDD(1);
			},5000)
		}
	
		function nextHDD (_counter) {
			counter = parseInt(_counter)	
			clearTimeout(clrTime);
			counter++;
			document.getElementById("slides").src="hardDisk Drive/("+ counter +").jpg";
			clearTimeout(clrTime);
			//console.log("temp value :"+ temp +"");
			//console.log("counter value :"+ counter +"");
			//document.getElementById("circle"+ temp +"").src = "images/DisableCircle.png";
			//document.getElementById("circle"+ counter +"").src = "images/EnableCircle.png";
			temp=counter;
			if(counter>=11)
			{
				counter=0;
				temp=11;
			}

			clrTime=setTimeout(function(){
				nextHDD(counter);
			},5000)

		}
		
		
		
		
		
		function videoCardBgChange()
		{
			console.log("videoCardBgChange")
			clearTimeout(clrTime);
			document.getElementById("slides").src="videoCard/(1).jpg";
			clrTime=setTimeout(function(){
				nextVC(1);
			},5000)
		}
	
		function nextVC (_counter) {
			counter = parseInt(_counter)	
			clearTimeout(clrTime);
			counter++;
			document.getElementById("slides").src="videoCard/("+ counter +").jpg";
			clearTimeout(clrTime);
			//console.log("temp value :"+ temp +"");
			//console.log("counter value :"+ counter +"");
			//document.getElementById("circle"+ temp +"").src = "images/DisableCircle.png";
			//document.getElementById("circle"+ counter +"").src = "images/EnableCircle.png";
			temp=counter;
			if(counter>=11)
			{
				counter=0;
				temp=11;
			}

			clrTime=setTimeout(function(){
				nextVC(counter);
			},5000)

		}
		
		
		
		
		function powerSupplyBgChange()
		{
			console.log("powerSupplyBgChange")
			clearTimeout(clrTime);
			document.getElementById("slides").src="powerSupply/(1).jpg";
			clrTime=setTimeout(function(){
				nextPS(1);
			},5000)
		}
	
		function nextPS (_counter) {
			counter = parseInt(_counter)	
			clearTimeout(clrTime);
			counter++;
			document.getElementById("slides").src="powerSupply/("+ counter +").jpg";
			clearTimeout(clrTime);
			//console.log("temp value :"+ temp +"");
			//console.log("counter value :"+ counter +"");
			//document.getElementById("circle"+ temp +"").src = "images/DisableCircle.png";
			//document.getElementById("circle"+ counter +"").src = "images/EnableCircle.png";
			temp=counter;
			if(counter>=8)
			{ 
				counter=0;
				temp=8;
			}

			clrTime=setTimeout(function(){
				nextPS(counter);
			},5000)

		}