const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const passwordMismatchError = document.getElementById('passwordMismatchError');
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');

        confirmPasswordInput.addEventListener('input', () => {
            if (confirmPasswordInput.value !== passwordInput.value) {
                passwordMismatchError.style.display = 'block';
            } else {
                passwordMismatchError.style.display = 'none';
            }
        });

        emailInput.addEventListener('input', () => {
            if (!emailInput.validity.valid) {
                emailError.style.display = 'block';
            } else {
                emailError.style.display = 'none';
            }
        });