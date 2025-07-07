function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');

  // Change these credentials as needed
  const correctUsername = "animefan";
  const correctPassword = "12345";

  if (username === correctUsername && password === correctPassword) {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  } else {
    errorMsg.textContent = "Incorrect username or password!";
  }
      }
