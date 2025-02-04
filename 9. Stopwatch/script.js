const timer = document.querySelector(".timer");
const start = document.querySelector(".btn-start");
const pause = document.querySelector(".btn-pause");
const resume = document.querySelector(".btn-resume");
const restart = document.querySelector(".btn-restart");
const stop = document.querySelector(".btn-stop");

let minutes,
  seconds,
  counter,
  pauseTime,
  globalTime = 300;

//   start Button
start.addEventListener("click", () => startTimer(globalTime));
restart.addEventListener("click", () => {
  clearInterval(counter);
  time = 300;
  startTimer(time);
});

// pause
pause.addEventListener("click", () => {
  pauseTime = globalTime;
  console.log(pauseTime);
  clearInterval(counter);
  resume.classList.toggle("hidden");
  pause.classList.toggle("hidden");
});

// resume
resume.addEventListener("click", () => {
  startTimer(pauseTime);
  resume.classList.toggle("hidden");
  pause.classList.toggle("hidden");
});

stop.addEventListener("click", () => {
  timer.textContent = `00 : 00 : 00`;
  clearInterval(counter);
  globalTime = 300;
});

// Counter
function startTimer(time) {
  counter = setInterval(() => {
    minutes = Math.floor(time / 60);
    seconds = Math.floor(time % 60);

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    console.log(minutes, seconds);
    timer.textContent = `00 : ${minutes} : ${seconds}`;
    time -= 1;
    globalTime = time;
  }, 1000);
}
