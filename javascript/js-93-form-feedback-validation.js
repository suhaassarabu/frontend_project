function validateFeedback(e){
  e.preventDefault();
  const name = document.getElementById('fbName').value.trim();
  const msg = document.getElementById('fbMsg').value.trim();
  const out = document.getElementById('fbOut');
  if(!name || !msg){ out.textContent = "Please fill in all fields."; return false; }
  out.textContent = "Thank you for your feedback, " + name + "!";
  return false;
}
