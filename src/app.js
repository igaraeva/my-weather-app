function displayWeather(response) {
  let currentLocation = document.querySelector("#current-location");
  let currentTemperature = document.querySelector("#current-temperature-value");
  let temperature = response.data.temperature.current;
  let weatherDescription = document.querySelector("#weather-description");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");
  let currentTime = document.querySelector("#current-time");
  let date = new Date(response.data.time * 1000);
  let weatherIcon = document.querySelector("#weather-icon");

  currentLocation.innerHTML = response.data.city;
  currentTemperature.innerHTML = Math.round(temperature);
  weatherDescription.innerHTML = response.data.condition.description;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeed.innerHTML = `${response.data.wind.speed} m/sec`;
  currentTime.innerHTML = formatDate(date);

  weatherIcon.innerHTML = `<img src="${response.data.condition.icon_url}" />`;
}

function formatDate(date) {
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let hours = date.getHours().toString().padStart(2, "0");
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekDays[date.getDay()];

  return `${day} ${hours}:${minutes}`;
}
function searchLocation(city) {
  let apiKey = "51f9883450a0f1682ta31o8477291fb1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function searchCityWeather(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector("#search-form-input");

  searchLocation(searchFormInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCityWeather);

searchLocation("London");
