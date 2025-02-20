var timer = 60;
var score = 0;
var hitrn = 0;

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore() {
  score += 5;
  document.querySelector("#scoreval").textContent = score;
}

function makeBubble() {
  var clutter = "";
  for (var i = 0; i <= 159; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector(".panel2").style.display = "block";
      document.querySelector(
        ".panel2"
      ).innerHTML = `<div class="final"><p>Your Score is</p><br>${score}</div>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickTheNum = Number(dets.target.textContent);
  if (clickTheNum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

runTimer();
makeBubble();
getNewHit();
