async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "7b47c325f91108d7e2e4f144169beadf"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();

      const iconCode = data.weather[0].icon; // Get weather icon code
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // Weather icon URL

      const weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <img src="${iconUrl}" alt="Weather Icon">
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Condition: ${data.weather[0].description}</p>
      `;
      document.getElementById("weather-info").innerHTML = weatherInfo;
    } catch (error) {
      document.getElementById("weather-info").innerHTML = `<p>${error.message}</p>`;
    }
  }
