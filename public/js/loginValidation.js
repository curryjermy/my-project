const loginForm = document.querySelector(".form-horizontal .login-btn").addEventListener("click", (event)=>{
    const valid = true;

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    errorEmail = document.getElementById("error-email");
    errorPassword = document.getElementById("error-password");

    if (!email){
        errorEmail.textContent = "fill in field";
        valid = false;
    } else {
        errorEmail.textContent = "";
    }
    if (!password){
        errorPassword.textContent = "fill in field";
        valid = false;
    } else {
        errorPassword.textContent = "";
    }


    if (valid){
        alert("logined in successfully");
    } else {
        event.preventDefault();
    }

})