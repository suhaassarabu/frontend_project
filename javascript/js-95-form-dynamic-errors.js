function validateEmailLive(){
  const val = document.getElementById('dynErrEmail').value;
  const errEl = document.getElementById('emailErr');
  if(val === ""){ errEl.textContent = ""; return; }
  const valid = /^[^@]+@[^@]+\.[^@]+$/.test(val);
  errEl.textContent = valid ? "Looks good!" : "Invalid email format.";
  errEl.style.color = valid ? "#22c55e" : "#ef4444";
}
