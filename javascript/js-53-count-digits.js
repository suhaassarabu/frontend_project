function run(){
  const n = document.getElementById('n').value.replace('-','');
  document.getElementById('output').textContent = "Number of digits: " + n.length;
}
