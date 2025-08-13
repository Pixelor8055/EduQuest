// ---------- REALISTIC LOGIN (FRONTEND) ----------
document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const username = e.target[0].value;
  const password = e.target[1].value;

  if(username && password){
    // Store username in LocalStorage
    localStorage.setItem('eduUsername', username);
    alert(`Welcome, ${username}! Enjoy EduQuest.`);
    window.location.href = 'features.html';
  } else {
    alert('Please enter a valid username and password.');
  }
});
