const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastList = document.querySelector('#forecast-list'); // Add this line to select the forecast list element

const latitude = 27.80;
const longitude = -97.30;
const apiKey = 'ad014efe3e7c273ec40663e1ad87abb5';
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {

    currentTemp.innerHTML = `${data.list[0].main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    const desc = data.list[0].weather[0].description; 
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;

   
    forecastList.innerHTML = "";
    const today = new Date();
    const nextThreeDays = [new Date(today), new Date(today), new Date(today)]; 
    nextThreeDays.forEach((day, index) => {
        day.setDate(today.getDate() + index + 1);
    });

    const forecastItems = data.list.filter(item => {
        const itemDate = new Date(item.dt_txt);
        return nextThreeDays.some(day => day.getDate() === itemDate.getDate());
    });

    forecastItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${new Date(item.dt_txt).toDateString()}: ${item.main.temp}&deg;F - ${item.weather[0].description}`;
        forecastList.appendChild(listItem);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("banner");
    const closeBannerBtn = document.getElementById("closeBanner");

    const currentDay = new Date().getDay();

    if (currentDay >= 1 && currentDay <= 3) {
        banner.style.display = "block";
    }

    closeBannerBtn.addEventListener("click", function() {
        banner.style.display = "none";
    });
});

//document.addEventListener("DOMContentLoaded", function() {
    //const banner = document.getElementById("banner");
    //const closeBannerBtn = document.getElementById("closeBanner");

    
    //const testDay = 1; 

    
    //if (testDay >= 1 && testDay <= 3) {
        //banner.style.display = "block";
    //}

    
    //closeBannerBtn.addEventListener("click", function() {
        //banner.style.display = "none";
    //});
//});
