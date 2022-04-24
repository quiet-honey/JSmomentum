const calendar = document.querySelector("#calendar");

function getCalendar() {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dayOfWeek = week[date.getDay()];
  calendar.innerText = `${year}.${month}.${day} (${dayOfWeek})`;
}

getCalendar();
