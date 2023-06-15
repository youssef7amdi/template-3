let ourSkills = document.getElementById("our-skills");
let spans = document.querySelectorAll(".progress");
let statsSection = document.getElementById("stats"),
  statsSpans = document.querySelectorAll(".num"),
  started = false;

function startCount(el) {
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == el.dataset.number) {
      console.log(el.dataset.number);
      clearInterval(count);
    }
  }, 1000 / el.dataset.number);
}

window.onscroll = function () {
  if (
    window.scrollY >= ourSkills.offsetTop - 300 &&
    window.scrollY < ourSkills.offsetTop + 800
  ) {
    spans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  } else if (window.scrollY >= ourSkills.offsetTop + 800) {
    spans.forEach((span) => (span.style.width = "0"));
  } else {
    spans.forEach((span) => (span.style.width = "0"));
  }

  if (
    window.scrollY >= statsSection.offsetTop - 400 &&
    window.scrollY < statsSection.offsetTop + 800
  ) {
    if (!started) {
      started = true;
      statsSpans.forEach((span) => startCount(span));
    }
  }
};

// Count Down
let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)),
    hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days < 10 ? `0${days}` : days;
  document.getElementById("hours").textContent =
    hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").textContent =
    minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").textContent =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) clearInterval(counter);
}, 1000);
