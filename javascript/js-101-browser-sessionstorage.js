function saveSS(){
  sessionStorage.setItem('value', document.getElementById('ssInput').value);
  document.getElementById('ssOut').textContent = "Saved to sessionStorage.";
}
function loadSS(){
  document.getElementById('ssOut').textContent = "Stored value: " + (sessionStorage.getItem('value') || "(none)");
}
