function gcd(a,b){ return b === 0 ? a : gcd(b, a % b); }
function run(){
  const a = Number(document.getElementById('a').value), b = Number(document.getElementById('b').value);
  document.getElementById('output').textContent = "LCM: " + (a*b)/gcd(a,b);
}
