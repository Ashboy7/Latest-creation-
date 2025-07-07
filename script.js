function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('error-msg');

  const validUsername = "musicfan";
  const validPassword = "12345";

  if (username === validUsername && password === validPassword) {
    document.getElementById('login-container').style.display = "none";
    document.getElementById('main-content').style.display = "block";
  } else {
    errorMsg.textContent = "Incorrect username or password.";
  }
}
