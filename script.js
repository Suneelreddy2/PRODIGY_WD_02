let startbtn = document.querySelector('.start')
let stopbtn = document.querySelector('.stop')
let resetbtn = document.querySelector('.reset')
let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
startbtn.addEventListener('click', () => {
    timer = true;
    stopwatch();

})
stopbtn.addEventListener('click', () => {

    timer = false;

})
resetbtn.addEventListener('click', () => {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById('hr').innerText = "00";
    document.getElementById('min').innerText = "00";
    document.getElementById('sec').innerText = "00";
    document.getElementById('count').innerText = "00";

})
function stopwatch() {
    if (timer) {
        count++;

        if (count == 100) {
            sec++;
            count = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }

        if (min == 60) {
            hr++;
            min = 0;
            sec = 0;
        }
        let hrString = hr;
        let minString = min;
        let secString = sec;
        let countString = count;
        if (hrString < 10) {
            hrString = "0" + hrString;
        }
        if (minString < 10) {
            minString = "0" + minString;
        }
        if (secString < 10) {
            secString = "0" + secString;
        }
        if (countString < 10) {
            countString = "0" + countString;
        }
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopwatch, 7.2);
    }
}
