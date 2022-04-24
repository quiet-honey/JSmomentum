const weatherWindow = document.querySelector("#weather");

function onGeoOk(position) {
  weatherWindow.classList.remove(HIDDEN_CLASSNAME);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const weatherIcon = document.querySelector("#weather img");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#city");
      const weatherInfo = document.querySelector("#weatherInfo");
      const weatherIconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      city.innerText = `${data.name}`;
      weatherInfo.innerText = `${Math.round(data.main.temp)}°C\n${
        data.weather[0].main
      }`;
      weatherIcon.setAttribute("src", weatherIconUrl);
    });
  weatherWindow.classList.add("weatherShow");
}
function onGeoError() {
  alert("Can't find your location. No weather information available.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
