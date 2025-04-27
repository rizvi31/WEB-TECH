document.getElementById('registration').addEventListener('click', function (e) {
    const fullName = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmed_password = document.getElementById('confirmed_password').value;
    const dateOfBirthValue = document.getElementById('dateOfBirth').value;
    const dateOfBirth = new Date(dateOfBirthValue);
    const checkName = /^[a-zA-Z\s]+$/.test(fullName); // Allow spaces in names
    const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const checkPassword = /^(?=.*\d).{8,}$/.test(password);
    const country = document.getElementById("country").value;
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const gender = genderElement ? genderElement.value : null;
    const isChecked = document.getElementById("terms").checked;
    const today = new Date();

    // Check name
    if (!checkName) {
        return alert("Username must be filled up and it can't contain numbers or special characters.");
    }
    console.log(fullName);

    // Check valid email
    if (!checkEmail) {
        return alert("Please provide a valid email.");
    }
    console.log(email);

    // Password validation
    if (!checkPassword || password !== confirmed_password) {
        return alert("Password must be at least 8 characters long and contain at least one number. Confirm password must match.");
    }
    console.log(password);

    // Age validation
    if (!dateOfBirthValue || isNaN(dateOfBirth)) {
        return alert("Please enter a valid date of birth.");
    }

    // Calculate 18 years ago from today
    const ageLimitDate = new Date();
    ageLimitDate.setFullYear(today.getFullYear() - 18);

    if (dateOfBirth > ageLimitDate) {
        return alert("You must be at least 18 years old.");
    }
    console.log(dateOfBirth);

    // Country validation
    if (!country) {
        return alert("Please select a country.");
    }
    console.log(country);

    // Gender validation
    if (!gender) {
        return alert("Please select a gender.");
    }
    console.log(gender);

    // Terms and conditions validation
    if (!isChecked) {
        return alert("You must agree to the terms and conditions.");
    }
    console.log("Terms and conditions accepted.");

    // If all validations pass
    alert("Registration successful!");
});