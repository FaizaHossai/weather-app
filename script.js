const apiKey = "44c98d92aa7216bb4427982f3df8d8a9";

async function getWeather() {
  let city = document.getElementById("cityInput").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      document.getElementById("weatherResult").innerHTML =
        "<p>City not found.</p>";
      return;
    }

    document.getElementById("weatherResult").innerHTML = `
      <h3>${data.name}</h3>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>☁ Condition: ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML =
      "<p>Error getting weather data.</p>";
  }
}
