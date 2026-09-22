function run(){
  const s = document.getElementById('s').value;
  document.getElementById('output').textContent = "Reversed: " + s.split('').reverse().join('');
}
