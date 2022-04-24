const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  var hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  var meridiem = " AM";
  if (hours >= 12) {
    hours = hours - 12;
    meridiem = " PM";
    if (hours == 0) {
      hours = 12;
    }
  }
  clock.innerText = `${hours}:${minutes}:${seconds} ${meridiem}`;
}

getClock();
setInterval(getClock, 1000);
