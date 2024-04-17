function searchCityWeather(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector("#search-form-input");
  let currentLocation = document.querySelector("#current-location");
  currentLocation.innerHTML = searchFormInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCityWeather);
