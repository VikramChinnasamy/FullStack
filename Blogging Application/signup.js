document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Simulate sign up success
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // You can add your own logic here for handling user sign-up
        
        // After successful sign-up, navigate to another page
        window.location.href = 'App.html'; // Replace with the actual welcome page URL
    });
});
