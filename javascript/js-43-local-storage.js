function save(){
  localStorage.setItem('myNote', document.getElementById('lsInput').value);
  document.getElementById('output').textContent = "Saved to localStorage!";
}
function load(){
  const val = localStorage.getItem('myNote');
  document.getElementById('output').textContent = val ? "Loaded: " + val : "No data saved yet.";
}
function clearLS(){ localStorage.removeItem('myNote'); document.getElementById('output').textContent = "Cleared."; }
