document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var agree = document.getElementById('agree').checked;

    // Check if the user agreed to terms and conditions
    if (!agree) {
        alert('Please agree to the terms and conditions.');
        return;
    }

    // Construct the user object
    var user = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password
    };

    // Convert user object to JSON string
    var userJSON = JSON.stringify(user);

    // Save user JSON to local storage
    localStorage.setItem('user', userJSON);

    alert('User signed up successfully!');

    // Redirect to login page
    window.location.href = 'login.html';
});
