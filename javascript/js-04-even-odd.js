function run(){
  const n = Number(document.getElementById('n').value);
  document.getElementById('output').textContent = n + " is " + (n % 2 === 0 ? "Even" : "Odd");
}
