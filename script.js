start = document.getElementById('start');
pause = document.getElementById('pause');
reset = document.getElementById('reset');

var Interval;

spanTens= document.getElementById('tens');
spanSeconds = document.getElementById('seconds');
spanMinutes = document.getElementById('minutes');

tens = 0;
seconds= 0;
minutes = 0;


start.addEventListener('click', function() {
    pause.classList.remove('clicked');
    start.classList.add('clicked');
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
});

pause.addEventListener('click', function() {
    start.classList.remove('clicked');
    pause.classList.add('clicked');
    clearInterval(Interval);
});

reset.addEventListener('click', function() {
    start.classList.remove('clicked');
    pause.classList.remove('clicked');
    clearInterval(Interval);
    tens= 0;
    seconds= 0;
    minutes = 0;
    spanTens.innerHTML = "0" + tens;
    spanSeconds.innerHTML = "0" + seconds;
    spanMinutes.innerHTML = "0" + minutes;
});


function startTimer () {
    tens++; 

    if (tens <10) {
        spanTens.innerHTML = "0" + tens;
    }

    if (tens >=10) {
        spanTens.innerHTML = tens;
    }

    if (tens > 99) {
        tens = 0;
        seconds++;
    }


    if (seconds <10) {
        spanSeconds.innerHTML = "0" + seconds;
    }

    if (seconds >=10) {
        spanSeconds.innerHTML = seconds;
    }
    

    if (seconds > 59) {
        seconds = 0;
        minutes++;
    }



    if (minutes <10) {
        spanMinutes.innerHTML = "0" + minutes;
    }

    if (minutes >=10) {
        spanMinutes.innerHTML = minutes;
    }

}
  

