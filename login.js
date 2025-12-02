const loginForm = document.getElementById("loginForm");
if(loginForm){
    loginForm.onsubmit = e => {
        e.preventDefault();
        const u = document.getElementById("username").value;
        const p = document.getElementById("password").value;
        if(u === "admin" && p === "admin"){
            alert("Login successful!");
            location.href = "ecommerce.html";
        } else {
            document.getElementById("error").innerText = "Invalid credentials!";
        }
    };
}

document.getElementById("loginBtn")?.addEventListener("click", () => location.href="login.html");
document.getElementById("signupBtn")?.addEventListener("click", () => location.href="signup.html");