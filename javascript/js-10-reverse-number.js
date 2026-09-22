function run(){
  const n = document.getElementById('n').value;
  document.getElementById('output').textContent = "Reversed: " + n.split('').reverse().join('');
}
