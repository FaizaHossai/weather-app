function getWeather() {
  let city = document.getElementById("cityInput").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  document.getElementById("weatherResult").innerHTML =
    "<h3>Weather in " + city + "</h3>" +
    "<p>This is a demo weather app.</p>" +
    "<p>Temperature: 28°C</p>" +
    "<p>Condition: Sunny ☀️</p>";
}
