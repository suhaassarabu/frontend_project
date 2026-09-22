function doLogin(){
  const u = document.getElementById('loginUser').value.trim();
  const p = document.getElementById('loginPass').value;
  const out = document.getElementById('output');
  if(!u || !p){ out.textContent = "Both fields are required."; return false; }
  if(p.length < 6){ out.textContent = "Password too short (min 6 chars)."; return false; }
  out.textContent = "Login successful (demo only)!";
  return false;
}
