window.onload = function () {

  const hourDisplay = document.getElementById("hours");
  const minuteDisplay = document.getElementById("minutes");
  const secondDisplay = document.getElementById("seconds");

  const hourHand = document.getElementById("hh");
  const minuteHand = document.getElementById("mm");
  const secondHand = document.getElementById("ss");

  const hourHandDot = document.querySelector(".hr_dot");
  const minuteHandDot = document.querySelector(".mnt_dot");
  const secondHandDot = document.querySelector(".sec_dot");

  function getTimeParts() {
    const timeZone = document.getElementById("timezones").value;
    const date = new Date().toLocaleString("en-US", { timeZone: timeZone });

    const time = new Date(date);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return { hours, minutes, seconds };
  }

  function updateClockDisplay(hours, minutes, seconds) {
    hourDisplay.innerHTML = `${hours}<br><span>Hours</span>`;
    minuteDisplay.innerHTML = `${minutes}<br><span>Minutes</span>`;
    secondDisplay.innerHTML = `${seconds}<br><span>Seconds</span>`;
  }

  function updateClockHands(hours, minutes, seconds) {
    hourHand.style.strokeDashoffset = 440 - (440 * hours) / 24;
    minuteHand.style.strokeDashoffset = 440 - (440 * minutes) / 60;
    secondHand.style.strokeDashoffset = 440 - (440 * seconds) / 60;

    hourHandDot.style.transform = `rotate(${hours * 15}deg)`;
    minuteHandDot.style.transform = `rotate(${minutes * 6}deg)`;
    secondHandDot.style.transform = `rotate(${seconds * 6}deg)`;
  }

  function updateClock() {
    const { hours, minutes, seconds } = getTimeParts();
    updateClockDisplay(hours, minutes, seconds);
    updateClockHands(hours, minutes, seconds);
  }

  setInterval(updateClock, 1000);

  document.getElementById("timezones").addEventListener("change", updateClock);

}
