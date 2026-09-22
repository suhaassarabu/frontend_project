function validateSignup(e){
  e.preventDefault();
  const pass = document.getElementById('signupPass').value;
  const confirm = document.getElementById('signupConfirm').value;
  const out = document.getElementById('signupOut');
  if(pass !== confirm){ out.textContent = "Passwords do not match."; return false; }
  if(pass.length < 6){ out.textContent = "Password too short."; return false; }
  out.textContent = "Signup successful!";
  return false;
}
