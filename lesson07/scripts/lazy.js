document.addEventListener("DOMContentLoaded", function () {
    let currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerText = currentYear;

    let lastModifiedDate = new Date(document.lastModified);
    document.getElementById("lastModified").innerText = `Last modified: ${lastModifiedDate.toLocaleString()}`;
});
