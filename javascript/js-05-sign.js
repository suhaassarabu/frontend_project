function run(){
  const n = Number(document.getElementById('n').value);
  let result = n > 0 ? "Positive" : (n < 0 ? "Negative" : "Zero");
  document.getElementById('output').textContent = n + " is " + result;
}
