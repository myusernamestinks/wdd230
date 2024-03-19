const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastList = document.querySelector('#forecast-list'); 

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

document.addEventListener('DOMContentLoaded', function() {

fetch('https://myusernamestinks.github.io/wdd230/data/members.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  })
  .then(data => {
    console.log('Fetched data:', data); 

    if (data && data.members && Array.isArray(data.members)) {
      const members = data.members;

      const spotlightMembers = members.filter(member => member.membership_level === 'Gold' || member.membership_level === 'Silver');

      const randomMembers = getRandomMembers(spotlightMembers, 2);

      randomMembers.forEach(member => {
        displaySpotlightCard(member);
      });
    } else {
      console.error('Data is not in the expected format.');
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function getRandomMembers(members, count) {
  const shuffled = members.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function displaySpotlightCard(member) {
  const spotlightSection = document.getElementById('spotlight-section');
  const card = document.createElement('div');
  card.classList.add('spotlight-card');
  card.innerHTML = `
    <h3>${member.name}</h3>
    <p>Membership Level: ${member.membership_level}</p>
    <p>Email: ${member.website}</p>
    <p>Phone: ${member.phone}</p>
  `;
  spotlightSection.appendChild(card);
}
});