function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');

  const correctUsername = "animefan";
  const correctPassword = "2025";

  if (username === correctUsername && password === correctPassword) {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  } else {
    errorMsg.textContent = "Incorrect username or password!";
  }
}
