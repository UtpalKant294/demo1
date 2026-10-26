
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Clear old messages
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
    document.getElementById("successMessage").textContent = "";

    let valid = true;

    if (name === "") {
        nameError.textContent = "Enter your name.";
        valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Enter a valid email.";
        valid = false;
    }

    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        valid = false;
    }

    if (confirmPassword === "" || password !== confirmPassword) {
        confirmError.textContent = "Passwords do not match.";
        valid = false;
    }

    if (valid) {
        successMessage.textContent = "Registration successful!";
        form.reset();
    }
});
