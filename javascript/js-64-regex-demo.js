function run(){
  const s = document.getElementById('s').value;
  const numbers = s.match(/\d+(\.\d+)?/g);
  document.getElementById('output').textContent = "Numbers found: " + (numbers ? numbers.join(", ") : "none");
}
