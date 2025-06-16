// Replace with your backend deployment URL
const backendURL = 'https://school-management-system-0zd9.onrender.com';

const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const message = document.getElementById('message');

if (loginForm) {
  loginForm.onsubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const res = await fetch(backendURL + '/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok) {
      window.location.href = "dashboard.html";
    } else {
      message.textContent = data.error;
    }
  };
}

if (signupForm) {
  signupForm.onsubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const role = document.getElementById('signupRole').value;
    const res = await fetch(backendURL + '/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, role })
    });
    const data = await res.json();
    message.textContent = data.message || data.error;
  };
}
