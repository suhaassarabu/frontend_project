function validateAll(){
  const name = document.getElementById('v_name').value.trim();
  const email = document.getElementById('v_email').value.trim();
  const phone = document.getElementById('v_phone').value.trim();
  const pass = document.getElementById('v_pass').value;
  const out = document.getElementById('output');
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRe = /^\d{10}$/;
  if(!name){ out.textContent = "Name required."; return false; }
  if(!emailRe.test(email)){ out.textContent = "Invalid email."; return false; }
  if(!phoneRe.test(phone)){ out.textContent = "Phone must be 10 digits."; return false; }
  if(pass.length < 6){ out.textContent = "Password must be at least 6 characters."; return false; }
  out.textContent = "All fields are valid!";
  return false;
}
