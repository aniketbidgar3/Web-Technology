// script.js

function validateForm() {
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;

    if (name === "" || mobile === "" || email === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Additional validation for mobile number and email can be added here
}
