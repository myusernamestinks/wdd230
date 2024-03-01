document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const formMessage = document.getElementById("formmessage");

    function handleSubmit(event) {
        event.preventDefault();
        if (passwordInput.value !== confirmPasswordInput.value) {
            formMessage.textContent = "Passwords DO NOT MATCH!";
        } else {
            form.submit();
        }
    }

    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
});