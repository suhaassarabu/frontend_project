function saveLS(){
  localStorage.setItem('note', document.getElementById('lsInput').value);
  document.getElementById('lsOut').textContent = "Saved to localStorage.";
}
function loadLS(){
  document.getElementById('lsOut').textContent = "Stored value: " + (localStorage.getItem('note') || "(none)");
}
