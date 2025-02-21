document.addEventListener("DOMContentLoaded", function() {
    // Login passcode check
    window.checkPasscode = function() {
        const passcode = document.getElementById("passcode").value;
        const errorMessage = document.getElementById("error-message");
        const loginContainer = document.getElementById("login-container");
        const blogContent = document.getElementById("blog-content");

        if (passcode === "1234") { // Change this to your desired passcode
            loginContainer.style.display = "none";
            blogContent.style.display = "block";
            errorMessage.style.display = "none";
        } else {
            errorMessage.textContent = "Wrong passcode!";
            errorMessage.style.display = "block";
        }
    };

    // Back to Top button functionality
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
