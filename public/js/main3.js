
console.clear();
const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');
// movements to help slide up the signup page
loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});
signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

document.addEventListener("DOMContentLoaded", () => {
    // Signup form validation
    const signupForm = document.querySelector(".signup .submit-btn");
    signupForm.addEventListener("click", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!name) {
            alert("Name is required");
            return;
        }
        if (!email) {
            alert("Email is required");
            return;
        }
        if (!validateEmail(email)) {
            alert("Please enter a valid email address");
            return;
        }
        if (!password) {
            alert("Password is required");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }

        // Form is valid, submit the form
        alert("Signup successful!");
    });

    // Login form validation
    const loginForm = document.querySelector(".login .submit-btn");
    loginForm.addEventListener("click", (event) => {
        event.preventDefault();

        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        if (!email) {
            alert("Email is required");
            return;
        }
        if (!validateEmail(email)) {
            alert("Oops invalid email");
            return;
        }
        if (!password) {
            alert("Password is required");
            return;
        }

        // Form is valid, submit the form
        alert("Login successful!");
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(String(email).toLowerCase());
    }
});


