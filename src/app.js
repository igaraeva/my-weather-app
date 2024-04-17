function displayWeather(response) {
  console.log(response.data);
  let currentLocation = document.querySelector("#current-location");
  let currentTemperature = document.querySelector("#current-temperature-value");
  let temperature = response.data.temperature.current;
  let weatherDescription = document.querySelector("#weather-description");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");

  currentLocation.innerHTML = response.data.city;
  currentTemperature.innerHTML = Math.round(temperature);
  weatherDescription.innerHTML = response.data.condition.description;
  humidity.innerHTML = response.data.temperature.humidity;
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
