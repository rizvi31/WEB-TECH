document.getElementById('registration').addEventListener('click', function () {
    const fullName = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmed_password').value;
    const dobInput = document.getElementById('dateOfBirth').value;
    const country = document.getElementById('country').value;
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const acceptedTerms = document.getElementById('terms').checked;

    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d).{8,}$/;

    // Validate name
    if (!nameRegex.test(fullName)) {
        alert("Name must only contain letters and spaces.");
        return;
    }

    // Validate email
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and contain at least one number.");
        return;
    }

    // Confirm password match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Validate DOB
    if (!dobInput) {
        alert("Please enter your date of birth.");
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();
    const ageLimit = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

    if (dob > ageLimit) {
        alert("You must be at least 18 years old.");
        return;
    }

    // Validate country
    if (!country) {
        alert("Please select a country.");
        return;
    }

    // Validate gender selection
    if (!genderElement) {
        alert("Please select your gender.");
        return;
    }

    // Check if terms and conditions are accepted
    if (!acceptedTerms) {
        alert("You must agree to the terms and conditions.");
        return;
    }

    // If all validations pass
    alert("Registration successful!");
});
