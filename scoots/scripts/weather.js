const apiKey = "ad014efe3e7c273ec40663e1ad87abb5";
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=20.4215&lon=-86.9258&appid=${apiKey}&units=imperial`;

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

function getNextDayForecast(weatherData) {
    if (!weatherData || !weatherData.list) {
        console.error("No forecast data available");
        return null;
    }

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowMidnight = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 0, 0, 0);
    const tomorrow3PM = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 15, 0, 0);

    const tomorrowForecast = weatherData.list.find(forecast => {
        const forecastDate = new Date(forecast.dt * 1000);
        return forecastDate >= tomorrowMidnight && forecastDate < tomorrow3PM;
    });

    if (!tomorrowForecast) {
        console.error("No forecast available for tomorrow at 3pm");
        return null;
    }

    const temperature = Math.round(tomorrowForecast.main.temp);
    return `Forecast for tomorrow at 3pm: ${temperature}°F`;
}

async function initWeather() {
    const weatherData = await fetchWeather();
    const nextDayForecast = getNextDayForecast(weatherData);
    displayWeatherInfo(weatherData, nextDayForecast);
}

function displayWeatherInfo(weatherData, nextDayForecast) {
    if (!weatherData) {
        console.error("No weather data available");
        return;
    }

    const currentTemperature = weatherData.list[0].main.temp;
    const currentHumidity = weatherData.list[0].main.humidity;
    const weatherDescription = weatherData.list[0].weather[0].description;
    const weatherIcon = weatherData.list[0].weather[0].icon;

    const weatherInfoElement = document.getElementById("weather-info");
    weatherInfoElement.innerHTML = `
        <div>
            <h2>Current Weather</h2>
            <img src="https://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather Icon">
            <p>Temperature: ${currentTemperature}°F</p>
            <p>Humidity: ${currentHumidity}%</p>
            <p>Description: ${weatherDescription}</p>
            <p>${nextDayForecast}</p>
        </div>
    `;

    const maxTemperature = Math.round(currentTemperature);
    displayWeatherBanner(maxTemperature);
}

function displayWeatherBanner(maxTemperature) {
    const weatherBanner = document.getElementById("weather-banner");
    const maxTempElement = document.getElementById("max-temp");
    maxTempElement.textContent = `Today's Max Temperature: ${maxTemperature}°F`;
    weatherBanner.style.display = "block";
}

async function closeWeatherBanner() {
    const weatherBanner = document.getElementById("weather-banner");
    weatherBanner.style.display = "none";
}

initWeather();

document.getElementById("close-banner").addEventListener("click", closeWeatherBanner);
