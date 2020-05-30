
	let stopTime = true;
	let timerIntvl = null;
    let halfTimerIntvl = 0;
	let hours = 0;
	let minutes = 0;
	let seconds = 0;
	let stringTime = ""
	let timeLimit = 0;
	let halfTimeLimit = 0;
	let degrees = 0;

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
    	timerIntvl = setInterval(timerHelper, 1000);
    	// timeLimit = prompt("Please enter a time limit in hours");
    	timeLimit = 0.0825
    	halfTimeLimit = timeLimit / 2.0;
    	halfTimerIntvl = timerIntvl / 2.0;
        degrees = 180 / halfTimerIntvl;
        let segment_a = document.getElementById('pie_segment_a_1');
        let segment_b = document.getElementById('pie_segment_b_1');
        // if(timerIntvl < halfTimeLimit) {
        //     segment_a.style.transform = "translate(0, 100%) rotate("+(180)+"deg)";
        //     segment_a.style.transform = "translate(0, 100%) rotate("+(degrees)+"deg)";
        // } else {
        // 	segment_a.style.transform = "translate(0, 100%) rotate("+(degrees)+"deg)";
        //     segment_a.style.transform = "translate(0, 100%) rotate("+(0)+"deg)";
        // }
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

	    document.getElementById("timer_1").innerHTML = stringTime;
	    console.log("index - timer: "+stringTime);
	}

	function stopTimer() {
		if(timerIntvl) {
		  // console.log("index stoptimer time: "+t);
		  clearInterval(timerIntvl);
		}
	}

    document.getElementById('start_btn_1').addEventListener('click', timer());
    document.getElementById('stop_btn_1').addEventListener('click', stopTimer());

