"use strict";
//form validations login and sigup pages or tabes
// TypeScript Signup Form
const API_URL = "http://localhost:3000";
const API_URL_USER = `${API_URL}/user`;
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
// // ///Tab 
loginTab.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    loginTab.classList.add('border-blue-600');
    signupTab.classList.remove('border-blue-600');
});
//Tab
signupTab.addEventListener('click', () => {
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    signupTab.classList.add('border-blue-600');
    loginTab.classList.remove('border-blue-600');
});
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("login-email");
    const passwordInput = document.getElementById("login-password");
    const loginButton = document.getElementById("button");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    // Disable button initially
    loginButton.disabled = true;
    loginButton.classList.add("opacity-50", "cursor-not-allowed");
    function validateInputs() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        if (!email || !password) {
            loginButton.disabled = true;
            loginButton.classList.add("opacity-50", "cursor-not-allowed");
        }
        else {
            loginButton.disabled = false;
            loginButton.classList.remove("opacity-50", "cursor-not-allowed");
        }
    }
    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.classList.add("border-red-500");
            emailError.textContent = "Invalid email format";
        }
        else {
            emailInput.classList.remove("border-red-500");
            emailError.textContent = "";
        }
    }
    emailInput.addEventListener("input", () => {
        validateEmail();
        validateInputs();
    });
    passwordInput.addEventListener("input", validateInputs);
    ///logi page///
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        try {
            const response = await fetch(`${API_URL_USER}?email=${email}&password=${password}`); // Fetch JSON file
            const users = await response.json();
            const user = users.find((user) => user.email === email && user.password === password);
            if (user) {
                // Store user data in local storage
                localStorage.setItem("loggedInUser", JSON.stringify(user));
                if (user.password === password) {
                    alert("welcome," + user.firstName + "!");
                }
                window.location.href = "wather.html"; // Redirect
            }
            else {
                passwordInput.classList.add("border-red-500");
                passwordError.textContent = "Incorrect   password";
                passwordInput.classList.remove("border-red-500");
            }
        }
        catch (error) {
            console.error("Error fetching user data:", error);
        }
    });
});
///////Signup page//////Form Vlaidations
document.addEventListener("DOMContentLoaded", () => {
    const API_URL = "http://localhost:3000";
    const API_URL_USER = `${API_URL}/user`;
    const fname = document.getElementById("signup-fname");
    const lname = document.getElementById("signup-lname");
    const email = document.getElementById("signup-email");
    const password = document.getElementById("signup-password");
    const cpassword = document.getElementById("signup-cpassword");
    const btn = document.getElementById("btn");
    const form = document.getElementById("signupForm");
    const errors = {
        fname: document.getElementById("fError"),
        lname: document.getElementById("lError"),
        email: document.getElementById("EError"),
        password: document.getElementById("PError"),
        cpassword: document.getElementById("CError")
    };
    function validate() {
        let isValid = true;
        if (!/^[a-zA-Z]+$/.test(fname.value)) {
            errors.fname.textContent = "Only letters allowed";
            fname.classList.add("border-red-500");
            isValid = false;
        }
        else {
            errors.fname.textContent = "";
            fname.classList.remove("border-red-500");
        }
        if (!/^[a-zA-Z]+$/.test(lname.value)) {
            errors.lname.textContent = "Only letters allowed";
            lname.classList.add("border-red-500");
            isValid = false;
        }
        else {
            errors.lname.textContent = "";
            lname.classList.remove("border-red-500");
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            errors.email.textContent = "Invalid email format";
            email.classList.add("border-red-500");
            isValid = false;
        }
        else {
            errors.email.textContent = "";
            email.classList.remove("border-red-500");
        }
        if (password.value.length < 6) {
            errors.password.textContent = "Password must be at least 6 characters";
            password.classList.add("border-red-500");
            isValid = false;
        }
        else {
            errors.password.textContent = "";
            password.classList.remove("border-red-500");
        }
        if (cpassword.value !== password.value) {
            errors.cpassword.textContent = "Passwords do not match";
            cpassword.classList.add("border-red-500");
            isValid = false;
        }
        else {
            errors.cpassword.textContent = "";
            cpassword.classList.remove("border-red-500");
        }
        btn.disabled = !isValid;
    }
    [fname, lname, email, password, cpassword].forEach(input => {
        input.addEventListener("input", validate);
        input.addEventListener("focus", () => {
            errors[input.id].textContent = "";
            input.classList.remove("border-red-500");
        });
    });
    btn.disabled = true;
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const userData = {
            firstName: fname.value,
            lastName: lname.value,
            email: email.value,
            password: password.value
        };
        fetch(API_URL_USER, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(data => {
            console.log("User data saved:", data);
            alert("Signup successful!  Please log in");
            signupForm.classList.add("hidden");
            loginForm.classList.remove("hidden");
            btn.disabled = true;
        })
            .catch(error => console.error("Error saving data:", error));
    });
});
