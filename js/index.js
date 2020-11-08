function login() {
    username = document.getElementById("username-input").value; 
    password = document.getElementById("password-input").value;
    loginError = document.getElementById("login-error-msg"); 
    findUser(); 
}

function findUser() {
    if (username == "user" && password == "pass") {
        window.location.href = "main.html"; 
    }
    else {
        loginError.style.opacity = 1; 
    }
}