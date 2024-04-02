document.addEventListener("DOMContentLoaded", function () {
    let currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerText = currentYear;
});

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    document.querySelector('nav ul').classList.toggle('open');
});

function validateForm() {
    var agreeCheckbox = document.getElementById("agree-checkbox");

    if (!agreeCheckbox.checked) {
        alert("Please agree to the Rental terms and agreement.");
        return false;
    }
    return true;
    
}
