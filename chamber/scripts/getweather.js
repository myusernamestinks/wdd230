document.addEventListener("DOMContentLoaded", function () {
    let currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerText = currentYear;

    let lastModifiedDate = new Date(document.lastModified);
    document.getElementById("lastModified").innerText = `Last modified: ${lastModifiedDate.toLocaleString()}`;
});

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    document.querySelector('nav ul').classList.toggle('open');
});

const modeSwitch = document.getElementById("modeSwitch");

modeSwitch.addEventListener("change", function() {
    const body = document.body;

    if (modeSwitch.checked) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
});

function getGreeting() {
    //let lastVisit = new Date(localStorage.getItem("lastVisit")).getTime();
    let lastVisit = localStorage.getItem("lastVisit")
    let currentDate = Date.now();


    if (lastVisit == null) {
        return "Welcome! Let us know if you have any questions.";
    }

 
    if ((currentDate - lastVisit) / 3600000 < 24) {
        return "Back so soon! Awesome!";
    }

    let daysSinceVisit = Math.floor(getLastVisitDays(currentDate, lastVisit));


    if (daysSinceVisit == 1) {
        return "You last visited 1 day ago.";
    }

    return `You last visited ${Math.floor(daysSinceVisit)} days ago.`;
}

function getLastVisitDays(currentDated, lastVisitg) {
    return (currentDated - lastVisitg) / 86400000;
}

function storeVisitDate() {
    localStorage.setItem("lastVisit", Date.now());
    //let newDate = new Date('2024-2-17');
    //localStorage.setItem("lastVisit", newDate);
}

const lastVisitText = document.getElementById("lastVisit");
lastVisitText.innerText = getGreeting();
storeVisitDate();

document.getElementById('form-loaded-time').value = Date.now();