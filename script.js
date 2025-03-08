function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '86fa6115983f4db8bfd172951252002'; // Your API key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
  
    
    document.getElementById('weather-result').innerHTML = '';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          document.getElementById('weather-result').innerHTML = `<p>City not found, please try again!</p>`;
        } else {
          const { location, current } = data;
          const weatherInfo = `
            <h2>Weather in ${location.name}, ${location.country}</h2>
            <p><strong>Temperature:</strong> ${current.temp_c}°C</p>
            <p><strong>Condition:</strong> ${current.condition.text}</p>
            <p><strong>Humidity:</strong> ${current.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${current.wind_kph} km/h</p>
          `;
          document.getElementById('weather-result').innerHTML = weatherInfo;
        }
      })
      .catch(error => {
        document.getElementById('weather-result').innerHTML = `<p>Failed to fetch weather data. Please try again later.</p>`;
      });
  }
  