function validateReg(e){
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const roll = document.getElementById('regRoll').value.trim();
  const out = document.getElementById('regOut');
  if(!name || !email || !roll){ out.textContent = "All fields are required."; return false; }
  if(!/^[^@]+@[^@]+\.[^@]+$/.test(email)){ out.textContent = "Invalid email address."; return false; }
  out.textContent = "Registration successful for " + name + "!";
  return false;
}
