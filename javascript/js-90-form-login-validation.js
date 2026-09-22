function validateLogin(e){
  e.preventDefault();
  const user = document.getElementById('loginUser').value.trim();
  const pass = document.getElementById('loginPass').value;
  const out = document.getElementById('loginOut');
  if(!user || !pass){ out.textContent = "Username and password are required."; return false; }
  if(pass.length < 6){ out.textContent = "Password must be at least 6 characters."; return false; }
  out.textContent = "Login validated for " + user + ".";
  return false;
}
