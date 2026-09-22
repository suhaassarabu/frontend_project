function run(){
  const s = document.getElementById('s').value.trim();
  const words = s.length ? s.split(/\s+/) : [];
  document.getElementById('output').textContent = "Word count: " + words.length;
}
