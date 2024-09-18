const signuForm = document.querySelector(".form-horizontal .submit-btn").addEventListener("click", (event) =>{
    let valid = true;

    const username = document.getElementById("userName").value;
    const Role = document.getElementById("role").value;
    const Branch = document.getElementById("branch").value;
    const Email = document.getElementById("email").value;
    const Password = document.getElementById("password").value;

    const errorUserName = document.getElementById("error-username");
    const errorRole = document.getElementById("error-role");
    const errorBranch = document.getElementById("error-branch");
    const errorEmail = document.getElementById("error-email");
    const errorPassword = document.getElementById("error-password");

    if (!username){
        errorUserName.textContent = "fill in field!";
        valid = false;
    } else {
        errorUserName.textContent = "";
    }
    if (!Role){
        errorRole.textContent = "fill in field!";
        valid = false;
    } else {
        errorRole.textContent = "";
    }
    if (!Branch){
        errorBranch.textContent = "fill in field!";
        valid = false;
    } else {
        errorBranch.textContent = "";
    }
    if (!Email){
        errorEmail.textContent = "fill in field!";
        valid = false;
    } else {
        errorEmail.textContent = "";
    }
    if (!Password){
        errorPassword.textContent = "fill in field!";
        valid = false;
    } else {
        errorPassword.textContent = "";
    }

    if (valid){
        alert("signed you up successfully");
    } else {
        event.preventDefault();
    }
});