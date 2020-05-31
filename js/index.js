
	let stopTime = true;
	let timerIntvl = null;
	let hours = 0;
	let minutes = 0;
	let seconds = 0;
	let stringTime = ""
	let timeLimit = 0;


	function timeToDecimal(t) {
	    let arr = t.split(':');
	    let h = parseInt((arr[0]/6)*10, 10);
	    let m = parseInt(arr[1], 10);
	    let s = arr[2] * 0.1;

	    return parseFloat(h + m + s);
	}  


	function getTimeString(hours, minutes, seconds) {
		if(hours < 10) {
			hours = "0" + hours;  
		}

		if(minutes < 10) {
			minutes = "0" + minutes;
		}

		if(seconds < 10) {
			seconds = "0" + seconds;
		}

		return hours +":"+ minutes +":"+ seconds;
	}

    function timer() {
    	
    	// timeLimit = prompt("Please enter a time limit in hours");
    	timeLimit = 0.0825  
    	timerIntvl = setInterval(timerHelper, 1000);      
    }

	function timerHelper() {
	    if(seconds < 60 && minutes < 60) {
	  	    seconds++;
	    } else if(minutes < 60 && seconds >= 60) {
            minutes++;
            seconds = 0;
	    } else {
	  	    if(hours < timeLimit) {
		  	    hours++;
		  	    minutes = 0;
	        }
	    }



	    stringTime = getTimeString(hours, minutes, seconds);
	    let time = timeToDecimal(stringTime);
	    document.getElementById("timer_1").innerHTML = stringTime;
	    
	    let precentage = (time / timeLimit);
    	let rest = 1 - precentage;
    	document.getElementById("pie_1").style.backgroundImage = "conic-gradient(green "+precentage+"%, white "+rest+"%)";
	    console.log("stringTime: "+stringTime+" timeLimit: "+timeLimit+" time "+time+" precentage "+precentage+" rest "+rest);
	}

	function stopTimer() {
		if(timerIntvl) {
		  // console.log("index stoptimer time: "+t);
		  clearInterval(timerIntvl);
		}
	}

    document.getElementById('start_btn_1').addEventListener('click', timer());
    document.getElementById('stop_btn_1').addEventListener('click', stopTimer());

