const startEl =document.getElementById("start")
const stopEl =document.getElementById("stop")
const resetEl =document.getElementById("reset")
const timerEl =document.getElementById("timer")

let interval
let timeAmount = 1500;

function updateTimer(){
    let minutes= Math.floor(timeAmount / 60);
    let seconds = timeAmount % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}
    :${seconds.toString().padStart(2, "0")}`;

    timerEl.innerHTML = formattedTime;
}

function startTimer(){
    interval = setInterval(()=>{
        timeAmount--;
        updateTimer();
        if (timeAmount === 0){
            clearInterval(interval);
            alert("Time's up!");
            timeAmount = 1500;
            // if you want to make it run again after resetting, you can include the next command
            // updateTimer();
        }
    }, 1000)
}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    timeAmount=1500;
    updateTimer();
}

// for the code to function
startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);

