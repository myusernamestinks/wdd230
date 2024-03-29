const apiKey = "ad014efe3e7c273ec40663e1ad87abb5";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=20.4215&lon=-86.9258&appid=${apiKey}&units=imperial`;

async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather:", error);
        return null;
    }
}

function displayWeatherInfo(weatherData) {
    if (!weatherData) {
        console.error("No weather data available");
        return;
    }

    const currentTemperature = weatherData.main.temp;
    const currentHumidity = weatherData.main.humidity;
    const weatherDescription = weatherData.weather[0].description;
    const weatherIcon = weatherData.weather[0].icon;


    const weatherInfoElement = document.getElementById("weather-info");
    weatherInfoElement.innerHTML = `
        <div>
            <h2>Current Weather</h2>
            <img src="https://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather Icon">
            <p>Temperature: ${currentTemperature}°F</p>
            <p>Humidity: ${currentHumidity}%</p>
            <p>Description: ${weatherDescription}</p>
           
        </div>
    `;
}

async function initWeather() {
    const weatherData = await fetchWeather();
    displayWeatherInfo(weatherData);
    
}

initWeather();