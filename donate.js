document.addEventListener("DOMContentLoaded", function () {
    // Toggle login form visibility
    const loginBtn = document.getElementById("login-btn");
    const loginForm = document.getElementById("login-form");

    loginBtn.addEventListener("click", function () {
        loginForm.classList.toggle("hidden");
    });

    // Donation form validation and submission
    const donationForm = document.getElementById("donation-form");

    donationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission to server

        const donorName = document.getElementById("donorName").value.trim();
        const foodType = document.getElementById("foodType").value.trim();
        const quantity = document.getElementById("quantity").value.trim();
        const pickupLocation = document.getElementById("pickupLocation").value.trim();
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
        const email = document.getElementById("email").value.trim();

        // Validate phone number (10 digits only)
        if (!/^\d{10}$/.test(phoneNumber)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Validate email format
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Confirmation alert
        alert("Thank you, " + donorName + "! Your food donation has been submitted successfully.");
        
        // Reset the form
        donationForm.reset();
    });
});
