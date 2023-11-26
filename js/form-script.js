function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
        alert('Please enter a valid name.');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }

    return true;
}
