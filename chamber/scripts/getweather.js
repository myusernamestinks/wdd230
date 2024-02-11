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

function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
}
function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
}

