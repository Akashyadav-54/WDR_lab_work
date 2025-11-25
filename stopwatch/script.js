let timer = false;
let ms = 0, sec = 0, min = 0;

function start() {

    //start only if not already running
    if (!timer) {
        timer = true;
        stopwatch();
    }
}

//stop function
function stop() {
    timer = false;
}

//reset function
function reset() {
    timer = false;
    ms = 0;
    sec = 0;
    min = 0;

    //update display to default
    document.getElementById("display").innerHTML = "00:00:00";
}

//main stopwatch
function stopwatch() {
    if (timer) {
        ms++;

        if (ms === 100) {
            sec++;
            ms = 0;
        }
        if (sec === 60) {
            min++;
            sec = 0;
        }

        // formatting numbers to two digits
        let m = min < 10 ? "0" + min : min;
        let s = sec < 10 ? "0" + sec : sec;
        let milli = ms < 10 ? "0" + ms : ms;

        //display updated time
        document.getElementById("display").innerHTML = `${m}:${s}:${milli}`;

        //run function again after 10milliseconds
        setTimeout(stopwatch, 10);
    }
}
