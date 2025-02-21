document.addEventListener("DOMContentLoaded", function() {
    // Login passcode check
    window.checkPasscode = function() {
        const passcode = document.getElementById("passcode").value;
        const errorMessage = document.getElementById("error-message");
        const loginContainer = document.getElementById("login-container");
        const blogContent = document.getElementById("blog-content");

        if (passcode === "1234") { // Your passcode
            loginContainer.classList.add("glitch");
            setTimeout(() => {
                loginContainer.style.display = "none";
                blogContent.style.display = "block";
                loginContainer.classList.remove("glitch");
            }, 300);
            errorMessage.style.display = "none";
        } else {
            errorMessage.textContent = "Access Denied!";
            errorMessage.style.display = "block";
        }
    };

    // Hamburger menu toggle
    window.toggleMenu = function() {
        const menu = document.getElementById("menu");
        const hamburger = document.querySelector(".hamburger");
        menu.classList.toggle("active");
        hamburger.classList.toggle("active");
    };

    // Show section
    window.showSection = function(sectionId) {
        const sections = document.querySelectorAll(".section");
        sections.forEach(section => section.classList.remove("active"));
        document.getElementById(sectionId).classList.add("active");
        toggleMenu(); // Close menu after selection
    };

    // Back to Top button
    window.onscroll = function() {
        let button = document.getElementById("back-to-top");
        if (button) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }
        }
    };

    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
});
