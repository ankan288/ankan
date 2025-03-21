document.addEventListener('DOMContentLoaded', function () {
    // 1. Toggle the Login Form
    const loginButton = document.querySelector('.btn-Login');
    const loginForm = document.getElementById('login-form');
    
    loginButton.addEventListener('click', function (event) {
        event.preventDefault();  // Prevents the link from refreshing the page
        if (loginForm.style.display === "block") {
            loginForm.style.display = "none";
        } else {
            loginForm.style.display = "block";
        }
    });

    // 2. Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                event.preventDefault();
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for fixed header if necessary
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Form Validation for Login Form
    const loginSubmitButton = document.querySelector('.login-button');
    const usernameInput = document.querySelector('.login-form input[type="text"]');
    const passwordInput = document.querySelector('.login-form input[type="password"]');
    
    loginSubmitButton.addEventListener('click', function (event) {
        if (usernameInput.value === '' || passwordInput.value === '') {
            event.preventDefault();
            alert('Please fill in both username and password fields.');
        }
    });

    // 4. Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent the form from submitting

        const emailInput = document.querySelector('.newsletter-input');
        if (emailInput.value === '') {
            alert('Please enter a valid email address.');
        } else {
            alert(`Thank you for subscribing, ${emailInput.value}!`);
            emailInput.value = '';  // Reset the input
        }
    });

    // 5. Section Fade-In on Scroll
    const sections = document.querySelectorAll('section');
    
    const fadeInSection = (section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 50) {  // Adjust this value to fine-tune when fade-in occurs
            section.classList.add('visible');
        }
    };

    const checkSectionsInView = () => {
        sections.forEach(section => fadeInSection(section));
    };

    window.addEventListener('scroll', checkSectionsInView);

    // Initially check if any sections are in view when the page loads
    checkSectionsInView();
});

 // Function to show the registration options
 function showRegisterOptions() {
    document.getElementById('login-form').style.display = 'none'; // Hide login form
    document.getElementById('register-options').style.display = 'block'; // Show registration options
}

// Function to show donor registration form
function showDonorForm() {
    document.getElementById('register-options').style.display = 'none'; // Hide registration options
    document.getElementById('donor-form').style.display = 'block'; // Show donor form
}

// Function to show requestor registration form
function showRequestorForm() {
    document.getElementById('register-options').style.display = 'none'; // Hide registration options
    document.getElementById('requestor-form').style.display = 'block'; // Show requestor form
}