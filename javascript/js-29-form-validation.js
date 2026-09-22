function validateForm(){
  const name = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const out = document.getElementById('output');
  if(name === ""){ out.textContent = "Name is required."; return false; }
  if(!email.includes('@')){ out.textContent = "Enter a valid email."; return false; }
  out.textContent = "Form submitted successfully!";
  return false;
}
