document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here you can add code to validate the credentials and handle the login process
    // For demonstration, let's just check if both fields are filled
    if (username && password) {
        // Redirect to dashboard page after successful login
        window.location.href = 'dashboard.html';
    } else {
        alert('Please enter both username and password.');
    }
});
