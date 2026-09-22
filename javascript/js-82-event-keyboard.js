const input = document.getElementById('keyInput');
input.addEventListener('keydown', e=>{
  document.getElementById('keyOut').textContent = "Key down: " + e.key;
});
