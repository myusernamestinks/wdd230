function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
        var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow (windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2);
    }
    else {
        return "N/A";
    }
}
var temperatureValue = parseFloat(document.getElementById("temperature").innerText);
var windSpeedValue = parseFloat(document.getElementById("windSpeed").innerText);
var windChillValue = calculateWindChill(temperatureValue, windSpeedValue);

document.getElementById("windChill").innerText = "Wind Chill: " + windChillValue + " °F";