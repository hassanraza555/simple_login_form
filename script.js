const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username === '' || password === '') {
    errorMessage.textContent = 'Please fill in both fields.';
  } else {
    errorMessage.textContent = '';
    alert('Login successful!\nUsername: ' + username);
    // Add further login logic here
  }
});
