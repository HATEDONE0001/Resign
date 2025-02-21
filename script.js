const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Toggle sign-up and sign-in forms
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Sign-up form validation
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let message = document.getElementById("signup-message");

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
        message.textContent = "Please enter a valid email!";
        message.style.color = "red";
        return;
    }

    // Password validation
    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters!";
        message.style.color = "red";
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        message.style.color = "red";
        return;
    }

    // Name validation
    if (name.length < 3) {
        message.textContent = "Name must be at least 3 characters!";
        message.style.color = "red";
        return;
    }

    // If all checks pass
    message.textContent = "Sign-up successful!";
    message.style.color = "green";

    // Simulate successful registration (replace with backend logic later)
    setTimeout(() => {
        message.textContent = "";
    }, 3000);
});
