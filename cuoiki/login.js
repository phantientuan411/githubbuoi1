// Lưu tài khoản trong localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];

function toggleForm(form) {
  document.getElementById('login-form').classList.toggle('hidden', form !== 'login');
  document.getElementById('signup-form').classList.toggle('hidden', form !== 'signup');
}

function signup() {
  const username = document.getElementById('signup-username').value.trim();
  const password = document.getElementById('signup-password').value.trim();

  if (!username || !password) {
    alert('Please fill in all fields!');
    return;
  }

  const userExists = users.some(user => user.username === username);
  if (userExists) {
    alert('Username already exists. Please choose another one.');
    return;
  }

  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Account created successfully!');
  toggleForm('login');
}

function login() {
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if (!username || !password) {
    alert('Please fill in all fields!');
    return;
  }

  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    alert('Login successful!');
    // Điều hướng về trang trước đó (nếu có)
    if (document.referrer) {
      window.location.href = document.referrer;
    } else {
      alert('Redirecting to the previous page...');
    }
  } else {
    alert('Invalid username or password.');
  }
}